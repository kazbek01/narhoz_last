$(document).ready(function(){

    $('.call-menu').on('click', function () {
        $('.header-bottom').addClass('nav-show');
        $('.overlay').addClass('showed');
    });

    $('.close-menu').on('click', function () {
        $('.header-bottom').removeClass('nav-show');
        $('.overlay').removeClass('showed');
    });

    wow.init();
    $('#mainNav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.2,
        filter: '',
        easing: 'swing',
        begin: function() {
        },
        end: function() {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }

        },
        scrollChange: function($currentListItem) {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }
        }
    });

    $('.call-callback').on('click', function () {
        $('.callback').addClass('showed');
        $('.overlay').addClass('showed');
    });
    $('.close-callback').on('click', function () {
        $('.callback').removeClass('showed');
        $('.overlay').removeClass('showed');
    });
    $('.overlay').on('click', function () {
        $('.callback').removeClass('showed');
        $('.overlay').removeClass('showed');
    });

});




