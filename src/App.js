import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Agents from "./components/Agents/Agents";
import Properties from "./components/Properties/Properties";
import SingleProperty from "./components/SingleProperty/SingleProperty";
import SingleAgent from "./components/SingleAgent/SingleAgent";
import Error from "./components/Error/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={"/"} element={<Home />} />
        <Route exact path={"/about"} element={<About />} />
        <Route exact path={"/blog"} element={<Blog />} />
        <Route exact path={"/contactus"} element={<Contact />} />
        <Route exact path={"/agents"} element={<Agents />} />
        <Route exact path={"/properties"} element={<Properties />} />
        <Route exact path={"/single-property"} element={<SingleProperty />} />
        <Route exact path={"/single-agent"} element={<SingleAgent />} />
        <Route exact path={"*"} element={<Error />} />

      </Routes>
    </Router>
  );
}

export default App;
