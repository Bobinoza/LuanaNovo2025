// JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const items = Array.from(track.children);
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const dotsNav = document.querySelector('.carousel-dots');

  // --- Cria os pontos de navegação dinamicamente ---
  items.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      moveToSlide(index);
    });
    dotsNav.appendChild(dot);
  });

  const dots = Array.from(dotsNav.children);
  let currentIndex = 0;

  const getSlidesPerView = () => {
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 3;
    return 1;
  };

  const moveToSlide = (targetIndex) => {
    const slidesPerView = getSlidesPerView();
    // Limita o índice para não ter páginas vazias no final
    const maxIndex = items.length - slidesPerView;
    currentIndex = Math.max(0, Math.min(targetIndex, maxIndex));

    const itemWidth = items[0].getBoundingClientRect().width;
    const gap = parseInt(getComputedStyle(track).gap) || 0;
    const newLeft = currentIndex * (itemWidth + gap);

    track.style.transform = `translateX(-${newLeft}px)`;

    // Atualiza os pontos
    dots.forEach(dot => dot.classList.remove('active'));
    // O ponto ativo deve ser o do primeiro slide visível
    if (dots[currentIndex]) {
      dots[currentIndex].classList.add('active');
    }

    // Atualiza as setas
    prevBtn.style.display = currentIndex === 0 ? 'none' : 'flex';
    nextBtn.style.display = currentIndex === maxIndex ? 'none' : 'flex';
  };

  // --- Event Listeners ---
  nextBtn.addEventListener('click', () => {
    moveToSlide(currentIndex + 1);
  });

  prevBtn.addEventListener('click', () => {
    moveToSlide(currentIndex - 1);
  });

  // Ajusta o carrossel ao redimensionar a janela
  window.addEventListener('resize', () => {
    moveToSlide(currentIndex);
  });

  // --- Inicialização ---
  moveToSlide(0);
});