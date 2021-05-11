import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import TextSection from "./components/TextSection/TextSection"

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Header />
      <Card />
      <TextSection />
    </Router>
  );
}

export default App;
