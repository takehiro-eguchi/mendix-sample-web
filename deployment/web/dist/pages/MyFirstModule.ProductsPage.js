import { reactExports, asPluginWidgets, selectTranslation } from '../index-lDZbtAHK.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-CiGAZyLQ.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-Dr8i0yjm.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-BYePFRyK.js';
import { ListAttributeProperty } from '../ListAttributeProperty-B1wQvYge.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-B0dcvEB8.js';
import { WebIconProperty } from '../WebIconProperty-cd8xjTAJ.js';
import { Container } from '../Image-BImigOxk.js';
import { DatagridWidgetModule } from '../Datagrid-B1CA748-.js';
import { DatagridDropdownFilterWidgetModule } from '../DatagridDropdownFilter-DJqO107-.js';
import { DatagridNumberFilterWidgetModule } from '../DatagridNumberFilter-CZl258qA.js';
import { DatagridTextFilterWidgetModule } from '../DatagridTextFilter-IQT4i7Df.js';
import { Div } from '../Div-DFdMVjtU.js';
import { Text } from '../Text-DNQkDjEw.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default--Py_FdGo.js';
import '../BrzhM9fk-jMkfAVmt.js';
import '../Bgp-XL0v-DW6BUmyg.js';
import '../InlineText-CysQN2Fr.js';
import '../ListExpressionProperty-C9mAXjYp.js';
import '../WebStaticImageProperty-PMDPRPuR.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridDropdownFilter = Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "DatagridDropdownFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "default")?.value;
const DatagridNumberFilter = Object.getOwnPropertyDescriptor(DatagridNumberFilterWidgetModule, "DatagridNumberFilter")?.value || Object.getOwnPropertyDescriptor(DatagridNumberFilterWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Div, $Container, $Text, $Datagrid, $DatagridTextFilter, $DatagridDropdownFilter, $DatagridNumberFilter, $ActionButton } = asPluginWidgets({ Div, Container, Text, Datagrid, DatagridTextFilter, DatagridDropdownFilter, DatagridNumberFilter, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p31.MyFirstModule.ProductsPage.layoutGrid4",
      $widgetId: "p31.MyFirstModule.ProductsPage.layoutGrid4",
      class: "mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p31.MyFirstModule.ProductsPage.layoutGrid4$row0",
            $widgetId: "p31.MyFirstModule.ProductsPage.layoutGrid4$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p31.MyFirstModule.ProductsPage.layoutGrid4$row0$column0",
                  $widgetId: "p31.MyFirstModule.ProductsPage.layoutGrid4$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p31.MyFirstModule.ProductsPage.container1",
                        $widgetId: "p31.MyFirstModule.ProductsPage.container1",
                        class: "mx-name-container1 pageheader spacing-outer-bottom-large",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p31.MyFirstModule.ProductsPage.layoutGrid2",
                              $widgetId: "p31.MyFirstModule.ProductsPage.layoutGrid2",
                              class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p31.MyFirstModule.ProductsPage.layoutGrid2$row0",
                                    $widgetId: "p31.MyFirstModule.ProductsPage.layoutGrid2$row0",
                                    class: "row",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p31.MyFirstModule.ProductsPage.layoutGrid2$row0$column0",
                                          $widgetId: "p31.MyFirstModule.ProductsPage.layoutGrid2$row0$column0",
                                          class: "col-lg col-md col",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p31.MyFirstModule.ProductsPage.text40",
                                                $widgetId: "p31.MyFirstModule.ProductsPage.text40",
                                                class: "mx-name-text40 pageheader-title spacing-outer-bottom",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Products Page" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "h1"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p31.MyFirstModule.ProductsPage.text39",
                                                $widgetId: "p31.MyFirstModule.ProductsPage.text39",
                                                class: "mx-name-text39 pageheader-subtitle text-detail spacing-outer-bottom-large",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Manage, add, delete, update your products." }, "args": {} }
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
      key: "p31.MyFirstModule.ProductsPage.dataGrid2_1",
      $widgetId: "p31.MyFirstModule.ProductsPage.dataGrid2_1",
      advanced: false,
      datasource: DatabaseObjectListProperty({
        "dataSourceId": "p31.18",
        "entity": "MyFirstModule.Products",
        "operationId": "1H2FFrg1dFiEDy0PH5QhDw",
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
            "entity": "MyFirstModule.Products",
            "attribute": "ProductName",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p31.18",
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
              "expression": { "expr": { "type": "literal", "value": "Product name" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridTextFilter,
              {
                key: "p31.MyFirstModule.ProductsPage.textFilter1",
                $widgetId: "p31.MyFirstModule.ProductsPage.textFilter1",
                advanced: false,
                defaultValue: void 0,
                defaultFilter: "contains",
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
                class: "mx-name-textFilter1",
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
            "entity": "MyFirstModule.Products",
            "attribute": "Color",
            "attributeType": "Enum",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p31.18",
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
              "expression": { "expr": { "type": "literal", "value": "Color" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridDropdownFilter,
              {
                key: "p31.MyFirstModule.ProductsPage.drop_downFilter1",
                $widgetId: "p31.MyFirstModule.ProductsPage.drop_downFilter1",
                auto: true,
                defaultValue: void 0,
                filterOptions: [],
                filterable: false,
                multiSelect: false,
                emptyOptionCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                clearable: true,
                selectedItemsStyle: "text",
                selectionMethod: "checkbox",
                onChange: void 0,
                ariaLabel: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                class: "mx-name-drop_downFilter1",
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
            "entity": "MyFirstModule.Products",
            "attribute": "SafetyStockLevel",
            "attributeType": "Integer",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p31.18",
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
              "expression": { "expr": { "type": "literal", "value": "Safety stock level" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridNumberFilter,
              {
                key: "p31.MyFirstModule.ProductsPage.numberFilter1",
                $widgetId: "p31.MyFirstModule.ProductsPage.numberFilter1",
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
            "entity": "MyFirstModule.Products",
            "attribute": "ListPrice",
            "attributeType": "Decimal",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p31.18",
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
              "expression": { "expr": { "type": "literal", "value": "List price" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridNumberFilter,
              {
                key: "p31.MyFirstModule.ProductsPage.numberFilter2",
                $widgetId: "p31.MyFirstModule.ProductsPage.numberFilter2",
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
            "entity": "MyFirstModule.Products",
            "attribute": "Size",
            "attributeType": "Enum",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p31.18",
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
              "expression": { "expr": { "type": "literal", "value": "Size" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridDropdownFilter,
              {
                key: "p31.MyFirstModule.ProductsPage.drop_downFilter2",
                $widgetId: "p31.MyFirstModule.ProductsPage.drop_downFilter2",
                auto: true,
                defaultValue: void 0,
                filterOptions: [],
                filterable: false,
                multiSelect: false,
                emptyOptionCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                clearable: true,
                selectedItemsStyle: "text",
                selectionMethod: "checkbox",
                onChange: void 0,
                ariaLabel: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                class: "mx-name-drop_downFilter2",
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
            "entity": "MyFirstModule.Products",
            "attribute": "Weight",
            "attributeType": "Decimal",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p31.18",
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
              "expression": { "expr": { "type": "literal", "value": "Weight" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridNumberFilter,
              {
                key: "p31.MyFirstModule.ProductsPage.numberFilter3",
                $widgetId: "p31.MyFirstModule.ProductsPage.numberFilter3",
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
            "entity": "MyFirstModule.Products",
            "attribute": "Style",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p31.18",
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
              "expression": { "expr": { "type": "literal", "value": "Style" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridTextFilter,
              {
                key: "p31.MyFirstModule.ProductsPage.textFilter2",
                $widgetId: "p31.MyFirstModule.ProductsPage.textFilter2",
                advanced: false,
                defaultValue: void 0,
                defaultFilter: "contains",
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
                class: "mx-name-textFilter2",
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
            "entity": "MyFirstModule.Products",
            "attribute": "ModelName",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p31.18",
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
              "expression": { "expr": { "type": "literal", "value": "Model name" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridTextFilter,
              {
                key: "p31.MyFirstModule.ProductsPage.textFilter3",
                $widgetId: "p31.MyFirstModule.ProductsPage.textFilter3",
                advanced: false,
                defaultValue: void 0,
                defaultFilter: "contains",
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
                class: "mx-name-textFilter3",
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
            "entity": "MyFirstModule.Products",
            "attribute": "Status",
            "attributeType": "Enum",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p31.18",
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
              "expression": { "expr": { "type": "literal", "value": "Status" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridDropdownFilter,
              {
                key: "p31.MyFirstModule.ProductsPage.drop_downFilter3",
                $widgetId: "p31.MyFirstModule.ProductsPage.drop_downFilter3",
                auto: true,
                defaultValue: void 0,
                filterOptions: [],
                filterable: false,
                multiSelect: false,
                emptyOptionCaption: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                clearable: true,
                selectedItemsStyle: "text",
                selectionMethod: "checkbox",
                onChange: void 0,
                ariaLabel: selectTranslation([
                  ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                  })
                ]),
                class: "mx-name-drop_downFilter3",
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
          "showContentAs": "customContent",
          "attribute": ListAttributeProperty({
            "path": "",
            "entity": "MyFirstModule.Products",
            "attribute": "ProductName",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p31.18",
            "isList": false
          }),
          "content": TemplatedWidgetProperty({
            "dataSourceId": "p31.18",
            "editable": false,
            "children": () => [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p31.MyFirstModule.ProductsPage.actionButton1",
                  $widgetId: "p31.MyFirstModule.ProductsPage.actionButton1",
                  buttonId: "p31.MyFirstModule.ProductsPage.actionButton1",
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
                    "action": { "type": "openPage", "argMap": { "param$Products": { "widget": "p31.MyFirstModule.ProductsPage.dataGrid2_1", "source": "object" } }, "config": { "name": "MyFirstModule/Products_NewEdit.page.xml", "location": "content" }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                  })
                }
              ),
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p31.MyFirstModule.ProductsPage.actionButton2",
                  $widgetId: "p31.MyFirstModule.ProductsPage.actionButton2",
                  buttonId: "p31.MyFirstModule.ProductsPage.actionButton2",
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
                    "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p31.MyFirstModule.ProductsPage.dataGrid2_1", "source": "object" } }, "config": { "closePage": false, "operationId": "xfWzwaNEpVWNOjC4UALCSw" }, "disabledDuringExecution": true },
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
            key: "p31.MyFirstModule.ProductsPage.actionButton3",
            $widgetId: "p31.MyFirstModule.ProductsPage.actionButton3",
            buttonId: "p31.MyFirstModule.ProductsPage.actionButton3",
            class: "mx-name-actionButton3",
            style: void 0,
            tabIndex: void 0,
            renderType: "button",
            role: void 0,
            buttonClass: "btn-primary",
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "New Products" }, "args": {} }
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
              "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.Products", "operationId": "LMFpgeQrnFqZx4uu2zmLHg", "pageSettings": { "name": "MyFirstModule/Products_NewEdit.page.xml", "location": "content" }, "objectParameter": "param$Products" }, "disabledDuringExecution": true },
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
