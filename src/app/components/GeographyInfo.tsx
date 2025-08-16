import React from "react";

const GeographyInfo = () => {
  return (
    <div className="rounded-md bg-black/60 text-white p-4 grid gap-2 grid-cols-1 md:grid-cols-2">
      <div id="basics" className="">
        <div className="flex items-center gap-2">
          <span>🗾</span>
          <h3 className="font-semibold">Basic Facts:</h3>
        </div>
        <ul className="pl-9 gap-2 list-disc flex flex-col text-sm">
          <li className="">
            Location: East Asia, in the Pacific Ocean, off the eastern coast of
            the Korean Peninsula and China.
          </li>
          <li>
            Composition: An archipelago (group of islands) with about 14,000
            islands, but the four main islands are:
          </li>
          <ul className="flex list-decimal flex-col gap-2 pl-6">
            <li>Honshu (largest, includes Tokyo, Kyoto, Osaka)</li>
            <li>Hokkaido (north, cold climate, Sapporo)</li>
            <li>Shikoku (smallest of the four)</li>
            <li>Kyushu (south, subtropical climate, Nagasaki, Fukuoka)</li>
          </ul>
        </ul>
      </div>
      <div id="landscape" className="">
        <div className="flex items-center gap-2">
          <span>🌋</span>
          <h3 className="font-semibold">Landscape:</h3>
        </div>
        <ul className="pl-9 gap-2 list-disc flex flex-col text-sm">
          <li className="">Mountains: Around 73% of Japan is mountainous.</li>
          <ul className="flex list-disc flex-col gap-2 pl-6">
            <li>Famous peak: Mount Fuji (3,776m), a symbol of Japan.</li>
          </ul>
          <li>
            Plains: Small but important areas like the Kanto Plain (Tokyo
            region) are densely populated.
          </li>
          <li>
            Volcanoes: Japan sits on the Ring of Fire, with 100+ active
            volcanoes.
          </li>
          <li>Earthquakes: Very common due to tectonic activity.</li>
        </ul>
      </div>
      <div id="coastline" className="">
        <div className="flex items-center gap-2">
          <span>🌊</span>
          <h3 className="font-semibold">Coastline & Seas:</h3>
        </div>
        <ul className="pl-9 gap-2 list-disc flex flex-col text-sm">
          <li>Japan has a long coastline (~29,000 km).</li>
          <li>Surrounded by:</li>
          <ul className="flex list-decimal flex-col gap-2 pl-6">
            <li>Sea of Japan (west, between Japan & Korea/China)</li>
            <li>Pacific Ocean (east)</li>
            <li>East China Sea (southwest)</li>
          </ul>
          <li>Fishing is vital — seafood is a staple in Japanese diet.</li>
        </ul>
      </div>
      <div id="climate" className="">
        <div className="flex items-center gap-2">
          <span>🌱</span>
          <h3 className="font-semibold">Climate:</h3>
        </div>
        <ul className="pl-9 gap-2 list-disc flex flex-col text-sm">
          <li>Stretches 2,000 miles north to south, so climates vary:</li>
          <ul className="flex list-decimal flex-col gap-2 pl-6">
            <li>Hokkaido: cold winters, snowy (great for skiing).</li>
            <li>Honshu: temperate, with four distinct seasons.</li>
            <li>Kyushu & Okinawa: subtropical, hot summers, mild winters.</li>
          </ul>
          <li>Rainy season: Early summer.</li>
          <li>Typhoons: Late summer and early autumn.</li>
        </ul>
      </div>
      <div id="population" className="">
        <div className="flex items-center gap-2">
          <span>🏙️</span>
          <h3 className="font-semibold">Population Distribution:</h3>
        </div>
        <ul className="pl-9 gap-2 list-disc flex flex-col text-sm">
          <li>
            Because of the mountains, most people live on coastal plains and
            river valleys.
          </li>
          <li>
            Japan has mega-cities like Tokyo, the largest metropolitan area in
            the world (~37 million).
          </li>
        </ul>
      </div>
      <div id="life" className="">
        <div className="flex items-center gap-2">
          <span>🌾</span>
          <h3 className="font-semibold">Impact on Life:</h3>
        </div>
        <ul className="pl-9 gap-2 list-disc flex flex-col text-sm">
          <li>
            Limited farmland → rice paddies in valleys and terraced hills.
          </li>
          <li>
            Natural disasters (earthquakes, tsunamis, typhoons) → influenced
            architecture, religion (Shinto respect for nature), and disaster
            preparedness.
          </li>
          <li>Surrounded by sea → seafood-rich cuisine and naval history.</li>
        </ul>
      </div>
    </div>
  );
};

export default GeographyInfo;
