function findLongestWord(str) {
  var longest = 0;
  str = str.split(' ');
  
  for (i = 0; i < str.length; i++) {
    while (longest < str[i].length) {
      longest = str[i].length;
    }
  }
  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");