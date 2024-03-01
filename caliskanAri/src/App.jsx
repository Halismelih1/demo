import './App.css'
import Detail from './Detail'
import Home from './Home'
import {
  Routes,
  Route,
} from "react-router-dom";
import SelectLesson from './SelectLesson';
import Soon from './Soon';


function App() {


  return (
  <>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/soon' element={<Soon/>}/>
  <Route path='/lessons/:id' element={<SelectLesson/>}/>
  <Route path='/:sınıf/:id/:dersAdi' element={<Detail/>}/>
  </Routes>
  
  </>


  )
}

export default App
