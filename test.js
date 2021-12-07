const AlunoDao = require('./dao/aluno-dao');

let dao = new AlunoDao();

console.log('-----------------');
console.log(dao.list());
console.log('-----------------');
dao.delete(3);
console.log(dao.list());
console.log('-----------------');
let aluno = dao.findById(1);
console.log(aluno);