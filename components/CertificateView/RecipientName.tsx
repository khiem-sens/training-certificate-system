import React from 'react';

interface RecipientNameProps {
  name: string;
}

const RecipientName: React.FC<RecipientNameProps> = ({ name }) => (
  <div className="font-LibreBaskerville italic font-normal flex flex-wrap gap-6 justify-center items-center self-center pb-4 mt-6 text-5xl border-b border-zinc-300 text-zinc-800">
    <img loading="lazy" src="/images/decor-recipientname.svg" alt="" />
    <div className="self-stretch my-auto">
      {name}
    </div>
    <img loading="lazy" src="/images/decor-recipientname.svg" className="transform -scale-x-100" alt="" />
  </div>
);

export default RecipientName;