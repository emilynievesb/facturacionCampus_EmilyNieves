import { Router } from "express";
import {
  obtenerMedicamentoCaroController,
  obtenerMedicamentosCaducen2023Controller,
  obtenerMedicamentosProveedor1Controller,
  obtenerMedicamentosProveedorController,
  obtenerMedicamentosProveedoresController,
  obtenerPacientesParacetamolController,
  obtenerRecetas2023Controller,
  obtenerRecetasDraController,
  obtenerVentasParacetamolController,
  obtenerVentasTotalController,
  oobtenerStockMenorController,
} from "../controllers/getController.js";
import { limitPets, limitSize } from "../utils/limit.js";
import {
  authorizationMiddleware,
  contentMiddlewareFacturaVenta,
  contentMiddlewareInventarios,
  contentMiddlewareMedicamentos,
  contentMiddlewareRecetas,
} from "../utils/token.js";

const getInitRoute = () => {
  const router = Router();
  //!1. Obtener todos los medicamentos con menos de 50 unidades en stock
  router.get(
    "/obtenerStockMenor",
    limitPets,
    limitSize,
    //validación rol,
    authorizationMiddleware,
    contentMiddlewareInventarios,
    oobtenerStockMenorController
  );
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
  //!6. Medicamentos que caducan antes del 1 de enero de 2024
  router.get(
    "/obtenerMedicamentosCaducan2023",
    limitPets,
    limitSize,
    //validación rol,
    authorizationMiddleware,
    contentMiddlewareMedicamentos,
    obtenerMedicamentosCaducen2023Controller
  );
  //!7. Total de medicamentos vendidos por cada proveedor
  router.get(
    "/obtenerMedicamentosPorProveedor",
    limitPets,
    limitSize,
    //validación rol,
    authorizationMiddleware,
    contentMiddlewareFacturaVenta,
    obtenerMedicamentosProveedorController
  );
  //!8. Cantidad total de dinero recaudado por las ventas de medicamentos
  router.get(
    "/obtenerVentasTotal",
    limitPets,
    limitSize,
    //validación rol,
    authorizationMiddleware,
    contentMiddlewareFacturaVenta,
    obtenerVentasTotalController
  );
  //!9. Recetas prescritas por el Dr. Martínez
  router.get(
    "/obtenerRecetasDra",
    limitPets,
    limitSize,
    //validación rol,
    authorizationMiddleware,
    contentMiddlewareRecetas,
    obtenerRecetasDraController
  );
  //!11. Obtener el medicamento más caro
  router.get(
    "/obtenerMedicamentoCaro",
    limitPets,
    limitSize,
    //validación rol,
    authorizationMiddleware,
    contentMiddlewareMedicamentos,
    obtenerMedicamentoCaroController
  );
  //!13. Pacientes que han comprado Paracetamol
  router.get(
    "/obtenerPacientesParacetamol",
    limitPets,
    limitSize,
    //validación rol,
    authorizationMiddleware,
    contentMiddlewareFacturaVenta,
    obtenerPacientesParacetamolController
  );
  return router;
};

export { getInitRoute };
