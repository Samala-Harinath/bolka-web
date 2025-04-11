import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";

export const navMenus = [
    {
        id: 0,
        title: "Home",
        arrowDown: "",
        link: "/",
        state: ""
    },
    {
        id: 1,
        title: "Features",
        arrowDown: "",
        link: "/",
        state: "features" 
    },
    {
        id: 2,
        title: "Industries",
        arrowDown: <ChevronDown size={20} />,
        arrowUp: <ChevronUp size={20} />,
        link: "/",
        state: "useCases",
        mode: "mobile"
    },
    {
        id: 3,
        title: "Pricing",
        arrowDown: "",
        link: "/",
        state: ""
    },
];