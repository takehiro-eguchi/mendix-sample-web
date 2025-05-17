import { jsxRuntimeExports, classNames, reactExports, asPluginWidgets, PlaceholderProperty, selectTranslation } from './index-DsLjkJno.js';
import { ScrollContainer, Placeholder, ExpressionProperty } from './ScrollContainer-CE-u0OT2.js';
import { TextProperty } from './Icon-CD3-QqtZ.js';
import { WebIconProperty } from './WebIconProperty-B88sVxeT.js';
import { SimpleMenuBar } from './SimpleMenuBar-CrwLfguo.js';
import { InlineText } from './InlineText-D7gieNIv.js';

const Header = (props) => jsxRuntimeExports.jsxs("div", { className: classNames("mx-header", props.class), style: props.style, children: [jsxRuntimeExports.jsx("div", { className: "mx-header-center", children: props.content }), props.leftWidgets && jsxRuntimeExports.jsx("div", { className: "mx-header-left", children: props.leftWidgets }), props.rightWidgets && jsxRuntimeExports.jsx("div", { className: "mx-header-right", children: props.rightWidgets })] });

const Title = (props) => jsxRuntimeExports.jsx("h1", { className: classNames("mx-title", props.class), style: props.style, children: jsxRuntimeExports.jsx(InlineText, { caption: props.caption }) });

const React = { createElement: reactExports.createElement };
const { $ScrollContainer, $Header, $Title, $Placeholder, $SimpleMenuBar } = asPluginWidgets({ ScrollContainer, Header, Title, Placeholder, SimpleMenuBar });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $ScrollContainer,
    {
      key: "l31.Atlas_Core.Phone_Default.scrollContainer1",
      $widgetId: "l31.Atlas_Core.Phone_Default.scrollContainer1",
      class: "mx-name-scrollContainer1",
      style: void 0,
      scrollPerRegion: true,
      layoutMode: "headline",
      top: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React.createElement(
            $Header,
            {
              key: "l31.Atlas_Core.Phone_Default.header1",
              $widgetId: "l31.Atlas_Core.Phone_Default.header1",
              class: "mx-name-header1",
              style: void 0,
              content: [
                /* @__PURE__ */ React.createElement(
                  $Title,
                  {
                    key: "l31.4",
                    $widgetId: "l31.4",
                    class: "",
                    style: void 0,
                    caption: ExpressionProperty({
                      "expression": { "expr": { "type": "variable", "variable": "pageTitle" }, "args": {} }
                    })
                  }
                )
              ],
              leftWidgets: [
                /* @__PURE__ */ React.createElement(
                  $Placeholder,
                  {
                    key: "l31.Atlas_Core.Phone_Default.HeaderLeft",
                    $widgetId: "l31.Atlas_Core.Phone_Default.HeaderLeft",
                    content: PlaceholderProperty({
                      "id": "Atlas_Core.Phone_Default.HeaderLeft"
                    })
                  }
                )
              ],
              rightWidgets: [
                /* @__PURE__ */ React.createElement(
                  $Placeholder,
                  {
                    key: "l31.Atlas_Core.Phone_Default.HeaderRight",
                    $widgetId: "l31.Atlas_Core.Phone_Default.HeaderRight",
                    content: PlaceholderProperty({
                      "id": "Atlas_Core.Phone_Default.HeaderRight"
                    })
                  }
                )
              ]
            }
          )
        ],
        "sizeMode": "auto",
        "class": ""
      },
      bottom: {
        "enabled": true,
        "content": [
          /* @__PURE__ */ React.createElement(
            $SimpleMenuBar,
            {
              key: "l31.Atlas_Core.Phone_Default.simpleMenuBar1",
              $widgetId: "l31.Atlas_Core.Phone_Default.simpleMenuBar1",
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
              key: "l31.Atlas_Core.Phone_Default.Main",
              $widgetId: "l31.Atlas_Core.Phone_Default.Main",
              content: PlaceholderProperty({
                "id": "Atlas_Core.Phone_Default.Main"
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
