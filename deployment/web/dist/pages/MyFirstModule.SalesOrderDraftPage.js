import { reactExports, asPluginWidgets, selectTranslation } from '../index-sUfOvV_8.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-kt62KmQf.js';
import { ActionProperty } from '../ActionProperty-CYY0rMjJ.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-k3CyHRsq.js';
import { ListActionProperty } from '../ListActionProperty-D3kz16B6.js';
import { ListAttributeProperty } from '../ListAttributeProperty-Djtttjcn.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-BlYkv9_n.js';
import { TextProperty } from '../Icon-CLMmynlf.js';
import { WebIconProperty } from '../WebIconProperty-BB_92iSr.js';
import { ActionButton } from '../ActionButton-CVWjzahT.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-Cc1bUh1v.js';
import { Container } from '../Container-DX13f28C.js';
import { Div } from '../Div-CqbbyV04.js';
import { ListView } from '../ListView-DkonHZL0.js';
import { Text } from '../Text-CYzI2A7u.js';
import { content as content$1 } from '../Atlas_Core.Phone_Default-DyWjpBVn.js';
import '../BrzhM9fk-DCcHnYPV.js';
import '../BQa9VDC5-VmuteT3Q.js';
import '../Bgp-XL0v-GMvL-NeW.js';
import '../InlineText-e67tRU7X.js';
import '../SimpleMenuBar-Ch_dFgZ3.js';
import '../DMc54HEs-5Q7iFlvv.js';

const React = { createElement: reactExports.createElement };
const { $Div, $ConditionalVisibilityWrapper, $ActionButton, $ListView, $Container, $Text } = asPluginWidgets({ Div, ConditionalVisibilityWrapper, ActionButton, ListView, Container, Text });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p43.MyFirstModule.SalesOrderDraftPage.layoutGrid1",
      $widgetId: "p43.MyFirstModule.SalesOrderDraftPage.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p43.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0",
            $widgetId: "p43.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p43.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0$column0",
                  $widgetId: "p43.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p43.MyFirstModule.SalesOrderDraftPage.actionButton1$visibility",
                        $widgetId: "p43.MyFirstModule.SalesOrderDraftPage.actionButton1$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p43.MyFirstModule.SalesOrderDraftPage.actionButton1",
                              $widgetId: "p43.MyFirstModule.SalesOrderDraftPage.actionButton1",
                              buttonId: "p43.MyFirstModule.SalesOrderDraftPage.actionButton1",
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
                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "pVuWxuONlVqV/XL6/pAnUA", "validate": "view", "allowedRoles": ["Administrator", "User", "SalesPerson"] }, "disabledDuringExecution": true },
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
        )
      ]
    }
  ),
  /* @__PURE__ */ React.createElement(
    $ListView,
    {
      key: "p43.MyFirstModule.SalesOrderDraftPage.listView1",
      $widgetId: "p43.MyFirstModule.SalesOrderDraftPage.listView1",
      class: "mx-name-listView1",
      style: void 0,
      listValue: DatabaseObjectListProperty({
        "dataSourceId": "p43.9",
        "entity": "MyFirstModule.SalesTrackingTableTemporary",
        "operationId": "ebNjBkSrm1+zbdPIoCQGPQ",
        "sort": [],
        "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "System.owner", "context": "MyFirstModule.SalesTrackingTableTemporary", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" }] }
      }),
      searchAttributes: [
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "SalesID",
          "attributeType": "AutoNumber",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p43.9",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "OrderQuantity",
          "attributeType": "Integer",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p43.9",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "UnitPrice",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p43.9",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "DiscountAmount",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p43.9",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "ProductStandardCost",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p43.9",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "TaxAmt",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p43.9",
          "isList": false
        })
      ],
      itemTemplate: TemplatedWidgetProperty({
        "dataSourceId": "p43.9",
        "editable": false,
        "children": () => [
          /* @__PURE__ */ React.createElement(
            $ConditionalVisibilityWrapper,
            {
              key: "p43.MyFirstModule.SalesOrderDraftPage.actionButton3$visibility",
              $widgetId: "p43.MyFirstModule.SalesOrderDraftPage.actionButton3$visibility",
              visible: ExpressionProperty({
                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" }] }, "args": {} }
              }),
              contents: [
                /* @__PURE__ */ React.createElement(
                  $ActionButton,
                  {
                    key: "p43.MyFirstModule.SalesOrderDraftPage.actionButton3",
                    $widgetId: "p43.MyFirstModule.SalesOrderDraftPage.actionButton3",
                    buttonId: "p43.MyFirstModule.SalesOrderDraftPage.actionButton3",
                    class: "mx-name-actionButton3 pull-right btn-sm",
                    style: void 0,
                    tabIndex: void 0,
                    renderType: "button",
                    role: void 0,
                    buttonClass: "btn-danger",
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                      })
                    ]),
                    tooltip: TextProperty({
                      "value": selectTranslation([
                        ""
                      ])
                    }),
                    icon: WebIconProperty({
                      "icon": { "type": "glyph", "iconClass": "glyphicon-remove" }
                    }),
                    action: ActionProperty({
                      "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p43.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } }, "config": { "closePage": false, "operationId": "DroPv67AGl2mZxcxcnPBAQ" }, "disabledDuringExecution": true },
                      "abortOnServerValidation": true
                    })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Container,
            {
              key: "p43.MyFirstModule.SalesOrderDraftPage.container1",
              $widgetId: "p43.MyFirstModule.SalesOrderDraftPage.container1",
              class: "mx-name-container1",
              style: void 0,
              renderMode: "div",
              onClick: void 0,
              content: [
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p43.MyFirstModule.SalesOrderDraftPage.text1",
                    $widgetId: "p43.MyFirstModule.SalesOrderDraftPage.text1",
                    class: "mx-name-text1",
                    style: {
                      "fontWeight": "bold"
                    },
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SalesID" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p43.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
                      })
                    ]),
                    renderMode: "span"
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p43.MyFirstModule.SalesOrderDraftPage.text10",
                    $widgetId: "p43.MyFirstModule.SalesOrderDraftPage.text10",
                    class: "mx-name-text10",
                    style: void 0,
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": " / " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.SalesTrackingTableTemporary_Customers/MyFirstModule.Customers/FirstName" }] }, "args": { "currentObject": { "widget": "p43.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
                      })
                    ]),
                    renderMode: "span"
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p43.MyFirstModule.SalesOrderDraftPage.text11",
                    $widgetId: "p43.MyFirstModule.SalesOrderDraftPage.text11",
                    class: "mx-name-text11",
                    style: void 0,
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": " / " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.SalesTrackingTableTemporary_Products/MyFirstModule.Products/ProductName" }] }, "args": { "currentObject": { "widget": "p43.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
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
        "action": { "type": "openPage", "argMap": { "param$SalesTrackingTableTemporary": { "widget": "p43.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } }, "config": { "name": "MyFirstModule/DraftSalesOrder_Edit.page.xml", "location": "content", "allowedRoles": ["Administrator", "User", "SalesPerson"] }, "disabledDuringExecution": true },
        "abortOnServerValidation": false,
        "dataSourceId": "p43.9"
      }),
      pageSize: 10
    }
  ),
  /* @__PURE__ */ React.createElement(
    $ConditionalVisibilityWrapper,
    {
      key: "p43.MyFirstModule.SalesOrderDraftPage.actionButton2$visibility",
      $widgetId: "p43.MyFirstModule.SalesOrderDraftPage.actionButton2$visibility",
      visible: ExpressionProperty({
        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" }] }, "args": {} }
      }),
      contents: [
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
            key: "p43.MyFirstModule.SalesOrderDraftPage.actionButton2",
            $widgetId: "p43.MyFirstModule.SalesOrderDraftPage.actionButton2",
            buttonId: "p43.MyFirstModule.SalesOrderDraftPage.actionButton2",
            class: "mx-name-actionButton2",
            style: void 0,
            tabIndex: void 0,
            renderType: "button",
            role: void 0,
            buttonClass: "btn-success",
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Create Sales Order" }, "args": {} }
              })
            ]),
            tooltip: TextProperty({
              "value": selectTranslation([
                ""
              ])
            }),
            icon: void 0,
            action: ActionProperty({
              "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "NX1TrnUxm1WQLvqbKwwtQA", "validate": "view", "allowedRoles": ["Administrator", "User", "SalesPerson"] }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        )
      ]
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
