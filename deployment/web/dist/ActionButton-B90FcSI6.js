import { LogManager, asProperty, useValue, fromComputation$, pageScope, getSession, partitionValues, getActionArguments$, mapValues, attributeValueToActionArgument, action, readUntracked, runSideEffect, runInAction, subtract, assertIsNonEnumValue, AssertionError, getOrCrashL, filterValues, ensure, HandledError, handleError, ValidationError, toFriendlyId, reactExports, jsxRuntimeExports, classNames, ActionContext } from './index-DJGwzDdd.js';
import { executeAction, Icon } from './Icon-Dv5nfF6s.js';

const logger = LogManager.get().getLogger(), ActionProperty = asProperty((config, store, widgetId) => computeAction(config, store, widgetId));
function computeAction(config, store, widgetId, predefinedArguments, allowExecuteOnLoadingParameters) {
  const [actionsInProgress$, setActionsInProgress] = useValue(`Actions in progress for ${widgetId}`, 0), isExecuting$ = fromComputation$(`Action is executing for ${widgetId}`, () => actionsInProgress$.dependOn() > 0), [isInvalid$] = store.useSlot(widgetId, "isInvalid"), [currentForm$] = store.useSlot(pageScope, "form"), [externalArgs, setExternalArgs] = useValue(`External action parameters for ${widgetId}`, void 0), session = getSession(), hasAnyAllowedRole = session.hasSomeRole(config.action.config.allowedRoles), requiresNamedUser = config.action.config.namedUser ?? false, isAuthorized = hasAnyAllowedRole && !(requiresNamedUser && session.isGuest()), showsLoginDialog = session.isGuest() && !hasAnyAllowedRole, [pageContextArguments, deferredArguments] = partitionValues(config.action.argMap, (value) => !("expression" in value) || !Object.values(value.expression.args).some((v) => "actionvariable" === v.source)), [waitingForParameters$, setWaitingForParameters] = useValue("Waiting for action arguments", false), actionParameters$ = getActionArguments$(pageContextArguments, store, widgetId, predefinedArguments, "deleteObject" !== config.action.type), parametersStatus$ = fromComputation$(`Loadable status for parameters of action for ${widgetId}`, () => {
    const params = Object.values(actionParameters$.dependOn());
    let result = "available";
    for (const param of params) {
      if ("unavailable" === param.status)
        return "unavailable";
      "loading" === param.status && (result = "loading");
    }
    return result;
  }), canExecuteLater$ = fromComputation$(`Action for ${widgetId} can execute`, () => (isAuthorized || showsLoginDialog) && "unavailable" !== parametersStatus$.dependOn()), canExecuteNow$ = fromComputation$(`Action for ${widgetId} can execute`, () => (isAuthorized || showsLoginDialog) && "available" === parametersStatus$.dependOn()), allExternalArgs = fromComputation$("Arguments which are predefined or supplied by widget ", () => ({ ...predefinedArguments?.dependOn(), ...mapValues(externalArgs.dependOn() ?? {}, (value) => ({ actionvariable: attributeValueToActionArgument(value, "primitive") })) })), deferredActionParameters = getActionArguments$(deferredArguments, store, widgetId, allExternalArgs, "deleteObject" !== config.action.type, true), disabledDuringExecution = config.action.disabledDuringExecution;
  return fromComputation$(`Action value for ${widgetId}`, () => {
    const canExecute = allowExecuteOnLoadingParameters ? canExecuteLater$.dependOn() : canExecuteNow$.dependOn(), isExecuting = isExecuting$.dependOn() || waitingForParameters$.dependOn();
    return { isAuthorized, canExecute, isExecuting, disabledDuringExecution, execute: action((actionVariableArgs) => (allowExecuteOnLoadingParameters ? executeList : execute)(actionVariableArgs)) };
  });
  function executeList(actionVariableArgs) {
    readUntracked(waitingForParameters$) ? logger.debug(`Widget is attempting to execute a ${config.action.type} action which is already waiting for parameters.`) : (setWaitingForParameters(true), runSideEffect(parametersStatus$, (status, dispose) => {
      "available" === status ? (setWaitingForParameters(false), runInAction(() => execute(actionVariableArgs)), dispose()) : "unavailable" === status && (setWaitingForParameters(false), logger.debug(`Widget is attempting to execute a ${config.action.type} action with parameters that became unavailable`), dispose());
    }, true));
  }
  function execute(actionVariableArgs) {
    if (!readUntracked(canExecuteNow$) || disabledDuringExecution && readUntracked(isExecuting$))
      return void logger.debug(`Widget is attempting to execute a ${config.action.type} action which is not executable.`);
    !function(actionVariableArgs2, argumentTypes) {
      if (!argumentTypes || 0 === Object.keys(argumentTypes).length)
        return;
      const errorMessages = [], missingArguments = subtract(Object.keys(argumentTypes), Object.keys(actionVariableArgs2 ?? {}));
      missingArguments.length > 0 && errorMessages.push(`The action arguments are missing keys: ${missingArguments.join(", ")}.`);
      if (Object.entries(actionVariableArgs2 ?? {}).forEach(([key, value]) => {
        const type = argumentTypes[key];
        if (type)
          try {
            assertIsNonEnumValue(value, type, true, "Variable");
          } catch (error) {
            if (!(error instanceof AssertionError))
              throw error;
            errorMessages.push(error.message);
          }
        else
          errorMessages.push(`'${key}' is not a valid key for an argument.`);
      }), errorMessages.length > 0)
        throw new AssertionError(`${errorMessages.join("\n")}`);
    }(actionVariableArgs, config.argumentTypes), setExternalArgs(actionVariableArgs);
    const parameters = { ...mapValues({ ...readUntracked(actionParameters$) }, getOrCrashL), ...filterValues(mapValues({ ...readUntracked(deferredActionParameters) }, getOrCrashL), (value) => (value && "primitive" in value && void 0 !== value.primitive) ?? false) }, isInvalid = readUntracked(isInvalid$), currentForm = ensure(readUntracked(currentForm$))[0];
    setActionsInProgress(readUntracked(actionsInProgress$) + 1), executeAction(config.action, { abortOnClientValidations: !config.skipClientValidation, abortOnServerValidations: config.abortOnServerValidation ?? false, widgetIsValid: !isInvalid, currentForm }, parameters, action(() => {
      setActionsInProgress(readUntracked(actionsInProgress$) - 1);
    }), action((e) => {
      setActionsInProgress(readUntracked(actionsInProgress$) - 1), e instanceof HandledError ? handleError(e) : e instanceof ValidationError || handleError(new Error(`An error occurred while executing an action of ${toFriendlyId(widgetId)}: ${e.message}`));
    }));
  }
}

class ActionButton extends reactExports.Component {
  constructor() {
    super(...arguments), this.state = this.deriveState(this.props, { disabled: true, showDisabled: false }), this.onClickHandler = this.onClick.bind(this), this.onKeyDownHandler = this.onKeyDown.bind(this);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState((curState) => this.deriveState(nextProps, curState));
  }
  componentDidMount() {
    this.actionButtonRef?.addEventListener("click", this.onClickHandler), this.context?.registerHandler(this.props.buttonId, () => {
      this.props.action && !this.state.disabled && this.props.action.execute();
    });
  }
  componentWillUnmount() {
    this.actionButtonRef?.removeEventListener("click", this.onClickHandler), window.clearTimeout(this.disableTimeout), this.context?.unregisterHandler(this.props.buttonId);
  }
  onClick(e) {
    this.suppressEvent(e), "button" === this.props.renderType && this.actionButtonRef.focus(), this.executeAction();
  }
  executeAction() {
    this.props.action && !this.state.disabled && this.props.action.execute();
  }
  onKeyDown(e) {
    "Enter" !== e.key && " " !== e.key || (this.suppressEvent(e), this.executeAction());
  }
  suppressEvent(e) {
    e.preventDefault(), this.props.action && e.stopPropagation();
  }
  render() {
    return "button" === this.props.renderType ? this.renderButton() : this.renderLink();
  }
  renderButton() {
    const ariaDisabled = this.state.showDisabled ? { "aria-disabled": true } : {};
    return jsxRuntimeExports.jsxs("button", { type: "button", className: classNames("btn", "mx-button", this.props.class, this.props.buttonClass), style: this.props.style, title: this.props.tooltip.value, "aria-label": this.getAriaLabel(), tabIndex: this.props.tabIndex, disabled: !!this.props.action && !this.props.action.canExecute, "data-button-id": this.props.buttonId, "data-disabled": this.state.disabled, ref: (e) => this.actionButtonRef = e ?? void 0, ...ariaDisabled, children: [this.renderIcon(), " ", this.props.caption.value] });
  }
  renderLink() {
    const ariaDisabled = this.state.showDisabled ? { "aria-disabled": true } : {};
    return jsxRuntimeExports.jsxs("a", { className: classNames("mx-link", this.props.class), style: this.props.style, href: "#", role: this.props.role, title: this.props.tooltip.value, "aria-label": this.getAriaLabel(), tabIndex: !this.props.action || this.props.action.canExecute ? this.props.tabIndex : -1, onKeyDown: this.onKeyDownHandler, "data-button-id": this.props.buttonId, "data-disabled": this.state.disabled, ref: (e) => this.actionButtonRef = e ?? void 0, ...ariaDisabled, children: [this.renderIcon(), " ", this.props.caption.value] });
  }
  getAriaLabel() {
    if (!this.props.caption.value && this.props.tooltip.value)
      return this.props.tooltip.value;
  }
  renderIcon() {
    return this.props.icon && jsxRuntimeExports.jsx(Icon, { icon: this.props.icon.value });
  }
  deriveState(props, state) {
    const actionValue = props.action;
    return actionValue && !actionValue.canExecute ? { disabled: true, showDisabled: true } : actionValue?.isExecuting && actionValue.disabledDuringExecution ? (void 0 === this.disableTimeout && (this.disableTimeout = window.setTimeout(() => {
      this.setState({ showDisabled: true }), this.disableTimeout = void 0;
    }, 1e3)), { disabled: true, showDisabled: state.showDisabled }) : (window.clearTimeout(this.disableTimeout), this.disableTimeout = void 0, { disabled: false, showDisabled: false });
  }
}
ActionButton.contextType = ActionContext;

export { ActionButton, ActionProperty };
