import React from "react";

const CultureAndTradition = () => {
  return (
    <section
      id="culture"
      className="relative z-10 px-6 bg-gradient-to-b from-gray-800 to-slate-800 p-4 md:p-12 lg:p-20 min-h-screen"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
        <div className="flex flex-col gap-2 rounded-md bg-black/60 text-white p-4 shadow-md shadow-white">
          <h2 className="text-lg font-semibold">Traditional Arts</h2>
          <ul className="list-disc pl-4 gap-1 flex flex-col">
            <li>
              Tea Ceremony (茶道, Sadō): A ritualistic preparation of matcha
              tea, emphasizing mindfulness, simplicity, and respect.
            </li>
            <li>
              Calligraphy (書道, Shodō): The art of writing Japanese characters
              with brush and ink, reflecting discipline and beauty.
            </li>
            <li>
              Ikebana (生け花): Flower arranging as a meditative practice,
              focusing on harmony, balance, and form.
            </li>
            <li>Traditional Theater:</li>
            <ul className="list-disc pl-4">
              <li>
                Kabuki: Dramatic performance with elaborate costumes and
                stylized movements.
              </li>
              <li>
                Noh: Classical musical drama featuring masks and slow, symbolic
                actions.
              </li>
            </ul>
          </ul>
        </div>
        <div className="rounded-md flex flex-col gap-2 bg-black/60 text-white p-4 shadow-md shadow-white">
          <h2 className="text-lg font-semibold">Festivals (Matsuri)</h2>
          <ul className="list-disc pl-4 gap-1 flex flex-col">
            <li>
              Cherry Blossom Festivals (Hanami): Springtime celebration of
              sakura blooms, with picnics under flowering trees.
            </li>
            <li>
              Gion Matsuri: Kyoto’s famous festival with parades of floats and
              traditional music.
            </li>
            <li>
              Obon: A Buddhist festival honoring ancestors, often featuring
              dances and lanterns.
            </li>
          </ul>
        </div>
        <div className="rounded-md flex flex-col gap-2 bg-black/60 text-white p-4 shadow-md shadow-white">
          <h2 className="text-lg font-semibold">Cuisine</h2>
          <ul className="list-disc pl-4 gap-1 flex flex-col">
            <li>
              Sushi & Sashimi: Raw fish delicacies served with rice or on their
              own.
            </li>
            <li>
              Ramen & Udon: Popular noodle dishes with regional variations.
            </li>
            <li>
              Bento: A single-portion boxed meal with a balanced assortment.
            </li>
            <li>
              Traditional Sweets (Wagashi): Made from rice, beans, and natural
              flavors, often served with tea.
            </li>
          </ul>
        </div>
        <div className="rounded-md flex flex-col gap-2 bg-black/60 text-white p-4 shadow-md shadow-white">
          <h2 className="text-lg font-semibold">Clothing</h2>
          <ul className="list-disc pl-4 gap-1 flex flex-col">
            <li>
              Kimono: Traditional garment worn on special occasions, often
              brightly colored and patterned.
            </li>
            <li>Yukata: Lightweight summer kimono, common at festivals.</li>
          </ul>
        </div>
        <div className="rounded-md flex flex-col gap-2 bg-black/60 text-white p-4 shadow-md shadow-white">
          <h2 className="text-lg font-semibold">Religion and Beliefs</h2>
          <ul className="list-disc pl-4 gap-1 flex flex-col">
            <li>
              Shinto: Indigenous religion focused on nature spirits (kami) and
              rituals for harmony.
            </li>
            <li>
              Buddhism: Introduced from China, influencing art, architecture,
              and daily practices.
            </li>
            <li>
              Religious customs are often blended into daily life rather than
              strictly followed.
            </li>
          </ul>
        </div>
        <div className="rounded-md flex flex-col gap-2 bg-black/60 text-white p-4 shadow-md shadow-white">
          <h2 className="text-lg font-semibold">Modern Culture</h2>
          <ul className="list-disc pl-4 gap-1 flex flex-col">
            <li>
              Japan is known worldwide for technology, anime, manga, and pop
              culture.
            </li>
            <li>
              Cities like Tokyo and Osaka showcase futuristic architecture
              alongside traditional temples.
            </li>
            <li>
              The balance between innovation and tradition is a defining
              characteristic.
            </li>
          </ul>
        </div>
        <div className="rounded-md flex flex-col gap-2 bg-black/60 text-white p-4 shadow-md shadow-white">
          <h2 className="text-lg font-semibold">Etiquette and Social Norms</h2>
          <ul className="list-disc pl-4 gap-1 flex flex-col">
            <li>Bowing to show respect.</li>
            <li>
              Removing shoes before entering homes or certain establishments.
            </li>
            <li>Gift-giving is common for social and business occasions.</li>
            <li>
              Politeness and humility are highly valued in both speech and
              behavior.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CultureAndTradition;
