import React from 'react';

interface Props {
  type: string;
  id: string;
  name: string;
  placeholder: string;
}

interface PropsCB {
  id: string;
  name: string;
  label: string;
}

export const Input = (props: Props) => (
  <input
    type={props.type}
    id={props.id}
    name={props.name}
    placeholder={props.placeholder}
    className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
  />
);

export const Checkbox = (props: PropsCB) => (
  <div className="flex items-center pt-3">
    <input
      id={props.id}
      name={props.name}
      type="checkbox"
      className="w-4 h-4 text-black bg-gray-300 border-none rounded-md focus:ring-transparent "
    />
    <label htmlFor={props.id} className="block ml-2 text-sm text-gray-900">
      {props.label}
    </label>
  </div>
);
