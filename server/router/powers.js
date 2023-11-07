const powerRouter = require("express").Router({ mergeParams: true });
const PowerController = require("../controllers/powerController");

powerRouter
    .route("/")
    .get(PowerController.getHeroPowers)
    .post(PowerController.addHeroPowers);

powerRouter.route("/:powerId").delete(PowerController.deletePower);

module.exports = powerRouter;
