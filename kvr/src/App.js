
import './App.css';
// import './Diwa.css';

// import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Technical from './Components/Technical';
import Details from './Components/Details';
import './Jagan.css'
import Experience from './Components/Experience';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        {/* <Route path="/" element={<Technical/>}/> */}
        {/* <Route path="/" element={<Details/>}/> */}
        <Route path="/" element={<Experience/>}/>


      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
