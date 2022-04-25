import sharp from "sharp";
import fs from "fs";
import path from 'path';

// Resizing images
async function resizeImage(
    filename: string,
    width: number,
    height: number
  ): Promise<string> {
    // Check if the image has been processed earlier (by processed filename) to retrieve the process and do nothing
    if (
      !fs.existsSync(
        path.resolve(__dirname, `../../../.././images/resized_images/${filename}_${width}_${height}.jpg`)
      )
    ) {
      try {
        // Resizing image and write it in the resized_images folder
        await sharp(path.resolve(__dirname, `../../../.././images/full_images/${filename}.jpg`))
          .resize(width, height, { position: "center" })
          .toFile((path.resolve(
            __dirname , `../../../.././images/resized_images/${filename}_${width}_${height}.jpg`))
          );
        return (path.resolve(
          __dirname, `../../../.././images/resized_images/${filename}_${width}_${height}.jpg`)
        );
      } catch (error) {
        if(width <=0 || height <=0){
          return (path.resolve(
            __dirname, `../../../.././errors/invalid_parameters_error.html`));
        }

        if (
          !fs.existsSync(
            path.resolve(__dirname, `../../../.././images/resized_images/${filename}_${width}_${height}.jpg`)
          )
        ){
          return (path.resolve(
            __dirname, `../../../.././errors/invalid_filename_error.html`));
        }           
      }
    }
    return (path.resolve(
      __dirname, `../../../.././images/resized_images/${filename}_${width}_${height}.jpg`)
    );
  }
  
  export = {resizeImage};
