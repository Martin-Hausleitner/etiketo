import React from 'react';

import { PrintBTN, DownloadBTN, NewBTN } from '../components/Buttons';
import { Tile, InputTile } from '../etikettinput/Tile';
import { Meta } from '../layout/Meta';
import { Config } from '../utils/Config';

const Base = () => (
  <div className="container mx-auto">
    <h1 className="py-10 text-5xl font-black">Etiketo</h1>
    <Meta title={Config.title} description={Config.description} />
    <div className="flex ">
      <div className="flex-1 ">
        <div className="">
          <NewBTN text="Neues Versandetikett erstellen" />
          <InputTile />
          <Tile />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex flex-row-reverse">
          <div className="flex-initial pl-3">
            <PrintBTN text="Drucken" />
          </div>
          <div className="flex-initial">
            <DownloadBTN text="Download" />
          </div>
        </div>
        <embed className="pt-5 pl-5" src="file_name.pdf" width="800px" height="900" />
      </div>
    </div>
  </div>
);

export { Base };
