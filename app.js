require ('dotenv').config ();
const express = require('express');
// const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// app.set('view engine', 'hbs');
// hbs.registerPartials(__dirname + '/views/partials');

app.use (express.static ('public'));

// app.get ('/', (req, res) => {
//     res.render ('home', {
//         titulo: 'Curso de NodeJs',
//         nombre: 'Juan Sebastian'
//     });
// })

// app.get ('/generic', (req, res) => {
//     res.render ('generic', {
//         titulo: 'Curso de NodeJs',
//         nombre: 'Juan Sebastian'
//     });
// })

// app.get ('/elements', (req, res) => {
//     res.render ('elements', {
//         titulo: 'Curso de NodeJs',
//         nombre: 'Juan Sebastian'
//     });
// })

app.get ('*', (req, res) => {
    res.sendFile (__dirname + '/public/index.html');
})

app.listen(port, () => {
    console.log ('Listen to port ', port);
})