import React from 'react';

interface Props {
  titleLine1: string;
  titleLine2: string;
}
const TextLogo: React.FC<Props> = (props) => {
  return (
    <div className="border-l-[#B0BE20] border-solid border-l-2 px-2 font-sans text-3xl mb-4">
      <h1>{props.titleLine1}</h1>
      <h1>{props.titleLine2}</h1>
    </div>
  );
};
export default TextLogo;
