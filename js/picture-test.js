// JavaScript Document
$(document).ready(function () {
    $(".answer").click(function () {
        //var red = [$(".red1"), $(".red2"), $(".red3"), $(".red4"), $(".red5"), $(".red6"), $(".red7"), $(".red8")];
        $(".red1").fadeIn(10);
        $(".red2").fadeIn(10);
        $(".red3").fadeIn(10);
        $(".red4").fadeIn(10);
        $(".red5").fadeIn(10);
        $(".red6").fadeIn(10);
        $(".red7").fadeIn(10);
        $(".red8").fadeIn(10);
        $(".red9").fadeIn(10);
        $(".red10").fadeIn(10);
    });
});

$(document).ready(function () {

    $("#submit").click(function () {
        var totol = 0;
        var number = 0;
        //      var li1='B';
        //      var li2='C';
        //      var li3='A';
        //      var li4='A';
        //      var li5='C';
        //var li6='A';
        //var li7='B';
        //var li8='A';
        //var li9='B';
        //      var li10 = 'A';

        var li = ['B', 'C', 'A', 'A', 'C', 'A', 'B', 'A'];
        var p = [$(".p1"), $(".p2"), $(".p3"), $(".p4"), $(".p5"), $(".p6"), $(".p7"), $(".p8")];

        var choice1 = $('input:radio:checked').eq(0).val();
        var choice2 = $('input:radio:checked').eq(1).val();
        var choice3 = $('input:radio:checked').eq(2).val();
        var choice4 = $('input:radio:checked').eq(3).val();
        var choice5 = $('input:radio:checked').eq(4).val();
        var choice6 = $('input:radio:checked').eq(5).val();
        var choice7 = $('input:radio:checked').eq(6).val();
        var choice8 = $('input:radio:checked').eq(7).val();
        var choice9 = $('input:radio:checked').eq(8).val();
        var choice10 = $('input:radio:checked').eq(9).val();

        var choice = [choice1, choice2, choice3, choice4, choice5, choice6, choice7, choice8];
        var allDone = true;

        for (var i = 0; i < 8; i++) {
            if (choice[i] == null) allDone = false;
        }
        if (allDone == false) {
            alert("请完成所有题目！");
        }
        else {


            for (var i = 0; i < 8; i++) {
                if (li[i] != choice[i]) {
                    //i++;
                    p[i].html("选择错误！");
                    p[i].css("color", "red");
                    number += 1;
                } else {
                    totol += 12.5;
                    p[i].html("选择正确！");
                    p[i].css("color", "green");
                }
            }

            alert("总得分：" + totol + "分 " + "错误题数" + number + "题");

            $("#submit")[0].style.display = 'none';
            $("#answerkey")[0].style.display = 'block';


            //if (li1 != choice1) {
            //    i++;
            //    $(".p1").html("选择错误！");
            //    $(".p1").css("color", "red");
            //    $(".red1").fadeIn(10);
            //} else {
            //    totol += 12.5;
            //    $(".p1").html("选择正确！");
            //    $(".p1").css("color", "green");
            //}

            //if (li2 != choice2) {

            //    i++;
            //    $(".p2").html("选择错误！");
            //    $(".p2").css("color", "red");
            //    $(".red2").fadeIn(10);
            //} else {
            //    totol += 12.5;
            //    $(".p2").html("选择正确！");
            //    $(".p2").css("color", "green");
            //}
            //if (li3 != choice3) {

            //    i++;
            //    $(".p3").html("选择错误！");
            //    $(".p3").css("color", "red");
            //    $(".red3").fadeIn(10);
            //} else {
            //    totol += 12.5;
            //    $(".p3").html("选择正确！");
            //    $(".p3").css("color", "green");
            //}
            //if (li4 != choice4) {

            //    i++;
            //    $(".p4").html("选择错误！");
            //    $(".p4").css("color", "red");
            //    $(".red4").fadeIn(10);
            //} else {
            //    totol += 12.5;
            //    $(".p4").html("选择正确！");
            //    $(".p4").css("color", "green");
            //}
            //if (li5 != choice5) {

            //    i++;
            //    $(".p5").html("选择错误！");
            //    $(".p5").css("color", "red");
            //    $(".red5").fadeIn(10);
            //} else {
            //    totol += 12.5;
            //    $(".p5").html("选择正确！");
            //    $(".p5").css("color", "green");
            //}
            //if (li6 != choice6) {

            //    i++;
            //    $(".p6").html("选择错误！");
            //    $(".p6").css("color", "red");
            //    $(".red6").fadeIn(10);
            //} else {
            //    totol += 12.5;
            //    $(".p6").html("选择正确！");
            //    $(".p6").css("color", "green");
            //}
            //if (li7 != choice7) {

            //    i++;
            //    $(".p7").html("选择错误！");
            //    $(".p7").css("color", "red");
            //    //$(".red7").fadeIn(10);
            //} else {
            //    totol += 12.5;
            //    $(".p7").html("选择正确！");
            //    $(".p7").css("color", "green");
            //}
            //if (li8 != choice8) {

            //    i++;
            //    $(".p8").html("选择错误！");
            //    $(".p8").css("color", "red");
            //    $(".red8").fadeIn(10);
            //} else {
            //    totol += 12.5;
            //    $(".p8").html("选择正确！");
            //    $(".p8").css("color", "green");
            //}
        }

    });
});