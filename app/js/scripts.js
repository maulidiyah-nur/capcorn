$(document).ready(function(){
    $('.menu-res, .dropdown-res-menu').click(function(){
        $('.menu-res, .dropdown-res-menu').toggleClass('open');
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        margin:10,
        loop: true,
        autoplay: true,
        autoplayTimeout:10000,
        autoplayHoverPause:true,
        dot: true
    });

})