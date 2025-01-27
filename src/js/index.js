/*
Objetivo 1 - clicar na seta para mostrar o próximo cartão
- passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
- passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
- passo 3 - fazer aparecer o próximo cartão da lista
- passo 4 - fazer o cartão atual sumir
Objetivo 2 - clicar na seta voltar para mostrar o cartão anterior
- passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
- passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
- passo 3 - fazer aparecer o cartão da lista anterior
- passo 4 - fazer o cartão atual sumir

*/

// Objetivo 1 - clicar na seta para mostrar o próximo cartão
//- passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;



//- passo 2 - dar um jeito de identificar o clique do usuário na seta avançar

btnAvancar.addEventListener("click", function () {
    if (cartaoAtual === cartoes.length - 1) return;
    //- passo 4 - fazer o cartão atual sumir

    esconderCartaoSelecionado();

    //- passo 3 - fazer aparecer o próximo cartão da lista
    cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

    /*  Objetivo 2 - clicar na seta voltar para mostrar o cartão anterior
      - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
      - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
      - passo 3 - fazer aparecer o cartão da lista anterior
      - passo 4 - fazer o cartão atual sumir */

      btnVoltar.addEventListener("click", function () {
        if (cartaoAtual === 0) return;
      
        esconderCartaoSelecionado();
      
        cartaoAtual--;
        mostrarCartao(cartaoAtual);
      });
      
      function mostrarCartao(cartaoAtual) {
        cartoes[cartaoAtual].classList.add("selecionado");
      }
      
      function esconderCartaoSelecionado() {
        const cartaoSelecionado = document.querySelector(".selecionado");
        cartaoSelecionado.classList.remove("selecionado");
      }