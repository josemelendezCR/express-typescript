import express from 'express';
import diaryRouter from './routes/diaries';
const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/api/diaries', diaryRouter);

app.get('/ping', (_, res) => res.send('Pong'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))