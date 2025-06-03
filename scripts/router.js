import {
  abrirTelaCheia,
  fecharTela,
} from "./animacoes.js";

async function carregarPagina(caminho) {
  try {
    const resposta = await fetch(caminho);
    if (!resposta.ok) throw new Error(`Erro ao carregar: ${resposta.status}`);

    const html = await resposta.text();
    const conteudoDiv = document.getElementById("main-content");
    conteudoDiv.innerHTML = html;

  

    // Aguarda uma pequena pausa para garantir que os DOMs estejam processados
    await new Promise((resolve) => setTimeout(resolve, 100)); 


    const imagem = conteudoDiv.querySelector(".img-pages");
    if (imagem) {
      imagem.addEventListener("click", () => {
        abrirTelaCheia(imagem.src);
      });
    }

    return true; 
  } catch (erro) {
    console.error("Erro ao carregar a página:", erro);
    document.getElementById("main-content").innerHTML =
      "<p>Erro ao carregar página.</p>";
    return false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("toggleTheme");

  const setTheme = (theme) => {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (toggleBtn) {
      toggleBtn.classList.remove("bi-sun");
      toggleBtn.classList.remove("bi-moon");
    
    
      if (theme === "light") {
        toggleBtn.classList.add("bi-sun");
      } else {
        toggleBtn.classList.add("bi-moon");
      }
    }
  };

  const toggleTheme = () => {
    const newTheme = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  setTheme(localStorage.getItem("theme") || "light");

  toggleBtn?.addEventListener("click", toggleTheme);
});


window.abrirTelaCheia = abrirTelaCheia;
window.fecharTela = fecharTela;
export { carregarPagina };
