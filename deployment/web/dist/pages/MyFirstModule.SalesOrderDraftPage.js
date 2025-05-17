import { reactExports, asPluginWidgets, selectTranslation } from '../index-DsLjkJno.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-CE-u0OT2.js';
import { ActionProperty } from '../ActionProperty-BTILmUmE.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-YUXxnGjk.js';
import { ListActionProperty } from '../ListActionProperty-APpVMhcY.js';
import { ListAttributeProperty } from '../ListAttributeProperty-CdJB2qIy.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-BfE9ukAc.js';
import { TextProperty } from '../Icon-CD3-QqtZ.js';
import { WebIconProperty } from '../WebIconProperty-B88sVxeT.js';
import { ActionButton } from '../ActionButton-C4Tg9t6b.js';
import { Container } from '../Container-DwlZ5IDZ.js';
import { Div } from '../Div-DGtcc-SO.js';
import { ListView } from '../ListView-Cs3yqIel.js';
import { Text } from '../Text-DR32TaDK.js';
import { content as content$1 } from '../Atlas_Core.Phone_Default-_sHhxm1h.js';
import '../BrzhM9fk-DIx2MmKD.js';
import '../BQa9VDC5-B8H0Gl41.js';
import '../Bgp-XL0v-CydxPoxA.js';
import '../InlineText-D7gieNIv.js';
import '../SimpleMenuBar-CrwLfguo.js';
import '../DMc54HEs-DHjqPhQF.js';

const React = { createElement: reactExports.createElement };
const { $Div, $ActionButton, $ListView, $Container, $Text } = asPluginWidgets({ Div, ActionButton, ListView, Container, Text });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p45.MyFirstModule.SalesOrderDraftPage.layoutGrid1",
      $widgetId: "p45.MyFirstModule.SalesOrderDraftPage.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p45.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0",
            $widgetId: "p45.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p45.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0$column0",
                  $widgetId: "p45.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p45.MyFirstModule.SalesOrderDraftPage.actionButton1",
                        $widgetId: "p45.MyFirstModule.SalesOrderDraftPage.actionButton1",
                        buttonId: "p45.MyFirstModule.SalesOrderDraftPage.actionButton1",
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
      key: "p45.MyFirstModule.SalesOrderDraftPage.listView1",
      $widgetId: "p45.MyFirstModule.SalesOrderDraftPage.listView1",
      class: "mx-name-listView1",
      style: void 0,
      listValue: DatabaseObjectListProperty({
        "dataSourceId": "p45.8",
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
          "dataSourceId": "p45.8",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "OrderQuantity",
          "attributeType": "Integer",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p45.8",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "UnitPrice",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p45.8",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "DiscountAmount",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p45.8",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "ProductStandardCost",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p45.8",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "TaxAmt",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p45.8",
          "isList": false
        })
      ],
      itemTemplate: TemplatedWidgetProperty({
        "dataSourceId": "p45.8",
        "editable": false,
        "children": () => [
          /* @__PURE__ */ React.createElement(
            $Container,
            {
              key: "p45.MyFirstModule.SalesOrderDraftPage.container1",
              $widgetId: "p45.MyFirstModule.SalesOrderDraftPage.container1",
              class: "mx-name-container1",
              style: void 0,
              renderMode: "div",
              onClick: void 0,
              content: [
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p45.MyFirstModule.SalesOrderDraftPage.text1",
                    $widgetId: "p45.MyFirstModule.SalesOrderDraftPage.text1",
                    class: "mx-name-text1",
                    style: {
                      "fontWeight": "bold"
                    },
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SalesID" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p45.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
                      })
                    ]),
                    renderMode: "span"
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p45.MyFirstModule.SalesOrderDraftPage.text10",
                    $widgetId: "p45.MyFirstModule.SalesOrderDraftPage.text10",
                    class: "mx-name-text10",
                    style: void 0,
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": " / " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.SalesTrackingTableTemporary_Customers/MyFirstModule.Customers/FirstName" }] }, "args": { "currentObject": { "widget": "p45.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
                      })
                    ]),
                    renderMode: "span"
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p45.MyFirstModule.SalesOrderDraftPage.text11",
                    $widgetId: "p45.MyFirstModule.SalesOrderDraftPage.text11",
                    class: "mx-name-text11",
                    style: void 0,
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": " / " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.SalesTrackingTableTemporary_Products/MyFirstModule.Products/ProductName" }] }, "args": { "currentObject": { "widget": "p45.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
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
        "action": { "type": "openPage", "argMap": { "param$SalesTrackingTableTemporary": { "widget": "p45.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } }, "config": { "name": "MyFirstModule/DraftSalesOrder_Edit.page.xml", "location": "content" }, "disabledDuringExecution": true },
        "abortOnServerValidation": false,
        "dataSourceId": "p45.8"
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
