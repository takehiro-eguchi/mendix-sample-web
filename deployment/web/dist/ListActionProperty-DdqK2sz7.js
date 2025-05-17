import { asProperty, fromConstant$ } from './index-BK9-l-60.js';
import { listItemProperty } from './BH5qNKCa-He16eDuK.js';
import { computeAction } from './ActionProperty-DS8NDQ2q.js';
import './BrzhM9fk-CY1CP8BK.js';
import './Icon-bVASr8MS.js';

const ListActionProperty = asProperty((config, store, widgetId, propertyPath) => listItemProperty((object) => {
  const predefinedArguments = fromConstant$({ [widgetId]: { object: { object } } });
  return computeAction(config, store, widgetId, predefinedArguments, true);
}, `List action "${widgetId}/${propertyPath}"`, config.dataSourceId));

export { ListActionProperty };
