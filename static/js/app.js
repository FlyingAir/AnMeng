// Init App
var_app_history = [];

var myApp = new Framework7({
    modalTitle: '安蒙',
    // Enable Material theme
    material: true,
    materialRipple: false
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {});


$$(document).on('pageInit', function(e) {
    $$(".hamburger").click(function() {
        $$(this).toggleClass("is-active");
    });
    var mySwiper = myApp.swiper('.swiper-container', {
        pagination: '.swiper-pagination'
    });
})