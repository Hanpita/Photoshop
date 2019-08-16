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
		var li6='A';
		var li7='B';
		var li8='A';
		var li9='B';
		var li10='A';
		


        var choice1=$('input:radio:checked').eq(0).val();
        var choice2=$('input:radio:checked').eq(1).val();
        var choice3=$('input:radio:checked').eq(2).val();
        var choice4=$('input:radio:checked').eq(3).val();
        var choice5=$('input:radio:checked').eq(4).val();
		var choice6=$('input:radio:checked').eq(5).val();
		var choice7=$('input:radio:checked').eq(6).val();
		var choice8=$('input:radio:checked').eq(7).val();
		var choice9=$('input:radio:checked').eq(8).val();
		var choice10=$('input:radio:checked').eq(9).val();



        if (li1!=choice1){
            totol-=10;
            i++;
        }
         if (li2!=choice2){
            totol-=10;
            i++;
        }
         if (li3!=choice3){
            totol-=10;
            i++;
        }
         if (li4!=choice4){
            totol-=10;
            i++;
        }
         if (li5!=choice5){
            totol-=10;
            i++;
        }
		if (li6!=choice6){
            totol-=10;
            i++;
        }
		if (li7!=choice7){
            totol-=10;
            i++;
        }
		if (li8!=choice8){
            totol-=10;
            i++;
        }
		if (li9!=choice9){
            totol-=10;
            i++;
        }
		if (li10!=choice10){
            totol-=10;
            i++;
        }


        alert("得分"+totol+" "+"错误题数"+i);

    });
});