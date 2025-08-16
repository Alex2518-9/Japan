import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type LanguageCardProps = {
  title: string;
  src: string | StaticImport;
  description: string;
};

type TimelineData = {
  time: string;
  title: string;
  description: string;
};

export const timelineData: TimelineData[] = [
  {
    time: "660 BC",
    title: "Founding of Japan",
    description:
      "According to legend, Emperor Jimmu, the first emperor of Japan, ascended the throne and established the imperial line, marking the mythical beginning of Japan.",
  },
  {
    time: "1192",
    title: "Establishment of the Kamakura Shogunate",
    description:
      "Minamoto no Yoritomo became the first shogun, establishing the Kamakura Shogunate and marking the start of samurai-dominated governance.",
  },
  {
    time: "1603",
    title: "Start of the Edo Period",
    description:
      "Tokugawa Ieyasu became shogun, unifying Japan and initiating a period of stability, isolation, and economic growth that lasted over 250 years.",
  },
  {
    time: "1868",
    title: "Meiji Restoration",
    description:
      "The emperor was restored to power, ending the Tokugawa Shogunate and modernizing Japan through political, economic, and social reforms.",
  },
  {
    time: "1945",
    title: "End of World War II",
    description:
      "Japan surrendered after the atomic bombings of Hiroshima and Nagasaki, leading to the U.S. occupation and major reconstruction efforts.",
  },
  {
    time: "1964",
    title: "Tokyo Olympics",
    description:
      "The first Olympics held in Japan symbolized Japan's post-war recovery and international reintegration.",
  },
  {
    time: "2011",
    title: "Tōhoku Earthquake and Tsunami",
    description:
      "A massive earthquake and tsunami struck northeastern Japan, causing devastating damage and triggering the Fukushima nuclear disaster.",
  },
  {
    time: "2019",
    title: "Reiwa Era Begins",
    description:
      "Emperor Naruhito ascended the throne, marking the beginning of the Reiwa era, emphasizing peace and cultural harmony.",
  },
];

export const languageCardItems: LanguageCardProps[] = [
  {
    title: "Hiragana",
    src: "/hiragana.png",
    description: "",
  },
  {
    title: "Katakana",
    src: "/katakana.png",
    description: "",
  },
  {
    title: "Kanji",
    src: "/kanji.png",
    description: "sadfasdfsfsfsfdsdf",
  },
];
