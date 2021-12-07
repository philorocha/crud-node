require ('marko/node-require');
var markoExpress = require('marko/express');
const express = require('express');

const Alunodao = require('./dao/aluno-dao');
const dao = new Alunodao();

const app = express();
app.use(markoExpress());
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.marko(
        require('./templates/alunos.marko'),
        dao.list()
        );
});

app.get('/alunos/delete/:id', (req, res) => {
    dao.delete(req.params.id);
    res.redirect('/');
});


app.get('/form', (req, res) => {
    res.marko(require('./templates/form.marko'));
});

app.post('/alunos', (req, res) => {
    console.log('Recebi o formulario');
    dao.save(req.body);
    res.redirect('/');
});

app.listen(port, '0.0.0.0', () => {
    console.log('Servidor iniciado');
});