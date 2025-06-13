import { carregarPagina } from "./router.js";
import { closeAllAccordions, accordion } from "./animacoes.js";

function controlaMenu() {
  const toggleBtn = document.getElementById('toggleSidebar');
  const sidebar = document.getElementById('sidebar');
  const fechado = document.querySelector("sidebar-fechado");
  const aberto = document.querySelector("sidebar-aberto");

  if(toggleBtn && sidebar) {
    // if(toggleBtn && sidebar )
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("sidebar-fechado");
    });
  } else {
    console.warn("Botão ou sidebar não encontrado.");
  }

}


const itens = document.querySelectorAll("li[data-caminho]");

itens.forEach(item => {
  item.style.cursor = "pointer";

  item.addEventListener("click", () => {
    const caminho = item.dataset.caminho;
    document.body.classList.toggle("sidebar-fechado");
    if(caminho) {
      carregarPagina(caminho);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      console.warn("Caminho não definido no item clicado.");
    }
  });
});


function init() {
  controlaMenu();
}

document.addEventListener("DOMContentLoaded", init);
