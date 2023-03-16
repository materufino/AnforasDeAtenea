import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';


import Home from './components/Home';

function App() {

  return (

    <BrowserRouter>

      <div className="App">


        <Routes>
          <Route path='/' element={<Navigate to={'/home'} replace />} />
          <Route path='home' element={<Home />} />
        </Routes>


      </div>

    </BrowserRouter>
  );
}

export default App;
