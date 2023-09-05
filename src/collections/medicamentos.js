import { connection, startTransaction } from "../utils/connect.js";

class Medicamentos {
  idMedicamento;
  nombreComercial;
  idProveedor;
  nomeroLote;
  fechaCaducidad;
  precioUnidad;
  constructor() {
    this.idMedicamento = "AUTORIZACIÓN TABLA MEDICAMENTOS";
  }
  async connect() {
    try {
      const result = await connection("medicamentos");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async obtenerMedicamentosProveedores() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $lookup: {
              from: "proveedores",
              localField: "idProveedor",
              foreignField: "idProveedor",
              as: "DatosProveedor",
            },
          },
          { $unwind: "$DatosProveedor" },
          {
            $project: {
              Medicamento: {
                IdMedicamento: "$idMedicamento",
                NombreComercial: "$nombreComercial",
                Lote: "$numeroLote",
                FechaCaducidad: "$fechaCaducidad",
                PrecioUnitario: "$precioUnidad",
              },
              DatosProveedor: {
                NIT: "$DatosProveedor.nit",
                RazonSocial: "$DatosProveedor.razonSocial",
                Direccion: "$DatosProveedor.direccion",
                Telefono: "$DatosProveedor.telefono",
              },
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
  async obtenerMedicamentosProveedor1() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $lookup: {
              from: "proveedores",
              localField: "idProveedor",
              foreignField: "idProveedor",
              as: "DatosProveedor",
            },
          },

          { $unwind: "$DatosProveedor" },
          {
            $project: {
              Medicamento: {
                IdMedicamento: "$idMedicamento",
                NombreComercial: "$nombreComercial",
                Lote: "$numeroLote",
                FechaCaducidad: "$fechaCaducidad",
                PrecioUnitario: "$precioUnidad",
              },
              NITProveedor: "$DatosProveedor.nit",
              RazonSocialProveedor: "$DatosProveedor.razonSocial",
              DireccionProveedor: "$DatosProveedor.direccion",
              TelefonoProveedor: "$DatosProveedor.telefono",
            },
          },
          {
            $match: {
              RazonSocialProveedor: "Proveedor 1",
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
  async obtenerMedicamentosVencen2024() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              fechaCaducidad: { $lt: new Date("2024-01-01") },
            },
          },
          {
            $project: {
              Medicamento: {
                IdMedicamento: "$idMedicamento",
                NombreComercial: "$nombreComercial",
                Lote: "$numeroLote",
                FechaCaducidad: "$fechaCaducidad",
                PrecioUnitario: "$precioUnidad",
              },
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
export { Medicamentos };
