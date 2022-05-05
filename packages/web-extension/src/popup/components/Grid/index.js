import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import settings from 'carbon-components/es/globals/js/settings';
import RadioButtonGroup from 'carbon-components-react/es/components/RadioButtonGroup';
import RadioButton from 'carbon-components-react/es/components/RadioButton';
import { setStorage } from '@carbon/devtools-utilities/src/setStorage';
import { getStorage } from '@carbon/devtools-utilities/src/getStorage';
//import { gaConfigurationEvent } from '@carbon/devtools-utilities/src/ga';
import { defaults } from '../../../globals/defaults';
//import { sendMessage } from '@carbon/devtools-utilities/src/sendMessage';

//const { prefix } = settings;

function Grid() {
  const [toggleGridStyle, setToggleGridStyle] = useState(defaults.gridStyle);
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    // get storage and set defaults
    const dataKey = 'toggleGridStyle';
    getStorage([dataKey], (dataReceived) => {
      if (dataReceived && dataReceived[dataKey]) {
        setToggleGridStyle(dataReceived[dataKey]);
      }
      setOnLoad(true);
    });
  });

  useEffect(() => {
    // update storage
    if (onLoad) {
      setStorage({ toggleGridStyle });
    }
  });

  return !onLoad ? null : (
    <RadioButtonGroup
      legendText="Layout"
      defaultSelected={toggleGridStyle}
      onChange={(val) => {
        setToggleGridStyle(val);
        chrome.runtime.sendMessage({ type: 'gridStyle', gridStyle: val }); //sendMessage({ gridStyle: val });
      }}
    >
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
