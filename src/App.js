import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import SrMackfly from './components/project/SrMackfly';
import Sobre from './components/pages/Sobre';


function App() {
  return (
    <BrowserRouter>
      

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/projeto' element={<SrMackfly />} />
          </Routes>

        
    </BrowserRouter>
  );
}

export default App;
