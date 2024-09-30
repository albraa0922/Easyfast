import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Members from "./pages/Members"
import AppData from './pages/AppData';
import Condition from './pages/Condition';
import Settings from './pages/Settings';
import Login from './Login';
import Join from './pages/Join';
import ChangePassword from './pages/ChangePassword';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
          {/* <Route path='/'   element={<Login/>}/> */}
          <Route path="/"         element={<Home />} />
          <Route path="Members"   element={<Members/>} />
          <Route path="Join"      element={<Join/>} />
          <Route path="Appdata"   element={<AppData />} />
          <Route path="Condition" element={<Condition />} />
          <Route path="ChangePassword"  element={<ChangePassword />} />
          <Route path="Settings"  element={<Settings />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
