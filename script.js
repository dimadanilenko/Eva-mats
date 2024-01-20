if(window.innerWidth > 1100){
  const swiper = new Swiper('.swiper', {
        
      slidesPerView: 3,
      spaceBetween: 70,
      on: {
          slideChange: function () {
            // slideChange срабатывает при изменении активного слайда
            var slides = document.querySelectorAll('.swiper-slide');
            var currentIndex = this.realIndex; // или this.activeIndex
            var currentSlide = slides[currentIndex];
            slides.forEach(function(item){
              item.classList.add('blur')
            })
            console.log('HTML-элемент текущего слайда:', currentSlide.nextElementSibling.classList.toggle('blur'));
          }
        }
    });
}else{
  document.addEventListener('DOMContentLoaded', function() {
    // Отримання посилання на тег <link> за його id
    var linkTag = document.getElementById('customStylesheet');
    
    // Видалення тегу <link> (розкоментуйте, якщо потрібно видалити)
    // linkTag.parentNode.removeChild(linkTag);

    // Або вимкнення тегу <link> (розкоментуйте, якщо потрібно вимкнути)
    linkTag.disabled = true;
  });
}
let button = document.querySelector(".popupButton")
let buttonPop = document.querySelector('.sendInfo')
let windowPop = document.querySelector('.b-popup')
let body = document.querySelector('body')
button.addEventListener('click', function(){
  windowPop.classList.remove('close')
  body.classList.add('hidden')
})
buttonPop.addEventListener('click', function(){
  windowPop.classList.add('close')
  body.classList.remove('hidden')
})