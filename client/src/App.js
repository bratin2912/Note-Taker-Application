import './App.css'
import Login from './components/Auth/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home Page/Home/Home';
import AddNote from './components/Home Page/Add Note/AddNote';
import Register from './components/Auth/Register';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/AddNote' element={<AddNote/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
