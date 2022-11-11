import { Button } from '@mui/material';

const CalculatorKey = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default CalculatorKey;
