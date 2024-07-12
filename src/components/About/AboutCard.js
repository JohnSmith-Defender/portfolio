import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi Everyone, I am <span className="purple">John Smith </span>
						from <span className="purple"> Toronto, Canada.</span>
						<br />
						I am currently employed as a senior blockchain developer at Ondo.
						<br />
						I have completed Integrated BS in Computer Science at York
						University.
						<br />
						<br />
						My Interests are :
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Helping Startup Companies in Technology
						</li>
						<li className="about-activity">
							<ImPointRight /> Crafting with unusual, unique Thoughts
						</li>
						<li className="about-activity">
							<ImPointRight /> Strategy for toughest Problems
						</li>
					</ul>

					<p style={{ color: "rgb(155 126 172)" }}>
						"Strive to build things that make a difference!"{" "}
					</p>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
