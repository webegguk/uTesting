// Please do not change the next 3 lines
export const numberErrMsg = 'Input params need to be numbers!';
export const denominatorErrMsg = 'Denominator must not be zero!';
export const resultErrMsg = 'Result must be a whole number!';

export default function division(num1, num2) {
  const result = num1 / num2;
  if (typeof num1 === 'string') {
    throw new Error(numberErrMsg);
  }
  else if (num2 === undefined) {
    throw new Error(numberErrMsg);
  }
  else if (num1 === null) {
    throw new Error(numberErrMsg);
  }
  else if (num2 === 0) {
    throw new Error(denominatorErrMsg);
  }
  else if ((result - Math.floor(result)) !== 0) {
    throw new Error(resultErrMsg);
  } else {
    return result;
  }
}