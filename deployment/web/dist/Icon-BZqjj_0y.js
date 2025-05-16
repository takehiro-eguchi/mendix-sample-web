import { getUI, getData, methodToPromise, AssertionError, getByGuid, evaluateActionExpression, toNumber, mapValues, LogManager, ensure, getSession, crash, ValidationError, handleError, onlineData, offlineData, getByGuids, translate, cancelChanges, nanoflowEngine, toNanoflowArguments, toRuntimeArguments, DescribedError, asResult, dynAvailable, jsxRuntimeExports } from './index-byXJmgeF.js';

async function synchronize() {
  const ui = getUI(), progressId = ui.showProgress(void 0, true);
  try {
    await getData().synchronizeOffline();
  } finally {
    ui.hideProgress(progressId);
  }
}
async function getUnsavedObjects(currentForm) {
  return await methodToPromise(currentForm, "publish", "submit"), await methodToPromise(currentForm, "publish", "commit"), currentForm.getSubmitObjects();
}
async function openPage(modelerConfig, clientConfig, actionArguments) {
  const [pageParameters, parameters] = function(actionArguments2) {
    const pageParameters2 = {}, otherArguments = {};
    return Object.keys(actionArguments2).forEach((k) => {
      k.startsWith(PARAMETER_ARGUMENT_PREFIX) ? pageParameters2["$" + k.substring(PARAMETER_ARGUMENT_PREFIX.length)] = actionArguments2[k] : otherArguments[k] = actionArguments2[k];
    }), [pageParameters2, otherArguments];
  }(actionArguments);
  let pageArguments = [{}];
  for (const [name, value] of Object.entries(pageParameters))
    if (value) {
      if ("object" in value)
        pageArguments.forEach((p) => p[name] = value.object);
      else if ("objects" in value) {
        if (1 !== pageArguments.length)
          throw new AssertionError("Multiple parameters with multiple objects are not supported");
        const args = pageArguments[0];
        pageArguments = value.objects.map((o) => ({ ...args, [name]: o }));
      } else if ("id" in value) {
        const object = await getByGuid(value.id);
        pageArguments.forEach((p) => p[name] = object);
      } else if ("ids" in value)
        throw new AssertionError("Parameters with multi-selection are not supported");
    } else
      pageArguments.forEach((p) => p[name] = void 0);
  clientConfig.abortOnClientValidations && await clientConfig.currentForm.triggerValidation(), clientConfig.abortOnServerValidations && await methodToPromise(getData(), "validate", clientConfig.currentForm.getSubmitObjects());
  const formsOpened = await Promise.all(pageArguments.map(async function(args) {
    let specializedSettings;
    if (modelerConfig.specializations) {
      const object = args[modelerConfig.specializations.argument];
      specializedSettings = object ? modelerConfig.specializations.pageSettings[object.getEntity()] : void 0;
    }
    const settings = specializedSettings ?? modelerConfig, title = settings.title ? await evaluateActionExpression(settings.title, parameters) ?? "" : void 0, numberOfPagesToClose = modelerConfig.numberOfPagesToClose ? toNumber(await evaluateActionExpression(modelerConfig.numberOfPagesToClose, parameters)) : void 0, formParameters = settings.params ? mapValues(settings.params, (p) => args[p]?.getGuid()) : mapValues(args, (o) => o?.getGuid());
    return getUI().openForm2(settings.name, formParameters, title, clientConfig.currentForm, { ...settings, formParams: clientConfig.formParams }, numberOfPagesToClose);
  }));
  return pageArguments.length > 1 ? formsOpened : formsOpened[0];
}
const PARAMETER_ARGUMENT_PREFIX = "param$";
const logger = LogManager.get().getLogger();
async function openLink(config, parameter) {
  const url = "addressAttribute" in config ? await methodToPromise(ensure(parameter), "fetch", config.addressAttribute) : config.address, validUrl = function(schema, url2) {
    if (null == url2)
      return void logger.error("Attempted to open missing link URL");
    switch (schema) {
      case "email":
        return `mailto:${escape(url2)}`;
      case "call":
        return `tel:${escape(url2)}`;
      case "text":
        return `sms:${escape(url2)}`;
      default:
        const normalizedUrl = url2.trim().toLowerCase();
        return normalizedUrl.startsWith("javascript:") || normalizedUrl.startsWith("vbscript:") || normalizedUrl.startsWith("data:") ? void logger.error("Attempted to open invalid link URL", url2) : url2;
    }
  }(config.schema, url);
  void 0 !== validUrl && ("web" === config.schema ? window.open(validUrl, "_blank", "noopener") : window.open(validUrl, "_self"));
}
function executeAction(action, clientConfig, actionArguments, callback, errorHandler) {
  const session = getSession();
  function getObject(args) {
    return "$object" in args && args.$object ? "object" in args.$object ? args.$object.object : crash() : void 0;
  }
  function handleError$1(e) {
    errorHandler ? errorHandler(e) : e instanceof ValidationError || handleError(e);
  }
  session.hasSomeRole(action.config.allowedRoles) ? async function() {
    switch (action.type) {
      case "callMicroflow":
        return async function(modelerConfig, clientConfig2, actionArguments2) {
          const ui = getUI(), confirmation = modelerConfig.confirmation;
          if (confirmation && !await new Promise((resolve) => ui.confirmation({ cancel: confirmation.cancel, proceed: confirmation.proceed, content: confirmation.question, handler: () => resolve(true), onCancel: () => resolve(false) })))
            return;
          if (clientConfig2.beforeExecuteAction && clientConfig2.beforeExecuteAction(), clientConfig2.abortOnClientValidations)
            switch (modelerConfig.validate) {
              case "node":
                if (!clientConfig2.widgetIsValid)
                  throw new ValidationError();
                break;
              case "view":
                await clientConfig2.currentForm.triggerValidation();
            }
          const progressId = modelerConfig.progress ? ui.showProgress(modelerConfig.progress.message, modelerConfig.progress.modal) : void 0;
          try {
            await methodToPromise(clientConfig2.currentForm, "publish", "submit");
            const validationGuids = clientConfig2.abortOnServerValidations ? clientConfig2.currentForm.getSubmitObjects().map((mxobj) => mxobj.getGuid()) : [];
            mx.isOffline() ? await offlineData().executeMicroflow(modelerConfig.operationId, toRuntimeArguments(actionArguments2), clientConfig2.currentForm, validationGuids, Boolean(modelerConfig.async)) : await onlineData().executeMicroflow(modelerConfig.operationId, toRuntimeArguments(actionArguments2), clientConfig2.currentForm, validationGuids, Boolean(modelerConfig.async));
          } finally {
            void 0 !== progressId && ui.hideProgress(progressId);
          }
        }(action.config, clientConfig, actionArguments);
      case "callNanoflow":
        return async function(modelerConfig, clientConfig2, actionArguments2) {
          clientConfig2.beforeExecuteAction && clientConfig2.beforeExecuteAction(), clientConfig2.abortOnClientValidations && await clientConfig2.currentForm.triggerValidation(), await methodToPromise(clientConfig2.currentForm, "publish", "submit"), await nanoflowEngine.execute(modelerConfig.nanoflow, await toNanoflowArguments(actionArguments2), clientConfig2.currentForm);
        }(action.config, clientConfig, actionArguments);
      case "cancelChanges":
        return cancelChanges(action.config, clientConfig);
      case "closePage":
        return async function(modelerConfig, { currentForm }, parameters) {
          const numberOfPagesToClose = modelerConfig.numberOfPagesToClose ? toNumber(await evaluateActionExpression(modelerConfig.numberOfPagesToClose, parameters)) : 1;
          if (numberOfPagesToClose < 1)
            throw new AssertionError(`The number of pages to close evaluated to ${numberOfPagesToClose}. It must be at least 1.`);
          return currentForm.closePage(numberOfPagesToClose);
        }(action.config, clientConfig, actionArguments);
      case "doNothing":
        return;
      case "openLink":
        return openLink(action.config, getObject(actionArguments));
      case "openPage":
        return openPage(action.config, clientConfig, actionArguments).then(() => {
        });
      case "saveChanges":
        return async function(config, { currentForm }) {
          await currentForm.triggerValidation(), currentForm.setSuspend(true);
          try {
            const objectsToCommit = await getUnsavedObjects(currentForm);
            mx.isOffline() ? await new Promise((resolve, reject) => {
              getData().commit({ mxobjs: objectsToCommit, callback: resolve, error: reject });
            }) : await onlineData().executeObjectAction(config.operationId, "commit", objectsToCommit);
            try {
              config.syncAutomatically && await synchronize();
            } finally {
              config.closePage && await methodToPromise(currentForm, "close");
            }
          } finally {
            currentForm.setSuspend(false);
          }
        }(action.config, clientConfig);
      case "signOut":
        return async function() {
          getSession().isGuest() || (getUI().showProgress(void 0, true), mx.logout());
        }();
      case "synchronize":
        return synchronize();
      case "deleteObject":
        return async function(config, { currentForm }, parameter) {
          let objects;
          if (parameter)
            if ("object" in parameter)
              objects = [parameter.object];
            else if ("objects" in parameter)
              objects = parameter.objects;
            else if ("id" in parameter)
              objects = await getByGuids([parameter.id]);
            else {
              if (!("ids" in parameter))
                throw new AssertionError();
              objects = await getByGuids(parameter.ids);
            }
          else
            objects = [];
          const confirmation = translate(objects.length > 1 ? "mxui.widget.DataGrid" : "mxui.sys.UI", "confirm_delete", objects.length.toString()), ui = getUI();
          if (await new Promise((resolve) => ui.confirmation({ content: confirmation, handler: () => {
            resolve(true);
          }, onCancel: () => {
            resolve(false);
          } }))) {
            currentForm.setSuspend(true);
            try {
              mx.isOffline() ? await offlineData().delete(objects) : config.operationId && await onlineData().executeObjectAction(config.operationId, "delete", objects), config.closePage && await methodToPromise(currentForm, "close");
            } finally {
              currentForm.setSuspend(false);
            }
          }
        }(action.config, clientConfig, actionArguments.$object);
      case "createObject":
        return async function(modelerConfig, clientConfig2, { $object, ...parameters }) {
          const parameter = $object ? "object" in $object ? $object.object : crash() : void 0;
          if ("association" in modelerConfig && void 0 === parameter)
            throw new AssertionError();
          const ui = getUI(), pid = ui.showProgress("", false);
          try {
            let mxObject;
            mxObject = mx.isOffline(modelerConfig.entity) ? await offlineData().create(modelerConfig.entity) : await onlineData().createObject(modelerConfig.entity, modelerConfig.operationId), modelerConfig.association && mxObject.addReference(modelerConfig.association, parameter.getGuid()), await openPage({ ...modelerConfig.pageSettings, numberOfPagesToClose: modelerConfig.numberOfPagesToClose }, clientConfig2, { [modelerConfig.objectParameter]: { object: mxObject }, ...parameters });
          } finally {
            ui.hideProgress(pid);
          }
        }(action.config, clientConfig, actionArguments);
      case "callExternalAction":
        return async function(config, { currentForm }, actionObject) {
          config.commit && await currentForm.triggerValidation(), config.closePage && currentForm.setSuspend(true);
          try {
            const confirmation = config.confirmation;
            if (confirmation && !await new Promise((resolve) => getUI().confirmation({ cancel: confirmation.cancel, proceed: confirmation.proceed, content: confirmation.question, handler: () => resolve(true), onCancel: () => resolve(false) })))
              return;
            const objectsToCommit = config.commit ? await getUnsavedObjects(currentForm) : [];
            await onlineData().executeExternalAction(config.operationId, actionObject, objectsToCommit), config.closePage && await methodToPromise(currentForm, "close");
          } finally {
            currentForm.setSuspend(false);
          }
        }(action.config, clientConfig, ensure(getObject(actionArguments)));
      default:
        throw new AssertionError();
    }
  }().then(callback, handleError$1) : session.isGuest() ? getUI().showLogin() : handleError$1(new DescribedError("Unable to execute action because you do not have sufficient permissions."));
}

const TextProperty = (config) => asResult(dynAvailable(config.value));

function Icon({ icon, altText }) {
  if (!icon)
    return null;
  switch (icon.type) {
    case "image":
      return jsxRuntimeExports.jsx("img", { src: icon.iconUrl, alt: altText ?? "" });
    case "glyph":
      return jsxRuntimeExports.jsx("span", { className: `glyphicon ${icon.iconClass}`, ...altText ? { "aria-label": altText } : { "aria-hidden": true } });
    case "icon":
      return jsxRuntimeExports.jsx("span", { className: icon.iconClass, ...altText ? { "aria-label": altText } : { "aria-hidden": true } });
  }
}

export { Icon, TextProperty, executeAction };
