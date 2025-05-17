import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";

const { $Div, $DataView, $FormGroup, $TextBox, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p27.MyFirstModule.Locations_NewEdit.layoutGrid1"
        $widgetId="p27.MyFirstModule.Locations_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p27.MyFirstModule.Locations_NewEdit.layoutGrid1$row0"
                $widgetId="p27.MyFirstModule.Locations_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p27.MyFirstModule.Locations_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p27.MyFirstModule.Locations_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p27.MyFirstModule.Locations_NewEdit.dataView6"
                                $widgetId="p27.MyFirstModule.Locations_NewEdit.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p27.12",
                                    "scope": "$Locations",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p27.MyFirstModule.Locations_NewEdit.textBox1$formGroup"
                                        $widgetId="p27.MyFirstModule.Locations_NewEdit.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p27.MyFirstModule.Locations_NewEdit.textBox1"
                                                $widgetId="p27.MyFirstModule.Locations_NewEdit.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p27.MyFirstModule.Locations_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Locations",
                                                    "attribute": "State",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={200}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p27.MyFirstModule.Locations_NewEdit.textBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "State" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p27.MyFirstModule.Locations_NewEdit.textBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p27.MyFirstModule.Locations_NewEdit.textBox1"
                                        })} />,
                                    <$FormGroup key="p27.MyFirstModule.Locations_NewEdit.textBox2$formGroup"
                                        $widgetId="p27.MyFirstModule.Locations_NewEdit.textBox2$formGroup"
                                        class={"mx-name-textBox2 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p27.MyFirstModule.Locations_NewEdit.textBox2"
                                                $widgetId="p27.MyFirstModule.Locations_NewEdit.textBox2"
                                                inputValue={AttributeProperty({
                                                    "scope": "p27.MyFirstModule.Locations_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Locations",
                                                    "attribute": "City",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={200}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p27.MyFirstModule.Locations_NewEdit.textBox2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "City" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p27.MyFirstModule.Locations_NewEdit.textBox2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p27.MyFirstModule.Locations_NewEdit.textBox2"
                                        })} />,
                                    <$FormGroup key="p27.MyFirstModule.Locations_NewEdit.textBox3$formGroup"
                                        $widgetId="p27.MyFirstModule.Locations_NewEdit.textBox3$formGroup"
                                        class={"mx-name-textBox3 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p27.MyFirstModule.Locations_NewEdit.textBox3"
                                                $widgetId="p27.MyFirstModule.Locations_NewEdit.textBox3"
                                                inputValue={AttributeProperty({
                                                    "scope": "p27.MyFirstModule.Locations_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Locations",
                                                    "attribute": "Country",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={200}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p27.MyFirstModule.Locations_NewEdit.textBox3"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Country" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p27.MyFirstModule.Locations_NewEdit.textBox3"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p27.MyFirstModule.Locations_NewEdit.textBox3"
                                        })} />,
                                    <$FormGroup key="p27.MyFirstModule.Locations_NewEdit.textBox4$formGroup"
                                        $widgetId="p27.MyFirstModule.Locations_NewEdit.textBox4$formGroup"
                                        class={"mx-name-textBox4 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p27.MyFirstModule.Locations_NewEdit.textBox4"
                                                $widgetId="p27.MyFirstModule.Locations_NewEdit.textBox4"
                                                inputValue={AttributeProperty({
                                                    "scope": "p27.MyFirstModule.Locations_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Locations",
                                                    "attribute": "Longitude",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": {
                                                        "numberFormat": {
                                                            "groupDigits": false,
                                                            "decimalPrecision": 2
                                                        }
                                                    }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={undefined}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p27.MyFirstModule.Locations_NewEdit.textBox4"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Longitude" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p27.MyFirstModule.Locations_NewEdit.textBox4"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p27.MyFirstModule.Locations_NewEdit.textBox4"
                                        })} />,
                                    <$FormGroup key="p27.MyFirstModule.Locations_NewEdit.textBox5$formGroup"
                                        $widgetId="p27.MyFirstModule.Locations_NewEdit.textBox5$formGroup"
                                        class={"mx-name-textBox5 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p27.MyFirstModule.Locations_NewEdit.textBox5"
                                                $widgetId="p27.MyFirstModule.Locations_NewEdit.textBox5"
                                                inputValue={AttributeProperty({
                                                    "scope": "p27.MyFirstModule.Locations_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Locations",
                                                    "attribute": "Latitude",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": {
                                                        "numberFormat": {
                                                            "groupDigits": false,
                                                            "decimalPrecision": 2
                                                        }
                                                    }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={undefined}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p27.MyFirstModule.Locations_NewEdit.textBox5"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Latitude" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p27.MyFirstModule.Locations_NewEdit.textBox5"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p27.MyFirstModule.Locations_NewEdit.textBox5"
                                        })} />,
                                    <$FormGroup key="p27.MyFirstModule.Locations_NewEdit.textBox6$formGroup"
                                        $widgetId="p27.MyFirstModule.Locations_NewEdit.textBox6$formGroup"
                                        class={"mx-name-textBox6 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p27.MyFirstModule.Locations_NewEdit.textBox6"
                                                $widgetId="p27.MyFirstModule.Locations_NewEdit.textBox6"
                                                inputValue={AttributeProperty({
                                                    "scope": "p27.MyFirstModule.Locations_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Locations",
                                                    "attribute": "PostalCode",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": {
                                                        "numberFormat": {
                                                            "groupDigits": false
                                                        }
                                                    }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={undefined}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p27.MyFirstModule.Locations_NewEdit.textBox6"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Postal code" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p27.MyFirstModule.Locations_NewEdit.textBox6"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p27.MyFirstModule.Locations_NewEdit.textBox6"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ActionButton key="p27.MyFirstModule.Locations_NewEdit.actionButton1"
                                        $widgetId="p27.MyFirstModule.Locations_NewEdit.actionButton1"
                                        buttonId={"p27.MyFirstModule.Locations_NewEdit.actionButton1"}
                                        class={"mx-name-actionButton1"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-primary"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={undefined}
                                        action={ActionProperty({
                                            "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p27.MyFirstModule.Locations_NewEdit.dataView6", "source": "object" } }, "config": { "operationId": "y2/w1g2Lb1mzRbCyUuY7hQ", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />,
                                    <$ActionButton key="p27.MyFirstModule.Locations_NewEdit.actionButton2"
                                        $widgetId="p27.MyFirstModule.Locations_NewEdit.actionButton2"
                                        buttonId={"p27.MyFirstModule.Locations_NewEdit.actionButton2"}
                                        class={"mx-name-actionButton2"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-default"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={undefined}
                                        action={ActionProperty({
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "Y0pMICACzVSWYJd9CwlL/g", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit Locations"
]);

export const classes = "layout-atlas layout-atlas-responsive-default";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
