
import './App.css';
// import './Diwa.css';

// import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Technical from './Components/Technical';
import About from './Components/About'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={<Technical/>}/>
        {/* <Route path='/' element={<About/>}/> */}
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
