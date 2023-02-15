import { Body, Controller, Post } from '@nestjs/common';
import { CalculatorDTO } from 'src/dto/calculator';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private calculatorService: CalculatorService) { }

  @Post('calculate')
  calculate(@Body() body: CalculatorDTO) {
    return this.calculatorService.calculate(body)
  }

}
