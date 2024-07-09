// Task 3: Create a Contact Section

// Develop a class component named Contact that displays simple contact information such as email or a LinkedIn profile.
// Expected Outcome: A Contact class component successfully renders contact information, demonstrating the ability to structure and render basic content in a React class component.

import React from "react";

class Contact extends React.Component {
	render() {
		return (
			<section>
				<h2>Contact Me</h2>
				<p>Email: k@email.com</p>
				<p>LinkedIn: linkedin.com/in/kconrad</p>
			</section>
		);
	}
}

export default Contact;
