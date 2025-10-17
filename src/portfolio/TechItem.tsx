import {type tech} from "./techs";
// import TechSelectionButton from "./TechSelectionButton";
import "./TechItem.css";

function TechItem(props: {techName: tech; techSrc: string}) {
	return (
		<div className={"techItem" /*+ (props.selectedTechs.has(props.techName) ? " selected" : "")*/}>
			{/* <TechSelectionButton techs={new Set([props.techName])} selectedTechs={props.selectedTechs}>
				<> */}
			<img src={props.techSrc} alt={props.techName + "'s logo"} />
			<div>{props.techName}</div>
			{/* </>
			</TechSelectionButton> */}
		</div>
	);
}

export default TechItem;
