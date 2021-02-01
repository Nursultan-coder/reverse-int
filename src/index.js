module.exports = function reverse (n) {
  if(n < 0) {
      n *= -1;
  }
  let str = String(n);
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
  }
  let num = Number(newStr);
  return newStr;
}
