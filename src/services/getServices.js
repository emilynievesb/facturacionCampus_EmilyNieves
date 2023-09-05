import { FacturaVenta } from "../collections/facturaVenta.js";
import { Inventarios } from "../collections/inventarios.js";
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

const obtenerStockMenor = async () => {
  const stock = new Inventarios();
  return await stock.obtenerStockMenor();
};
const obtenerMedicamentosCaducen2023 = async () => {
  const medicamentos = new Medicamentos();
  return await medicamentos.obtenerMedicamentosVencen2024();
};

const obtenerVentasTotal = async () => {
  const ventas = new FacturaVenta();
  return await ventas.obtenerVentasTotal();
};

const obtenerRecetasDra = async () => {
  const receta = new Recetas();
  return await receta.obtenerRecetasDra();
};
export {
  obtenerMedicamentosProveedores,
  obtenerMedicamentosProveedor1,
  obtenerRecetas2023,
  obtenerVentasParacetamol,
  obtenerStockMenor,
  obtenerMedicamentosCaducen2023,
  obtenerVentasTotal,
  obtenerMedicamentosProveedor,
  obtenerRecetasDra,
};
