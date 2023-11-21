import express from 'express';
import { calculatorController } from './calculator.controller';

const router = express.Router();

router.post('/calculator', calculatorController.createCalculator);
router.get('/calculator', calculatorController.getCalculator);

export const calculatorRoutes = router;
