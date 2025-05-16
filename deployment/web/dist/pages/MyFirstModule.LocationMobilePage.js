import { reactExports, asPluginWidgets, selectTranslation } from '../index-byXJmgeF.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BNFOh2As.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-Uep1-5zc.js';
import { ListAttributeProperty } from '../ListAttributeProperty-CWpfMZr8.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-Dnn_ONys.js';
import { ListView } from '../ListView-2iOLO5xL.js';
import { Text } from '../Text-DZ-U1Q-n.js';
import { content as content$1 } from '../Atlas_Core.Phone_BottomBar-D6ZG6JFy.js';
import '../BrzhM9fk-N7FbJJus.js';
import '../BQa9VDC5-BWEBlAni.js';
import '../Bgp-XL0v-NBFeyE8N.js';
import '../Icon-BZqjj_0y.js';
import '../InlineText-D7jZL5NZ.js';
import '../WebIconProperty-Dlq3RviU.js';
import '../SimpleMenuBar-cbI6aqB4.js';
import '../DMc54HEs-BlvWf0_R.js';

const React = { createElement: reactExports.createElement };
const { $ListView, $Text } = asPluginWidgets({ ListView, Text });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $ListView,
    {
      key: "p2.MyFirstModule.LocationMobilePage.listView3",
      $widgetId: "p2.MyFirstModule.LocationMobilePage.listView3",
      class: "mx-name-listView3 listview-lined listview-hover",
      style: void 0,
      listValue: DatabaseObjectListProperty({
        "dataSourceId": "p2.0",
        "entity": "MyFirstModule.Locations",
        "operationId": "aDW/LFBYxFeDDNIql8ODjA",
        "sort": []
      }),
      searchAttributes: [
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Locations",
          "attribute": "State",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p2.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Locations",
          "attribute": "City",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p2.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Locations",
          "attribute": "Country",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p2.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Locations",
          "attribute": "Longitude",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p2.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Locations",
          "attribute": "Latitude",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p2.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Locations",
          "attribute": "PostalCode",
          "attributeType": "Integer",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p2.0",
          "isList": false
        })
      ],
      itemTemplate: TemplatedWidgetProperty({
        "dataSourceId": "p2.0",
        "editable": false,
        "children": () => [
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p2.MyFirstModule.LocationMobilePage.text1",
              $widgetId: "p2.MyFirstModule.LocationMobilePage.text1",
              class: "mx-name-text1",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "State" }, "args": { "currentObject": { "widget": "p2.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "p"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p2.MyFirstModule.LocationMobilePage.text2",
              $widgetId: "p2.MyFirstModule.LocationMobilePage.text2",
              class: "mx-name-text2",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "City" }, "args": { "currentObject": { "widget": "p2.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "p"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p2.MyFirstModule.LocationMobilePage.text3",
              $widgetId: "p2.MyFirstModule.LocationMobilePage.text3",
              class: "mx-name-text3",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Country" }, "args": { "currentObject": { "widget": "p2.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "p"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p2.MyFirstModule.LocationMobilePage.text4",
              $widgetId: "p2.MyFirstModule.LocationMobilePage.text4",
              class: "mx-name-text4",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Longitude" }, { "type": "literal", "value": '{"decimalPrecision":2}' }] }, "args": { "currentObject": { "widget": "p2.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "p"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p2.MyFirstModule.LocationMobilePage.text5",
              $widgetId: "p2.MyFirstModule.LocationMobilePage.text5",
              class: "mx-name-text5",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Latitude" }, { "type": "literal", "value": '{"decimalPrecision":2}' }] }, "args": { "currentObject": { "widget": "p2.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "p"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p2.MyFirstModule.LocationMobilePage.text6",
              $widgetId: "p2.MyFirstModule.LocationMobilePage.text6",
              class: "mx-name-text6",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "PostalCode" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p2.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "p"
            }
          )
        ]
      }),
      onClick: void 0,
      pageSize: 5
    }
  )
]);
const title = selectTranslation([
  "Page"
]);
const classes = "layout-atlas layout-atlas-phone";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Phone_BottomBar.Main": region$Main
};

export { classes, content, style, title };
