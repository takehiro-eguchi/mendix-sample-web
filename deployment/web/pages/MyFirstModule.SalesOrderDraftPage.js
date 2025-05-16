import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListActionProperty } from "mendix/ListActionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";

import { Container } from "mendix/widgets/web/Container";
import { Div } from "mendix/widgets/web/Div";
import { ListView } from "mendix/widgets/web/ListView";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Phone_Default.js";

const { $Div, $ListView, $Container, $Text } = asPluginWidgets({ Div, ListView, Container, Text });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p0.MyFirstModule.SalesOrderDraftPage.layoutGrid1"
        $widgetId="p0.MyFirstModule.SalesOrderDraftPage.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p0.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0"
                $widgetId="p0.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p0.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0$column0"
                        $widgetId="p0.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={undefined} />
                ]} />
        ]} />,
    <$ListView key="p0.MyFirstModule.SalesOrderDraftPage.listView1"
        $widgetId="p0.MyFirstModule.SalesOrderDraftPage.listView1"
        class={"mx-name-listView1"}
        style={undefined}
        listValue={DatabaseObjectListProperty({
            "dataSourceId": "p0.6",
            "entity": "MyFirstModule.SalesTrackingTableTemporary",
            "operationId": "ebNjBkSrm1+zbdPIoCQGPQ",
            "sort": []
        })}
        searchAttributes={[
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.SalesTrackingTableTemporary",
                "attribute": "SalesID",
                "attributeType": "AutoNumber",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p0.6",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.SalesTrackingTableTemporary",
                "attribute": "OrderQuantity",
                "attributeType": "Integer",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p0.6",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.SalesTrackingTableTemporary",
                "attribute": "UnitPrice",
                "attributeType": "Decimal",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p0.6",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.SalesTrackingTableTemporary",
                "attribute": "DiscountAmount",
                "attributeType": "Decimal",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p0.6",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.SalesTrackingTableTemporary",
                "attribute": "ProductStandardCost",
                "attributeType": "Decimal",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p0.6",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.SalesTrackingTableTemporary",
                "attribute": "TaxAmt",
                "attributeType": "Decimal",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p0.6",
                "isList": false
            })
        ]}
        itemTemplate={TemplatedWidgetProperty({
            "dataSourceId": "p0.6",
            "editable": false,
            "children": () => [
                <$Container key="p0.MyFirstModule.SalesOrderDraftPage.container1"
                    $widgetId="p0.MyFirstModule.SalesOrderDraftPage.container1"
                    class={"mx-name-container1"}
                    style={undefined}
                    renderMode={"div"}
                    onClick={undefined}
                    content={[
                        <$Text key="p0.MyFirstModule.SalesOrderDraftPage.text1"
                            $widgetId="p0.MyFirstModule.SalesOrderDraftPage.text1"
                            class={"mx-name-text1"}
                            style={undefined}
                            caption={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SalesID" }, { "type": "literal", "value": "{}" } ] }, "args": { "currentObject": { "widget": "p0.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
                                })
                            ])}
                            renderMode={"span"} />,
                        <$Text key="p0.MyFirstModule.SalesOrderDraftPage.text10"
                            $widgetId="p0.MyFirstModule.SalesOrderDraftPage.text10"
                            class={"mx-name-text10"}
                            style={undefined}
                            caption={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.SalesTrackingTableTemporary_Customers/MyFirstModule.Customers/FirstName" }, "args": { "currentObject": { "widget": "p0.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
                                })
                            ])}
                            renderMode={"span"} />,
                        <$Text key="p0.MyFirstModule.SalesOrderDraftPage.text11"
                            $widgetId="p0.MyFirstModule.SalesOrderDraftPage.text11"
                            class={"mx-name-text11"}
                            style={undefined}
                            caption={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.SalesTrackingTableTemporary_Products/MyFirstModule.Products/ProductName" }, "args": { "currentObject": { "widget": "p0.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
                                })
                            ])}
                            renderMode={"span"} />
                    ]}
                    ariaHidden={false} />
            ]
        })}
        onClick={ListActionProperty({
            "action": { "type": "openPage", "argMap": { "param$SalesTrackingTableTemporary": { "widget": "p0.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } }, "config": { "name": "MyFirstModule/DraftSalesOrder_Edit.page.xml", "location": "content" }, "disabledDuringExecution": true },
            "abortOnServerValidation": false,
            "dataSourceId": "p0.6"
        })}
        pageSize={10} />
]}</PageFragment>);

export const title = t([
    "Sales order draft"
]);

export const classes = "layout-atlas layout-atlas-phone";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Phone_Default.Main": region$Main,
};
