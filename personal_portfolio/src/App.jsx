import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Home from "./Components/Header/Home";
import Resume from "./Components/Resume/Resume";
import Services from "./Components/Services/Services";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Resume />
    </>
  );
}

export default App;
