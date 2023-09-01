import { Empleado } from "./postServices.js";

const eliminarEmpleadoService = async (id) => {
  const empleado = new Empleado();
  return await empleado.eliminarEmpleado(id);
};
export { eliminarEmpleadoService };
