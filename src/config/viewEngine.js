import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public"));    // thư mục public
    app.set("view engine", "ejs");              // setup ejs
    app.set("views", "./src/views");             // đường dẫn đến views

}

module.exports = configViewEngine;