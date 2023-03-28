// sintaxis common js
// const express = require("express");

import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express(); //este solo debe estar una vez

//conectar la base de datos
db.authenticate()
  .then(() => {
    console.log("base de datos coenctade");
  })
  .catch((error) => {
    console.log(error);
  });

//definir puerto
const port = process.env.PORT || 4000;

//definir la carpta publica

app.use(express.static("public"));

//habiulitart pug

app.set("view engine", "pug");

//obtener el año actual
//use usa todos os verbos de http
app.use((req, res, next) => {
  // console.log(res);
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de Viajes";
  console.log(res.locals);
  return next();
});

// agregar body parser para ller datos del formulario

app.use(
  express.urlencoded({
    extended: true,
  })
);

//agregar router

app.use("/", router);

//inicamos el sefgidor y si funciona manda el mensaje
app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
