


$(document).ready(function(){
$("#mySelect").change(function(){
$('#total').css('display','none');
$("#total").show( "drop", {direction: "down"}, 1000 );

		 });
});


$(document).ready(function() {

            $("#title").click(function(){
               $("#TEST").effect( "bounce", {times:3}, 300 );
            });

         });
