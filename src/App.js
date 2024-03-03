import Navbar from "./Navbar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import { Route, Routes } from 'react-router-dom'
import Project1 from './Pages/Project1'
import Project2 from './Pages/Project2'
import Project3 from './Pages/Project3'
import Project4 from './Pages/Project4'

function App() {

  return (
    <>

      <Navbar></Navbar>

      <div className="container">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/project1' element={<Project1></Project1>}></Route>
          <Route path='/project2' element={<Project2></Project2>}></Route>
          <Route path='/project3' element={<Project3></Project3>}></Route>
          <Route path='/project4' element={<Project4></Project4>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </div>
      
    </>
  );
}

export default App;