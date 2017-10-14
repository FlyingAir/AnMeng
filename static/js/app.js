// Init App
var_app_history = [];

var myApp = new Framework7({
    modalTitle: '安蒙',
    // Enable Material theme
    material: true,
    materialRipple: false,
    pushState: true
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {});

$$(document).on('ajaxStart', function(e) {

    myApp.showIndicator();
});
$$(document).on('ajaxComplete', function(e) {

    myApp.hideIndicator();
});

myApp.onPageBeforeInit('*', function(page) {
    //alert(page.url)
    //myApp.alert('아이디를 확인해주세요','알림');

});
myApp.onPageInit('*', function(page) {
    // document.addEventListener(“backbutton”, onBackKeyDown, false);

    // function onBackKeyDown() {
    //     // 获取当前view  
    //     var currentView = myApp.getCurrentView();
    //     if (currentView.history.length > 1) {
    //         currentView.router.back({}); //非首页返回上一级  
    //     } else {
    //         navigator.app.exitApp(); //首页点返回键退出应用  
    //     }
    // }
    $$(".hamburger").click(function() {
        $$(this).toggleClass("is-active");
    });
})

myApp.onPageInit('main', function(page) {
    // console.log($$('.swiper-container').height())
    // $$('.list-block').css('paddingTop',$$('.swiper-container').outerHeight()+'px')

    var mySwiper = myApp.swiper('.swiper-container01', {
        pagination: '.swiper-pagination01',
        // spaceBetween: 100 // 50px between slides
    });
})