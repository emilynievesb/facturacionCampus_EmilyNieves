import { Empleado } from "../colections/prueba.js";

const agregarEmpleado = async (
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
    empleado.fecha_contratacion = fecha_contratacion;
    empleado.id_seguimiento = id_seguimiento;
    empleado.idPuesto = idPuesto;
    empleado.salario = salario;

    const resultado = await empleado.agregarEmpleado();
    if (resultado.insertedId) {
      return "Empleado creado correctamente";
    }
  } catch (error) {
    throw error;
  }
};
export { agregarEmpleado };
