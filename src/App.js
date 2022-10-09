import './App.css';
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div className='container mt-4'>
      <div className="row">
          <div className='col-12'>
          <Routes>
             <Route path='/' element={<Home/> }/>
             <Route path='/user/:id' element={<Details/> }/>
         </Routes>
          </div>
      </div>
    </div>
  );
}

export default App;
