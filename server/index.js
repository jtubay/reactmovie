const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors")
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 5001;
const mongoose = require("mongoose")



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/moviedb", { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser())

app.use('/api/users', require('./routes/users'));
app.use('/uploads', express.static('uploads'));

app.listen(PORT, () => console.log('worked'))