import { asResult, dynAvailable, jsxRuntimeExports, reactExports, classNames, ActionContext } from './index-DJGwzDdd.js';

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

export { ActionButton, Icon, TextProperty };
