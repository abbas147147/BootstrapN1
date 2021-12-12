import React from "react";

//components
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Values from "./components/Values";
import Counter from "./components/Counter";
import Features from "./components/Features";

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Values />
      <Counter />
      <Features />
    </div>
  );
};

export default App;
