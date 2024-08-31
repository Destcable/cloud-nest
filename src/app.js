import express from 'express'
import dotenv from 'dotenv';
import { fileRouter } from './routes/fileRoutes.js';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/api', fileRouter)

app.get('/', (req, res) => { 
    res.send('<h1>Hello</h1>')
});

app.listen(port, () => { 
    console.log(`☁️  CloudNest | service start (port: ${port})`)
})