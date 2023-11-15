import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Login from './components/project/user/Login';
import Sobre from './components/pages/Sobre';
import Register from './components/project/user/Register';
import ForgotPassword from './components/project/user/ForgotPassword';
import SrMackfly from './components/project/components/pages/SrMackfly';
import Container from './components/layout/Container';

function App() {
  return (
    <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/projeto/login' element={<Login />} />
            <Route path='/projeto/register' element={<Register />} />
            <Route path='/projeto/forgotpassword' element={<ForgotPassword />} />
            <Route path='/projeto/srmackfly' element={<SrMackfly />}/>
          </Routes> 
        </Container>
    </BrowserRouter>
  );
}

export default App;
