import { Router } from 'express';
import * as diaryServices from '../services/diary';
import toNewDiary from '../services/utils';

const router = Router();

router.get('/', (_, res) => {
  res.send(diaryServices.getPrivateEntries());
});

router.post('/', (req, res) => {
  try {
    const newDiary = toNewDiary(req.body);
    const addedDiary = diaryServices.addDiary(newDiary);
    res.json(addedDiary);
  } catch(e: any) {
    res.status(400).send(e.message);
  }
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id);
  return diary ? res.send(diary) : res.sendStatus(404)
});

export default router;