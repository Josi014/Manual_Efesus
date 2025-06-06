export function abrirTelaCheia(src) {
    const img = document.getElementById("lightbox-img");
    img.src = src;
    document.getElementById("lightbox").style.display = "flex";
}

export function fecharTela() {
    document.getElementById("lightbox").style.display = "none";
}

export function accordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
  
    accordionHeaders.forEach(header => {
      header.addEventListener('click', function () {
        const content = this.nextElementSibling;
        const isActive = this.classList.contains('active');
  
        // console.log(content);
  
        accordionHeaders.forEach(otherHeader => {
          if(otherHeader !== this) {
            otherHeader.classList.remove('active');
            otherHeader.nextElementSibling.style.maxHeight = '0';
          }
        });
  
        this.classList.toggle('active');
  
        // Define a altura do conteúdo: colapsa se ativo, expande se inativo
        content.style.maxHeight = isActive ? '0' : content.scrollHeight + 'px';
  
        if(!isActive) {
          setTimeout(() => {
            // Evento de scroll suave até o primeiro elemento <h3>
            const targetHeading = content.querySelector('h3');
            if(targetHeading) {
              targetHeading.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
            }
          }, 300);
        }
      });
  
    });
  }
  
  
  