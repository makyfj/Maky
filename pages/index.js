import Head from "next/head";

// component
import Hero from "../components/home-page/hero";
import Experience from "../components/home-page/experience";
import Skills from "../components/home-page/skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Franklin Jara</title>
        <meta
          name="description"
          content="Masters Degree in Computer Science that loves coding"
        />
      </Head>
      <Hero />
      <Experience />
      <Skills />
    </>
  );
}
