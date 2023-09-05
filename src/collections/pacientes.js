import { connection, startTransaction } from "../utils/connect.js";

class Pacientes {
  idPaciente;
  documento;
  nombreCompleto;
  fechaNacimiento;
  direccion;
  telefono;
  constructor() {}
  async connect() {
    try {
      const result = await connection("pacientes");
      return result;
    } catch (error) {
      throw error;
    }
  }
}
export { Pacientes };
