
import './App.css';

// import Career from './Components/Career';
import Nav from './Components/Nav';


import './Diwa.css';

// import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Technical from './Components/Technical';
import About from './Components/About'
// import Technical from './Components/Technical';
import Home from './Components/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/" element={<Technical/>}/> */}
        {/* <Route path='/' element={<About/>}/> */}
       



        {/* <Route path="/" element={<Nav/>}/> */}

        {/* <Route path="/" element={<Career/>}/> */}

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
