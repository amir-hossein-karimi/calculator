import { Navigate, Route, Routes } from 'react-router-dom';
import Calculator from './pages/Calculator';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Calculator />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default App;
