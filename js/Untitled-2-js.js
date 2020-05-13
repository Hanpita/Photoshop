// JavaScript Document
$(document).ready(function () {
    $(".answer").click(function () {
        $(".red").fadeIn(10);
    });
});

$(document).ready(function () {

    $("#submit").click(function () {
        var totol = 100;
        var number = 0;
        //var li1='B';
        //var li2='C';
        //var li3='A';
        //var li4='B';
        //var li5='C';

        var li = ['B', 'C', 'A', 'B', 'C'];

        var choice1 = $('input:radio:checked').eq(0).val();
        var choice2 = $('input:radio:checked').eq(1).val();
        var choice3 = $('input:radio:checked').eq(2).val();
        var choice4 = $('input:radio:checked').eq(3).val();
        var choice5 = $('input:radio:checked').eq(4).val();

        var choice = [choice1, choice2, choice3, choice4,choice5];
        var allDone = true;
        for (var i = 0; i < choice.length; i++) {
            if (choice[i] == null) allDone = false;
        }
        if (allDone == false) {
            alert("请完成所有题目！");
        }
        else {
            for (var i = 0; i < li.length; i++) {
                if (li[i] != choice[i]) {
                    totol -= 20;
                    number += 1;
                }
            }
            alert("得分" + totol + " " + "错误题数" + number);

            $("#submit")[0].style.display = 'none';
            $(".answer")[0].style.display = 'block';

            //if (li1 != choice1) {
            //    totol -= 20;
            //    number++;
            //}
            //if (li2 != choice2) {
            //    totol -= 20;
            //    number++;
            //}
            //if (li3 != choice3) {
            //    totol -= 20;
            //    number++;
            //}
            //if (li4 != choice4) {
            //    totol -= 20;
            //    number++;
            //}
            //if (li5 != choice5) {
            //    totol -= 20;
            //    number++;
            //}

        }
    });
});// JavaScript Document