import React, { useState, useEffect, useRef } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import clsx from 'clsx';

interface Props {
  label: string;
  name: string;
  selectedValue: string;
  options: Array<{ label: string; value: string }>;
  onChange?: (event: React.ChangeEvent<any>) => void;
  showError: boolean;
}

const ComboBox: React.FC<Props> = ({
  label,
  selectedValue,
  options,
  onChange,
  showError,
}) => {
  const [query, setQuery] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const wrapperRef = useRef(null);

  const selectedOption = options.find(
    (option) => option.value === selectedValue
  );
  const filteredOption =
    query === ''
      ? options
      : options.filter((option) => {
          return option.label.toLowerCase().includes(query.toLowerCase());
        });

  /**
   * Hook that alerts clicks outside of the passed ref
   */
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // alert('You clicked outside of me!');
          setShowOptions(false);
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideAlerter(wrapperRef);
  return (
    <Combobox
      as="div"
      ref={wrapperRef}
      value={selectedOption ? selectedOption.label : ''}
      onChange={(event) => {
        setShowOptions(false);
        onChange(event);
        setQuery('');
      }}
    >
      <Combobox.Label className=" text-sm font-bold text-mgh-dark-grey mb-2">
        {label}
      </Combobox.Label>
      {showError && (
        <span className="ml-2 text-sm text-red-500">* Required</span>
      )}

      <div className="relative mt-1">
        <Combobox.Input
          className="w-full rounded-md border border-mgh-light-grey bg-white py-2 pl-3 pr-10 shadow-sm focus:border-mgh-primary focus:outline-none focus:ring-1 focus:ring-mgh-primary sm:text-sm"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          onClick={() => setShowOptions(true)}
          placeholder={selectedOption ? selectedOption.label : selectedValue}
        />

        <Combobox.Button
          onClick={() => setShowOptions(!showOptions)}
          className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none"
        >
          <ChevronUpDownIcon
            className="h-5 w-5 text-mgh-light-grey"
            aria-hidden="true"
          />
        </Combobox.Button>

        {showOptions && filteredOption.length > 0 && (
          <Combobox.Options
            static
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 font-inter-500 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {filteredOption.map((option) => (
              <Combobox.Option
                key={option.value}
                value={option.value}
                className={({ active }) =>
                  clsx(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-mgh-primary text-white' : 'text-mgh-dark-grey'
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
