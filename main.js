/* abre e fecha o menu quando clicar no ícone */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item no menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// MARQUEE 2
const marqueeText2 = document.getElementById("marquee-text2");
let marqueePosition2 = 0;
const marqueeSpeed2 = 1;

function moveMarquee2() {
  marqueePosition2 -= marqueeSpeed2;
  marqueeText2.style.left = marqueePosition2 + "px";

  if (marqueePosition2 + marqueeText2.offsetWidth <= 0) {
    marqueePosition2 = document.documentElement.clientWidth;
  }
}

setInterval(moveMarquee2, 1000 / 60);


/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenyAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop // pegando o top da section
    const sectionHeight = section.offsetHeight // pegando altura
    const sectionId = section.getAttribute('id') // e pegando o id

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenyAtCurrentSection()
})

/* FAQ FIRST */
const accordionItemsFirst = document.querySelectorAll('.faq_first_accordion_item')

accordionItemsFirst.forEach(item => {
  const accordionFrHeader = item.querySelector('.faq_first_accordion_header')

  accordionFrHeader.addEventListener('click', () => {
    const openFrItem = document.querySelector('.accordion-fr-open')

    toggleItemFirst(item)

    if (openFrItem && openFrItem !== item) {
      toggleItemFirst(openFrItem)
    }
  })
})

const toggleItemFirst = item => {
  const accordionContent = item.querySelector('.faq_first_accordion_content')

  if (item.classList.contains('.accordion-fr-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('.accordion-fr-open')
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('.accordion-fr-open')
  }
}


// SEU SCRIPT ORIGINAL DO ACORDEÃO 
const accordionItems = document.querySelectorAll('.faq_accordion_item');

accordionItems.forEach(item => {
  const accordionHeader = item.querySelector('.faq_accordion_header');

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open');

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = item => {
  const accordionContent = item.querySelector('.faq_accordion_content');

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    // Certifique-se de que o conteúdo está visível para calcular scrollHeight
    // Se o seu CSS define 'display: none' inicialmente, você pode precisar
    // temporariamente mudar para 'display: block' ou 'visibility: hidden'
    // antes de calcular scrollHeight.
    // No entanto, com a estrutura atual, o height = 0 deve funcionar
    // e a transição ocorrerá ao adicionar a classe.
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
};

/* Faz com que o menu respeita o espaço de parada  */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    window.scroll({
      top: target.offsetTop - 70,
      left: 0,
      behavior: 'smooth'
    });
  });
});


/* MODAL SCRIPTS */
// Obtém o elemento do botão de abertura do modal e o modal em si
var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("myModal");

// Obtém o elemento de fechamento do modal
var closeModalSpan = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão de abertura do modal, abre o modal
openModalBtn.onclick = function () {
  modal.style.display = "block";
}

// Quando o usuário clicar no botão de fechamento do modal (X), fecha o modal
closeModalSpan.onclick = function () {
  modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, fecha o modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* ROTATE ARROW FAQ_FIRST */
document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.faq_first_accordion_item');

  items.forEach(function (item) {
    item.addEventListener('click', function () {
      var icon = this.querySelector('.faq_first_accordion_arrow i.icon-keyboard_arrow_down');
      icon.classList.toggle('rotate');
    });
  });
});

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */


document.addEventListener('DOMContentLoaded', function () {
  // --- LÓGICA DO ACORDEÃO (DROPDOWN) PARA .faq_accordion_item ---
  const accordionItems = document.querySelectorAll('.faq_accordion_item');

  // Função para abrir/fechar um ÚNICO item do FAQ
  const toggleSingleFaqItem = (itemToToggle) => {
    const accordionContent = itemToToggle.querySelector('.faq_accordion_content');
    if (!accordionContent) return;

    if (itemToToggle.classList.contains('accordion-open')) {
      // Se está aberto, fecha
      accordionContent.style.height = null; // Permite que o CSS (height: 0) assuma
      itemToToggle.classList.remove('accordion-open');
    } else {
      // Se está fechado, abre
      accordionContent.style.height = accordionContent.scrollHeight + 'px';
      itemToToggle.classList.add('accordion-open');
    }
  };

  accordionItems.forEach(item => {
    const accordionHeader = item.querySelector('.faq_accordion_header');
    if (!accordionHeader) return;

    accordionHeader.addEventListener('click', () => {
      const currentlyOpenItem = document.querySelector('.faq_accordion_item.accordion-open');

      // Se existe um item aberto E NÃO é o item que acabamos de clicar
      if (currentlyOpenItem && currentlyOpenItem !== item) {
        toggleSingleFaqItem(currentlyOpenItem); // Fecha o item que estava aberto
      }

      // Alterna o estado do item clicado (abre se estava fechado, fecha se estava aberto)
      toggleSingleFaqItem(item);
    });
  });

  // --- LÓGICA DO DROPDOWN PARA .content-services ---
  const contentServicesItems = document.querySelectorAll('.content-services');

  contentServicesItems.forEach(item => {
    const header = item.querySelector('.content-services-header');
    const expandableContent = item.querySelector('.expandable-content');

    // A variável 'arrow' não é mais necessária para a lógica,
    // mas o elemento com a classe .dropdown-arrow ainda precisa existir no HTML.

    if (header && expandableContent) {
      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('service-open');

        // Comportamento de acordeão: fecha os outros itens abertos
        if (!isOpen) {
          contentServicesItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('service-open')) {
              const otherContent = otherItem.querySelector('.expandable-content');
              if (otherContent) otherContent.style.maxHeight = null;
              // Apenas remove a classe 'service-open' do outro item.
              // O CSS cuidará para que a seta dele volte à posição original.
              otherItem.classList.remove('service-open');
            }
          });
        }

        // Abre ou fecha o item clicado
        if (isOpen) {
          expandableContent.style.maxHeight = null;
          item.classList.remove('service-open'); // Remove a classe, a seta girará de volta
        } else {
          expandableContent.style.maxHeight = expandableContent.scrollHeight + 'px';
          item.classList.add('service-open'); // Adiciona a classe, a seta irá girar
        }
      });
    }
  });

  // --- LÓGICA DO CARROSSEL (APLICÁVEL A TODOS OS CARROSSÉIS) ---
  const allCarousels = document.querySelectorAll('.carousel-container');

  allCarousels.forEach(carousel => {
    const slidesContainer = carousel.querySelector('.carousel-slides');
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const prevButton = carousel.querySelector('.carousel-button.prev');
    const nextButton = carousel.querySelector('.carousel-button.next');

    if (slides.length > 0 && slidesContainer && prevButton && nextButton) {
      let currentIndex = 0;
      const totalSlides = slides.length;

      function updateCarousel() {
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

        if (totalSlides <= 1) {
          prevButton.style.display = 'none';
          nextButton.style.display = 'none';
        } else {
          prevButton.style.display = 'flex';
          nextButton.style.display = 'flex';
        }
      }

      prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
      });

      nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
      });

      slides.forEach(slide => {
        const imgs = slide.querySelectorAll('img');
        imgs.forEach(img => {
          img.addEventListener('load', () => {
            const parentServiceItem = carousel.closest('.content-services.service-open');
            if (parentServiceItem) {
              const expandableContent = parentServiceItem.querySelector('.expandable-content');
              if (expandableContent && parentServiceItem.classList.contains('service-open')) {
                const currentScrollHeight = expandableContent.scrollHeight;
                if (currentScrollHeight > 0) expandableContent.style.maxHeight = currentScrollHeight + 'px';
              }
            }
          });
        });
      });
      updateCarousel();
    } else if (carousel && prevButton && nextButton) {
      prevButton.style.display = 'none';
      nextButton.style.display = 'none';
    }
  });
});