import "./App.css";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import { useState } from "react";

function App() {
  const [isAuthenticated,setAutheticated] = useState(false)
  const handleAuthentication = (state)=>{
    setAutheticated(state)
  }

  return (
    <main className="container">
      {isAuthenticated ? <Dashboard /> : <SignIn handleAuthentication={handleAuthentication}/>}
    </main>
  );
}

export default App;
