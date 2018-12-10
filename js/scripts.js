$(".btn").click(function(event){
  $(".jumbotron").show();
});

$(document).ready(function() {
  $("#submit").click(function(){

      var radio=[];
      radio.push($("input:radio[name=input1]:checked").val());
      radio.push($("input:radio[name=input2]:checked").val());
      radio.push($("input:radio[name=input3]:checked").val());
      radio.push($("input:radio[name=input4]:checked").val());
      radio.push($("input:radio[name=input5]:checked").val());


      var correct = 0;

      if(radio[0] == "ECMA"){
        correct++;
      }
      if (radio[1] == "letters"){
        correct++;
      }
      if (radio[2] == 5.1){
        correct++;
      }
      if (radio[3] == "A library of Javascript functions"){
        correct++;
      }
      if (radio[4] == "prompt"){
        correct++;
      }

      $("p#number-correct").html("Your score is " + correct + "/5");



      // $("#after-submit").submit(function(event) {
      //   $("#number-correct").text(function(event){
      //     console.log("You" + "have" + "got" + correct + "correct");
      //   });
      // });

      // event.preventDefault();



});
});
