// import {useState} from "react";
import "./Header.css";
import {Link} from "react-router";

function Header() {
	// const [count, setCount] = useState(0);

	return (
		<header>
			<Link to="/portfolio"><span>PORTFOLIO</span></Link>
			<Link to="/">
				<img
					src="/src/assets/eak.svg"
					alt="The initials E.A.K, with E and K rotated and aligned to neatly overlap with the A inbetween"
				/>
			</Link>
			<Link to="/contact"><span>CONTACT</span></Link>
		</header>
	);
}

export default Header;
