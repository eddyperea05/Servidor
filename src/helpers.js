const hbs = require('hbs')

hbs.registerHelper('obtenerPromedio', (nota1, nota2, nota3) => {
    return (nota1 + nota2 + nota3) / 3
})

hbs.registerHelper('listar', () => {
    listaEstudiantes = require('./listado.json')
        //let texto = ' Listas de Estudiantes<br>'
    let texto = "<table> \
    <thead> \
    <th>Nombre</th> \
    <th>Matematicas</th> \
    <th>Ingles</th> \
    <th>Programación</th> \
    </thead><tbody>"
    listaEstudiantes.forEach(element => {
        texto = texto +
            "<tr>" +
            "<th>" +
            element.nombre +
            "</th>" +
            "<th>" +
            element.matematicas +
            "</th>" +
            "<th>" +
            element.ingles +
            "</th>" +
            "<th>" +
            element.programacion +
            "</th>" +
            "</tr>"
    });
    texto += "</tbody></table>"
    return texto
})