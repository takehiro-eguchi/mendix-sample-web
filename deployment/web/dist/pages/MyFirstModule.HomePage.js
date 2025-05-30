import { reactExports, asPluginWidgets, selectTranslation } from '../index-sUfOvV_8.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-kt62KmQf.js';
import { ActionProperty } from '../ActionProperty-CYY0rMjJ.js';
import { TextProperty } from '../Icon-CLMmynlf.js';
import { WebIconProperty } from '../WebIconProperty-BB_92iSr.js';
import { ActionButton } from '../ActionButton-CVWjzahT.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-Cc1bUh1v.js';
import { Container } from '../Container-DX13f28C.js';
import { Div } from '../Div-CqbbyV04.js';
import { Text } from '../Text-CYzI2A7u.js';
import { content as content$1 } from '../Atlas_Core.Phone_BottomBar-DEmpCMKL.js';
import '../InlineText-e67tRU7X.js';
import '../SimpleMenuBar-Ch_dFgZ3.js';
import '../DMc54HEs-5Q7iFlvv.js';

const React = { createElement: reactExports.createElement };
const { $Container, $ActionButton, $Text, $Div, $ConditionalVisibilityWrapper } = asPluginWidgets({ Container, ActionButton, Text, Div, ConditionalVisibilityWrapper });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p35.MyFirstModule.HomePage.container9",
      $widgetId: "p35.MyFirstModule.HomePage.container9",
      class: "mx-name-container9 h-100 col-center",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Container,
          {
            key: "p35.MyFirstModule.HomePage.container10",
            $widgetId: "p35.MyFirstModule.HomePage.container10",
            class: "mx-name-container10 headerhero springboard-header justify-content-between background-primary spacing-outer-bottom-none",
            style: void 0,
            renderMode: "div",
            onClick: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p35.MyFirstModule.HomePage.actionButton1",
                  $widgetId: "p35.MyFirstModule.HomePage.actionButton1",
                  buttonId: "p35.MyFirstModule.HomePage.actionButton1",
                  class: "mx-name-actionButton1 text-large text-white text-right",
                  style: void 0,
                  tabIndex: void 0,
                  renderType: "link",
                  role: "button",
                  buttonClass: "btn-default",
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  tooltip: TextProperty({
                    "value": selectTranslation([
                      ""
                    ])
                  }),
                  icon: WebIconProperty({
                    "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-cog" }
                  }),
                  action: void 0
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Container,
                {
                  key: "p35.MyFirstModule.HomePage.container8",
                  $widgetId: "p35.MyFirstModule.HomePage.container8",
                  class: "mx-name-container8",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Text,
                      {
                        key: "p35.MyFirstModule.HomePage.text1",
                        $widgetId: "p35.MyFirstModule.HomePage.text1",
                        class: "mx-name-text1 text-white",
                        style: void 0,
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Sales Management" }, "args": {} }
                          })
                        ]),
                        renderMode: "h1"
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Text,
                      {
                        key: "p35.MyFirstModule.HomePage.text2",
                        $widgetId: "p35.MyFirstModule.HomePage.text2",
                        class: "mx-name-text2 text-white",
                        style: void 0,
                        caption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Manage your sales." }, "args": {} }
                          })
                        ]),
                        renderMode: "p"
                      }
                    )
                  ],
                  ariaHidden: false
                }
              )
            ],
            ariaHidden: false
          }
        ),
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p35.MyFirstModule.HomePage.layoutGrid1",
            $widgetId: "p35.MyFirstModule.HomePage.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid springboard-grid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p35.MyFirstModule.HomePage.layoutGrid1$row0",
                  $widgetId: "p35.MyFirstModule.HomePage.layoutGrid1$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p35.MyFirstModule.HomePage.layoutGrid1$row0$column0",
                        $widgetId: "p35.MyFirstModule.HomePage.layoutGrid1$row0$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p35.MyFirstModule.HomePage.container2",
                              $widgetId: "p35.MyFirstModule.HomePage.container2",
                              class: "mx-name-container2 card springboard-card justify-content-end spacing-outer-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p35.MyFirstModule.HomePage.actionButton17$visibility",
                                    $widgetId: "p35.MyFirstModule.HomePage.actionButton17$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p35.MyFirstModule.HomePage.actionButton17",
                                          $widgetId: "p35.MyFirstModule.HomePage.actionButton17",
                                          buttonId: "p35.MyFirstModule.HomePage.actionButton17",
                                          class: "mx-name-actionButton17 card-icon text-primary spacing-outer-bottom",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "link",
                                          role: "button",
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              "Folder Open Icon"
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-user" }
                                          }),
                                          action: ActionProperty({
                                            "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/CuttomerMobilePage.page.xml", "location": "content", "allowedRoles": ["Administrator", "User", "SalesPerson"] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p35.MyFirstModule.HomePage.text3",
                                    $widgetId: "p35.MyFirstModule.HomePage.text3",
                                    class: "mx-name-text3 text-primary spacing-outer-bottom-none",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Customers" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "h5"
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p35.MyFirstModule.HomePage.layoutGrid1$row0$column1",
                        $widgetId: "p35.MyFirstModule.HomePage.layoutGrid1$row0$column1",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p35.MyFirstModule.HomePage.container3",
                              $widgetId: "p35.MyFirstModule.HomePage.container3",
                              class: "mx-name-container3 card springboard-card justify-content-end spacing-outer-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p35.MyFirstModule.HomePage.actionButton18$visibility",
                                    $widgetId: "p35.MyFirstModule.HomePage.actionButton18$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p35.MyFirstModule.HomePage.actionButton18",
                                          $widgetId: "p35.MyFirstModule.HomePage.actionButton18",
                                          buttonId: "p35.MyFirstModule.HomePage.actionButton18",
                                          class: "mx-name-actionButton18 card-icon text-primary spacing-outer-bottom",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "link",
                                          role: "button",
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              "Folder Open Icon"
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "glyph", "iconClass": "glyphicon-list-alt" }
                                          }),
                                          action: ActionProperty({
                                            "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/ProductMobilePage.page.xml", "location": "content", "allowedRoles": ["Administrator", "User", "SalesPerson"] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p35.MyFirstModule.HomePage.text4",
                                    $widgetId: "p35.MyFirstModule.HomePage.text4",
                                    class: "mx-name-text4 text-primary spacing-outer-bottom-none",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Products" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "h5"
                                  }
                                )
                              ],
                              ariaHidden: false
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
                  key: "p35.MyFirstModule.HomePage.layoutGrid1$row1",
                  $widgetId: "p35.MyFirstModule.HomePage.layoutGrid1$row1",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p35.MyFirstModule.HomePage.layoutGrid1$row1$column0",
                        $widgetId: "p35.MyFirstModule.HomePage.layoutGrid1$row1$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p35.MyFirstModule.HomePage.container4",
                              $widgetId: "p35.MyFirstModule.HomePage.container4",
                              class: "mx-name-container4 card springboard-card justify-content-end spacing-outer-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p35.MyFirstModule.HomePage.actionButton19$visibility",
                                    $widgetId: "p35.MyFirstModule.HomePage.actionButton19$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p35.MyFirstModule.HomePage.actionButton19",
                                          $widgetId: "p35.MyFirstModule.HomePage.actionButton19",
                                          buttonId: "p35.MyFirstModule.HomePage.actionButton19",
                                          class: "mx-name-actionButton19 card-icon text-primary spacing-outer-bottom",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "link",
                                          role: "button",
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              "Folder Open Icon"
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-location-pin" }
                                          }),
                                          action: ActionProperty({
                                            "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/LocationMobilePage.page.xml", "location": "content", "allowedRoles": ["Administrator", "User", "SalesPerson"] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p35.MyFirstModule.HomePage.text5",
                                    $widgetId: "p35.MyFirstModule.HomePage.text5",
                                    class: "mx-name-text5 text-primary spacing-outer-bottom-none",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Locations" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "h5"
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p35.MyFirstModule.HomePage.layoutGrid1$row1$column1",
                        $widgetId: "p35.MyFirstModule.HomePage.layoutGrid1$row1$column1",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p35.MyFirstModule.HomePage.container6",
                              $widgetId: "p35.MyFirstModule.HomePage.container6",
                              class: "mx-name-container6 card springboard-card justify-content-end spacing-outer-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p35.MyFirstModule.HomePage.actionButton21$visibility",
                                    $widgetId: "p35.MyFirstModule.HomePage.actionButton21$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p35.MyFirstModule.HomePage.actionButton21",
                                          $widgetId: "p35.MyFirstModule.HomePage.actionButton21",
                                          buttonId: "p35.MyFirstModule.HomePage.actionButton21",
                                          class: "mx-name-actionButton21 card-icon text-primary spacing-outer-bottom",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "link",
                                          role: "button",
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              "Folder Open Icon"
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "glyph", "iconClass": "glyphicon-align-center" }
                                          }),
                                          action: ActionProperty({
                                            "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/SalesOrderDraftPage.page.xml", "location": "content", "allowedRoles": ["Administrator", "User", "SalesPerson"] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p35.MyFirstModule.HomePage.text7",
                                    $widgetId: "p35.MyFirstModule.HomePage.text7",
                                    class: "mx-name-text7 text-primary spacing-outer-bottom-none",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Sales Order Draft" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "h5"
                                  }
                                )
                              ],
                              ariaHidden: false
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
                  key: "p35.MyFirstModule.HomePage.layoutGrid1$row2",
                  $widgetId: "p35.MyFirstModule.HomePage.layoutGrid1$row2",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p35.MyFirstModule.HomePage.layoutGrid1$row2$column0",
                        $widgetId: "p35.MyFirstModule.HomePage.layoutGrid1$row2$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: void 0
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p35.MyFirstModule.HomePage.layoutGrid1$row2$column1",
                        $widgetId: "p35.MyFirstModule.HomePage.layoutGrid1$row2$column1",
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
      ],
      ariaHidden: false
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
