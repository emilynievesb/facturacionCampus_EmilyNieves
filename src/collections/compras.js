import { connection, startTransaction } from "../utils/connect.js";

class Compras {
  idFactura;
  fecha;
  idMedicamento;
  unidadesMedicamento;
  precioCompra;
  total;
  constructor() {}
  async connect() {
    try {
      const result = await connection("compras");
      return result;
    } catch (error) {
      throw error;
    }
  }
}
export { Compras };
