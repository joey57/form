$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var person1Input = $("inout#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput = $("input#animal").val();
    var exclamationInput = $("input#animal").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
    $(".person1").text("blah blah");
    $(".person2").text("blah blah");
    $(".animal").text("blah blah");
    $(".exclamation").text("blah blah");
    $(".verb").text("blah blah");
    $(".noun").text("blah blah");

    $("#story").show();

    event.preventDefault();
  });

});