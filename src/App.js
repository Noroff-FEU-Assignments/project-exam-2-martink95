import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Hotels from "./pages/Hotels/Hotels";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Messages from "./pages/Dashboard/Messages"
import Details from "./pages/Details/Details";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path ="/hotels" exact component={Hotels} />
        <Route path="/hotels/details" exact component={Details} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/messages" exact component={Messages} />
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
