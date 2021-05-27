const hbs = require('hbs')

hbs.registerHelper('obtenerPromedio', (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3
})

hbs.registerHelper('listar', () => {
    listaEstudiantes = require('./listado.json')
    let texto = ' Listas de Estudiantes'
    listaEstudiantes.forEach(element => {
        texto = texto +
            'Nombre ' + element.nombre + '<br>' +
            'Matematicas ' + element.matematicas + '<br>' +
            'Ingles ' + element.ingles + '<br>' +
            'Programacion ' + element.programacion + '<br>'
    });
    return texto
})