import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path={"/"} element={<Home />} />
				<Route exact path={"/about"} element={<About />} />
				<Route exact path={"/blog"} element={<Blog />} />
				<Route exact path={"/contactus"} element={<Contact />} />
			</Routes>
		</Router>
	);
}

export default App;
