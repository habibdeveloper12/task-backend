import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { calculatorService } from './calculator.service';

const createCalculator: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body);
    const result = await calculatorService.createCalculator(req.body);
    console.log(result);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Here is calculation!',
      data: result,
    });
  }
);
const getCalculator: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body);
    const result = await calculatorService.getCalculator();
    console.log(result);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Here is calculation!',
      data: result,
    });
  }
);

export const calculatorController = {
  createCalculator,
  getCalculator,
};
