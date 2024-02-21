import express from 'express';
import * as diaryServices from '../services/diaryServices';
import toNewDiaryEntry from '../../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id);
  // console.log(diary)
  res.send(diary);
});

router.post('/save', (req, res) => {
  // const { comment, date, visibility, weather } = req.body;
  const newDiaryEntry = toNewDiaryEntry(req.body);
  const addedDiaryEntries = diaryServices.addDiary(newDiaryEntry);
  res.json(addedDiaryEntries);
});

export default router;
