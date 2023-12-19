import Navbar from "./Navbar";
import beerImg from "../../assets/beer.png";
export default {
  title: "Component/Navbars/NavbarOne",
  component: Navbar,
  argTypes: {
    Dark: { control: "boolean" },
    TitleNavbar: { control: "text" },
    ListNav: { control: "array" },
    ImageLogo: { control: "object" },
    Profile: { control: "object" },
  },
};

export const NavbarDark = {
  args: {
    Dark: true,
    TitleNavbar: "Navbar",
    ListNav: [
      { title: "Home", link: "#", icon: "home" },
      { title: "File", link: "#", icon: "document" },
      { title: "Dashboard", link: "#", icon: "chart" },
    ],
  },
};
export const NavbarImage = {
  args: {
    Dark: true,
    ListNav: [
      { title: "Home", link: "#", icon: "home" },
      { title: "File", link: "#", icon: "document" },
      { title: "Dashboard", link: "#", icon: "chart" },
    ],
    ImageLogo: { active: true, src: beerImg },
  },
};

export const NavbarImageAndTitle = {
  args: {
    Dark: true,
    TitleNavbar: "Navbar",
    ListNav: [
      { title: "Home", link: "#", icon: "home" },
      { title: "File", link: "#", icon: "document" },
      { title: "Dashboard", link: "#", icon: "chart" },
    ],
    ImageLogo: { active: true, src: beerImg },
  },
};

export const NavbarTitleAndProfile = {
  args: {
    Dark: true,
    TitleNavbar: "Navbar",
    Profile: {
      active: true,
      src: beerImg,
      name: "John Doe",
    },
  },
};
