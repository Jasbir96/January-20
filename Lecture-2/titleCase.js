var string = "I'm a little tea pot";
var sArr = string.split(" ");
console.log(sArr);
var narr=[];
for (var i = 0; i < sArr.length; i++) {
  var firstChar = sArr[i].charAt(0);
  var restOfWord = sArr[i].substring(1);
  var wholeWord = firstChar.toUpperCase() + restOfWord;
  narr.push(wholeWord);
}
console.log(narr.join(" "));
