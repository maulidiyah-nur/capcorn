$(document).ready(function(){
    $('.menu-res, .dropdown-res-menu').click(function(){
        $('.menu-res, .dropdown-res-menu').toggleClass('open');
    });

    /*
     * content loader
     * for FE dev purpose only 
    */
    $('[data-load]').click(function(){
        var htmlSource = $(this).data('load');
        loadContent(htmlSource);
    });

    function loadContent(source){
        $(".content-wrapper").load("html/"+source, function( response, status, xhr ) {
            if ( status == "error" ) {
              var msg = "Sorry but there was an error: ";
              alert( msg + xhr.status + " " + xhr.statusText );
            }
            else{
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
            }

            $('.menu-item').removeClass("active");
            $("[data-load='"+source+"']").addClass("active");
        });
    }

    loadContent("home.html");

})