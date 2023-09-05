import {
  obtenerMedicamentosCaducen2023,
  obtenerMedicamentosProveedor1,
  obtenerMedicamentosProveedores,
  obtenerRecetas2023,
  obtenerStockMenor,
  obtenerVentasParacetamol,
} from "../services/getServices.js";

const obtenerMedicamentosProveedoresController = async (req, res, next) => {
  try {
    let result;
    const consulta = await obtenerMedicamentosProveedores();
    result = consulta;
    res.status(200).json({
      message: `se han encontrado ${result.length} resultados`,
      result,
    });
  } catch (error) {
    res.status(500).json(error.stack);
  }
};

const obtenerMedicamentosProveedor1Controller = async (req, res, next) => {
  try {
    let result;
    const consulta = await obtenerMedicamentosProveedor1();
    result = consulta;
    res.status(200).json({
      message: `se han encontrado ${result.length} resultados`,
      result,
    });
  } catch (error) {
    res.status(500).json(error.stack);
  }
};

const obtenerRecetas2023Controller = async (req, res, next) => {
  try {
    let result;
    const consulta = await obtenerRecetas2023();
    result = consulta;
    res.status(200).json({
      message: `se han encontrado ${result.length} resultados`,
      result,
    });
  } catch (error) {
    res.status(500).json(error.stack);
  }
};

const obtenerVentasParacetamolController = async (req, res, next) => {
  try {
    let result;
    const consulta = await obtenerVentasParacetamol();
    result = consulta;
    res.status(200).json({
      message: `se han encontrado ${result.length} resultados`,
      result,
    });
  } catch (error) {
    res.status(500).json(error.stack);
  }
};

const oobtenerStockMenorController = async (req, res, next) => {
  try {
    let result;
    const consulta = await obtenerStockMenor();
    result = consulta;
    res.status(200).json({
      message: `se han encontrado ${result.length} resultados`,
      result,
    });
  } catch (error) {
    res.status(500).json(error.stack);
  }
};

const obtenerMedicamentosCaducen2023Controller = async (req, res, next) => {
  try {
    let result;
    const consulta = await obtenerMedicamentosCaducen2023();
    result = consulta;
    res.status(200).json({
      message: `se han encontrado ${result.length} resultados`,
      result,
    });
  } catch (error) {
    res.status(500).json(error.stack);
  }
};
export {
  obtenerMedicamentosProveedoresController,
  obtenerMedicamentosProveedor1Controller,
  obtenerRecetas2023Controller,
  obtenerVentasParacetamolController,
  oobtenerStockMenorController,
  obtenerMedicamentosCaducen2023Controller,
};
