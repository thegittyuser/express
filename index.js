import express from "express";
import router from "./routes/authRoutes.js";
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(3000, () => {
  console.log("server is running");
});
