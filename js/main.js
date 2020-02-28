 $(document).ready(function(){
     
    var banner = {
        padre: $('#banner'),
        numeroSlider: $('#banner').children('.slider').length,
        posision: 1,
    }

    banner.padre.children('.slider').first().css({
        'left': 0
    });

    var altoBanner = function(){
        var alto = banner.padre.children('.slider').outerHeight();

        banner.padre.css({
            'height': alto + 'px',
        })
    }

    altoBanner();

    $(window).resize(function(){
        altoBanner();
    })
 })