var count = document.getElementById('count');
var input = document.getElementById('input');

input.addEventListener('keyup', function(e){
    
  });

  function wordCounter(text) {
    var text = input.value;
    var wordCount = 0;
    for (var i = 0; i <= text.length; i++) {
      if (text.charAt(i) == ' ') {
        wordCount++;
      }
    }
    count.innerText = wordCount;
  }

  function wordCounter(text) {
    var text = input.value.split(' ');
    var wordCount = 0;
    for (var i = 0; i < text.length; i++) {
      if (text[i] !== ' ') {
        wordCount++;
      }
    }
    count.innerText = wordCount;
  }

  function isWord(str) {
    var alphaNumericFound = false;
    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);
      if ((code > 47 && code < 58) || // numeric (0-9)
          (code > 64 && code < 91) || // upper alpha (A-Z)
          (code > 96 && code < 123)) { // lower alpha (a-z)
        alphaNumericFound = true;
        return alphaNumericFound;
      }
    }
    return alphaNumericFound;
  }

  function wordCounter(text) {
    var text = input.value.split(' ');
    var wordCount = 0;
    for (var i = 0; i < text.length; i++) {
      if (text[i] !== ' ') {
        wordCount++;
      }
    }
    count.innerText = wordCount;
  }

  if (text[i] !== ' ' && isWord(text[i])) {
    wordCount++;
  }

  var globalWordCounter = 0;
  var WORD_LIMIT = 10;

  function wordCounter(text) {
    
    globalWordCounter = wordCount;
  }

  if (globalWordCounter > WORD_LIMIT) {
    e.preventDefault();
    return;
  }

  input.addEventListener('keydown', function(e) {
    if (globalWordCounter > WORD_LIMIT && e.code !== "Backspace") {
      e.preventDefault();
      return;
    }
  });

  input.addEventListener('keydown', function(e) {
    if (globalWordCounter > WORD_LIMIT && e.code !== "Backspace") {
      e.preventDefault();
      return;
    }
  });