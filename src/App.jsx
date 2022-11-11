import { Route, Routes } from 'react-router-dom';
import Calculator from './pages/Calculator';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Calculator />} />
    </Routes>
  );
};

export default App;
