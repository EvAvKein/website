import "./Portfolio.css";
import ProjectDisplay from "./ProjectDisplay";

function Portfolio() {
	return (
		<section id="portfolio">
				<h2>Projects</h2>
				<section id="projects">
					<ProjectDisplay
						title="MiniRayTracer"
						tagline="Raytracing your scenes from scratch: Texture mapping, multi-threaded incremental rendering, live movement and object manipulation, and more!"
						imgSrc="https://raw.githubusercontent.com/EvAvKein/hive_minirt/refs/heads/main/README_assets/eve_wallpaper.png"
						imgAlt="Colorful scene with patterned spheres, cylinders, planes, a cone, and a light source in the center shedding light on all of them"
						vidSrc="/src/assets/projects/miniRT_compilation.mp4"
						techsList={new Set(["C"])}
						selectedTechs={new Set()}
						link="https://github.com/EvAvKein/hive_minirt"
					/>
					<ProjectDisplay
						title="Planet Guardian"
						tagline="A game-jam award winner: Protect your planet from asteroids and temperatures!"
						imgSrc="/src/assets/projects/planetGuardian.png"
						imgAlt="Colorful scene with patterned spheres, cylinders, planes, a cone, and a light source in the center shedding light on all of them"
						vidSrc="/src/assets/projects/planetGuardian_compilation.mp4"
						techsList={new Set(["C"])}
						selectedTechs={new Set()}
						link="https://github.com/EvAvKein/planet_guardian"
					/>
					<ProjectDisplay
						title="So Long"
						tagline="A 2D game made with a minimalist windowing library: Collect the berries and reach the exit! Steppable flood-fill map validation, defeatable chasing enemies"
						imgSrc="/src/assets/projects/soLong.png"
						imgAlt="Colorful scene with patterned spheres, cylinders, planes, a cone, and a light source in the center shedding light on all of them"
						vidSrc="/src/assets/projects/soLong_compilation.mp4"
						techsList={new Set(["C"])}
						selectedTechs={new Set()}
						link="https://github.com/EvAvKein/hive_so_long"
					/>
					<ProjectDisplay
						title="Philosophers"
						tagline="Simulating the Dining Philosophers problem: Manual multi-threading synchronization with mutexes"
						imgSrc="/src/assets/projects/philosophers.png"
						imgAlt="Colorful scene with patterned spheres, cylinders, planes, a cone, and a light source in the center shedding light on all of them"
						vidSrc="/src/assets/projects/philosophers_compilation.mp4"
						techsList={new Set(["C"])}
						selectedTechs={new Set()}
						link="https://github.com/EvAvKein/hive_philosophers"
					/>
				</section>
		</section>
	);
}

export default Portfolio;
