import {useState} from "react";
import ProjectDisplay from "./ProjectDisplay";
import ProjItem from "./ProjItem";
import {
	DisplayProject,
	displayProjects,
	ListProject,
	listProjects,
	moreListProjects,
} from "./projects";
import "./Portfolio.css";

function Portfolio() {
	const [showMoreProjects, setShowMoreProjects] = useState<boolean>(false);

	return (
		<section id="portfolio">
			<h2>Projects</h2>
			<section id="projDisplays">
				{displayProjects.map((proj: DisplayProject) => {
					return (
						<ProjectDisplay
							key={proj.name}
							title={proj.name}
							tagline={proj.description}
							imgSrc={proj.logoSrc}
							imgAlt={proj.logoAlt}
							vidSrc={proj.vidSrc}
							techsList={proj.techsSet}
							link={proj.link}
						/>
					);
				})}
			</section>
			<section id="moreProjects">
				{listProjects.map((proj: ListProject) => {
					return (
						<ProjItem
							key={proj.name}
							logoSrc={proj.logoSrc}
							logoAlt={proj.logoAlt}
							name={proj.name}
							description={proj.description}
							technologies={proj.technologies}
							link={proj.link}
						/>
					);
				})}
			</section>
			<section id="collapsedProjects" className={showMoreProjects ? "open" : ""}>
				<button onClick={() => setShowMoreProjects(!showMoreProjects)}>
					...plus older frontend & fullstack web projects, 12.2021-05.2024
				</button>
				<div inert={!showMoreProjects}>
					{moreListProjects.map((proj: ListProject) => {
						return (
							<ProjItem
								key={proj.name}
								logoSrc={proj.logoSrc}
								logoAlt={proj.logoAlt}
								name={proj.name}
								description={proj.description}
								technologies={proj.technologies}
								link={proj.link}
							/>
						);
					})}
				</div>
			</section>
		</section>
	);
}

export default Portfolio;
