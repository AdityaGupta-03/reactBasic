//  To style the app.jsx: App.css is used
import "./App.css";
import Navbar from "./components/Navbar";

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
            <Navbar name="Coffee With Addy" />
            {/* Nesting Function in the App Component */}
            <div className="container">
                <h1>Hello World</h1>
                {content}
            </div>
        </>
    );
}
