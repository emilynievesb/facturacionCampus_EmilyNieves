import { Router } from "express";
import {
  obtenerMedicamentosProveedor1Controller,
  obtenerMedicamentosProveedoresController,
  obtenerRecetas2023Controller,
  obtenerVentasParacetamolController,
} from "../controllers/getController.js";
import { limitPets, limitSize } from "../utils/limit.js";
import {
  authorizationMiddleware,
  contentMiddlewareFacturaVenta,
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
  //!4. Obtener recetas médicas emitidas después del 1 de enero de 2023
  router.get(
    "/obtenerRecetas2023",
    limitPets,
    limitSize,
    //validación rol,
    authorizationMiddleware,
    contentMiddlewareRecetas,
    obtenerRecetas2023Controller
  );
  //!5. Total de ventas del medicamento 'Paracetamol'
  router.get(
    "/obtenerVentasParacetamol",
    limitPets,
    limitSize,
    //validación rol,
    authorizationMiddleware,
    contentMiddlewareFacturaVenta,
    obtenerVentasParacetamolController
  );
  return router;
};

export { getInitRoute };
