import React from "react";
import WeatherDisplay from "./WeatherDisplay";
import InputCity from "./InputCity";

const App: React.FC = () => {
  return (
    <div>
      <h1>Weather App!</h1>
      <InputCity />
      <WeatherDisplay />
    </div>
  );
};

export default App;
