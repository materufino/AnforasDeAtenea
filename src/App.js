import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Historia from "./components/Historia"
import Galeria from "./components/Galeria"
import Home from './components/Home';

function App() {

  return (

    <BrowserRouter>

      <div className="App">


        <Routes>
          <Route path='/' element={<Navigate to={'/Home'} replace />} />
          <Route path='Home' element={<Home />} />
          <Route path='Historia' element={<Historia />} />
          <Route path='Galeria' element={<Galeria />} />
        </Routes>


      </div>

    </BrowserRouter>
  );
}

export default App;
