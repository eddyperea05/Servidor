const express = require('express')
const app = express();
const path = require('path')
const hbs = require('hbs')
const bodyParse = require('body-parser')
require('./helpers')

const directorioPublico = path.join(__dirname, '../public')
const directorioInclude = path.join(__dirname, '../include')

app.use(express.static(directorioPublico))
hbs.registerPartials(directorioInclude)

app.use(bodyParse.urlencoded({ extended: false }))

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index', {
        estudiante: 'Edd'
    })
})

app.post('/calculos', (req, res) => {
    console.log(req.query)
    res.render('calculos', {
        estudiante: req.body.nombre,
        nota1: parseInt(req.body.nota1),
        nota2: parseInt(req.body.nota2),
        nota3: parseInt(req.body.nota3)
    })
})

app.get('*', (req, res) => {
    res.render('error', {
        estudiante: 'error'
    })
})



app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000')
})