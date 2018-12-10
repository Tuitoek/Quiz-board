$(".btn").click(function(event){
  $(".jumbotron").show();
});

$(document).ready(function() {
    $("form.form").submit(function(event){

      var radio=[input1,input2,input3,input4,input5,];
      var input1= $("input:radio[name=input1]:checked").val();
      var input2= $("input:radio[name=input2]:checked").val();
      var input3= $("input:radio[name=input3]:checked").val();
      var input4= $("input:radio[name=input4]:checked").val();
      var input5= $("input:radio[name=input5]:checked").val();

      var results=[parseInt(input1)+parseInt(input2)+parseInt(input3)+parseInt(input4)+parseInt(input5)]
      $("number-correct").text("You" + "scored" + results + "%");



    });
});
