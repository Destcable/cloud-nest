import express from 'express'
import { addFile, deleteFileById, getFileById } from '../controllers/fileController.js';

export const fileRouter = express.Router();

fileRouter.post('/files', addFile)
fileRouter.get('/files/:id', getFileById)
fileRouter.delete('/files/:id', deleteFileById)