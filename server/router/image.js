const imageRouter = require("express").Router({ mergeParams: true });
const imageController = require("../controllers/imageController");
const { uploadImages } = require("../utils/fileUpload");

imageRouter
    .route("/")
    .get(imageController.getHeroImages)
    .post(uploadImages, imageController.addHeroImages);

imageRouter
    .route("/:imageId")
    .get(imageController.getImage)
    .delete(imageController.deleteImage);

module.exports = imageRouter;
