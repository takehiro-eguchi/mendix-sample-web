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
    <$ListView key="p36.MyFirstModule.LocationMobilePage.listView3"
        $widgetId="p36.MyFirstModule.LocationMobilePage.listView3"
        class={"mx-name-listView3 listview-lined listview-hover"}
        style={undefined}
        listValue={DatabaseObjectListProperty({
            "dataSourceId": "p36.0",
            "entity": "MyFirstModule.Locations",
            "operationId": "aDW/LFBYxFeDDNIql8ODjA",
            "sort": []
        })}
        searchAttributes={[
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Locations",
                "attribute": "State",
                "attributeType": "String",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p36.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Locations",
                "attribute": "City",
                "attributeType": "String",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p36.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Locations",
                "attribute": "Country",
                "attributeType": "String",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p36.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Locations",
                "attribute": "Longitude",
                "attributeType": "Decimal",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p36.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Locations",
                "attribute": "Latitude",
                "attributeType": "Decimal",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p36.0",
                "isList": false
            }),
            ListAttributeProperty({
                "path": "",
                "entity": "MyFirstModule.Locations",
                "attribute": "PostalCode",
                "attributeType": "Integer",
                "sortable": true,
                "filterable": true,
                "dataSourceId": "p36.0",
                "isList": false
            })
        ]}
        itemTemplate={TemplatedWidgetProperty({
            "dataSourceId": "p36.0",
            "editable": false,
            "children": () => [
                <$Text key="p36.MyFirstModule.LocationMobilePage.text1"
                    $widgetId="p36.MyFirstModule.LocationMobilePage.text1"
                    class={"mx-name-text1"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "State" }, "args": { "currentObject": { "widget": "p36.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"p"} />,
                <$Text key="p36.MyFirstModule.LocationMobilePage.text2"
                    $widgetId="p36.MyFirstModule.LocationMobilePage.text2"
                    class={"mx-name-text2"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "City" }, "args": { "currentObject": { "widget": "p36.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"p"} />,
                <$Text key="p36.MyFirstModule.LocationMobilePage.text3"
                    $widgetId="p36.MyFirstModule.LocationMobilePage.text3"
                    class={"mx-name-text3"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Country" }, "args": { "currentObject": { "widget": "p36.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"p"} />,
                <$Text key="p36.MyFirstModule.LocationMobilePage.text4"
                    $widgetId="p36.MyFirstModule.LocationMobilePage.text4"
                    class={"mx-name-text4"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Longitude" }, { "type": "literal", "value": "{\"decimalPrecision\":2}" } ] }, "args": { "currentObject": { "widget": "p36.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"p"} />,
                <$Text key="p36.MyFirstModule.LocationMobilePage.text5"
                    $widgetId="p36.MyFirstModule.LocationMobilePage.text5"
                    class={"mx-name-text5"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Latitude" }, { "type": "literal", "value": "{\"decimalPrecision\":2}" } ] }, "args": { "currentObject": { "widget": "p36.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"p"} />,
                <$Text key="p36.MyFirstModule.LocationMobilePage.text6"
                    $widgetId="p36.MyFirstModule.LocationMobilePage.text6"
                    class={"mx-name-text6"}
                    style={undefined}
                    caption={t([
                        ExpressionProperty({
                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "PostalCode" }, { "type": "literal", "value": "{}" } ] }, "args": { "currentObject": { "widget": "p36.MyFirstModule.LocationMobilePage.listView3", "source": "object" } } }
                        })
                    ])}
                    renderMode={"p"} />
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
