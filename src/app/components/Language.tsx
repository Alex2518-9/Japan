import Image from "next/image";
import React from "react";
import LanguageCard from "./LanguageCard";
import { languageCardItems } from "../data";

const Language = () => {
  return (
    <main className="relative min-h-screen">
      <section
        id="hero"
        className="relative flex items-center justify-center h-screen"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/language.jpg"
            alt="Background"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
            日本語
          </h1>
        </div>
      </section>
      <section className="relative mx-auto bg-gradient-to-b from-gray-800 to-black gap-6 p-24 flex flex-col items-start justify-center min-h-screen">
        <div className="flex flex-col gap-2 text-white w-full">
          <h1 className="text-4xl font-semibold pb-2">The Japanese Language</h1>
          <p className="break-normal">
            The Japanese language, known as Nihongo (日本語), is spoken by over
            125 million people, primarily in Japan. It is a unique and complex
            language that reflects the country’s history, culture, and social
            values. One of its most distinctive features is its writing system,
            which combines three scripts: <strong>Kanji</strong>, adopted from
            Chinese characters; <strong>Hiragana</strong>, a syllabary used for
            native words and grammar; and <strong>Katakana</strong>, mainly used
            for foreign words and emphasis. A literate person in Japan typically
            needs to know more than 2,000 kanji to read newspapers and books
            fluently.
          </p>
          <p>
            Japanese grammar is also notable for its subject–object–verb
            structure and the absence of plurals and gender distinctions.
            Instead of strict word order, meaning often relies on context and
            particles. Verbs do not conjugate by subject but rather by tense,
            mood, and politeness level, making politeness a central element of
            communication. Speech can range from casual to polite to highly
            honorific or humble, depending on the relationship between speakers.
            Another important characteristic is pitch accent, which
            differentiates words that are otherwise identical in spelling.
            Regional dialects, such as Kansai-ben, add further richness and
            variety to spoken Japanese. Historically, Japanese has borrowed
            heavily from Chinese, especially in written vocabulary, and more
            recently from Western languages such as English. Despite these
            influences, the language has preserved its distinct structure and
            identity.
          </p>{" "}
          <p>
            In conclusion, Japanese is not only a tool for communication but
            also a reflection of the nation’s traditions, hierarchy, and
            cultural interactions. Its unique blend of writing systems, grammar,
            and social nuances makes it one of the most fascinating languages in
            the world.
          </p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 w-full">
          {languageCardItems.map(({ title, description, src }) => (
            <LanguageCard
              key={title}
              title={title}
              description={description}
              src={src}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Language;
