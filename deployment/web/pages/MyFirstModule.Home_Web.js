import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { Container } from "mendix/widgets/web/Container";
import { Div } from "mendix/widgets/web/Div";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";

const { $Container, $Div, $Text, $ActionButton } = asPluginWidgets({ Container, Div, Text, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Container key="p41.MyFirstModule.Home_Web.container1"
        $widgetId="p41.MyFirstModule.Home_Web.container1"
        class={"mx-name-container1 pageheader"}
        style={undefined}
        renderMode={"div"}
        onClick={undefined}
        content={[
            <$Div key="p41.MyFirstModule.Home_Web.layoutGrid2"
                $widgetId="p41.MyFirstModule.Home_Web.layoutGrid2"
                class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                style={undefined}
                content={[
                    <$Div key="p41.MyFirstModule.Home_Web.layoutGrid2$row0"
                        $widgetId="p41.MyFirstModule.Home_Web.layoutGrid2$row0"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p41.MyFirstModule.Home_Web.layoutGrid2$row0$column0"
                                $widgetId="p41.MyFirstModule.Home_Web.layoutGrid2$row0$column0"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={[
                                    <$Text key="p41.MyFirstModule.Home_Web.text1"
                                        $widgetId="p41.MyFirstModule.Home_Web.text1"
                                        class={"mx-name-text1 pageheader-title spacing-outer-bottom"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Sample Application" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h3"} />,
                                    <$Text key="p41.MyFirstModule.Home_Web.text3"
                                        $widgetId="p41.MyFirstModule.Home_Web.text3"
                                        class={"mx-name-text3 pageheader-subtitle text-detail"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Welcome to your new app.\r\n" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"p"} />,
                                    <$ActionButton key="p41.MyFirstModule.Home_Web.actionButton1"
                                        $widgetId="p41.MyFirstModule.Home_Web.actionButton1"
                                        buttonId={"p41.MyFirstModule.Home_Web.actionButton1"}
                                        class={"mx-name-actionButton1"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-success"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "メッセージ表示" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-alert-circle" }
                                        })}
                                        action={ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "UPWR9PEIN12LIjhueLcB3w", "validate": "view" }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />,
                                    <$ActionButton key="p41.MyFirstModule.Home_Web.actionButton7"
                                        $widgetId="p41.MyFirstModule.Home_Web.actionButton7"
                                        buttonId={"p41.MyFirstModule.Home_Web.actionButton7"}
                                        class={"mx-name-actionButton7 spacing-outer-left spacing-outer-right"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-info"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "マイクロフローテスト" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-alert-circle" }
                                        })}
                                        action={ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "YEOytzhexViQH8ZlpB43QQ", "validate": "view" }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]}
        ariaHidden={false} />,
    <$Div key="p41.MyFirstModule.Home_Web.layoutGrid1"
        $widgetId="p41.MyFirstModule.Home_Web.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p41.MyFirstModule.Home_Web.layoutGrid1$row0"
                $widgetId="p41.MyFirstModule.Home_Web.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p41.MyFirstModule.Home_Web.layoutGrid1$row0$column0"
                        $widgetId="p41.MyFirstModule.Home_Web.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$ActionButton key="p41.MyFirstModule.Home_Web.actionButton2"
                                $widgetId="p41.MyFirstModule.Home_Web.actionButton2"
                                buttonId={"p41.MyFirstModule.Home_Web.actionButton2"}
                                class={"mx-name-actionButton2"}
                                style={undefined}
                                tabIndex={undefined}
                                renderType={"link"}
                                role={"button"}
                                buttonClass={"btn-default"}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Customers" }, "args": {} }
                                    })
                                ])}
                                tooltip={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                icon={WebIconProperty({
                                    "icon": { "type": "glyph", "iconClass": "glyphicon-user" }
                                })}
                                action={ActionProperty({
                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/CustomersPage.page.xml", "location": "content" }, "disabledDuringExecution": true },
                                    "abortOnServerValidation": true
                                })} />
                        ]} />,
                    <$Div key="p41.MyFirstModule.Home_Web.layoutGrid1$row0$column1"
                        $widgetId="p41.MyFirstModule.Home_Web.layoutGrid1$row0$column1"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$ActionButton key="p41.MyFirstModule.Home_Web.actionButton5"
                                $widgetId="p41.MyFirstModule.Home_Web.actionButton5"
                                buttonId={"p41.MyFirstModule.Home_Web.actionButton5"}
                                class={"mx-name-actionButton5"}
                                style={undefined}
                                tabIndex={undefined}
                                renderType={"link"}
                                role={"button"}
                                buttonClass={"btn-default"}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Sales Person" }, "args": {} }
                                    })
                                ])}
                                tooltip={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                icon={WebIconProperty({
                                    "icon": { "type": "glyph", "iconClass": "glyphicon-thumbs-up" }
                                })}
                                action={ActionProperty({
                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/SalesPersonPage.page.xml", "location": "content" }, "disabledDuringExecution": true },
                                    "abortOnServerValidation": true
                                })} />
                        ]} />
                ]} />,
            <$Div key="p41.MyFirstModule.Home_Web.layoutGrid1$row1"
                $widgetId="p41.MyFirstModule.Home_Web.layoutGrid1$row1"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p41.MyFirstModule.Home_Web.layoutGrid1$row1$column0"
                        $widgetId="p41.MyFirstModule.Home_Web.layoutGrid1$row1$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$ActionButton key="p41.MyFirstModule.Home_Web.actionButton3"
                                $widgetId="p41.MyFirstModule.Home_Web.actionButton3"
                                buttonId={"p41.MyFirstModule.Home_Web.actionButton3"}
                                class={"mx-name-actionButton3"}
                                style={undefined}
                                tabIndex={undefined}
                                renderType={"link"}
                                role={"button"}
                                buttonClass={"btn-default"}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Products" }, "args": {} }
                                    })
                                ])}
                                tooltip={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                icon={WebIconProperty({
                                    "icon": { "type": "glyph", "iconClass": "glyphicon-list-alt" }
                                })}
                                action={ActionProperty({
                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/ProductsPage.page.xml", "location": "content" }, "disabledDuringExecution": true },
                                    "abortOnServerValidation": true
                                })} />
                        ]} />,
                    <$Div key="p41.MyFirstModule.Home_Web.layoutGrid1$row1$column1"
                        $widgetId="p41.MyFirstModule.Home_Web.layoutGrid1$row1$column1"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$ActionButton key="p41.MyFirstModule.Home_Web.actionButton6"
                                $widgetId="p41.MyFirstModule.Home_Web.actionButton6"
                                buttonId={"p41.MyFirstModule.Home_Web.actionButton6"}
                                class={"mx-name-actionButton6"}
                                style={undefined}
                                tabIndex={undefined}
                                renderType={"link"}
                                role={"button"}
                                buttonClass={"btn-default"}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Sales Tracking Page" }, "args": {} }
                                    })
                                ])}
                                tooltip={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                icon={WebIconProperty({
                                    "icon": { "type": "glyph", "iconClass": "glyphicon-align-center" }
                                })}
                                action={ActionProperty({
                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/SalesTrackingPage.page.xml", "location": "content" }, "disabledDuringExecution": true },
                                    "abortOnServerValidation": true
                                })} />
                        ]} />
                ]} />,
            <$Div key="p41.MyFirstModule.Home_Web.layoutGrid1$row2"
                $widgetId="p41.MyFirstModule.Home_Web.layoutGrid1$row2"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p41.MyFirstModule.Home_Web.layoutGrid1$row2$column0"
                        $widgetId="p41.MyFirstModule.Home_Web.layoutGrid1$row2$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$ActionButton key="p41.MyFirstModule.Home_Web.actionButton4"
                                $widgetId="p41.MyFirstModule.Home_Web.actionButton4"
                                buttonId={"p41.MyFirstModule.Home_Web.actionButton4"}
                                class={"mx-name-actionButton4"}
                                style={undefined}
                                tabIndex={undefined}
                                renderType={"link"}
                                role={"button"}
                                buttonClass={"btn-default"}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Locations" }, "args": {} }
                                    })
                                ])}
                                tooltip={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                icon={WebIconProperty({
                                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-location-pin" }
                                })}
                                action={ActionProperty({
                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/LocationPage.page.xml", "location": "content" }, "disabledDuringExecution": true },
                                    "abortOnServerValidation": true
                                })} />
                        ]} />,
                    <$Div key="p41.MyFirstModule.Home_Web.layoutGrid1$row2$column1"
                        $widgetId="p41.MyFirstModule.Home_Web.layoutGrid1$row2$column1"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={undefined} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Homepage"
]);

export const classes = "layout-atlas layout-atlas-responsive-default";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
