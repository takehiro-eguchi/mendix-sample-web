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

import { content as parentContent } from "../layouts/Atlas_Core.Phone_BottomBar.js";

const { $Container, $ActionButton, $Text, $Div } = asPluginWidgets({ Container, ActionButton, Text, Div });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Container key="p37.MyFirstModule.HomePage.container9"
        $widgetId="p37.MyFirstModule.HomePage.container9"
        class={"mx-name-container9 h-100 col-center"}
        style={undefined}
        renderMode={"div"}
        onClick={undefined}
        content={[
            <$Container key="p37.MyFirstModule.HomePage.container10"
                $widgetId="p37.MyFirstModule.HomePage.container10"
                class={"mx-name-container10 headerhero springboard-header justify-content-between background-primary spacing-outer-bottom-none"}
                style={undefined}
                renderMode={"div"}
                onClick={undefined}
                content={[
                    <$ActionButton key="p37.MyFirstModule.HomePage.actionButton1"
                        $widgetId="p37.MyFirstModule.HomePage.actionButton1"
                        buttonId={"p37.MyFirstModule.HomePage.actionButton1"}
                        class={"mx-name-actionButton1 text-large text-white text-right"}
                        style={undefined}
                        tabIndex={undefined}
                        renderType={"link"}
                        role={"button"}
                        buttonClass={"btn-default"}
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
                            "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-cog" }
                        })}
                        action={undefined} />,
                    <$Container key="p37.MyFirstModule.HomePage.container8"
                        $widgetId="p37.MyFirstModule.HomePage.container8"
                        class={"mx-name-container8"}
                        style={undefined}
                        renderMode={"div"}
                        onClick={undefined}
                        content={[
                            <$Text key="p37.MyFirstModule.HomePage.text1"
                                $widgetId="p37.MyFirstModule.HomePage.text1"
                                class={"mx-name-text1 text-white"}
                                style={undefined}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Sales Management" }, "args": {} }
                                    })
                                ])}
                                renderMode={"h1"} />,
                            <$Text key="p37.MyFirstModule.HomePage.text2"
                                $widgetId="p37.MyFirstModule.HomePage.text2"
                                class={"mx-name-text2 text-white"}
                                style={undefined}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Manage your sales." }, "args": {} }
                                    })
                                ])}
                                renderMode={"p"} />
                        ]}
                        ariaHidden={false} />
                ]}
                ariaHidden={false} />,
            <$Div key="p37.MyFirstModule.HomePage.layoutGrid1"
                $widgetId="p37.MyFirstModule.HomePage.layoutGrid1"
                class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid springboard-grid"}
                style={undefined}
                content={[
                    <$Div key="p37.MyFirstModule.HomePage.layoutGrid1$row0"
                        $widgetId="p37.MyFirstModule.HomePage.layoutGrid1$row0"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p37.MyFirstModule.HomePage.layoutGrid1$row0$column0"
                                $widgetId="p37.MyFirstModule.HomePage.layoutGrid1$row0$column0"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={[
                                    <$Container key="p37.MyFirstModule.HomePage.container2"
                                        $widgetId="p37.MyFirstModule.HomePage.container2"
                                        class={"mx-name-container2 card springboard-card justify-content-end spacing-outer-bottom-medium"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$ActionButton key="p37.MyFirstModule.HomePage.actionButton17"
                                                $widgetId="p37.MyFirstModule.HomePage.actionButton17"
                                                buttonId={"p37.MyFirstModule.HomePage.actionButton17"}
                                                class={"mx-name-actionButton17 card-icon text-primary spacing-outer-bottom"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"link"}
                                                role={"button"}
                                                buttonClass={"btn-default"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        "Folder Open Icon"
                                                    ])
                                                })}
                                                icon={WebIconProperty({
                                                    "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-user" }
                                                })}
                                                action={ActionProperty({
                                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/CuttomerMobilePage.page.xml", "location": "content" }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />,
                                            <$Text key="p37.MyFirstModule.HomePage.text3"
                                                $widgetId="p37.MyFirstModule.HomePage.text3"
                                                class={"mx-name-text3 text-primary spacing-outer-bottom-none"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Customers" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"h5"} />
                                        ]}
                                        ariaHidden={false} />
                                ]} />,
                            <$Div key="p37.MyFirstModule.HomePage.layoutGrid1$row0$column1"
                                $widgetId="p37.MyFirstModule.HomePage.layoutGrid1$row0$column1"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={[
                                    <$Container key="p37.MyFirstModule.HomePage.container3"
                                        $widgetId="p37.MyFirstModule.HomePage.container3"
                                        class={"mx-name-container3 card springboard-card justify-content-end spacing-outer-bottom-medium"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$ActionButton key="p37.MyFirstModule.HomePage.actionButton18"
                                                $widgetId="p37.MyFirstModule.HomePage.actionButton18"
                                                buttonId={"p37.MyFirstModule.HomePage.actionButton18"}
                                                class={"mx-name-actionButton18 card-icon text-primary spacing-outer-bottom"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"link"}
                                                role={"button"}
                                                buttonClass={"btn-default"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        "Folder Open Icon"
                                                    ])
                                                })}
                                                icon={WebIconProperty({
                                                    "icon": { "type": "glyph", "iconClass": "glyphicon-list-alt" }
                                                })}
                                                action={ActionProperty({
                                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/ProductMobilePage.page.xml", "location": "content" }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />,
                                            <$Text key="p37.MyFirstModule.HomePage.text4"
                                                $widgetId="p37.MyFirstModule.HomePage.text4"
                                                class={"mx-name-text4 text-primary spacing-outer-bottom-none"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Products" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"h5"} />
                                        ]}
                                        ariaHidden={false} />
                                ]} />
                        ]} />,
                    <$Div key="p37.MyFirstModule.HomePage.layoutGrid1$row1"
                        $widgetId="p37.MyFirstModule.HomePage.layoutGrid1$row1"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p37.MyFirstModule.HomePage.layoutGrid1$row1$column0"
                                $widgetId="p37.MyFirstModule.HomePage.layoutGrid1$row1$column0"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={[
                                    <$Container key="p37.MyFirstModule.HomePage.container4"
                                        $widgetId="p37.MyFirstModule.HomePage.container4"
                                        class={"mx-name-container4 card springboard-card justify-content-end spacing-outer-bottom-medium"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$ActionButton key="p37.MyFirstModule.HomePage.actionButton19"
                                                $widgetId="p37.MyFirstModule.HomePage.actionButton19"
                                                buttonId={"p37.MyFirstModule.HomePage.actionButton19"}
                                                class={"mx-name-actionButton19 card-icon text-primary spacing-outer-bottom"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"link"}
                                                role={"button"}
                                                buttonClass={"btn-default"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        "Folder Open Icon"
                                                    ])
                                                })}
                                                icon={WebIconProperty({
                                                    "icon": { "type": "icon", "iconClass": "mx-icon-filled mx-icon-location-pin" }
                                                })}
                                                action={ActionProperty({
                                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/LocationMobilePage.page.xml", "location": "content" }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />,
                                            <$Text key="p37.MyFirstModule.HomePage.text5"
                                                $widgetId="p37.MyFirstModule.HomePage.text5"
                                                class={"mx-name-text5 text-primary spacing-outer-bottom-none"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Locations" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"h5"} />
                                        ]}
                                        ariaHidden={false} />
                                ]} />,
                            <$Div key="p37.MyFirstModule.HomePage.layoutGrid1$row1$column1"
                                $widgetId="p37.MyFirstModule.HomePage.layoutGrid1$row1$column1"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={[
                                    <$Container key="p37.MyFirstModule.HomePage.container6"
                                        $widgetId="p37.MyFirstModule.HomePage.container6"
                                        class={"mx-name-container6 card springboard-card justify-content-end spacing-outer-bottom-medium"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$ActionButton key="p37.MyFirstModule.HomePage.actionButton21"
                                                $widgetId="p37.MyFirstModule.HomePage.actionButton21"
                                                buttonId={"p37.MyFirstModule.HomePage.actionButton21"}
                                                class={"mx-name-actionButton21 card-icon text-primary spacing-outer-bottom"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"link"}
                                                role={"button"}
                                                buttonClass={"btn-default"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        "Folder Open Icon"
                                                    ])
                                                })}
                                                icon={WebIconProperty({
                                                    "icon": { "type": "glyph", "iconClass": "glyphicon-align-center" }
                                                })}
                                                action={ActionProperty({
                                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule/SalesOrderDraftPage.page.xml", "location": "content" }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />,
                                            <$Text key="p37.MyFirstModule.HomePage.text7"
                                                $widgetId="p37.MyFirstModule.HomePage.text7"
                                                class={"mx-name-text7 text-primary spacing-outer-bottom-none"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Sales Order Draft" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"h5"} />
                                        ]}
                                        ariaHidden={false} />
                                ]} />
                        ]} />,
                    <$Div key="p37.MyFirstModule.HomePage.layoutGrid1$row2"
                        $widgetId="p37.MyFirstModule.HomePage.layoutGrid1$row2"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p37.MyFirstModule.HomePage.layoutGrid1$row2$column0"
                                $widgetId="p37.MyFirstModule.HomePage.layoutGrid1$row2$column0"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={undefined} />,
                            <$Div key="p37.MyFirstModule.HomePage.layoutGrid1$row2$column1"
                                $widgetId="p37.MyFirstModule.HomePage.layoutGrid1$row2$column1"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={undefined} />
                        ]} />
                ]} />
        ]}
        ariaHidden={false} />
]}</PageFragment>);

export const title = t([
    "Page"
]);

export const classes = "layout-atlas layout-atlas-phone";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Phone_BottomBar.Main": region$Main,
};
