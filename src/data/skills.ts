// front end
import html5 from "devicon/icons/html5/html5-plain.svg";
import css3 from "devicon/icons/css3/css3-plain.svg";
import javascript from "devicon/icons/javascript/javascript-plain.svg";
import react from "devicon/icons/react/react-original.svg";
import redux from "devicon/icons/redux/redux-original.svg";
import materialui from "devicon/icons/materialui/materialui-original.svg";
import typescript from "devicon/icons/typescript/typescript-original.svg";
import nextjs from "devicon/icons/nextjs/nextjs-original.svg";
import tailwindcss from "devicon/icons/tailwindcss/tailwindcss-plain.svg";

// back end
import mongodb from "devicon/icons/mongodb/mongodb-plain.svg";
import express from "devicon/icons/express/express-original.svg";
import nodejs from "devicon/icons/nodejs/nodejs-plain.svg";
import mysql from "devicon/icons/mysql/mysql-plain.svg";
import graphql from "devicon/icons/graphql/graphql-plain.svg";
import postgresql from "devicon/icons/postgresql/postgresql-plain.svg";
import nestjs from "devicon/icons/nestjs/nestjs-plain.svg";
import heroku from "devicon/icons/heroku/heroku-original.svg";

// programming language
import python from "devicon/icons/python/python-original.svg";
import cpp from "devicon/icons/cplusplus/cplusplus-original.svg";
import java from "devicon/icons/java/java-original.svg";

export interface Skills {
  name: string;
  icon?: any;
}

export const frontEndSkills: Skills[] = [
  // front end
  {
    name: "HTML5",
    icon: html5,
  },
  {
    name: "CSS3",
    icon: css3,
  },
  { name: "TypeScript", icon: typescript },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwindcss",
    icon: tailwindcss,
  },
  { name: "Material-UI", icon: materialui },
  { name: "NextJS", icon: nextjs },
];

export const backEndSkills: Skills[] = [
  // back end
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "ExpressJs",
    icon: express,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "NestJS",
    icon: nestjs,
  },
  {
    name: "Heroku",
    icon: heroku,
  },
];

export const programmingSkills: Skills[] = [
  // programming languages
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
];

export const otherSkills: Skills[] = [
  { name: "Data Structures" },
  { name: "Algorithms" },
  { name: "OOP" },
  { name: "Agile" },
  { name: "Git" },
  { name: "NPM" },
  { name: "Yarn" },
  { name: "REST" },
  { name: "API" },
];
