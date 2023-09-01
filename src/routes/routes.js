import { Router } from "express";
// import { postInitRoute } from "./postRoutes.js";
// import { getInitRoute } from "./getRoutes.js";
// import { deleteRoute } from "./deleteRoutes.js";
import { putInitRoute } from "./putRoutes.js";
import { appToken } from "../utils/token.js";

const v1Routes = () => {
  const router = Router();
  //   router.use("/get", middlewareRateLimit, getInitRoute());
  //   router.use("/post", middlewareRateLimit, postInitRoute());
  return router;
};

const v2Routes = () => {
  const router = Router();
  router.use("/put", putInitRoute());
  //   router.use("/delete", middlewareRateLimit, deleteRoute());
  return router;
};

const initRoute = () => {
  const router = Router();
  router.use("/token", appToken);
};

export { v1Routes, v2Routes, initRoute };
