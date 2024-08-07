
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Pagenotfound from './components/Pagenotfound';
import Indiancricket from './components/Indiancricket';
import Politics from './components/Politics';
import Money from './components/Money';
import Topnavigation from './components/Topnavigation';

function App() {
  return (
    // <div className="App">

    <BrowserRouter>
         <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path="/Money" element={<Money/>}></Route>
        <Route path="/Indiancricket" element={<Indiancricket/>}></Route>
        <Route path="/Politics" element={<Politics/>}></Route>
        <Route path ="/Topnavigation" element={<Topnavigation/>}></Route>
        <Route path="*" element={<Pagenotfound/>}></Route>
         </Routes>
    </BrowserRouter>
  );
}

export default App;
