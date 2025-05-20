import { reactExports, asPluginWidgets, selectTranslation } from '../index-BCA8X3MP.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BdzcW3SP.js';
import { ActionProperty } from '../ActionProperty-BjRv15Ma.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-DKuecUbx.js';
import { ListActionProperty } from '../ListActionProperty-CoCCB2vR.js';
import { ListAttributeProperty } from '../ListAttributeProperty-ByudWBDe.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-BFmsrEg-.js';
import { TextProperty } from '../Icon-CwpoK74K.js';
import { WebIconProperty } from '../WebIconProperty-DksUkMrc.js';
import { ActionButton } from '../ActionButton-B1FZcI8p.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-x384SoD_.js';
import { Container } from '../Container-CxVkjo8s.js';
import { Div } from '../Div-DWESTEoo.js';
import { ListView } from '../ListView-B1Yau7GF.js';
import { Text } from '../Text-BH0JoxPZ.js';
import { content as content$1 } from '../Atlas_Core.Phone_Default-BDduNu_D.js';
import '../BrzhM9fk-B35Z04N6.js';
import '../BQa9VDC5-BsmL2sNc.js';
import '../Bgp-XL0v-iR-R4xy_.js';
import '../InlineText-BU8NLTPl.js';
import '../SimpleMenuBar-CQ7UtPfo.js';
import '../DMc54HEs-BETi155K.js';

const React = { createElement: reactExports.createElement };
const { $Div, $ConditionalVisibilityWrapper, $ActionButton, $ListView, $Container, $Text } = asPluginWidgets({ Div, ConditionalVisibilityWrapper, ActionButton, ListView, Container, Text });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p28.MyFirstModule.SalesOrderDraftPage.layoutGrid1",
      $widgetId: "p28.MyFirstModule.SalesOrderDraftPage.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p28.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0",
            $widgetId: "p28.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p28.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0$column0",
                  $widgetId: "p28.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p28.MyFirstModule.SalesOrderDraftPage.actionButton1$visibility",
                        $widgetId: "p28.MyFirstModule.SalesOrderDraftPage.actionButton1$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" }] }, "args": {} }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p28.MyFirstModule.SalesOrderDraftPage.actionButton1",
                              $widgetId: "p28.MyFirstModule.SalesOrderDraftPage.actionButton1",
                              buttonId: "p28.MyFirstModule.SalesOrderDraftPage.actionButton1",
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
      key: "p28.MyFirstModule.SalesOrderDraftPage.listView1",
      $widgetId: "p28.MyFirstModule.SalesOrderDraftPage.listView1",
      class: "mx-name-listView1",
      style: void 0,
      listValue: DatabaseObjectListProperty({
        "dataSourceId": "p28.9",
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
          "dataSourceId": "p28.9",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "OrderQuantity",
          "attributeType": "Integer",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p28.9",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "UnitPrice",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p28.9",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "DiscountAmount",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p28.9",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "ProductStandardCost",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p28.9",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.SalesTrackingTableTemporary",
          "attribute": "TaxAmt",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p28.9",
          "isList": false
        })
      ],
      itemTemplate: TemplatedWidgetProperty({
        "dataSourceId": "p28.9",
        "editable": false,
        "children": () => [
          /* @__PURE__ */ React.createElement(
            $Container,
            {
              key: "p28.MyFirstModule.SalesOrderDraftPage.container1",
              $widgetId: "p28.MyFirstModule.SalesOrderDraftPage.container1",
              class: "mx-name-container1",
              style: void 0,
              renderMode: "div",
              onClick: void 0,
              content: [
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p28.MyFirstModule.SalesOrderDraftPage.text1",
                    $widgetId: "p28.MyFirstModule.SalesOrderDraftPage.text1",
                    class: "mx-name-text1",
                    style: {
                      "fontWeight": "bold"
                    },
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SalesID" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p28.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
                      })
                    ]),
                    renderMode: "span"
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p28.MyFirstModule.SalesOrderDraftPage.text10",
                    $widgetId: "p28.MyFirstModule.SalesOrderDraftPage.text10",
                    class: "mx-name-text10",
                    style: void 0,
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": " / " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.SalesTrackingTableTemporary_Customers/MyFirstModule.Customers/FirstName" }] }, "args": { "currentObject": { "widget": "p28.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
                      })
                    ]),
                    renderMode: "span"
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p28.MyFirstModule.SalesOrderDraftPage.text11",
                    $widgetId: "p28.MyFirstModule.SalesOrderDraftPage.text11",
                    class: "mx-name-text11",
                    style: void 0,
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": " / " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.SalesTrackingTableTemporary_Products/MyFirstModule.Products/ProductName" }] }, "args": { "currentObject": { "widget": "p28.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
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
        "action": { "type": "openPage", "argMap": { "param$SalesTrackingTableTemporary": { "widget": "p28.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } }, "config": { "name": "MyFirstModule/DraftSalesOrder_Edit.page.xml", "location": "content", "allowedRoles": ["Administrator", "User", "SalesPerson"] }, "disabledDuringExecution": true },
        "abortOnServerValidation": false,
        "dataSourceId": "p28.9"
      }),
      pageSize: 10
    }
  ),
  /* @__PURE__ */ React.createElement(
    $ConditionalVisibilityWrapper,
    {
      key: "p28.MyFirstModule.SalesOrderDraftPage.actionButton2$visibility",
      $widgetId: "p28.MyFirstModule.SalesOrderDraftPage.actionButton2$visibility",
      visible: ExpressionProperty({
        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" }] }, "args": {} }
      }),
      contents: [
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
            key: "p28.MyFirstModule.SalesOrderDraftPage.actionButton2",
            $widgetId: "p28.MyFirstModule.SalesOrderDraftPage.actionButton2",
            buttonId: "p28.MyFirstModule.SalesOrderDraftPage.actionButton2",
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
