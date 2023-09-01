import autoIncrementID from "../utils/autoIncrement.js";
import { connection, startTransaction } from "../utils/connect.js";

class Empleado {
  id;
  nombre;
  fecha_contratacion;
  id_seguimiento;
  idPuesto;
  salario;
  session;

  constructor() {}

  async connect() {
    try {
      const result = await connection("empleados");
      return result;
    } catch (error) {
      throw error;
    }
  }

  async obtenerEmpleados() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection //consulta aggregate
        .toArray();
      await this.session.commitTransaction();
      return resultado;
    } catch (error) {
      if (this.session) {
        await this.session.abortTransaction();
      }
      throw error;
    } finally {
      if (this.session) {
        this.session.endSession();
      }
    }
  }

  async obtenerEmpleado(empleadoId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection
        //consulta aggregate match
        .toArray();
      await this.session.commitTransaction();
      return resultado;
    } catch (error) {
      if (this.session) {
        await this.session.abortTransaction();
      }
      throw error;
    } finally {
      if (this.session) {
        this.session.endSession();
      }
    }
  }

  async agregarEmpleado() {
    try {
      const incremental = await autoIncrementID("empleados");
      const { id, session: newSession } = incremental;
      this.session = newSession;
      const connection = await this.connect();
      const resultado = await connection;
      //insert one
      await this.session.commitTransaction();
      return resultado;
    } catch (error) {
      if (this.session) {
        await this.session.abortTransaction();
      }
      throw error;
    } finally {
      if (this.session) {
        this.session.endSession();
      }
    }
  }

  async actualizarEmpleado() {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection;
      //update one
      await this.session.commitTransaction();
      return resultado;
    } catch (error) {
      if (this.session) {
        await this.session.abortTransaction();
      }
      throw error;
    } finally {
      if (this.session) {
        this.session.endSession();
      }
    }
  }

  async eliminarEmpleado(empleadoId) {
    try {
      this.session = await startTransaction();
      const connection = await this.connect();
      const resultado = await connection;
      //delete one
      await this.session.commitTransaction();
      return resultado;
    } catch (error) {
      if (this.session) {
        await this.session.abortTransaction();
      }
      throw error;
    } finally {
      if (this.session) {
        this.session.endSession();
      }
    }
  }
}

export { Empleado };
