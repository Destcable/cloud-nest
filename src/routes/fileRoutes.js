import express from 'express'
import { addFile, deleteFileById, downloadFileById, getFileById } from '../controllers/fileController.js';

export const fileRouter = express.Router();

fileRouter.post('/files', addFile)
fileRouter.get('/files/:id', getFileById)
fileRouter.get('/download/files/:fileId', downloadFileById)
fileRouter.delete('/files/:id', deleteFileById)