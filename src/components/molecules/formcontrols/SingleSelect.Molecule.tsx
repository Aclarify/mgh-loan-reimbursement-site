import React from 'react';

interface Props {
  label: string;
  name: string;
  selectedValue: string;
  options: Array<{ label: string; value: string }>;
  onChange: (event: React.ChangeEvent<any>) => void;
}

const SingleSelect: React.FC<Props> = ({
  label,
  name,
  selectedValue,
  options,
  onChange,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        name={name}
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-mgh-primary focus:outline-none focus:ring-mgh-primary sm:text-sm"
        defaultValue={selectedValue}
        onChange={onChange}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};
export default SingleSelect;
