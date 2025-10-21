import {assetSrc} from "../assets";
import {useEffect, useState} from "react";
import "./ContactItem.css";

function ContactItem(props: {logoSrc: string; logoAlt: string; text: string; url: string}) {
	const [urlMounted, setUrlMounted] = useState<string>("");
	const [textMounted, setTextMounted] = useState<string>("");

	useEffect(() => {
		// adding via JS to mitigate scraping
		setUrlMounted(props.url);
		setTextMounted(props.text);
	}, [props.url, props.text]);

	return (
		<a className="contactItem" href={urlMounted} target="_blank">
			<img src={assetSrc(props.logoSrc)} alt={props.logoAlt} />
			<span>{textMounted}</span>
		</a>
	);
}

export default ContactItem;
