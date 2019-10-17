module.exports = function zeros(expression) {
  const numbers = expression.split("*");
  let fives = 0;
  let twos = 0;
  numbers.forEach(element => {
    let currentElem = parseInt(element);
    if (element[element.length - 2] === "!") {
      if (currentElem % 2 === 0) {
        twos += Math.floor(currentElem / 2) + Math.floor(currentElem / 4);
        fives += Math.floor(currentElem / 10) + Math.floor(currentElem / 50);
      } else {
        fives += Math.floor(currentElem / 5) - Math.floor(currentElem / 10);
        fives += Math.floor(currentElem / 25) - Math.floor(currentElem / 50);
      }
    } else {
      twos += Math.floor(currentElem / 2) + Math.floor(currentElem / 4);
      fives += Math.floor(currentElem / 5) + Math.floor(currentElem / 25);
    }
  });
  return fives < twos ? fives : twos;
};
