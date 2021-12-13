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
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
