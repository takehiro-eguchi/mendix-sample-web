import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";

import { ListView } from "mendix/widgets/web/ListView";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Phone_BottomBar.js";

const { $ListView, $Text } = asPluginWidgets({ ListView, Text });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$ListView key="p1.MyFirstModule.CuttomerMobilePage.listView3"
        $widgetId="p1.MyFirstModule.CuttomerMobilePage.listView3"
        class={"mx-name-listView3 listview-lined listview-hover"}
        style={undefined}
        listValue={DatabaseObjectListProperty({
            "dataSourceId": "p1.0",
            "entity": "MyFirstModule.Customers",
            "operationId": "CDWzLar461yjypd8sLNc4g",
            "sort": []
        })}
        searchAttributes={[
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Customers",
                "attribute": "FirstName",
                "attributeType": "String",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p1.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Customers",
                "attribute": "LastName",
                "attributeType": "String",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p1.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Customers",
                "attribute": "MailAddress",
                "attributeType": "String",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p1.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Customers",
                "attribute": "PhoneNumber",
                "attributeType": "String",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p1.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Customers",
                "attribute": "AverageYearlyIncome",
                "attributeType": "Decimal",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p1.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Customers",
                "attribute": "AverageSalesOrderQuantity",
                "attributeType": "Integer",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p1.0",
                "isList": false
            })
        ]}
        itemTemplate={TemplatedWidgetProperty({
            "dataSourceId": "p1.0",
            "editable": false,
            "children": () => [
                <$Text key="p1.MyFirstModule.CuttomerMobilePage.text1"
                    $widgetId="p1.MyFirstModule.CuttomerMobilePage.text1"
                    class={"mx-name-text1"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "FirstName" }, "args": { "currentObject": { "widget": "p1.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />,
                <$Text key="p1.MyFirstModule.CuttomerMobilePage.text2"
                    $widgetId="p1.MyFirstModule.CuttomerMobilePage.text2"
                    class={"mx-name-text2"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "LastName" }, "args": { "currentObject": { "widget": "p1.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />,
                <$Text key="p1.MyFirstModule.CuttomerMobilePage.text3"
                    $widgetId="p1.MyFirstModule.CuttomerMobilePage.text3"
                    class={"mx-name-text3"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "BirthDate" }, { "type": "literal", "value": "{\"type\":\"date\"}" } ] }, "args": { "currentObject": { "widget": "p1.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />,
                <$Text key="p1.MyFirstModule.CuttomerMobilePage.text4"
                    $widgetId="p1.MyFirstModule.CuttomerMobilePage.text4"
                    class={"mx-name-text4"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "MaritialStatus" }, { "type": "literal", "value": "MyFirstModule.MaritialStatus" } ] }, "args": { "currentObject": { "widget": "p1.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />,
                <$Text key="p1.MyFirstModule.CuttomerMobilePage.text5"
                    $widgetId="p1.MyFirstModule.CuttomerMobilePage.text5"
                    class={"mx-name-text5"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Gender" }, { "type": "literal", "value": "MyFirstModule.Gender" } ] }, "args": { "currentObject": { "widget": "p1.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />,
                <$Text key="p1.MyFirstModule.CuttomerMobilePage.text6"
                    $widgetId="p1.MyFirstModule.CuttomerMobilePage.text6"
                    class={"mx-name-text6"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "MailAddress" }, "args": { "currentObject": { "widget": "p1.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />,
                <$Text key="p1.MyFirstModule.CuttomerMobilePage.text7"
                    $widgetId="p1.MyFirstModule.CuttomerMobilePage.text7"
                    class={"mx-name-text7"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "PhoneNumber" }, "args": { "currentObject": { "widget": "p1.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />,
                <$Text key="p1.MyFirstModule.CuttomerMobilePage.text8"
                    $widgetId="p1.MyFirstModule.CuttomerMobilePage.text8"
                    class={"mx-name-text8"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "AverageYearlyIncome" }, { "type": "literal", "value": "{\"decimalPrecision\":2}" } ] }, "args": { "currentObject": { "widget": "p1.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />,
                <$Text key="p1.MyFirstModule.CuttomerMobilePage.text9"
                    $widgetId="p1.MyFirstModule.CuttomerMobilePage.text9"
                    class={"mx-name-text9"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "AverageSalesOrderQuantity" }, { "type": "literal", "value": "{}" } ] }, "args": { "currentObject": { "widget": "p1.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />
            ]
        })}
        onClick={undefined}
        pageSize={5} />
]}</PageFragment>);

export const title = t([
    "Page"
]);

export const classes = "layout-atlas layout-atlas-phone";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Phone_BottomBar.Main": region$Main,
};
