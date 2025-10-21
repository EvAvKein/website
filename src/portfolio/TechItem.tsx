import {assetSrc} from "../assets";
import {type tech} from "./techs";
import "./TechItem.css";

function TechItem(props: {tech: tech}) {
	return (
		<div className="techItem">
			<img
				src={assetSrc(`assets/techs/${props.tech.replaceAll(" ", "").toLowerCase()}.svg`)}
				alt={props.tech + "'s logo"}
			/>
			<div>{props.tech}</div>
		</div>
	);
}

export default TechItem;
