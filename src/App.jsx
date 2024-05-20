import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Form from "./components/Form";
import WordMeaning from "./components/WordMeaning";
import { useState } from "react";

// Exporting the App Component to the index.js file
export default function App() {
    const [mode, setMode] = useState("light");

    let toggleMode = ()=>{
      if(mode==="light"){
        setMode("dark");
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      }
      else{
        setMode("light");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      }
    }
    return (
        <>
          <Navbar title="Coffee With Addy" mode={mode} toggle={toggleMode}/>

          <div className="container">
            {/* <Form heading="Write Text here"/> */}
            <WordMeaning  mode={mode} toggle={toggleMode} />
            {/* <About /> */}
          </div>
        </>
    );
}
