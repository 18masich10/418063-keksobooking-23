// Модуль со вспомогательными функциями

// Функция по поиску случайного целого положительного числа в заданном диапазоне.
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max <= min || max < 0 || min < 0) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция по поиску случайного элемента в переданном массиве.
const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

// Функция по поиску массива случайной длины из переданных значений.
const getRandomArray = (array) => {
  const newRandomArray = array.slice().sort(() => Math.random() - 0.5);
  return newRandomArray.slice(0, getRandomNumber(1, newRandomArray.length - 1));
};

// Функция по поиску случайного целого положительного числа в заданном диапазоне (обязательное условие - перед однозначными числами ставится 0)
const getRandomAvatar = (min, max) => {
  const avatarUserNumber = Math.floor(Math.random() * (max - min)) + min;

  if (max <= min || max < 0 || min < 0) {
    return null;
  }
  if (avatarUserNumber <= 9) {
    return `img/avatars/user/0${avatarUserNumber}.png`;
  }
  return `img/avatars/user/${avatarUserNumber}.png`;
};

// Функция по поиску случайного целого положительного числа в заданном диапазоне с плавающей точкой.
const getRandomCoordinates = (min, max, numberAfterPoint) => {
  if (max <= min || max < 0 || min < 0) {
    return null;
  }
  const randomCoordinates = Number((Math.random() * (max - min) + min).toFixed(numberAfterPoint));
  return randomCoordinates;
};

export {getRandomNumber, getRandomArrayElement, getRandomArray, getRandomAvatar, getRandomCoordinates};
