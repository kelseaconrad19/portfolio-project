import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";

function App() {
	return (
		<div>
			<Header />
			<About />
			<Contact />
		</div>
	);
}

export default App;
