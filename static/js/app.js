// Init App
var_app_history = [];

var myApp = new Framework7({
    modalTitle: '安柏',
    // Enable Material theme
    material: true,
    materialRipple: false,
    pushState: true,
    cache: false
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {});


var myPhotoBrowserPopupDark = myApp.photoBrowser({
    photos: [{
            url: './img/follow02.png',
            caption: '长江0-3岁科学育儿国际研究院',
            maxZoom: '2',
            zoom:true
        },
        {
            url: './img/follow03.png',
            caption: '安柏蒙特梭利教育',
            maxZoom: '2',
            zoom:true

        },
    ],
    theme: 'dark',
    type: 'standalone'
});
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
myApp.onPageInit('listen', function(page) {
    // $('audio').audioPlayer(); 

});

myApp.onPageInit('*', function(page) {
    $$('.menu-icon01').click(function() {
        myPhotoBrowserPopupDark.open();
    })
    $$('.menu-icon02,.menu-icon01,.menu-icon03,.list-button').click(function() {
        myApp.closeModal('.popover-links')
    })


    $$(".back-top").click(function() {
        $$(".page-content").scrollTop(0, 600);
        // return false;
    });
    // 下拉框效果
    //子导航展开收缩
    $(".form-item .sewvtop").click(function() {
        $(this).find("em").removeClass("lbaxztop2").addClass("lbaxztop").parents(".sewv").siblings().children(".sewvtop").find("em").removeClass("lbaxztop").addClass(".lbaxztop2");
        $(this).next(".sewvbm").toggle().parents(".sewv").siblings().find(".sewvbm").hide();
    });

    /*鼠标离开下拉框关闭*/
    $(".form-item .sewv").mouseleave(function() {
        $(".sewvbm").hide();
        $(this).children(".sewvtop").find("em").addClass("lbaxztop2");
    });

    //赋值
    $(".form-item .sewvbm>li").click(function() {
        var selva = $(this).text();
        $(this).parents(".sewvbm").siblings(".sewvtop").find("span").text(selva);
        $(this).parent("ul").hide();
        $(this).parents(".sewv").children(".sewvtop").find("em").addClass("lbaxztop2");
    });

    $(".nav-bar .sewvtop").click(function() {
        event.stopPropagation()

        $(this).find("em").removeClass("lbaxztop2").addClass("lbaxztop").parents(".sewv").siblings().children(".sewvtop").find("em").removeClass("lbaxztop").addClass(".lbaxztop2");
        $(this).next(".sewvbm").stop(true, false).slideToggle().parents(".sewv").siblings().find(".sewvbm").stop(true, false).slideToggle();
    });

    //赋值
    $(".nav-left .sewvbm>li").click(function() {
        event.stopPropagation()

        var selva = $(this).find('span').text();
        $(this).parents(".sewvbm").siblings(".sewvtop").find("span").find('a').text(selva);
        if ($(this).hasClass('nav01')) {
            $('.current').hide()
            $('.other-nav.nav01').show().siblings('.other-nav').hide();
        } else if ($(this).hasClass('nav02')) {
            $('.current').hide()
            $('.other-nav.nav02').show().siblings('.other-nav').hide();
        } else if ($(this).hasClass('nav03')) {
            $('.current').hide()
            $('.other-nav.nav03').show().siblings('.other-nav').hide();
        } else if ($(this).hasClass('nav04')) {
            $('.current').hide()
            $('.other-nav.nav04').show().siblings('.other-nav').hide();
        }
        $(this).parents(".sewv").children(".sewvtop").find("em").addClass("lbaxztop2");
    });
    $(".nav-right .sewvbm>li").click(function() {
        $('.nav-left ul').slideUp();
        $('.current').find('ul').slideUp();
        $('.other-nav').find('ul').slideUp();
    })

    $(document).click(function(event) {
        event.stopPropagation()
        $('.nav-left ul').slideUp();
        $('.current').find('ul').slideUp();
        $('.other-nav').find('ul').slideUp();

    })
})

myApp.onPageInit('main', function(page) {
    // console.log($$('.swiper-container').height())
    // $$('.list-block').css('paddingTop',$$('.swiper-container').outerHeight()+'px')
    mInit();

})
// 初始化页面
function mInit() {
    var mySwiper = myApp.swiper('.swiper-container01', {
        pagination: '.swiper-pagination01',
        // spaceBetween: 100 // 50px between slides
    });
    var mySwiper = myApp.swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        // spaceBetween: 100 // 50px between slides
    });

    $$(".back-top").click(function() {
        $$(".page-content").scrollTop(0, 600);
        // return false;
    });

    $$('.menu-icon01').click(function() {
        $$(".page>.page-content").scrollTop($$(".page>.page-content").height() + 2000, 400)
    })
    $$('.menu-icon02,.menu-icon01,.menu-icon03,.list-button').click(function() {
        myApp.closeModal('.popover-links')
    })
}
mInit();

myApp.onPageInit('training', function(page) {
    var listenCode = "";
    var identifyCode = "";
    var peopleCode = "";
    $('.listen .sewvbm li').click(function(event) {
        listenCode = $(this).data('id')

    });
    $('.identify .sewvbm li').click(function(event) {
        identifyCode = $(this).data('id')

    });
    $('.people .sewvbm li').click(function(event) {
        peopleCode = $(this).data('id')

    });
    // 表单验证
    $('.form-item input').each(function(index, el) {
        $(el).blur(function(event) {
            if ($.trim($(el).val()) == "") {
                $(el).next('i').removeClass().addClass('error-statu animated headShake')
            } else {
                $(el).next('i').removeClass().addClass('success-statu animated fadeIn')
            }
        });
    });
    $('.phone').blur(function(event) {
        var reg = /^1\d{10}$/;
        if (reg.test($(this).val())) {
            $(this).next('i').removeClass().addClass('success-statu animated fadeIn')
        } else {
            $(this).next('i').removeClass().addClass('error-statu animated headShake')
        }
    });
    $('.mail').blur(function(event) {
        var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (reg.test($(this).val())) {
            $(this).next('i').removeClass().addClass('success-statu animated fadeIn')
        } else {
            $(this).next('i').removeClass().addClass('error-statu animated headShake')
        }
    });
    $(".sewvtop span").bind("DOMNodeInserted", function(e) {
        if ($(e.target).html() != "请选择..") {
            $(e.target).parent().parent().next('i').removeClass().addClass('success-statu animated fadeIn')
        }
    });
    $('.submit-btn').click(function(event) {
        setTimeout(function() {
            var flag = true;
            $('.form-item').find('i').each(function(index, el) {
                if (!$(this).hasClass('success-statu')) {
                    flag = false;
                    $(this).removeClass().css('visibility', 'visible').addClass('error-statu animated headShake')
                    $('.warning-text').css('visibility', 'visible').addClass('animated headShake')
                }
            });
            if (flag == true) {
                console.log('success')
                var url = window.location.host;
                var postData = {
                    course: listenCode, //报名课程
                    identity: identifyCode, //报名身份
                    crowd: peopleCode, //参与人群
                    name: $('.true-name').val(), //真实姓名
                    phone: $('.phone').val(), //联系电话
                    email: $('.email').val(), //电子邮箱
                    workAddress: $('.work-address').val(), //工作单位
                    city: $('.city').val(), //所在城市
                }
                $.ajax({
                        url: '<{:url("index/adultapply")}>',
                        type: 'POST',
                        dataType: 'json',
                        data: postData,
                    })
                    .done(function(json) {
                        if (json.code == 200) {
                            swal("报名成功")
                                .then((value) => {});
                        }
                    })
                    .fail(function() {
                        console.log("error");
                    })
                    .always(function() {
                        console.log("complete");
                    });

            } else {
                var reg = /^1\d{10}$/;
                if (!reg.test($('.phone').val())) {
                    swal("请核对手机号")
                        .then((value) => {});
                } else {
                    swal("信息不全，请填写完整。")
                        .then((value) => {});
                }
            }
        }, 100)

    });
})

myApp.onPageInit('appointment', function(page) {
    var sexCode = "";
    var visitCode = "";
    $('.sex .sewvbm li').click(function(event) {
        sexCode = $(this).data('id')
    });
    $('.visit .sewvbm li').click(function(event) {
        visitCode = $(this).data('id')

    });

    $('.baby-birth').focus(function() {
        // 日期选择器
        var nowValue = document.getElementById('demo-1');
        new DatePicker({
            "type": "3", //0年, 1年月, 2月日, 3年月日
            "title": '请选择日期', //标题(可选)
            "maxYear": "2017", //最大年份（可选）
            "minYear": "2000", //最小年份（可选）
            "separator": "-", //分割符(可选)
            "defaultValue": "2013-01-01", //默认值（可选）
            "callBack": function(val) {
                //回调函数（val为选中的日期）
                nowValue.value = val;
            }
        });

    })
    $('.visit-time').focus(function(event) {
        var timestamp = Date.parse(new Date());
        var date = new Date(timestamp);
        date = date.toLocaleDateString().split('/').join("-");
        console.log(date)
        var nowValue = document.getElementById('demo-2');
        new DatePicker({
            "type": "3", //0年, 1年月, 2月日, 3年月日
            "title": '请选择日期', //标题(可选)
            "maxYear": "2050", //最大年份（可选）
            "minYear": "2016", //最小年份（可选）
            "separator": "-", //分割符(可选)
            "defaultValue": date, //默认值（可选）
            "callBack": function(val) {
                //回调函数（val为选中的日期）
                nowValue.value = val;
            }
        });
    });
    // 表单验证
    $('.form-item input').each(function(index, el) {
        $(el).blur(function(event) {
            console.log("me")
            if ($.trim($(el).val()) == "") {
                $(el).next('i').removeClass().addClass('error-statu animated headShake')
            } else {
                $(el).next('i').removeClass().addClass('success-statu animated fadeIn')
            }
        });
    });
    $('textarea').blur(function(event) {
        if ($.trim($(this).val()) == "") {
            $(this).next('i').removeClass().addClass('error-statu animated headShake')
        } else {
            $(this).next('i').removeClass().addClass('success-statu animated fadeIn')
        }
    });
    $('.parent-tel').blur(function(event) {
        var reg = /^1\d{10}$/;
        if (reg.test($(this).val())) {
            $(this).next('i').removeClass().addClass('success-statu animated fadeIn')
        } else {
            $(this).next('i').removeClass().addClass('error-statu animated headShake')
        }
    });
    $('.parent-mail').blur(function(event) {
        var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (reg.test($(this).val())) {
            $(this).next('i').removeClass().addClass('success-statu animated fadeIn')
        } else {
            $(this).next('i').removeClass().addClass('error-statu animated headShake')
        }
    });
    $(".sewvtop span").bind("DOMNodeInserted", function(e) {
        console.log($(e.target).html())
        if ($(e.target).html() != "请选择..") {
            $(e.target).parent().parent().next('i').removeClass().addClass('success-statu animated fadeIn')
        }
    });

    $('.submit-btn').click(function(event) {
        setTimeout(function() {
            var flag = true;
            $('.form-item').find('i').each(function(index, el) {
                if (!$(this).hasClass('success-statu')) {
                    flag = false;
                    $(this).removeClass().css('visibility', 'visible').addClass('error-statu animated headShake')
                    $('.warning-text').css('visibility', 'visible').addClass('animated headShake')
                }
            });
            if (flag == true) {
                var url = window.location.host;
                var postData = {
                    babyName: $('.baby-name').val(), //宝贝姓名
                    babyBirth: $('.baby-birth').val(), //宝贝生日
                    babyCountry: $('.baby-country').val(), //宝贝国籍
                    babySex: sexCode, //宝贝性别
                    parentName: $('.parent-name').val(), //家长姓名
                    parentTel: $('.parent-tel').val(), //家长联系电话
                    parentMail: $('.parent-mail').val(), //家长联系邮箱
                    hopeVisit: visitCode, //希望参观校区
                    visitTime: $('.visit-time').val(), //希望参观时间
                    visitReason: $('.visit-reason').val(), //参观原因
                }
                $.ajax({
                        url: '<{:url("index/babyapply")}>',
                        type: 'POST',
                        dataType: 'json',
                        data: postData,
                    })
                    .done(function(json) {
                        if (json.code == 200) {
                            swal("预约成功。")
                                .then((value) => {});
                        }
                    })
                    .fail(function() {
                        console.log("error");
                    })
                    .always(function() {
                        console.log("complete");
                    });
            } else {
                var reg = /^1\d{10}$/;
                if (!reg.test($('.parent-mail').val())) {
                    swal("请核对手机号。")
                        .then((value) => {});
                } else {
                    swal("信息不全，请填写完整。")
                        .then((value) => {});
                }
            }
        }, 100);

    });

})