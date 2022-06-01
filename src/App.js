import './App.css';
import Sidebar from "./Sidebar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from "./routes/Homepage"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mercury JC!!!</h1>
        <BrowserRouter>
          <Routes>
              <Route path="/home" element={props =><Homepage{...props}/>}/>
            </Routes>  
          
        </BrowserRouter>
        <Sidebar/>
      </header>
    </div>
  );
}

export default App;
