import { Router } from "express";
import { obtenerMedicamentosProveedoresController } from "../controllers/getController.js";

const getInitRoute = () => {
  const router = Router();
  //! 2.Listar los proveedores con su información de contacto en medicamentos
  router.get("/obtenerProveedores", obtenerMedicamentosProveedoresController);
  return router;
};

export { getInitRoute };
