import express from "express";
import fileupload from "express-fileupload";
import cors from "cors";
import Route from "./routes/routes.js";

const app = express ();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(fileupload());

app.use(express.static("public"))
app.use(Route)

app.get("/",(req, res) => res.send("masih pakai api"))

app.listen(port,() => console.log('server berjalan di http://localhost:${port}'))