import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Login from './components/project/user/Login';
import Sobre from './components/pages/Sobre';


function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/projeto' element={<Login />} />
          </Routes> 
    </BrowserRouter>
  );
}

export default App;
