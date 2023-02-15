import { Injectable } from '@nestjs/common';
import { CalculatorDTO } from 'src/dto/calculator';

@Injectable()
export class CalculatorService {
  calculate(body: CalculatorDTO) {
    let result: number;

    switch (body.operation) {
      case '*':
        result = body.firstValue * body.secondValue;
        break;
      case '+':
        result = body.firstValue + body.secondValue;
        break;
      case '-':
        result = body.firstValue - body.secondValue;
        break;
      case '/':
        if (body.secondValue === 0) {
          return 'Error: You cannot divide by zero'
        }
        result = body.firstValue / body.secondValue;
        break;
    }

    if (result) {
      return result.toString();
    }

    return 'Error: wrong body';
  }
}
