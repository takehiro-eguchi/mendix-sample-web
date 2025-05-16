import { jsxRuntimeExports, classNames, reactExports, asPluginWidgets, selectTranslation, PlaceholderProperty } from './index-DJGwzDdd.js';
import { TextProperty } from './Icon-Dv5nfF6s.js';
import { WebIconProperty } from './WebIconProperty-BFDeGq-3.js';
import { ScrollContainer, Placeholder } from './ScrollContainer-BpA9Sx2X.js';
import { useMenuActiveItem, preProcessMenus, createAnchor } from './DMc54HEs-CJQCGXv1.js';

function SimpleMenuBar(props) {
  const [activeItemId, setActiveItem] = useMenuActiveItem();
  return jsxRuntimeExports.jsx("div", { className: classNames("mx-menubar", `mx-menubar-${props.orientation}`, props.class), style: props.style, children: jsxRuntimeExports.jsx("ul", { className: classNames("nav nav-pills mx-menubar-list", { "nav-stacked": "vertical" === props.orientation }), role: "menu", children: preProcessMenus(props.menu).map((menu, index) => jsxRuntimeExports.jsx("li", { className: classNames(`mx-menubar-item mx-name-index-${index}`, { active: activeItemId === menu.stableId }), role: "none", children: createAnchor(props.name, menu, false, setActiveItem) }, index)) }) });
}

const React = { createElement: reactExports.createElement };
const { $ScrollContainer, $SimpleMenuBar, $Placeholder } = asPluginWidgets({ ScrollContainer, SimpleMenuBar, Placeholder });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $ScrollContainer,
    {
      key: "l22.Atlas_Core.Phone_BottomBar.scrollContainer1",
      $widgetId: "l22.Atlas_Core.Phone_BottomBar.scrollContainer1",
      class: "mx-name-scrollContainer1",
      style: void 0,
      scrollPerRegion: true,
      layoutMode: "headline",
      top: {
        "enabled": false
      },
      bottom: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React.createElement(
            $SimpleMenuBar,
            {
              key: "l22.Atlas_Core.Phone_BottomBar.simpleMenuBar1",
              $widgetId: "l22.Atlas_Core.Phone_BottomBar.simpleMenuBar1",
              class: "mx-name-simpleMenuBar1 bottom-nav-text-icons",
              style: void 0,
              menu: [
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Home"
                    ])
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-home" }
                  }),
                  "action": void 0
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Layouts"
                    ])
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-layout-2" }
                  }),
                  "action": void 0
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Templates"
                    ])
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-notes-paper-text" }
                  }),
                  "action": void 0
                },
                {
                  "caption": TextProperty({
                    "value": selectTranslation([
                      "Widgets"
                    ])
                  }),
                  "icon": WebIconProperty({
                    "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-cog" }
                  }),
                  "action": void 0
                }
              ],
              orientation: "horizontal"
            }
          )
        ],
        "sizeMode": "auto",
        "class": "region-bottombar"
      },
      left: {
        "enabled": false
      },
      right: {
        "enabled": false
      },
      center: {
        "content": [
          /* @__PURE__ */ React.createElement(
            $Placeholder,
            {
              key: "l22.Atlas_Core.Phone_BottomBar.Main",
              $widgetId: "l22.Atlas_Core.Phone_BottomBar.Main",
              content: PlaceholderProperty({
                "id": "Atlas_Core.Phone_BottomBar.Main"
              })
            }
          )
        ],
        "class": "region-content"
      }
    }
  )
];
const content = {
  "Main": region$Main
};

export { content };
