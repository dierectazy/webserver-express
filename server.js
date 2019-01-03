var express = require('express')
var app = express()

const hbs = require('hbs')

//esto de heroku
const port = process.env.PORT || 3000;

require('./hbs/helpers')
    //helper es una funcion que se dispara cuando el hbs lo requiere
    //si no hay en las varaibles se busca en los helpers
    //midleware es un callback que se ejecuta siempre
app.use(express.static(__dirname + '/public'))


hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'Fernando',
        anio: new Date().getFullYear()
    })
})

app.get('/about', function(req, res) {
    res.render('about', {
        nombre: 'Fernando',
        anio: new Date().getFullYear()
    })
})







app.listen(port, () => {
    console.log("Escuchando peticiones en el puerto 3000");
});