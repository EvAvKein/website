import eakLogo from "./assets/eak.svg";
import "./Header.css";

function Header() {
	return (
		<header>
			<a href="#">
				<img
					src={eakLogo}
					alt="The initials E.A.K, with E and K rotated and aligned to neatly overlap with the A inbetween"
				/>
			</a>
			<a href="#portfolio">
				<div>PORTFOLIO</div>
			</a>
			<a href="#contact">
				<div>CONTACT</div>
			</a>
		</header>
	);
}

export default Header;
