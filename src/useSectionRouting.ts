import {useEffect, useRef} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const SECTIONS = [
	{id: "about", path: "/"},
	{id: "portfolio", path: "/portfolio"},
	{id: "contact", path: "/contact"},
];

const PROGRAMMATIC_SCROLL_FALLBACK = 750;

export default function useSectionRouting() {
	const location = useLocation();
	const navigate = useNavigate();
	const programmaticScroll = useRef(false);
	const pathnameRef = useRef(location.pathname);
	pathnameRef.current = location.pathname;

	useEffect(
		function scrollToSection() {
			const section = SECTIONS.find((section) => section.path === location.pathname);
			if (!section) return;

			const el = document.getElementById(section.id);
			if (!el) return;

			programmaticScroll.current = true;
			el.scrollIntoView({behavior: "smooth", block: "start"});

			const onScrollEnd = () => {
				programmaticScroll.current = false;
				document.removeEventListener("scrollend", onScrollEnd);
			};
			document.addEventListener("scrollend", onScrollEnd);

			const fallback = setTimeout(() => {
				programmaticScroll.current = false;
				document.removeEventListener("scrollend", onScrollEnd);
			}, PROGRAMMATIC_SCROLL_FALLBACK);

			return () => {
				document.removeEventListener("scrollend", onScrollEnd);
				clearTimeout(fallback);
			};
		},
		[location.pathname, navigate],
	);

	useEffect(
		function updateURLbyVisibleSection() {
			const observer = new IntersectionObserver(
				(entries) => {
					if (programmaticScroll.current) return;

					for (const entry of entries) {
						if (entry.isIntersecting) {
							const section = SECTIONS.find((section) => section.id === entry.target.id);
							if (section && section.path !== pathnameRef.current) {
								navigate(section.path, {replace: true});
							}
							break;
						}
					}
				},
				{threshold: 0.3},
			);

			for (const section of SECTIONS) {
				const el = document.getElementById(section.id);
				if (el) observer.observe(el);
			}

			return () => observer.disconnect();
		},
		[navigate],
	);
}
