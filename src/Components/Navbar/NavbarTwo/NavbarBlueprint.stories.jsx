import { NavbarBlueprint } from "./NavbarBlueprint";
import beer from "../../assets/beer.png";
export default {
	title: "Component/Navbars/NavbarTwo",
	component: NavbarBlueprint,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component: "Navbar description.",
			},
		},
	},
	argTypes: {
		DarkMode: {
			control: { type: "boolean", description: "Enable or disable dark mode." },
		},
		MenuPosition: {
			control: { type: "boolean", description: "Enable or disable dark mode." },
		},
		ImgStatus: {
			control: { type: "boolean" },
		},
		ListNav: { control: "array" },
	},
};

const Template = (args) => <NavbarBlueprint {...args} />;

export const Navbar = Template.bind({});
// https://en.wikipedia.org/static/images/icons/wikipedia.png
Navbar.args = {
	label: "NavBar",
	ImageLogo: beer,
	DarkMode: true,
    ListNav: [
        { title: "Home", link: "#", icon: "home" },
        { title: "File", link: "#", icon: "document" },
        { title: "Dashboard", link: "#", icon: "chart" },
      ],
};
