import React from 'react';

interface Props {
  titleLine1: string;
  titleLine2: string;
  href: string;
}
const TextLogo: React.FC<Props> = (props) => {
  return (
    <div className="flex-column border-l-[#B0BE20] border-solid border-l-2 px-2  font-semibold text-xl sm:text-2xl  mb-4">
      <div>
        <a href={props.href}>
          <span>{props.titleLine1}</span>
        </a>
      </div>
      <div>
        <a href={props.href}>
          <span>{props.titleLine2}</span>
        </a>
      </div>
    </div>
  );
};
export default TextLogo;
