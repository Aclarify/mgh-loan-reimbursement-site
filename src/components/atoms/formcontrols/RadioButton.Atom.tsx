import React from 'react';

interface Props {
  label: string;
  name: string;
  selectedValue: string;
  options: Array<{ label: string; value: string }>;
  showError: boolean;
  onChange: (eventValue: string) => void;
}

const RadioButton: React.FC<Props> = ({
  label,
  name,
  selectedValue,
  options,
  onChange,
  showError,
}) => {
  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );
  return (
    <div>
      <label className="text-sm  font-bold text-mgh-dark-grey">{label}</label>
      {showError && (
        <span className="ml-2 text-sm text-red-500">* Required</span>
      )}
      <fieldset id={name} className="mt-2">
        <legend className="sr-only">{label}</legend>
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                id={option.value}
                type="radio"
                name={name}
                defaultChecked={
                  option.value ===
                  (selectedOption ? selectedOption.value : selectedValue)
                }
                className="h-4 w-4 border-gray-300 text-mgh-primary focus:ring-mgh-primary"
                onChange={(event) => onChange(option.value)}
              />
              <label
                htmlFor={option.value}
                className="ml-3 block text-sm font-inter-400 text-mgh-dark-grey"
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
