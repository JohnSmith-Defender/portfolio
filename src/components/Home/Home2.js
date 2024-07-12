import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							LET ME <span className="purple"> INTRODUCE </span> MYSELF
						</h1>
						<p className="home-about-body">
							I fell in love with programming and I really really love working
							with start-ups...
							<br />
							<br />I am fluent in programming languages like
							<i>
								<b className="purple"> Javascript, Solidity, Typescript and C++. </b>
							</i>
							<br />
							<br />
							My field of Interest's are building new &nbsp;
							<i>
								<b className="purple">Blockchain applications</b> and also in
								areas related to <b className="purple">Game Developing.</b>
							</i>
							<br />
							<br />
							If you want to start{" "}
							<b className="purple">
								<i>Blockchain Company</i>
							</b>{" "}
							and want a
							<i>
								<b className="purple"> Blockchain Developer</b>
							</i>
							&nbsp;&nbsp;I can <strong className="purple">HELP</strong> you!
						</p>
					</Col>
					<Col md={4} className="myAvtar">
						<Tilt>
							<img src={myImg} className="img-fluid" alt="avatar" />
						</Tilt>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
