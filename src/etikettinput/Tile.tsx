import React from 'react';

import { DeleteBTN, SaveBTN } from '../components/Buttons';
import { Checkbox, Input } from '../components/Forms';
/*
interface Props {
  text: string;
} */

export const Tile = () => (
  <div className="mt-5 bg-white shadow cursor-pointer rounded-xl">
    <div className="flex">
      <div className="flex-1 py-5 pl-5 overflow-hidden">
        <ul>
          <li className="text-xs text-gray-600 uppercase ">Empfänger</li>
          <li>Martin Hausleitne</li>
          <li>Wüstenrotstrasse 11</li>
          <li>4020 Linz</li>
        </ul>
      </div>
      <div className="flex-1 py-5 pl-1 overflow-hidden">
        <ul>
          <li className="text-xs text-gray-600 uppercase">Absender</li>
          <li>Martin Hausleitne</li>
          <li>Wüstenrotstrasse 11</li>
          <li>4020 Linz</li>
        </ul>
      </div>
      <div className="flex-none pt-2.5 pr-2.5 pl-1">
        <button
          type="button"
          className="px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            fill="#000000"
          >
            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export const InputTile = () => (
  <div className="mt-5 bg-white rounded-lg shadow">
    <div className="flex">
      <div className="flex-1 py-5 pl-5 overflow-hidden">
        <svg
          className="inline align-text-top"
          width={21}
          height="20.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g>
            <path
              d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
              fill="none"
              id="svg_1"
              stroke="null"
            />
            <path
              d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
              id="svg_2"
            />
            <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3" />
          </g>
        </svg>
        <h1 className="inline text-2xl font-semibold leading-none">Absender</h1>
      </div>
      <div className="flex-none pt-2.5 pr-2.5 pl-1">
        <button
          type="button"
          className="px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            fill="#000000"
          >
            <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
          </svg>
        </button>
      </div>
    </div>
    <div className="px-5 pb-5">
      <Input
        type="{props.type}"
        id="{props.id}"
        name="{props.name}"
        placeholder="Vor- und Nachname "
      />
      <Input type="{props.type}" id="{props.id}" name="{props.name}" placeholder="Adresse " />
      {' '}
      <div className="flex">
        <div className="flex-grow w-1/4 pr-2">
          <Input type="{props.type}" id="{props.id}" name="{props.name}" placeholder="PLZ" />
        </div>
        <div className="flex-grow">
          <Input type="{props.type}" id="{props.id}" name="{props.name}" placeholder="Stadt" />
        </div>
      </div>
      <Checkbox id="safeAdress" name="safeAdress" label="Als Standardadresse speichern" />
    </div>

    <div className="flex">
      <div className="flex-1 py-5 pl-5 overflow-hidden">
        <svg
          className="inline align-text-top"
          width={21}
          height="20.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
        >
          <g>
            <path
              d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
              fill="none"
              id="svg_1"
              stroke="null"
            />
            <path
              d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
              id="svg_2"
            />
            <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3" />
          </g>
        </svg>
        <h1 className="inline text-2xl font-semibold leading-none">Empfänger</h1>
      </div>
      <div className="flex-none pt-2.5 pr-2.5 pl-1" />
    </div>
    <div className="px-5 pb-5">
      <Input
        type="{props.type}"
        id="{props.id}"
        name="{props.name}"
        placeholder="Vor- und Nachname "
      />
      <Input type="{props.type}" id="{props.id}" name="{props.name}" placeholder="Adresse " />
      {' '}
      <div className="flex">
        <div className="flex-grow w-1/4 pr-2">
          <Input type="{props.type}" id="{props.id}" name="{props.name}" placeholder="PLZ" />
        </div>
        <div className="flex-grow">
          <Input type="{props.type}" id="{props.id}" name="{props.name}" placeholder="Stadt" />
        </div>
      </div>
    </div>
    <hr className="mt-4" />

    <div className="flex flex-row-reverse p-3">
      <div className="flex-initial pl-3">
        <SaveBTN text="Speichern" />
      </div>
      <div className="flex-initial">
        <DeleteBTN text="Löschen" />
      </div>
    </div>
  </div>
);
