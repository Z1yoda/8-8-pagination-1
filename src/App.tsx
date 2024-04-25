import { Routes, Route } from 'react-router-dom'
import './App.css'
import Pagination1 from './components/Pagination1'
import Pagination2 from './components/Pagination2'
import Home from './components/Home'

function App() {
 return (
    <>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
         <Route path='/pagination1' element={<Pagination1></Pagination1>}></Route>
        <Route path='/pagination2' element={<Pagination2></Pagination2>}></Route>
    </Routes>
    </>
  )
}

export default App
