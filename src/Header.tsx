import "./Header.css";
import {Link} from "react-router";

function Header() {
	return (
		<header>
			<Link to="/">
				<img
					src="/src/assets/eak.svg"
					alt="The initials E.A.K, with E and K rotated and aligned to neatly overlap with the A inbetween"
				/>
			</Link>
			<Link to="/#portfolio">
				<div>PORTFOLIO</div>
			</Link>
			<Link to="/#contact">
				<div>CONTACT</div>
			</Link>
		</header>
	);
}

export default Header;
