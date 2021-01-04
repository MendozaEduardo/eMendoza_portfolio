import doge from "../assets/images/doge.png";
import storybookDoc from "../assets/images/storybookDoc.png";
import meatSmoker from "../assets/images/meatSmoker.png";
import meatSmokerSmall from "../assets/images/meatSmokerSmall.png";
import cMinistry from "../assets/images/cMinistry.png";
import cMinistrySmall from "../assets/images/cMinistrySmall.png";
import LHR from "../assets/images/LHR.png";
import LHRSmall from "../assets/images/LHRSmall.png";

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
    photos: [
      {
        id: 0,
        title: "College Mentor",
        subtitle:
          "I'm a volunteer staff at a college fellowship. I'm passionate about helping students navigate through the difficulties of college life, as well as helping them grow in their faith through helping plan activities, bible studies, etc. I've been involved in youth and elderly ministry and have gone on mission trips to places such as Thailand and Cambodia.",
        img: cMinistry,
        img2: cMinistrySmall,
      },
      {
        id: 1,
        title: "Griller and Meat Smoker",
        subtitle:
          "There's something special about grilling and smoking that you can't replicate on a stovetop. You can find me outside trying out different recipes.",
        img: meatSmoker,
        img2: meatSmokerSmall,
      },
      {
        id: 2,
        title: "Avid Runner",
        subtitle:
          "Call me crazy, but I think there's nothing more freeing than pushing myself during a nice run.",
        img: LHR,
        img2: LHRSmall,
      },
    ],
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
