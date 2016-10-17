(function () {
    'use struct';

    new WOW().init();
    
    $('#our-work').mixItUp();

//    $("ul.navbar-nav li").click(function () {
//        if (!$(this).hasClass("active")) {
//            $("ul.navbar-nav li.active").removeClass("active");
//            $(this).addClass("active");
//        }
//    });

    $("ul.navbar-nav li a").click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var scrollTo = $(target).offset().top - 90;
       
        $('html,body').animate({scrollTop : scrollTo  },1000); 
    });






}())