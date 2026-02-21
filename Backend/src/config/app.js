const express = require('express');
const authRoute = require('../Routes/auth.route.js');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth',authRoute);



module.exports = app;