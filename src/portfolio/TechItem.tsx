import {type tech} from "./techs";
import "./TechItem.css";

function TechItem(props: {techName: tech; techSrc: string}) {
	return (
		<div className="techItem">
			<img src={props.techSrc} alt={props.techName + "'s logo"} />
			<div>{props.techName}</div>
		</div>
	);
}

export default TechItem;
