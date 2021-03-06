$(document).ready(function(){
    $('.menu-res').click(function(){
        $('.menu-res, .dropdown-res-menu, .header').toggleClass('open');
    });

    /*
     * content loader
     * for FE dev purpose only 
    */
    $(document).on('click', '[data-load]', function(){
        var htmlSource = $(this).data('load');
        loadContent(htmlSource);
        $('.menu-res, .dropdown-res-menu, .header').removeClass('open');
    });

    function loadContent(source){
        $(".content-wrapper").load("html/"+source, function( response, status, xhr ) {
            if ( status == "error" ) {
              var msg = "Sorry but there was an error: ";
              alert( msg + xhr.status + " " + xhr.statusText );
            }
            $('.menu-item').removeClass("active");
            $("[data-load='"+source+"']").addClass("active");
            $('html, body').animate({
                scrollTop: 0
            }, 0);
        });
    }

    loadContent("home.html");

})