// Модуль создания данных

import {getRandomNumber, getRandomArrayElement, getRandomArray, getRandomAvatar, getRandomCoordinates} from './util.js';

const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const OFFER_CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_CHECKING = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const SIMILAR_ADVERT_COUNT = 10;

const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createAd = () => {

  const location = {
    lat: getRandomCoordinates(35.65000, 35.70000, 5),
    lng: getRandomCoordinates(139.7000, 139.8000, 5),
  };

  return {
    author: {
      avatar: getRandomAvatar(1, 10),
    },
    offer: {
      title: 'Unique accommodation for you!', // Уникальное жилье для вас!
      address: `${location.lat},${location.lng}`,
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
    location: location,
  };
};

// eslint-disable-next-line no-unused-vars
const similarAd = new Array(SIMILAR_ADVERT_COUNT).fill(null).map(() => createAd());

export {SIMILAR_ADVERT_COUNT,createAd};
