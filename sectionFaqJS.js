// Js do sucesso das cilhudas
document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.faq_accordion_item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.faq_accordion_header');
    const content = item.querySelector('.faq_accordion_content');

    header.addEventListener('click', () => {
      // Verifica se o item clicado já está aberto
      const isOpen = item.classList.contains('accordion-open');

      // Fecha todos os outros itens abertos (opcional, mas recomendado)
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('accordion-open');
          otherItem.querySelector('.faq_accordion_content').style.maxHeight = null;
        }
      });

      // Abre ou fecha o item clicado
      if (isOpen) {
        // Se já estava aberto, fecha
        item.classList.remove('accordion-open');
        content.style.maxHeight = null;
      } else {
        // Se estava fechado, abre
        item.classList.add('accordion-open');
        // Define a altura máxima para a altura real do conteúdo
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});


