import React from "react";
import Myroutes from "./myroutes";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div>
      <Myroutes />
      <Analytics />
    
    </div>
  );
}

export default App;
