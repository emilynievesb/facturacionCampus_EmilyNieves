import { connection, startTransaction } from "../utils/connect.js";

class Inventarios {
  idInventario;
  idMedicamento;
  fechaInventario;
  unidades;
  constructor() {
    this.idInventario = "AUTORIZACIÓN TABLA INVENTARIOS";
  }
  async connect() {
    try {
      const result = await connection("inventarios");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async obtenerStockMenor() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              unidades: { $lt: 50 },
            },
          },
          {
            $lookup: {
              from: "medicamentos",
              localField: "idMedicamento",
              foreignField: "idMedicamento",
              as: "DatosMedicamentos",
            },
          },
          { $unwind: "$DatosMedicamentos" },
          {
            $project: {
              idInventario: "$idInventario",
              Fecha: "$fechaInventario",
              NombreMedicamento: "$DatosMedicamentos.nombreComercial",
              Cantidad: "$unidades",
            },
          },
        ])
        .toArray();
      await this.session.commitTransaction();
      return resultado;
    } catch (error) {
      if (this.session) {
        await this.session.abortTransaction();
      }
      throw error;
    } finally {
      if (this.session) {
        this.session.endSession();
      }
    }
  }
}
export { Inventarios };
