import { Button } from '@mui/material';

const CalculatorKey = ({ onClick, children, id }) => {
  return (
    <Button onClick={onClick} id={id}>
      {children}
    </Button>
  );
};

export default CalculatorKey;
