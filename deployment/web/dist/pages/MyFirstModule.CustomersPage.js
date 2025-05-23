import { reactExports, asPluginWidgets, selectTranslation } from '../index-BCA8X3MP.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BdzcW3SP.js';
import { ActionProperty } from '../ActionProperty-BjRv15Ma.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-DKuecUbx.js';
import { ListAttributeProperty } from '../ListAttributeProperty-ByudWBDe.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-BFmsrEg-.js';
import { TextProperty } from '../Icon-CwpoK74K.js';
import { WebIconProperty } from '../WebIconProperty-DksUkMrc.js';
import { ActionButton } from '../ActionButton-B1FZcI8p.js';
import { Container } from '../Container-CxVkjo8s.js';
import { DatagridWidgetModule } from '../Datagrid-BhDFmpJP.js';
import { DatagridDateFilterWidgetModule } from '../DatagridDateFilter-fCLpQylR.js';
import { DatagridDropdownFilterWidgetModule } from '../DatagridDropdownFilter-LL7QgErx.js';
import { DatagridNumberFilterWidgetModule } from '../DatagridNumberFilter-DXJJbjLe.js';
import { DatagridTextFilterWidgetModule } from '../DatagridTextFilter-BJIL2ebC.js';
import { Div } from '../Div-DWESTEoo.js';
import { Text } from '../Text-BH0JoxPZ.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-K_E6zeB-.js';
import '../BrzhM9fk-B35Z04N6.js';
import '../BQa9VDC5-BsmL2sNc.js';
import '../Bgp-XL0v-iR-R4xy_.js';
import '../Image-BLvaO7vK.js';
import '../InlineText-BU8NLTPl.js';
import '../ListExpressionProperty-BWFcYvBl.js';
import '../WebStaticImageProperty-CiXGhPz_.js';
import '../DMc54HEs-BETi155K.js';

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
      key: "p36.MyFirstModule.CustomersPage.layoutGrid2",
      $widgetId: "p36.MyFirstModule.CustomersPage.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p36.MyFirstModule.CustomersPage.layoutGrid2$row0",
            $widgetId: "p36.MyFirstModule.CustomersPage.layoutGrid2$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p36.MyFirstModule.CustomersPage.layoutGrid2$row0$column0",
                  $widgetId: "p36.MyFirstModule.CustomersPage.layoutGrid2$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p36.MyFirstModule.CustomersPage.container1",
                        $widgetId: "p36.MyFirstModule.CustomersPage.container1",
                        class: "mx-name-container1 pageheader spacing-outer-bottom-large",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p36.MyFirstModule.CustomersPage.text40",
                              $widgetId: "p36.MyFirstModule.CustomersPage.text40",
                              class: "mx-name-text40 pageheader-title spacing-outer-bottom",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Customers Page" }, "args": {} }
                                })
                              ]),
                              renderMode: "h1"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p36.MyFirstModule.CustomersPage.text39",
                              $widgetId: "p36.MyFirstModule.CustomersPage.text39",
                              class: "mx-name-text39 pageheader-subtitle text-detail spacing-outer-bottom-large",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Add, update and delete customers." }, "args": {} }
                                })
                              ]),
                              renderMode: "p"
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
      key: "p36.MyFirstModule.CustomersPage.dataGrid2_1",
      $widgetId: "p36.MyFirstModule.CustomersPage.dataGrid2_1",
      advanced: false,
      datasource: DatabaseObjectListProperty({
        "dataSourceId": "p36.12",
        "entity": "MyFirstModule.Customers",
        "operationId": "ODw/vuIgQVau84Xbhaetjw",
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
            "entity": "MyFirstModule.Customers",
            "attribute": "FirstName",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p36.12",
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
              "expression": { "expr": { "type": "literal", "value": "First name" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridTextFilter,
              {
                key: "p36.MyFirstModule.CustomersPage.textFilter1",
                $widgetId: "p36.MyFirstModule.CustomersPage.textFilter1",
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
            "entity": "MyFirstModule.Customers",
            "attribute": "LastName",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p36.12",
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
              "expression": { "expr": { "type": "literal", "value": "Last name" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridTextFilter,
              {
                key: "p36.MyFirstModule.CustomersPage.textFilter2",
                $widgetId: "p36.MyFirstModule.CustomersPage.textFilter2",
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
            "entity": "MyFirstModule.Customers",
            "attribute": "BirthDate",
            "attributeType": "DateTime",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p36.12",
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
                key: "p36.MyFirstModule.CustomersPage.dateFilter1",
                $widgetId: "p36.MyFirstModule.CustomersPage.dateFilter1",
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
            "entity": "MyFirstModule.Customers",
            "attribute": "MaritialStatus",
            "attributeType": "Enum",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p36.12",
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
                key: "p36.MyFirstModule.CustomersPage.drop_downFilter1",
                $widgetId: "p36.MyFirstModule.CustomersPage.drop_downFilter1",
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
            "entity": "MyFirstModule.Customers",
            "attribute": "Gender",
            "attributeType": "Enum",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p36.12",
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
                key: "p36.MyFirstModule.CustomersPage.drop_downFilter2",
                $widgetId: "p36.MyFirstModule.CustomersPage.drop_downFilter2",
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
            "entity": "MyFirstModule.Customers",
            "attribute": "MailAddress",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p36.12",
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
              "expression": { "expr": { "type": "literal", "value": "Mail address" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridTextFilter,
              {
                key: "p36.MyFirstModule.CustomersPage.textFilter3",
                $widgetId: "p36.MyFirstModule.CustomersPage.textFilter3",
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
            "entity": "MyFirstModule.Customers",
            "attribute": "PhoneNumber",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p36.12",
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
              "expression": { "expr": { "type": "literal", "value": "Phone number" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridTextFilter,
              {
                key: "p36.MyFirstModule.CustomersPage.textFilter4",
                $widgetId: "p36.MyFirstModule.CustomersPage.textFilter4",
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
                class: "mx-name-textFilter4",
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
            "entity": "MyFirstModule.Customers",
            "attribute": "AverageYearlyIncome",
            "attributeType": "Decimal",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p36.12",
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
              "expression": { "expr": { "type": "literal", "value": "Average yearly income" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridNumberFilter,
              {
                key: "p36.MyFirstModule.CustomersPage.numberFilter1",
                $widgetId: "p36.MyFirstModule.CustomersPage.numberFilter1",
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
            "entity": "MyFirstModule.Customers",
            "attribute": "AverageSalesOrderQuantity",
            "attributeType": "Integer",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p36.12",
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
              "expression": { "expr": { "type": "literal", "value": "Average sales order quantity" }, "args": {} }
            })
          ]),
          "tooltip": selectTranslation([
            void 0
          ]),
          "filter": [
            /* @__PURE__ */ React.createElement(
              $DatagridNumberFilter,
              {
                key: "p36.MyFirstModule.CustomersPage.numberFilter2",
                $widgetId: "p36.MyFirstModule.CustomersPage.numberFilter2",
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
          "showContentAs": "customContent",
          "attribute": ListAttributeProperty({
            "path": "",
            "entity": "MyFirstModule.Customers",
            "attribute": "FirstName",
            "attributeType": "String",
            "sortable": true,
            "filterable": true,
            "dataSourceId": "p36.12",
            "isList": false
          }),
          "content": TemplatedWidgetProperty({
            "dataSourceId": "p36.12",
            "editable": false,
            "children": () => [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p36.MyFirstModule.CustomersPage.actionButton1",
                  $widgetId: "p36.MyFirstModule.CustomersPage.actionButton1",
                  buttonId: "p36.MyFirstModule.CustomersPage.actionButton1",
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
                    "action": { "type": "openPage", "argMap": { "param$Customers": { "widget": "p36.MyFirstModule.CustomersPage.dataGrid2_1", "source": "object" } }, "config": { "name": "MyFirstModule/Customers_NewEdit.page.xml", "location": "content" }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                  })
                }
              ),
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p36.MyFirstModule.CustomersPage.actionButton2",
                  $widgetId: "p36.MyFirstModule.CustomersPage.actionButton2",
                  buttonId: "p36.MyFirstModule.CustomersPage.actionButton2",
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
                  action: void 0
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
            key: "p36.MyFirstModule.CustomersPage.actionButton3",
            $widgetId: "p36.MyFirstModule.CustomersPage.actionButton3",
            buttonId: "p36.MyFirstModule.CustomersPage.actionButton3",
            class: "mx-name-actionButton3",
            style: void 0,
            tabIndex: void 0,
            renderType: "button",
            role: void 0,
            buttonClass: "btn-primary",
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "New Customers" }, "args": {} }
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
              "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.Customers", "operationId": "CcEC4Frt/lyuh+gZy7aEfg", "pageSettings": { "name": "MyFirstModule/Customers_NewEdit.page.xml", "location": "content" }, "objectParameter": "param$Customers" }, "disabledDuringExecution": true },
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
  "Customers page"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
