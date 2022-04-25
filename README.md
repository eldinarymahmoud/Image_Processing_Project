# Image Processing App

## Overview
This project is a simple API that resize images with given width and height.

# Technologies used
> This project was developed using typescript/javascript using Node express.

# How it works
> Currently to view the project output, you have to download it locally and use the browser to open it.
> The scripts needed for the project:
    "build": "npx tsc",
    "start": "nodemon src/index.ts",
    "jasmine": "jasmine",
    "test": "npm run build && npm run jasmine",
    "lint": "eslint src --ext .ts",
    "prettier": "prettier --write src/**/*.ts"
> Image should be presented in the ./images/full_images folder 
> and a Sample of the URL that should be used to process the image is as below
> http://localhost:8000/api/images/resize?filename={Imagefilename_without_extension}&width={Positive_integer}&height={positive_integer}
> Replace the filename, width and height in the above URL and enjoy the processing.

# Author
> This project v1.0.0 was developed by Mahmoud Eldinary 18-21 March 2022.

# Comments and Notes
> There might be a lot of comments as this project objective is for my learning needs and reference.
> When downloading the project, you have to open terminal in the root folder 'Image_Processing_Project' to run your commands.

# Future development and Recommendation
> The project may include some other text and other information in the future other than the current one.

Also, I would recommend to use either of the following:
- Google chrome
- Mozilla firefox
