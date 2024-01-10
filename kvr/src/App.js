
import './App.css';
import Footer from './Components/Footer';

// import Career from './Components/Career';
import Nav from './Components/Nav';


import './Diwa.css';

import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Technical from './Components/Technical';
import Testimonal from './Components/Testimonal';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        {/* <Route path="/" element={<Technical/>}/> */}
        {/* <Route path='/' element={<About/>}/> */}
       



        {/* <Route path="/" element={<Nav/>}/> */}

        {/* <Route path="/" element={<Career/>}/> */}

        {/* <Route path='/' element={<Footer/>}/> */}
        <Route path='/' element={<Testimonal/>}/>


      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
