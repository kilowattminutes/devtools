import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import settings from 'carbon-components/es/globals/js/settings';
import Toggle from 'carbon-components-react/es/components/Toggle';
import { setStorage } from '@carbon/devtools-utilities/src/setStorage';
import { getStorage } from '@carbon/devtools-utilities/src/getStorage';
import { gaConfigurationEvent } from '@carbon/devtools-utilities/src/ga';
import { gridVersions } from '../../../globals/options';
import { defaults } from '../../../globals/defaults';

const { prefix } = settings;

function Grid({ disabled }) {
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
    <>
      <section className={`${prefix}--popup-main__section`}>
        <div className={`${prefix}--row`}>
          <div className={`${prefix}--col-sm-2`}>
            <h2 className={`${prefix}--popup-main__section-title`}>Bookworm</h2>
          </div>
          <div className={`${prefix}--col-sm-2`}>
            <Toggle
              size="sm"
              className={`${prefix}--popup-main__section-toggle`}
              disabled={disabled}
              id="toggleBookworm"
              toggled={toggleGrids['toggleBookworm']}
              onToggle={(e) => {
                const changes = { ...toggleGrids };
                changes['toggleBookworm'] = e;
                setToggleGrids(changes);
                gaConfigurationEvent('toggle-bookworm', 'global', e);
              }}
            />
          </div>
        </div>
      </section>
      <section className={`${prefix}--popup-main__section`}>
        <div className={`${prefix}--row`}>
          <div className={`${prefix}--col-sm-2`}>
            <h2 className={`${prefix}--popup-main__section-title`}>Potato</h2>
          </div>
          <div className={`${prefix}--col-sm-2`}>
            <Toggle
              size="sm"
              className={`${prefix}--popup-main__section-toggle`}
              disabled={disabled}
              id="togglePotato"
              toggled={toggleGrids['togglePotato']}
              onToggle={(e) => {
                const changes = { ...toggleGrids };
                changes['togglePotato'] = e;
                setToggleGrids(changes);
                gaConfigurationEvent('toggle-potato', 'global', e);
              }}
            />
          </div>
        </div>
      </section>
      <section className={`${prefix}--popup-main__section`}>
        <div className={`${prefix}--row`}>
          <div className={`${prefix}--col-sm-2`}>
            <h2 className={`${prefix}--popup-main__section-title`}>Sarge</h2>
          </div>
          <div className={`${prefix}--col-sm-2`}>
            <Toggle
              size="sm"
              className={`${prefix}--popup-main__section-toggle`}
              disabled={disabled}
              id="toggleSarge"
              toggled={toggleGrids['toggleSarge']}
              onToggle={(e) => {
                const changes = { ...toggleGrids };
                changes['toggleSarge'] = e;
                setToggleGrids(changes);
                gaConfigurationEvent('toggle-sarge', 'global', e);
              }}
            />
          </div>
        </div>
      </section>
      <section className={`${prefix}--popup-main__section`}>
        <div className={`${prefix}--row`}>
          <div className={`${prefix}--col-sm-2`}>
            <h2 className={`${prefix}--popup-main__section-title`}>Slink</h2>
          </div>
          <div className={`${prefix}--col-sm-2`}>
            <Toggle
              size="sm"
              className={`${prefix}--popup-main__section-toggle`}
              disabled={disabled}
              id="toggleSlink"
              toggled={toggleGrids['toggleSlink']}
              onToggle={(e) => {
                const changes = { ...toggleGrids };
                changes['toggleSlink'] = e;
                setToggleGrids(changes);
                gaConfigurationEvent('toggle-slink', 'global', e);
              }}
            />
          </div>
        </div>
      </section>
      <section className={`${prefix}--popup-main__section`}>
        <div className={`${prefix}--row`}>
          <div className={`${prefix}--col-sm-2`}>
            <h2 className={`${prefix}--popup-main__section-title`}>Bullseye</h2>
          </div>
          <div className={`${prefix}--col-sm-2`}>
            <Toggle
              size="sm"
              className={`${prefix}--popup-main__section-toggle`}
              disabled={disabled}
              id="toggleBullseye"
              toggled={toggleGrids['toggleBullseye']}
              onToggle={(e) => {
                const changes = { ...toggleGrids };
                changes['toggleBullseye'] = e;
                setToggleGrids(changes);
                gaConfigurationEvent('toggle-bullseye', 'global', e);
              }}
            />
          </div>
        </div>
      </section>
      <section className={`${prefix}--popup-main__section`}>
        <div className={`${prefix}--row`}>
          <div className={`${prefix}--col-sm-2`}>
            <h2 className={`${prefix}--popup-main__section-title`}>Buster</h2>
          </div>
          <div className={`${prefix}--col-sm-2`}>
            <Toggle
              size="sm"
              className={`${prefix}--popup-main__section-toggle`}
              disabled={disabled}
              id="toggleBuster"
              toggled={toggleGrids['toggleBuster']}
              onToggle={(e) => {
                const changes = { ...toggleGrids };
                changes['toggleBuster'] = e;
                setToggleGrids(changes);
                gaConfigurationEvent('toggle-buster', 'global', e);
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

Grid.propTypes = {
  disabled: PropTypes.bool,
};

export { Grid };
