import { Router } from "express";
import { actualizarEmpleadoController } from "../controllers/putControllers.js";

const putInitRoute = () => {
  const router = Router();
  router.put(
    "/actualizarEmpleado",
    limitPets,
    limitSize,
    //validación rol,
    authorizationMiddleware,
    contentMiddlewareEquipo,
    actualizarEmpleadoController
  );
  return router;
};

export { putInitRoute };
