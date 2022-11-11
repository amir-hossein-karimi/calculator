/* eslint-disable react/no-this-in-sfc */
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import CalculatorKey from '@src/components/Global/CalculatorKey';
import { calculatorKeys, opratorsKey, helperKeys } from '@src/constants';
import { evalFunc } from '@src/utils/eval';

const Calculator = () => {
  const [calcState, setCalcState] = useState([]);
  const [result, setResult] = useState('');

  const handleClickHelperKeys = () => ({
    showResult() {
      // or you can use javascript eval function
      const calc = evalFunc([...calcState]);
      setResult(calc || '');
    },
    delete() {
      if (calcState[calcState.length - 1].length === 1) {
        setCalcState((perv) => {
          const popedData = perv;
          popedData.pop();
          return [...popedData];
        });
      } else {
        setCalcState((perv) => {
          const stringedData = perv.join(' ');
          return stringedData.substring(0, stringedData.length - 1).split(' ');
        });
      }
      this.showResult();
    },
    clean() {
      setCalcState([]);
    },
  });

  const handleClickItems = (key) => {
    let isUpdate = false;
    const data = calcState;

    if (calculatorKeys.includes(key)) {
      if (data[0] && !opratorsKey.includes(data[data.length - 1])) {
        data[data.length - 1] = data[data.length - 1] + key;
        isUpdate = true;
      }
      setCalcState(isUpdate ? [...data] : [...data, key]);
    } else if (opratorsKey.includes(key)) {
      if (data[0] && opratorsKey.includes(data[data.length - 1])) {
        data[data.length - 1] = key;
        isUpdate = true;
      }
      setCalcState(isUpdate ? [...data] : [...data, key]);
    } else {
      handleClickHelperKeys()[key]();
    }
  };

  useEffect(() => {
    if (calcState.length >= 3 && calcState.length % 2 === 1) {
      handleClickHelperKeys().showResult();
    }
  }, [calcState]);

  return (
    <Box>
      <Box>
        {calcState.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={`${item}${index}`}>{item}</span>
        ))}
      </Box>
      {calcState.length >= 3 && calcState.length % 2 === 1 && <Box>{result}</Box>}
      {[...calculatorKeys, ...opratorsKey, ...helperKeys].map((item) => (
        <CalculatorKey key={item} onClick={() => handleClickItems(item)}>
          {item}
        </CalculatorKey>
      ))}
    </Box>
  );
};

export default Calculator;
