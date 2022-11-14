import React from "react";
import Signup from "./components/Signup";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Signup />;
    </AuthProvider>
  );
}

export default App;
