import { reactExports, asPluginWidgets, selectTranslation } from '../index-BK9-l-60.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-CNkE77Y0.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-He16eDuK.js';
import { ListAttributeProperty } from '../ListAttributeProperty-DtR8jC4e.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-DV3fBopW.js';
import { ListView } from '../ListView-DlByzcJa.js';
import { Text } from '../Text-BcexcteZ.js';
import { content as content$1 } from '../Atlas_Core.Phone_BottomBar-DAcgfY9a.js';
import '../BrzhM9fk-CY1CP8BK.js';
import '../BQa9VDC5-P_lNGrzq.js';
import '../Bgp-XL0v-C7x6tFfM.js';
import '../Icon-bVASr8MS.js';
import '../InlineText-06k9DgcQ.js';
import '../WebIconProperty-vPsRN3Rv.js';
import '../SimpleMenuBar-CXu-E15R.js';
import '../DMc54HEs-BMpoF4j_.js';

const React = { createElement: reactExports.createElement };
const { $ListView, $Text } = asPluginWidgets({ ListView, Text });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $ListView,
    {
      key: "p31.MyFirstModule.LocationMobilePage.listView3",
      $widgetId: "p31.MyFirstModule.LocationMobilePage.listView3",
      class: "mx-name-listView3 listview-lined listview-hover",
      style: void 0,
      listValue: DatabaseObjectListProperty({
        "dataSourceId": "p31.0",
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
          "dataSourceId": "p31.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Locations",
          "attribute": "City",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p31.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Locations",
          "attribute": "Country",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p31.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Locations",
          "attribute": "Longitude",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p31.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Locations",
          "attribute": "Latitude",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p31.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Locations",
          "attribute": "PostalCode",
          "attributeType": "Integer",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p31.0",
          "isList": false
        })
      ],
      itemTemplate: TemplatedWidgetProperty({
        "dataSourceId": "p31.0",
        "editable": false,
        "children": () => [
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p31.MyFirstModule.LocationMobilePage.text1",
              $widgetId: "p31.MyFirstModule.LocationMobilePage.text1",
              class: "mx-name-text1",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "State" }, "args": { "currentObject": { "widget": "p31.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "p"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p31.MyFirstModule.LocationMobilePage.text2",
              $widgetId: "p31.MyFirstModule.LocationMobilePage.text2",
              class: "mx-name-text2",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "City" }, "args": { "currentObject": { "widget": "p31.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "p"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p31.MyFirstModule.LocationMobilePage.text3",
              $widgetId: "p31.MyFirstModule.LocationMobilePage.text3",
              class: "mx-name-text3",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Country" }, "args": { "currentObject": { "widget": "p31.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "p"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p31.MyFirstModule.LocationMobilePage.text4",
              $widgetId: "p31.MyFirstModule.LocationMobilePage.text4",
              class: "mx-name-text4",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Longitude" }, { "type": "literal", "value": '{"decimalPrecision":2}' }] }, "args": { "currentObject": { "widget": "p31.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "p"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p31.MyFirstModule.LocationMobilePage.text5",
              $widgetId: "p31.MyFirstModule.LocationMobilePage.text5",
              class: "mx-name-text5",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Latitude" }, { "type": "literal", "value": '{"decimalPrecision":2}' }] }, "args": { "currentObject": { "widget": "p31.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "p"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p31.MyFirstModule.LocationMobilePage.text6",
              $widgetId: "p31.MyFirstModule.LocationMobilePage.text6",
              class: "mx-name-text6",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "PostalCode" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p31.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
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
