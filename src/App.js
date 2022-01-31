// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Header from './Components/Header'
import Banner from './Components/Banner'
import Features from './Components/Features';
import Detail from './Components/Detail'
import Detail2 from './Components/Detail2'
import Detail3 from './Components/Detail3'
import People from './Components/People'
import Slice from "./Components/Slice";
import Question from './Components/Question'
import Login from './Components/Login'
import { Routes , Route } from 'react-router-dom'
function App() {
  return (
    <div className="Root">
      <Header/>
      <Routes>
      <Route path="/" element={ <>
        <Banner/>
        <Features/>
        <Detail/>
        <Detail2/>
        <Detail3/>
        <People/>
        <Slice/>
        <Question/>
      </>}></Route>
      <Route path ="/login" element={<Login/>}/>
      </Routes>

     
    </div>
  );
}

export default App;
