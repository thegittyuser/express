import express from "express";
import router from "./routes/authRoutes.js";
import session from "express-session";
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  }),
);

app.use("/", router);

app.listen(3000, () => {
  console.log("server is running");
});
