/**
 * Created by hongnhung on 09/07/2014.
 */
$(function () {

    setInterval("imgChange()", 2000);
    $("#draggable").draggable();
    $("#datepicker").datepicker();
    $(".home").fadeIn("fast");
    $(".footer").hide();
    clickHome();
    clickMember();
    clickAbout();
    clickContact();
    $("#hidden1").click(function(){
        $(".photo1 .imgContent").fadeOut("slow");
    });
    $("#show1").click(function(){
        $(".photo1 .imgContent").fadeIn("slow");
    });
    $("#hidden2").click(function(){
        $(".photo2 .imgContent").fadeOut("slow");
    });
    $("#show2").click(function(){
        $(".photo2 .imgContent").fadeIn("slow");
    });
    $("#hidden3").click(function(){
        $(".photo3 .imgContent").fadeOut("slow");
    });
    $("#show3").click(function(){
        $(".photo3 .imgContent").fadeIn("slow");
    });

    $("#right").click(function () {
        $("#theDiv").animate({ width: "700px" }, 1000);
    });
    $("#text").click(function () {
        $("#theDiv p").animate({ fontSize: "18pt" }, 1000);
    });
    $("#toggle").click(function () {
        $("#theDiv").animate({ left: "300" }, 1000, "swing");
    });
    $("#back").click(function () {
        $("#theDiv").animate({ left: "0px", width: "500px"}, 1000, "swing");
        $("#theDiv p").animate({ fontSize: "12pt" }, 1000);
    });

    function runEffect() {
        // get effect type from
        var selectedEffect = $("#effectTypes").val();

        // most effect types need no options passed by default
        var options = {};
        // some effects have required parameters
        if (selectedEffect === "scale") {
            options = { percent: 0 };
        } else if (selectedEffect === "transfer") {
            options = { to: "#button", className: "ui-effects-transfer" };
        } else if (selectedEffect === "size") {
            options = { to: { width: 200, height: 60 } };
        }

        // run the effect
        $("#effect").effect(selectedEffect, options, 500, callback);
    }

    // callback function to bring a hidden box back
    function callback() {
        setTimeout(function () {
            $("#effect").removeAttr("style").hide().fadeIn();
        }, 1000);
    }

    // set effect from select menu value
    $("#button").click(function () {
        runEffect();
        return false;
    });

    $("#fadein").click(function() {
        $("#demo-4").fadeIn("normal");
    });
    $("#fadeout").click(function() {
        $("#demo-4").fadeOut("normal");
    });
    $("#fadeto3").click(function() {
        $("#demo-4").fadeTo("slow", 0.3);
    });
    $("#fadeup").click(function() {
        $("#demo-4").fadeTo("slow", 1.0);
    });

    //login
    $('a.login-window').click(function() {

        //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
        var loginBox = $(this).attr('href');

        //cho hiện hộp đăng nhập trong 300ms
        $(loginBox).fadeIn("slow");

        // thêm phần tử id="over" vào sau body
        $('body').append('<div id="over"></div>');
        $('#over').fadeIn(300);

        return false;
    });

    // khi click đóng hộp thoại
    $(document).on('click', "a.close, #over", function() {
        $('#over, .login').fadeOut(300 , function() {
            $('#over').remove();
        });
        return false;
    });
    //info
    ("#info").click(function() {

        //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
        var loginBox = $(this).attr('href');

        //cho hiện hộp đăng nhập trong 300ms
        $(loginBox).fadeIn("slow");

        // thêm phần tử id="over" vào sau body
        $('body').append('<div id="over"></div>');
        $('#over').fadeIn(300);

        return false;
    });

    // khi click đóng hộp thoại
    $(document).on('click', "a.close, #over", function() {
        $('#over, .login').fadeOut(300 , function() {
            $('#over').remove();
        });
        return false;
    });

});

// Image Rotator
function imgChange() {
    var curPhoto = $(".photoShow div.current");
    var nextPhoto = curPhoto.next();
    if (nextPhoto.length == 0)
        nextPhoto = $(".photoShow div:first");
    curPhoto.removeClass("current").addClass("previous");
    nextPhoto.css({opacity: 0.0}).addClass("current").animate({opacity: 1.0}, 1000, function () {
        curPhoto.removeClass("previous");
    });
}
// Menu
function clickHome(){
    $("#home").click(function () {
        $(".home").fadeIn("fast");
        $(".about").hide();
        $(".member").fadeOut("fast");
        $(".contact").hide();
        $(".footer").hide();
        $(".photoShow").show();
    })
}
function clickAbout(){
    $("#about").click(function () {
        $(".about").fadeIn("fast");
        $(".member").hide();
        $(".contact").hide();
        $(".home").hide();
        $(".footer").show();
        $(".photoShow").show();
    })
}
function clickContact(){
    $("#contact").click(function () {
        $(".contact").fadeIn("fast");
        $(".about").hide();
        $(".member").hide();
        $(".home").hide();
        $(".footer").hide();
        $(".photoShow").show();
    })
}
function clickMember(){
    $("#member").click(function () {
        $(".member").fadeIn("fast");
        $(".about").hide();
        $(".contact").hide();
        $(".home").hide();
        $(".footer").hide();
        $(".photoShow").hide();
    })
}