import express, { Router } from "express";
import images from "./api/images";

const logger = express.Router();

logger.get("/api", (req, res) => {
  res.send("Image will process when you add /images in the URL");
});

logger.use("/images", images);

export default logger;
