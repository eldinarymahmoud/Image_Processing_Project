import utilities from './utilities/utilities';
import express from "express";

const images = express.Router();

images.get("/resize", async (req : express.Request, res:express.Response)=> {
  // Reading the URL as a query and transform it into TSobjects
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  // call the resize function
    const Promise = await utilities.resizeImage(filename, width, height);
    res.sendFile(Promise);
});


export default images;
