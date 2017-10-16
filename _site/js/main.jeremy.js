

$( ".tab-button" ).click(function() {
    $(".tab-button").removeClass("selected");
    $(this).addClass("selected");
    var contentName = ".content-"+$(this).attr("type");
    $(".content").velocity("transition.slideDownOut");
    $(contentName).delay(250).velocity("transition.slideUpIn");
});

