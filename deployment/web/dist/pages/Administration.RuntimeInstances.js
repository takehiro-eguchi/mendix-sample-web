import { reactExports, asPluginWidgets, selectTranslation } from '../index-DJGwzDdd.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BpA9Sx2X.js';
import { DatabaseObjectListProperty } from '../BH5qNKCa-DF_eSa8O.js';
import { ListAttributeProperty } from '../ListAttributeProperty-BV5OVGGR.js';
import { ListExpressionProperty } from '../ListExpressionProperty-DCAmFb5G.js';
import { Container } from '../Container-6llxP7Tz.js';
import { DatagridWidgetModule } from '../Datagrid-DDBwOl7N.js';
import { Div } from '../Div-DJcJ5gVg.js';
import { Text } from '../Text-CXGRaJYu.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-BGEPdRoX.js';
import '../BrzhM9fk-D6dvPqAy.js';
import '../BQa9VDC5-bIsskIdw.js';
import '../Bgp-XL0v-ChI9Snow.js';
import '../Icon-Dv5nfF6s.js';
import '../Image-CGzd1yTB.js';
import '../InlineText-CYLpzmqS.js';
import '../ActionButton-B90FcSI6.js';
import '../WebIconProperty-BFDeGq-3.js';
import '../WebStaticImageProperty-BzG0dGiB.js';
import '../DMc54HEs-CJQCGXv1.js';

const React = { createElement: reactExports.createElement };
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;
const { $Container, $Div, $Text, $Datagrid } = asPluginWidgets({ Container, Div, Text, Datagrid });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Container,
    {
      key: "p5.Administration.RuntimeInstances.container1",
      $widgetId: "p5.Administration.RuntimeInstances.container1",
      class: "mx-name-container1 pageheader pageheader-fullwidth",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p5.Administration.RuntimeInstances.layoutGrid1",
            $widgetId: "p5.Administration.RuntimeInstances.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p5.Administration.RuntimeInstances.layoutGrid1$row0",
                  $widgetId: "p5.Administration.RuntimeInstances.layoutGrid1$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p5.Administration.RuntimeInstances.layoutGrid1$row0$column0",
                        $widgetId: "p5.Administration.RuntimeInstances.layoutGrid1$row0$column0",
                        class: "col-lg-12 col-md-12 col-12",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p5.Administration.RuntimeInstances.label1",
                              $widgetId: "p5.Administration.RuntimeInstances.label1",
                              class: "mx-name-label1 pageheader-title",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Runtime Instances" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
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
      key: "p5.Administration.RuntimeInstances.layoutGrid2",
      $widgetId: "p5.Administration.RuntimeInstances.layoutGrid2",
      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p5.Administration.RuntimeInstances.layoutGrid2$row0",
            $widgetId: "p5.Administration.RuntimeInstances.layoutGrid2$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p5.Administration.RuntimeInstances.layoutGrid2$row0$column0",
                  $widgetId: "p5.Administration.RuntimeInstances.layoutGrid2$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Datagrid,
                      {
                        key: "p5.Administration.RuntimeInstances.dataGrid21",
                        $widgetId: "p5.Administration.RuntimeInstances.dataGrid21",
                        advanced: false,
                        datasource: DatabaseObjectListProperty({
                          "dataSourceId": "p5.10",
                          "entity": "System.XASInstance",
                          "operationId": "GjEZijLFzli5dV82JxT6nw",
                          "sort": [
                            [
                              "XASId",
                              "asc"
                            ]
                          ]
                        }),
                        refreshInterval: 0,
                        itemSelectionMethod: "checkbox",
                        showSelectAllToggle: true,
                        columns: [
                          {
                            "showContentAs": "attribute",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.XASInstance",
                              "attribute": "XASId",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p5.10",
                              "isList": false
                            }),
                            "content": void 0,
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Runtime ID" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": void 0,
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "width": "autoFill",
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false,
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "fetchOptionsLazy": true,
                            "filterCaptionType": "expression",
                            "allowEventPropagation": true
                          },
                          {
                            "showContentAs": "dynamicText",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.XASInstance",
                              "attribute": "createdDate",
                              "attributeType": "DateTime",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p5.10",
                              "isList": false
                            }),
                            "content": void 0,
                            "dynamicText": selectTranslation([
                              ListExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "createdDate" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "currentObject": { "widget": "p5.Administration.RuntimeInstances.dataGrid21", "source": "object" } } },
                                "dataSourceId": "p5.10"
                              })
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Created" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": void 0,
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "width": "autoFill",
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false,
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "fetchOptionsLazy": true,
                            "filterCaptionType": "expression",
                            "allowEventPropagation": true
                          },
                          {
                            "showContentAs": "attribute",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.XASInstance",
                              "attribute": "AllowedNumberOfConcurrentUsers",
                              "attributeType": "Integer",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p5.10",
                              "isList": false
                            }),
                            "content": void 0,
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Allowed concurrent users" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": void 0,
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "width": "autoFill",
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false,
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "fetchOptionsLazy": true,
                            "filterCaptionType": "expression",
                            "allowEventPropagation": true
                          },
                          {
                            "showContentAs": "attribute",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.XASInstance",
                              "attribute": "PartnerName",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p5.10",
                              "isList": false
                            }),
                            "content": void 0,
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Partner" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": void 0,
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "width": "autoFill",
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false,
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "fetchOptionsLazy": true,
                            "filterCaptionType": "expression",
                            "allowEventPropagation": true
                          },
                          {
                            "showContentAs": "attribute",
                            "attribute": ListAttributeProperty({
                              "path": "",
                              "entity": "System.XASInstance",
                              "attribute": "CustomerName",
                              "attributeType": "String",
                              "sortable": true,
                              "filterable": true,
                              "dataSourceId": "p5.10",
                              "isList": false
                            }),
                            "content": void 0,
                            "dynamicText": selectTranslation([
                              void 0
                            ]),
                            "header": selectTranslation([
                              ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Customer" }, "args": {} }
                              })
                            ]),
                            "tooltip": selectTranslation([
                              void 0
                            ]),
                            "filter": void 0,
                            "visible": ExpressionProperty({
                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                            }),
                            "sortable": true,
                            "resizable": true,
                            "draggable": true,
                            "hidable": "yes",
                            "width": "autoFill",
                            "size": 1,
                            "alignment": "left",
                            "wrapText": false,
                            "minWidth": "auto",
                            "minWidthLimit": 100,
                            "exportValue": selectTranslation([
                              void 0
                            ]),
                            "fetchOptionsLazy": true,
                            "filterCaptionType": "expression",
                            "allowEventPropagation": true
                          }
                        ],
                        columnsFilterable: true,
                        pageSize: 20,
                        pagination: "buttons",
                        pagingPosition: "bottom",
                        showPagingButtons: "always",
                        showEmptyPlaceholder: "none",
                        emptyPlaceholder: void 0,
                        rowClass: void 0,
                        onClick: void 0,
                        onSelectionChange: void 0,
                        columnsSortable: true,
                        columnsResizable: true,
                        columnsDraggable: true,
                        columnsHidable: true,
                        filterList: [],
                        filtersPlaceholder: void 0,
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
                        onClickTrigger: "single",
                        itemSelectionMode: "clear",
                        loadingType: "spinner",
                        showNumberOfRows: false,
                        loadMoreButtonCaption: selectTranslation([
                          ExpressionProperty({
                            "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                          })
                        ]),
                        configurationStorageType: "attribute",
                        storeFiltersInPersonalization: true,
                        class: "mx-name-dataGrid21",
                        style: void 0,
                        tabIndex: void 0
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
]);
const title = selectTranslation([
  "Runtime Instances"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
