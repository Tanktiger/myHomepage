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
        $carousel.css('left', '270px');
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
    $('.application .thumbnail').on('click', function(){
        var img = $(this).find('img').attr('src');

    });
    $('#myModal').on('show.bs.modal', function (data) {
       $(this).find('.modal-body img').attr('src', data.relatedTarget.firstChild.attributes[0].nodeValue);
       $(this).find('.modal-body img').css('width', '100%');
    });
    //Affix fixes
    $('.navigation').height($('#navbar').height());
    $('#navbar').width($('.navigation').width());
});
$('.nav-collapse .nav > li > a').click(function(){
    $('.collapse.in').removeClass('in').css('height', '0');
});
