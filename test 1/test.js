var input = document.querySelectorAll('textarea')[0];

input.addEventListener('keyup', function() {


})

var words = input.value.match(/\b[-?(\w+)?]+\b/gi);

var sentences = input.value.split(/[.|!|?]/g);

var sentences = input.value.split(/[.|!|?]+/g);

var nonStopWords = [];
var stopWords = ["a", "able", "about", "above",];
for (var i = 0; i < words.length; i++) {
  if (stopWords.indexOf(words[i].toLowerCase()) === -1 && isNaN(words[i])) {
    nonStopWords.push(words[i].toLowerCase());
  }

}
var keywords = {};
for (var i = 0; i < nonStopWords.length; i++) {
  if (nonStopWords[i] in keywords) {
    keywords[nonStopWords[i]] += 1;
  } else {
    keywords[nonStopWords[i]] = 1;
  }
}

var sortedKeywords = [];
for (var keyword in keywords) {
  sortedKeywords.push([keyword, keywords[keyword]])
}
sortedKeywords.sort(function(a, b) {
  return b[1] - a[1]
});

for (var i = 0; i < sortedKeywords.length && i < 4; i++) {
  var li = document.createElement('li');
  li.innerHTML = "" + sortedKeywords[i][0] + ": " + sortedKeywords[i][1];
  topKeywords.appendChild(li);
}

readability.addEventListener('click', function() {

  readability.innerHTML = "Fetching score...";

  var requestUrl = "https://ipeirotis-readability-metrics.p.mashape.com/getReadabilityMetrics?text=";
  var data = input.value;

  var request = new XMLHttpRequest();
  request.open('POST', encodeURI(requestUrl + data), true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.setRequestHeader("X-Mashape-Authorization", "Your API key | Don't use mine!");
  request.send();

  request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      readability.innerHTML = readingEase(JSON.parse(this.response).FLESCH_READING);
    } else {
      readability.innerHTML = "Not available.";
    }
  };

  request.onerror = function() {
    readability.innerHTML = "Not available.";
  };
});

function readingEase(num) {
  switch (true) {
    case (num <= 30):
      return "Readability: College graduate.";
      break;
    case (num > 30 && num <= 50):
      return "Readability: College level.";
      break;


    default:
      return "Not available.";
      break;
  }
}