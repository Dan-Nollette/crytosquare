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
  var square = 0;
  for (var i = 0; i * i < onlyLetters.length; i++) {
    square++;
  }
  var columns = square;
  if (onlyLetters.length <= square * (square - 1)){
    columns--;
  }
  var shuffledLetters =[];
  for(var i = 0; i < columns; i++){
    for(var j = 0; i + (columns * j) < onlyLetters.length; j++){
      shuffledLetters.push(onlyLetters[i + (columns * j)])
    }
  }
  alert("square: " + square +" columns: " + columns + " onlyLetters.length: " + onlyLetters.length + " shuffledLetters: " + shuffledLetters + " shuffledLetters.length: " + shuffledLetters.length );








  var letterCounter = 0;
  var lettersWithSpaces = onlyLetters.map(function(letter){
    letterCounter++;
    if (letterCounter % 5 === 0) {
      return letter + " ";
    } else {
      return letter;
    }
  });
  alert (lettersWithSpaces);
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
