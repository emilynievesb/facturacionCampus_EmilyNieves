import { Medicamentos } from "../collections/medicamentos.js";

const obtenerMedicamentosProveedores = async () => {
  const medicamentos = new Medicamentos();
  return await medicamentos.obtenerMedicamentosProveedores();
};
const obtenerMedicamentosProveedor1 = async () => {
  const medicamentos = new Medicamentos();
  return await medicamentos.obtenerMedicamentosProveedor1();
};
export { obtenerMedicamentosProveedores, obtenerMedicamentosProveedor1 };
