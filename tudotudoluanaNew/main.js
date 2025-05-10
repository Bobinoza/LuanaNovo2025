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


// MARQUEE 1
// const marqueeText = document.getElementById("marquee-text");
// let marqueePosition = 0;
// const marqueeSpeed = 1;

// function moveMarquee() {
//   marqueePosition -= marqueeSpeed;
//   marqueeText.style.left = marqueePosition + "px";

//   if (marqueePosition + marqueeText.offsetWidth <= 0) {
//     marqueePosition = document.documentElement.clientWidth;
//   }
// }

// setInterval(moveMarquee, 600 / 60);

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

/* ScrollReveal: Mostrar elementos quando der scroll na página */
// ScrollReveal().reveal('.wrapper1-texts h1',
// {
//   duration: 700, // Duração da animação em milissegundos
//   delay: 100, // Atraso antes da animação começar em milissegundos
//   distance: '30px', // Distância que o elemento se move
//   origin: 'top' // Direção de onde o elemento vem (pode ser 'top', 'right', 'bottom', 'left')
// });

// ScrollReveal().reveal('.wrapper1-texts a', 
// {
//   duration: 900,
//   delay: 100,
//   distance: '30px',
//   origin: 'top'
// });

// ScrollReveal().reveal('.wrapper1-texts p', 
// {
//   duration: 1000,
//   delay: 100,
//   distance: '30px',
//   origin: 'top'
// });

// /* image */
// ScrollReveal().reveal('.image', 
// {
//   duration: 700,
//   delay: 100,
//   distance: '30px',
//   origin: 'bottom'
// });

// ScrollReveal().reveal('.content-services-wrapper',
// {
//   duration: 700, // Duração da animação em milissegundos
//   delay: 100, // Atraso antes da animação começar em milissegundos
//   distance: '30px', // Distância que o elemento se move
//   origin: 'top' // Direção de onde o elemento vem (pode ser 'top', 'right', 'bottom', 'left')
// });

// ScrollReveal().reveal('.faq_container', 
// {
//   duration: 700,
//   delay: 100,
//   distance: '30px',
//   origin: 'top'
// });

// ScrollReveal().reveal('.wrapper-aboutus h2', 
// {
//   duration: 700,
//   delay: 100,
//   distance: '30px',
//   origin: 'top'
// });

// ScrollReveal().reveal('.wrapper-text-aboutus', 
// {
//   duration: 700,
//   delay: 100,
//   distance: '30px',
//   origin: 'top'
// });

// ScrollReveal().reveal('.wrapper-footer .brand', 
// {
//   duration: 700,
//   delay: 100,
//   distance: '30px',
//   origin: 'top'
// });

// ScrollReveal().reveal('.wrapper-footer .social-footer', 
// {
//   duration: 700,
//   delay: 100,
//   distance: '30px',
//   origin: 'top'
// });

// ScrollReveal().reveal('.wrapper-footer .map-footer', 
// {
//   duration: 700,
//   delay: 100,
//   distance: '30px',
//   origin: 'top'
// });

// ScrollReveal().reveal('.wrapper-footer .reserved-rights', 
// {
//   duration: 700,
//   delay: 100,
//   distance: '30px',
//   origin: 'bottom'
// });

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


/* FAQ */
const accordionItems = document.querySelectorAll('.faq_accordion_item')

accordionItems.forEach(item => {
  const accordionHeader = item.querySelector('.faq_accordion_header')

  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open')

    toggleItem(item)

    if (openItem && openItem !== item) {
      toggleItem(openItem)
    }
  })
})

const toggleItem = item => {
  const accordionContent = item.querySelector('.faq_accordion_content')

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style')
    item.classList.remove('accordion-open')
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
  }
}

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
openModalBtn.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no botão de fechamento do modal (X), fecha o modal
closeModalSpan.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, fecha o modal
window.onclick = function(event) {
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


