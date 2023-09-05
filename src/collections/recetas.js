import { connection, startTransaction } from "../utils/connect.js";

class Recetas {
  idReceta;
  fechaReceta;
  idPaciente;
  idMedico;
  medicamentos;
  constructor() {
    this.idReceta = "AUTORIZACION COLECCION RECETAS";
  }
  async connect() {
    try {
      const result = await connection("recetas");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async obtenerRecetas2023() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $match: {
              fechaReceta: { $gt: new Date("2023-01-01") },
            },
          },
          {
            $lookup: {
              from: "pacientes",
              localField: "idPaciente",
              foreignField: "idPaciente",
              as: "DatosPacientes",
            },
          },
          { $unwind: "$DatosPacientes" },
          {
            $lookup: {
              from: "medicos",
              localField: "idMedico",
              foreignField: "idMedico",
              as: "DatosMedico",
            },
          },
          { $unwind: "$DatosMedico" },
          {
            $lookup: {
              from: "medicamentos",
              localField: "medicamentos.idMedicamento",
              foreignField: "idMedicamento",
              as: "DatosMedicamentos",
            },
          },
          { $unwind: "$DatosMedicamentos" },
          {
            $project: {
              Receta: "$idReceta",
              Fecha: "$fechaReceta",
              Paciente: "$DatosPacientes.nombreCompleto",
              NombreMedico: "$DatosMedico.nombre",
              ApellidoMedico: "$DatosMedico.apellido",
              Medicamentos: {
                NombreMedicamento: "$DatosMedicamentos.nombreComercial",
                Cantidad: "$cantidad",
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
  async obtenerRecetasDra() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        .aggregate([
          {
            $lookup: {
              from: "pacientes",
              localField: "idPaciente",
              foreignField: "idPaciente",
              as: "DatosPacientes",
            },
          },
          { $unwind: "$DatosPacientes" },
          {
            $lookup: {
              from: "medicos",
              localField: "idMedico",
              foreignField: "idMedico",
              as: "DatosMedico",
            },
          },
          { $unwind: "$DatosMedico" },
          {
            $lookup: {
              from: "medicamentos",
              localField: "medicamentos.idMedicamento",
              foreignField: "idMedicamento",
              as: "DatosMedicamentos",
            },
          },
          { $unwind: "$DatosMedicamentos" },
          {
            $project: {
              Receta: "$idReceta",
              Fecha: "$fechaReceta",
              Paciente: "$DatosPacientes.nombreCompleto",
              NombreMedico: "$DatosMedico.nombre",
              ApellidoMedico: "$DatosMedico.apellido",
              Medicamentos: {
                NombreMedicamento: "$DatosMedicamentos.nombreComercial",
                Cantidad: "$cantidad",
              },
            },
          },
          {
            $match: {
              ApellidoMedico: "Martínez",
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
export { Recetas };
