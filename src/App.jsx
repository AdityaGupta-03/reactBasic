import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Form from "./components/Form";
import WordMeaning from "./components/WordMeaning";
import { useState } from "react";
import Alert from "./components/Alert";

// Exporting the App Component to the index.js file
export default function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null);

    let showAlert =  (type, word)=>{
      setAlert({
        type: type,
        msg: word
      })

      // Dismissing alert after 2 seconds
      setTimeout(()=>{
        setAlert(null);
      },2000);

    }

    let toggleMode = ()=>{
      if(mode==="light"){
        setMode("dark");
        document.body.style.backgroundColor = "black";
        showAlert("success", "Dark Mode Enabled");
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("warning", "light Mode Enabled");
      }
    }
    
    return (
        <>
          <Navbar title="Coffee With Addy" mode={mode} toggle={toggleMode}/>
          <Alert alert={alert} />
          <div className="container">
            {/* <Form heading="Write Text here"/> */}
            <WordMeaning  mode={mode} showAlert={showAlert}/>
            {/* <About /> */}
          </div>
        </>
    );
}
