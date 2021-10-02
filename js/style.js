
  const swiper = new Swiper('.swiper', {
    // Optional parameters
   
   
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    slidesPerView: 3,
  });

  
  $(document).ready(function(){
    $('.header__inner-burger').on('click', function(){
      $('.header__inner-menu').toggleClass('active');
   });
  });
 