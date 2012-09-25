
$(function(){
    
    if ($('.feature').length > 0){
        
        var featureHeight = $('.feature').eq(0).outerHeight() - 40;
        $(window).scroll(function(){
            //set navbar to opaque if over content, transparent if over feature banner
            
            var top = $(window).scrollTop();
            var wWidth = $(window).innerWidth();
            if (wWidth > 768){
                if (top > featureHeight){
                    $('nav').addClass('opaque');
                } else {
                    $('nav').removeClass('opaque');
                }
            }
        });
    }
    
    //remove this if you would like the mobile nav to always appear
    if ($('#btn-menu-toggle:visible').length > 0){
        $('#nav-menu').removeClass('in');
    }
    
});