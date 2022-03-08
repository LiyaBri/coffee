if (document.querySelector('.combo__wrapper')) {
    new Swiper('.combo__wrapper', {
        observer: true,
        observeParents: true,
        slidesPerView: 'auto', //показ одного слайдера
        spaceBetween: 30, //отсутпы между слайдами
        watchOverflow: true,
        speed: 800,
        loop: false, //бесконечный слайдер
        loopAdditionalSlides: 5,
        preloadImages: false,
        //Dotts
        pagination: false,
        //arrows
        navigation: false
    });
}