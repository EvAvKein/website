import type {tech, techsSet} from "./techs";

export const projectCategories = ["Fullstack", "Frontend", "Systems"] as const;

class AbstractProject {
	logoSrc: string;
	logoAlt: string;
	name: string;
	description: string;
	link?: string;

	constructor(
		logoSrc: AbstractProject["logoSrc"],
		logoAlt: AbstractProject["logoAlt"],
		name: AbstractProject["name"],
		description: AbstractProject["description"],
		link: AbstractProject["link"],
	) {
		this.logoSrc = logoSrc;
		this.logoAlt = logoAlt;
		this.name = name;
		this.description = description;
		this.link = link;
	}
}

export class DisplayProject extends AbstractProject {
	vidSrc: string;
	techsSet: techsSet;

	constructor(
		name: AbstractProject["name"],
		description: AbstractProject["description"],
		vidSrc: DisplayProject["vidSrc"],
		logoSrc: AbstractProject["logoSrc"],
		logoAlt: AbstractProject["logoAlt"],
		techsList: DisplayProject["techsSet"],
		link: AbstractProject["link"],
	) {
		super(logoSrc, logoAlt, name, description, link);
		this.vidSrc = vidSrc;
		this.techsSet = techsList;
	}
}

export class ListProject extends AbstractProject {
	technologies: string;

	constructor(
		name: AbstractProject["name"],
		description: AbstractProject["description"],
		logoSrc: AbstractProject["logoSrc"],
		logoAlt: AbstractProject["logoAlt"],
		technologies: ListProject["technologies"],
		link: AbstractProject["link"],
	) {
		super(logoSrc, logoAlt, name, description, link);
		this.technologies = technologies;
	}
}

export const displayProjects: DisplayProject[] = [
	new DisplayProject(
		"MiniRayTracer",
		"Raytracing your scenes from scratch: Texture mapping, multi-threaded incremental rendering, live movement and object manipulation, and more!",
		"/src/assets/projects/miniRT_compilation.mp4",
		"https://raw.githubusercontent.com/EvAvKein/hive_minirt/refs/heads/main/README_assets/eve_wallpaper.png",
		"Colorful scene with patterned spheres, cylinders, planes, a cone, and a light source in the center shedding light on all of them",
		new Set<tech>(["C"]),
		"https://github.com/EvAvKein/hive_minirt",
	),
	new DisplayProject(
		"Planet Guardian",
		"A game-jam award winner: Protect your planet from asteroids and temperatures!",
		"/src/assets/projects/planetGuardian_compilation.mp4",
		"/src/assets/projects/planetGuardian.png",
		"Colorful scene with patterned spheres, cylinders, planes, a cone, and a light source in the center shedding light on all of them",
		new Set<tech>(["C"]),
		"https://github.com/EvAvKein/planet_guardian",
	),
	new DisplayProject(
		"So Long",
		"A 2D game made with a minimalist windowing library: Collect the berries and reach the exit! Steppable flood-fill map validation, defeatable chasing enemies",
		"/src/assets/projects/soLong_compilation.mp4",
		"/src/assets/projects/soLong.png",
		"Colorful scene with patterned spheres, cylinders, planes, a cone, and a light source in the center shedding light on all of them",
		new Set<tech>(["C"]),
		"https://github.com/EvAvKein/hive_so_long",
	),
	new DisplayProject(
		"Philosophers",
		"Simulating the Dining Philosophers problem: Manual multi-threading synchronization with mutexes",
		"/src/assets/projects/philosophers_compilation.mp4",
		"/src/assets/projects/philosophers.png",
		"Colorful scene with patterned spheres, cylinders, planes, a cone, and a light source in the center shedding light on all of them",
		new Set<tech>(["C"]),
		"https://github.com/EvAvKein/hive_philosophers",
	),
];

export const listProjects: ListProject[] = [
	new ListProject(
		"Studies at Hive Helsinki",
		"Systems programing at Hive Helsinki: Implementing raytracing, a Linux shell, 2D games, manual multi-threading, and more!",
		"/src/assets/projects/hive.png",
		"Hive Helsinki's logo",
		"C, C++",
		"https://github.com/EvAvKein/hive_all",
	),
	new ListProject(
		"Startup App Demo",
		"Demo app developed while serving as Founding Engineer of pre-seed startup",
		"/src/assets/projects/private.svg",
		"Book with lock icon",
		"React Native, Expo, TypeScript",
		undefined,
	),
	new ListProject(
		"Filter Jobs Feeds",
		"Browser extension for filtering jobs feeds through blacklisting text",
		"/src/assets/projects/filterJobsFeeds.svg",
		"Icon of papers titled 'Job' dropped inside a filter",
		"HTML, CSS, JavaScript, JSDoc",
		"https://github.com/EvAvKein/FilterJobsFeeds",
	),
	new ListProject(
		"This Website",
		"My personal & portfolio website",
		"/src/assets/eak.svg",
		"The initials E.A.K, with E & K aligned and rotated to neatly overlap with the A inbetween",
		"SvelteKit, TypeScript, Vercel",
		"https://github.com/EvAvKein/website",
	),
];

export const moreListProjects: ListProject[] = [
	new ListProject(
		"Dialplan",
		"Scheduling invitations service for call centers",
		"/src/assets/projects/dialplan.svg",
		"The words Dial Plan, in an old-tech font",
		"React, TypeScript, Express, PostgreSQL, Jest & Playwright, Docker",
		"https://github.com/EvAvKein/dialplan",
	),
	new ListProject(
		"Distillogue",
		"Forum platform with configurable interactions",
		"/src/assets/projects/distillogue.svg",
		"Icon of chemistry flask, with bubbling liquids, hung on a stand",
		"Vue, TypeScript, Express, MongoDB, Playwright, Docker",
		"https://github.com/EvAvKein/distillogue",
	),
	new ListProject(
		"Warehouse",
		'A slot-based inventory management interface, inspired by those of various "sandbox" video-games',
		"/src/assets/projects/warehouse.svg",
		"Crate icon",
		"HTML, CSS, JavaScript",
		"https://github.com/EvAvKein/Warehouse",
	),
];
