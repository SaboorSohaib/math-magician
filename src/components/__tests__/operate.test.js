import operate from '../../logic/operate';

describe('Test for the operate function', () => {
  it('Should perform the subtraction calculation correctly', () => {
    const firstNumber = 8;
    const secondNumber = 4;
    const operation = '-';

    const result = operate(firstNumber, secondNumber, operation);
    expect(result).toBe('4');
  });

  it('Should perform the Addition calculation correctly', () => {
    const firstNumber = 8;
    const secondNumber = 4;
    const operation = '+';

    const result = operate(firstNumber, secondNumber, operation);
    expect(result).toBe('12');
  });

  it('Should perform the multiplication calculation correctly', () => {
    const firstNumber = 8;
    const secondNumber = 4;
    const operation = 'x';

    const result = operate(firstNumber, secondNumber, operation);
    expect(result).toBe('32');
  });

  it('Should perform the division calculation correctly', () => {
    const firstNumber = 8;
    const secondNumber = 2;
    const operation = '÷';

    const result = operate(firstNumber, secondNumber, operation);
    expect(result).toBe('4');
  });

  it('Should perform the moduls calculation correctly', () => {
    const firstNumber = 8;
    const secondNumber = 4;
    const operation = '%';

    const result = operate(firstNumber, secondNumber, operation);
    expect(result).toBe('0');
  });
});
