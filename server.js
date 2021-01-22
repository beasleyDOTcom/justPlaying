'use strict';
require('dotenv').config();
const express = require('express');
const app = express();

app.listen(process.env.PORT || 3007, () => {
    console.log('glistening on port ', process.env.PORT)
})