$(function() {
    var $carousel = $('#carousel');
    var $wrapper = $('#wrapper');
    var $window = $(window);
    var carouselImgCount = 1;
    $carousel.css('left', 0);
    $window.resize(function() {
        var height = $window.height() * 0.3;
        if (height < 200) {
            height = 200;
        }
        $wrapper.height( height );
        $carousel.height( height );
        setCarouselImgCount ();
    }).resize();

    generateCarousel();
    function generateCarousel() {
        $carousel.carouFredSel({
            width: '100%',
            scroll: {
                items: 1,
                duration: 800,
                pauseOnHover: true
            },
            items: {
                visible: carouselImgCount,
                start: 1,
                width: 'variable',
                height: 'variable'
            },
            swipe: {
                onTouch: true,
                onMouse: true
            }
        });
        //Hack um die Startbilder in die Mitte zu holen
        $carousel.css('left', ($(window).width()/5) + 'px');
    }
    function setCarouselImgCount () {
        var windowWidth = $window.width();
        if (windowWidth > 720) {
            carouselImgCount = 3;
//            $('#navbar').show();
            $.each($('#carousel img'), function(key, item){
               $(item).addClass('marginRight50');
            });
        } else {
            carouselImgCount = 1;
            //Show better on mobile
//            $('#navbar').hide();
            $.each($('#carousel img'), function(key, item){
                $(item).removeClass('marginRight50');
            })
        }
        $('#navbar').width($('.navigation').width());
    }

    $('#myModal').on('show.bs.modal', function (data) {
       $(this).find('.modal-body img').attr('src', $(data.relatedTarget).find('img').attr('src'));
       $(this).find('.modal-header .modal-title').text($(data.relatedTarget).find('img').attr('title'));
       $(this).find('.modal-body img').css('width', '100%');
    });
//    $('.thumbnail img').tooltip();
    //Affix fixes
    $('.navigation').height($('#navbar').height());
    $('#navbar').width($('.navigation').width());
});
$('.nav-collapse .nav > li > a').click(function(){
    $('.collapse.in').removeClass('in').css('height', '0');
});
