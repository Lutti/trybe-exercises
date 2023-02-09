// Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. 
// Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

class StudentSubject {
    public matricula: number;
    public nome: string;
    public prova1: number;
    public prova2: number;
    public prova3: number;
    public prova4: number;
    public trabalho1: number;
    public trabalho2: number;

    soma (): number {
        return this.prova1 +
            this.prova2 +
            this.prova3 +
            this.prova4 +
            this.trabalho1 +
            this.trabalho2;
    }

    media (): number {
        return (this.prova1 +
            this.prova2 +
            this.prova3 +
            this.prova4 +
            this.trabalho1 +
            this.trabalho2) / 6;
    }
};

export default StudentSubject;