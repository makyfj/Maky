import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import logo from "../public/images/site/avatar.jpg";

export const projects = [
  {
    title: "Powerful",
    quickTitle: "Powerful is a simple and intuitive workout experience",
    description:
      "This project allows to track your workout journey by creating workouts and progress. It uses NextJS, RTK Query for state management, and Tailwindcss for the client side. For the server it uses NodeJS, ExpressJS, PostgresSQL, Prisma, JWT and TypeScript",
    skills:
      "NextJS, Redux, Redux Toolkit, RTK Query, Tailwindcss, PostgresSQL, Prisma, JWT, Express, NodeJS, TypeScript, Cloudinary, Heroku, Vercel",
    image: logo,
    github: "https://www.github.com/makyfj/Powerful",
    gitHubIcon: <GitHubIcon fontSize="inherit" />,
    liveVersion: "https://powerful.vercel.app",
    liveVersionIcon: <LinkIcon fontSize="inherit" />,
  },
  {
    title: "IFT",
    quickTitle: "IFT is a place to post unique items and objects",
    description:
      "This project allows users to post pictures of unique items that they find interesting. It has dark and light mode. It uses NextJS, Chakra-UI, Redux Toolkit, and TypeScript for the client side. For the server it uses NestJS, JWT, PostgresSQL, TypeORM and TypeScript.",
    skills:
      "NextJS, Chakra-UI, Redux Toolkit, TypeScript, NestJS, JWT, PostgresSQL, TypeORM, Cloudinary, Heroku, Vercel",
    image: logo,
    github: "https://www.github.com/makyfj/IFT",
    liveVersion: "https://ift.vercel.app",
    gitHubIcon: <GitHubIcon fontSize="inherit" />,
  },
  {
    title: "Idea Net",
    quickTitle: "Project using MERN stack with Vite as front end tooling",
    description:
      "Project to allows to share your ideas in the world wide web!!. It uses jwt for authentication. As well, using redux toolkit for state management. Using vitejs instead for cra because it is faster ;). Backend with MongoDB, Express and NodeJS. Front end is hosted @ Netlify and Back end is hosted @ Heroku.",
    skills:
      "React, Vite, MongoDB, Express, NodeJS, JWT, Heroku, Netlify, JavaScript, Heroku",
    image: logo,
    github: "https://github.com/makyfj/IdeaNet.git",
    gitHubIcon: <GitHubIcon fontSize="inherit" />,
    liveVersion: "https://idea-net.netlify.app",
    liveVersionIcon: <LinkIcon fontSize="inherit" />,
  },
  {
    title: "ITS: Issue Tracking System",
    quickTitle: "Web-Base Issue Tracking System",
    description:
      "Project allows to keep track of multiple issues/tickets related to a specific category. The server side uses MongoDB, Express, TypeScript and JWT. The client side uses NextJS, Redux Toolkit and JavaScript. This project was a group project, I worked in the backend and the logic for the front end.",
    skills:
      "MongoDB, Express, NodeJS, TypeScript, JWT, Redux Toolkit, CSS3, NextJS, JavaScript, Heroku, Vercel",
    image: logo,
    github: "https://www.github.com/makyfj/ITS",
    gitHubIcon: <GitHubIcon fontSize="inherit" />,
    liveVersion: "https://its-client.vercel.app",
    liveVersionIcon: <LinkIcon fontSize="inherit" />,
  },
  {
    title: "Countdown Lover",
    quickTitle:
      "Simple project that counts down the time until I see my soulmate",
    description:
      "Using NextJS with Material-UI to create a simple grid yet aesthetically pleasing to look at.",
    skills: "JavaScript, NextJS, Material-UI",
    image: logo,
    github: "https://www.github.com/makyfj/countdownTimer",
    gitHubIcon: <GitHubIcon fontSize="inherit" />,
    liveVersion: "https://sydneyandfranklinforever.netlify.app/",
    liveVersionIcon: <LinkIcon fontSize="inherit" />,
  },
  {
    title: "Adelphi News",
    quickTitle:
      "Adelphi News scrapper to read the most recent articles posted on Adelphi University Web Site",
    description:
      "This project allows news/articles to be scrapped from the Adelphi Web Site with BeautifulSoup4 and store them in a JSON file that will be stored in a Alexa Skill. It uses Alexa-SDK for Python to play with Alexa Skill.",
    skills: "Python, Alexa Skill, Alexa-SDK, BeautifulSoup4, JSON",
    image: logo,
    github: "https://www.github.com/makyfj/AdelphiNews",
    gitHubIcon: <GitHubIcon fontSize="inherit" />,
    liveVersionIcon: <LinkIcon fontSize="inherit" />,
  },
];
