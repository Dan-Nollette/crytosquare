//Business Logic(Back-End)
function cryto(text){
  //var alphabet = /[a-z]/;
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var characters = text.split("");
  var onlyLetters = [];
  characters.forEach(function(character){
    alphabet.forEach(function(letter){
      if(character === letter){
        onlyLetters.push(character);
      }
    });
  });
  alert(onlyLetters);
};














//User Interface (UI or Front-End)
$(document).ready(function(){
  $("#crytosquare-form").submit(function(event){
    var textInput = $("#text-input").val().toLowerCase();
    var output = cryto(textInput);

    $("#output").text(output);
    event.preventDefault();
  })
});
