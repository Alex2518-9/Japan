"use client";
import Image from "next/image";
import React from "react";

const LanguageDetails = () => {
  return (
    <div
      id="details"
      className="pt-24 flex flex-col space-y-10 w-full min-h-screen "
    >
      <section
        id="hiragana"
        className="grid grid-cols-1  xl:grid-cols-2 w-full"
      >
        <div className="relative shadow-[0_0_20px_5px_rgba(59,130,246,0.7)] max-md:h-96 flex items-center justify-center w-full rounded-md bg-white">
          <Image
            alt="Hiragana table"
            fill
            className="object-contain"
            src="/Table_hiragana.png"
          />
        </div>
        <div className="flex items-center p-10 leading-6 md:leading-9 justify-end text-white">
          Hiragana is one of the three Japanese writing systems and is usually
          the first one learned by children and beginners. It is a phonetic
          script with forty-six characters, each representing a sound. With
          hiragana, it is possible to write any Japanese word. In daily use,
          hiragana appears in grammar particles, verb endings, and words without
          kanji. It is also written as furigana to show how kanji should be
          read. Its soft and curved shapes give it a unique beauty, and
          historically it played an important role in Japanese literature.
          Overall, hiragana is the foundation of Japanese reading and writing.
          Mastering it is an essential step for anyone learning the language.
        </div>
      </section>
      <section id="katakana" className="grid grid-cols-1 xl:grid-cols-2 w-full">
        <div className="flex items-center w-full p-10 leading-6 md:leading-9 justify-start text-white">
          Katakana is one of the three main writing systems used in Japanese,
          alongside hiragana and kanji. Like hiragana, katakana is a phonetic
          script with forty-six basic characters, each representing a sound.
          However, it has a very different role and visual style. Its characters
          are sharp and angular, which makes them stand out compared to the
          smooth curves of hiragana. In daily life, katakana is mainly used for
          foreign loanwords, onomatopoeia, and the names of plants, animals, or
          minerals. For example, the word for “computer” is コンピュータ
          (konpyuuta), written in katakana. It is also often used for emphasis,
          similar to italics in English. Because of this, katakana is especially
          useful for reading modern Japanese texts that include many borrowed
          terms. Katakana may not appear as often as hiragana, but it is
          essential for complete literacy. By mastering katakana, learners can
          better understand everyday vocabulary, advertisements, and menus,
          which often mix all three writing systems together.
        </div>
        <div className="relative shadow-[0_0_20px_5px_rgba(59,130,246,0.7)] max-md:h-96 flex items-center justify-center w-full rounded-md bg-white">
          <Image
            alt="Katakana table"
            fill
            className="object-contain"
            src="/Table_katakana.png"
          />
        </div>
      </section>
      <section
        id="kanji"
        className="grid grid-cols-1 gap-8 xl:grid-cols-2 w-full"
      >
        <div className="relative shadow-[0_0_20px_5px_rgba(59,130,246,0.7)] max-md:h-96 flex items-center justify-center w-full rounded-md">
          <Image
            alt="Kanji list"
            fill
            className="object-cover rounded-md"
            src="/kanji_list.jpg"
          />
        </div>
        <div className="flex items-center w-full p-10 leading-6 md:leading-9 justify-end text-white">
          Kanji is one of the three main writing systems in Japanese, alongside
          hiragana and katakana. Unlike the other two, kanji are logographic
          characters, meaning each symbol represents an idea, object, or concept
          rather than a single sound. Japanese writing combines kanji with
          hiragana and katakana to create sentences that are both precise and
          readable. Kanji comes from Chinese characters and was adapted into
          Japanese over a thousand years ago. There are thousands of kanji, but
          about two thousand are commonly used in daily life. Kanji is essential
          for nouns, verbs, adjectives, and names, allowing writers to convey
          meaning clearly without relying solely on phonetic scripts. For
          example, the word “tree” is 木 (ki), and “mountain” is 山 (yama).
          Learning kanji is often considered the most challenging part of
          studying Japanese, but it unlocks the richness of the language and
          culture. Mastery of kanji enables reading newspapers, literature, and
          official documents, making it a crucial step toward full literacy in
          Japanese.
        </div>
      </section>
    </div>
  );
};

export default LanguageDetails;
