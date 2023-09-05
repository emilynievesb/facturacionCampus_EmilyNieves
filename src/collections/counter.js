import { connection, startTransaction } from "../utils/connect.js";

class Counters {
  constructor() {}
  async connect() {
    try {
      const result = await connection("counters");
      return result;
    } catch (error) {
      throw error;
    }
  }
}
export { Counters };
