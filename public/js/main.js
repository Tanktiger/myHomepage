$(function() {
    var $carousel = $('#carousel');
    var $wrapper = $('#wrapper');
    var $window = $(window);

    $window.resize(function() {
        var height = $window.height() * 0.3;
        if (height < 200) {
            height = 200;
        }
        $wrapper.height( height );
        $carousel.height( height );
    }).resize();

    $carousel.carouFredSel({
        width: '100%',
        scroll: {
            items: 1,
            duration: 1000,
            pauseOnHover: true
        },
        items: {
            visible: 1,
            start: 0,
            width: 'variable',
            height: 'variable'
        },
        swipe: {
            onTouch: true,
            onMouse: true
        }
    });
    $('.application .thumbnail').on('click', function(){
        console.log($(this).find('img'));
        var img = $(this).find('img').attr('src');

    });
    $('#myModal').on('show.bs.modal', function (data) {
       $(this).find('.modal-body img').attr('src', data.relatedTarget.firstChild.attributes[0].nodeValue);
        $(this).find('.modal-body img').css('width', '100%');
    })
});