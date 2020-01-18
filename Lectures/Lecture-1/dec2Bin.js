function dec2Bin(dec) {
  var bin = 0;
  var pv = 1;
  while (dec != 0) {
    var fv = dec % 2;
    bin = bin + fv * pv;
    pv = pv * 10;
    dec = Math.floor(dec / 2);
  }

  return bin;
}
var dec=dec2Bin(13);
console.log(dec)