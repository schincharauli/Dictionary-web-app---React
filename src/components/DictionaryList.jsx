import React from "react";
import iconPlay from "./icons/icon-play.svg";
import iconNewWindow from "./icons/icon-new-window.svg";

const DictionaryList = ({ result }) => {
  console.log({ result });
  const { word, phonetics, meanings } = result;

  function playMeaning() {
    try {
      const audioComponent = phonetics.find((component) => component.audio);
      if (audioComponent) {
        const audio = new Audio(audioComponent.audio);
        audio.play();
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="h-screen ml-4 mt-6">
        <section>
          <div className="flex justify-between ml-0 mr-4">
            <div>
              <h1 className="text-4xl dark:text-white">{word}</h1>
              <p className="mt-4 text-violet ">{phonetics[0].text}</p>
            </div>
            <p>
              <img
                className="w-12 h-12 hover:cursor-pointer"
                src={iconPlay}
                alt=""
                onClick={playMeaning}
              />
            </p>
          </div>
        </section>
        <section>
          <div className="flex justify-between items-center mt-3">
            <p className="dark:text-white">{meanings[0].partOfSpeech}</p>
            <div className="w-11/12 h-0.5 bg-gray-200 ml-3 mr-4 rounded-lg"></div>
          </div>
          <h3 className="text-greyTextLightMode mt-5">Meaning</h3>
          <div>
            {meanings[0].definitions.map((definition, index) => (
              <div className="flex items-center sm:ml-5  md:ml-6 ">
                <div className="mt-3 mr-3 w-1 h-1 rounded-lg bg-violet"></div>
                <p
                  className=" text-sm mt-4 w-11/12 text-textColor dark:text-white"
                  key={index}
                >
                  {definition.definition}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="flex mt-5">
            <h3 className="text-greyTextLightMode ">Synonyms</h3>
            <p className="ml-6 text-violet font-bold">
              {meanings[0].synonyms[0]}
            </p>
          </div>
        </section>
        <section>
          <div className="flex justify-between items-center mt-3">
            <p className="dark:text-white">{meanings[1].partOfSpeech}</p>
            <div className="w-11/12 h-0.5 bg-gray-200 ml-3 mr-4 rounded-lg"></div>
          </div>
          <h3 className="text-greyTextLightMode mt-5">Meaning</h3>
          <div>
            {meanings[1].definitions.map((definition, index) => (
              <div className="flex items-center sm:ml-5 md:ml-6 ">
                <div className="mt-3 mr-3 w-1 h-1 rounded-lg bg-violet"></div>
                <p
                  className=" text-sm mt-4 w-11/12 text-textColor dark:text-white"
                  key={index}
                >
                  {definition.definition}
                </p>
              </div>
            ))}
            <p className="m-6 text-sm text-greyTextLightMode">
              {meanings[1].definitions[0].example}
            </p>
          </div>
        </section>
        <section className="pb-12">
          <div className="w-12/12 h-0.5 bg-gray-200 ml-3 mr-4 rounded-lg"></div>
          <h3 className="text-greyTextLightMode mt-3 underline-offset-2">
            Source
          </h3>
          <a
            href={result.sourceUrls}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs mt-3 dark:text-white flex sm:ml-5  md:ml-6 "
          >
            {result.sourceUrls}
            <img className="ml-2" src={iconNewWindow} alt="new-window-icon" />
          </a>
        </section>
      </div>
    </>
  );
};
export default DictionaryList;
