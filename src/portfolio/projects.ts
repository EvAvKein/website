import type { tech, techsSet } from "./techs";

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
		"DiffEd",
		"Real-time collaborative code editor: Live unified diffs between peers, chunk-level diff merging, rich editor, conflict-free through Operational Transformation",
		"assets/projects/diffEd_compilation.mp4",
		"assets/projects/diffEd.png",
		"Two stacked DiffEd editors, each showing one collaborator's live unified diff against the other on the same TypeScript FizzBuzz file: one holds an if/else chain, the other a call to a wordFor() helper, so each pane highlights its peer's version green as additions and its own red as deletions, beside an Accept button",
		new Set<tech>(["TypeScript", "React", "Express", "PostgreSQL", "Docker"]),
		"https://github.com/EvAvKein/DiffEd",
	),
	new DisplayProject(
		"Raytracer",
		"Rendering scenes pixel by pixel: Texture mapping, multi-threaded incremental processing, live movement and object manipulation, robust scene file parsing",
		"assets/projects/miniRT_compilation.mp4",
		"https://raw.githubusercontent.com/EvAvKein/hive_minirt/refs/heads/main/README_assets/eve_wallpaper.png",
		"Colorful scene with patterned spheres, cylinders, planes, a cone, and a light source in the center shedding light on all of them",
		new Set<tech>(["C"]),
		"https://github.com/EvAvKein/hive_minirt",
	),
	new DisplayProject(
		"Fortytwode",
		"Data exporter and profile host for 42 Network students: OAuth, live query progress, raw & curated JSON output, intuitive data view, granular visibility settings",
		"assets/projects/fortytwode_compilation.mp4",
		"assets/projects/fortytwode.png",
		"The Fortytwode web app showing a 42 student profile: Avatar, name, level, campus and coalition, above collapsible sections for projects, evaluations, and achievements",
		new Set<tech>(["Go", "PostgreSQL", "Docker"]),
		"https://github.com/EvAvKein/Fortytwode",
	),
	new DisplayProject(
		"IRC Serv",
		"Standards-compliant IRC server: A single non-blocking event loop, buffered handling of fragmented input, file transfers, a channel-moderating bot",
		"assets/projects/ftIrc_compilation.mp4",
		"assets/projects/ftIrc.png",
		"Terminal running the Irssi IRC client, connected to a local server. Several users chatting in a channel, one of them kicked by a channel operator and then rejoining",
		new Set<tech>(["C++"]),
		"https://github.com/EvAvKein/hive_ft_irc",
	),
	new DisplayProject(
		"Philosophers",
		"Simulating the Dining Philosophers problem: Manual multi-threading synchronization via mutexes, deadlock-free resource acquisition, color-coded logs",
		"assets/projects/philosophers_compilation.mp4",
		"assets/projects/philosophers.png",
		"Terminal output of the simulation, listing millisecond timestamps beside numbered philosophers taking forks, eating, sleeping, and thinking",
		new Set<tech>(["C"]),
		"https://github.com/EvAvKein/hive_philosophers",
	),
	new DisplayProject(
		"Planet Guardian",
		"Game-jam award winner where you only press <space>: Protect your planet from asteroids and temperatures!",
		"assets/projects/planetGuardian_compilation.mp4",
		"assets/projects/planetGuardian.png",
		"Pixel-art scene of space with an Earth-like planet at the center, shielded by a glowing arc, surrounded by a starfield and incoming asteroids, with a health bar in the corner",
		new Set<tech>(["C"]),
		"https://github.com/EvAvKein/planet_guardian",
	),
	// new DisplayProject(
	// 	"Minishell",
	// 	"Command-line shell: Readline-powered prompt with history, pipes and I/O redirections, quote-aware parsing with env variable expansion, builtin commands, signal handling, optional parser visualization",
	// 	"assets/projects/minishell_compilation.mp4",
	// 	"assets/projects/minishell.png",
	// 	"Terminal with a colorful custom shell prompt, running a piped command with input and output redirection, followed by a linked-list visualization of the parsed command breaking it down into INFILE, COMMAND, and OUTFILE nodes",
	// 	new Set<tech>(["C"]),
	// 	"https://github.com/EvAvKein/hive_minishell",
	// ),
];

export const listProjects: ListProject[] = [
	new ListProject(
		"Studies at Hive Helsinki",
		"Systems programing at Hive Helsinki: Implementing raytracing, a Linux shell, 2D games, manual multi-threading, and more!",
		"assets/projects/hive.png",
		"Hive Helsinki's logo",
		"C, C++",
		"https://github.com/EvAvKein/hive_all",
	),
	new ListProject(
		"Startup App Demo",
		"Demo app developed while serving as Founding Engineer of pre-seed startup",
		"assets/projects/private.svg",
		"Book with lock icon",
		"React Native, Expo, TypeScript",
		undefined,
	),
	new ListProject(
		"Filter Jobs Feeds",
		"Browser extension for filtering jobs feeds through blacklisting text",
		"assets/projects/filterJobsFeeds.svg",
		"Icon of papers titled 'Job' dropped inside a filter",
		"HTML, CSS, JavaScript, JSDoc",
		"https://github.com/EvAvKein/FilterJobsFeeds",
	),
	new ListProject(
		"This Website",
		"My personal & portfolio website",
		"assets/eak.svg",
		"The initials E.A.K, with E & K aligned and rotated to neatly overlap with the A inbetween",
		"React, TypeScript, Vercel",
		"https://github.com/EvAvKein/website",
	),
];

export const moreListProjects: ListProject[] = [
	new ListProject(
		"Dialplan",
		"Scheduling invitations service for call centers",
		"assets/projects/dialplan.svg",
		"The words Dial Plan, in an old-tech font",
		"React, TypeScript, Express, PostgreSQL, Jest & Playwright, Docker",
		"https://github.com/EvAvKein/dialplan",
	),
	new ListProject(
		"Distillogue",
		"Forum platform with configurable interactions",
		"assets/projects/distillogue.svg",
		"Icon of chemistry flask, with bubbling liquids, hung on a stand",
		"Vue, TypeScript, Express, MongoDB, Playwright, Docker",
		"https://github.com/EvAvKein/distillogue",
	),
	new ListProject(
		"Warehouse",
		'A slot-based inventory management interface, inspired by those of various "sandbox" video-games',
		"assets/projects/warehouse.svg",
		"Crate icon",
		"HTML, CSS, JavaScript",
		"https://github.com/EvAvKein/Warehouse",
	),
];
