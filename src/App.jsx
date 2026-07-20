import React from "react";
import Myroutes from "./myroutes";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div>
      <Myroutes />
      <Analytics />
      <SpeedInsights />
      
    
    </div>
  );
}

export default App;
