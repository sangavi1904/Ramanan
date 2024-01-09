import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
