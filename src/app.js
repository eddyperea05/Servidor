const express = require('express')
const app = express();
const path = require('path')
const hbs = require('hbs')
require('./helpers')

const directorioPublico = path.join(__dirname, '../public')
const directorioInclude = path.join(__dirname, '../include')

app.use(express.static(directorioPublico))
hbs.registerPartials(directorioInclude)

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index', {
        estudiante: 'Edd'
    })
})

app.get('/calculos', (req, res) => {
    console.log(req.query)
    res.render('calculos', {
        estudiante: req.query.nombre,
        nota1: parseInt(req.query.nota1),
        nota2: parseInt(req.query.nota2),
        nota3: parseInt(req.query.nota3)
    })
})



app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000')
})