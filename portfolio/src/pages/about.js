import React from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "../components/Layout";
import Head from "next/head";
import TransitionEffect from "../components/TransitionEffect";
import Image from "next/image";
import profilePic from "../../public/images/profile/image-portfolio-about.png";
import Skills from "../components/Skills";
import cssLogo from "../../public/images/logos/logo-css.png";
import htmlLogo from "../../public/images/logos/logo-html.png";
import jsLogo from "../../public/images/logos/logo-js.png";
import laravelLogo from "../../public/images/logos/logo-laravel.png";
import nextjsLogo from "../../public/images/logos/logo-nextjs.png";
import nodejsLogo from "../../public/images/logos/logo-nodejs.png";
import phpLogo from "../../public/images/logos/logo-php.png";
import reactLogo from "../../public/images/logos/logo-react.png";
import sqlLogo from "../../public/images/logos/logo-sql.png";
import symfonyLogo from "../../public/images/logos/logo-symfony.png";
import tailwindLogo from "../../public/images/logos/logo-tailwind.png";
import tsLogo from "../../public/images/logos/logo-typescript.png";

const skills = [
  { logo: { lightSrc: jsLogo }, name: "JavaScript" },
  { logo: { lightSrc: reactLogo }, name: "React" },
  { logo: { lightSrc: nodejsLogo }, name: "NodeJS" },
  { logo: { lightSrc: nextjsLogo }, name: "NextJS" },
  { logo: { lightSrc: phpLogo }, name: "PHP" },
  { logo: { lightSrc: laravelLogo }, name: "Laravel" },
  { logo: { lightSrc: symfonyLogo }, name: "Symfony" },
  { logo: { lightSrc: sqlLogo }, name: "SQL" },
  { logo: { lightSrc: tailwindLogo }, name: "Tailwind" },
  { logo: { lightSrc: htmlLogo }, name: "HTML" },
  { logo: { lightSrc: cssLogo }, name: "CSS" },
  { logo: { lightSrc: tsLogo }, name: "TypeScript" },
];



const about = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="description" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="à propos de moi" className="mb-16 lg:!text-7xl sm:!text-6xl
           xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-20 sm:gap-8">
            <div className="flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8">
              <p className="font-medium">
                Salut ! Moi c&apos;est Cassidy Nguyen, je suis un jeune développeur web passionné
                par la création d&apos;expériences numériques intuitives et
                efficaces. Je suis développeur fullstack mais j&apos;ai la capacité à
                me concentrer aussi bien sur le front-end que sur le back-end
                selon les besoins du projet sur lequel je travaille.
              </p>
              <p className="my-4 font-medium">
                Actuellement en formation à la web@académie d&apos;Epitech Marseille,
                je suis à la recherche d&apos;une alternance à partir de septembre
                2024 pour une durée de 14 mois, avec un rythme de 3 semaines en
                entreprise et 1 semaine à l&apos;école.
              </p>
              <p className="font-medium">
                Que ce soit pour développer un site web, une application mobile
                ou tout autre produit numérique, je suis prêt à me donner à fond
                pour chaque projet. J&apos;ai hâte de mettre mes compétences et ma
                passion au service de votre équipe et de contribuer à vos futurs
                succès.
              </p>
            </div>
            <div
              className="relative col-span-3 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="image"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="grid grid-cols-4 col-span-8 gap-6 mt-8 cursor-pointer pointer xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-items-center">
                {skills.map((skill, index) => (
                  <Skills key={index} logo={skill.logo} name={skill.name} />
                ))}
              </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
