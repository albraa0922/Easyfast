import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Members from "./pages/Members"
import AppData from './pages/AppData';
import Condition from './pages/Condition';
import Settings from './pages/Settings';
import Join from './Join/Join';
import ChangePassword from './ChangePassword';
import Login from "./Login"


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
          <Route path='/'   element={<Login/>}/>
          <Route path="/Home"         element={<Home />} />
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
