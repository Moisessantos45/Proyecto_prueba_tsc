import expres from 'express';
import router from './routers/diares';
import dotenv from "dotenv"
import cors from "cors"

const app = expres();

app.use(expres.json());
dotenv.config()
app.use(cors())

const PORT =process.env.PORT || 4000;

app.get('/ping', (_req, res) => {
  res.send('funcionando correctamente');
});

app.use('/api/diaries', router);

app.listen(PORT, () => {
  console.log(`Conectado puerto ${PORT}`);
});
