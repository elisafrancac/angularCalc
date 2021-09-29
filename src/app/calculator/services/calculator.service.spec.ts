import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should ...', inject([CalculatorService],
    (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));

  it('must ensure that 1 + 4 = 5',
    inject([CalculatorService], (service: CalculatorService) => {
      let soma = service.calc(1, 4, CalculatorService.SUM);
      expect(soma).toEqual(5);
  }));

  it('must ensure that 1 - 4 = -3',
    inject([CalculatorService], (service: CalculatorService) => {
      let sub = service.calc(1, 4, CalculatorService.SUB);
      expect(sub).toEqual(-3);
  }));

  it('must ensure that 1 - 4 = -3',
    inject([CalculatorService], (service: CalculatorService) => {
      let sub = service.calc(1, 4, CalculatorService.SUB);
      expect(sub).toEqual(-3);
  }));

  it('must ensure that 1 / 4 = 0.25',
    inject([CalculatorService], (service: CalculatorService) => {
      let div = service.calc(1, 4, CalculatorService.DIV);
      expect(div).toEqual(0.25);
  }));

  it('must ensure that 1 * 4 = 4',
    inject([CalculatorService], (service: CalculatorService) => {
      let mult = service.calc(1, 4, CalculatorService.MULT);
      expect(mult).toEqual(4);
  }));

  it('should return 0 when the operation is invalid',
    inject([CalculatorService], (service: CalculatorService) => {
      let invalidOperation = service.calc(1, 4, '%');
      expect(invalidOperation).toEqual(0);
  }));
});
