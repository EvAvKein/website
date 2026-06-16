import Eak from "./Eak";
import "./About.css";

function About() {
	return (
		<div id="about">
			<Eak />
			<section id="aboutGrid">
				<section id="who">
					<h2>Who?</h2>
					<ul>
						<li>
							Cis/agender guy <div>(he/they)</div>
						</li>
						<li>
							Progressive <div>(vegan, accessibility-minded, etc)</div>
						</li>
						<li>Senior gen-Z</li>
					</ul>
				</section>

				<section id="what">
					<h2>What?</h2>
					<ul>
						<li>
							Programming <div>(fullstack web, C++, Linux)</div>
						</li>
						<li>
							Community-building <div>(volunteering, organizing, supporting)</div>
						</li>
						<li>
							Recurring hobbies <div>(sci-fi, D&D, video-games, music, miscellaneous design)</div>
						</li>
					</ul>
				</section>

				<section id="where">
					<h2>Where?</h2>
					<p>
						Finland since summer 2023. Recently graduated out of Hive Helsinki and looking for a new
						opportunities! ~
					</p>
				</section>
			</section>
		</div>
	);
}

export default About;
