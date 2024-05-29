const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

document.querySelectorAll('a.yakor').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault()

    const href = this.getAttribute('href').substring(1)

    const scrollTarget = document.getElementById(href)

    const topOffset = 40
    const elementPosition = scrollTarget.getBoundingClientRect().top
    const offsetPosition = elementPosition - topOffset

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    })
  })
});

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
});
