/* eslint-disable react/no-this-in-sfc */
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Box, Typography } from '@mui/material';

import CalculatorKey from '@src/components/Global/CalculatorKey';
import { calculatorKeys, opratorsKey, helperKeys, helperKeysTranslator } from '@src/constants';
import { evalFunc } from '@src/utils/eval';

import useStyles from './useStyles';

const Calculator = () => {
  const classes = useStyles();

  const [calcState, setCalcState] = useState([]);
  const [isShowResult, setIsShowResult] = useState(false);
  const [result, setResult] = useState('');

  const handleClickHelperKeys = () => ({
    calcResult(fn) {
      const calc = evalFunc([...calcState]);
      setResult(calc || '');
      fn?.(calc);
    },
    showResult() {
      // or you can use javascript eval function
      if (calcState.length >= 3 && calcState.length % 2 === 1) {
        this.calcResult((calcedRes) => {
          setCalcState([calcedRes]);
        });
        setIsShowResult(true);
      } else {
        toast.error('invalid format');
      }
    },
    delete() {
      if (calcState[calcState?.length - 1]?.length === 1) {
        setCalcState((perv) => {
          const popedData = perv;
          popedData.pop();
          return [...popedData];
        });
      } else {
        setCalcState((perv) => {
          const stringedData = perv?.join(' ');
          return stringedData?.substring(0, stringedData?.length - 1).split(' ');
        });
      }
      this.calcResult();
      setIsShowResult(false);
    },
    clean() {
      setIsShowResult(false);
      setCalcState([]);
    },
  });

  const handleClickItems = (key) => {
    let isUpdate = false;
    const data = calcState;
    setIsShowResult(false);

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

  return (
    <Box className={classes.root}>
      <Box>
        {isShowResult ? (
          <Typography>{result}</Typography>
        ) : (
          calcState.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={`${item}${index}`}>{item}</span>
          ))
        )}
      </Box>
      {[...calculatorKeys, ...opratorsKey, ...helperKeys].map((item) => (
        <CalculatorKey key={item} onClick={() => handleClickItems(item)}>
          {helperKeysTranslator[item] || item}
        </CalculatorKey>
      ))}
    </Box>
  );
};

export default Calculator;
