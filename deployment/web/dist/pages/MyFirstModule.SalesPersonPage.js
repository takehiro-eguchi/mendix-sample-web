import { reactExports, asPluginWidgets, selectTranslation } from '../index-sUfOvV_8.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-kt62KmQf.js';
import { ActionProperty } from '../BQa9VDC5-DyZYO1l2.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-DxGFmzkZ.js';
import { ListAttributeProperty } from '../ListAttributeProperty-D6IAi7Qj.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-BlYkv9_n.js';
import { ActionButton, TextProperty } from '../ActionButton-D4JDMugy.js';
import { WebIconProperty } from '../WebIconProperty-BB_92iSr.js';
import { Container } from '../Container-DX13f28C.js';
import { DatagridWidgetModule } from '../Datagrid-C-kBrYJS.js';
import { DatagridDateFilterWidgetModule } from '../DatagridDateFilter-B-kjq4No.js';
import { DatagridDropdownFilterWidgetModule } from '../DatagridDropdownFilter-Dff5_9IO.js';
import { DatagridNumberFilterWidgetModule } from '../DatagridNumberFilter-C71lHk0v.js';
import { DatagridTextFilterWidgetModule } from '../DatagridTextFilter-zMo25Iqg.js';
import { Div } from '../Div-CqbbyV04.js';
import { Text } from '../Text-CYzI2A7u.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-BhthJPlD.js';
import '../BrzhM9fk-DCcHnYPV.js';
import '../Bgp-XL0v-wsgFNuuZ.js';
import '../Image-DtxvCY00.js';
import '../InlineText-e67tRU7X.js';
import '../ListExpressionProperty-KnvL5XoQ.js';
import '../WebStaticImageProperty-BaJIOPEP.js';
import '../DMc54HEs-jJpiS_cX.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridDateFilter = Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "DatagridDateFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "default")?.value;
const DatagridDropdownFilter = Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "DatagridDropdownFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "default")?.value;
const DatagridNumberFilter = Object.getOwnPropertyDescriptor(DatagridNumberFilterWidgetModule, "DatagridNumberFilter")?.value || Object.getOwnPropertyDescriptor(DatagridNumberFilterWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Div, $Container, $Text, $Datagrid, $DatagridTextFilter, $DatagridDateFilter, $DatagridDropdownFilter, $DatagridNumberFilter, $ActionButton } = asPluginWidgets({ Div, Container, Text, Datagrid, DatagridTextFilter, DatagridDateFilter, DatagridDropdownFilter, DatagridNumberFilter, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p26.MyFirstModule.SalesPersonPage.layoutGrid4",
      $widgetId: "p26.MyFirstModule.SalesPersonPage.layoutGrid4",
      class: "mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p26.MyFirstModule.SalesPersonPage.layoutGrid4$row0",
            $widgetId: "p26.MyFirstModule.SalesPersonPage.layoutGrid4$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p26.MyFirstModule.SalesPersonPage.layoutGrid4$row0$column0",
                  $widgetId: "p26.MyFirstModule.SalesPersonPage.layoutGrid4$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p26.MyFirstModule.SalesPersonPage.container1",
                        $widgetId: "p26.MyFirstModule.SalesPersonPage.container1",
                        class: "mx-name-container1 pageheader spacing-outer-bottom-large",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p26.MyFirstModule.SalesPersonPage.layoutGrid2",
                              $widgetId: "p26.MyFirstModule.SalesPersonPage.layoutGrid2",
                              class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p26.MyFirstModule.SalesPersonPage.layoutGrid2$row0",
                                    $widgetId: "p26.MyFirstModule.SalesPersonPage.layoutGrid2$row0",
                                    class: "row",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p26.MyFirstModule.SalesPersonPage.layoutGrid2$row0$column0",
                                          $widgetId: "p26.MyFirstModule.SalesPersonPage.layoutGrid2$row0$column0",
                                          class: "col-lg col-md col",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p26.MyFirstModule.SalesPersonPage.text40",
                                                $widgetId: "p26.MyFirstModule.SalesPersonPage.text40",
                                                class: "mx-name-text40 pageheader-title spacing-outer-bottom",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Sales Person Page" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "h1"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p26.MyFirstModule.SalesPersonPage.text39",
                                                $widgetId: "p26.MyFirstModule.SalesPersonPage.text39",
                                                class: "mx-name-text39 pageheader-subtitle text-detail spacing-outer-bottom-large",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Manage, add, delete, update your sales persons." }, "args": {} }
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
      key: "p26.MyFirstModule.SalesPersonPage.dataGrid2_1",
      $widgetId: "p26.MyFirstModule.SalesPersonPage.dataGrid2_1",
      advanced: false,
      datasource: DatabaseObjectListProperty({
        "dataSourceId": "p26.18",
        "entity": "MyFirstModule.SalesPersons",
        "operationId": "rRuxp6Lj012xcvOlwV7bFg",
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
            "entity": "MyFirstModule.SalesPersons",
            "attribute": "SalesPersonName",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p26.18",
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
              "expression": { "expr": { "type": "literal", "value": "Sales person name" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridTextFilter,
              {
                key: "p26.MyFirstModule.SalesPersonPage.textFilter1",
                $widgetId: "p26.MyFirstModule.SalesPersonPage.textFilter1",
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
            "entity": "MyFirstModule.SalesPersons",
            "attribute": "SalesPersonLastName",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p26.18",
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
              "expression": { "expr": { "type": "literal", "value": "Sales person last name" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridTextFilter,
              {
                key: "p26.MyFirstModule.SalesPersonPage.textFilter2",
                $widgetId: "p26.MyFirstModule.SalesPersonPage.textFilter2",
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
            "entity": "MyFirstModule.SalesPersons",
            "attribute": "SalesPersonTitle",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p26.18",
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
              "expression": { "expr": { "type": "literal", "value": "Sales person title" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridTextFilter,
              {
                key: "p26.MyFirstModule.SalesPersonPage.textFilter3",
                $widgetId: "p26.MyFirstModule.SalesPersonPage.textFilter3",
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
            "entity": "MyFirstModule.SalesPersons",
            "attribute": "HireDate",
            "attributeType": "DateTime",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p26.18",
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
              "expression": { "expr": { "type": "literal", "value": "Hire date" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridDateFilter,
              {
                key: "p26.MyFirstModule.SalesPersonPage.dateFilter1",
                $widgetId: "p26.MyFirstModule.SalesPersonPage.dateFilter1",
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
            "entity": "MyFirstModule.SalesPersons",
            "attribute": "BirthDate",
            "attributeType": "DateTime",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p26.18",
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
              "expression": { "expr": { "type": "literal", "value": "Birth date" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridDateFilter,
              {
                key: "p26.MyFirstModule.SalesPersonPage.dateFilter2",
                $widgetId: "p26.MyFirstModule.SalesPersonPage.dateFilter2",
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
            "entity": "MyFirstModule.SalesPersons",
            "attribute": "MaritialStatus",
            "attributeType": "Enum",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p26.18",
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
              "expression": { "expr": { "type": "literal", "value": "Maritial status" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridDropdownFilter,
              {
                key: "p26.MyFirstModule.SalesPersonPage.drop_downFilter1",
                $widgetId: "p26.MyFirstModule.SalesPersonPage.drop_downFilter1",
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
            "entity": "MyFirstModule.SalesPersons",
            "attribute": "Gender",
            "attributeType": "Enum",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p26.18",
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
              "expression": { "expr": { "type": "literal", "value": "Gender" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridDropdownFilter,
              {
                key: "p26.MyFirstModule.SalesPersonPage.drop_downFilter2",
                $widgetId: "p26.MyFirstModule.SalesPersonPage.drop_downFilter2",
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
            "entity": "MyFirstModule.SalesPersons",
            "attribute": "MonthlySalary",
            "attributeType": "Integer",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p26.18",
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
              "expression": { "expr": { "type": "literal", "value": "Monthly salary" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridNumberFilter,
              {
                key: "p26.MyFirstModule.SalesPersonPage.numberFilter1",
                $widgetId: "p26.MyFirstModule.SalesPersonPage.numberFilter1",
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
            "entity": "MyFirstModule.SalesPersons",
            "attribute": "Status",
            "attributeType": "Enum",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p26.18",
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
                key: "p26.MyFirstModule.SalesPersonPage.drop_downFilter3",
                $widgetId: "p26.MyFirstModule.SalesPersonPage.drop_downFilter3",
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
            "entity": "MyFirstModule.SalesPersons",
            "attribute": "SalesPersonName",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p26.18",
            "isList": false
          }),
          "content": TemplatedWidgetProperty({
            "dataSourceId": "p26.18",
            "editable": false,
            "children": () => [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p26.MyFirstModule.SalesPersonPage.actionButton1",
                  $widgetId: "p26.MyFirstModule.SalesPersonPage.actionButton1",
                  buttonId: "p26.MyFirstModule.SalesPersonPage.actionButton1",
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
                    "action": { "type": "openPage", "argMap": { "param$SalesPersons": { "widget": "p26.MyFirstModule.SalesPersonPage.dataGrid2_1", "source": "object" } }, "config": { "name": "MyFirstModule/SalesPersons_NewEdit.page.xml", "location": "content" }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                  })
                }
              ),
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p26.MyFirstModule.SalesPersonPage.actionButton2",
                  $widgetId: "p26.MyFirstModule.SalesPersonPage.actionButton2",
                  buttonId: "p26.MyFirstModule.SalesPersonPage.actionButton2",
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
                    "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p26.MyFirstModule.SalesPersonPage.dataGrid2_1", "source": "object" } }, "config": { "closePage": false, "operationId": "bmXP0+E4glmjhaNXAfkMZw" }, "disabledDuringExecution": true },
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
            key: "p26.MyFirstModule.SalesPersonPage.actionButton3",
            $widgetId: "p26.MyFirstModule.SalesPersonPage.actionButton3",
            buttonId: "p26.MyFirstModule.SalesPersonPage.actionButton3",
            class: "mx-name-actionButton3",
            style: void 0,
            tabIndex: void 0,
            renderType: "button",
            role: void 0,
            buttonClass: "btn-primary",
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "New Sales persons" }, "args": {} }
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
              "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.SalesPersons", "operationId": "VAY9795aCVueztn2VmgKWw", "pageSettings": { "name": "MyFirstModule/SalesPersons_NewEdit.page.xml", "location": "content" }, "objectParameter": "param$SalesPersons" }, "disabledDuringExecution": true },
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
