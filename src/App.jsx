import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Form from "./components/Form";
import WordMeaning from "./components/WordMeaning";
import { useState } from "react";

// Exporting the App Component to the index.js file
export default function App() {
    const [mode, setMode] = useState("light");
    return (
        <>
          <Navbar title="Coffee With Addy" mode={mode}/>

          <div className="container">
            {/* <Form heading="Write Text here"/> */}
            <WordMeaning  mode={mode}/>
            {/* <About /> */}
          </div>
        </>
    );
}
