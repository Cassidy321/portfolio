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

const FeaturedProject = ({ type, title, summary, img, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
      rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark
      dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark
      rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem] "
      />
      <div className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
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

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base mb-5">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm
          hover:underline underline-offset-2 cursor-default"
        >
          {title}
        </h2>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, summary, img, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
      border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
      xs:p-4
      "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <div className="w-full cursor-pointer overflow-hidden rounded-lg">
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

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span
          className="text-primary font-medium text-xl dark:text-primaryDark
        lg:text-lg md:text-base"
        >
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl
          hover:underline underline-offset-2 cursor-default"
        >
          {title}
        </h2>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
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
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
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
                summary="Ce projet est un site e-commerce complet développé pour un client réel.
                Le front a été réalisé avec React et le back repose sur une API personnalisée 
                développée avec Symfony. L’API gère l’ensemble des fonctionnalités comme la gestion des 
                utilisateurs, la gestion des produits, le traitement des commandes, et l’intégration des 
                paiements."
                github="#"
                type="Site E-commerce en React et une api Symfony"
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
                title="FreeAds"
                img={freeads}
                summary="Plateforme de petites annonces développée avec Laravel, permettant aux utilisateurs 
                de publier et gérer leurs annonces."
                github="#"
                type="Projet réalisé en Laravel"
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
                github="https://github.com/Cassidy321/mysnapchat"
                type="Projet réalisé en React native + une API"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="MyQuizz"
                img={myquizz}
                summary="Site de quiz interactif développée avec Symfony. Permet aux utilisateurs de créer, 
                gérer et participer à des quiz variés."
                github="#"
                type="Projet réalisé en Symfony et TailwindCSS"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="MyIrc"
                img={myirc}
                summary="Projet qui offre des fonctionnalités de chat en temps réel, 
                la gestion de salons de discussion, et des utilisateurs connectés."
                github="#"
                type="Réalisation d'un IRC avec NodeJS, React et SocketIO"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="AppMétéo"
                img={appmeteo}
                summary="Application météo pour consulter les conditions météo actuelles et les prévisions selon la localisation choisie."
                github="#"
                type="App météo réalisé en JS avec l'API Visual Crossing"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
