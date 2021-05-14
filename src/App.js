import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Hotels from "./pages/Hotels";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path ="/hotels" exact component={Hotels} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/login" exact component={Login} />
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
