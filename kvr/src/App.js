
import './App.css';
import './Jagan.css'

// import Career from './Components/Career';
// import Nav from './Components/Nav';


import './Diwa.css';

// import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Technical from './Components/Technical';
// import Home from './Components/Home';
import Experience from './Components/Experience';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={<Experience/>}/>

        {/* <Route path="/" element={<Technical/>}/> */}
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
