import React from "react";
import "./App.css";

import InputCity from "./InputCity";

const App: React.FC = () => {
  return (
    <div>
      <h1 id='title'>Weather App!</h1>
      <InputCity />
    </div>
  );
};

export default App;
