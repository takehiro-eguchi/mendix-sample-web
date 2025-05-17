import { jsxRuntimeExports, classNames } from './index-DsLjkJno.js';
import { useMenuActiveItem, preProcessMenus, createAnchor } from './DMc54HEs-DHjqPhQF.js';
import './Icon-CD3-QqtZ.js';

function SimpleMenuBar(props) {
  const [activeItemId, setActiveItem] = useMenuActiveItem();
  return jsxRuntimeExports.jsx("div", { className: classNames("mx-menubar", `mx-menubar-${props.orientation}`, props.class), style: props.style, children: jsxRuntimeExports.jsx("ul", { className: classNames("nav nav-pills mx-menubar-list", { "nav-stacked": "vertical" === props.orientation }), role: "menu", children: preProcessMenus(props.menu).map((menu, index) => jsxRuntimeExports.jsx("li", { className: classNames(`mx-menubar-item mx-name-index-${index}`, { active: activeItemId === menu.stableId }), role: "none", children: createAnchor(props.name, menu, false, setActiveItem) }, index)) }) });
}

export { SimpleMenuBar };
