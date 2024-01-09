
import './App.css';
// import './Diwa.css';

// import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Technical from './Components/Technical';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/" element={<Technical/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
