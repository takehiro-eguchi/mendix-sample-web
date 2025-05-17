import { reactExports, asPluginWidgets, selectTranslation } from '../index-DsLjkJno.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-CE-u0OT2.js';
import { ActionProperty } from '../ActionProperty-BTILmUmE.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-YUXxnGjk.js';
import { ListAttributeProperty } from '../ListAttributeProperty-CdJB2qIy.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-BfE9ukAc.js';
import { TextProperty } from '../Icon-CD3-QqtZ.js';
import { WebIconProperty } from '../WebIconProperty-B88sVxeT.js';
import { ActionButton } from '../ActionButton-C4Tg9t6b.js';
import { Container } from '../Container-DwlZ5IDZ.js';
import { DatagridWidgetModule } from '../Datagrid-BaS4Vf7J.js';
import { DatagridDateFilterWidgetModule } from '../DatagridDateFilter-i1pvoQ7K.js';
import { DatagridNumberFilterWidgetModule } from '../DatagridNumberFilter-DftkNU0H.js';
import { Div } from '../Div-DGtcc-SO.js';
import { Text } from '../Text-DR32TaDK.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-CPl-t0Ao.js';
import '../BrzhM9fk-DIx2MmKD.js';
import '../BQa9VDC5-B8H0Gl41.js';
import '../Bgp-XL0v-CydxPoxA.js';
import '../Image-BTiL4qVa.js';
import '../InlineText-D7gieNIv.js';
import '../ListExpressionProperty-DJewd2cn.js';
import '../WebStaticImageProperty-D8DEVy4Y.js';
import '../DMc54HEs-DHjqPhQF.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridDateFilter = Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "DatagridDateFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "default")?.value;
const DatagridNumberFilter = Object.getOwnPropertyDescriptor(DatagridNumberFilterWidgetModule, "DatagridNumberFilter")?.value || Object.getOwnPropertyDescriptor(DatagridNumberFilterWidgetModule, "default")?.value;
const { $Div, $Container, $Text, $Datagrid, $DatagridNumberFilter, $DatagridDateFilter, $ActionButton } = asPluginWidgets({ Div, Container, Text, Datagrid, DatagridNumberFilter, DatagridDateFilter, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p24.MyFirstModule.SalesTrackingPage.layoutGrid4",
      $widgetId: "p24.MyFirstModule.SalesTrackingPage.layoutGrid4",
      class: "mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p24.MyFirstModule.SalesTrackingPage.layoutGrid4$row0",
            $widgetId: "p24.MyFirstModule.SalesTrackingPage.layoutGrid4$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p24.MyFirstModule.SalesTrackingPage.layoutGrid4$row0$column0",
                  $widgetId: "p24.MyFirstModule.SalesTrackingPage.layoutGrid4$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p24.MyFirstModule.SalesTrackingPage.container1",
                        $widgetId: "p24.MyFirstModule.SalesTrackingPage.container1",
                        class: "mx-name-container1 pageheader spacing-outer-bottom-large",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p24.MyFirstModule.SalesTrackingPage.layoutGrid2",
                              $widgetId: "p24.MyFirstModule.SalesTrackingPage.layoutGrid2",
                              class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p24.MyFirstModule.SalesTrackingPage.layoutGrid2$row0",
                                    $widgetId: "p24.MyFirstModule.SalesTrackingPage.layoutGrid2$row0",
                                    class: "row",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p24.MyFirstModule.SalesTrackingPage.layoutGrid2$row0$column0",
                                          $widgetId: "p24.MyFirstModule.SalesTrackingPage.layoutGrid2$row0$column0",
                                          class: "col-lg col-md col",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p24.MyFirstModule.SalesTrackingPage.text40",
                                                $widgetId: "p24.MyFirstModule.SalesTrackingPage.text40",
                                                class: "mx-name-text40 pageheader-title spacing-outer-bottom",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Sales Tracking Page" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "h1"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p24.MyFirstModule.SalesTrackingPage.text39",
                                                $widgetId: "p24.MyFirstModule.SalesTrackingPage.text39",
                                                class: "mx-name-text39 pageheader-subtitle text-detail spacing-outer-bottom-large",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Manage, add, delete, update your sales tracking." }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "p"
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
    $Datagrid,
    {
      key: "p24.MyFirstModule.SalesTrackingPage.dataGrid2_1",
      $widgetId: "p24.MyFirstModule.SalesTrackingPage.dataGrid2_1",
      advanced: false,
      datasource: DatabaseObjectListProperty({
        "dataSourceId": "p24.18",
        "entity": "MyFirstModule.SalesTrackingTable",
        "operationId": "EdnjlJOStFmbC7U5289R9Q",
        "sort": []
      }),
      refreshInterval: 0,
      itemSelectionMethod: "checkbox",
      itemSelectionMode: "clear",
      showSelectAllToggle: true,
      loadingType: "spinner",
      columns: [
        {
          "showContentAs": "attribute",
          "attribute": ListAttributeProperty({
            "path": "",
            "entity": "MyFirstModule.SalesTrackingTable",
            "attribute": "OrderQuantity",
            "attributeType": "Integer",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p24.18",
            "isList": false
          }),
          "content": void 0,
          "dynamicText": selectTranslation([
            void 0
          ]),
          "exportValue": selectTranslation([
            void 0
          ]),
          "header": selectTranslation([
            ExpressionProperty({
              "expression": { "expr": { "type": "literal", "value": "Order quantity" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridNumberFilter,
              {
                key: "p24.MyFirstModule.SalesTrackingPage.numberFilter1",
                $widgetId: "p24.MyFirstModule.SalesTrackingPage.numberFilter1",
                advanced: false,
                defaultValue: void 0,
                defaultFilter: "equal",
                placeholder: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                adjustable: true,
                delay: 500,
                onChange: void 0,
                screenReaderButtonCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                screenReaderInputCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                  })
                ]),
                class: "mx-name-numberFilter1",
                style: void 0,
                tabIndex: void 0
              }
            )
          ],
          "visible": ExpressionProperty({
            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
          }),
          "fetchOptionsLazy": true,
          "filterCaptionType": "expression",
          "sortable": true,
          "resizable": true,
          "draggable": true,
          "hidable": "yes",
          "allowEventPropagation": true,
          "width": "autoFill",
          "minWidth": "auto",
          "minWidthLimit": 100,
          "size": 1,
          "alignment": "right",
          "wrapText": false
        },
        {
          "showContentAs": "attribute",
          "attribute": ListAttributeProperty({
            "path": "",
            "entity": "MyFirstModule.SalesTrackingTable",
            "attribute": "UnitPrice",
            "attributeType": "Decimal",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p24.18",
            "isList": false
          }),
          "content": void 0,
          "dynamicText": selectTranslation([
            void 0
          ]),
          "exportValue": selectTranslation([
            void 0
          ]),
          "header": selectTranslation([
            ExpressionProperty({
              "expression": { "expr": { "type": "literal", "value": "Unit price" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridNumberFilter,
              {
                key: "p24.MyFirstModule.SalesTrackingPage.numberFilter2",
                $widgetId: "p24.MyFirstModule.SalesTrackingPage.numberFilter2",
                advanced: false,
                defaultValue: void 0,
                defaultFilter: "equal",
                placeholder: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                adjustable: true,
                delay: 500,
                onChange: void 0,
                screenReaderButtonCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                screenReaderInputCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                  })
                ]),
                class: "mx-name-numberFilter2",
                style: void 0,
                tabIndex: void 0
              }
            )
          ],
          "visible": ExpressionProperty({
            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
          }),
          "fetchOptionsLazy": true,
          "filterCaptionType": "expression",
          "sortable": true,
          "resizable": true,
          "draggable": true,
          "hidable": "yes",
          "allowEventPropagation": true,
          "width": "autoFill",
          "minWidth": "auto",
          "minWidthLimit": 100,
          "size": 1,
          "alignment": "right",
          "wrapText": false
        },
        {
          "showContentAs": "attribute",
          "attribute": ListAttributeProperty({
            "path": "",
            "entity": "MyFirstModule.SalesTrackingTable",
            "attribute": "DiscountAmount",
            "attributeType": "Decimal",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p24.18",
            "isList": false
          }),
          "content": void 0,
          "dynamicText": selectTranslation([
            void 0
          ]),
          "exportValue": selectTranslation([
            void 0
          ]),
          "header": selectTranslation([
            ExpressionProperty({
              "expression": { "expr": { "type": "literal", "value": "Discount amount" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridNumberFilter,
              {
                key: "p24.MyFirstModule.SalesTrackingPage.numberFilter3",
                $widgetId: "p24.MyFirstModule.SalesTrackingPage.numberFilter3",
                advanced: false,
                defaultValue: void 0,
                defaultFilter: "equal",
                placeholder: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                adjustable: true,
                delay: 500,
                onChange: void 0,
                screenReaderButtonCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                screenReaderInputCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                  })
                ]),
                class: "mx-name-numberFilter3",
                style: void 0,
                tabIndex: void 0
              }
            )
          ],
          "visible": ExpressionProperty({
            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
          }),
          "fetchOptionsLazy": true,
          "filterCaptionType": "expression",
          "sortable": true,
          "resizable": true,
          "draggable": true,
          "hidable": "yes",
          "allowEventPropagation": true,
          "width": "autoFill",
          "minWidth": "auto",
          "minWidthLimit": 100,
          "size": 1,
          "alignment": "right",
          "wrapText": false
        },
        {
          "showContentAs": "attribute",
          "attribute": ListAttributeProperty({
            "path": "",
            "entity": "MyFirstModule.SalesTrackingTable",
            "attribute": "ProductStandardCost",
            "attributeType": "Decimal",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p24.18",
            "isList": false
          }),
          "content": void 0,
          "dynamicText": selectTranslation([
            void 0
          ]),
          "exportValue": selectTranslation([
            void 0
          ]),
          "header": selectTranslation([
            ExpressionProperty({
              "expression": { "expr": { "type": "literal", "value": "Product standard cost" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridNumberFilter,
              {
                key: "p24.MyFirstModule.SalesTrackingPage.numberFilter4",
                $widgetId: "p24.MyFirstModule.SalesTrackingPage.numberFilter4",
                advanced: false,
                defaultValue: void 0,
                defaultFilter: "equal",
                placeholder: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                adjustable: true,
                delay: 500,
                onChange: void 0,
                screenReaderButtonCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                screenReaderInputCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                  })
                ]),
                class: "mx-name-numberFilter4",
                style: void 0,
                tabIndex: void 0
              }
            )
          ],
          "visible": ExpressionProperty({
            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
          }),
          "fetchOptionsLazy": true,
          "filterCaptionType": "expression",
          "sortable": true,
          "resizable": true,
          "draggable": true,
          "hidable": "yes",
          "allowEventPropagation": true,
          "width": "autoFill",
          "minWidth": "auto",
          "minWidthLimit": 100,
          "size": 1,
          "alignment": "right",
          "wrapText": false
        },
        {
          "showContentAs": "attribute",
          "attribute": ListAttributeProperty({
            "path": "",
            "entity": "MyFirstModule.SalesTrackingTable",
            "attribute": "TaxAmt",
            "attributeType": "Decimal",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p24.18",
            "isList": false
          }),
          "content": void 0,
          "dynamicText": selectTranslation([
            void 0
          ]),
          "exportValue": selectTranslation([
            void 0
          ]),
          "header": selectTranslation([
            ExpressionProperty({
              "expression": { "expr": { "type": "literal", "value": "Tax amt" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridNumberFilter,
              {
                key: "p24.MyFirstModule.SalesTrackingPage.numberFilter5",
                $widgetId: "p24.MyFirstModule.SalesTrackingPage.numberFilter5",
                advanced: false,
                defaultValue: void 0,
                defaultFilter: "equal",
                placeholder: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                adjustable: true,
                delay: 500,
                onChange: void 0,
                screenReaderButtonCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                screenReaderInputCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                  })
                ]),
                class: "mx-name-numberFilter5",
                style: void 0,
                tabIndex: void 0
              }
            )
          ],
          "visible": ExpressionProperty({
            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
          }),
          "fetchOptionsLazy": true,
          "filterCaptionType": "expression",
          "sortable": true,
          "resizable": true,
          "draggable": true,
          "hidable": "yes",
          "allowEventPropagation": true,
          "width": "autoFill",
          "minWidth": "auto",
          "minWidthLimit": 100,
          "size": 1,
          "alignment": "right",
          "wrapText": false
        },
        {
          "showContentAs": "attribute",
          "attribute": ListAttributeProperty({
            "path": "",
            "entity": "MyFirstModule.SalesTrackingTable",
            "attribute": "OrderDate",
            "attributeType": "DateTime",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p24.18",
            "isList": false
          }),
          "content": void 0,
          "dynamicText": selectTranslation([
            void 0
          ]),
          "exportValue": selectTranslation([
            void 0
          ]),
          "header": selectTranslation([
            ExpressionProperty({
              "expression": { "expr": { "type": "literal", "value": "Order date" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridDateFilter,
              {
                key: "p24.MyFirstModule.SalesTrackingPage.dateFilter1",
                $widgetId: "p24.MyFirstModule.SalesTrackingPage.dateFilter1",
                advanced: false,
                defaultValue: void 0,
                defaultStartDate: void 0,
                defaultEndDate: void 0,
                defaultFilter: "equal",
                placeholder: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                adjustable: true,
                onChange: void 0,
                screenReaderButtonCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                screenReaderCalendarCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                screenReaderInputCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                class: "mx-name-dateFilter1",
                style: void 0,
                tabIndex: void 0
              }
            )
          ],
          "visible": ExpressionProperty({
            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
          }),
          "fetchOptionsLazy": true,
          "filterCaptionType": "expression",
          "sortable": true,
          "resizable": true,
          "draggable": true,
          "hidable": "yes",
          "allowEventPropagation": true,
          "width": "autoFill",
          "minWidth": "auto",
          "minWidthLimit": 100,
          "size": 1,
          "alignment": "left",
          "wrapText": false
        },
        {
          "showContentAs": "attribute",
          "attribute": ListAttributeProperty({
            "path": "",
            "entity": "MyFirstModule.SalesTrackingTable",
            "attribute": "ShipDate",
            "attributeType": "DateTime",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p24.18",
            "isList": false
          }),
          "content": void 0,
          "dynamicText": selectTranslation([
            void 0
          ]),
          "exportValue": selectTranslation([
            void 0
          ]),
          "header": selectTranslation([
            ExpressionProperty({
              "expression": { "expr": { "type": "literal", "value": "Ship date" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridDateFilter,
              {
                key: "p24.MyFirstModule.SalesTrackingPage.dateFilter2",
                $widgetId: "p24.MyFirstModule.SalesTrackingPage.dateFilter2",
                advanced: false,
                defaultValue: void 0,
                defaultStartDate: void 0,
                defaultEndDate: void 0,
                defaultFilter: "equal",
                placeholder: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                adjustable: true,
                onChange: void 0,
                screenReaderButtonCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                screenReaderCalendarCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                screenReaderInputCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                class: "mx-name-dateFilter2",
                style: void 0,
                tabIndex: void 0
              }
            )
          ],
          "visible": ExpressionProperty({
            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
          }),
          "fetchOptionsLazy": true,
          "filterCaptionType": "expression",
          "sortable": true,
          "resizable": true,
          "draggable": true,
          "hidable": "yes",
          "allowEventPropagation": true,
          "width": "autoFill",
          "minWidth": "auto",
          "minWidthLimit": 100,
          "size": 1,
          "alignment": "left",
          "wrapText": false
        },
        {
          "showContentAs": "attribute",
          "attribute": ListAttributeProperty({
            "path": "",
            "entity": "MyFirstModule.SalesTrackingTable",
            "attribute": "DueDate",
            "attributeType": "DateTime",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p24.18",
            "isList": false
          }),
          "content": void 0,
          "dynamicText": selectTranslation([
            void 0
          ]),
          "exportValue": selectTranslation([
            void 0
          ]),
          "header": selectTranslation([
            ExpressionProperty({
              "expression": { "expr": { "type": "literal", "value": "Due date" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridDateFilter,
              {
                key: "p24.MyFirstModule.SalesTrackingPage.dateFilter3",
                $widgetId: "p24.MyFirstModule.SalesTrackingPage.dateFilter3",
                advanced: false,
                defaultValue: void 0,
                defaultStartDate: void 0,
                defaultEndDate: void 0,
                defaultFilter: "equal",
                placeholder: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                adjustable: true,
                onChange: void 0,
                screenReaderButtonCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                screenReaderCalendarCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                screenReaderInputCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                class: "mx-name-dateFilter3",
                style: void 0,
                tabIndex: void 0
              }
            )
          ],
          "visible": ExpressionProperty({
            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
          }),
          "fetchOptionsLazy": true,
          "filterCaptionType": "expression",
          "sortable": true,
          "resizable": true,
          "draggable": true,
          "hidable": "yes",
          "allowEventPropagation": true,
          "width": "autoFill",
          "minWidth": "auto",
          "minWidthLimit": 100,
          "size": 1,
          "alignment": "left",
          "wrapText": false
        },
        {
          "showContentAs": "attribute",
          "attribute": ListAttributeProperty({
            "path": "MyFirstModule.SalesTrackingTable_Customers/MyFirstModule.Customers",
            "entity": "MyFirstModule.Customers",
            "attribute": "FirstName",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p24.18",
            "isList": false
          }),
          "content": void 0,
          "dynamicText": selectTranslation([
            void 0
          ]),
          "exportValue": selectTranslation([
            void 0
          ]),
          "header": selectTranslation([
            ExpressionProperty({
              "expression": { "expr": { "type": "literal", "value": "FirstName" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": void 0,
          "visible": ExpressionProperty({
            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
          }),
          "fetchOptionsLazy": true,
          "filterCaptionType": "expression",
          "sortable": true,
          "resizable": true,
          "draggable": true,
          "hidable": "yes",
          "allowEventPropagation": true,
          "width": "autoFill",
          "minWidth": "auto",
          "minWidthLimit": 100,
          "size": 1,
          "alignment": "left",
          "wrapText": false
        },
        {
          "showContentAs": "attribute",
          "attribute": ListAttributeProperty({
            "path": "MyFirstModule.SalesTrackingTable_Locations/MyFirstModule.Locations",
            "entity": "MyFirstModule.Locations",
            "attribute": "State",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p24.18",
            "isList": false
          }),
          "content": void 0,
          "dynamicText": selectTranslation([
            void 0
          ]),
          "exportValue": selectTranslation([
            void 0
          ]),
          "header": selectTranslation([
            ExpressionProperty({
              "expression": { "expr": { "type": "literal", "value": "State" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": void 0,
          "visible": ExpressionProperty({
            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
          }),
          "fetchOptionsLazy": true,
          "filterCaptionType": "expression",
          "sortable": true,
          "resizable": true,
          "draggable": true,
          "hidable": "yes",
          "allowEventPropagation": true,
          "width": "autoFill",
          "minWidth": "auto",
          "minWidthLimit": 100,
          "size": 1,
          "alignment": "left",
          "wrapText": false
        },
        {
          "showContentAs": "customContent",
          "attribute": ListAttributeProperty({
            "path": "",
            "entity": "MyFirstModule.SalesTrackingTable",
            "attribute": "OrderQuantity",
            "attributeType": "Integer",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p24.18",
            "isList": false
          }),
          "content": TemplatedWidgetProperty({
            "dataSourceId": "p24.18",
            "editable": false,
            "children": () => [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p24.MyFirstModule.SalesTrackingPage.actionButton1",
                  $widgetId: "p24.MyFirstModule.SalesTrackingPage.actionButton1",
                  buttonId: "p24.MyFirstModule.SalesTrackingPage.actionButton1",
                  class: "mx-name-actionButton1 btn-lg",
                  style: void 0,
                  tabIndex: void 0,
                  renderType: "link",
                  role: "button",
                  buttonClass: "btn-primary",
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
                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-pencil" }
                  }),
                  action: ActionProperty({
                    "action": { "type": "openPage", "argMap": { "param$SalesTrackingTable": { "widget": "p24.MyFirstModule.SalesTrackingPage.dataGrid2_1", "source": "object" } }, "config": { "name": "MyFirstModule/SalesTrackingTable_NewEdit.page.xml", "location": "content" }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                  })
                }
              ),
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p24.MyFirstModule.SalesTrackingPage.actionButton2",
                  $widgetId: "p24.MyFirstModule.SalesTrackingPage.actionButton2",
                  buttonId: "p24.MyFirstModule.SalesTrackingPage.actionButton2",
                  class: "mx-name-actionButton2 btn-lg",
                  style: void 0,
                  tabIndex: void 0,
                  renderType: "link",
                  role: "button",
                  buttonClass: "btn-primary",
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
                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-trash-can" }
                  }),
                  action: ActionProperty({
                    "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p24.MyFirstModule.SalesTrackingPage.dataGrid2_1", "source": "object" } }, "config": { "closePage": false, "operationId": "6IKFfEynSFycFdce8e4XmA" }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                  })
                }
              )
            ]
          }),
          "dynamicText": selectTranslation([
            void 0
          ]),
          "exportValue": selectTranslation([
            void 0
          ]),
          "header": selectTranslation([
            ExpressionProperty({
              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": void 0,
          "visible": ExpressionProperty({
            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
          }),
          "fetchOptionsLazy": true,
          "filterCaptionType": "expression",
          "sortable": false,
          "resizable": true,
          "draggable": true,
          "hidable": "no",
          "allowEventPropagation": true,
          "width": "autoFit",
          "minWidth": "auto",
          "minWidthLimit": 100,
          "size": 1,
          "alignment": "left",
          "wrapText": false
        }
      ],
      columnsFilterable: true,
      pageSize: 20,
      pagination: "buttons",
      showPagingButtons: "always",
      showNumberOfRows: false,
      pagingPosition: "bottom",
      loadMoreButtonCaption: selectTranslation([
        ExpressionProperty({
          "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
        })
      ]),
      showEmptyPlaceholder: "none",
      emptyPlaceholder: void 0,
      rowClass: void 0,
      onClickTrigger: "single",
      onClick: void 0,
      onSelectionChange: void 0,
      columnsSortable: true,
      columnsResizable: true,
      columnsDraggable: true,
      columnsHidable: true,
      configurationStorageType: "attribute",
      storeFiltersInPersonalization: true,
      filterList: [],
      filtersPlaceholder: [
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
            key: "p24.MyFirstModule.SalesTrackingPage.actionButton3",
            $widgetId: "p24.MyFirstModule.SalesTrackingPage.actionButton3",
            buttonId: "p24.MyFirstModule.SalesTrackingPage.actionButton3",
            class: "mx-name-actionButton3",
            style: void 0,
            tabIndex: void 0,
            renderType: "button",
            role: void 0,
            buttonClass: "btn-primary",
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "New Sales tracking table" }, "args": {} }
              })
            ]),
            tooltip: TextProperty({
              "value": selectTranslation([
                ""
              ])
            }),
            icon: WebIconProperty({
              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-add" }
            }),
            action: ActionProperty({
              "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.SalesTrackingTable", "operationId": "6LqLgyBNxVKjcwybkc71nw", "pageSettings": { "name": "MyFirstModule/SalesTrackingTable_NewEdit.page.xml", "location": "content" }, "objectParameter": "param$SalesTrackingTable" }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        )
      ],
      filterSectionTitle: selectTranslation([
        ExpressionProperty({
          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
        })
      ]),
      exportDialogLabel: selectTranslation([
        ExpressionProperty({
          "expression": { "expr": { "type": "literal", "value": "Export progress" }, "args": {} }
        })
      ]),
      cancelExportLabel: selectTranslation([
        ExpressionProperty({
          "expression": { "expr": { "type": "literal", "value": "Cancel data export" }, "args": {} }
        })
      ]),
      selectRowLabel: selectTranslation([
        ExpressionProperty({
          "expression": { "expr": { "type": "literal", "value": "Select row" }, "args": {} }
        })
      ]),
      class: "mx-name-dataGrid2_1",
      style: void 0,
      tabIndex: void 0
    }
  )
]);
const title = selectTranslation([
  "Page"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
