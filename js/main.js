// Главный модуль, точка входа
import {SIMILAR_ADVERT_COUNT, createAd} from './data.js';

// eslint-disable-next-line no-unused-vars
const similarAd = new Array(SIMILAR_ADVERT_COUNT).fill(null).map(() => createAd());
