"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatorRoutes = void 0;
const express_1 = __importDefault(require("express"));
const calculator_controller_1 = require("./calculator.controller");
const router = express_1.default.Router();
router.post('/calculator', calculator_controller_1.calculatorController.createCalculator);
router.get('/calculator', calculator_controller_1.calculatorController.getCalculator);
exports.calculatorRoutes = router;
