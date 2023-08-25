import './App.css';
import Cart from './Cart';
import Getquote from './Getquote';
import Homepage from './Homepage';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='cart' element={<Cart />} />
    <Route path='getquote' element={<Getquote />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
