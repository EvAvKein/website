import Header from "./Header.tsx";
import About from "./about/About.tsx";
import Portfolio from "./portfolio/Portfolio.tsx";
import "./App.css";

function App() {
	return (
		<>
			<Header />
			<main>
				<About />
				<Portfolio />
			</main>
		</>
	);
}

export default App;
