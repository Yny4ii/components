import React from "react";

interface DisclosuresProps {
  data: {
    title: string;
    text: string;
  }[];
}

const Disclosures = ({ data }: DisclosuresProps) => {
  return (
    <div className="text-light-gray items-center w-full flex flex-col justify-center gap-5 border-b-main-white border-right-main-white  rounded-lg bg-main-white shadow-main-shadow py-3 px-4">
      <h3 className="text-4xl">Disclosures</h3>
      <div className="w-full border-1 border-accent rounded-lg py-3 px-10 flex flex-col items-center gap-4">
        <ul className="list-disc list-inside pl-0 ml-0 w-full">
          {data.map((e, index) => (
            <li key={index} className="text-left">
              <span className="font-bold">{e.title}</span>
              <span className="font-normal"> {e.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Disclosures;
