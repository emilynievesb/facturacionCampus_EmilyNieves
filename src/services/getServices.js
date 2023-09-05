import { FacturaVenta } from "../collections/facturaVenta.js";
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
const obtenerVentasParacetamol = async () => {
  const facturaVenta = new FacturaVenta();
  return await facturaVenta.obtenerVentasParacetamol();
};

export {
  obtenerMedicamentosProveedores,
  obtenerMedicamentosProveedor1,
  obtenerRecetas2023,
  obtenerVentasParacetamol,
};
