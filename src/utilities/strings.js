import edsAutos from "../assets/images/edsAutos.png";
import githubMark from "../assets/images/githubMark.png";
import storybookDoc from "../assets/images/storybookDoc.png";
import BuildIcon from "@material-ui/icons/Build";
import CodeIcon from "@material-ui/icons/Code";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import { ListItemIcon } from "@material-ui/core";

const strings = {
  navBar: {
    title: "Eduardo Mendoza",
    linkedInRef: "https://www.linkedin.com/in/eduardo-mendoza-1b3ba9128/",
    gitHubRef: "https://github.com/MendozaEduardo",
  },
  hero: {
    title: "Hello, I'm ",
    name: "Eduardo Mendoza",
    subtitle: "Welcome to my portfolio",
    cta: "See more",
  },
  aboutMe: {
    title: "About Me",
    subtitle:
      "I'm a developer with both front and back-end experience from Austin with a passion for building beautiful, responsive web applications.",
  },
  photoGrid: {
    title: "Some Snapshots into my Life",
  },
  projects: {
    items: [
      {
        id: 0,
        title: "Ed's Autos",
        subTitle: "Check out my full-stack project",
        imgSrc: edsAutos,
        link: "https://eds-autos-prod.herokuapp.com/",
        selected: false,
      },
      {
        id: 1,
        title: "My GitHub",
        subTitle: "Check out my code",
        imgSrc: githubMark,
        link: "https://github.com/MendozaEduardo",
        selected: false,
      },
      {
        id: 2,
        title: "Storybook",
        subTitle: "Check out this site's storybook",
        imgSrc: storybookDoc,
        link: "https://eds-style-guide.netlify.app",
        selected: false,
      },
    ],
  },
  skills: {
    title: "What's in my Toolbox?",
    columns: [
      {
        title: "Programming Languages",
        icon: CodeIcon,
        items: ["Javascript", "CSS", "HTML", "Typescript", "JSX", "PHP"],
      },
      {
        title: "Libraries and Frameworks",
        icon: LibraryBooksIcon,
        items: [
          "React.js",
          "React Native",
          "Material-UI",
          "Bootstrap",
          "react-spring",
          "Semantic UI",
        ],
      },
      {
        title: "Other Development Tools",
        icon: BuildIcon,
        items: ["Node.js", "Express.js", "MongoDB", "Figma", "Storybook", "Github/Gitlab"],
      },
    ],
  },
};

export default strings;
