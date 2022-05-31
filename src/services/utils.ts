import { NewDiary} from "../types";
import { Weather, Visibility } from '../enums';

const parseComment = (comment: any): string => {
  if(!isString(comment)) {
    throw new Error('Incorrect or missing comment');
  }
  return comment;
}

const parseWeather = (weather: any): Weather => {
  if(!isString(weather) || !isWeather(weather)) {
    throw new Error('Incorrect or missing weather');
  }
  return weather;
}

const parseVisibility = (visibility: any): Visibility => {
  if(!isString(visibility) || !isVisibility(visibility)) {
    throw new Error('Incorrect or missing visibility');
  }
  return visibility;
}


const parseDate = (date: any): string => {
  if(!isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date');
  }
  return date;
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
}

const isWeather = (weather: any): boolean => {
  return Object.values(Weather).includes(weather)
}

const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility);
}

const toNewDiary = (object: any): NewDiary => {
  const newDiary: NewDiary = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newDiary
}

export default toNewDiary;