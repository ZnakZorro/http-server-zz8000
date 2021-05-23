const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();


// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'pages')));

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/index.html'));
});



app.get('/radio0', (req, res) => {
    console.log(0);
    res.sendFile(path.join(__dirname, 'pages/index.html'));
});
app.get('/radio1/', (req, res) => {
    console.log(1);
    res.sendFile(path.join(__dirname, 'pages/index.html'));
});
app.get('/radio2/', (req, res) => {
    console.log(2);
    res.sendFile(path.join(__dirname, 'pages/index.html'));
});













//Set Port
const port = process.env.PORT || '3300';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));