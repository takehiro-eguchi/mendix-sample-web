import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListActionProperty } from "mendix/ListActionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";

import { ListView } from "mendix/widgets/web/ListView";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Phone_BottomBar.js";

const { $ListView, $Text } = asPluginWidgets({ ListView, Text });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$ListView key="p0.MyFirstModule.ProductMobilePage.listView3"
        $widgetId="p0.MyFirstModule.ProductMobilePage.listView3"
        class={"mx-name-listView3 listview-lined listview-hover"}
        style={undefined}
        listValue={DatabaseObjectListProperty({
            "dataSourceId": "p0.0",
            "entity": "MyFirstModule.Products",
            "operationId": "7SKoJnGUjVqVjTYJ6nbfCw",
            "sort": []
        })}
        searchAttributes={[
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Products",
                "attribute": "ProductName",
                "attributeType": "String",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p0.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Products",
                "attribute": "ListPrice",
                "attributeType": "Decimal",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p0.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Products",
                "attribute": "SafetyStockLevel",
                "attributeType": "Integer",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p0.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Products",
                "attribute": "Weight",
                "attributeType": "Decimal",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p0.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Products",
                "attribute": "Style",
                "attributeType": "String",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p0.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Products",
                "attribute": "ModelName",
                "attributeType": "String",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p0.0",
                "isList": false
            })
        ]}
        itemTemplate={TemplatedWidgetProperty({
            "dataSourceId": "p0.0",
            "editable": false,
            "children": () => [
                <$Text key="p0.MyFirstModule.ProductMobilePage.text1"
                    $widgetId="p0.MyFirstModule.ProductMobilePage.text1"
                    class={"mx-name-text1"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ProductName" }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />,
                <$Text key="p0.MyFirstModule.ProductMobilePage.text2"
                    $widgetId="p0.MyFirstModule.ProductMobilePage.text2"
                    class={"mx-name-text2"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Color" }, { "type": "literal", "value": "MyFirstModule.Color" } ] }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />,
                <$Text key="p0.MyFirstModule.ProductMobilePage.text3"
                    $widgetId="p0.MyFirstModule.ProductMobilePage.text3"
                    class={"mx-name-text3"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ListPrice" }, { "type": "literal", "value": "{\"decimalPrecision\":2}" } ] }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />,
                <$Text key="p0.MyFirstModule.ProductMobilePage.text4"
                    $widgetId="p0.MyFirstModule.ProductMobilePage.text4"
                    class={"mx-name-text4"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SafetyStockLevel" }, { "type": "literal", "value": "{}" } ] }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />,
                <$Text key="p0.MyFirstModule.ProductMobilePage.text5"
                    $widgetId="p0.MyFirstModule.ProductMobilePage.text5"
                    class={"mx-name-text5"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Size" }, { "type": "literal", "value": "MyFirstModule.Size" } ] }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />,
                <$Text key="p0.MyFirstModule.ProductMobilePage.text6"
                    $widgetId="p0.MyFirstModule.ProductMobilePage.text6"
                    class={"mx-name-text6"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Weight" }, { "type": "literal", "value": "{\"decimalPrecision\":2}" } ] }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />,
                <$Text key="p0.MyFirstModule.ProductMobilePage.text7"
                    $widgetId="p0.MyFirstModule.ProductMobilePage.text7"
                    class={"mx-name-text7"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Style" }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />,
                <$Text key="p0.MyFirstModule.ProductMobilePage.text8"
                    $widgetId="p0.MyFirstModule.ProductMobilePage.text8"
                    class={"mx-name-text8"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ModelName" }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />,
                <$Text key="p0.MyFirstModule.ProductMobilePage.text9"
                    $widgetId="p0.MyFirstModule.ProductMobilePage.text9"
                    class={"mx-name-text9"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Status" }, { "type": "literal", "value": "MyFirstModule.Status" } ] }, "args": { "currentObject": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"span"} />
            ]
        })}
        onClick={ListActionProperty({
            "action": { "type": "openPage", "argMap": { "param$Products": { "widget": "p0.MyFirstModule.ProductMobilePage.listView3", "source": "object" } }, "config": { "name": "MyFirstModule/Products_EditView.page.xml", "location": "content" }, "disabledDuringExecution": true },
            "abortOnServerValidation": false,
            "dataSourceId": "p0.0"
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
