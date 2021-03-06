import React from 'react';


import { DeleteBTN, SaveBTN } from '../components/Buttons';
import { Checkbox, Input } from '../components/Forms';

type State = {
  eName: string;
  eStreet: string;
  ePLZ: string;
  eCity: string;
  aName: string;
  aStreet: string;
  aPLZ: string;
  aCity: string;
};
export default class Tile1 extends React.Component<Props, State> {
  state = {
    eName: '',
    eStreet: '',
    ePLZ: '',
    eCity: '',
    aName: '',
    aStreet: '',
    aPLZ: '',
    aCity: '',
  };

  // typing on RIGHT hand side of =
  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      //eName: e.currentTarget.value,
      //eStreet: e.currentTarget.value,
      //ePLZ: e.currentTarget.value,
      //eCity: e.currentTarget.value,
      aName: e.currentTarget.value,
      //aStreet: e.currentTarget.value,
      //aPLZ: e.currentTarget.value,
      //aCity: e.currentTarget.value,
    });
  };
  onChange2 = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      //eName: e.currentTarget.value,
      //eStreet: e.currentTarget.value,
      //ePLZ: e.currentTarget.value,
      //eCity: e.currentTarget.value,
      //aName: e.currentTarget.value,
      aStreet: e.currentTarget.value,
      //aPLZ: e.currentTarget.value,
      //aCity: e.currentTarget.value,
    });
  };
  onChange3 = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      //eName: e.currentTarget.value,
      //eStreet: e.currentTarget.value,
      //ePLZ: e.currentTarget.value,
      //eCity: e.currentTarget.value,
      //aName: e.currentTarget.value,
      //aStreet: e.currentTarget.value,
      aPLZ: e.currentTarget.value,
      //aCity: e.currentTarget.value,
    });
  };
  onChange4 = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      //eName: e.currentTarget.value,
      //eStreet: e.currentTarget.value,
      //ePLZ: e.currentTarget.value,
      //eCity: e.currentTarget.value,
      //aName: e.currentTarget.value,
      //aStreet: e.currentTarget.value,
      //aPLZ: e.currentTarget.value,
      aCity: e.currentTarget.value,
    });
  };
  onChange5 = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      eName: e.currentTarget.value,
      //eStreet: e.currentTarget.value,
      //ePLZ: e.currentTarget.value,
      //eCity: e.currentTarget.value,
      //aName: e.currentTarget.value,
      //aStreet: e.currentTarget.value,
      //aPLZ: e.currentTarget.value,
      //aCity: e.currentTarget.value,
    });
  };
  onChange6 = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      //eName: e.currentTarget.value,
      eStreet: e.currentTarget.value,
      //ePLZ: e.currentTarget.value,
      //eCity: e.currentTarget.value,
      //aName: e.currentTarget.value,
      //aStreet: e.currentTarget.value,
      //aPLZ: e.currentTarget.value,
      //aCity: e.currentTarget.value,
    });
  };
  onChange7 = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      //eName: e.currentTarget.value,
      //eStreet: e.currentTarget.value,
      ePLZ: e.currentTarget.value,
      //eCity: e.currentTarget.value,
      //aName: e.currentTarget.value,
      //aStreet: e.currentTarget.value,
      //aPLZ: e.currentTarget.value,
      //aCity: e.currentTarget.value,
    });
  };
  onChange8 = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({
      //eName: e.currentTarget.value,
      //eStreet: e.currentTarget.value,
      //ePLZ: e.currentTarget.value,
      eCity: e.currentTarget.value,
      //aName: e.currentTarget.value,
      //aStreet: e.currentTarget.value,
      //aPLZ: e.currentTarget.value,
      //aCity: e.currentTarget.value,
    });
  };

  /* 
  https://reactjs.org/docs/forms.html
  https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events
  
  */
  render(): JSX.Element {
    return (
      <>
        <div className="mt-5 bg-white rounded-lg shadow">
          <div className="flex">
            <div className="flex-1 py-5 pl-5 overflow-hidden">
              <svg
                className="inline align-text-top"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
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
          </div>
          <div className="px-5 pb-5">
            <Input
              id="aName"
              name="aName"
              placeholder="Vor- und Nachname"
              value={this.state.aName}
              onChange={this.onChange}
            />
            <Input
              id="aStreet"
              name="aStreet"
              placeholder="Adresse"
              value={this.state.aStreet}
              onChange={this.onChange2}
            />
            <div className="flex">
              <div className="flex-grow w-1/4 pr-2">
                <Input
                  id="aPLZ"
                  name="aPLZ"
                  placeholder="PLZ"
                  value={this.state.aPLZ}
                  onChange={this.onChange3}
                />
              </div>
              <div className="flex-grow">
                <Input
                  id="aCity"
                  name="aCity"
                  placeholder="Stadt"
                  value={this.state.aCity}
                  onChange={this.onChange4}
                />
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
              <h1 className="inline text-2xl font-semibold leading-none">Empf??nger</h1>
            </div>
            <div className="flex-none pt-2.5 pr-2.5 pl-1" />
          </div>
          <div className="px-5 pb-5">
            <Input
              id="eName"
              name="eName"
              placeholder="Vor- und Nachname"
              value={this.state.eName}
              onChange={this.onChange5}
            />
            <Input
              id="eStreet"
              name="eStreet"
              placeholder="Adresse"
              value={this.state.eStreet}
              onChange={this.onChange6}
            />
            <div className="flex">
              <div className="flex-grow w-1/4 pr-2">
                <Input
                  id="ePLZ"
                  name="ePLZ"
                  placeholder="PLZ"
                  value={this.state.ePLZ}
                  onChange={this.onChange7}
                />
              </div>
              <div className="flex-grow">
                <Input
                  id="eStadt"
                  name="eStadt"
                  placeholder="Stadt"
                  value={this.state.eCity}
                  onChange={this.onChange8}
                />
              </div>
            </div>
          </div>
          <hr className="mt-4" />

          <div className="flex flex-row-reverse p-3">
            <div className="flex-initial pl-3">
              <SaveBTN text="Speichern" />
            </div>
            <div className="flex-initial">
              <DeleteBTN text="L??schen" />
            </div>
          </div>
        </div>

        <Tile
          eName={this.state.eName}
          eStreet={this.state.eStreet}
          ePLZ={this.state.ePLZ}
          eCity={this.state.eCity}
          aName={this.state.aName}
          aStreet={this.state.aStreet}
          aPLZ={this.state.aPLZ}
          aCity={this.state.aCity}
        />
      </>
    );
  }
}

interface Props {
  eName: String;
  eStreet: string;
  ePLZ: string;
  eCity: string;
  aName: string;
  aStreet: string;
  aPLZ: string;
  aCity: string;
}

export const Tile = (p: Props) => (
  <div className="mt-5 bg-white shadow cursor-pointer rounded-xl">
    <div className="flex">
      <div className="flex-1 py-5 pl-5 overflow-hidden">
        <ul>
          <li className="text-xs text-gray-600 uppercase ">Empf??nger</li>
          <li>{p.eName}</li>
          <li>{p.eStreet}</li>
          <li>
            {p.ePLZ} {p.eCity}
          </li>
        </ul>
      </div>
      <div className="flex-1 py-5 pl-1 overflow-hidden">
        <ul>
          <li className="text-xs text-gray-600 uppercase">Absender</li>
          <li>{p.aName}</li>
          <li>{p.aStreet}</li>
          <li>
            {p.aPLZ} {p.aCity}
          </li>
        </ul>
      </div>
      <div className="flex-none pt-2.5 pr-2.5 pl-1">
        <button
          type="button"
          className="px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M5 18.08V19h.92l9.06-9.06-.92-.92z" opacity=".3" />
            <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export const InputTile = (p: Props) => (
  <>
    <div className="mt-5 bg-white rounded-lg shadow">
      <div className="flex">
        <div className="flex-1 py-5 pl-5 overflow-hidden">
          <svg
            className="inline align-text-top"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
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
      </div>
      <div className="px-5 pb-5">
        <Input id="" name="aName" placeholder="Vor- und Nachname " value={p.aName} onChange="" />
        <div className="flex">
          <div className="flex-grow w-1/4 pr-2">
            <Input
              id=""
              name="aStreet"
              placeholder="Adresse"
              value={p.aStreet}
              onChange="aStreet"
            />
          </div>
          <div className="flex-grow">
            <Input id="" name="" placeholder="Adresse" value={p.aName} onChange="" />
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
          <h1 className="inline text-2xl font-semibold leading-none">Empf??nger</h1>
        </div>
        <div className="flex-none pt-2.5 pr-2.5 pl-1" />
      </div>
      <div className="px-5 pb-5">
        <Input id="" name="" placeholder="Adresse" value={p.aName} onChange="" />
        <Input id="" name="" placeholder="Adresse" value={p.aName} onChange="" />
        <div className="flex">
          <div className="flex-grow w-1/4 pr-2">
            <Input id="" name="" placeholder="Adresse" value={p.aName} onChange="" />
          </div>
          <div className="flex-grow">
            <Input id="" name="" placeholder="Adresse" value={p.aName} onChange="" />
          </div>
        </div>
      </div>
      <hr className="mt-4" />

      <div className="flex flex-row-reverse p-3">
        <div className="flex-initial pl-3">
          <SaveBTN text="Speichern" />
        </div>
        <div className="flex-initial">
          <DeleteBTN text="L??schen" />
        </div>
      </div>
    </div>
  </>
);
