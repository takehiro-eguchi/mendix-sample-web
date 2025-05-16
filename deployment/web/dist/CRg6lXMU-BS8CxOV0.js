import { reactExports, newId, reactDomExports, getHTMLElement, jsxRuntimeExports } from './index-lDZbtAHK.js';

const FocusContainerContext = reactExports.createContext("");
class FocusContainer extends reactExports.Component {
  constructor() {
    super(...arguments), this.id = newId(), this.onFocusHandler = this.onFocus.bind(this), this.onBlurHandler = this.onBlur.bind(this);
  }
  onFocus() {
    this.focused || (this.focused = true, this.props.onEnter && this.props.onEnter());
  }
  onBlur(e) {
    this.isDescendant(e.relatedTarget ?? document.activeElement) ? e.stopPropagation() : (this.focused = false, this.onLeave());
  }
  isDescendant(e) {
    const containerNode = reactDomExports.findDOMNode(this);
    let current = e && getHTMLElement(e);
    for (; current; ) {
      if (current === containerNode || current.getAttribute("data-focuscontainer") === this.id)
        return true;
      current = current.parentElement;
    }
    return false;
  }
  onLeave() {
    this.props.onLeave && this.props.onLeave();
  }
  componentWillUnmount() {
    this.focused && this.onLeave();
  }
  render() {
    return jsxRuntimeExports.jsx(FocusContainerContext.Provider, { value: this.id, children: reactExports.cloneElement(reactExports.Children.only(this.props.children), { onFocus: this.onFocusHandler, onBlur: this.onBlurHandler }) });
  }
}
const createFocusAwarePortal = (children, container, key) => reactDomExports.createPortal(jsxRuntimeExports.jsx(FocusContainerContext.Consumer, { children: (containerId) => reactExports.cloneElement(reactExports.Children.only(children), { ref: (e) => {
  const node = reactDomExports.findDOMNode(e);
  null !== node && containerId && node.setAttribute("data-focuscontainer", containerId);
} }) }), container, key);

export { FocusContainer, createFocusAwarePortal };
