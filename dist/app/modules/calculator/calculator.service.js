"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatorService = void 0;
const calculator_model_1 = require("./calculator.model");
const createCalculator = ({ income, expenses, debts, assets, }) => __awaiter(void 0, void 0, void 0, function* () {
    const incomeWeight = 0.25;
    const expensesWeight = -0.2;
    const debtsWeight = -0.3;
    const assetsWeight = 0.2;
    // Calculate the financial health score
    const financialHealth = income * incomeWeight +
        expenses * expensesWeight +
        debts * debtsWeight +
        assets * assetsWeight;
    console.log(financialHealth);
    new calculator_model_1.Calculator({
        income,
        expenses,
        debts,
        assets,
        total: financialHealth,
    }).save();
    return financialHealth;
});
const getCalculator = () => __awaiter(void 0, void 0, void 0, function* () {
    const calculator = calculator_model_1.Calculator.find({});
    console.log(calculator);
    return calculator;
});
exports.calculatorService = {
    createCalculator,
    getCalculator,
};
