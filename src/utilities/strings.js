import doge from "../assets/images/doge.png";
import storybookDoc from "../assets/images/storybookDoc.png";

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
  projects: [
    {
      id: 0,
      title: "Paw-some Hex Game",
      subTitle: "Test your hex color code knowledge with this hex code matching game",
      imgSrc: doge,
      link: "https://pawsome-hex-game.netlify.app/",
    },
    {
      id: 1,
      title: "Storybook",
      subTitle: "Check out this site's storybook",
      imgSrc: storybookDoc,
      link: "https://eds-style-guide.netlify.app",
    },
  ],
  skills: {
    title: "What's in my Toolbox?",
    languages: ["JavaScript", "CSS", "HTML", "SCSS", "TypeScript", "JSX", "PHP"],
    librariesAndFrameworks: ["React", "Material-UI", "Bootstrap", "Semantic UI", "React-spring"],
    otherTools: ["Node.js", "MongoDB", "GraphQL", "Figma", "Storybook", "Git", "Styled Components"],
  },
};

export default strings;
