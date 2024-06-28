import React from "react";
import AnimatedText from "./components/AnimatedText";
import Layout from "./components/Layout";
import Head from "next/head";
import TransitionEffect from "./components/TransitionEffect";
import Image from "next/image";
import profilePic from "../../public/images/profile/image-portfolio-about.png";
import Skills from "./components/Skills";

const about = () => {
  return (
    <>
      <Head>
        <title>Cassidy Nguyen</title>
        <meta name="description" content="description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="à propos de moi" className="mb-16 lg:!text-7xl sm:!text-6xl
           xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-20 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <p className="font-medium">
                Salut ! Moi c&apos;est Cassidy Nguyen, un développeur web passionné
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
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid
               border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
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
            {/* <div className="col-span-8 mt-8 grid grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:justify-items-center gap-6">
                {skills.map((skill, index) => (
                  <Skills key={index} logo={skill.logo} name={skill.name} />
                ))}
              </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
