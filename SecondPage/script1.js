let sliderSelector = '.swiper-container',
        options = {
          loop: true,
          speed:800,
          slidesPerView: 2, // or 'auto'
          spaceBetween: 20,
          centeredSlides : true,
          effect: 'coverflow', // 'cube', 'fade', 'coverflow',
          coverflowEffect: {
            rotate: 50, // Slide rotate in degrees
            stretch: 0, // Stretch space between slides (in px)
            depth: 50, // Depth offset in px (slides translate in Z axis)
            modifier: 1, // Effect multipler
            slideShadows : true // Enables slides shadows
          },
          grabCursor: true,
          parallax: true,
          on: {
            imagesReady: function(){
              this.el.classList.remove('loading');
            }
          }
        }
    let mySwiper = new Swiper(sliderSelector, options);
    mySwiper.init();

// function game1{
//   document.location.href="bg.jpg";
// }