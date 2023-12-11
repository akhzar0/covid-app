import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Country from './Pages/Country';
import Nav from './Pages/Nav';
import Home from "./Pages/Home";
import Statewise from "./Pages/Statewise";
import './App.css';
import Notfound from "./Pages/Notfound";
import Flag from "./Pages/Flag";
const App=()=>{
  return(
    <>
     <BrowserRouter>
      <Nav />
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/home' element={<Home/>} />
        <Route path='/country' element={<Country/>} />
        <Route path='/state' element={<Statewise/>} />
        <Route path='/flag' element={<Flag/>} />
        <Route path='/*' element={<Notfound/>} />
      </Routes>
     </BrowserRouter>
    </>
  )
}
export default App;