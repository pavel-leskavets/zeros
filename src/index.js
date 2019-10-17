module.exports = function zeros(expression) {
  const numbers = expression.split("*");
  let countOfFives = 0;
  let countOfTwos = 0;
  numbers.forEach(element => {
    let currentElem = parseInt(element);
    if (element[element.length - 2] === "!") {
      if (currentElem % 2 === 0) {
        for (let i = 2; i <= currentElem; i += 2) {
          if (i % 2 === 0) {
            countOfTwos += 1;
          }
          if (i % 10 === 0) {
            countOfFives += 1;
          }
        }
        countOfTwos += Math.floor(currentElem / 4);
        countOfFives += Math.floor(currentElem / 50);
      } else {
        for (let j = 5; j <= currentElem; j += 2) {
          if (j % 5 === 0) {
            countOfFives += 1;
          }
        }
        countOfFives +=
          Math.floor(currentElem / 25) - Math.floor(currentElem / 50);
      }
    } else {
      countOfTwos += Math.floor(currentElem / 2);
      countOfTwos += Math.floor(currentElem / 4);
      countOfFives += Math.floor(currentElem / 5);
      countOfFives += Math.floor(currentElem / 25);
    }
  });
  if (countOfFives < countOfTwos) {
    return countOfFives;
  } else {
    return countOfTwos;
  }
};
