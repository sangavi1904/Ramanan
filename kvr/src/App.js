
import './Diwa.css';
// import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './Components/Nav';
import Details from './Components/Details';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        {/* <Route path="/" element={<Nav/>}/> */}
        <Route path="/" element={<Details/>}/>




      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
