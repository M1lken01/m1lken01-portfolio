const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const hostname = '0.0.0.0';
const port = 8080;

const {
    getHome
} = require('./routes/index');

app.set('port', process.env.port || port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get(['/', '/home'], getHome);
app.get('/github', (req, res) => {
    res.redirect('https://github.com/M1lken01');
});
app.get('/facebook', (req, res) => {
    res.redirect('https://www.facebook.com/milan.artner.5/');
});
app.get('/instagram', (req, res) => {
    res.redirect('https://www.instagram.com/m1lken01/');
});
app.get('/steam', (req, res) => {
    res.redirect('https://steamcommunity.com/id/m1lk3n01/');
});
app.get('/faceit', (req, res) => {
    res.redirect('https://www.faceit.com/en/players/Milken01');
});
app.get('/discord', (req, res) => {
    res.redirect('https://discord.com/users/458907061955067925');
});

app.listen(port, hostname, () => {
    console.log(`Server running on: ${hostname}:${port}`);
});