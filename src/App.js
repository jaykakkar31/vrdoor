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
import BlogDetail from "./components/Blog/BlogDetail"
import Login from "./components/Login/Login";
import AddPost from "./components/AddPost/AddPost";
import SignUp from "./components/SignUp/SignUp";
import Meet from './components/jitsimeet/meet'
import Profile from "./components/Profile/Profile";
import PropListing from './components/UserProperties/PropListings'
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
				<Route exact path={"/singleproperty"} element={<SingleProperty />} />
				<Route exact path={"/singleagent"} element={<SingleAgent />} />
				<Route exact path={"*"} element={<Error />} />
				<Route exact path={"/blogdetail"} element={<BlogDetail />} />
				<Route exact path={"/login"} element={<Login />} />
				<Route exact path={"/addpost"} element={<AddPost />} />
				<Route exact path={"/signup"} element={<SignUp />} />
				<Route exact path={"/meet"} element={<Meet />} />

				<Route exact path={"/profile"} element={<Profile />} />
				<Route exact path={"/listing"} element={<PropListing />} />
			</Routes>
		</Router>
	);
}

export default App;
