import './App.css'
import Detail from './Detail'
import Home from './Home'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import SelectLesson from './SelectLesson';


function App() {


  return (
  <>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/lessons/:id' element={<SelectLesson/>}/>
  <Route path='/detail/:id/:dersAdi' element={<Detail/>}/>
  </Routes>
  
  </>


  )
}

export default App