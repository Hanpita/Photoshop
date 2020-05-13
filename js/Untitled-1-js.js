// JavaScript Document
$(document).ready(function () {
    $(".answer").click(function () {
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
        //var li10='A';

        var li = ['B', 'C', 'A', 'A', 'C', 'A', 'B', 'A', 'B', 'A'];
      
        var choice1 = $("input[name='a1']:checked").val();
        var choice2 = $("input[name='a2']:checked").val();
        var choice3 = $("input[name='a3']:checked").val();
        var choice4 = $("input[name='a4']:checked").val();
        var choice5 = $("input[name='a5']:checked").val();
        var choice6 = $("input[name='a6']:checked").val();
        var choice7 = $("input[name='a7']:checked").val();
        var choice8 = $("input[name='a8']:checked").val();
        var choice9 = $("input[name='a9']:checked").val();
        var choice10 = $("input[name='a10']:checked").val();

        var choice = [choice1, choice2, choice3, choice4, choice5, choice6, choice7, choice8, choice9, choice10];
        var allDone = true;


        for (var i = 0; i < 10; i++) {
            if (choice[i] == null) allDone = false;
        }
        if (allDone == false) {
            alert("请完成所有题目！");
        }
        else {
            for (var i = 0; i < 10; i++) {
                if (li[i] == choice[i]) {
                    //i++;
                    totol += 10;
                }
                else {
                    number += 1;
                }
                
            }
            alert("得分" + totol + " " + "错误题数" + number);
            $("#submit")[0].style.display = 'none';
            $("#answerkey")[0].style.display = 'block';

            //if (li1 != choice1) {
            //    totol -= 10;
            //    i++;
            //}
            //if (li2 != choice2) {
            //    totol -= 10;
            //    i++;
            //}
            //if (li3 != choice3) {
            //    totol -= 10;
            //    i++;
            //}
            //if (li4 != choice4) {
            //    totol -= 10;
            //    i++;
            //}
            //if (li5 != choice5) {
            //    totol -= 10;
            //    i++;
            //}
            //if (li6 != choice6) {
            //    totol -= 10;
            //    i++;
            //}
            //if (li7 != choice7) {
            //    totol -= 10;
            //    i++;
            //}
            //if (li8 != choice8) {
            //    totol -= 10;
            //    i++;
            //}
            //if (li9 != choice9) {
            //    totol -= 10;
            //    i++;
            //}
            //if (li10 != choice10) {
            //    totol -= 10;
            //    i++;
            //}


       }
    });
});