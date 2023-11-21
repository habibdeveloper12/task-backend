"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
/* eslint-disable @typescript-eslint/no-this-alias */
const mongoose_1 = require("mongoose");
const generateUniqueId_1 = __importDefault(require("../../utils/generateUniqueId"));
const CalculatorSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
CalculatorSchema.pre('save', function (next) {
    // Ensure that this.id is set to a unique value or remove this block if not needed
    if (!this.id) {
        this.id = (0, generateUniqueId_1.default)();
    }
    next();
});
exports.Calculator = (0, mongoose_1.model)('Calculator', CalculatorSchema);
