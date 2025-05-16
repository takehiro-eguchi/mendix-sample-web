import { reactExports, asPluginWidgets, selectTranslation } from '../index-DsLjkJno.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-CE-u0OT2.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-CJ7Z7nWm.js';
import { WebIconProperty } from '../WebIconProperty-B88sVxeT.js';
import { Container } from '../Image-H8ZrTm5W.js';
import { Div } from '../Div-DGtcc-SO.js';
import { Text } from '../Text-DR32TaDK.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-B7-azn8d.js';
import '../InlineText-D7gieNIv.js';
import '../BH5qNKCa-CBHyzLdu.js';
import '../BrzhM9fk-DIx2MmKD.js';
import '../ListExpressionProperty-eCDDpqMr.js';
import '../WebStaticImageProperty-D8DEVy4Y.js';

const React = { createElement: reactExports.createElement };
const { $Container, $Div, $Text, $ActionButton } = asPluginWidgets({ Container, Div, Text, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p33.MyFirstModule.Home_Web.container1",
      $widgetId: "p33.MyFirstModule.Home_Web.container1",
      class: "mx-name-container1 pageheader",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p33.MyFirstModule.Home_Web.layoutGrid2",
            $widgetId: "p33.MyFirstModule.Home_Web.layoutGrid2",
            class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p33.MyFirstModule.Home_Web.layoutGrid2$row0",
                  $widgetId: "p33.MyFirstModule.Home_Web.layoutGrid2$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p33.MyFirstModule.Home_Web.layoutGrid2$row0$column0",
                        $widgetId: "p33.MyFirstModule.Home_Web.layoutGrid2$row0$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p33.MyFirstModule.Home_Web.text1",
                              $widgetId: "p33.MyFirstModule.Home_Web.text1",
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
                              key: "p33.MyFirstModule.Home_Web.text3",
                              $widgetId: "p33.MyFirstModule.Home_Web.text3",
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
                              key: "p33.MyFirstModule.Home_Web.actionButton1",
                              $widgetId: "p33.MyFirstModule.Home_Web.actionButton1",
                              buttonId: "p33.MyFirstModule.Home_Web.actionButton1",
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
                              key: "p33.MyFirstModule.Home_Web.actionButton7",
                              $widgetId: "p33.MyFirstModule.Home_Web.actionButton7",
                              buttonId: "p33.MyFirstModule.Home_Web.actionButton7",
                              class: "mx-name-actionButton7",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-info",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "\u30C6\u30B9\u30C8\u7528" }, "args": {} }
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
                              action: void 0
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
      key: "p33.MyFirstModule.Home_Web.layoutGrid1",
      $widgetId: "p33.MyFirstModule.Home_Web.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p33.MyFirstModule.Home_Web.layoutGrid1$row0",
            $widgetId: "p33.MyFirstModule.Home_Web.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p33.MyFirstModule.Home_Web.layoutGrid1$row0$column0",
                  $widgetId: "p33.MyFirstModule.Home_Web.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p33.MyFirstModule.Home_Web.actionButton2",
                        $widgetId: "p33.MyFirstModule.Home_Web.actionButton2",
                        buttonId: "p33.MyFirstModule.Home_Web.actionButton2",
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
                  key: "p33.MyFirstModule.Home_Web.layoutGrid1$row0$column1",
                  $widgetId: "p33.MyFirstModule.Home_Web.layoutGrid1$row0$column1",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p33.MyFirstModule.Home_Web.actionButton5",
                        $widgetId: "p33.MyFirstModule.Home_Web.actionButton5",
                        buttonId: "p33.MyFirstModule.Home_Web.actionButton5",
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
            key: "p33.MyFirstModule.Home_Web.layoutGrid1$row1",
            $widgetId: "p33.MyFirstModule.Home_Web.layoutGrid1$row1",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p33.MyFirstModule.Home_Web.layoutGrid1$row1$column0",
                  $widgetId: "p33.MyFirstModule.Home_Web.layoutGrid1$row1$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p33.MyFirstModule.Home_Web.actionButton3",
                        $widgetId: "p33.MyFirstModule.Home_Web.actionButton3",
                        buttonId: "p33.MyFirstModule.Home_Web.actionButton3",
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
                  key: "p33.MyFirstModule.Home_Web.layoutGrid1$row1$column1",
                  $widgetId: "p33.MyFirstModule.Home_Web.layoutGrid1$row1$column1",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p33.MyFirstModule.Home_Web.actionButton6",
                        $widgetId: "p33.MyFirstModule.Home_Web.actionButton6",
                        buttonId: "p33.MyFirstModule.Home_Web.actionButton6",
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
            key: "p33.MyFirstModule.Home_Web.layoutGrid1$row2",
            $widgetId: "p33.MyFirstModule.Home_Web.layoutGrid1$row2",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p33.MyFirstModule.Home_Web.layoutGrid1$row2$column0",
                  $widgetId: "p33.MyFirstModule.Home_Web.layoutGrid1$row2$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ActionButton,
                      {
                        key: "p33.MyFirstModule.Home_Web.actionButton4",
                        $widgetId: "p33.MyFirstModule.Home_Web.actionButton4",
                        buttonId: "p33.MyFirstModule.Home_Web.actionButton4",
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
                  key: "p33.MyFirstModule.Home_Web.layoutGrid1$row2$column1",
                  $widgetId: "p33.MyFirstModule.Home_Web.layoutGrid1$row2$column1",
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
