import type {techsSet} from "./techs";
import "./ProjItem.css";

function ProjItem(props: {
	logoSrc: string;
	logoAlt: string;
	name: string;
	description: string;
	technologies: string;
	link: string | undefined;
	selectedTechs: techsSet;
}) {
	return (
		<a href={props.link} className="projItem">
			<img src={props.logoSrc} alt={props.logoAlt} />
			<h3>{props.name}</h3>
			<div className="projectTechs">{props.technologies}</div>
			<p>{props.description}</p>
		</a>
	);
}

export default ProjItem;
