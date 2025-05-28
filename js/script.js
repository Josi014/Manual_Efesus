
function controlaMenu() {
    const toggleBtn = document.getElementById('toggleSidebar');

    if(toggleBtn && sidebar) {
        toggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("sidebar-fechado");
        });
    } else {
        console.warn("Botão ou sidebar não encontrado.");
    }
}
document.addEventListener("DOMContentLoaded", controlaMenu);


