import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./Contexts/Notes/NoteState";
import Alert from "./Components/Alert";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useState, useEffect } from "react";

function App() {
  const [alert, setAlert] = useState({message: "", type: ""});
  const sendAlert = (alertMessage, alertType) => {
    setAlert({message: alertMessage, type: alertType});
  }

  // this works but is useless...
  useEffect(() => {
    setTimeout(() => {
      setAlert({message: "", type: ""});
    }, 1500);
  }, [alert]);

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          {alert.message && <Alert message={alert.message} type={alert.type}/>}
          <div className="container my-3">
            <Routes>
              <Route path="/" element={<Home sendAlert={sendAlert} />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login sendAlert={sendAlert} /> } />
              <Route path="/signup" element={<Signup sendAlert={sendAlert} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
