$(function () {

    /* $('.header__content--container').slick({
        nextArrow: '<button class="slick-next slick-arrow" type="button"><img src="img/icons/arrow.svg"/></button > '
    }); */

    let image_height = 0,
        image_srcNotWebp,
        image_src_bg = '.webp-bg';
        image_src_href = '.webp-href';

    function ThisIsWebP() {
        let def = $.Deferred(), crimg = new Image();
        crimg.onload = function () { def.resolve(); };
        crimg.onerror = function () { def.reject(); };
        crimg.src = "https://simpl.info/webp/cherry.webp";
        return def.promise();
    }

    ThisIsWebP().then(function () {
        $.each($(image_src_bg), function () {
        });
        
    }
        , function () {
            $.each($(image_src_bg), function () {
                image_srcNotWebp = $(this).data('notwebp');
                $(this).css('background-image', 'url("' + image_srcNotWebp + '")');
                
            });
            $.each($(image_src_href), function () {
                image_srcNotWebp = $(this).data('notwebp');
                $(this).attr('href', image_srcNotWebp);
            });

        });

        $('.gallery__item').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    
                }
            }
        });

    let scene_1 = $('.parallax__header--box').get(0),
    scene_2 = $('.parallax__about--box').get(0),
    /* scene_3 = $('.parallax__gallery--box-1').get(0), */
    parallaxInstance_1 = new Parallax(scene_1),
    parallaxInstance_2 = new Parallax(scene_2);
    /* parallaxInstance_3 = new Parallax(scene_3); */

    hHeaderCustomer({
        elemName: $('.header__top'),
        headerHider: false,
        colorChanger: true,
        colorChangerTop: false,
        classColor: true,
        menuList: $('.menu__ul'),
    });

    let menu_list = $('.menu__ul'),
        menu = $('.menu'),
        menu_btn = $('.menu__btn'),
        header_top = $('.header__top'),
        header_social = $('.header__top--social'),
        /* bg = $('.bg-menu'), */
        scrollBarWidth,
        burger = $('.menu__burger');

    

        let line_menu = $('.menu__line'),
            btn_left = $(menu_btn[0]).offset().left,
            btn_top = $(header_top).height() - $(line_menu).height(),
            line_width = $(menu_btn[0]).width(),
            headerScroll = $('.header__top').offset().top;

            function scollBarWidthFunc() {
                scrollBarWidth = $('body').width();
                $('body').addClass('lock');
                scrollBarWidth = $('body').width() - scrollBarWidth;
                $('body').removeClass('lock');
            }
            scollBarWidthFunc();
            /* console.log($('.man-li').data().depth); */
            /* $('.man-li').data().depth = 0.20; */
    function screenSize() {
        if ($(window).width() <= 767) {
            $(header_social).appendTo('.header__top--container');
            $(menu_list).fadeOut(0);
            scollBarWidthFunc();

            /* phone_btn_check = true;
            $(phone_btn).appendTo($(menu_list)).css('display', 'block');
            $(menu).css('display', 'none');
            $(burger).removeClass('active'); */
            $('.menu__ul--li').hover(
                function () {
                    return false;
                    
                },
                function () {
                    return false;
                }
            );

        }
        else if ($(window).width() > 767) {
            $(line_menu).css('left', btn_left + 'px').css('width', line_width + 'px').css('top', btn_top + 'px').css('opacity', '0');
            scollBarWidthFunc();
            $(header_social).appendTo(menu);
            $('.menu__ul--li').hover(
                function () {
                    btn_left = $(this).children(menu_btn).offset().left;
                    line_width = $(this).children(menu_btn).width();
                    $(line_menu).css('width', line_width + 'px').css('left', btn_left + 'px').css('opacity', '1');
                    
                },
                function () {
                    btn_left = $(menu_btn[0]).offset().left,
                    line_width = $(menu_btn[0]).width();
                    $(line_menu).css('width', line_width + 'px').css('left', btn_left + 'px').css('opacity', '0');
                });
            
        }
    }
    screenSize()

    $(window).resize(function () {
        screenSize()
    });

    
    

    function menuFunc() {
            $(burger).toggleClass('active');
            $(menu_list).fadeIn(0).toggleClass('active');
            if(burger.hasClass('active')) {
                $('body').css('padding', '0 ' + scrollBarWidth + 'px ' + '0 0');
                $('body').css('overflow', 'hidden');
                /* $(bg).fadeIn(500); */
            }
            else {
                $('body').css('padding', '0');
                $('body').css('overflow', 'scroll');
                /* $(bg).fadeOut(0); */
            }
            $('body').toggleClass('lock');
    }

        $(burger).on('click', function () {
            menuFunc()
        });
        $/* (bg).on('click', function(){
            menuFunc()
        }); */

    function menuBtnScroll(settings) {

        let start_scroll = false;

        $(settings.buttonsToScroll).on('click', function () {

            if (start_scroll == false) {
                start_scroll = true;

                let scrollName = $(this).attr('data-scroll'),
                    scrollElem = $(scrollName),
                    scrollTop  = scrollElem.offset().top;

                $('html, body').animate({
                    scrollTop: scrollTop
                }, 1500);

                setTimeout(function () {
                    start_scroll = false;
                }, 1500);
            }

        });

    }

    

    menuBtnScroll({
        buttonsToScroll: $('.menu__btn'),

    })

    /* function parallax() {

        let distanceX,
            distanceY
            speedParallaxAnim = 0;

        function moveElem(X, Y) {
            $.each($('.parallax-elem'), function () {
                speedParallaxAnim = $(this).data('speed');
                $(this).css('transform', 'translate(' + X/speedParallaxAnim + 'px' + ', ' + Y/speedParallaxAnim + 'px' + ')' + ' scale(1.05)');
                
            });
            
            
        }

        $('body').on('mousemove', function(e) {
            distanceX = e.clientX;
            distanceY = e.clientY;
            moveElem(distanceX, distanceY);
            
        });

        
    }
    
    parallax() */

    
});