import {assetSrc} from "../assets";
import "./ProjItem.css";

function ProjItem(props: {
	logoSrc: string;
	logoAlt: string;
	name: string;
	description: string;
	technologies: string;
	link: string | undefined;
}) {
	return (
		<a href={props.link} className="projItem">
			<img src={assetSrc(props.logoSrc)} alt={props.logoAlt} />
			<h3>{props.name}</h3>
			<div className="projectTechs">{props.technologies}</div>
			<p>{props.description}</p>
		</a>
	);
}

export default ProjItem;
