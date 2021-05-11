import './App.css';
import { Button, RedButton } from "./components/Button/Button.elements"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Header />
      <Button>Book hotel</Button>
      <RedButton>Cancel hotel</RedButton>
      <Card />
    </Router>
  );
}

export default App;
