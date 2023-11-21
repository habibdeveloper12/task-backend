import { Calculator } from './calculator.model';

const createCalculator = async ({
  income,
  expenses,
  debts,
  assets,
}: any): Promise<any | null> => {
  const incomeWeight = 0.25;
  const expensesWeight = -0.2;
  const debtsWeight = -0.3;
  const assetsWeight = 0.2;

  // Calculate the financial health score
  const financialHealth =
    income * incomeWeight +
    expenses * expensesWeight +
    debts * debtsWeight +
    assets * assetsWeight;
  console.log(financialHealth);

  new Calculator({
    income,
    expenses,
    debts,
    assets,
    total: financialHealth,
  }).save();
  return financialHealth;
};
const getCalculator = async (): Promise<any | null> => {
  const calculator = Calculator.find({});
  console.log(calculator);
  return calculator;
};

export const calculatorService = {
  createCalculator,
  getCalculator,
};
