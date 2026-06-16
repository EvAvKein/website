import {NavLink, Link} from "react-router-dom";
import eakLogo from "./assets/eak.svg";
import "./Header.css";

function Header() {
	return (
		<>
			<a id="skipToContent" href="#main">
				<div>Skip to content</div>
			</a>
			<header>
				<Link to="/">
					<img
						src={eakLogo}
						alt="The initials E.A.K, with E and K rotated and aligned to neatly overlap with the A inbetween"
					/>
				</Link>
				<NavLink to="/portfolio" className={({isActive}) => (isActive ? "active" : undefined)}>
					<div>PORTFOLIO</div>
				</NavLink>
				<NavLink to="/contact" className={({isActive}) => (isActive ? "active" : undefined)}>
					<div>CONTACT</div>
				</NavLink>
			</header>
		</>
	);
}

export default Header;
