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
import { DatePicker } from "mendix/widgets/web/DatePicker";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { RadioButtonGroup } from "mendix/widgets/web/RadioButtonGroup";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";

const { $Div, $DataView, $FormGroup, $TextBox, $DatePicker, $RadioButtonGroup, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, DatePicker, RadioButtonGroup, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p1.MyFirstModule.Customers_NewEdit.layoutGrid1"
        $widgetId="p1.MyFirstModule.Customers_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p1.MyFirstModule.Customers_NewEdit.layoutGrid1$row0"
                $widgetId="p1.MyFirstModule.Customers_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p1.MyFirstModule.Customers_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p1.MyFirstModule.Customers_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p1.MyFirstModule.Customers_NewEdit.dataView6"
                                $widgetId="p1.MyFirstModule.Customers_NewEdit.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p1.12",
                                    "scope": "$Customers",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p1.MyFirstModule.Customers_NewEdit.textBox1$formGroup"
                                        $widgetId="p1.MyFirstModule.Customers_NewEdit.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p1.MyFirstModule.Customers_NewEdit.textBox1"
                                                $widgetId="p1.MyFirstModule.Customers_NewEdit.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p1.MyFirstModule.Customers_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Customers",
                                                    "attribute": "FirstName",
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
                                                    "widgetId": "p1.MyFirstModule.Customers_NewEdit.textBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "First name" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p1.MyFirstModule.Customers_NewEdit.textBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p1.MyFirstModule.Customers_NewEdit.textBox1"
                                        })} />,
                                    <$FormGroup key="p1.MyFirstModule.Customers_NewEdit.textBox2$formGroup"
                                        $widgetId="p1.MyFirstModule.Customers_NewEdit.textBox2$formGroup"
                                        class={"mx-name-textBox2 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p1.MyFirstModule.Customers_NewEdit.textBox2"
                                                $widgetId="p1.MyFirstModule.Customers_NewEdit.textBox2"
                                                inputValue={AttributeProperty({
                                                    "scope": "p1.MyFirstModule.Customers_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Customers",
                                                    "attribute": "LastName",
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
                                                    "widgetId": "p1.MyFirstModule.Customers_NewEdit.textBox2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Last name" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p1.MyFirstModule.Customers_NewEdit.textBox2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p1.MyFirstModule.Customers_NewEdit.textBox2"
                                        })} />,
                                    <$FormGroup key="p1.MyFirstModule.Customers_NewEdit.datePicker1$formGroup"
                                        $widgetId="p1.MyFirstModule.Customers_NewEdit.datePicker1$formGroup"
                                        class={"mx-name-datePicker1 mx-datepicker"}
                                        style={undefined}
                                        control={[
                                            <$DatePicker key="p1.MyFirstModule.Customers_NewEdit.datePicker1"
                                                $widgetId="p1.MyFirstModule.Customers_NewEdit.datePicker1"
                                                mode={"date"}
                                                showCalendarButton={true}
                                                inputValue={AttributeProperty({
                                                    "scope": "p1.MyFirstModule.Customers_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Customers",
                                                    "attribute": "BirthDate",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": {
                                                        "dateFormat": t([
                                                            {
                                                                "type": "date"
                                                            }
                                                        ])
                                                    }
                                                })}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                buttonLabel={TextProperty({
                                                    "value": t([
                                                        "Show date picker"
                                                    ])
                                                })}
                                                readOnlyStyle={"control"}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                ariaLabel={undefined}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.Customers_NewEdit.datePicker1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Birth date" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p1.MyFirstModule.Customers_NewEdit.datePicker1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p1.MyFirstModule.Customers_NewEdit.datePicker1"
                                        })} />,
                                    <$FormGroup key="p1.MyFirstModule.Customers_NewEdit.radioButtons1$formGroup"
                                        $widgetId="p1.MyFirstModule.Customers_NewEdit.radioButtons1$formGroup"
                                        class={"mx-name-radioButtons1 mx-radiobuttons inline"}
                                        style={undefined}
                                        control={[
                                            <$RadioButtonGroup key="p1.MyFirstModule.Customers_NewEdit.radioButtons1"
                                                $widgetId="p1.MyFirstModule.Customers_NewEdit.radioButtons1"
                                                value={AttributeProperty({
                                                    "scope": "p1.MyFirstModule.Customers_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Customers",
                                                    "attribute": "MaritialStatus",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null
                                                })}
                                                readOnlyStyle={"control"}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                ariaLabel={undefined}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.Customers_NewEdit.radioButtons1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Maritial status" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p1.MyFirstModule.Customers_NewEdit.radioButtons1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p1.MyFirstModule.Customers_NewEdit.radioButtons1"
                                        })} />,
                                    <$FormGroup key="p1.MyFirstModule.Customers_NewEdit.radioButtons2$formGroup"
                                        $widgetId="p1.MyFirstModule.Customers_NewEdit.radioButtons2$formGroup"
                                        class={"mx-name-radioButtons2 mx-radiobuttons inline"}
                                        style={undefined}
                                        control={[
                                            <$RadioButtonGroup key="p1.MyFirstModule.Customers_NewEdit.radioButtons2"
                                                $widgetId="p1.MyFirstModule.Customers_NewEdit.radioButtons2"
                                                value={AttributeProperty({
                                                    "scope": "p1.MyFirstModule.Customers_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Customers",
                                                    "attribute": "Gender",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null
                                                })}
                                                readOnlyStyle={"control"}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                ariaLabel={undefined}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.Customers_NewEdit.radioButtons2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Gender" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p1.MyFirstModule.Customers_NewEdit.radioButtons2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p1.MyFirstModule.Customers_NewEdit.radioButtons2"
                                        })} />,
                                    <$FormGroup key="p1.MyFirstModule.Customers_NewEdit.textBox3$formGroup"
                                        $widgetId="p1.MyFirstModule.Customers_NewEdit.textBox3$formGroup"
                                        class={"mx-name-textBox3 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p1.MyFirstModule.Customers_NewEdit.textBox3"
                                                $widgetId="p1.MyFirstModule.Customers_NewEdit.textBox3"
                                                inputValue={AttributeProperty({
                                                    "scope": "p1.MyFirstModule.Customers_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Customers",
                                                    "attribute": "MailAddress",
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
                                                    "widgetId": "p1.MyFirstModule.Customers_NewEdit.textBox3"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Mail address" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p1.MyFirstModule.Customers_NewEdit.textBox3"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p1.MyFirstModule.Customers_NewEdit.textBox3"
                                        })} />,
                                    <$FormGroup key="p1.MyFirstModule.Customers_NewEdit.textBox4$formGroup"
                                        $widgetId="p1.MyFirstModule.Customers_NewEdit.textBox4$formGroup"
                                        class={"mx-name-textBox4 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p1.MyFirstModule.Customers_NewEdit.textBox4"
                                                $widgetId="p1.MyFirstModule.Customers_NewEdit.textBox4"
                                                inputValue={AttributeProperty({
                                                    "scope": "p1.MyFirstModule.Customers_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Customers",
                                                    "attribute": "PhoneNumber",
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
                                                    "widgetId": "p1.MyFirstModule.Customers_NewEdit.textBox4"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Phone number" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p1.MyFirstModule.Customers_NewEdit.textBox4"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p1.MyFirstModule.Customers_NewEdit.textBox4"
                                        })} />,
                                    <$FormGroup key="p1.MyFirstModule.Customers_NewEdit.textBox5$formGroup"
                                        $widgetId="p1.MyFirstModule.Customers_NewEdit.textBox5$formGroup"
                                        class={"mx-name-textBox5 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p1.MyFirstModule.Customers_NewEdit.textBox5"
                                                $widgetId="p1.MyFirstModule.Customers_NewEdit.textBox5"
                                                inputValue={AttributeProperty({
                                                    "scope": "p1.MyFirstModule.Customers_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Customers",
                                                    "attribute": "AverageYearlyIncome",
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
                                                    "widgetId": "p1.MyFirstModule.Customers_NewEdit.textBox5"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Average yearly income" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p1.MyFirstModule.Customers_NewEdit.textBox5"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p1.MyFirstModule.Customers_NewEdit.textBox5"
                                        })} />,
                                    <$FormGroup key="p1.MyFirstModule.Customers_NewEdit.textBox6$formGroup"
                                        $widgetId="p1.MyFirstModule.Customers_NewEdit.textBox6$formGroup"
                                        class={"mx-name-textBox6 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p1.MyFirstModule.Customers_NewEdit.textBox6"
                                                $widgetId="p1.MyFirstModule.Customers_NewEdit.textBox6"
                                                inputValue={AttributeProperty({
                                                    "scope": "p1.MyFirstModule.Customers_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstModule.Customers",
                                                    "attribute": "AverageSalesOrderQuantity",
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
                                                    "widgetId": "p1.MyFirstModule.Customers_NewEdit.textBox6"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Average sales order quantity" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p1.MyFirstModule.Customers_NewEdit.textBox6"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p1.MyFirstModule.Customers_NewEdit.textBox6"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ActionButton key="p1.MyFirstModule.Customers_NewEdit.actionButton1"
                                        $widgetId="p1.MyFirstModule.Customers_NewEdit.actionButton1"
                                        buttonId={"p1.MyFirstModule.Customers_NewEdit.actionButton1"}
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
                                            "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p1.MyFirstModule.Customers_NewEdit.dataView6", "source": "object" } }, "config": { "operationId": "4er6VHar+1uDNoUHS2/RSQ", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />,
                                    <$ActionButton key="p1.MyFirstModule.Customers_NewEdit.actionButton2"
                                        $widgetId="p1.MyFirstModule.Customers_NewEdit.actionButton2"
                                        buttonId={"p1.MyFirstModule.Customers_NewEdit.actionButton2"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "80qSAy6tQlapkbIoLg8IuQ", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit Customers"
]);

export const classes = "layout-atlas layout-atlas-responsive-default";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
