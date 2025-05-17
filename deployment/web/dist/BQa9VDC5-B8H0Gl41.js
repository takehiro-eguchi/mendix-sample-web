import { fromComputation$, mapL, loading, withFormSuspension$, fromRequest$, getSubscribedObject$, asDynamicValue$, toObjectItem, fromConstant$, withSideEffect$, readUntracked } from './index-DsLjkJno.js';

function fromObjectProperty$({ scope, dataSourceId, editable }, store, widgetId, parameters$, fetchData) {
  const shouldLoad$ = getParentIsReady$(scope, store, widgetId);
  let fetchId = -1;
  const rawFetchTrigger$ = fromComputation$(`Load trigger of data source of ${widgetId}`, () => shouldLoad$.dependOn() ? mapL(parameters$.dependOn(), (parameters) => ({ parameters, id: ++fetchId })) : loading()), fetchTrigger$ = withFormSuspension$(store, widgetId, rawFetchTrigger$), fetchResult$ = fromRequest$(`Load data of data source of ${widgetId}`, () => {
    const trigger = fetchTrigger$.dependOn();
    return "available" !== trigger.status ? trigger : fetchData(trigger.value.parameters);
  }), object$ = withObjectSharing$(getSubscribedObject$(widgetId, fetchResult$, store), store, widgetId, editable);
  return asDynamicValue$(fromComputation$(`Returned data of data source of ${widgetId}`, () => mapL(object$.dependOn(), (obj) => toObjectItem(obj, dataSourceId))));
}
function getParentIsReady$(scope, store, widgetId) {
  if (scope) {
    const [parentFirstLoadDone$] = store.useSlot(scope, "firstLoadDone");
    return fromComputation$(`Is parent ${scope} of ${widgetId} ready?`, () => Boolean(parentFirstLoadDone$.dependOn()));
  }
  return fromConstant$(true);
}
function withObjectSharing$(value$, store, widgetId, editable) {
  const [firstLoadDone$, setFirstLoadDone] = store.useSlot(widgetId, "firstLoadDone"), [, setEditableObject] = store.useSlot(widgetId, "editableObject"), [object$, setObject] = store.useSlot(widgetId, "object"), setObjectSlots = (value) => {
    editable && setEditableObject(value), setObject(value);
  };
  return withSideEffect$(`Share object of ${widgetId}`, value$, (value) => {
    if (readUntracked(firstLoadDone$) || setFirstLoadDone("loading" !== value.status), "loading" === value.status) {
      const oldState = readUntracked(object$);
      void 0 !== oldState && "unavailable" !== oldState.status || setObjectSlots(loading());
    } else
      setObjectSlots(value);
  });
}
function withFirstLoadDoneSharing$(value$, store, widgetId) {
  const [firstLoadDone$, setFirstLoadDone] = store.useSlot(widgetId, "firstLoadDone");
  return withSideEffect$(`Share first load done of ${widgetId}`, value$, (value) => {
    readUntracked(firstLoadDone$) || setFirstLoadDone("loading" !== value.status);
  });
}

export { fromObjectProperty$, getParentIsReady$ };
