// import express from "express";
// import { initAPIRoutes } from "./routes/routes.js";

// const app = express();
// app.use(express.json()); //! Middleaware para leer json
// app.use("/api", initAPIRoutes());
// export default app;

import express from "express";
import { v1Routes, v2Routes } from "./routes/routes.js";
import routesVersioning from "express-routes-versioning";

const version = routesVersioning();
const app = express();

app.use(express.json()); //! Middleaware para leer json

app.use(
  "/api",
  version({
    "1.0": v1Routes(),
    "2.0": v2Routes(),
  })
);

export default app;
