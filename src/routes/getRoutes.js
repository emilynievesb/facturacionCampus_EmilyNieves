import { Router } from "express";
import { obtenerMedicamentosProveedoresController } from "../controllers/getController.js";
import { limitPets, limitSize } from "../utils/limit.js";
import {
  authorizationMiddleware,
  contentMiddlewareMedicamentos,
} from "../utils/token.js";

const getInitRoute = () => {
  const router = Router();
  //! 2.Listar los proveedores con su información de contacto en medicamentos
  router.get(
    "/obtenerProveedores",
    limitPets,
    limitSize,
    //validación rol,
    authorizationMiddleware,
    contentMiddlewareMedicamentos,
    obtenerMedicamentosProveedoresController
  );
  return router;
};

export { getInitRoute };
