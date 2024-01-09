import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Details from './Components/Details';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={<Details/>}/>

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
