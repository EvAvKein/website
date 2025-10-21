import {assetSrc} from "../assets.ts";
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
			<img src={assetSrc(props.imgSrc)} alt={props.imgAlt} />
			<video
				loop
				muted
				autoPlay
				disablePictureInPicture
				playsInline
				crossOrigin="anonymous"
				src={assetSrc(props.vidSrc || "")}
				preload={"auto"}
				poster={assetSrc(props.imgSrc)}
			>
				<track kind="captions" />
			</video>
			<div className="projInfo">
				<h3>{props.title}</h3>
				<p>{props.tagline}</p>
				<section className="projTechList">
					{Array.from(props.techsList).map((tech) => {
						return <TechItem key={tech} tech={tech} />;
					})}
				</section>
			</div>
		</a>
	);
}

export default ProjectDisplay;
