import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import TransitionEffect from "../components/TransitionEffect";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Votre message est en cours d'envoi...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setStatus("Merci de m'avoir contacté ! Je vous répondrai au plus vite.");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Oops ! Une erreur s'est produite lors de l'envoi");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Oops ! Une erreur s'est produite lors de l'envoi");
    }
  };

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Contact page" />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full dark:text-light">
        <Layout className="pt-16">
          <AnimatedText 
            text="me contacter" 
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" 
          />
          <div className="grid w-full grid-cols-8 gap-20 sm:gap-8">
            <div className="flex items-center justify-center col-span-8">
              <div className="w-full max-w-xl">
                <div className="p-8 space-y-6 overflow-hidden border-2 border-solid shadow-lg bg-light dark:bg-dark border-dark dark:border-light rounded-2xl">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative group">
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 transition duration-300 border-2 peer text-dark dark:text-light bg-light dark:bg-dark border-dark dark:border-light rounded-xl focus:outline-none focus:border-gray-600 dark:focus:border-gray-400"
                        placeholder="Votre email"
                      />
                    </div>

                    <div className="relative group">
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows="7"
                        className="w-full px-4 py-3 transition duration-300 border-2 resize-none peer text-dark dark:text-light bg-light dark:bg-dark border-dark dark:border-light rounded-xl focus:outline-none focus:border-gray-600 dark:focus:border-gray-400"
                        placeholder="Votre message"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 font-semibold transition duration-300 ease-in-out transform bg-gray-800 dark:bg-gray-200 text-light dark:text-dark rounded-xl hover:bg-gray-700 dark:hover:bg-gray-300 hover:-translate-y-1 focus:outline-none"
                    >
                      Envoyer
                    </button>

                    {status && (
                      <div
                        className={`text-center mt-4 ${
                          status.includes("Merci") 
                            ? "text-green-600" 
                            : "text-red-600"
                        } animate-pulse`}
                      >
                        {status}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}