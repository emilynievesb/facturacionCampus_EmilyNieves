import { db } from "./config.js";
import { MongoClient } from "mongodb";

let dbConnection = null;

async function connectionDB() {
  if (dbConnection) {
    return dbConnection;
  }
  try {
    const url = `mongodb+srv://${db.user}:${db.pass}@cluster0.wibpscy.mongodb.net/${db.dbname}`;
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    const client = await MongoClient.connect(url, options);
    dbConnection = client.db();
    return dbConnection;
  } catch (error) {
    return { status: 500, message: error };
  }
}
const connection = async (coleccion) => {
  const db = await connectionDB();
  const newCollection = db.collection(coleccion);
  return newCollection;
};

const startTransaction = async () => {
  const db = await connectionDB();
  const session = db.client.startSession();
  session.startTransaction();
  return session;
};

export { connection, startTransaction };
