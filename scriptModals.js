// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function () {

  /* ---------------------------------- */
  /* ---- 4. LÓGICA PARA O MODAL ---- */
  /* ---------------------------------- */

  // Pega os elementos do DOM
  const modal = document.getElementById("avaliacoesModal");
  const btnOpen = document.getElementById("openModalBtnZ");
  const btnClose = document.querySelector(".close-btn");

  // Quando o usuário clicar no botão, abre o modal
  btnOpen.onclick = function () {
    modal.style.display = "block";
  }

  // Quando o usuário clicar no <span> (x), fecha o modal
  btnClose.onclick = function () {
    modal.style.display = "none";
  }

  // Quando o usuário clicar fora do conteúdo do modal, fecha o modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});


// SCRIPT DE CONTROLE DO MODAL DO ESTÚDIO
document.addEventListener('DOMContentLoaded', function () {
  // Seleciona os elementos específicos deste modal
  const modalEstudio = document.getElementById("estudioModal");
  const btnOpenEstudio = document.getElementById("openModalBtnX");
  const btnCloseEstudio = document.querySelector("#estudioModal .close-btnX");

  // Verifica se os elementos existem
  if (modalEstudio && btnOpenEstudio && btnCloseEstudio) {
    // Abre o modal
    btnOpenEstudio.onclick = function () {
      modalEstudio.style.display = "block";
    }

    // Fecha o modal ao clicar no 'X'
    btnCloseEstudio.onclick = function () {
      modalEstudio.style.display = "none";
    }

    // Fecha o modal ao clicar fora (no fundo escuro)
    window.addEventListener('click', function (event) {
      if (event.target == modalEstudio) {
        modalEstudio.style.display = "none";
      }
    });
  }
});