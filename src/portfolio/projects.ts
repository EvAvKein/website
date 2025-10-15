import type {techsList} from "./techs";

export const projectCategories = ["Fullstack", "Frontend", "Systems"] as const;

export class Project {
	logoSrc: string;
	logoAlt: string;
	name: string;
	description: string;
	technologies: string;
	techsList: techsList;
	categories: (typeof projectCategories)[number][];
	link?: string;

	constructor(
		logoSrc: Project["logoSrc"],
		logoAlt: Project["logoAlt"],
		name: Project["name"],
		description: Project["description"],
		technologies: Project["technologies"],
		techsList: Project["techsList"],
		categories: Project["categories"],
		link: Project["link"],
	) {
		this.logoSrc = logoSrc;
		this.logoAlt = logoAlt;
		this.name = name;
		this.description = description;
		this.technologies = technologies;
		this.techsList = techsList;
		this.categories = categories;
		this.link = link;
	}
}

export const projects: Project[] = [
	new Project(
		"/projects/hive.png",
		"Hive Helsinki's logo",
		"Studies at Hive Helsinki",
		"Systems programing at Hive Helsinki - implementing raytracing, creating a Linux shell, a 2D game without an engine, manual multi-threading, and more!",
		"C, C++, GDB",
		["C", "C++", "GDB"],
		["Systems"],
		"https://github.com/EvAvKein/hive_all",
	),
	new Project(
		"/private.svg",
		"Book with lock icon",
		"Startup App Demo",
		"Demo app developed while serving as Founding Engineer of pre-seed startup",
		"React Native, Expo, TypeScript",
		["HTML", "CSS", "JavaScript", "TypeScript", "JSDoc", "React Native", "Expo"],
		["Frontend"],
		undefined,
	),
	new Project(
		"/projects/dialplan.svg",
		"The words Dial Plan, in an old-tech font",
		"Dialplan",
		"Scheduling invitations service for call centers",
		"React, TypeScript, Express, PostgreSQL, Jest & Playwright, Docker",
		[
			"HTML",
			"CSS",
			"JavaScript",
			"TypeScript",
			"React",
			"NodeJS",
			"Express",
			"PostgreSQL",
			"Jest",
			"Playwright",
			"Docker",
			"Bash",
		],
		["Fullstack"],
		"https://github.com/EvAvKein/dialplan",
	),
	new Project(
		"/eak.svg",
		"The initials E.A.K, with E & K aligned and rotated to neatly overlap with the A inbetween",
		"This Website",
		"My personal & portfolio website",
		"SvelteKit, TypeScript, Vercel",
		["HTML", "CSS", "JavaScript", "TypeScript", "Svelte"],
		["Frontend"],
		"https://github.com/EvAvKein/website",
	),
	new Project(
		"/projects/filterJobsFeeds.svg",
		"Icon of papers titled 'Job' dropped inside a filter",
		"Filter Jobs Feeds",
		"Browser extension for filtering jobs feeds through blacklisting text",
		"HTML, CSS, JavaScript, JSDoc",
		["HTML", "CSS", "JavaScript", "JSDoc"],
		["Frontend"],
		"https://github.com/EvAvKein/FilterJobsFeeds",
	),
	new Project(
		"/projects/distillogue.svg",
		"Icon of chemistry flask, with bubbling liquids, hung on a stand",
		"Distillogue",
		"Forum platform with configurable interactions",
		"Vue, TypeScript, Express, MongoDB, Playwright, Docker",
		[
			"HTML",
			"CSS",
			"JavaScript",
			"TypeScript",
			"Vue",
			"NodeJS",
			"Express",
			"MongoDB",
			"Playwright",
			"Docker",
			"Bash",
		],
		["Fullstack"],
		"https://github.com/EvAvKein/distillogue",
	),
	new Project(
		"/projects/warehouse.svg",
		"Crate icon",
		"Warehouse",
		'A slot-based inventory management interface, inspired by those of various "sandbox" video-games',
		"HTML, CSS, JavaScript",
		["HTML", "CSS", "JavaScript"],
		["Frontend"],
		"https://github.com/EvAvKein/Warehouse",
	),
];
