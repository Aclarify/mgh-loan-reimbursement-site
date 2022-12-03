import React from 'react';

interface Props {
  titleLine: string;
}
const FooterTextLogo: React.FC<Props> = (props) => {
  return (
    <div className="flex-column border-l-[#B0BE20] border-solid border-l-2 px-2 font-sans font-semibold text-xl sm:text-3xl  mb-4">
      <div>
        <span>{props.titleLine}</span>
      </div>
    </div>
  );
};
export default FooterTextLogo;
