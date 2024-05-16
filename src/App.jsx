//  To style the app.jsx: App.css is used
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

let loggedIn = true;
function Success() {
    return <button className="btn btn-danger">Logout</button>;
}
function Danger() {
    return <button className="btn btn-success">Login</button>;
}
let content = loggedIn ? <Success /> : <Danger />;

// Exporting the Component
export default function App() {
    // Only 1 Tag is returned by the React
    return (
        // This is the react Fragment to return multiple things as a single container
        <>
          {/* Component with Prop */}
          <Navbar title="Coffee With Addy" />

          {/* Nesting Function in the App Component */}
          <div className="container">
            <Form heading="Analyze below"/>
            <hr />
            <h3>Are you LoggedIn ?</h3>
            {content}
          </div>
        </>
    );
}
