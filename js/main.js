 $(document).ready(function(){
     
    var banner = {
        padre: $('#banner'),
        numeroSlider: $('#banner').children('.slider').length,
        posicion: 1,
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


    //---------------
    //--BANNER--
    //--------------

    /*BOTON SIGUIENTE*/

    $('#banner-next').on('click', function(e){
        e.preventDefault();

       if(banner.posicion < banner.numeroSlider){

        banner.padre.children().not('.active').css({
            'left': '100%',
        });

        $('#banner .active').removeClass('active').next().addClass('active').animate({
            'left': '0%',
        });

        $('#banner .active').prev().animate({
            'left': '-100%',
        })

        banner.posicion = banner.posicion + 1

       }else{
           $('#banner .active').animate({
               'left': '-100%'
           })

           banner.padre.children().not('.active').css({
            'left': '100%',
            });
           

           $('#banner .active').removeClass('active');
           banner.padre.children('.slider').first().addClass('active').animate({
               'left': '0%',
           })

           banner.posicion = 1
       }
         
    })

    /*BOTON ANTERIOR*/

    $('#banner-prev').on('click', function(e){
        e.preventDefault();

        if(banner.posicion > 1){
            banner.padre.children().not('.active').css({
                'left': '-100%',
            })
    
            $('#banner .active').animate({
                'left': '100%',
            })

            $('#banner .active').removeClass('active').prev().addClass('active').animate({
                'left': '0%'
            })

            banner.posicion = banner.posicion -1
        }else{
            banner.padre.children().not('.active').css({
                'left': '-100%',
            })

            $('#banner .active').animate({
                'left':  '100%'
            })

            $('#banner .active').removeClass('active');
            banner.padre.children().last().addClass('active').animate({
                'left': '0%'
            })

            banner.posicion = banner.numeroSlider;
        }

    })


    //---BANER_INFO-----

    var info = {
        padre: $('#info'),
        numeroSlider: $('#info').children('.slider').length,
        posicion: 1,
    }

    info.padre.children('.slider').first().css({
        'left': 0
    });

    var altoInfo = function(){
        var alto = info.padre.children('.slider').outerHeight();

        info.padre.css({
            'height': alto + 'px',
        })
    }

    altoInfo();

 })