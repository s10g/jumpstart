$().ready(function() {
    console.log("ready");
    $(".carousel").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHove: false
    });

    var scrolledDistance = 0;
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if (scrollTop - scrolledDistance > 50) {
            var navbarHeight = $(".navbar").css("height");
            $(".navbar").animate({top: '-' + navbarHeight}, 150);
            scrolledDistance = scrollTop;
        } else if (scrolledDistance - scrollTop > 50) {
            $(".navbar").animate({top: '0px'}, 150);
            scrolledDistance = scrollTop;
        }
    });

});


