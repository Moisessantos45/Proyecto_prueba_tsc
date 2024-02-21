// export type Weather = 'rainy' | 'sunny' | 'windy' | 'cloudy';
// export type Visibility = 'good' | 'poor' | 'ok';

export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Windy = 'windy',
  Cloudy = 'cloudy',
}

export enum Visibility {
  Good = 'good',
  Poor = 'poor',
  Ok = 'ok',
}

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type newDiaryEntry = Omit<DiaryEntry, 'id'>;
