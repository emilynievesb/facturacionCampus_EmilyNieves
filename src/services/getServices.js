import { Empleado } from "../colections/prueba.js";

const obtenerEmpleadoService = async (id) => {
  const empleado = new Empleado();
  return await empleado.obtenerEmpleado(id);
};
export { obtenerEmpleadoService };
