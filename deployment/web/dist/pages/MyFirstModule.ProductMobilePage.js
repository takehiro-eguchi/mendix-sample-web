import { reactExports, asPluginWidgets, selectTranslation } from '../index-DJGwzDdd.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BpA9Sx2X.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-DF_eSa8O.js';
import { ListAttributeProperty } from '../ListAttributeProperty-BV5OVGGR.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-Bg2pyCI-.js';
import { ListView } from '../ListView-BNI4C0Uh.js';
import { Text } from '../Text-CXGRaJYu.js';
import { content as content$1 } from '../Atlas_Core.Phone_BottomBar-CbgRSnYS.js';
import '../BrzhM9fk-D6dvPqAy.js';
import '../BQa9VDC5-bIsskIdw.js';
import '../Bgp-XL0v-ChI9Snow.js';
import '../Icon-Dv5nfF6s.js';
import '../InlineText-CYLpzmqS.js';
import '../WebIconProperty-BFDeGq-3.js';
import '../DMc54HEs-CJQCGXv1.js';

const React = { createElement: reactExports.createElement };
const { $ListView, $Text } = asPluginWidgets({ ListView, Text });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $ListView,
    {
      key: "p0.MyFirstModule.ProductMobilePage.listView3",
      $widgetId: "p0.MyFirstModule.ProductMobilePage.listView3",
      class: "mx-name-listView3 listview-lined listview-hover",
      style: void 0,
      listValue: DatabaseObjectListProperty({
        "dataSourceId": "p0.0",
        "entity": "MyFirstModule.Products",
        "operationId": "7SKoJnGUjVqVjTYJ6nbfCw",
        "sort": []
      }),
      searchAttributes: [
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Products",
          "attribute": "ProductName",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p0.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Products",
          "attribute": "ListPrice",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p0.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Products",
          "attribute": "SafetyStockLevel",
          "attributeType": "Integer",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p0.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Products",
          "attribute": "Weight",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p0.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Products",
          "attribute": "Style",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p0.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Products",
          "attribute": "ModelName",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p0.0",
          "isList": false
        })
      ],
      itemTemplate: TemplatedWidgetProperty({
        "dataSourceId": "p0.0",
        "editable": false,
        "children": () => [
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p0.MyFirstModule.ProductMobilePage.text1",
              $widgetId: "p0.MyFirstModule.ProductMobilePage.text1",
              class: "mx-name-text1",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ProductName" }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p0.MyFirstModule.ProductMobilePage.text2",
              $widgetId: "p0.MyFirstModule.ProductMobilePage.text2",
              class: "mx-name-text2",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Color" }, { "type": "literal", "value": "MyFirstModule.Color" }] }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p0.MyFirstModule.ProductMobilePage.text3",
              $widgetId: "p0.MyFirstModule.ProductMobilePage.text3",
              class: "mx-name-text3",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ListPrice" }, { "type": "literal", "value": '{"decimalPrecision":2}' }] }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p0.MyFirstModule.ProductMobilePage.text4",
              $widgetId: "p0.MyFirstModule.ProductMobilePage.text4",
              class: "mx-name-text4",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SafetyStockLevel" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p0.MyFirstModule.ProductMobilePage.text5",
              $widgetId: "p0.MyFirstModule.ProductMobilePage.text5",
              class: "mx-name-text5",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Size" }, { "type": "literal", "value": "MyFirstModule.Size" }] }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p0.MyFirstModule.ProductMobilePage.text6",
              $widgetId: "p0.MyFirstModule.ProductMobilePage.text6",
              class: "mx-name-text6",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Weight" }, { "type": "literal", "value": '{"decimalPrecision":2}' }] }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p0.MyFirstModule.ProductMobilePage.text7",
              $widgetId: "p0.MyFirstModule.ProductMobilePage.text7",
              class: "mx-name-text7",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Style" }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p0.MyFirstModule.ProductMobilePage.text8",
              $widgetId: "p0.MyFirstModule.ProductMobilePage.text8",
              class: "mx-name-text8",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ModelName" }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p0.MyFirstModule.ProductMobilePage.text9",
              $widgetId: "p0.MyFirstModule.ProductMobilePage.text9",
              class: "mx-name-text9",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "MyFirstModule.Status" }] }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
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
