import { connection, startTransaction } from "../utils/connect.js";

class Empleados {
  idEmpleado;
  documento;
  credencial;
  nombreCompleto;
  fechaNacimiento;
  direccion;
  telefono;
  rol;
  constructor() {}
  async connect() {
    try {
      const result = await connection("empleados");
      return result;
    } catch (error) {
      throw error;
    }
  }
}
export { Empleados };
