import { reactExports, asPluginWidgets, selectTranslation, PlaceholderProperty } from './index-sUfOvV_8.js';
import { TextProperty } from './Icon-CLMmynlf.js';
import { WebIconProperty } from './WebIconProperty-BB_92iSr.js';
import { ScrollContainer, Placeholder } from './ScrollContainer-kt62KmQf.js';
import { SimpleMenuBar } from './SimpleMenuBar-Ch_dFgZ3.js';

const React = { createElement: reactExports.createElement };
const { $ScrollContainer, $SimpleMenuBar, $Placeholder } = asPluginWidgets({ ScrollContainer, SimpleMenuBar, Placeholder });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $ScrollContainer,
    {
      key: "l11.Atlas_Core.Phone_BottomBar.scrollContainer1",
      $widgetId: "l11.Atlas_Core.Phone_BottomBar.scrollContainer1",
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
              key: "l11.Atlas_Core.Phone_BottomBar.simpleMenuBar1",
              $widgetId: "l11.Atlas_Core.Phone_BottomBar.simpleMenuBar1",
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
              key: "l11.Atlas_Core.Phone_BottomBar.Main",
              $widgetId: "l11.Atlas_Core.Phone_BottomBar.Main",
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
