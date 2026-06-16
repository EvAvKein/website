import Header from "./Header.tsx";
import About from "./about/About.tsx";
import Portfolio from "./portfolio/Portfolio.tsx";
import Contact from "./contact/Contact.tsx";
import useSectionRouting from "./useSectionRouting.ts";
import "./App.css";

function App() {
	useSectionRouting();

	return (
		<>
			<Header />
			<main id="main">
				<About />
				<hr />
				<Portfolio />
				<hr />
				<Contact />
			</main>
		</>
	);
}

export default App;
