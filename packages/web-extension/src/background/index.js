import { validatePage, injectGrid, setBadge } from './tasks';
import { setStorage } from '@carbon/devtools-utilities/src/setStorage';
import { setClientId } from '@carbon/devtools-utilities/src/ga';
import packageJSON from '../../package.json';
import { switchGrid, destroyGrid } from '../inject/components/Grid';

setStorage({ version: packageJSON.version });
setClientId();
setBadge();
validatePage();
injectGrid();

chrome.runtime.onMessage.addListener((data) => {
  if (data.type === 'gridStyle') {
    //alert('gridStyle changed to ' + data.gridStyle);
    switchGrid(data.gridStyle);
  }
  if (
    data.type === 'gridSwitch' &&
    data.id === 'gridoverlay' &&
    data.state === false
  ) {
    destroyGrid();
  }
});
