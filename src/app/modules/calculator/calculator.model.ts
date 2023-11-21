/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import generateUniqueId from '../../utils/generateUniqueId';
import { CalculatorModel, ICalculator } from './calculator.interface';

const CalculatorSchema = new Schema<ICalculator, CalculatorModel>(
  {
    id: {
      type: String,
      unique: true,
    },
    income: {
      type: Number,
    },
    expenses: {
      type: Number,
      required: true,
    },
    debts: {
      type: Number,
    },
    assets: {
      type: Number,
    },
    total: {
      type: Number,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
CalculatorSchema.pre('save', function (next) {
  // Ensure that this.id is set to a unique value or remove this block if not needed
  if (!this.id) {
    this.id = generateUniqueId();
  }
  next();
});
export const Calculator = model<ICalculator, CalculatorModel>(
  'Calculator',
  CalculatorSchema
);
