const express = require('express');
const app = express();
const hbs = require('hbs');
const puerto = process.env.PORT || 3000;
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

// Partials
hbs.registerPartials(__dirname + '/views/parciales');


// Express HBS Engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Javier Vásquez'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(puerto, () => console.log(`Escuchando peticiones por el puerto ${puerto}`));