import { connection, startTransaction } from "../utils/connect.js";

class Proveedores {
  idProveedor;
  nit;
  razonSocial;
  direccion;
  telefono;
  constructor() {}
  async connect() {
    try {
      const result = await connection("proveedores");
      return result;
    } catch (error) {
      throw error;
    }
  }
}
export { Proveedores };
