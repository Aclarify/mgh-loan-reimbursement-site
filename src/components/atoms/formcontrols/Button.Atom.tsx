import React from 'react';

interface Props {
  text: string;
  onClick?: Function;
}

const Button: React.FC<Props> = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="inline-flex items-center rounded-md border border-transparent bg-[#206B9E] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {props.text}
      </button>
    </div>
  );
};
export default Button;
