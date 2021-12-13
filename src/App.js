import React from "react";

//components
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Values from "./components/Values";
import Counter from "./components/Counter";
import Features from "./components/Features";
import Services from "./components/Services";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <About />
      <Values />
      <Counter />
      <Features />
      <Services />
      <Pricing />
    </div>
  );
};

export default App;
