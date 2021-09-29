import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  static readonly SUM : string = '+';
  static readonly SUB : string = '-';
  static readonly DIV : string = '/';
  static readonly MULT : string = '*';

  constructor() { }

  calc(num1 : number, num2 : number, operator : string): number {
    let result: number;

    switch(operator) {
      case CalculatorService.SUM:
        result = num1 + num2;
      break;
      case CalculatorService.SUB:
        result = num1 - num2;
      break;
      case CalculatorService.DIV:
        result = num1 / num2;
      break;
      case CalculatorService.MULT:
        result = num1 * num2;
      break;
      default:
        result = 0;
    }
    return result;
  }
}
