import Header from "./Header.tsx";
import About from "./about/About.tsx";
import Portfolio from "./portfolio/Portfolio.tsx";
import Contact from "./contact/Contact.tsx";
import "./App.css";

function App() {
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
