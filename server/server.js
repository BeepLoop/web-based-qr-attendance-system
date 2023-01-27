import express, { urlencoded, json } from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

const app = express();
const corsOptions = {
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
};

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors(corsOptions));

app.listen(PORT, () => console.log(`listening to port: ${PORT}`));
