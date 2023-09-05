import { connection, startTransaction } from "../utils/connect.js";

class Medicos {
  idMedico;
  documento;
  nombre;
  apellido;
  fechaNacimiento;
  direccion;
  telefono;
  constructor() {}
  async connect() {
    try {
      const result = await connection("medicos");
      return result;
    } catch (error) {
      throw error;
    }
  }
}
export { Medicos };
