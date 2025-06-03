export function abrirTelaCheia(src) {
    const img = document.getElementById("lightbox-img");
    img.src = src;
    document.getElementById("lightbox").style.display = "flex";
}

export function fecharTela() {
    document.getElementById("lightbox").style.display = "none";
}