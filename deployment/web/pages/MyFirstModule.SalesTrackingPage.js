import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import * as DatagridWidgetModule from "C:/work/git/mendix-sample-web/deployment/web/widgets/com/mendix/widget/web/datagrid/Datagrid.mjs";
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;   
import * as DatagridDateFilterWidgetModule from "C:/work/git/mendix-sample-web/deployment/web/widgets/com/mendix/widget/web/datagriddatefilter/DatagridDateFilter.mjs";
const DatagridDateFilter = Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "DatagridDateFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDateFilterWidgetModule, "default")?.value;   
import "C:/work/git/mendix-sample-web/deployment/web/widgets/com/mendix/widget/web/datagriddatefilter/DatagridDateFilter.css";
import * as DatagridNumberFilterWidgetModule from "C:/work/git/mendix-sample-web/deployment/web/widgets/com/mendix/widget/web/datagridnumberfilter/DatagridNumberFilter.mjs";
const DatagridNumberFilter = Object.getOwnPropertyDescriptor(DatagridNumberFilterWidgetModule, "DatagridNumberFilter")?.value || Object.getOwnPropertyDescriptor(DatagridNumberFilterWidgetModule, "default")?.value;   
import { Div } from "mendix/widgets/web/Div";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";

const { $Div, $Container, $Text, $Datagrid, $DatagridNumberFilter, $DatagridDateFilter, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, Container, Text, Datagrid, DatagridNumberFilter, DatagridDateFilter, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p44.MyFirstModule.SalesTrackingPage.layoutGrid4"
        $widgetId="p44.MyFirstModule.SalesTrackingPage.layoutGrid4"
        class={"mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p44.MyFirstModule.SalesTrackingPage.layoutGrid4$row0"
                $widgetId="p44.MyFirstModule.SalesTrackingPage.layoutGrid4$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p44.MyFirstModule.SalesTrackingPage.layoutGrid4$row0$column0"
                        $widgetId="p44.MyFirstModule.SalesTrackingPage.layoutGrid4$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Container key="p44.MyFirstModule.SalesTrackingPage.container1"
                                $widgetId="p44.MyFirstModule.SalesTrackingPage.container1"
                                class={"mx-name-container1 pageheader spacing-outer-bottom-large"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Div key="p44.MyFirstModule.SalesTrackingPage.layoutGrid2"
                                        $widgetId="p44.MyFirstModule.SalesTrackingPage.layoutGrid2"
                                        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid"}
                                        style={undefined}
                                        content={[
                                            <$Div key="p44.MyFirstModule.SalesTrackingPage.layoutGrid2$row0"
                                                $widgetId="p44.MyFirstModule.SalesTrackingPage.layoutGrid2$row0"
                                                class={"row"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p44.MyFirstModule.SalesTrackingPage.layoutGrid2$row0$column0"
                                                        $widgetId="p44.MyFirstModule.SalesTrackingPage.layoutGrid2$row0$column0"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Text key="p44.MyFirstModule.SalesTrackingPage.text40"
                                                                $widgetId="p44.MyFirstModule.SalesTrackingPage.text40"
                                                                class={"mx-name-text40 pageheader-title spacing-outer-bottom"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Sales Tracking Page" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"h1"} />,
                                                            <$Text key="p44.MyFirstModule.SalesTrackingPage.text39"
                                                                $widgetId="p44.MyFirstModule.SalesTrackingPage.text39"
                                                                class={"mx-name-text39 pageheader-subtitle text-detail spacing-outer-bottom-large"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Manage, add, delete, update your sales tracking." }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"p"} />
                                                        ]} />
                                                ]} />
                                        ]} />
                                ]}
                                ariaHidden={false} />
                        ]} />
                ]} />
        ]} />,
    <$Datagrid key="p44.MyFirstModule.SalesTrackingPage.dataGrid2_1"
        $widgetId="p44.MyFirstModule.SalesTrackingPage.dataGrid2_1"
        advanced={false}
        datasource={DatabaseObjectListProperty({
            "dataSourceId": "p44.18",
            "entity": "MyFirstModule.SalesTrackingTable",
            "operationId": "EdnjlJOStFmbC7U5289R9Q",
            "sort": []
        })}
        refreshInterval={0}
        itemSelectionMethod={"checkbox"}
        itemSelectionMode={"clear"}
        showSelectAllToggle={true}
        loadingType={"spinner"}
        columns={[
            {
                "showContentAs": "attribute",
                "attribute": ListAttributeProperty({
                    "path": "",
                    "entity": "MyFirstModule.SalesTrackingTable",
                    "attribute": "OrderQuantity",
                    "attributeType": "Integer",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p44.18",
                    "isList": false
                }),
                "content": undefined,
                "dynamicText": t([
                    undefined
                ]),
                "exportValue": t([
                    undefined
                ]),
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Order quantity" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridNumberFilter key="p44.MyFirstModule.SalesTrackingPage.numberFilter1"
                        $widgetId="p44.MyFirstModule.SalesTrackingPage.numberFilter1"
                        advanced={false}
                        defaultValue={undefined}
                        defaultFilter={"equal"}
                        placeholder={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        adjustable={true}
                        delay={500}
                        onChange={undefined}
                        screenReaderButtonCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        screenReaderInputCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                            })
                        ])}
                        class={"mx-name-numberFilter1"}
                        style={undefined}
                        tabIndex={undefined} />
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
                    "dataSourceId": "p44.18",
                    "isList": false
                }),
                "content": undefined,
                "dynamicText": t([
                    undefined
                ]),
                "exportValue": t([
                    undefined
                ]),
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Unit price" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridNumberFilter key="p44.MyFirstModule.SalesTrackingPage.numberFilter2"
                        $widgetId="p44.MyFirstModule.SalesTrackingPage.numberFilter2"
                        advanced={false}
                        defaultValue={undefined}
                        defaultFilter={"equal"}
                        placeholder={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        adjustable={true}
                        delay={500}
                        onChange={undefined}
                        screenReaderButtonCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        screenReaderInputCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                            })
                        ])}
                        class={"mx-name-numberFilter2"}
                        style={undefined}
                        tabIndex={undefined} />
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
                    "dataSourceId": "p44.18",
                    "isList": false
                }),
                "content": undefined,
                "dynamicText": t([
                    undefined
                ]),
                "exportValue": t([
                    undefined
                ]),
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Discount amount" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridNumberFilter key="p44.MyFirstModule.SalesTrackingPage.numberFilter3"
                        $widgetId="p44.MyFirstModule.SalesTrackingPage.numberFilter3"
                        advanced={false}
                        defaultValue={undefined}
                        defaultFilter={"equal"}
                        placeholder={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        adjustable={true}
                        delay={500}
                        onChange={undefined}
                        screenReaderButtonCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        screenReaderInputCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                            })
                        ])}
                        class={"mx-name-numberFilter3"}
                        style={undefined}
                        tabIndex={undefined} />
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
                    "dataSourceId": "p44.18",
                    "isList": false
                }),
                "content": undefined,
                "dynamicText": t([
                    undefined
                ]),
                "exportValue": t([
                    undefined
                ]),
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Product standard cost" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridNumberFilter key="p44.MyFirstModule.SalesTrackingPage.numberFilter4"
                        $widgetId="p44.MyFirstModule.SalesTrackingPage.numberFilter4"
                        advanced={false}
                        defaultValue={undefined}
                        defaultFilter={"equal"}
                        placeholder={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        adjustable={true}
                        delay={500}
                        onChange={undefined}
                        screenReaderButtonCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        screenReaderInputCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                            })
                        ])}
                        class={"mx-name-numberFilter4"}
                        style={undefined}
                        tabIndex={undefined} />
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
                    "dataSourceId": "p44.18",
                    "isList": false
                }),
                "content": undefined,
                "dynamicText": t([
                    undefined
                ]),
                "exportValue": t([
                    undefined
                ]),
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Tax amt" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridNumberFilter key="p44.MyFirstModule.SalesTrackingPage.numberFilter5"
                        $widgetId="p44.MyFirstModule.SalesTrackingPage.numberFilter5"
                        advanced={false}
                        defaultValue={undefined}
                        defaultFilter={"equal"}
                        placeholder={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        adjustable={true}
                        delay={500}
                        onChange={undefined}
                        screenReaderButtonCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        screenReaderInputCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                            })
                        ])}
                        class={"mx-name-numberFilter5"}
                        style={undefined}
                        tabIndex={undefined} />
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
                    "dataSourceId": "p44.18",
                    "isList": false
                }),
                "content": undefined,
                "dynamicText": t([
                    undefined
                ]),
                "exportValue": t([
                    undefined
                ]),
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Order date" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridDateFilter key="p44.MyFirstModule.SalesTrackingPage.dateFilter1"
                        $widgetId="p44.MyFirstModule.SalesTrackingPage.dateFilter1"
                        advanced={false}
                        defaultValue={undefined}
                        defaultStartDate={undefined}
                        defaultEndDate={undefined}
                        defaultFilter={"equal"}
                        placeholder={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        adjustable={true}
                        onChange={undefined}
                        screenReaderButtonCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        screenReaderCalendarCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        screenReaderInputCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        class={"mx-name-dateFilter1"}
                        style={undefined}
                        tabIndex={undefined} />
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
                    "dataSourceId": "p44.18",
                    "isList": false
                }),
                "content": undefined,
                "dynamicText": t([
                    undefined
                ]),
                "exportValue": t([
                    undefined
                ]),
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Ship date" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridDateFilter key="p44.MyFirstModule.SalesTrackingPage.dateFilter2"
                        $widgetId="p44.MyFirstModule.SalesTrackingPage.dateFilter2"
                        advanced={false}
                        defaultValue={undefined}
                        defaultStartDate={undefined}
                        defaultEndDate={undefined}
                        defaultFilter={"equal"}
                        placeholder={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        adjustable={true}
                        onChange={undefined}
                        screenReaderButtonCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        screenReaderCalendarCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        screenReaderInputCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        class={"mx-name-dateFilter2"}
                        style={undefined}
                        tabIndex={undefined} />
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
                    "dataSourceId": "p44.18",
                    "isList": false
                }),
                "content": undefined,
                "dynamicText": t([
                    undefined
                ]),
                "exportValue": t([
                    undefined
                ]),
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Due date" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridDateFilter key="p44.MyFirstModule.SalesTrackingPage.dateFilter3"
                        $widgetId="p44.MyFirstModule.SalesTrackingPage.dateFilter3"
                        advanced={false}
                        defaultValue={undefined}
                        defaultStartDate={undefined}
                        defaultEndDate={undefined}
                        defaultFilter={"equal"}
                        placeholder={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        adjustable={true}
                        onChange={undefined}
                        screenReaderButtonCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        screenReaderCalendarCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        screenReaderInputCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        class={"mx-name-dateFilter3"}
                        style={undefined}
                        tabIndex={undefined} />
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
                    "path": "MyFirstModule.SalesTrackingTable_SalesPersons/MyFirstModule.SalesPersons",
                    "entity": "MyFirstModule.SalesPersons",
                    "attribute": "SalesPersonName",
                    "attributeType": "String",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p44.18",
                    "isList": false
                }),
                "content": undefined,
                "dynamicText": t([
                    undefined
                ]),
                "exportValue": t([
                    undefined
                ]),
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "SalesPerson" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": undefined,
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
                    "dataSourceId": "p44.18",
                    "isList": false
                }),
                "content": undefined,
                "dynamicText": t([
                    undefined
                ]),
                "exportValue": t([
                    undefined
                ]),
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "FirstName" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": undefined,
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
                    "dataSourceId": "p44.18",
                    "isList": false
                }),
                "content": undefined,
                "dynamicText": t([
                    undefined
                ]),
                "exportValue": t([
                    undefined
                ]),
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "State" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": undefined,
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
                    "attribute": "OperationCode",
                    "attributeType": "String",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p44.18",
                    "isList": false
                }),
                "content": undefined,
                "dynamicText": t([
                    undefined
                ]),
                "exportValue": t([
                    undefined
                ]),
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "OperationCode" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": undefined,
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
                    "path": "System.owner/System.User",
                    "entity": "System.User",
                    "attribute": "Name",
                    "attributeType": "String",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p44.18",
                    "isList": false
                }),
                "content": undefined,
                "dynamicText": t([
                    undefined
                ]),
                "exportValue": t([
                    undefined
                ]),
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "CreatedBy" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": undefined,
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
                    "dataSourceId": "p44.18",
                    "isList": false
                }),
                "content": TemplatedWidgetProperty({
                    "dataSourceId": "p44.18",
                    "editable": false,
                    "children": () => [
                        <$ConditionalVisibilityWrapper key="p44.MyFirstModule.SalesTrackingPage.actionButton1$visibility"
                            $widgetId="p44.MyFirstModule.SalesTrackingPage.actionButton1$visibility"
                            visible={ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" } ] }, "args": {} }
                            })}
                            contents={[
                                <$ActionButton key="p44.MyFirstModule.SalesTrackingPage.actionButton1"
                                    $widgetId="p44.MyFirstModule.SalesTrackingPage.actionButton1"
                                    buttonId={"p44.MyFirstModule.SalesTrackingPage.actionButton1"}
                                    class={"mx-name-actionButton1 btn-lg"}
                                    style={undefined}
                                    tabIndex={undefined}
                                    renderType={"link"}
                                    role={"button"}
                                    buttonClass={"btn-primary"}
                                    caption={t([
                                        ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                        })
                                    ])}
                                    tooltip={TextProperty({
                                        "value": t([
                                            ""
                                        ])
                                    })}
                                    icon={WebIconProperty({
                                        "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-pencil" }
                                    })}
                                    action={ActionProperty({
                                        "action": { "type": "openPage", "argMap": { "param$SalesTrackingTable": { "widget": "p44.MyFirstModule.SalesTrackingPage.dataGrid2_1", "source": "object" } }, "config": { "name": "MyFirstModule/SalesTrackingTable_NewEdit.page.xml", "location": "content", "allowedRoles": [ "Administrator", "User", "SalesPerson" ] }, "disabledDuringExecution": true },
                                        "abortOnServerValidation": true
                                    })} />
                            ]} />,
                        <$ConditionalVisibilityWrapper key="p44.MyFirstModule.SalesTrackingPage.actionButton2$visibility"
                            $widgetId="p44.MyFirstModule.SalesTrackingPage.actionButton2$visibility"
                            visible={ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" } ] }, "args": {} }
                            })}
                            contents={[
                                <$ActionButton key="p44.MyFirstModule.SalesTrackingPage.actionButton2"
                                    $widgetId="p44.MyFirstModule.SalesTrackingPage.actionButton2"
                                    buttonId={"p44.MyFirstModule.SalesTrackingPage.actionButton2"}
                                    class={"mx-name-actionButton2 btn-lg"}
                                    style={undefined}
                                    tabIndex={undefined}
                                    renderType={"link"}
                                    role={"button"}
                                    buttonClass={"btn-primary"}
                                    caption={t([
                                        ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                        })
                                    ])}
                                    tooltip={TextProperty({
                                        "value": t([
                                            ""
                                        ])
                                    })}
                                    icon={WebIconProperty({
                                        "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-trash-can" }
                                    })}
                                    action={ActionProperty({
                                        "action": { "type": "deleteObject", "argMap": { "$object": { "widget": "p44.MyFirstModule.SalesTrackingPage.dataGrid2_1", "source": "object" } }, "config": { "closePage": false, "operationId": "6IKFfEynSFycFdce8e4XmA" }, "disabledDuringExecution": true },
                                        "abortOnServerValidation": true
                                    })} />
                            ]} />
                    ]
                }),
                "dynamicText": t([
                    undefined
                ]),
                "exportValue": t([
                    undefined
                ]),
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": undefined,
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
        ]}
        columnsFilterable={true}
        pageSize={20}
        pagination={"buttons"}
        showPagingButtons={"always"}
        showNumberOfRows={false}
        pagingPosition={"bottom"}
        loadMoreButtonCaption={t([
            ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
            })
        ])}
        showEmptyPlaceholder={"none"}
        emptyPlaceholder={undefined}
        rowClass={undefined}
        onClickTrigger={"single"}
        onClick={undefined}
        onSelectionChange={undefined}
        columnsSortable={true}
        columnsResizable={true}
        columnsDraggable={true}
        columnsHidable={true}
        configurationStorageType={"attribute"}
        storeFiltersInPersonalization={true}
        filterList={[]}
        filtersPlaceholder={[
            <$ConditionalVisibilityWrapper key="p44.MyFirstModule.SalesTrackingPage.actionButton3$visibility"
                $widgetId="p44.MyFirstModule.SalesTrackingPage.actionButton3$visibility"
                visible={ExpressionProperty({
                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" } ] }, "args": {} }
                })}
                contents={[
                    <$ActionButton key="p44.MyFirstModule.SalesTrackingPage.actionButton3"
                        $widgetId="p44.MyFirstModule.SalesTrackingPage.actionButton3"
                        buttonId={"p44.MyFirstModule.SalesTrackingPage.actionButton3"}
                        class={"mx-name-actionButton3"}
                        style={undefined}
                        tabIndex={undefined}
                        renderType={"button"}
                        role={undefined}
                        buttonClass={"btn-primary"}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "New Sales tracking table" }, "args": {} }
                            })
                        ])}
                        tooltip={TextProperty({
                            "value": t([
                                ""
                            ])
                        })}
                        icon={WebIconProperty({
                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-add" }
                        })}
                        action={ActionProperty({
                            "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.SalesTrackingTable", "operationId": "6LqLgyBNxVKjcwybkc71nw", "pageSettings": { "name": "MyFirstModule/SalesTrackingTable_NewEdit.page.xml", "location": "content", "allowedRoles": [ "Administrator", "User", "SalesPerson" ] }, "allowedRoles": [ "Administrator", "User", "SalesPerson" ], "objectParameter": "param$SalesTrackingTable" }, "disabledDuringExecution": true },
                            "abortOnServerValidation": true
                        })} />
                ]} />
        ]}
        filterSectionTitle={t([
            ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
            })
        ])}
        exportDialogLabel={t([
            ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Export progress" }, "args": {} }
            })
        ])}
        cancelExportLabel={t([
            ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Cancel data export" }, "args": {} }
            })
        ])}
        selectRowLabel={t([
            ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Select row" }, "args": {} }
            })
        ])}
        class={"mx-name-dataGrid2_1"}
        style={undefined}
        tabIndex={undefined} />
]}</PageFragment>);

export const title = t([
    "Page"
]);

export const classes = "layout-atlas layout-atlas-responsive-default";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
