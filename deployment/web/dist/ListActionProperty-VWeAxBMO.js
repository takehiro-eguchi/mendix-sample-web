import { asProperty, fromConstant$ } from './index-byXJmgeF.js';
import { listItemProperty } from './BH5qNKCa-Uep1-5zc.js';
import { computeAction } from './ActionProperty-Bit9c0PV.js';
import './BrzhM9fk-N7FbJJus.js';
import './Icon-BZqjj_0y.js';

const ListActionProperty = asProperty((config, store, widgetId, propertyPath) => listItemProperty((object) => {
  const predefinedArguments = fromConstant$({ [widgetId]: { object: { object } } });
  return computeAction(config, store, widgetId, predefinedArguments, true);
}, `List action "${widgetId}/${propertyPath}"`, config.dataSourceId));

export { ListActionProperty };
