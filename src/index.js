const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myConnection");
//importanto rutas
const clienteRouter = require("./routers/routas-clientes");
//settings
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
//views
app.set("views", path.join(__dirname, "views"));
//middlewares
app.use(morgan("dev"));
//entender los datos que llegan desde el formulario
app.use(express.urlencoded({ extended: false }));
//middlewares datos requeridos para usar mysql
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      password: "",
      port: 3306,
      database: "clientes",
    },
    "single"
  )
);
//routers
app.use("/", clienteRouter);
//static file
app.use(express.static(path.join(__dirname, "public")));
app.use("/cssFiles", express.static(__dirname + "/public/css"));
//server
app.listen(app.get("port"), () => {
  console.log("server en el puerto", app.get("port"));
});
