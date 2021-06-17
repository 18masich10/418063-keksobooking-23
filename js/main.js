// eslint-disable-next-line no-unused-vars
const AUTHOR = {
  avatar: 'url("img/avatars/user{{xx}}.png")',
};
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
const getRandomArrayElement = (elements) => elements[_.random(0, elements.length - 1)];

// Функция по поиску случайного целого положительного числа в заданном диапазоне.
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max <= min || max < 0 || min < 0) {
    return null;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNumber();

// Функция по поиску случайного целого положительного числа в заданном диапазоне (обязательное условие - перед однозначными числами ставится 0)
function getRandomAvatar(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (max <= min || max < 0 || min < 0) {
    return null;
  }
  const avatarUserNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  if (min < 10) {
    return `img/avatars/user0 ${avatarUserNumber}.png`;
  }
}
getRandomAvatar();

// Функция по поиску случайного целого положительного числа в заданном диапазоне с плавающей точкой.
function getRandomСoordinates(min, max, numberAfterPoint) {
  if (max <= min || max < 0 || min < 0) {
    return null;
  }
  const randomCoordinates = Number((Math.random() * (max - min + 0.01) + min).toFixed(numberAfterPoint));
  return randomCoordinates;
}
getRandomСoordinates();

// eslint-disable-next-line no-unused-vars
const createAd = () => ({
  author: {
    avatar: getRandomAvatar(1, 10),
  },
  offer: {
    title: 'Unique accommodation for you!', // Уникальное жилье для вас!
    address: `lat: ${getRandomСoordinates(35.65000, 35.70000, 5)}, lng: ${getRandomСoordinates(139.70000, 139.80000, 5)}`,
    price: getRandomNumber(500, 5000),
    type: getRandomArrayElement(OFFER_TYPES),
    rooms: getRandomNumber(1, 4),
    guests: getRandomNumber(1, 8),
    checkin: getRandomArrayElement(OFFER_CHECKING),
    checkout: getRandomArrayElement(OFFER_CHECKOUT),
    features: getRandomArrayElement(OFFER_FEATURES),
    description: 'Cozy housing at an affordable price is completely at your disposal!', // Уютное жильё по доступной цене полностью в вашем распоряжении!
    photos: getRandomArrayElement(OFFER_PHOTOS),
  },
  location: {
    lat: getRandomСoordinates(35.65000, 35.70000, 5),
    lng: getRandomСoordinates(139.70000, 139.80000, 5),
  },
});

// eslint-disable-next-line no-unused-vars
const similarAd = new Array(SIMILAR_ADVERT_COUNT).fill(null).map(() => createAd());
