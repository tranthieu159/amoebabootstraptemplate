$(document).ready(function () {
    // action Menu bar
    $('.header_menu').on('click',function (e) { 
        e.preventDefault();
        $('.header_nav').toggleClass('active');
    });

    // action Home 
    $('.header_nav ul li:nth-child(1) a').on('click', function (e) { 
        e.preventDefault();
        $('body, html').animate({
            scrollTop: 0,  
        }, 500);
    });

    // action About
    $('.header_nav ul li:nth-child(2) a').on('click', function (e) { 
        e.preventDefault();
        $('body, html').animate({ 
            scrollTop: $('.main').offset().top - 80,
        }, 500);
    });

    // Action get started
    $('.hero_btn').on('click', function (e) { 
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('.main').offset().top - 80,  
        }, 500);
    });

    // action Services
    $('.header_nav ul li:nth-child(3) a').on('click', function (e) { 
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('.services').offset().top - 80,  
        }, 500);
    });

    // action cta btn
    $('.cta_btn').on('click', function (e) { 
        e.preventDefault();
        $('body, html').animate({
            scrollTop: 0,  
        }, 500);
    });

    // action portfolio
    $('.header_nav ul li:nth-child(4) a').on('click', function (e) { 
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('.portfolio').offset().top - 80,  
        }, 500);
    });

    // add filter_active
    $('.portfolio_filters li').on('click', function (e) {
        
        e.preventDefault();
        $('.portfolio_filters li.filter_active').removeClass('filter_active')
        $(this).addClass('filter_active')
        
    });
    
    $('.portfolio_filters li:nth-child(2)').on('click', function (e) {
        e.preventDefault();
        $('.portfolio_list .filter_web').addClass('hide')
        $('.portfolio_list .filter_card').addClass('hide')
        $('.portfolio_list .filter_app').removeClass('hide')
    });

    $('.portfolio_filters li:nth-child(3)').on('click', function (e) {
        e.preventDefault();
        $('.portfolio_list .filter_card').removeClass('hide')
        $('.portfolio_list .filter_web').addClass('hide')
        $('.portfolio_list .filter_app').addClass('hide')
    });

    $('.portfolio_filters li:nth-child(4)').on('click', function (e) {
        e.preventDefault();
        $('.portfolio_list .filter_web').removeClass('hide')
        $('.portfolio_list .filter_card').addClass('hide')
        $('.portfolio_list .filter_app').addClass('hide')
    });

    $('.portfolio_filters li:nth-child(1)').on('click', function (e) {
        e.preventDefault();
        $('.portfolio_list .filter_web').removeClass('hide')
        $('.portfolio_list .filter_card').removeClass('hide')
        $('.portfolio_list .filter_app').removeClass('hide')
    });

    
    
    // ask and question
    $('.fap_question').slideUp();
    $('.fap_ask').on('click', function (e) {
        $(this).next('.fap_question').slideToggle()
        $(this).toggleClass('active_aks')
    });

    // action team
    $('.header_nav ul li:nth-child(5) a').on('click', function (e) { 
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('.team').offset().top - 80,
        }, 500);
    });

    // action contact
    $('.header_nav ul li:nth-child(7) a').on('click', function (e) { 
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('.contact').offset().top - 80,
        }, 500);
    });
});