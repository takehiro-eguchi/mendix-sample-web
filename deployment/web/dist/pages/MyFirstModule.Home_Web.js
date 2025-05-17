import { reactExports, asPluginWidgets, selectTranslation } from '../index-DsLjkJno.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-CE-u0OT2.js';
import { ActionProperty } from '../ActionProperty-BTILmUmE.js';
import { TextProperty } from '../Icon-CD3-QqtZ.js';
import { WebIconProperty } from '../WebIconProperty-B88sVxeT.js';
import { ActionButton } from '../ActionButton-C4Tg9t6b.js';
import { Container } from '../Container-DwlZ5IDZ.js';
import { Div } from '../Div-DGtcc-SO.js';
import { Text } from '../Text-DR32TaDK.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-CPl-t0Ao.js';
import '../InlineText-D7gieNIv.js';
import '../BH5qNKCa-YUXxnGjk.js';
import '../BrzhM9fk-DIx2MmKD.js';
import '../BQa9VDC5-B8H0Gl41.js';
import '../ListExpressionProperty-DJewd2cn.js';
import '../WebStaticImageProperty-D8DEVy4Y.js';
import '../Image-BTiL4qVa.js';
import '../DMc54HEs-DHjqPhQF.js';

const React = { createElement: reactExports.createElement };
const { $Container, $Div, $Text, $ActionButton } = asPluginWidgets({ Container, Div, Text, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p41.MyFirstModule.Home_Web.container1",
      $widgetId: "p41.MyFirstModule.Home_Web.container1",
      class: "mx-name-container1 pageheader",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p41.MyFirstModule.Home_Web.layoutGrid2",
            $widgetId: "p41.MyFirstModule.Home_Web.layoutGrid2",
            class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p41.MyFirstModule.Home_Web.layoutGrid2$row0",
                  $widgetId: "p41.MyFirstModule.Home_Web.layoutGrid2$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p41.MyFirstModule.Home_Web.layoutGrid2$row0$column0",
                        $widgetId: "p41.MyFirstModule.Home_Web.layoutGrid2$row0$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p41.MyFirstModule.Home_Web.text1",
                              $widgetId: "p41.MyFirstModule.Home_Web.text1",
                              class: "mx-name-text1 pageheader-title spacing-outer-bottom",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Sample Application" }, "args": {} }
                                })
                              ]),
                              renderMode: "h3"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p41.MyFirstModule.Home_Web.text3",
                              $widgetId: "p41.MyFirstModule.Home_Web.text3",
                              class: "mx-name-text3 pageheader-subtitle text-detail",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Welcome to your new app.\r\n" }, "args": {} }
                                })
                              ]),
                              renderMode: "p"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p41.MyFirstModule.Home_Web.actionButton1",
                              $widgetId: "p41.MyFirstModule.Home_Web.actionButton1",
                              buttonId: "p41.MyFirstModule.Home_Web.actionButton1",
                              class: "mx-name-actionButton1",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-success",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "\u30E1\u30C3\u30BB\u30FC\u30B8\u8868\u793A" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-alert-circle" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "UPWR9PEIN12LIjhueLcB3w", "validate": "view" }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p41.MyFirstModule.Home_Web.actionButton7",
                              $widgetId: "p41.MyFirstModule.Home_Web.actionButton7",
                              buttonId: "p41.MyFirstModule.Home_Web.actionButton7",
                              class: "mx-name-actionButton7 spacing-outer-left spacing-outer-right",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-info",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "\u30DE\u30A4\u30AF\u30ED\u30D5\u30ED\u30FC\u30C6\u30B9\u30C8" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: WebIconProperty({
                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-alert-circle" }
                              }),
                              action: ActionProperty({
                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "YEOytzhexViQH8ZlpB43QQ", "validate": "view" }, "disabledDuringExecution": true },
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
      ],
      ariaHidden: false
    }
  ),
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p41.MyFirstModule.Home_Web.layoutGrid1",
      $widgetId: "p41.MyFirstModule.Home_Web.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p41.MyFirstModule.Home_Web.layoutGrid1$row0",
            $widgetId: "p41.MyFirstModule.Home_Web.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p41.MyFirstModule.Home_Web.layoutGrid1$row0$column0",
                  $widgetId: "p41.MyFirstModule.Home_Web.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p41.MyFirstModule.Home_Web.actionButton2",
                        $widgetId: "p41.MyFirstModule.Home_Web.actionButton2",
                        buttonId: "p41.MyFirstModule.Home_Web.actionButton2",
                        class: "mx-name-actionButton2",
                        style: void 0,
                        tabIndex: void 0,
                        renderType: "link",
                        role: "button",
                        buttonClass: "btn-default",
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Customers" }, "args": {} }
                          })
                        ]),
                        tooltip: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        icon: WebIconProperty({
                          "icon": { "type": "glyph", "iconClass": "glyphicon-user" }
                        }),
                        action: ActionProperty({
                          "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/CustomersPage.page.xml", "location": "content" }, "disabledDuringExecution": true },
                          "abortOnServerValidation": true
                        })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p41.MyFirstModule.Home_Web.layoutGrid1$row0$column1",
                  $widgetId: "p41.MyFirstModule.Home_Web.layoutGrid1$row0$column1",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p41.MyFirstModule.Home_Web.actionButton5",
                        $widgetId: "p41.MyFirstModule.Home_Web.actionButton5",
                        buttonId: "p41.MyFirstModule.Home_Web.actionButton5",
                        class: "mx-name-actionButton5",
                        style: void 0,
                        tabIndex: void 0,
                        renderType: "link",
                        role: "button",
                        buttonClass: "btn-default",
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Sales Person" }, "args": {} }
                          })
                        ]),
                        tooltip: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        icon: WebIconProperty({
                          "icon": { "type": "glyph", "iconClass": "glyphicon-thumbs-up" }
                        }),
                        action: ActionProperty({
                          "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/SalesPersonPage.page.xml", "location": "content" }, "disabledDuringExecution": true },
                          "abortOnServerValidation": true
                        })
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p41.MyFirstModule.Home_Web.layoutGrid1$row1",
            $widgetId: "p41.MyFirstModule.Home_Web.layoutGrid1$row1",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p41.MyFirstModule.Home_Web.layoutGrid1$row1$column0",
                  $widgetId: "p41.MyFirstModule.Home_Web.layoutGrid1$row1$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p41.MyFirstModule.Home_Web.actionButton3",
                        $widgetId: "p41.MyFirstModule.Home_Web.actionButton3",
                        buttonId: "p41.MyFirstModule.Home_Web.actionButton3",
                        class: "mx-name-actionButton3",
                        style: void 0,
                        tabIndex: void 0,
                        renderType: "link",
                        role: "button",
                        buttonClass: "btn-default",
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Products" }, "args": {} }
                          })
                        ]),
                        tooltip: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        icon: WebIconProperty({
                          "icon": { "type": "glyph", "iconClass": "glyphicon-list-alt" }
                        }),
                        action: ActionProperty({
                          "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/ProductsPage.page.xml", "location": "content" }, "disabledDuringExecution": true },
                          "abortOnServerValidation": true
                        })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p41.MyFirstModule.Home_Web.layoutGrid1$row1$column1",
                  $widgetId: "p41.MyFirstModule.Home_Web.layoutGrid1$row1$column1",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p41.MyFirstModule.Home_Web.actionButton6",
                        $widgetId: "p41.MyFirstModule.Home_Web.actionButton6",
                        buttonId: "p41.MyFirstModule.Home_Web.actionButton6",
                        class: "mx-name-actionButton6",
                        style: void 0,
                        tabIndex: void 0,
                        renderType: "link",
                        role: "button",
                        buttonClass: "btn-default",
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Sales Tracking Page" }, "args": {} }
                          })
                        ]),
                        tooltip: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        icon: WebIconProperty({
                          "icon": { "type": "glyph", "iconClass": "glyphicon-align-center" }
                        }),
                        action: ActionProperty({
                          "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/SalesTrackingPage.page.xml", "location": "content" }, "disabledDuringExecution": true },
                          "abortOnServerValidation": true
                        })
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p41.MyFirstModule.Home_Web.layoutGrid1$row2",
            $widgetId: "p41.MyFirstModule.Home_Web.layoutGrid1$row2",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p41.MyFirstModule.Home_Web.layoutGrid1$row2$column0",
                  $widgetId: "p41.MyFirstModule.Home_Web.layoutGrid1$row2$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p41.MyFirstModule.Home_Web.actionButton4",
                        $widgetId: "p41.MyFirstModule.Home_Web.actionButton4",
                        buttonId: "p41.MyFirstModule.Home_Web.actionButton4",
                        class: "mx-name-actionButton4",
                        style: void 0,
                        tabIndex: void 0,
                        renderType: "link",
                        role: "button",
                        buttonClass: "btn-default",
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Locations" }, "args": {} }
                          })
                        ]),
                        tooltip: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        icon: WebIconProperty({
                          "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-location-pin" }
                        }),
                        action: ActionProperty({
                          "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/LocationPage.page.xml", "location": "content" }, "disabledDuringExecution": true },
                          "abortOnServerValidation": true
                        })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p41.MyFirstModule.Home_Web.layoutGrid1$row2$column1",
                  $widgetId: "p41.MyFirstModule.Home_Web.layoutGrid1$row2$column1",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: void 0
                }
              )
            ]
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Homepage"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
