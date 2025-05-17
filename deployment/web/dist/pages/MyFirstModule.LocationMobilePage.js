import { reactExports, asPluginWidgets, selectTranslation } from '../index-DsLjkJno.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-CE-u0OT2.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-YUXxnGjk.js';
import { ListAttributeProperty } from '../ListAttributeProperty-CdJB2qIy.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-BfE9ukAc.js';
import { ListView } from '../ListView-Cs3yqIel.js';
import { Text } from '../Text-DR32TaDK.js';
import { content as content$1 } from '../Atlas_Core.Phone_BottomBar-DUPdzp5F.js';
import '../BrzhM9fk-DIx2MmKD.js';
import '../BQa9VDC5-B8H0Gl41.js';
import '../Bgp-XL0v-CydxPoxA.js';
import '../Icon-CD3-QqtZ.js';
import '../InlineText-D7gieNIv.js';
import '../WebIconProperty-B88sVxeT.js';
import '../SimpleMenuBar-CrwLfguo.js';
import '../DMc54HEs-DHjqPhQF.js';

const React = { createElement: reactExports.createElement };
const { $ListView, $Text } = asPluginWidgets({ ListView, Text });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $ListView,
    {
      key: "p36.MyFirstModule.LocationMobilePage.listView3",
      $widgetId: "p36.MyFirstModule.LocationMobilePage.listView3",
      class: "mx-name-listView3 listview-lined listview-hover",
      style: void 0,
      listValue: DatabaseObjectListProperty({
        "dataSourceId": "p36.0",
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
          "dataSourceId": "p36.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Locations",
          "attribute": "City",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p36.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Locations",
          "attribute": "Country",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p36.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Locations",
          "attribute": "Longitude",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p36.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Locations",
          "attribute": "Latitude",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p36.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Locations",
          "attribute": "PostalCode",
          "attributeType": "Integer",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p36.0",
          "isList": false
        })
      ],
      itemTemplate: TemplatedWidgetProperty({
        "dataSourceId": "p36.0",
        "editable": false,
        "children": () => [
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p36.MyFirstModule.LocationMobilePage.text1",
              $widgetId: "p36.MyFirstModule.LocationMobilePage.text1",
              class: "mx-name-text1",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "State" }, "args": { "currentObject": { "widget": "p36.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "p"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p36.MyFirstModule.LocationMobilePage.text2",
              $widgetId: "p36.MyFirstModule.LocationMobilePage.text2",
              class: "mx-name-text2",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "City" }, "args": { "currentObject": { "widget": "p36.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "p"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p36.MyFirstModule.LocationMobilePage.text3",
              $widgetId: "p36.MyFirstModule.LocationMobilePage.text3",
              class: "mx-name-text3",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Country" }, "args": { "currentObject": { "widget": "p36.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "p"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p36.MyFirstModule.LocationMobilePage.text4",
              $widgetId: "p36.MyFirstModule.LocationMobilePage.text4",
              class: "mx-name-text4",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Longitude" }, { "type": "literal", "value": '{"decimalPrecision":2}' }] }, "args": { "currentObject": { "widget": "p36.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "p"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p36.MyFirstModule.LocationMobilePage.text5",
              $widgetId: "p36.MyFirstModule.LocationMobilePage.text5",
              class: "mx-name-text5",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Latitude" }, { "type": "literal", "value": '{"decimalPrecision":2}' }] }, "args": { "currentObject": { "widget": "p36.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "p"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p36.MyFirstModule.LocationMobilePage.text6",
              $widgetId: "p36.MyFirstModule.LocationMobilePage.text6",
              class: "mx-name-text6",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "PostalCode" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p36.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
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
