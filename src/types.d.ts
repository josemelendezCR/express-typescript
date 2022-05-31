// export type Weather =  'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy';



export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

// export type PrivateDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility' >

export type PrivateDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiary = Omit<DiaryEntry, 'id'>