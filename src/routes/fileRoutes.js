import express from 'express'
import { addFile, getFileById } from '../controllers/fileController.js';

export const fileRouter = express.Router();

fileRouter.post('/files', addFile)
fileRouter.get('/files/:id', getFileById)
fileRouter.delete('/files/:id')