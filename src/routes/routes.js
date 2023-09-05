import { Router } from "express";
// import { postInitRoute } from "./postRoutes.js";
import { getInitRoute } from "./getRoutes.js";
import { limitPets } from "../utils/limit.js";
import { appToken } from "../utils/token.js";
// import { deleteRoute } from "./deleteRoutes.js";
// import { putInitRoute } from "./putRoutes.js";

const v1Routes = () => {
  const router = Router();
  router.use("/get", getInitRoute());
  //   router.use("/post", postInitRoute());
  return router;
};

const v2Routes = () => {
  const router = Router();
  // router.use("/put", putInitRoute());
  //   router.use("/delete", deleteRoute());
  return router;
};

const initRoute = () => {
  const router = Router();
  router.use("/token", limitPets, appToken);
  return router;
};

export { v1Routes, v2Routes, initRoute };
