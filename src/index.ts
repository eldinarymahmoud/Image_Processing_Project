import express from "express";
import logger from "./routes/logger";

const app = express();
const port = 8000;

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

app.use("/api", logger);

app.use("/", logger, (req, res) => {
  res.send("THIS IS THE MAIN PAGE");
});

export default app;