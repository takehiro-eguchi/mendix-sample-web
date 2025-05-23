import { asProperty, fromConstant$ } from './index-sUfOvV_8.js';
import { listItemProperty } from './BH5qNKCa-k3CyHRsq.js';
import { computeAction } from './ActionProperty-CYY0rMjJ.js';
import './BrzhM9fk-DCcHnYPV.js';
import './Icon-CLMmynlf.js';

const ListActionProperty = asProperty((config, store, widgetId, propertyPath) => listItemProperty((object) => {
  const predefinedArguments = fromConstant$({ [widgetId]: { object: { object } } });
  return computeAction(config, store, widgetId, predefinedArguments, true);
}, `List action "${widgetId}/${propertyPath}"`, config.dataSourceId));

export { ListActionProperty };
