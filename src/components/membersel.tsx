/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { BsCardHeading } from "react-icons/bs";

const cards = [
  {
    id: 1,
    name: "CR Yello Card",
    color: "yellow",
  },
  {
    id: 2,
    name: "CR Green Card",
    color: "Green",
  },
  {
    id: 3,
    name: "CR Blue Card",
    color: "Blue",
  },
  {
    id: 4,
    name: "CR Pink Card",
    color: "Pink",
  },
  {
    id: 5,
    name: "CR Black Card",
    color: "Black",
  },
  {
    id: 6,
    name: "CR Gold Card",
    color: "Gold",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectionMember() {
  const [selected, setSelected] = useState(cards[3]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block max-w-7xl mx-auto text-sm font-medium text-coffee-2">
            Select Card
          </Listbox.Label>
          <div className="max-w-7xl mx-auto mt-1 relative">
            <Listbox.Button className="relative w-full bg-coffee-6 bg-opacity-75 border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-coffee-3 focus:border-coffee-3 sm:text-sm">
              <span className="flex items-center">
                <BsCardHeading color={selected.color} />
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-20 mt-1 w-full bg-coffee-1 backdrop-blur-lg shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {cards.map((card) => (
                  <Listbox.Option
                    key={card.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-coffee-3" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={card}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <BsCardHeading color={card.color} />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {card.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-coffee-3",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
