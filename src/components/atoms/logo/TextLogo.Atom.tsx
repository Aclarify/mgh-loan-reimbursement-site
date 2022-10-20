import React from 'react';

interface Props {
  titleLine1: string;
  titleLine2: string;
}
const TextLogo: React.FC<Props> = (props) => {
  return (
    <div className="flex-column border-l-[#B0BE20] border-solid border-l-2 px-2 font-sans text-xl sm:text-3xl  mb-4">
      <div>
        <span>{props.titleLine1}</span>
      </div>
      <div>
        <span>{props.titleLine2}</span>
      </div>
    </div>
  );
};
export default TextLogo;
