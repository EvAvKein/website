import {type techsSet} from "./techs";
import TechItem from "./TechItem.tsx";
import "./ProjectDisplay.css";

function ProjectDisplay(props: {
	title: string;
	tagline: string;
	imgSrc: string;
	imgAlt: string;
	vidSrc: string | undefined;
	techsList: techsSet;
	link: string | undefined;
}) {
	return (
		<a className="projDisplay" href={props.link}>
			<img src={props.imgSrc} alt={props.imgAlt} />
			<video
				loop
				muted
				autoPlay
				disablePictureInPicture
				playsInline
				crossOrigin="anonymous"
				src={props.vidSrc}
				preload={"auto"}
				poster={props.imgSrc}
			>
				<track kind="captions" />
			</video>
			<div className="projInfo">
				<h3>{props.title}</h3>
				<p>{props.tagline}</p>
				<section className="projTechList">
					{Array.from(props.techsList).map((tech) => {
						return (
							<TechItem
								key={tech}
								techName={tech}
								techSrc={`/src/assets/techs/${tech.replaceAll(" ", "").toLowerCase()}.svg`}
							/>
						);
					})}
				</section>
			</div>
		</a>
	);
}

export default ProjectDisplay;
