// Функция, возвращающая случайное целое число из переданного диапазона включительно
// с условием, если передать значение «до» меньше, чем значение «от», или равное ему.

// eslint-disable-next-line no-unused-vars
function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max <= min || max < 0 || min < 0) {
    return null;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInteger(20, 5);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

// eslint-disable-next-line no-unused-vars
function getRandomFractional(minimum, maximum, numberAfterPoint) {
  minimum = Math.ceil(minimum);
  maximum = Math.floor(maximum);

  return Number((Math.random() * (maximum - minimum + 1) + minimum).toFixed(numberAfterPoint));
}

getRandomFractional(0, 16, 5);
