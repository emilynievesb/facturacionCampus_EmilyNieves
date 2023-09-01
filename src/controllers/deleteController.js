import { eliminarEmpleadoService } from "../services/deleteServices.js";

const eliminarEmpleadoController = async (req, res, next) => {
  try {
    const { id } = req.query;
    const result = await eliminarEmpleadoService(id);
    if (result.deletedCount == 0) {
      res.status(500).json({
        message: `no se ha encontrado ningun registro de id ${id}`,
        result,
      });
    } else {
      res.status(200).json({
        message: `se ha eliminado el registro de id ${id} con exito`,
        result,
      });
    }
  } catch (error) {
    res.status(500).json(error.stack);
  }
};
export { eliminarEmpleadoController };
