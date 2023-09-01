import { Empleado } from "./postServices.js";

const actualizarEmpleado = async (
  id,
  nombre,
  fecha_contratacion,
  id_seguimiento,
  idPuesto,
  salario
) => {
  try {
    const empleado = new Empleado();
    empleado.id = id;
    empleado.nombre = nombre;
    empleado.fecha_contratacion = new Date(fecha_contratacion);
    empleado.id_seguimiento = id_seguimiento;
    empleado.idPuesto = idPuesto;
    empleado.salario = salario;

    const resultado = await empleado.actualizarEmpleado();
    if (resultado.modifiedCount > 0) {
      return "Empleado actualizado correctamente";
    } else {
      return "No se encontró el empleado o no se realizaron cambios";
    }
  } catch (error) {
    throw error;
  }
};

export { actualizarEmpleado };
