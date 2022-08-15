const express = require('express');
const path = require('path');
const filePath = path.join(__dirname, '..','dist','first-app');

const app = express();

app.use(express.static(filePath));
PORT=3003

app.listen(PORT, function () {
    console.log('server started at port : '+PORT);
});