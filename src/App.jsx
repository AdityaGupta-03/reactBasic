import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Form from "./components/Form";
import { useState } from "react";

// Exporting the App Component to the index.js file
export default function App() {
    const [mode, setMode] = useState("light");

    // Initally we don't want to display the alert
    const [alert, setAlert] = useState(null);

    let showAlert =  (type, word)=>{
      setAlert({
        type: type,
        msg: word
      })

      // Dismissing alert after 3 seconds
      setTimeout(()=>{
        setAlert(null);
      },3000);

    }

    let toggleMode = ()=>{
      if(mode==="light"){
        setMode("dark");
        document.body.style.backgroundColor = "rgb(36 26 66)";
        document.body.style.color = "white";
        showAlert("success", "Dark Mode Enabled");
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        showAlert("warning", "Dark Mode Disabled");
      }
    }
    
    return (
        <>
          <Navbar title="Coffee With Addy" mode={mode} toggle={toggleMode}/>
          <Alert alert={alert} />
          <div className="container">
            <Form heading="Write Text here" />
          </div>
        </>
    );
}
