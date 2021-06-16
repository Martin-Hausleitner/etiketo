import React from 'react';

import { Meta } from '../layout/Meta';
import { Config } from '../utils/Config';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { PrintBTN, DownloadBTN, DeleteBTN, NewBTN } from '../components/Buttons'
import { Input, Checkbox } from '../components/Forms'
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';
import { Tile } from '../etikettinput/Tile'

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={Config.title} description={Config.description} />
    <PrintBTN
    text="Drucken"
      />
    
    <DownloadBTN
    text="Download"/>
    <DeleteBTN text="Download"/>
    <Input 
      type="{props.type}"
      id="{props.id}"
      name="{props.name}"
      placeholder="Test"
    />
    <Tile/>

  <NewBTN
  text="Neues Versandetikett erstellen" />

<Checkbox 
      id="{props.id}"
      name="{props.name}"
      label="sdds"
    />
    
  </div>
);

export { Base };
