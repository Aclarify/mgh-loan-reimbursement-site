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
        className="inline-flex items-center rounded-md border border-transparent bg-mgh-primary px-3 py-2 text-sm font-inter-600 font-semibold leading-4 text-white shadow-sm hover:bg-mgh-primary-dark focus:outline-none "
      >
        {props.text}
      </button>
    </div>
  );
};
export default Button;
