import { gridVersions } from './options';

const defaults = {};

defaults.global = {
  gridoverlay: true,
};

defaults.popup = {
  carbonStatus: 'loading',
  panelState: {
    open: false,
    children: null,
  },
};

defaults.gridStyle = 'Potato';

defaults.grid = {
  toggle2xGrid: false,
};

defaults.toggle2x = {
  toggle2xColumns: true,
  toggle2xBreakpoints: true,
  toggle2xPosition: 'Center',
  toggle2xLeftInfluencer: 0,
  toggle2xRightLeftInfluencer: 0,
};

defaults.miniUnit = {
  miniUnitVerticalBorders: true,
  miniUnitHorizontalBorders: true,
};

defaults.specs = {
  type: 'typography',
  outline: true,
};

defaults.gridVersion = Object.keys(gridVersions)[0];

defaults.generalSettings = {
  theme: 'white',
  experimental: false,
  nonCarbon: true,
};

defaults.ga = {
  isIBMer: 'unknown',
  clientId: 5555,
  gridVersion: defaults.gridVersion,
  generalTheme: defaults.generalSettings.theme,
  generalExperimental: defaults.generalSettings.experimental,
  generalNonCarbon: defaults.generalSettings.nonCarbon,
};

export { defaults };
