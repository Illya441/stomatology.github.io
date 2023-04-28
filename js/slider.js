//  Initialize Swiper
let swiper = new Swiper(".mySwiper", {
//  Initialize Swiper
    loop: true, // добавьте эту строку для зацикливания слайдера
    pagination: {
      el: ".swiper-pagination",
    },

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    speed: 800, // Add this line to change the speed
    
});
