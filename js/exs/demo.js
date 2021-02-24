function validBraces(braces) {
  oCurly = [];
  cCurly = [];
  oSquare = [];
  cSquare = [];
  oCircle = [];
  cCircle = [];
  braces.split('').forEach((v, i) => {
    switch (v) {
      case '{':
        oCurly.push(i);
        break;
      case '}':
        cCurly.push(i);
        break;
      case '(':
        oCircle.push(i);
        break;
      case ')':
        cCircle.push(i);
        break;
      case '[':
        oSquare.push(i);
        break;
      case ']':
        cSquare.push(i);
        break;
    }
  });
  if (
    oCircle.length !== cCircle.length ||
    oSquare.length !== cSquare.length ||
    oCurly.length !== cCurly.length
  ) {
    return false;
  }
  function checkDistance(open, close, name) {
    open.forEach((v, i) => {
      if ((close[i] - v) % 2 !== 0) {
        return false;
      }
    });
  }
  if (
    !checkDistance(oCircle, cCircle, 'circle') ||
    !checkDistance(oSquare, cSquare, 'square') ||
    !checkDistance(oCurly, cCurly, 'curly')
  )
    return false;
  return true;
}
console.log(validBraces('{}[]()'));
