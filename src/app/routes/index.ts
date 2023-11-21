import express from 'express';
import { calculatorRoutes } from '../modules/calculator/calculator.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/',
    route: calculatorRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
