// eslint-disable-next-line no-unused-vars
const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
// eslint-disable-next-line no-unused-vars
const OFFER_CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];
// eslint-disable-next-line no-unused-vars
const OFFER_CHECKING = [
  '12:00',
  '13:00',
  '14:00',
];
// eslint-disable-next-line no-unused-vars
const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const SIMILAR_ADVERT_COUNT = 10;
// eslint-disable-next-line no-unused-vars
const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

// Функция по поиску случайного элемента в переданном массиве.
const getRandomArrayElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length - 1);
  return array[randomIndex];
};

// Функция по поиску случайного целого положительного числа в заданном диапазоне.
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max <= min || max < 0 || min < 0) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция по поиску массива случайной длины из переданных значений.
const getRandomArray = (array) => {
  const newRandomArray = array.slice().sort(() => Math.random() - 0.5);
  return newRandomArray.slice(0, getRandomNumber(1, newRandomArray.length - 1));
};

// Функция по поиску случайного целого положительного числа в заданном диапазоне (обязательное условие - перед однозначными числами ставится 0)
const getRandomAvatar = (min, max) => {
  if (max <= min || max < 0 || min < 0) {
    return null;
  }
  const avatarUserNumber = Math.floor(Math.random() * (max - min)) + min;

  if (min < 10) {
    return `img/avatars/user/0${avatarUserNumber}.png`;
  }
};

// Функция по поиску случайного целого положительного числа в заданном диапазоне с плавающей точкой.
const getRandomCoordinates = (min, max, numberAfterPoint) => {
  if (max <= min || max < 0 || min < 0) {
    return null;
  }
  const randomCoordinates = Number((Math.random() * (max - min) + min).toFixed(numberAfterPoint));
  return randomCoordinates;
};

// eslint-disable-next-line no-unused-vars
const LOCATION = {
  lat: getRandomCoordinates(35.65000, 35.70000, 5),
  lng: getRandomCoordinates(139.7000, 139.8000, 5),
};

// eslint-disable-next-line no-unused-vars
const createAd = () => ({
  author: {
    avatar: getRandomAvatar(1, 10),
  },
  offer: {
    title: 'Unique accommodation for you!', // Уникальное жилье для вас!
    address: `${LOCATION.lat},${LOCATION.lng}`,
    price: getRandomNumber(500, 5000),
    type: getRandomArrayElement(OFFER_TYPES),
    rooms: getRandomNumber(1, 4),
    guests: getRandomNumber(1, 8),
    checkin: getRandomArrayElement(OFFER_CHECKING),
    checkout: getRandomArrayElement(OFFER_CHECKOUT),
    features: getRandomArray(OFFER_FEATURES),
    description: 'Cozy housing at an affordable price is completely at your disposal!', // Уютное жильё по доступной цене полностью в вашем распоряжении!
    photos: getRandomArray(OFFER_PHOTOS),
  },
  location: LOCATION,
});

// eslint-disable-next-line no-unused-vars
const similarAd = new Array(SIMILAR_ADVERT_COUNT).fill(null).map(() => createAd());
