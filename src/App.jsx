import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import News from "./components/News";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Hero />
      <News />
    </div>
  );
}

export default App;
