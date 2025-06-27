import {
  abrirTelaCheia,
  accordion,
  fecharTela,
} from "./animations.js";


async function carregarPagina(caminho) {
  try {
    const resposta = await fetch(caminho);
    if (!resposta.ok) throw new Error(`Erro ao carregar: ${resposta.status}`);

    const html = await resposta.text();
    const conteudoDiv = document.getElementById("main-content");
    conteudoDiv.innerHTML = html;

    // Aguarda uma pequena pausa para garantir que os DOMs estejam processados
    await new Promise((resolve) => setTimeout(resolve, 100)); 
    accordion();  

    
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


document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener('scroll', () => {
    // const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    // const clientHeight = document.documentElement.clientHeight;

    let alturaMax = document.documentElement.scrollHeight - window.innerHeight; //Máximo que pode ser scrollado

    let faltando = alturaMax - (alturaMax * 0.5);

    const elemento = document.querySelector("#return_to_home_screen");

    if (scrollTop > faltando) {
      elemento.classList.add("activate_back_home_screen");
      elemento.classList.remove("return_to_home_screen");
      elemento.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    } else{
      elemento.classList.remove("activate_back_home_screen");
      elemento.classList.add("return_to_home_screen");
    }
  });
});

window.abrirTelaCheia = abrirTelaCheia;
window.fecharTela = fecharTela;
export { carregarPagina };
