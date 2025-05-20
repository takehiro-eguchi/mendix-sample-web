import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListActionProperty } from "mendix/ListActionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { Div } from "mendix/widgets/web/Div";
import { ListView } from "mendix/widgets/web/ListView";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Phone_Default.js";

const { $Div, $ConditionalVisibilityWrapper, $ActionButton, $ListView, $Container, $Text } = asPluginWidgets({ Div, ConditionalVisibilityWrapper, ActionButton, ListView, Container, Text });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p28.MyFirstModule.SalesOrderDraftPage.layoutGrid1"
        $widgetId="p28.MyFirstModule.SalesOrderDraftPage.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p28.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0"
                $widgetId="p28.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p28.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0$column0"
                        $widgetId="p28.MyFirstModule.SalesOrderDraftPage.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$ConditionalVisibilityWrapper key="p28.MyFirstModule.SalesOrderDraftPage.actionButton1$visibility"
                                $widgetId="p28.MyFirstModule.SalesOrderDraftPage.actionButton1$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$ActionButton key="p28.MyFirstModule.SalesOrderDraftPage.actionButton1"
                                        $widgetId="p28.MyFirstModule.SalesOrderDraftPage.actionButton1"
                                        buttonId={"p28.MyFirstModule.SalesOrderDraftPage.actionButton1"}
                                        class={"mx-name-actionButton1"}
                                        style={{
                                            "float": "right",
                                            "marginTop": "10px",
                                            "marginBottom": "10px",
                                            "marginRight": "10px"
                                        }}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-primary"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Add Order" }, "args": {} }
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
                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "pVuWxuONlVqV/XL6/pAnUA", "validate": "view", "allowedRoles": [ "Administrator", "User", "SalesPerson" ] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />,
    <$ListView key="p28.MyFirstModule.SalesOrderDraftPage.listView1"
        $widgetId="p28.MyFirstModule.SalesOrderDraftPage.listView1"
        class={"mx-name-listView1"}
        style={undefined}
        listValue={DatabaseObjectListProperty({
            "dataSourceId": "p28.9",
            "entity": "MyFirstModule.SalesTrackingTableTemporary",
            "operationId": "ebNjBkSrm1+zbdPIoCQGPQ",
            "sort": [],
            "constraints": { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "System.owner", "context": "MyFirstModule.SalesTrackingTableTemporary", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" } ] }
        })}
        searchAttributes={[
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.SalesTrackingTableTemporary",
                "attribute": "SalesID",
                "attributeType": "AutoNumber",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p28.9",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.SalesTrackingTableTemporary",
                "attribute": "OrderQuantity",
                "attributeType": "Integer",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p28.9",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.SalesTrackingTableTemporary",
                "attribute": "UnitPrice",
                "attributeType": "Decimal",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p28.9",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.SalesTrackingTableTemporary",
                "attribute": "DiscountAmount",
                "attributeType": "Decimal",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p28.9",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.SalesTrackingTableTemporary",
                "attribute": "ProductStandardCost",
                "attributeType": "Decimal",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p28.9",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.SalesTrackingTableTemporary",
                "attribute": "TaxAmt",
                "attributeType": "Decimal",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p28.9",
                "isList": false
            })
        ]}
        itemTemplate={TemplatedWidgetProperty({
            "dataSourceId": "p28.9",
            "editable": false,
            "children": () => [
                <$Container key="p28.MyFirstModule.SalesOrderDraftPage.container1"
                    $widgetId="p28.MyFirstModule.SalesOrderDraftPage.container1"
                    class={"mx-name-container1"}
                    style={undefined}
                    renderMode={"div"}
                    onClick={undefined}
                    content={[
                        <$Text key="p28.MyFirstModule.SalesOrderDraftPage.text1"
                            $widgetId="p28.MyFirstModule.SalesOrderDraftPage.text1"
                            class={"mx-name-text1"}
                            style={{
                                "fontWeight": "bold"
                            }}
                            caption={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SalesID" }, { "type": "literal", "value": "{}" } ] }, "args": { "currentObject": { "widget": "p28.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
                                })
                            ])}
                            renderMode={"span"} />,
                        <$Text key="p28.MyFirstModule.SalesOrderDraftPage.text10"
                            $widgetId="p28.MyFirstModule.SalesOrderDraftPage.text10"
                            class={"mx-name-text10"}
                            style={undefined}
                            caption={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": " / " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.SalesTrackingTableTemporary_Customers/MyFirstModule.Customers/FirstName" } ] }, "args": { "currentObject": { "widget": "p28.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
                                })
                            ])}
                            renderMode={"span"} />,
                        <$Text key="p28.MyFirstModule.SalesOrderDraftPage.text11"
                            $widgetId="p28.MyFirstModule.SalesOrderDraftPage.text11"
                            class={"mx-name-text11"}
                            style={undefined}
                            caption={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": " / " }, { "type": "variable", "variable": "currentObject", "path": "MyFirstModule.SalesTrackingTableTemporary_Products/MyFirstModule.Products/ProductName" } ] }, "args": { "currentObject": { "widget": "p28.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } } }
                                })
                            ])}
                            renderMode={"span"} />
                    ]}
                    ariaHidden={false} />
            ]
        })}
        onClick={ListActionProperty({
            "action": { "type": "openPage", "argMap": { "param$SalesTrackingTableTemporary": { "widget": "p28.MyFirstModule.SalesOrderDraftPage.listView1", "source": "object" } }, "config": { "name": "MyFirstModule/DraftSalesOrder_Edit.page.xml", "location": "content", "allowedRoles": [ "Administrator", "User", "SalesPerson" ] }, "disabledDuringExecution": true },
            "abortOnServerValidation": false,
            "dataSourceId": "p28.9"
        })}
        pageSize={10} />,
    <$ConditionalVisibilityWrapper key="p28.MyFirstModule.SalesOrderDraftPage.actionButton2$visibility"
        $widgetId="p28.MyFirstModule.SalesOrderDraftPage.actionButton2$visibility"
        visible={ExpressionProperty({
            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }, { "type": "literal", "value": "SalesPerson" } ] }, "args": {} }
        })}
        contents={[
            <$ActionButton key="p28.MyFirstModule.SalesOrderDraftPage.actionButton2"
                $widgetId="p28.MyFirstModule.SalesOrderDraftPage.actionButton2"
                buttonId={"p28.MyFirstModule.SalesOrderDraftPage.actionButton2"}
                class={"mx-name-actionButton2"}
                style={undefined}
                tabIndex={undefined}
                renderType={"button"}
                role={undefined}
                buttonClass={"btn-success"}
                caption={t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Create Sales Order" }, "args": {} }
                    })
                ])}
                tooltip={TextProperty({
                    "value": t([
                        ""
                    ])
                })}
                icon={undefined}
                action={ActionProperty({
                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "NX1TrnUxm1WQLvqbKwwtQA", "validate": "view", "allowedRoles": [ "Administrator", "User", "SalesPerson" ] }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                })} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Sales order draft"
]);

export const classes = "layout-atlas layout-atlas-phone";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Phone_Default.Main": region$Main,
};
