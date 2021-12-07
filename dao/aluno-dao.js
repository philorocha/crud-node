class AlunoDao
{
    constructor() {
        this._alunos = [
            { id: 1, nome: 'Felipe Rocha', curso: 'ADS' },
            { id: 2, nome: 'Denise Evellin', curso: 'ADM' },
            { id: 3, nome: 'Arthur Paulo', curso: 'ADS' },
            { id: 4, nome: 'Tiago Rocha', curso: 'ADS' },
            { id: 5, nome: 'Josimar Rocha', curso: 'ADS' }
        ];
    }

    list() {
        return this._alunos;
    }

    save(aluno) {
        aluno.id = this._alunos.length + 1;
        this._alunos.push(aluno);
    }

    findById(id) {
        for (let aluno of this._alunos) {
            if (aluno.id == id) {
                return aluno;
            }
            return null;
        }
    }

    delete(id) {
        this._alunos = this._alunos.filter((aluno) => {
            return aluno.id != id;
        })
    }
}

module.exports = AlunoDao;