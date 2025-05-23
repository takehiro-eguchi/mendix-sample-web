import { asProperty, fromConstant$ } from './index-BCA8X3MP.js';
import { listItemProperty } from './BH5qNKCa-DKuecUbx.js';
import { computeAction } from './ActionProperty-BjRv15Ma.js';
import './BrzhM9fk-B35Z04N6.js';
import './Icon-CwpoK74K.js';

const ListActionProperty = asProperty((config, store, widgetId, propertyPath) => listItemProperty((object) => {
  const predefinedArguments = fromConstant$({ [widgetId]: { object: { object } } });
  return computeAction(config, store, widgetId, predefinedArguments, true);
}, `List action "${widgetId}/${propertyPath}"`, config.dataSourceId));

export { ListActionProperty };
