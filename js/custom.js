AOS.init();

//Smooth Scroll
function moveScreen(menuName) {
    $('html , body').animate({
        scrollTop: $('#' + menuName).offset().top
    }, 1000);
}

//Animation on Scroll
$('[data-aos]').parent().addClass('hideOverflowOnMobile');

//Nav Animation
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll < 300) {
        $('.navbar').css('background', '#EEE8E4');
        $('.navbar .navbar-collapse').css('background-color', '#EEE8E4');
        $('.navbar .nav-link').css('color', '#000');
        $('.navbar .navbar-brand').css('color', '#000');
        $('.navbar .navbar-toggler').css('background-color', 'transparent');
    } else {
        $('.navbar').css('background', '#000');
        $('.navbar .navbar-collapse').css('background-color', '#000');
        $('.navbar .nav-link').css('color', '#fff');
        $('.navbar .navbar-brand').css('color', '#fff');
        $('.navbar .navbar-toggler').css('background-color', '#fff');
    }
});
