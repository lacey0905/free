$(function(){
});


$(window).scroll(function(){
    var top = $(this).scrollTop();
    var elem = $(".btn_check");
    if(top >= 1500){
        elem.fadeOut("fast");
    } else {
        elem.fadeIn("fast");
    }
});