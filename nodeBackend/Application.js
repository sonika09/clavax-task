const express = require('express');
const sequelize = require('./database/connection');
const app = express();
const cors=require("cors");
app.use(cors());


//Database Connection
require("./model/Results");
sequelize.sync();

app.use(express.urlencoded());
app.use(express.json());

//EJS Template Engine
app.set('view engine', 'ejs');

const result = require("./router/resultRoute");
app.use("/", result);

//port connection
app.listen(6060, () => {
    console.log('Server is running on port 6060...');
});