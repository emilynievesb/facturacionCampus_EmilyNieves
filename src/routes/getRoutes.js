import { Router } from "express";
import {
  obtenerMedicamentosProveedor1Controller,
  obtenerMedicamentosProveedoresController,
  obtenerRecetas2023Controller,
} from "../controllers/getController.js";
import { limitPets, limitSize } from "../utils/limit.js";
import {
  authorizationMiddleware,
  contentMiddlewareMedicamentos,
  contentMiddlewareRecetas,
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
  //!3. Medicamentos comprados al 'Proveedor A'
  router.get(
    "/obtenerMedicamentosProveedor",
    limitPets,
    limitSize,
    //validación rol,
    authorizationMiddleware,
    contentMiddlewareMedicamentos,
    obtenerMedicamentosProveedor1Controller
  );
  router.get(
    "/obtenerRecetas2023",
    limitPets,
    limitSize,
    //validación rol,
    authorizationMiddleware,
    contentMiddlewareRecetas,
    obtenerRecetas2023Controller
  );
  return router;
};

export { getInitRoute };
