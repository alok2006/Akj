import { Home, Person } from "@mui/icons-material";
import { AboutPage } from "../Page/AboutPage";
import { HomePage } from "../Page/HomePage";

const NavItemList = [
    { name: "Home", url: "", icon: <Home />,elem:<HomePage/> },
    { name: "About", url: 'about', icon: <Person />,elem:<AboutPage/> }
];
export default NavItemList;
