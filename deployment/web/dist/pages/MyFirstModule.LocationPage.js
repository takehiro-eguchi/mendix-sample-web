import { reactExports, asPluginWidgets, selectTranslation } from '../index-DsLjkJno.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-CE-u0OT2.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-CJ7Z7nWm.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-CBHyzLdu.js';
import { ListAttributeProperty } from '../ListAttributeProperty-DPf5U2kY.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-BfE9ukAc.js';
import { WebIconProperty } from '../WebIconProperty-B88sVxeT.js';
import { Container } from '../Image-H8ZrTm5W.js';
import { DatagridWidgetModule } from '../Datagrid-sI2-Wmk5.js';
import { DatagridNumberFilterWidgetModule } from '../DatagridNumberFilter-CS-ZfvTk.js';
import { DatagridTextFilterWidgetModule } from '../DatagridTextFilter-BWCwG6U2.js';
import { Div } from '../Div-DGtcc-SO.js';
import { Text } from '../Text-DR32TaDK.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-B7-azn8d.js';
import '../BrzhM9fk-DIx2MmKD.js';
import '../Bgp-XL0v-DFoXROlK.js';
import '../InlineText-D7gieNIv.js';
import '../ListExpressionProperty-eCDDpqMr.js';
import '../WebStaticImageProperty-D8DEVy4Y.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const DatagridNumberFilter = Object.getOwnPropertyDescriptor(DatagridNumberFilterWidgetModule, "DatagridNumberFilter")?.value || Object.getOwnPropertyDescriptor(DatagridNumberFilterWidgetModule, "default")?.value;
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;
const { $Div, $Container, $Text, $Datagrid, $DatagridTextFilter, $DatagridNumberFilter, $ActionButton } = asPluginWidgets({ Div, Container, Text, Datagrid, DatagridTextFilter, DatagridNumberFilter, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p27.MyFirstModule.LocationPage.layoutGrid4",
      $widgetId: "p27.MyFirstModule.LocationPage.layoutGrid4",
      class: "mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p27.MyFirstModule.LocationPage.layoutGrid4$row0",
            $widgetId: "p27.MyFirstModule.LocationPage.layoutGrid4$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p27.MyFirstModule.LocationPage.layoutGrid4$row0$column0",
                  $widgetId: "p27.MyFirstModule.LocationPage.layoutGrid4$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p27.MyFirstModule.LocationPage.container1",
                        $widgetId: "p27.MyFirstModule.LocationPage.container1",
                        class: "mx-name-container1 pageheader spacing-outer-bottom-large",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p27.MyFirstModule.LocationPage.layoutGrid2",
                              $widgetId: "p27.MyFirstModule.LocationPage.layoutGrid2",
                              class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p27.MyFirstModule.LocationPage.layoutGrid2$row0",
                                    $widgetId: "p27.MyFirstModule.LocationPage.layoutGrid2$row0",
                                    class: "row",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p27.MyFirstModule.LocationPage.layoutGrid2$row0$column0",
                                          $widgetId: "p27.MyFirstModule.LocationPage.layoutGrid2$row0$column0",
                                          class: "col-lg col-md col",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p27.MyFirstModule.LocationPage.text40",
                                                $widgetId: "p27.MyFirstModule.LocationPage.text40",
                                                class: "mx-name-text40 pageheader-title spacing-outer-bottom",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Location Page" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "h1"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p27.MyFirstModule.LocationPage.text39",
                                                $widgetId: "p27.MyFirstModule.LocationPage.text39",
                                                class: "mx-name-text39 pageheader-subtitle text-detail spacing-outer-bottom-large",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Manage, add, delete, update your location." }, "args": {} }
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
      key: "p27.MyFirstModule.LocationPage.dataGrid2_1",
      $widgetId: "p27.MyFirstModule.LocationPage.dataGrid2_1",
      advanced: false,
      datasource: DatabaseObjectListProperty({
        "dataSourceId": "p27.18",
        "entity": "MyFirstModule.Locations",
        "operationId": "ct61jhHbIVySevGULm/wdw",
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
            "entity": "MyFirstModule.Locations",
            "attribute": "State",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p27.18",
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
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridTextFilter,
              {
                key: "p27.MyFirstModule.LocationPage.textFilter1",
                $widgetId: "p27.MyFirstModule.LocationPage.textFilter1",
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
            "entity": "MyFirstModule.Locations",
            "attribute": "City",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p27.18",
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
              "expression": { "expr": { "type": "literal", "value": "City" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridTextFilter,
              {
                key: "p27.MyFirstModule.LocationPage.textFilter2",
                $widgetId: "p27.MyFirstModule.LocationPage.textFilter2",
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
            "entity": "MyFirstModule.Locations",
            "attribute": "Country",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p27.18",
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
              "expression": { "expr": { "type": "literal", "value": "Country" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridTextFilter,
              {
                key: "p27.MyFirstModule.LocationPage.textFilter3",
                $widgetId: "p27.MyFirstModule.LocationPage.textFilter3",
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
            "entity": "MyFirstModule.Locations",
            "attribute": "Longitude",
            "attributeType": "Decimal",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p27.18",
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
              "expression": { "expr": { "type": "literal", "value": "Longitude" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridNumberFilter,
              {
                key: "p27.MyFirstModule.LocationPage.numberFilter1",
                $widgetId: "p27.MyFirstModule.LocationPage.numberFilter1",
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
            "entity": "MyFirstModule.Locations",
            "attribute": "Latitude",
            "attributeType": "Decimal",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p27.18",
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
              "expression": { "expr": { "type": "literal", "value": "Latitude" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridNumberFilter,
              {
                key: "p27.MyFirstModule.LocationPage.numberFilter2",
                $widgetId: "p27.MyFirstModule.LocationPage.numberFilter2",
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
            "entity": "MyFirstModule.Locations",
            "attribute": "PostalCode",
            "attributeType": "Integer",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p27.18",
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
              "expression": { "expr": { "type": "literal", "value": "Postal code" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridNumberFilter,
              {
                key: "p27.MyFirstModule.LocationPage.numberFilter3",
                $widgetId: "p27.MyFirstModule.LocationPage.numberFilter3",
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
          "showContentAs": "customContent",
          "attribute": ListAttributeProperty({
            "path": "",
            "entity": "MyFirstModule.Locations",
            "attribute": "State",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p27.18",
            "isList": false
          }),
          "content": TemplatedWidgetProperty({
            "dataSourceId": "p27.18",
            "editable": false,
            "children": () => [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p27.MyFirstModule.LocationPage.actionButton1",
                  $widgetId: "p27.MyFirstModule.LocationPage.actionButton1",
                  buttonId: "p27.MyFirstModule.LocationPage.actionButton1",
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
                    "action": { "type": "openPage", "argMap": { "param$Locations": { "widget": "p27.MyFirstModule.LocationPage.dataGrid2_1", "source": "object" } }, "config": { "name": "MyFirstModule/Locations_NewEdit.page.xml", "location": "content" }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                  })
                }
              ),
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p27.MyFirstModule.LocationPage.actionButton2",
                  $widgetId: "p27.MyFirstModule.LocationPage.actionButton2",
                  buttonId: "p27.MyFirstModule.LocationPage.actionButton2",
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
                    "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p27.MyFirstModule.LocationPage.dataGrid2_1", "source": "object" } }, "config": { "closePage": false, "operationId": "FEFxRw2pAVeJUcm1ZPYHOA" }, "disabledDuringExecution": true },
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
            key: "p27.MyFirstModule.LocationPage.actionButton3",
            $widgetId: "p27.MyFirstModule.LocationPage.actionButton3",
            buttonId: "p27.MyFirstModule.LocationPage.actionButton3",
            class: "mx-name-actionButton3",
            style: void 0,
            tabIndex: void 0,
            renderType: "button",
            role: void 0,
            buttonClass: "btn-primary",
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "New Locations" }, "args": {} }
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
              "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.Locations", "operationId": "LjzNNlWbFlG7BKW+fs/cig", "pageSettings": { "name": "MyFirstModule/Locations_NewEdit.page.xml", "location": "content" }, "objectParameter": "param$Locations" }, "disabledDuringExecution": true },
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
