import express from "express";
import qr from "qr-image";
import fs from "fs";
import bodyParser from "body-parser";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
const __dirname=dirname(fileURLToPath(import.meta.url));

const app=express();
const port=3000;

// Serve static files from the 'public' folder -> this makes the css and  js file to work
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("combined"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/public/index.html");

})

app.post("/submit", (req, res)=>{
    var websiteURL=req.body.webUrl;
    var qrImage=qr.image(websiteURL, {type:"png"});
    qrImage.pipe(fs.createWriteStream(__dirname+"/public/URL.png"));
    // fs.writeFile("qrImg.txt", websiteURL, (err)=>{
    //     if(err) throw err;
    //     console.log();
    // });
    res.sendFile(__dirname+`/public/URL.png`);
    // res.send();
})

app.listen(port, ()=>{
    console.log(`Listening at port : ${port}`);
})