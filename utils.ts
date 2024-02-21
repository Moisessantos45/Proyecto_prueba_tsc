import { Weather, newDiaryEntry, Visibility } from './types';

const parseComment = (commetFromRequets: any): string => {
  if (isString(commetFromRequets)) {
    throw new Error('incorrect data');
  }
  return commetFromRequets;
};

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('incorrec mission type weather');
  }
  return weatherFromRequest;
};

const isWeather = (parse: any): boolean => {
  return Object.values(Weather).includes(parse);
};

const parseVisibility = (visibilityFromComment: any): Visibility => {
  if (
    !isString(visibilityFromComment) ||
    !isVisibility(visibilityFromComment)
  ) {
    throw new Error('incorrect visibility');
  }
  return visibilityFromComment;
};

const isVisibility = (parse: any): boolean => {
  return Object.values(Visibility).includes(parse);
};

const parseDate = (dateFromRequets: any): string => {
  if (!isString(dateFromRequets) || !isDate(dateFromRequets)) {
    throw new Error('incorrect missing type');
  }
  return dateFromRequets;
};

const isString = (string: string): boolean => {
  return string === 'string';
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const toNewDiaryEntry = (objetc: any): newDiaryEntry => {
  const newEntry: newDiaryEntry = {
    comment: parseComment(objetc.comment),
    date: parseDate(objetc.date),
    weather: parseWeather(objetc.weather),
    visibility: parseVisibility(objetc.visibility)
  };
  return newEntry;
};

export default toNewDiaryEntry;
