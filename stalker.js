// get the initial coordinates of the stalker menu, if present
var $stalker = $('#stalkerMenu'),
    STALKER = {};

if ($stalker.length) {
    STALKER = {
        top: parseInt($stalker.offset().top),
        width: parseInt($stalker.css('width')),
        fontSize: parseInt($stalker.css('font-size'))
    }
}

$(window).scroll(function() {
    if (!$.isEmptyObject(STALKER)) {
        if ($(window).scrollTop() > STALKER.top) {
            $stalker.css({
                'position': 'fixed',
                'top': 10,
                'width': STALKER.width
            });
        } else {
            $stalker.css({
                'position': 'absolute',
                'top': STALKER.top,
                'width': STALKER.width
            });
        }
    }
});
