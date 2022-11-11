export const testArr = ['33', '+', '33', '*', '53'];

const doAction = (key, numbers) => {
  const [num1, num2] = numbers;
  switch (key) {
    case '+':
      return +num1 + +num2;
    case '-':
      return +num1 - +num2;
    case '*':
      return +num1 * +num2;
    case '/':
      return +num1 / +num2;
    default:
      break;
  }
};

export const evalFunc = (arr) => {
  let newArr = arr;

  if (arr.includes('*') || arr.includes('/')) {
    ['*', '/'].forEach((item) => {
      const index = arr.indexOf(item);
      if (index > -1) {
        const calcedArray = newArr;
        calcedArray.splice(
          index - 1,
          3,
          String(doAction(arr[index], [arr[index - 1], arr[index + 1]])),
        );
        newArr = calcedArray;
      }
    });
  } else if (arr.includes('+') || arr.includes('-')) {
    ['+', '-'].forEach((item) => {
      const index = arr.indexOf(item);
      if (index > -1) {
        const calcedArray = newArr;
        calcedArray.splice(
          index - 1,
          3,
          String(doAction(arr[index], [arr[index - 1], arr[index + 1]])),
        );
        newArr = calcedArray;
      }
    });
  }

  if (newArr.length > 1) {
    evalFunc(newArr);
  }

  return newArr[0];
};
