import express from "express";
import bodyParser from "body-parser";     // giúp sever lấy đc tham số từ client
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
require('dotenv').config();         // c1: kết nối db từ file package.json


let app = express();

//config app

// cấu hình các tham số client gửi lên
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// engine và router
viewEngine(app);
initWebRoutes(app);

connectDB();

// PORT == undefined thì port = 8080
let port = process.env.PORT || 8080;        // lấy biến PORT trong file .env

app.listen(port, () => {
    //callback
    console.log(`start project fullstack on localhost:${port}`)
});
