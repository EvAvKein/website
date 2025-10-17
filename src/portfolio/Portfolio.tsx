import "./Portfolio.css";
import ProjectDisplay from "./ProjectDisplay";
import {
	DisplayProject,
	displayProjects,
	ListProject,
	listProjects,
	moreListProjects,
} from "./projects";
import ProjItem from "./ProjItem";

function Portfolio() {
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
							selectedTechs={new Set()}
						/>
					);
				})}
			</section>
			<section id="collapsedProjects">
				<button
					onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
						event.currentTarget.classList.toggle("open");
					}}
				>
					Frontend & fullstack web projects, 01.2021-05.2024
				</button>
				<div>
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
								selectedTechs={new Set()}
							/>
						);
					})}
				</div>
			</section>
		</section>
	);
}

export default Portfolio;
