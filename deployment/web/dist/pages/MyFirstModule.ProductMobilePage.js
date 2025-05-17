import { reactExports, asPluginWidgets, selectTranslation } from '../index-DsLjkJno.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-CE-u0OT2.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-YUXxnGjk.js';
import { ListActionProperty } from '../ListActionProperty-APpVMhcY.js';
import { ListAttributeProperty } from '../ListAttributeProperty-CdJB2qIy.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-BfE9ukAc.js';
import { ListView } from '../ListView-Cs3yqIel.js';
import { Text } from '../Text-DR32TaDK.js';
import { content as content$1 } from '../Atlas_Core.Phone_BottomBar-DUPdzp5F.js';
import '../BrzhM9fk-DIx2MmKD.js';
import '../BQa9VDC5-B8H0Gl41.js';
import '../ActionProperty-BTILmUmE.js';
import '../Icon-CD3-QqtZ.js';
import '../Bgp-XL0v-CydxPoxA.js';
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
      key: "p32.MyFirstModule.ProductMobilePage.listView3",
      $widgetId: "p32.MyFirstModule.ProductMobilePage.listView3",
      class: "mx-name-listView3 listview-lined listview-hover",
      style: void 0,
      listValue: DatabaseObjectListProperty({
        "dataSourceId": "p32.0",
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
          "dataSourceId": "p32.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Products",
          "attribute": "ListPrice",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p32.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Products",
          "attribute": "SafetyStockLevel",
          "attributeType": "Integer",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p32.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Products",
          "attribute": "Weight",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p32.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Products",
          "attribute": "Style",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p32.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Products",
          "attribute": "ModelName",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p32.0",
          "isList": false
        })
      ],
      itemTemplate: TemplatedWidgetProperty({
        "dataSourceId": "p32.0",
        "editable": false,
        "children": () => [
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p32.MyFirstModule.ProductMobilePage.text1",
              $widgetId: "p32.MyFirstModule.ProductMobilePage.text1",
              class: "mx-name-text1",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ProductName" }, "args": { "currentObject": { "widget": "p32.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p32.MyFirstModule.ProductMobilePage.text2",
              $widgetId: "p32.MyFirstModule.ProductMobilePage.text2",
              class: "mx-name-text2",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Color" }, { "type": "literal", "value": "MyFirstModule.Color" }] }, "args": { "currentObject": { "widget": "p32.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p32.MyFirstModule.ProductMobilePage.text3",
              $widgetId: "p32.MyFirstModule.ProductMobilePage.text3",
              class: "mx-name-text3",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ListPrice" }, { "type": "literal", "value": '{"decimalPrecision":2}' }] }, "args": { "currentObject": { "widget": "p32.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p32.MyFirstModule.ProductMobilePage.text4",
              $widgetId: "p32.MyFirstModule.ProductMobilePage.text4",
              class: "mx-name-text4",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SafetyStockLevel" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p32.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p32.MyFirstModule.ProductMobilePage.text5",
              $widgetId: "p32.MyFirstModule.ProductMobilePage.text5",
              class: "mx-name-text5",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Size" }, { "type": "literal", "value": "MyFirstModule.Size" }] }, "args": { "currentObject": { "widget": "p32.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p32.MyFirstModule.ProductMobilePage.text6",
              $widgetId: "p32.MyFirstModule.ProductMobilePage.text6",
              class: "mx-name-text6",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Weight" }, { "type": "literal", "value": '{"decimalPrecision":2}' }] }, "args": { "currentObject": { "widget": "p32.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p32.MyFirstModule.ProductMobilePage.text7",
              $widgetId: "p32.MyFirstModule.ProductMobilePage.text7",
              class: "mx-name-text7",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Style" }, "args": { "currentObject": { "widget": "p32.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p32.MyFirstModule.ProductMobilePage.text8",
              $widgetId: "p32.MyFirstModule.ProductMobilePage.text8",
              class: "mx-name-text8",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ModelName" }, "args": { "currentObject": { "widget": "p32.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p32.MyFirstModule.ProductMobilePage.text9",
              $widgetId: "p32.MyFirstModule.ProductMobilePage.text9",
              class: "mx-name-text9",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "MyFirstModule.Status" }] }, "args": { "currentObject": { "widget": "p32.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          )
        ]
      }),
      onClick: ListActionProperty({
        "action": { "type": "openPage", "argMap": { "param$Products": { "widget": "p32.MyFirstModule.ProductMobilePage.listView3", "source": "object" } }, "config": { "name": "MyFirstModule/Products_EditView.page.xml", "location": "content" }, "disabledDuringExecution": true },
        "abortOnServerValidation": false,
        "dataSourceId": "p32.0"
      }),
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
