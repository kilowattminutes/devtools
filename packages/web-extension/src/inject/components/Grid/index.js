import settings from 'carbon-components/es/globals/js/settings';
import { storageItemChanged } from '@carbon/devtools-utilities/src/storageItemChanged';
import { getStorage } from '@carbon/devtools-utilities/src/getStorage';
import { gridVersions } from '../../../globals/options';
import { defaults } from '../../../globals/defaults';
//import { manage2xGrid } from './2x';
import { showMiniUnitGrid, hideMiniUnitGrid } from './mini-unit';
import { themes } from '@carbon/themes';
import GridOverlay from 'grid-overlay/dist/grid-overlay.min.js';
//import { getMessage } from '@carbon/devtools-utilities/src/getMessage';

const { prefix } = settings;
const html = document.querySelector('html');
const body = document.body;
const gridVersionsList = Object.keys(gridVersions);
const themeList = [...Object.keys(themes), 'system'];

let lastTheme = '';
let lastGridVersion = '';
let _gridOverlay = null;
let gridOptions;

function initGrid() {}

function destroyGrid() {
  //alert('destroy');
  if (_gridOverlay !== null) {
    _gridOverlay.destroy();
    body.classList.add('grid-removed');
    //alert('destroyed');
  }
}

function switchGrid(gridStyle) {
  if (gridStyle) {
    destroyGrid();
    body.classList.add('grid-added');

    switch (gridStyle) {
      case 'Bookworm':
      case 'Slink':
        gridOptions = {
          overlayVisible: true,
          maxWidth: 2400,
          controlPosition: 'fixed',
          controlBottom: '0px',
          controlRight: '0px',
          controlOpacity: 0.6,
          controlPadding: 8,
          cols: 12,
          extraLeftRightGutter: 8,
          gridGutter: 8,
          adaptive: [
            {
              mediaQuery: '(max-width: 700px)',
              cols: 2,
              gridGutter: 8,
              extraLeftRightGutter: 8,
            },
            {
              mediaQuery: '(min-width: 1025px)',
              cols: 12,
              gridGutter: 8,
              extraLeftRightGutter: 8,
            },
          ],
        };
        break;
      case 'Buster':
      case 'Potato':
      case 'Bullseye':
      case 'Sarge':
        gridOptions = {
          overlayVisible: true,
          maxWidth: 1440,
          controlPosition: 'fixed',
          controlBottom: '0px',
          controlRight: '0px',
          controlOpacity: 0.6,
          controlPadding: 8,
          cols: 12,
          extraLeftRightGutter: 8,
          gridGutter: 8,
          adaptive: [
            {
              mediaQuery: '(max-width: 700px)',
              cols: 2,
              gridGutter: 8,
              extraLeftRightGutter: 8,
            },
            {
              mediaQuery: '(min-width: 1025px)',
              cols: 12,
              gridGutter: 8,
              extraLeftRightGutter: 48,
            },
          ],
        };
        break;
    }

    //alert('new');

    /* eslint-disable */
    _gridOverlay = new GridOverlay(gridOptions);
  }

  // updates if storage changes
  //manageGlobals();
  //manage2xGrid();
}

function manageGlobals() {
  const grid2x = html.querySelector(`.${prefix}--grid-2x`);

  getStorage('globalToggleStates', ({ globalToggleStates }) =>
    manageGlobalToggle(globalToggleStates)
  );
  storageItemChanged('globalToggleStates', manageGlobalToggle);

  //getStorage('toggleGrids', ({ toggleGrids }) => manageGrids(toggleGrids));
  //storageItemChanged('toggleGrids', manageGrids);

  getStorage('generalTheme', ({ generalTheme }) =>
    manageGeneralTheme(generalTheme)
  );
  storageItemChanged('generalTheme', manageGeneralTheme);

  getStorage('gridVersion', ({ gridVersion }) =>
    manageGridVersion(gridVersion)
  );
  storageItemChanged('gridVersion', manageGridVersion);

  function manageGlobalToggle({ gridoverlay }) {
    // this may not belong here?
    if (gridoverlay) {
      html.classList.remove(`${prefix}--grid--hide`);
    } else {
      html.classList.add(`${prefix}--grid--hide`);
    }
  }

  function manageGrids({ toggle2xGrid, toggleMiniUnitGrid }) {
    // hide and show 2x grid
    if (toggle2xGrid) {
      grid2x.classList.remove(`${prefix}--grid-2x--hide`);
    } else {
      grid2x.classList.add(`${prefix}--grid-2x--hide`);
    }

    // show or hide mini unit grid
    if (toggleMiniUnitGrid) {
      showMiniUnitGrid();
    } else {
      hideMiniUnitGrid();
    }
  }

  function manageGeneralTheme(generalTheme = defaults.generalSettings.theme) {
    if (generalTheme !== lastTheme) {
      html.classList.remove(...themeList.map((theme) => `${prefix}--${theme}`)); // remove any first
      html.classList.add(`${prefix}--${generalTheme}`); // set updated theme
      lastTheme = generalTheme;
    }
  }

  function manageGridVersion(gridVersion = defaults.gridVersion) {
    if (gridVersion !== lastGridVersion) {
      html.classList.remove(
        ...gridVersionsList.map((version) => `${prefix}--grid--${version}`)
      ); // remove any first
      html.classList.add(`${prefix}--grid--${gridVersion}`); // set updated theme
      lastTheme = gridVersion;
    }
  }
}

export { initGrid, switchGrid, destroyGrid };
