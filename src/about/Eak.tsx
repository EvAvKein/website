import {useState} from "react";
import {useEffect} from "react";
import "./Eak.css";

function Eak() {
	const [manualCollapse, setManualCollapse] = useState(false);

	useEffect(() => {
		setManualCollapse(true);
		setTimeout(() => setManualCollapse(false), 2500);
	}, []);

	return (
		<h1 id="eak" className={manualCollapse ? "collapsed" : ""}>
			<span aria-hidden="true" id="eve">
				Ev
				<span aria-hidden="true" className="extra">
					e
				</span>
			</span>
			<span aria-hidden="true" id="aviv">
				Av
				<span aria-hidden="true" className="extra">
					iv
				</span>
			</span>
			<span aria-hidden="true" id="keinan">
				Kein
				<span aria-hidden="true" className="extra">
					an
				</span>
			</span>
		</h1>
	);
}

export default Eak;
