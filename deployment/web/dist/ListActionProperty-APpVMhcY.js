import { asProperty, fromConstant$ } from './index-DsLjkJno.js';
import { listItemProperty } from './BH5qNKCa-YUXxnGjk.js';
import { computeAction } from './ActionProperty-BTILmUmE.js';
import './BrzhM9fk-DIx2MmKD.js';
import './Icon-CD3-QqtZ.js';

const ListActionProperty = asProperty((config, store, widgetId, propertyPath) => listItemProperty((object) => {
  const predefinedArguments = fromConstant$({ [widgetId]: { object: { object } } });
  return computeAction(config, store, widgetId, predefinedArguments, true);
}, `List action "${widgetId}/${propertyPath}"`, config.dataSourceId));

export { ListActionProperty };
