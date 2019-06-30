// JavaScript Document
$(document).ready(function(){
  $(".answer").click(function(){
  $(".red").fadeIn(10);
  });
});

$(document).ready(function () {

    $("#submit").click(function () {
        var totol=100;
        var i=0;
        var li1='B';
        var li2='C';
        var li3='A';
        var li4='A';
        var li5='C';


        var choice1=$('input:radio:checked').eq(0).val();
        var choice2=$('input:radio:checked').eq(1).val();
        var choice3=$('input:radio:checked').eq(2).val();
        var choice4=$('input:radio:checked').eq(3).val();
        var choice5=$('input:radio:checked').eq(4).val();



        if (li1!=choice1){
            totol-=20;
            i++;
        }
        if (li2!=choice2){
            totol-=20;
            i++;
        }
        if (li3!=choice3){
            totol-=20;
            i++;
        }
        if (li4!=choice4){
            totol-=20;
            i++;
        }
        if (li5!=choice5){
            totol-=20;
            i++;
        }


        alert("得分"+totol+" "+"错误题数"+i);

    });
});