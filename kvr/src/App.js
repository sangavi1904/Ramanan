
import './App.css';

// import Career from './Components/Career';
import Nav from './Components/Nav';


import './Diwa.css';

import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Technical from './Components/Technical';
import Details from './Components/Details'
import Caro from './Components/Caro';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        {/* <Route path="/" element={<Technical/>}/> */}
        {/* <Route path="/" element={<Details/>}/> */}
        <Route path="/" element={<Caro/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
