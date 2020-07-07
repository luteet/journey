$(function () {

    /* $('.header__content--container').slick({
        nextArrow: '<button class="slick-next slick-arrow" type="button"><img src="img/icons/arrow.svg"/></button > '
    }); */

    let image_height = 0,
        image_srcNotWebp,
        image_src = '.webp-bg';

    function ThisIsWebP() {
        let def = $.Deferred(), crimg = new Image();
        crimg.onload = function () { def.resolve(); };
        crimg.onerror = function () { def.reject(); };
        crimg.src = "https://simpl.info/webp/cherry.webp";
        return def.promise();
    }

    ThisIsWebP().then(function () {
        $.each($(image_src), function () {
        });
    }
        , function () {
            $.each($(image_src), function () {
                image_srcNotWebp = $(this).data('notwebp');
                $(this).css('background-image', 'url("' + image_srcNotWebp + '")');

            });

        });

    /* for(let i = 0; i < 3; i++) {
        console.log(i);
    } */

    let scene_1 = $('.parallax__header--box').get(0),
    scene_2 = $('.parallax__about--box').get(0),
    parallaxInstance_1 = new Parallax(scene_1),
    parallaxInstance_2 = new Parallax(scene_2);

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
        bg = $('.bg-menu'),
        scrollBarWidth,
        burger = $('.menu__burger');

    

        let line_menu = $('.menu__line'),
            btn_left = $(menu_btn[0]).offset().left,
            btn_top = $(header_top).height() - $(line_menu).height(),
            line_width = $(menu_btn[0]).width(),
            manParallax = $('.man-li').data().depth;

            function scollBarWidthFunc() {
                scrollBarWidth = $('body').width();
                $('body').addClass('lock');
                scrollBarWidth = $('body').width() - scrollBarWidth;
                $('body').removeClass('lock');
            }
            scollBarWidthFunc();
            /* console.log($('.man-li').data().depth); */
            $('.man-li').data().depth = 0.20;
    function screenSize() {
        if ($(window).width() <= 767) {
            $(header_social).appendTo('.header__top--container');
            $(menu_list).fadeOut(0);
            scollBarWidthFunc();
            
            console.log($('.man-li').data().depth);
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
                },
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
                },
            );
            /* phone_btn_check = false;
            $(phone_btn).appendTo($(header_top)).css('display', 'block');;
            $(menu).css('display', 'block'); */
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
                $(bg).fadeIn(500);
            }
            else {
                $(bg).fadeOut(0);
            }
            $('body').toggleClass('lock');
    }

        $(burger).on('click', function () {
            menuFunc()
        });
        $(bg).on('click', function(){
            menuFunc()
        });

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