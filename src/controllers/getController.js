import { obtenerEmpleadoService } from "../services/getServices";

const obtenerEmpleadosController = async (req, res, next) => {
  try {
    const { id } = req.query;
    let result;
    const consulta = await obtenerEmpleadoService(id);
    result = consulta;
    res.status(200).json({
      message: `se han encontrado ${result.length} resultados`,
      result,
    });
  } catch (error) {
    res.status(500).json(error.stack);
  }
};
export { obtenerEmpleadosController };
