import ContactItem from "./ContactItem";
import "./Contact.css";

function Contact() {
	return (
		<section id="contact">
			<h2>Feel free to reach out! ~</h2>
			<div>
				<ContactItem
					logoSrc="./src/assets/contact.svg"
					logoAlt="Letter icon"
					text="evavkein@gmail.com"
					url="mailto:evavkein@gmail.com"
				/>
				<ContactItem
					logoSrc="./src/assets/linkedin.svg"
					logoAlt="LinkedIn's logo"
					text="linkedin.com/in/evavkein"
					url="https://www.linkedin.com/in/evavkein"
				/>
				<ContactItem
					logoSrc="./src/assets/techs/github.svg"
					logoAlt="GitHub's logo"
					text="github.com/EvAvKein"
					url="https://github.com/EvAvKein"
				/>
			</div>
		</section>
	);
}

export default Contact;
