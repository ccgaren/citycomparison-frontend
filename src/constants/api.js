export const BACKEND = process.env.REACT_APP_MAIN_API_URL;
export const WEATHERAPI = process.env.REACT_APP_WEATHER_API_URL;
export const WEATHERAPIKEY = process.env.REACT_APP_WEATHER_API_KEY;

const AUTH = `${BACKEND}auth/`;
export const LOGIN = `${AUTH}login`;
export const REGISTER = `${AUTH}register`;


const WEATHER = `${BACKEND}weather/`;
export const SAVE_CITIES = `${WEATHER}cities`;
export const GET_CITIES = userId => `${WEATHER}${userId}/cities`