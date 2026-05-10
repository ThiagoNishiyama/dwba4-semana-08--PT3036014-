class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }

  nomeCompleto() {
    return this.primeiroNome + " " + this.segundoNome;
  }

  media() {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao() {
    if (this.media() > 6) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
}

let alunos = [
  new Aluno("João", "da Silva", 7, 8.5),
  new Aluno("Maria", "Oliveira", 9, 7.5),
  new Aluno("Pedro", "Santos", 5, 6),
  new Aluno("Ana", "Souza", 8, 9),
  new Aluno("Carlos", "Lima", 4, 5)
];

for (let aluno of alunos) {
  alert(
    `Nome: ${aluno.nomeCompleto()}\n` +
    `Média: ${aluno.media().toFixed(2)}\n` +
    `Situação: ${aluno.situacao()}`
  );
}