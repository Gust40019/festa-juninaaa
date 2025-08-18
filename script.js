const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são as principais características da festa junina",
        alternativas: [
            "músicas e danças tipicas",
            "Comida tipica"
        ]
    },
    {
        enunciado: "Qual a origem da festa junina",
        alternativas: [
            "a festas junina tem suas origens nas celebrações catolicas",
            "Especialmente na festa de são joão Batista que é uma das principais influencias"
        ]
    },
    {
        enunciado: "Onde é mais comum celebrar festta junina",
        alternativas: [
            "Nordeste do Brasil",
            "Em todo país, principalmente em áreas rurais"
            
        ]
    },
    {
        enunciado: "Qual o significado da festa junina",
        alternativas: [
            "é uma celebração da cultura popular brasileira",
            "é uma oportunnidade para as pessoas se reunirem"
        ]
    },
    {
        enunciado: "Quais são as atrações tipicas da festa junina",
        alternativas: [
            "fogueira e balões",
            "musica ao vivo dança e outras atividades"
        ]
    }
];
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
    return
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();