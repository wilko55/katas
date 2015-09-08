module.exports = {
  isogramChecker: function(word){
    var isIsogram = true;
    if (word.length > 0){
      for(var i=0; i<word.length; i++){
        var j = i + 1;
        if (word[i] == word[j]){
          isIsogram = false;
          break;
        };
      };
    };
    return isIsogram;
  },
};




//  scrabbleChecker: function(words){
//    isoCount = [];
//    if (words instanceof Array){
//      for (var i=0; i<words.length; i++){
//        if (isogramChecker(words[i]) == true){
//          isoCount.push(words[i]);
//        };
//      };
//    };
//  }