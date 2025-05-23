import { reactExports, asPluginWidgets, selectTranslation } from '../index-BCA8X3MP.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BdzcW3SP.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-DKuecUbx.js';
import { ListActionProperty } from '../ListActionProperty-CoCCB2vR.js';
import { ListAttributeProperty } from '../ListAttributeProperty-ByudWBDe.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-BFmsrEg-.js';
import { ListView } from '../ListView-B1Yau7GF.js';
import { Text } from '../Text-BH0JoxPZ.js';
import { content as content$1 } from '../Atlas_Core.Phone_BottomBar-BdyV3958.js';
import '../BrzhM9fk-B35Z04N6.js';
import '../BQa9VDC5-BsmL2sNc.js';
import '../ActionProperty-BjRv15Ma.js';
import '../Icon-CwpoK74K.js';
import '../Bgp-XL0v-iR-R4xy_.js';
import '../InlineText-BU8NLTPl.js';
import '../WebIconProperty-DksUkMrc.js';
import '../SimpleMenuBar-CQ7UtPfo.js';
import '../DMc54HEs-BETi155K.js';

const React = { createElement: reactExports.createElement };
const { $ListView, $Text } = asPluginWidgets({ ListView, Text });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $ListView,
    {
      key: "p30.MyFirstModule.ProductMobilePage.listView3",
      $widgetId: "p30.MyFirstModule.ProductMobilePage.listView3",
      class: "mx-name-listView3 listview-lined listview-hover",
      style: void 0,
      listValue: DatabaseObjectListProperty({
        "dataSourceId": "p30.0",
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
          "dataSourceId": "p30.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Products",
          "attribute": "ListPrice",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p30.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Products",
          "attribute": "SafetyStockLevel",
          "attributeType": "Integer",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p30.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Products",
          "attribute": "Weight",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p30.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Products",
          "attribute": "Style",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p30.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Products",
          "attribute": "ModelName",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p30.0",
          "isList": false
        })
      ],
      itemTemplate: TemplatedWidgetProperty({
        "dataSourceId": "p30.0",
        "editable": false,
        "children": () => [
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p30.MyFirstModule.ProductMobilePage.text1",
              $widgetId: "p30.MyFirstModule.ProductMobilePage.text1",
              class: "mx-name-text1",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ProductName" }, "args": { "currentObject": { "widget": "p30.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p30.MyFirstModule.ProductMobilePage.text2",
              $widgetId: "p30.MyFirstModule.ProductMobilePage.text2",
              class: "mx-name-text2",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Color" }, { "type": "literal", "value": "MyFirstModule.Color" }] }, "args": { "currentObject": { "widget": "p30.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p30.MyFirstModule.ProductMobilePage.text3",
              $widgetId: "p30.MyFirstModule.ProductMobilePage.text3",
              class: "mx-name-text3",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ListPrice" }, { "type": "literal", "value": '{"decimalPrecision":2}' }] }, "args": { "currentObject": { "widget": "p30.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p30.MyFirstModule.ProductMobilePage.text4",
              $widgetId: "p30.MyFirstModule.ProductMobilePage.text4",
              class: "mx-name-text4",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SafetyStockLevel" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p30.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p30.MyFirstModule.ProductMobilePage.text5",
              $widgetId: "p30.MyFirstModule.ProductMobilePage.text5",
              class: "mx-name-text5",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Size" }, { "type": "literal", "value": "MyFirstModule.Size" }] }, "args": { "currentObject": { "widget": "p30.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p30.MyFirstModule.ProductMobilePage.text6",
              $widgetId: "p30.MyFirstModule.ProductMobilePage.text6",
              class: "mx-name-text6",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Weight" }, { "type": "literal", "value": '{"decimalPrecision":2}' }] }, "args": { "currentObject": { "widget": "p30.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p30.MyFirstModule.ProductMobilePage.text7",
              $widgetId: "p30.MyFirstModule.ProductMobilePage.text7",
              class: "mx-name-text7",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Style" }, "args": { "currentObject": { "widget": "p30.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p30.MyFirstModule.ProductMobilePage.text8",
              $widgetId: "p30.MyFirstModule.ProductMobilePage.text8",
              class: "mx-name-text8",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ModelName" }, "args": { "currentObject": { "widget": "p30.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Text,
            {
              key: "p30.MyFirstModule.ProductMobilePage.text9",
              $widgetId: "p30.MyFirstModule.ProductMobilePage.text9",
              class: "mx-name-text9",
              style: void 0,
              caption: selectTranslation([
                ExpressionProperty({
                  "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "MyFirstModule.Status" }] }, "args": { "currentObject": { "widget": "p30.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                })
              ]),
              renderMode: "span"
            }
          )
        ]
      }),
      onClick: ListActionProperty({
        "action": { "type": "openPage", "argMap": { "param$Products": { "widget": "p30.MyFirstModule.ProductMobilePage.listView3", "source": "object" } }, "config": { "name": "MyFirstModule/Products_EditView.page.xml", "location": "content" }, "disabledDuringExecution": true },
        "abortOnServerValidation": false,
        "dataSourceId": "p30.0"
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
