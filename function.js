// $(document).ready(function() {
// $("#change_lang").change(function() {
// var x = $(this).val();
// //alert(x);
// if (x == "Hindi") {
// $(".hindi").show();
// $(".english").hide();
// } else {
// $(".english").show();
// $(".hindi").hide();
// }
// });

// $('input:radio').change(function() {
// var x = $(this).attr('name');
// var y = "#result" + x;
// //var p="#box"+x;

// var z = $(y).val();

// if ($(this).is(':checked') && $(this).val() == z) { // Right Answer
// var q = $(this).val();
// var p = "#r" + q + "-" + x;
// var d = "#r" + q + "" + x;
// $(p).css('background', '#53b504');

// //$(d).prop('disabled', true);

// var dd = "#exp" + x;
// //alert(dd);
// $(dd).css('display', 'block');
// var ss = "#sp" + x;
// $(ss).html("<span style='font-weight:bold;'>Very Good! Your Answer is Correct</span>");
// //$(ss).html("Correct Answer");
// $(ss).css('color', '#008000');
// } else {
// var q = $(this).val();
// var p = "#r" + q + "-" + x;
// var t = "#r" + z + "-" + x;
// var p1 = "#r" + q + x;
// var t1 = "#r" + z + x;
// $(p).css('background', 'orange'); // Wrong Answer
// $(p1).prop('checked', false);
// $(t).css('background', '#53b504'); // RIght Answer
// $(t1).prop('checked', true);
// var ss = "#sp" + x;
// $(ss).html("Opps! <span style='font-weight:normal;'>You Choose Wrong Ans!</span><br> <span style='color:green'> Correct Answer is : " + z + "</span>");
// //$(ss).html("Oops! Wrong Answer, 'Correct Answer is : " + z);
// $(ss).css('color', '#ff0000');
// }
// var rA = "#rA" + x;
// var rB = "#rB" + x;
// var rC = "#rC" + x;
// var rD = "#rD" + x;
// $(rA).prop('disabled', true);
// $(rB).prop('disabled', true);
// $(rC).prop('disabled', true);
// $(rD).prop('disabled', true);
// });
// });

$(document).ready(function() {
  $("#change_lang").change(function() {
    var x = $(this).val();
    if (x == "Hindi") {
      $(".hindi").show();
      $(".english").hide();
    } else {
      $(".english").show();
      $(".hindi").hide();
    }
  });

  $('input:radio').change(function() {
    var x = $(this).attr('name');
    var y = "#result" + x;
    var z = $(y).val();

    if ($(this).is(':checked') && $(this).val() == z) { // Right Answer
      var q = $(this).val();
      var p = "#r" + q + "-" + x;
      $(p).css('background', '#53b504');

      var dd = "#exp" + x;
      $(dd).css('display', 'block');
      var ss = "#sp" + x;
      $(ss).html("<span style='font-weight:bold;'>Very Good! Your Answer is Correct</span>");
      $(ss).css('color', '#008000');
      $('#correctSound')[0].play(); // Play correct sound
    } else {
      var q = $(this).val();
      var p = "#r" + q + "-" + x;
      var t = "#r" + z + "-" + x;
      var p1 = "#r" + q + x;
      var t1 = "#r" + z + x;
      $(p).css('background', 'orange'); // Wrong Answer
      $(p1).prop('checked', false);
      $(t).css('background', '#53b504'); // Right Answer
      $(t1).prop('checked', true);
      var ss = "#sp" + x;
      $(ss).html("Opps! <span style='font-weight:normal;'>You Choose Wrong Ans!</span><br> <span style='color:green'> Correct Answer is : " + z + "</span>");
      $(ss).css('color', '#ff0000');
      $('#wrongSound')[0].play(); // Play wrong sound
    }
    var rA = "#rA" + x;
    var rB = "#rB" + x;
    var rC = "#rC" + x;
    var rD = "#rD" + x;
    $(rA).prop('disabled', true);
    $(rB).prop('disabled', true);
    $(rC).prop('disabled', true);
    $(rD).prop('disabled', true);
  });
});