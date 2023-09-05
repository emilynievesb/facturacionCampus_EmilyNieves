import { Medicamentos } from "../collections/medicamentos.js";
import { Recetas } from "../collections/recetas.js";

const obtenerMedicamentosProveedores = async () => {
  const medicamentos = new Medicamentos();
  return await medicamentos.obtenerMedicamentosProveedores();
};
const obtenerMedicamentosProveedor1 = async () => {
  const medicamentos = new Medicamentos();
  return await medicamentos.obtenerMedicamentosProveedor1();
};
const obtenerRecetas2023 = async () => {
  const receta = new Recetas();
  return await receta.obtenerRecetas2023();
};
export {
  obtenerMedicamentosProveedores,
  obtenerMedicamentosProveedor1,
  obtenerRecetas2023,
};
