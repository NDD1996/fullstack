import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initwebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/crud", homeController.getCrud);
    router.post("/post-crud", homeController.postCrud);
    router.get("/listCrud", homeController.listCrud);
    router.get("/getInfo/:id", homeController.getInfo);
    router.post("/updateCrud", homeController.updateCrud);
    router.get("/deleteUser/:id", homeController.deleteUser);
    return app.use("/", router);
}  

module.exports = initwebRoutes;