/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type ICalculator = {
  id: string;
  income: number;
  expenses: number;
  debts: number;
  assets?: number;
  total?: number;
};

export type CalculatorModel = Model<ICalculator>;
