import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import logo from "../public/images/site/avatar.jpg";

export const projects = [
  {
    title: "ProShop",
    quickTitle: "E-commerce with React, NodeJs, ExpressJs, and MongoDB",
    description:
      "My first big project using the MERN stack. I also learned and implemented paypal api for payments transactions.",
    skills: "ReactJS, ExpressJS,NodeJS, PayPal API, JavaScript, and MongoDB",
    image: logo,
    github: "https://www.github.com/makyfj/ProShop",
    gitHubIcon: <GitHubIcon fontSize="inherit" />,
    liveVersion: "https://superproshopapp.herokuapp.com",
    liveVersionIcon: <LinkIcon fontSize="inherit" />,
  },

  {
    title: "Shower Thoughts",
    quickTitle: "Final Project for Android class",
    description:
      "This project was made to implement the Activity Lifecycle and using Auth from different providers.",
    skills: "Java, Google Auth, Android Lifecycle",
    image: logo,
    github: "https://www.github.com/makyfj/ShowerThoughts",
    gitHubIcon: <GitHubIcon fontSize="inherit" />,
  },
  {
    title: "Idea Net",
    quickTitle: "Project using MERN stack with Vite as front end tooling",
    description:
      "Project to allows to share your ideas in the world wide web!!. It uses jwt for authentication. As well, using redux toolkit for state management. Using vitejs instead for cra because it is faster ;). Backend with MongoDB, Express and NodeJS. Front end is hosted @ Netlify and Back end is hosted @ Heroku",
    skills: "React, Vite, MongoDB, Express, NodeJS, JWT, Heroku, Netlify",
    image: logo,
    github: "https://github.com/makyfj/IdeaNet.git",
    gitHubIcon: <GitHubIcon fontSize="inherit" />,
    liveVersion: "https://idea-net.netlify.app",
    liveVersionIcon: <LinkIcon fontSize="inherit" />,
  },
  {
    title: "Farmstand",
    quickTitle: "E-commerce for farmers to provide their goods and services",
    description:
      "E-commerce for farmers to provide their service and goods. Implemented payment system with Stripe and maps with Leaflet Using PHP, MySQL, HTML5, CSS3, JavaScript, jQuery",
    skills: "PHP, HTML5, CSS3, jQuery, JavaScript, Stripe, Leaflet",
    image: logo,
    github: "https://www.github.com/makyfj/farmstand",
    gitHubIcon: <GitHubIcon fontSize="inherit" />,
    liveVersion: "https://www.farmstandwebsite.com",
    liveVersionIcon: <LinkIcon fontSize="inherit" />,
  },
  {
    title: "Countdown Lover",
    quickTitle: "Simple project that counts down until I see my soulmate",
    description:
      "The project was done using simple vanilla js, but I've decided to use NextJS. Take a look at the new version :)",
    skills: "JavaScript, NextJS",
    image: logo,
    github: "https://www.github.com/makyfj/countdownTimer",
    gitHubIcon: <GitHubIcon fontSize="inherit" />,
    liveVersion: "https://sydneyandfranklinforever.netlify.app/",
    liveVersionIcon: <LinkIcon fontSize="inherit" />,
  },
];
