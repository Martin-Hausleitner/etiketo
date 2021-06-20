import React from 'react';

import { PrintBTN, DownloadBTN, NewBTN } from '../components/Buttons';
import Tile1, { Tile, InputTile } from '../etikettinput/Tile';
import { Meta } from '../layout/Meta';
import { Config } from '../utils/Config';

const Base = () => (
  <div className="container px-10 mx-auto 2xl:px-72 xl:p-50 sm:px-2 md:px-2">
    <h1 className="py-10 text-5xl font-black">Etiketoo</h1>
    <Meta title={Config.title} description={Config.description} />
    <div className="flex ">
      <div className="flex-1 ">
        <div>
          <NewBTN text="Neues Versandetikett erstellen" />
   
          <Tile1 />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-row-reverse">
          <div className="flex-initial pl-3">
            <PrintBTN text="Drucken" />
          </div>
          <div className="flex-initial pl-1">
            <DownloadBTN text="Download" />
          </div>
        </div>
      </div>

      <div id="root" />
    </div>
  </div>
);

export { Base };
