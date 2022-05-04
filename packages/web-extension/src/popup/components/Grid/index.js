import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import settings from 'carbon-components/es/globals/js/settings';
import RadioButtonGroup from 'carbon-components-react/es/components/RadioButtonGroup';
import RadioButton from 'carbon-components-react/es/components/RadioButton';
import { setStorage } from '@carbon/devtools-utilities/src/setStorage';
import { getStorage } from '@carbon/devtools-utilities/src/getStorage';
//import { gaConfigurationEvent } from '@carbon/devtools-utilities/src/ga';
import { gridVersions } from '../../../globals/options';
import { defaults } from '../../../globals/defaults';

//const { prefix } = settings;

function Grid() {
  const [toggleGrids, setToggleGrids] = useState(defaults.grid);
  const [setGridVersionTitle] = useState(
    gridVersions[Object.keys(gridVersions)[0]]
  );
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    // get storage and set defaults
    const dataKey = 'toggleGrids';
    getStorage([dataKey], (dataReceived) => {
      if (dataReceived && dataReceived[dataKey]) {
        setToggleGrids(dataReceived[dataKey]);
      }
      setOnLoad(true);
    });

    // gets and sets the grid version title
    getStorage(['gridVersion'], ({ gridVersion }) => {
      if (gridVersion) {
        setGridVersionTitle(gridVersions[gridVersion]);
      }
    });
  });

  useEffect(() => {
    // update storage
    if (onLoad) {
      setStorage({ toggleGrids });
    }
  });

  return !onLoad ? null : (
    <RadioButtonGroup labelText="Grid version">
      <RadioButton labelText="Potato" value="Potato" id="Potato" />
      <RadioButton labelText="Bookworm" value="Bookworm" id="Bookworm" />
      <RadioButton labelText="Sarge" value="Sarge" id="Sarge" />
      <RadioButton labelText="Slink" value="Slink" id="Slink" />
      <RadioButton labelText="Bullseye" value="Bullseye" id="Bullseye" />
      <RadioButton labelText="Buster" value="Buster" id="Buster" />
    </RadioButtonGroup>
  );
}

Grid.propTypes = {
  disabled: PropTypes.bool,
};

export { Grid };
