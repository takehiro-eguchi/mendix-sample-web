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

const { $Div, $Container, $Text, $Datagrid, $DatagridTextFilter, $DatagridDropdownFilter, $DatagridNumberFilter, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, Container, Text, Datagrid, DatagridTextFilter, DatagridDropdownFilter, DatagridNumberFilter, ConditionalVisibilityWrapper, ActionButton });

addEnumerations({
    "MyFirstModule.Status": [
        [
            "Active",
            t([
                "Active"
            ])
        ],
        [
            "Disable",
            t([
                "Disable"
            ])
        ]
    ]
});

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p21.MyFirstModule.ProductsPage.layoutGrid4"
        $widgetId="p21.MyFirstModule.ProductsPage.layoutGrid4"
        class={"mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p21.MyFirstModule.ProductsPage.layoutGrid4$row0"
                $widgetId="p21.MyFirstModule.ProductsPage.layoutGrid4$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p21.MyFirstModule.ProductsPage.layoutGrid4$row0$column0"
                        $widgetId="p21.MyFirstModule.ProductsPage.layoutGrid4$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Container key="p21.MyFirstModule.ProductsPage.container1"
                                $widgetId="p21.MyFirstModule.ProductsPage.container1"
                                class={"mx-name-container1 pageheader spacing-outer-bottom-large"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Div key="p21.MyFirstModule.ProductsPage.layoutGrid2"
                                        $widgetId="p21.MyFirstModule.ProductsPage.layoutGrid2"
                                        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid"}
                                        style={undefined}
                                        content={[
                                            <$Div key="p21.MyFirstModule.ProductsPage.layoutGrid2$row0"
                                                $widgetId="p21.MyFirstModule.ProductsPage.layoutGrid2$row0"
                                                class={"row"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p21.MyFirstModule.ProductsPage.layoutGrid2$row0$column0"
                                                        $widgetId="p21.MyFirstModule.ProductsPage.layoutGrid2$row0$column0"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Text key="p21.MyFirstModule.ProductsPage.text40"
                                                                $widgetId="p21.MyFirstModule.ProductsPage.text40"
                                                                class={"mx-name-text40 pageheader-title spacing-outer-bottom"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Products Page" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"h1"} />,
                                                            <$Text key="p21.MyFirstModule.ProductsPage.text39"
                                                                $widgetId="p21.MyFirstModule.ProductsPage.text39"
                                                                class={"mx-name-text39 pageheader-subtitle text-detail spacing-outer-bottom-large"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Manage, add, delete, update your products." }, "args": {} }
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
    <$Datagrid key="p21.MyFirstModule.ProductsPage.dataGrid2_1"
        $widgetId="p21.MyFirstModule.ProductsPage.dataGrid2_1"
        advanced={false}
        datasource={DatabaseObjectListProperty({
            "dataSourceId": "p21.18",
            "entity": "MyFirstModule.Products",
            "operationId": "1H2FFrg1dFiEDy0PH5QhDw",
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
                    "entity": "MyFirstModule.Products",
                    "attribute": "ProductName",
                    "attributeType": "String",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p21.18",
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
                        "expression": { "expr": { "type": "literal", "value": "Product name" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridTextFilter key="p21.MyFirstModule.ProductsPage.textFilter1"
                        $widgetId="p21.MyFirstModule.ProductsPage.textFilter1"
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
                    "entity": "MyFirstModule.Products",
                    "attribute": "Color",
                    "attributeType": "Enum",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p21.18",
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
                        "expression": { "expr": { "type": "literal", "value": "Color" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridDropdownFilter key="p21.MyFirstModule.ProductsPage.drop_downFilter1"
                        $widgetId="p21.MyFirstModule.ProductsPage.drop_downFilter1"
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
                    "entity": "MyFirstModule.Products",
                    "attribute": "SafetyStockLevel",
                    "attributeType": "Integer",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p21.18",
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
                        "expression": { "expr": { "type": "literal", "value": "Safety stock level" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridNumberFilter key="p21.MyFirstModule.ProductsPage.numberFilter1"
                        $widgetId="p21.MyFirstModule.ProductsPage.numberFilter1"
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
                    "entity": "MyFirstModule.Products",
                    "attribute": "ListPrice",
                    "attributeType": "Decimal",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p21.18",
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
                        "expression": { "expr": { "type": "literal", "value": "List price" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridNumberFilter key="p21.MyFirstModule.ProductsPage.numberFilter2"
                        $widgetId="p21.MyFirstModule.ProductsPage.numberFilter2"
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
                    "entity": "MyFirstModule.Products",
                    "attribute": "Size",
                    "attributeType": "Enum",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p21.18",
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
                        "expression": { "expr": { "type": "literal", "value": "Size" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridDropdownFilter key="p21.MyFirstModule.ProductsPage.drop_downFilter2"
                        $widgetId="p21.MyFirstModule.ProductsPage.drop_downFilter2"
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
                    "entity": "MyFirstModule.Products",
                    "attribute": "Weight",
                    "attributeType": "Decimal",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p21.18",
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
                        "expression": { "expr": { "type": "literal", "value": "Weight" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridNumberFilter key="p21.MyFirstModule.ProductsPage.numberFilter3"
                        $widgetId="p21.MyFirstModule.ProductsPage.numberFilter3"
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
                    "entity": "MyFirstModule.Products",
                    "attribute": "Style",
                    "attributeType": "String",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p21.18",
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
                        "expression": { "expr": { "type": "literal", "value": "Style" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridTextFilter key="p21.MyFirstModule.ProductsPage.textFilter2"
                        $widgetId="p21.MyFirstModule.ProductsPage.textFilter2"
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
                    "entity": "MyFirstModule.Products",
                    "attribute": "ModelName",
                    "attributeType": "String",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p21.18",
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
                        "expression": { "expr": { "type": "literal", "value": "Model name" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridTextFilter key="p21.MyFirstModule.ProductsPage.textFilter3"
                        $widgetId="p21.MyFirstModule.ProductsPage.textFilter3"
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
                    "entity": "MyFirstModule.Products",
                    "attribute": "Status",
                    "attributeType": "Enum",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p21.18",
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
                        "expression": { "expr": { "type": "literal", "value": "Status" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": [
                    <$DatagridDropdownFilter key="p21.MyFirstModule.ProductsPage.drop_downFilter3"
                        $widgetId="p21.MyFirstModule.ProductsPage.drop_downFilter3"
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
                        class={"mx-name-drop_downFilter3"}
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
                "showContentAs": "customContent",
                "attribute": ListAttributeProperty({
                    "path": "",
                    "entity": "MyFirstModule.Products",
                    "attribute": "ProductName",
                    "attributeType": "String",
                    "sortable": true,
                    "filterable": true,
                    "dataSourceId": "p21.18",
                    "isList": false
                }),
                "content": TemplatedWidgetProperty({
                    "dataSourceId": "p21.18",
                    "editable": false,
                    "children": () => [
                        <$ConditionalVisibilityWrapper key="p21.MyFirstModule.ProductsPage.actionButton1$visibility"
                            $widgetId="p21.MyFirstModule.ProductsPage.actionButton1$visibility"
                            visible={ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                            })}
                            contents={[
                                <$ActionButton key="p21.MyFirstModule.ProductsPage.actionButton1"
                                    $widgetId="p21.MyFirstModule.ProductsPage.actionButton1"
                                    buttonId={"p21.MyFirstModule.ProductsPage.actionButton1"}
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
                                        "action": { "type": "openPage", "argMap": { "param$Products": { "widget": "p21.MyFirstModule.ProductsPage.dataGrid2_1", "source": "object" } }, "config": { "name": "MyFirstModule/Products_NewEdit.page.xml", "location": "content", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                        "abortOnServerValidation": true
                                    })} />
                            ]} />,
                        <$ConditionalVisibilityWrapper key="p21.MyFirstModule.ProductsPage.actionButton2$visibility"
                            $widgetId="p21.MyFirstModule.ProductsPage.actionButton2$visibility"
                            visible={ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" } ] }, "args": {} }
                            })}
                            contents={[
                                <$ActionButton key="p21.MyFirstModule.ProductsPage.actionButton2"
                                    $widgetId="p21.MyFirstModule.ProductsPage.actionButton2"
                                    buttonId={"p21.MyFirstModule.ProductsPage.actionButton2"}
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
                                        "action": { "type": "callMicroflow", "argMap": { "DeleteProduct": { "widget": "p21.MyFirstModule.ProductsPage.dataGrid2_1", "source": "object" } }, "config": { "operationId": "IIjXzuNRAFW025+qj4CALw", "validate": "view", "allowedRoles": [ "Administrator", "User", "SalesPerson" ] }, "disabledDuringExecution": true },
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
            <$ConditionalVisibilityWrapper key="p21.MyFirstModule.ProductsPage.actionButton3$visibility"
                $widgetId="p21.MyFirstModule.ProductsPage.actionButton3$visibility"
                visible={ExpressionProperty({
                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                })}
                contents={[
                    <$ActionButton key="p21.MyFirstModule.ProductsPage.actionButton3"
                        $widgetId="p21.MyFirstModule.ProductsPage.actionButton3"
                        buttonId={"p21.MyFirstModule.ProductsPage.actionButton3"}
                        class={"mx-name-actionButton3 spacing-outer-top spacing-outer-right spacing-outer-left spacing-outer-bottom"}
                        style={undefined}
                        tabIndex={undefined}
                        renderType={"button"}
                        role={undefined}
                        buttonClass={"btn-primary"}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "New Products" }, "args": {} }
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
                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "YEOytzhexViQH8ZlpB43QQ", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                            "abortOnServerValidation": true
                        })} />
                ]} />,
            <$ConditionalVisibilityWrapper key="p21.MyFirstModule.ProductsPage.actionButton4$visibility"
                $widgetId="p21.MyFirstModule.ProductsPage.actionButton4$visibility"
                visible={ExpressionProperty({
                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                })}
                contents={[
                    <$ActionButton key="p21.MyFirstModule.ProductsPage.actionButton4"
                        $widgetId="p21.MyFirstModule.ProductsPage.actionButton4"
                        buttonId={"p21.MyFirstModule.ProductsPage.actionButton4"}
                        class={"mx-name-actionButton4 spacing-outer-right spacing-outer-bottom spacing-outer-left spacing-outer-top"}
                        style={undefined}
                        tabIndex={undefined}
                        renderType={"button"}
                        role={undefined}
                        buttonClass={"btn-success"}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "All Active" }, "args": {} }
                            })
                        ])}
                        tooltip={TextProperty({
                            "value": t([
                                ""
                            ])
                        })}
                        icon={WebIconProperty({
                            "icon": { "type": "glyph", "iconClass": "glyphicon-plus" }
                        })}
                        action={ActionProperty({
                            "action": { "type": "callMicroflow", "argMap": { "Status": { "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }, "kind": "primitive" } }, "config": { "operationId": "NhUNp3s4H1iqWgT3xHn/Sw", "validate": "view", "allowedRoles": [ "Administrator", "User", "SalesPerson" ] }, "disabledDuringExecution": true },
                            "abortOnServerValidation": true
                        })} />
                ]} />,
            <$ConditionalVisibilityWrapper key="p21.MyFirstModule.ProductsPage.actionButton5$visibility"
                $widgetId="p21.MyFirstModule.ProductsPage.actionButton5$visibility"
                visible={ExpressionProperty({
                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" } ] }, "args": {} }
                })}
                contents={[
                    <$ActionButton key="p21.MyFirstModule.ProductsPage.actionButton5"
                        $widgetId="p21.MyFirstModule.ProductsPage.actionButton5"
                        buttonId={"p21.MyFirstModule.ProductsPage.actionButton5"}
                        class={"mx-name-actionButton5 spacing-outer-top spacing-outer-right spacing-outer-left spacing-outer-bottom"}
                        style={undefined}
                        tabIndex={undefined}
                        renderType={"button"}
                        role={undefined}
                        buttonClass={"btn-warning"}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "All Disabled" }, "args": {} }
                            })
                        ])}
                        tooltip={TextProperty({
                            "value": t([
                                ""
                            ])
                        })}
                        icon={WebIconProperty({
                            "icon": { "type": "glyph", "iconClass": "glyphicon-minus" }
                        })}
                        action={ActionProperty({
                            "action": { "type": "callMicroflow", "argMap": { "Status": { "expression": { "expr": { "type": "literal", "value": "Disable" }, "args": {} }, "kind": "primitive" } }, "config": { "operationId": "NhUNp3s4H1iqWgT3xHn/Sw", "validate": "view", "allowedRoles": [ "Administrator", "User", "SalesPerson" ] }, "disabledDuringExecution": true },
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
