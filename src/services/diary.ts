import { DiaryEntry, PrivateDiaryEntry, NewDiary } from '../types';
import diaryData from  './diaries.json';

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const getPrivateEntries = (): PrivateDiaryEntry[] => {
  return diaries.map(({ id, weather, date, visibility }) => {
    return { id, date, weather, visibility };
  });
}

export const findById = (id: number): PrivateDiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id);
  if(entry) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary;
  }
  return undefined;
}

export const addDiary = (data: NewDiary): DiaryEntry => {
  const newDiary = { 
    id: Math.max(...diaries.map(d => d.id)) + 1, 
    ...data
  }

  diaries.push(newDiary);
  return newDiary;
}