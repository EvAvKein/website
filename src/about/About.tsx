import Eak from "./Eak";
import "./About.css";

function About() {
	return (
		<div id="aboutWrapper">
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
						<li>
							Neuroatypical <div>(triple-diagnosed - few support needs, many advantages)</div>
						</li>
						<li>Senior gen-Z</li>
					</ul>
				</section>

				<section id="what">
					<h2>What?</h2>
					<ul>
						<li>
							Programming <div>(e.g. web, C++, Linux, Vim)</div>
						</li>
						<li>
							Humanities <div>(e.g. communications, philosophy, equity)</div>
						</li>
						<li>
							Community-building <div>(e.g. volunteering, organizing, supporting)</div>
						</li>
						<li>
							Recurring hobbies <div>(e.g. video-games, crocheting, sci-fi, D&D, music)</div>
						</li>
					</ul>
				</section>

				<section id="where">
					<h2>Where?</h2>
					<p>
						Finland since summer 2023 - currently studying at Hive Helsinki, leading Hive's student
						association, and open to other opportunities!
					</p>
				</section>
			</section>
		</div>
	);
}

export default About;
