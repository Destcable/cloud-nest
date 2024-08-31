import express from 'express'
import dotenv from 'dotenv';
import { fileRouter } from './routes/fileRoutes.js';
import { docRoutes } from './routes/docRoutes.js';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use('/api', fileRouter);
app.use(docRoutes);

app.listen(port, () => { 
    console.log(`☁️  CloudNest | service start (port: ${port})`)
})