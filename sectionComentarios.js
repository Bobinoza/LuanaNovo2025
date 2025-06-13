document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.carousel-wrapper');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;
  let itemsPerView = 1; // Padrão para mobile

  const updateItemsPerView = () => {
    if (window.innerWidth >= 1024) {
      itemsPerView = 3;
    } else if (window.innerWidth >= 768) {
      itemsPerView = 3;
    } else {
      itemsPerView = 1;
    }
  };

  const updateTotalSlides = () => {
    // É necessário clonar os slides para criar o efeito de "loop infinito"
    // Esta é uma implementação mais simples sem loop
    return wrapper.children.length;
  };

  const updateCarousel = () => {
    const totalSlides = updateTotalSlides();
    // Garante que não role para um espaço vazio no final
    if (currentIndex > totalSlides - itemsPerView) {
      currentIndex = totalSlides - itemsPerView;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    }
    const offset = -currentIndex * (100 / itemsPerView);
    wrapper.style.transform = `translateX(${offset}%)`;
  };

  nextBtn.addEventListener('click', () => {
    const totalSlides = updateTotalSlides();
    if (currentIndex < totalSlides - itemsPerView) {
      currentIndex++;
    } else {
      // Opcional: voltar ao início
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      // Opcional: ir para o final
      const totalSlides = updateTotalSlides();
      currentIndex = totalSlides - itemsPerView;
    }
    updateCarousel();
  });

  // Atualiza a visualização quando a janela é redimensionada
  window.addEventListener('resize', () => {
    updateItemsPerView();
    updateCarousel();
  });

  // Inicializa o carrossel
  updateItemsPerView();
  updateCarousel();
});