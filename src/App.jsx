import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Form from "./components/Form";
import About from "./components/About";

import { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

// Exporting the App Component to the index.js file
export default function App() {
  const [mode, setMode] = useState("light");

  // Initally we don't want to display the alert
  const [alert, setAlert] = useState(null);

  let intervalId;  // Setting the interval ID

  let showAlert = (type, word) => {
    setAlert({
      type: type,
      msg: word
    })

    // Dismissing alert after 3 seconds
    setTimeout(() => {
      setAlert(null);
    }, 3000);

  }

  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(36 26 66)";
      document.body.style.color = "white";
      showAlert("success", "Dark Mode Enabled");
      
      document.title = `Textutils - Dark Mode`;
      intervalId = setInterval(() => {
        document.title = (document.title === "Textutils - Dark Mode") ? "Install this now" : "Textutils - Dark Mode";
      }, 2000);

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("warning", "Dark Mode Disabled");
      
      clearInterval(intervalId); // Clear the interval using the stored ID
      document.title = "Textutils - Light Mode";
    }
  }

  return (
    <>
    <Navbar title="Coffee With Addy" mode={mode} toggle={toggleMode} intervalID={intervalId}/>
    <Alert alert={alert} />
    <div className="container">
      <BrowserRouter>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Form heading="Write Text here" />
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
      
        

    </>
  );
}
