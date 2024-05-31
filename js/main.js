$(function(){
    $('.reviews__slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true
    })
    document.documentElement.style.header__buttons('--animate-duration', '.5s');
});

