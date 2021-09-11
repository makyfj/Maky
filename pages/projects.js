import Head from "next/head";

// components
import Projects from "../components/projects/projects";

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta
          name="description"
          content="Favorite projects with React, MongoDB, Python, Css, Sass, Express.js, TypeScript, GraphQL"
        />
      </Head>
      <Projects />
    </>
  );
};

export default ProjectsPage;
