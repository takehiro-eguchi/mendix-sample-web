import { reactExports, asPluginWidgets, selectTranslation } from '../index-BCA8X3MP.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BdzcW3SP.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-DKuecUbx.js';
import { ListActionProperty } from '../ListActionProperty-CoCCB2vR.js';
import { ListAttributeProperty } from '../ListAttributeProperty-ByudWBDe.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-BFmsrEg-.js';
import { Container } from '../Container-CxVkjo8s.js';
import { ListView } from '../ListView-B1Yau7GF.js';
import { Text } from '../Text-BH0JoxPZ.js';
import { content as content$1 } from '../Atlas_Core.Phone_BottomBar-DTsxBWvg.js';
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
const { $ListView, $Container, $Text } = asPluginWidgets({ ListView, Container, Text });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $ListView,
    {
      key: "p29.MyFirstModule.CuttomerMobilePage.listView3",
      $widgetId: "p29.MyFirstModule.CuttomerMobilePage.listView3",
      class: "mx-name-listView3 listview-lined listview-hover",
      style: void 0,
      listValue: DatabaseObjectListProperty({
        "dataSourceId": "p29.0",
        "entity": "MyFirstModule.Customers",
        "operationId": "CDWzLar461yjypd8sLNc4g",
        "sort": []
      }),
      searchAttributes: [
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Customers",
          "attribute": "FirstName",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p29.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Customers",
          "attribute": "LastName",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p29.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Customers",
          "attribute": "MailAddress",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p29.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Customers",
          "attribute": "PhoneNumber",
          "attributeType": "String",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p29.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Customers",
          "attribute": "AverageYearlyIncome",
          "attributeType": "Decimal",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p29.0",
          "isList": false
        }),
        ListAttributeProperty({
          "path": "",
          "entity": "MyFirstModule.Customers",
          "attribute": "AverageSalesOrderQuantity",
          "attributeType": "Integer",
          "sortable": true,
          "filterable": true,
          "dataSourceId": "p29.0",
          "isList": false
        })
      ],
      itemTemplate: TemplatedWidgetProperty({
        "dataSourceId": "p29.0",
        "editable": false,
        "children": () => [
          /* @__PURE__ */ React.createElement(
            $Container,
            {
              key: "p29.MyFirstModule.CuttomerMobilePage.container1",
              $widgetId: "p29.MyFirstModule.CuttomerMobilePage.container1",
              class: "mx-name-container1",
              style: void 0,
              renderMode: "div",
              onClick: void 0,
              content: [
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p29.MyFirstModule.CuttomerMobilePage.text10",
                    $widgetId: "p29.MyFirstModule.CuttomerMobilePage.text10",
                    class: "mx-name-text10 text-bold",
                    style: void 0,
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "\u540D\u524D\u3000\uFF1A" }, "args": {} }
                      })
                    ]),
                    renderMode: "span"
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p29.MyFirstModule.CuttomerMobilePage.text1",
                    $widgetId: "p29.MyFirstModule.CuttomerMobilePage.text1",
                    class: "mx-name-text1",
                    style: void 0,
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "FirstName" }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                      })
                    ]),
                    renderMode: "span"
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p29.MyFirstModule.CuttomerMobilePage.text2",
                    $widgetId: "p29.MyFirstModule.CuttomerMobilePage.text2",
                    class: "mx-name-text2",
                    style: void 0,
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": " " }, { "type": "variable", "variable": "currentObject", "path": "LastName" }] }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                      })
                    ]),
                    renderMode: "span"
                  }
                )
              ],
              ariaHidden: false
            }
          ),
          /* @__PURE__ */ React.createElement(
            $Container,
            {
              key: "p29.MyFirstModule.CuttomerMobilePage.container2",
              $widgetId: "p29.MyFirstModule.CuttomerMobilePage.container2",
              class: "mx-name-container2",
              style: void 0,
              renderMode: "div",
              onClick: void 0,
              content: [
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p29.MyFirstModule.CuttomerMobilePage.text11",
                    $widgetId: "p29.MyFirstModule.CuttomerMobilePage.text11",
                    class: "mx-name-text11 text-bold",
                    style: void 0,
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "\u8A95\u751F\u65E5\uFF1A" }, "args": {} }
                      })
                    ]),
                    renderMode: "span"
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Text,
                  {
                    key: "p29.MyFirstModule.CuttomerMobilePage.text3",
                    $widgetId: "p29.MyFirstModule.CuttomerMobilePage.text3",
                    class: "mx-name-text3",
                    style: void 0,
                    caption: selectTranslation([
                      ExpressionProperty({
                        "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "BirthDate" }, { "type": "literal", "value": '{"type":"date"}' }] }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                      })
                    ]),
                    renderMode: "span"
                  }
                ),
                /* @__PURE__ */ React.createElement(
                  $Container,
                  {
                    key: "p29.MyFirstModule.CuttomerMobilePage.container3",
                    $widgetId: "p29.MyFirstModule.CuttomerMobilePage.container3",
                    class: "mx-name-container3",
                    style: void 0,
                    renderMode: "div",
                    onClick: void 0,
                    content: [
                      /* @__PURE__ */ React.createElement(
                        $Text,
                        {
                          key: "p29.MyFirstModule.CuttomerMobilePage.text12",
                          $widgetId: "p29.MyFirstModule.CuttomerMobilePage.text12",
                          class: "mx-name-text12 text-bold",
                          style: void 0,
                          caption: selectTranslation([
                            ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": "\u6027\u5225\u3000\uFF1A" }, "args": {} }
                            })
                          ]),
                          renderMode: "span"
                        }
                      ),
                      /* @__PURE__ */ React.createElement(
                        $Text,
                        {
                          key: "p29.MyFirstModule.CuttomerMobilePage.text5",
                          $widgetId: "p29.MyFirstModule.CuttomerMobilePage.text5",
                          class: "mx-name-text5",
                          style: void 0,
                          caption: selectTranslation([
                            ExpressionProperty({
                              "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Gender" }, { "type": "literal", "value": "MyFirstModule.Gender" }] }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                            })
                          ]),
                          renderMode: "span"
                        }
                      ),
                      /* @__PURE__ */ React.createElement(
                        $Text,
                        {
                          key: "p29.MyFirstModule.CuttomerMobilePage.text4",
                          $widgetId: "p29.MyFirstModule.CuttomerMobilePage.text4",
                          class: "mx-name-text4",
                          style: void 0,
                          caption: selectTranslation([
                            ExpressionProperty({
                              "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "\uFF08" }, { "type": "function", "name": "getCaption", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "MaritialStatus" }, { "type": "literal", "value": "MyFirstModule.MaritialStatus" }] }] }, { "type": "literal", "value": "\uFF09" }] }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                            })
                          ]),
                          renderMode: "span"
                        }
                      ),
                      /* @__PURE__ */ React.createElement(
                        $Container,
                        {
                          key: "p29.MyFirstModule.CuttomerMobilePage.container4",
                          $widgetId: "p29.MyFirstModule.CuttomerMobilePage.container4",
                          class: "mx-name-container4",
                          style: void 0,
                          renderMode: "div",
                          onClick: void 0,
                          content: [
                            /* @__PURE__ */ React.createElement(
                              $Text,
                              {
                                key: "p29.MyFirstModule.CuttomerMobilePage.text13",
                                $widgetId: "p29.MyFirstModule.CuttomerMobilePage.text13",
                                class: "mx-name-text13 text-bold",
                                style: void 0,
                                caption: selectTranslation([
                                  ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "\u9023\u7D61\u5148\uFF1A" }, "args": {} }
                                  })
                                ]),
                                renderMode: "span"
                              }
                            ),
                            /* @__PURE__ */ React.createElement(
                              $Text,
                              {
                                key: "p29.MyFirstModule.CuttomerMobilePage.text7",
                                $widgetId: "p29.MyFirstModule.CuttomerMobilePage.text7",
                                class: "mx-name-text7",
                                style: void 0,
                                caption: selectTranslation([
                                  ExpressionProperty({
                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "PhoneNumber" }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                                  })
                                ]),
                                renderMode: "span"
                              }
                            ),
                            /* @__PURE__ */ React.createElement(
                              $Text,
                              {
                                key: "p29.MyFirstModule.CuttomerMobilePage.text6",
                                $widgetId: "p29.MyFirstModule.CuttomerMobilePage.text6",
                                class: "mx-name-text6",
                                style: void 0,
                                caption: selectTranslation([
                                  ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "\uFF08" }, { "type": "variable", "variable": "currentObject", "path": "MailAddress" }] }, { "type": "literal", "value": "\uFF09" }] }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                                  })
                                ]),
                                renderMode: "span"
                              }
                            ),
                            /* @__PURE__ */ React.createElement(
                              $Container,
                              {
                                key: "p29.MyFirstModule.CuttomerMobilePage.container5",
                                $widgetId: "p29.MyFirstModule.CuttomerMobilePage.container5",
                                class: "mx-name-container5",
                                style: void 0,
                                renderMode: "div",
                                onClick: void 0,
                                content: [
                                  /* @__PURE__ */ React.createElement(
                                    $Text,
                                    {
                                      key: "p29.MyFirstModule.CuttomerMobilePage.text14",
                                      $widgetId: "p29.MyFirstModule.CuttomerMobilePage.text14",
                                      class: "mx-name-text14 text-bold",
                                      style: void 0,
                                      caption: selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "literal", "value": "\u53CE\u5165\u3000\uFF1A" }, "args": {} }
                                        })
                                      ]),
                                      renderMode: "span"
                                    }
                                  ),
                                  /* @__PURE__ */ React.createElement(
                                    $Text,
                                    {
                                      key: "p29.MyFirstModule.CuttomerMobilePage.text8",
                                      $widgetId: "p29.MyFirstModule.CuttomerMobilePage.text8",
                                      class: "mx-name-text8",
                                      style: void 0,
                                      caption: selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AverageYearlyIncome" }, { "type": "literal", "value": '{"decimalPrecision":2}' }] }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                                        })
                                      ]),
                                      renderMode: "span"
                                    }
                                  ),
                                  /* @__PURE__ */ React.createElement(
                                    $Text,
                                    {
                                      key: "p29.MyFirstModule.CuttomerMobilePage.text9",
                                      $widgetId: "p29.MyFirstModule.CuttomerMobilePage.text9",
                                      class: "mx-name-text9",
                                      style: void 0,
                                      caption: selectTranslation([
                                        ExpressionProperty({
                                          "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "| " }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AverageSalesOrderQuantity" }, { "type": "literal", "value": "{}" }] }] }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                                        })
                                      ]),
                                      renderMode: "span"
                                    }
                                  )
                                ],
                                ariaHidden: false
                              }
                            )
                          ],
                          ariaHidden: false
                        }
                      )
                    ],
                    ariaHidden: false
                  }
                )
              ],
              ariaHidden: false
            }
          )
        ]
      }),
      onClick: ListActionProperty({
        "action": { "type": "openPage", "argMap": { "param$Customers": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } }, "config": { "name": "MyFirstModule/Customers_EditView.page.xml", "location": "content" }, "disabledDuringExecution": true },
        "abortOnServerValidation": false,
        "dataSourceId": "p29.0"
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
