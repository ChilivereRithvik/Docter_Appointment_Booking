const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

require('dotenv').config();

//mongodb connection
connectDb();

const app = express();
const port = process.env.PORT || 8000;



//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes

app.use('/api/v1/user', require('./routes/userRoute'));
app.use('/api/v1/admin', require('./routes/adminRoutes'));
app.use('/api/v1/docter', require('./routes/DocterRoutes'));


// app.get("/", (req, res) => {
//     res.status(200).send({ message: "server running" });
// });


//listen to port
app.listen(port, () => {
    console.log(`server is running ${port}`);
});