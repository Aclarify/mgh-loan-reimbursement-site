import React from 'react';

interface Props {
  label: string;
  name: string;
  selectedValue: string;
  options: Array<{ label: string; value: string }>;
  onClick?: (event: React.ChangeEvent<any>) => void;
}

const RadioButton: React.FC<Props> = (props) => {
  return (
    <div>
      <label className="block text-sm  font-bold text-[#4B5563]">
        {props.label}
      </label>
      <fieldset className="mt-2">
        <legend className="sr-only">{props.label}</legend>
        <div className="space-y-2">
          {props.options.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                id={option.value}
                type="radio"
                defaultChecked={option.value === props.selectedValue}
                className="h-4 w-4 border-gray-300 text-mgh-primary focus:ring-mgh-primary"
              />
              <label
                htmlFor={option.value}
                className="ml-3 block text-sm font-inter-400 text-[#4B5563]"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};
export default RadioButton;
