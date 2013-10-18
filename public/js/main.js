$(function() {
    var $carousel = $('#carousel');
    var $wrapper = $('#wrapper');
    var $window = $(window);

    $window.resize(function() {
        $wrapper.height( $window.height() * 0.3 );
        $carousel.height( $window.height() * 0.3 );
    }).resize();

    $carousel.carouFredSel({
        width: '100%',
        height: '10%',
        scroll: {
            items: 1,
            duration: 1000
        },
        items: {
            visible: 'odd',
            start: -1,
            width: 'variable',
            height: 'variable'
        },
        swipe: {
            onTouch: true,
            onMouse: true
        }
    });
});