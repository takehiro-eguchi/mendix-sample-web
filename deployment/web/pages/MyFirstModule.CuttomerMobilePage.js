import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListActionProperty } from "mendix/ListActionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";

import { Container } from "mendix/widgets/web/Container";
import { ListView } from "mendix/widgets/web/ListView";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Phone_BottomBar.js";

const { $ListView, $Container, $Text } = asPluginWidgets({ ListView, Container, Text });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$ListView key="p29.MyFirstModule.CuttomerMobilePage.listView3"
        $widgetId="p29.MyFirstModule.CuttomerMobilePage.listView3"
        class={"mx-name-listView3 listview-lined listview-hover"}
        style={undefined}
        listValue={DatabaseObjectListProperty({
            "dataSourceId": "p29.0",
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
                "dataSourceId": "p29.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Customers",
                "attribute": "LastName",
                "attributeType": "String",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p29.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Customers",
                "attribute": "MailAddress",
                "attributeType": "String",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p29.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Customers",
                "attribute": "PhoneNumber",
                "attributeType": "String",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p29.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Customers",
                "attribute": "AverageYearlyIncome",
                "attributeType": "Decimal",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p29.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Customers",
                "attribute": "AverageSalesOrderQuantity",
                "attributeType": "Integer",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p29.0",
                "isList": false
            })
        ]}
        itemTemplate={TemplatedWidgetProperty({
            "dataSourceId": "p29.0",
            "editable": false,
            "children": () => [
                <$Container key="p29.MyFirstModule.CuttomerMobilePage.container1"
                    $widgetId="p29.MyFirstModule.CuttomerMobilePage.container1"
                    class={"mx-name-container1"}
                    style={undefined}
                    renderMode={"div"}
                    onClick={undefined}
                    content={[
                        <$Text key="p29.MyFirstModule.CuttomerMobilePage.text10"
                            $widgetId="p29.MyFirstModule.CuttomerMobilePage.text10"
                            class={"mx-name-text10 text-bold"}
                            style={undefined}
                            caption={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "名前　：" }, "args": {} }
                                })
                            ])}
                            renderMode={"span"} />,
                        <$Text key="p29.MyFirstModule.CuttomerMobilePage.text1"
                            $widgetId="p29.MyFirstModule.CuttomerMobilePage.text1"
                            class={"mx-name-text1"}
                            style={undefined}
                            caption={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "FirstName" }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                                })
                            ])}
                            renderMode={"span"} />,
                        <$Text key="p29.MyFirstModule.CuttomerMobilePage.text2"
                            $widgetId="p29.MyFirstModule.CuttomerMobilePage.text2"
                            class={"mx-name-text2"}
                            style={undefined}
                            caption={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": " " }, { "type": "variable", "variable": "currentObject", "path": "LastName" } ] }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                                })
                            ])}
                            renderMode={"span"} />
                    ]}
                    ariaHidden={false} />,
                <$Container key="p29.MyFirstModule.CuttomerMobilePage.container2"
                    $widgetId="p29.MyFirstModule.CuttomerMobilePage.container2"
                    class={"mx-name-container2"}
                    style={undefined}
                    renderMode={"div"}
                    onClick={undefined}
                    content={[
                        <$Text key="p29.MyFirstModule.CuttomerMobilePage.text11"
                            $widgetId="p29.MyFirstModule.CuttomerMobilePage.text11"
                            class={"mx-name-text11 text-bold"}
                            style={undefined}
                            caption={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "literal", "value": "誕生日：" }, "args": {} }
                                })
                            ])}
                            renderMode={"span"} />,
                        <$Text key="p29.MyFirstModule.CuttomerMobilePage.text3"
                            $widgetId="p29.MyFirstModule.CuttomerMobilePage.text3"
                            class={"mx-name-text3"}
                            style={undefined}
                            caption={t([
                                ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "BirthDate" }, { "type": "literal", "value": "{\"type\":\"date\"}" } ] }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                                })
                            ])}
                            renderMode={"span"} />,
                        <$Container key="p29.MyFirstModule.CuttomerMobilePage.container3"
                            $widgetId="p29.MyFirstModule.CuttomerMobilePage.container3"
                            class={"mx-name-container3"}
                            style={undefined}
                            renderMode={"div"}
                            onClick={undefined}
                            content={[
                                <$Text key="p29.MyFirstModule.CuttomerMobilePage.text12"
                                    $widgetId="p29.MyFirstModule.CuttomerMobilePage.text12"
                                    class={"mx-name-text12 text-bold"}
                                    style={undefined}
                                    caption={t([
                                        ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "性別　：" }, "args": {} }
                                        })
                                    ])}
                                    renderMode={"span"} />,
                                <$Text key="p29.MyFirstModule.CuttomerMobilePage.text5"
                                    $widgetId="p29.MyFirstModule.CuttomerMobilePage.text5"
                                    class={"mx-name-text5"}
                                    style={undefined}
                                    caption={t([
                                        ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Gender" }, { "type": "literal", "value": "MyFirstModule.Gender" } ] }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                                        })
                                    ])}
                                    renderMode={"span"} />,
                                <$Text key="p29.MyFirstModule.CuttomerMobilePage.text4"
                                    $widgetId="p29.MyFirstModule.CuttomerMobilePage.text4"
                                    class={"mx-name-text4"}
                                    style={undefined}
                                    caption={t([
                                        ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "（" }, { "type": "function", "name": "getCaption", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "MaritialStatus" }, { "type": "literal", "value": "MyFirstModule.MaritialStatus" } ] } ] }, { "type": "literal", "value": "）" } ] }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                                        })
                                    ])}
                                    renderMode={"span"} />,
                                <$Container key="p29.MyFirstModule.CuttomerMobilePage.container4"
                                    $widgetId="p29.MyFirstModule.CuttomerMobilePage.container4"
                                    class={"mx-name-container4"}
                                    style={undefined}
                                    renderMode={"div"}
                                    onClick={undefined}
                                    content={[
                                        <$Text key="p29.MyFirstModule.CuttomerMobilePage.text13"
                                            $widgetId="p29.MyFirstModule.CuttomerMobilePage.text13"
                                            class={"mx-name-text13 text-bold"}
                                            style={undefined}
                                            caption={t([
                                                ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "連絡先：" }, "args": {} }
                                                })
                                            ])}
                                            renderMode={"span"} />,
                                        <$Text key="p29.MyFirstModule.CuttomerMobilePage.text7"
                                            $widgetId="p29.MyFirstModule.CuttomerMobilePage.text7"
                                            class={"mx-name-text7"}
                                            style={undefined}
                                            caption={t([
                                                ExpressionProperty({
                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "PhoneNumber" }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                                                })
                                            ])}
                                            renderMode={"span"} />,
                                        <$Text key="p29.MyFirstModule.CuttomerMobilePage.text6"
                                            $widgetId="p29.MyFirstModule.CuttomerMobilePage.text6"
                                            class={"mx-name-text6"}
                                            style={undefined}
                                            caption={t([
                                                ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "（" }, { "type": "variable", "variable": "currentObject", "path": "MailAddress" } ] }, { "type": "literal", "value": "）" } ] }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                                                })
                                            ])}
                                            renderMode={"span"} />,
                                        <$Container key="p29.MyFirstModule.CuttomerMobilePage.container5"
                                            $widgetId="p29.MyFirstModule.CuttomerMobilePage.container5"
                                            class={"mx-name-container5"}
                                            style={undefined}
                                            renderMode={"div"}
                                            onClick={undefined}
                                            content={[
                                                <$Text key="p29.MyFirstModule.CuttomerMobilePage.text14"
                                                    $widgetId="p29.MyFirstModule.CuttomerMobilePage.text14"
                                                    class={"mx-name-text14 text-bold"}
                                                    style={undefined}
                                                    caption={t([
                                                        ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": "収入　：" }, "args": {} }
                                                        })
                                                    ])}
                                                    renderMode={"span"} />,
                                                <$Text key="p29.MyFirstModule.CuttomerMobilePage.text8"
                                                    $widgetId="p29.MyFirstModule.CuttomerMobilePage.text8"
                                                    class={"mx-name-text8"}
                                                    style={undefined}
                                                    caption={t([
                                                        ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "AverageYearlyIncome" }, { "type": "literal", "value": "{\"decimalPrecision\":2}" } ] }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                                                        })
                                                    ])}
                                                    renderMode={"span"} />,
                                                <$Text key="p29.MyFirstModule.CuttomerMobilePage.text9"
                                                    $widgetId="p29.MyFirstModule.CuttomerMobilePage.text9"
                                                    class={"mx-name-text9"}
                                                    style={undefined}
                                                    caption={t([
                                                        ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "| " }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "AverageSalesOrderQuantity" }, { "type": "literal", "value": "{}" } ] } ] }, "args": { "currentObject": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } } }
                                                        })
                                                    ])}
                                                    renderMode={"span"} />
                                            ]}
                                            ariaHidden={false} />
                                    ]}
                                    ariaHidden={false} />
                            ]}
                            ariaHidden={false} />
                    ]}
                    ariaHidden={false} />
            ]
        })}
        onClick={ListActionProperty({
            "action": { "type": "openPage", "argMap": { "param$Customers": { "widget": "p29.MyFirstModule.CuttomerMobilePage.listView3", "source": "object" } }, "config": { "name": "MyFirstModule/Customers_EditView.page.xml", "location": "content" }, "disabledDuringExecution": true },
            "abortOnServerValidation": false,
            "dataSourceId": "p29.0"
        })}
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
