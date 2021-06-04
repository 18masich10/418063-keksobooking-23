// Функция, возвращающая случайное целое число из переданного диапазона включительно

// eslint-disable-next-line no-unused-vars
function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInteger(6, 13);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

// eslint-disable-next-line no-unused-vars
function getRandomFractional(numberMin, numberMax) {
  numberMin = Math.ceil(numberMin);
  numberMax = Math.floor(numberMax);

  return Number((Math.random() * (numberMax - numberMin + 1) + numberMin).toFixed(5));
}

getRandomFractional(0, 16);
