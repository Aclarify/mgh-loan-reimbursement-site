import React, { useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import clsx from 'clsx';

interface Props {
  label: string;
  name: string;
  selectedValue: string;
  options: Array<{ label: string; value: string }>;
  onChange?: (event: React.ChangeEvent<any>) => void;
}

const ComboBox: React.FC<Props> = ({
  label,
  name,
  selectedValue,
  options,
  onChange,
}) => {
  const [query, setQuery] = useState('');
  const filteredOption =
    query === ''
      ? options
      : options.filter((option) => {
          return option.label.toLowerCase().includes(query.toLowerCase());
        });
  return (
    <Combobox as="div" value={selectedValue} onChange={onChange}>
      <Combobox.Label className="block text-sm font-bold text-[#4B5563] mb-2">
        {label}
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-[#ABADC6] bg-white py-2 pl-3 pr-10 shadow-sm focus:border-mgh-primary focus:outline-none focus:ring-1 focus:ring-mgh-primary sm:text-sm"
          // displayValue={selectedValue}
        />

        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-[#ABADC6]"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredOption.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 font-inter-500 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredOption.map((option) => (
              <Combobox.Option
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  clsx(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-mgh-primary text-white' : 'text-[#ABADC6]'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={clsx(
                        'block truncate',
                        selected && 'font-semibold'
                      )}
                    >
                      {option.label}
                    </span>

                    {selected && (
                      <span
                        className={clsx(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-mgh-primary'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
};
export default ComboBox;
