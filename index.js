import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

app.listen(8080, () => {
    console.log("Server is running");
})