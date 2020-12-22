const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales', function(err) {});
app.set('view engine', 'hbs');

//helpers

app.get('/', function(req, res) {

    res.render('home.hbs', {
        nombre: 'Javier',

    });
});

app.get('/about', function(req, res) {

    res.render('about.hbs', {


    });
});



app.listen(port, () => {
    console.log(`Escuchando al puerto ${port}`)
});