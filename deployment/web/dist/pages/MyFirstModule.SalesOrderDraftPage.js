import { reactExports, asPluginWidgets, selectTranslation } from '../index-byXJmgeF.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BNFOh2As.js';
import { ActionProperty } from '../ActionProperty-Bit9c0PV.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-Uep1-5zc.js';
import { ListActionProperty } from '../ListActionProperty-VWeAxBMO.js';
import { ListAttributeProperty } from '../ListAttributeProperty-CWpfMZr8.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-Dnn_ONys.js';
import { TextProperty } from '../Icon-BZqjj_0y.js';
import { WebIconProperty } from '../WebIconProperty-Dlq3RviU.js';
import { ActionButton } from '../ActionButton-Cam8M_BK.js';
import { Container } from '../Container-BAe5wxcO.js';
import { Div } from '../Div-32Jsy3k8.js';
import { ListView } from '../ListView-2iOLO5xL.js';
import { Text } from '../Text-DZ-U1Q-n.js';
import { content as content$1 } from '../Atlas_Core.Phone_Default-3Xle14vk.js';
import '../BrzhM9fk-N7FbJJus.js';
import '../BQa9VDC5-BWEBlAni.js';
import '../Bgp-XL0v-NBFeyE8N.js';
import '../InlineText-D7jZL5NZ.js';
import '../SimpleMenuBar-cbI6aqB4.js';
import '../DMc54HEs-BlvWf0_R.js';

const React = { createElement: reactExports.createElement };
const { $Div, $ActionButton, $ListView, $Container, $Text } = asPluginWidgets({ Div, ActionButton, ListView, Container, Text });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p0.MyFirstModule.SalesOrderDraftPage.layoutGrid1",
      $widgetId: "p0.MyFirstModule.SalesOrderDraftPage.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p0.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0",
            $widgetId: "p0.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p0.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0$column0",
                  $widgetId: "p0.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p0.MyFirstModule.SalesOrderDraftPage.actionButton1",
                        $widgetId: "p0.MyFirstModule.SalesOrderDraftPage.actionButton1",
                        buttonId: "p0.MyFirstModule.SalesOrderDraftPage.actionButton1",
                        class: "mx-name-actionButton1",
                        style: {
                          "float": "right",
                          "marginTop": "10px",
                          "marginBottom": "10px",
                          "marginRight": "10px"
                        },
                        tabIndex: void 0,
                        renderType: "button",
                        role: void 0,
                        buttonClass: "btn-primary",
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Add Order" }, "args": {} }
                          })
                        ]),
                        tooltip: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        icon: WebIconProperty({
                          "icon": { "type": "glyph", "iconClass": "glyphicon-plus" }
                        }),
                        action: ActionProperty({
                          "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "pVuWxuONlVqV/XL6/pAnUA", "validate": "view" }, "disabledDuringExecution": true },
                          "abortOnServerValidation": true
                        })
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  ),
  /* @__PURE__ */ React.createElement(
    $ListView,
    {
      key: "p0.MyFirstModule.SalesOrderDraftPage.listView1",
      $widgetId: "p0.MyFirstModule.SalesOrderDraftPage.listView1",
      class: "mx-name-listView1",
      style: void 0,
      listValue: DatabaseObjectListProperty({
        "dataSourceId": "p0.8",
        "entity": "MyFirstModule.SalesTrackingTableTemporary",
        "operationId": "ebNjBkSrm1+zbdPIoCQGPQ",
        "sort": []
      }),
      searchAttributes: [
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "SalesID",
          "attributeType": "AutoNumber",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p0.8",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "OrderQuantity",
          "attributeType": "Integer",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p0.8",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "UnitPrice",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p0.8",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "DiscountAmount",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p0.8",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "ProductStandardCost",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p0.8",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "TaxAmt",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p0.8",
          "isList": false
        })
      ],
      itemTemplate: TemplatedWidgetProperty({
        "dataSourceId": "p0.8",
        "editable": false,
        "children": () => [
          /* @__PURE__ */ React.createElement(
            $Container,
            {
              key: "p0.MyFirstModule.SalesOrderDraftPage.container1",
              $widgetId: "p0.MyFirstModule.SalesOrderDraftPage.container1",
              class: "mx-name-container1",
              style: void 0,
              renderMode: "div",
              onClick: void 0,
              content: [
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p0.MyFirstModule.SalesOrderDraftPage.text1",
                    $widgetId: "p0.MyFirstModule.SalesOrderDraftPage.text1",
                    class: "mx-name-text1",
                    style: {
                      "fontWeight": "bold"
                    },
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SalesID" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p0.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
                      })
                    ]),
                    renderMode: "span"
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p0.MyFirstModule.SalesOrderDraftPage.text10",
                    $widgetId: "p0.MyFirstModule.SalesOrderDraftPage.text10",
                    class: "mx-name-text10",
                    style: void 0,
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": " / " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.SalesTrackingTableTemporary_Customers/MyFirstModule.Customers/FirstName" }] }, "args": { "currentObject": { "widget": "p0.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
                      })
                    ]),
                    renderMode: "span"
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p0.MyFirstModule.SalesOrderDraftPage.text11",
                    $widgetId: "p0.MyFirstModule.SalesOrderDraftPage.text11",
                    class: "mx-name-text11",
                    style: void 0,
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": " / " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.SalesTrackingTableTemporary_Products/MyFirstModule.Products/ProductName" }] }, "args": { "currentObject": { "widget": "p0.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
                      })
                    ]),
                    renderMode: "span"
                  }
                )
              ],
              ariaHidden: false
            }
          )
        ]
      }),
      onClick: ListActionProperty({
        "action": { "type": "openPage", "argMap": { "param$SalesTrackingTableTemporary": { "widget": "p0.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } }, "config": { "name": "MyFirstModule/DraftSalesOrder_Edit.page.xml", "location": "content" }, "disabledDuringExecution": true },
        "abortOnServerValidation": false,
        "dataSourceId": "p0.8"
      }),
      pageSize: 10
    }
  )
]);
const title = selectTranslation([
  "Sales order draft"
]);
const classes = "layout-atlas layout-atlas-phone";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Phone_Default.Main": region$Main
};

export { classes, content, style, title };
