import express from 'express'
import { startDoc } from '../controllers/docController.js';

export const docRoutes = express.Router();

docRoutes.get('/', startDoc)