import {type ReactNode} from "react";
import {type techsSet} from "./techs";
import "./techSelectionButton.css";

function TechSelectionButton(props: {
	techs: techsSet;
	selectedTechs: techsSet;
	children: ReactNode;
}) {
	return (
		<button
			className="techSelectionButton"
			onClick={() => {
				if (props.techs.isSubsetOf(props.selectedTechs))
					props.selectedTechs = props.selectedTechs.difference(props.techs);
				else props.selectedTechs = props.selectedTechs.union(props.techs);
			}}
		>
			{props.children}
		</button>
	);
}
export default TechSelectionButton;
