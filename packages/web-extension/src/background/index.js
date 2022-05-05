import { validatePage, injectGrid, setBadge } from './tasks';
import { setStorage } from '@carbon/devtools-utilities/src/setStorage';
import { setClientId } from '@carbon/devtools-utilities/src/ga';
import packageJSON from '../../package.json';

setStorage({ version: packageJSON.version });
setClientId();
setBadge();
validatePage();
injectGrid();

chrome.runtime.onMessage.addListener((data) => {
  if (data.type === 'gridStyle') {
    alert('gridStyle changed to ' + data.gridStyle);
  }
  if (data.type === 'gridSwitch') {
    alert('gridSwitch' + data.id + ' to ' + data.state);
  }
});
