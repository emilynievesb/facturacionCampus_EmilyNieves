import { connection, startTransaction } from "../utils/connect.js";

class FacturaVenta {
  idFactura;
  idEmpleado;
  fecha;
  idReceta;
  total;
  constructor() {
    this.idEmpleado = "AUTORIZACION TABLA FACTURA VENTA";
  }
  async connect() {
    try {
      const result = await connection("facturaVenta");
      return result;
    } catch (error) {
      throw error;
    }
  }

  async obtenerVentasParacetamol() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $lookup: {
              from: "recetas",
              localField: "idReceta",
              foreignField: "idReceta",
              as: "DatosReceta",
            },
          },
          { $unwind: "$DatosReceta" },
          {
            $lookup: {
              from: "medicamentos",
              localField: "DatosReceta.medicamentos.idMedicamento",
              foreignField: "idMedicamento",
              as: "DatosMedicamentos",
            },
          },
          { $unwind: "$DatosMedicamentos" },
          {
            $project: {
              MedicamentoNombre: "$DatosMedicamentos.nombreComercial",
            },
          },
          {
            $match: { MedicamentoNombre: "Paracetamol" },
          },
          {
            $count: "totalVentas",
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
  async obtenerVentasTotal() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $group: {
              _id: null,
              totalDineroDolares: { $sum: "$total" },
            },
          },
          { $project: { _id: 0 } },
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
export { FacturaVenta };
