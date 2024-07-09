// Task 1: Create a Header Section

// Write a functional component named Header that includes a background image and you or a fictional character name overlaying the background image.
// Expected Outcome: A functional class component named Header rendering an image and a name as part of the portfolio.

import React from "react";
import profilePhoto from "./assets/profile-photo.jpg";

function Header() {
	return (
		<header>
			<h1>Kelsea Conrad</h1>
			<img src={profilePhoto} alt="Kelsea Conrad" />
		</header>
	);
}

export default Header;
