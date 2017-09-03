$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.css({opacity: 1}).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});



function redDot() {
    var rows = $(".platform .platform__items > .platform__row"),
        redCont = $(".platform__red-dot"),
        cont    = $(redCont).find('.cont');

    var n = $(rows).length,
        maxPos = $(rows).eq(n - 1).position().top;

    $(redCont).height(maxPos + 40);
    $(cont).eq(n - 1).css({top: maxPos + 9});

    for (var i = 1; i < n; i++) {
        var pos = $(rows).eq(i).position().top;
        $(cont).eq(i).css({top: pos + 9});
    }

}

function myAnimation(animation) {

    var elements = $("[data-js-animation = '" + animation + "']");

    $(elements).each(function() {
        if(!$(this).hasClass("STOP-EFFECT") && $(this).is(":in-viewport")) {

            $(this).addClass("STOP-EFFECT");
            $(this).animateCss(animation);
        }


    })
}

redDot();

$(document).scroll(function() {
    myAnimation('bounceInUp');
    myAnimation('bounceInLeft');
    myAnimation('bounceInRight');
});