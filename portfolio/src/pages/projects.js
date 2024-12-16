import React from "react";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import { GithubIcon } from "../components/Icons";
import snapchat from "../../public/images/projects/snapchat-screen.png";
import portfolio from "../../public/images/projects/portfolio.png";
import freeads from "../../public/images/projects/freeads.png";
import myquizz from "../../public/images/projects/myquizz.png";
import myirc from "../../public/images/projects/myirc.png";
import appmeteo from "../../public/images/projects/appmeteo.png";
import TransitionEffect from "../components/TransitionEffect";
import archideco from "../../public/images/projects/archideco-screen.png";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, github1, github2 }) => {
  return (
    <article
      className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-br-2xl rounded-3xl border-dark bg-light dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] "
      />
      <div className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="mb-5 text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <h2
          className="w-full my-2 text-4xl font-bold text-left cursor-default dark:text-light sm:text-sm hover:underline underline-offset-2"
        >
          {title}
        </h2>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex items-center mt-2 space-x-4">
          {github1 && (
            <Link href={github1} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
          )}
          {github2 && (
            <Link href={github2} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, summary, img, github }) => {
  return (
    <article
      className="relative flex flex-col items-center justify-center w-full p-6 border border-solid rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xs:p-4 "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <div className="w-full overflow-hidden rounded-lg cursor-pointer">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col items-start justify-between w-full mt-4">
        <span
          className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base"
        >
          {type}
        </span>
        <h2
          className="w-full my-2 text-3xl font-bold text-left cursor-default lg:text-2xl hover:underline underline-offset-2"
        >
          {title}
        </h2>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex items-center justify-between w-full mt-2">
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="description" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Quelques projets"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="E-commerce"
                img={archideco}
                summary="Ce projet est un site e-commerce complet développé pour un client réel. Le front a 
                été réalisé avec React et le back repose sur une API personnalisée développée avec Symfony. 
                L’API gère l’ensemble des fonctionnalités comme la gestion des utilisateurs, la gestion des 
                produits, le traitement des commandes, et l’intégration des paiements."
                github1="https://github.com/Cassidy321/E-commerceFront"
                github2="https://github.com/Cassidy321/E-commerceServeur"
                type="Site E-commerce en React avec une API Symfony"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfolio"
                img={portfolio}
                summary="Un portfolio interactif développé avec Next.js et TailwindCSS pour mettre en valeur 
                certain de mes projets."
                github="https://github.com/Cassidy321/portfolio"
                type="Projet réalisé en Next.js avec TailwindCSS"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="MyIrc"
                img={myirc}
                summary="Projet qui offre des fonctionnalités de chat en temps réel, 
                la gestion de salons de discussion, et des utilisateurs connectés."
                github="https://github.com/Cassidy321/myirc.git"
                type="Réalisation d'un IRC avec NodeJS, React et SocketIO"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Snapchat"
                img={snapchat}
                summary="Re-création de l'application mobile Snapchat en utilisant une API fournie. 
                Ce projet inclut la conception de fonctionnalités clés telles que l'inscription et la 
                connexion des utilisateurs, la sélection et l'envoi de photos, ainsi que la visualisation 
                et la suppression de snaps. Réalisé en React Native pour une expérience mobile fluide."
                github1="https://github.com/Cassidy321/mysnapchat"
                type="Projet réalisé en React native + une API"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="AppMétéo"
                img={appmeteo}
                summary="Application météo pour consulter les conditions météo actuelles et les prévisions selon la localisation choisie."
                github="https://github.com/Cassidy321/app-meteo"
                type="App météo réalisé en JS avec l'API Visual Crossing"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="FreeAds"
                img={freeads}
                summary="Plateforme de petites annonces développée avec Laravel, permettant aux utilisateurs 
                de publier et gérer leurs annonces."
                github="#"
                type="Projet réalisé en Laravel"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
