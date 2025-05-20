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
import * as DatagridDropdownFilterWidgetModule from "C:/work/git/mendix-sample-web/deployment/web/widgets/com/mendix/widget/web/datagriddropdownfilter/DatagridDropdownFilter.mjs";
const DatagridDropdownFilter = Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "DatagridDropdownFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "default")?.value;   
import * as DatagridNumberFilterWidgetModule from "C:/work/git/mendix-sample-web/deployment/web/widgets/com/mendix/widget/web/datagridnumberfilter/DatagridNumberFilter.mjs";
const DatagridNumberFilter = Object.getOwnPropertyDescriptor(DatagridNumberFilterWidgetModule, "DatagridNumberFilter")?.value || Object.getOwnPropertyDescriptor(DatagridNumberFilterWidgetModule, "default")?.value;   
import * as DatagridTextFilterWidgetModule from "C:/work/git/mendix-sample-web/deployment/web/widgets/com/mendix/widget/web/datagridtextfilter/DatagridTextFilter.mjs";
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;   
import { Div } from "mendix/widgets/web/Div";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";

const { $Div, $Container, $Text, $Datagrid, $DatagridTextFilter, $DatagridDateFilter, $DatagridDropdownFilter, $DatagridNumberFilter, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, Container, Text, Datagrid, DatagridTextFilter, DatagridDateFilter, DatagridDropdownFilter, DatagridNumberFilter, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p46.MyFirstModule.CustomersPage.layoutGrid2"
        $widgetId="p46.MyFirstModule.CustomersPage.layoutGrid2"
        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p46.MyFirstModule.CustomersPage.layoutGrid2$row0"
                $widgetId="p46.MyFirstModule.CustomersPage.layoutGrid2$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p46.MyFirstModule.CustomersPage.layoutGrid2$row0$column0"
                        $widgetId="p46.MyFirstModule.CustomersPage.layoutGrid2$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Container key="p46.MyFirstModule.CustomersPage.container1"
                                $widgetId="p46.MyFirstModule.CustomersPage.container1"
                                class={"mx-name-container1 pageheader spacing-outer-bottom-large"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p46.MyFirstModule.CustomersPage.text40"
                                        $widgetId="p46.MyFirstModule.CustomersPage.text40"
                                        class={"mx-name-text40 pageheader-title spacing-outer-bottom"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Customers Page" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h1"} />,
                                    <$Text key="p46.MyFirstModule.CustomersPage.text39"
                                        $widgetId="p46.MyFirstModule.CustomersPage.text39"
                                        class={"mx-name-text39 pageheader-subtitle text-detail spacing-outer-bottom-large"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Add, update and delete customers." }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"p"} />
                                ]}
                                ariaHidden={false} />
                        ]} />
                ]} />
        ]} />,
    <$Datagrid key="p46.MyFirstModule.CustomersPage.dataGrid2_1"
        $widgetId="p46.MyFirstModule.CustomersPage.dataGrid2_1"
        advanced={false}
        datasource={DatabaseObjectListProperty({
            "dataSourceId": "p46.12",
            "entity": "MyFirstModule.Customers",
            "operationId": "ODw/vuIgQVau84Xbhaetjw",
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
                    "entity": "MyFirstModule.Customers",
                    "attribute": "FirstName",
                    "attributeType": "String",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p46.12",
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
                        "expression": { "expr": { "type": "literal", "value": "First name" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridTextFilter key="p46.MyFirstModule.CustomersPage.textFilter1"
                        $widgetId="p46.MyFirstModule.CustomersPage.textFilter1"
                        advanced={false}
                        defaultValue={undefined}
                        defaultFilter={"contains"}
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
                        class={"mx-name-textFilter1"}
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
                    "entity": "MyFirstModule.Customers",
                    "attribute": "LastName",
                    "attributeType": "String",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p46.12",
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
                        "expression": { "expr": { "type": "literal", "value": "Last name" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridTextFilter key="p46.MyFirstModule.CustomersPage.textFilter2"
                        $widgetId="p46.MyFirstModule.CustomersPage.textFilter2"
                        advanced={false}
                        defaultValue={undefined}
                        defaultFilter={"contains"}
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
                        class={"mx-name-textFilter2"}
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
                    "entity": "MyFirstModule.Customers",
                    "attribute": "BirthDate",
                    "attributeType": "DateTime",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p46.12",
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
                        "expression": { "expr": { "type": "literal", "value": "Birth date" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridDateFilter key="p46.MyFirstModule.CustomersPage.dateFilter1"
                        $widgetId="p46.MyFirstModule.CustomersPage.dateFilter1"
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
                    "entity": "MyFirstModule.Customers",
                    "attribute": "MaritialStatus",
                    "attributeType": "Enum",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p46.12",
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
                        "expression": { "expr": { "type": "literal", "value": "Maritial status" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridDropdownFilter key="p46.MyFirstModule.CustomersPage.drop_downFilter1"
                        $widgetId="p46.MyFirstModule.CustomersPage.drop_downFilter1"
                        auto={true}
                        defaultValue={undefined}
                        filterOptions={[]}
                        filterable={false}
                        multiSelect={false}
                        emptyOptionCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        clearable={true}
                        selectedItemsStyle={"text"}
                        selectionMethod={"checkbox"}
                        onChange={undefined}
                        ariaLabel={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        class={"mx-name-drop_downFilter1"}
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
                    "entity": "MyFirstModule.Customers",
                    "attribute": "Gender",
                    "attributeType": "Enum",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p46.12",
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
                        "expression": { "expr": { "type": "literal", "value": "Gender" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridDropdownFilter key="p46.MyFirstModule.CustomersPage.drop_downFilter2"
                        $widgetId="p46.MyFirstModule.CustomersPage.drop_downFilter2"
                        auto={true}
                        defaultValue={undefined}
                        filterOptions={[]}
                        filterable={false}
                        multiSelect={false}
                        emptyOptionCaption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        clearable={true}
                        selectedItemsStyle={"text"}
                        selectionMethod={"checkbox"}
                        onChange={undefined}
                        ariaLabel={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                            })
                        ])}
                        class={"mx-name-drop_downFilter2"}
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
                    "entity": "MyFirstModule.Customers",
                    "attribute": "MailAddress",
                    "attributeType": "String",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p46.12",
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
                        "expression": { "expr": { "type": "literal", "value": "Mail address" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridTextFilter key="p46.MyFirstModule.CustomersPage.textFilter3"
                        $widgetId="p46.MyFirstModule.CustomersPage.textFilter3"
                        advanced={false}
                        defaultValue={undefined}
                        defaultFilter={"contains"}
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
                        class={"mx-name-textFilter3"}
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
                    "entity": "MyFirstModule.Customers",
                    "attribute": "PhoneNumber",
                    "attributeType": "String",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p46.12",
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
                        "expression": { "expr": { "type": "literal", "value": "Phone number" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridTextFilter key="p46.MyFirstModule.CustomersPage.textFilter4"
                        $widgetId="p46.MyFirstModule.CustomersPage.textFilter4"
                        advanced={false}
                        defaultValue={undefined}
                        defaultFilter={"contains"}
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
                        class={"mx-name-textFilter4"}
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
                    "entity": "MyFirstModule.Customers",
                    "attribute": "AverageYearlyIncome",
                    "attributeType": "Decimal",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p46.12",
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
                        "expression": { "expr": { "type": "literal", "value": "Average yearly income" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridNumberFilter key="p46.MyFirstModule.CustomersPage.numberFilter1"
                        $widgetId="p46.MyFirstModule.CustomersPage.numberFilter1"
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
                    "entity": "MyFirstModule.Customers",
                    "attribute": "AverageSalesOrderQuantity",
                    "attributeType": "Integer",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p46.12",
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
                        "expression": { "expr": { "type": "literal", "value": "Average sales order quantity" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridNumberFilter key="p46.MyFirstModule.CustomersPage.numberFilter2"
                        $widgetId="p46.MyFirstModule.CustomersPage.numberFilter2"
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
                "showContentAs": "customContent",
                "attribute": ListAttributeProperty({
                    "path": "",
                    "entity": "MyFirstModule.Customers",
                    "attribute": "FirstName",
                    "attributeType": "String",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p46.12",
                    "isList": false
                }),
                "content": TemplatedWidgetProperty({
                    "dataSourceId": "p46.12",
                    "editable": false,
                    "children": () => [
                        <$ConditionalVisibilityWrapper key="p46.MyFirstModule.CustomersPage.actionButton1$visibility"
                            $widgetId="p46.MyFirstModule.CustomersPage.actionButton1$visibility"
                            visible={ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" } ] }, "args": {} }
                            })}
                            contents={[
                                <$ActionButton key="p46.MyFirstModule.CustomersPage.actionButton1"
                                    $widgetId="p46.MyFirstModule.CustomersPage.actionButton1"
                                    buttonId={"p46.MyFirstModule.CustomersPage.actionButton1"}
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
                                        "action": { "type": "openPage", "argMap": { "param$Customers": { "widget": "p46.MyFirstModule.CustomersPage.dataGrid2_1", "source": "object" } }, "config": { "name": "MyFirstModule/Customers_NewEdit.page.xml", "location": "content", "allowedRoles": [ "Administrator", "User", "SalesPerson" ] }, "disabledDuringExecution": true },
                                        "abortOnServerValidation": true
                                    })} />
                            ]} />,
                        <$ActionButton key="p46.MyFirstModule.CustomersPage.actionButton2"
                            $widgetId="p46.MyFirstModule.CustomersPage.actionButton2"
                            buttonId={"p46.MyFirstModule.CustomersPage.actionButton2"}
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
                            action={undefined} />
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
            <$ConditionalVisibilityWrapper key="p46.MyFirstModule.CustomersPage.actionButton3$visibility"
                $widgetId="p46.MyFirstModule.CustomersPage.actionButton3$visibility"
                visible={ExpressionProperty({
                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" } ] }, "args": {} }
                })}
                contents={[
                    <$ActionButton key="p46.MyFirstModule.CustomersPage.actionButton3"
                        $widgetId="p46.MyFirstModule.CustomersPage.actionButton3"
                        buttonId={"p46.MyFirstModule.CustomersPage.actionButton3"}
                        class={"mx-name-actionButton3"}
                        style={undefined}
                        tabIndex={undefined}
                        renderType={"button"}
                        role={undefined}
                        buttonClass={"btn-primary"}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "New Customers" }, "args": {} }
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
                            "action": { "type": "createObject", "argMap": {}, "config": { "entity": "MyFirstModule.Customers", "operationId": "CcEC4Frt/lyuh+gZy7aEfg", "pageSettings": { "name": "MyFirstModule/Customers_NewEdit.page.xml", "location": "content", "allowedRoles": [ "Administrator", "User", "SalesPerson" ] }, "allowedRoles": [ "Administrator", "User", "SalesPerson" ], "objectParameter": "param$Customers" }, "disabledDuringExecution": true },
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
    "Customers page"
]);

export const classes = "layout-atlas layout-atlas-responsive-default";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
