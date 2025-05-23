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
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { DatePicker } from "mendix/widgets/web/DatePicker";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { RadioButtonGroup } from "mendix/widgets/web/RadioButtonGroup";
import { Text } from "mendix/widgets/web/Text";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Phone_BottomBar.js";

const { $Div, $Container, $Text, $DataView, $FormGroup, $TextBox, $DatePicker, $RadioButtonGroup, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, Container, Text, DataView, FormGroup, TextBox, DatePicker, RadioButtonGroup, ConditionalVisibilityWrapper, ActionButton });

addEnumerations({
    "MyFirstModule.Gender": [
        [
            "Female",
            t([
                "Female"
            ])
        ],
        [
            "Male",
            t([
                "Male"
            ])
        ]
    ]
});

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p32.MyFirstModule.Customers_EditView.layoutGrid3"
        $widgetId="p32.MyFirstModule.Customers_EditView.layoutGrid3"
        class={"mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p32.MyFirstModule.Customers_EditView.layoutGrid3$row0"
                $widgetId="p32.MyFirstModule.Customers_EditView.layoutGrid3$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p32.MyFirstModule.Customers_EditView.layoutGrid3$row0$column0"
                        $widgetId="p32.MyFirstModule.Customers_EditView.layoutGrid3$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Container key="p32.MyFirstModule.Customers_EditView.container6"
                                $widgetId="p32.MyFirstModule.Customers_EditView.container6"
                                class={"mx-name-container6 formblock"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Div key="p32.MyFirstModule.Customers_EditView.layoutGrid1"
                                        $widgetId="p32.MyFirstModule.Customers_EditView.layoutGrid1"
                                        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-outer-bottom-medium"}
                                        style={undefined}
                                        content={[
                                            <$Div key="p32.MyFirstModule.Customers_EditView.layoutGrid1$row0"
                                                $widgetId="p32.MyFirstModule.Customers_EditView.layoutGrid1$row0"
                                                class={"row"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p32.MyFirstModule.Customers_EditView.layoutGrid1$row0$column0"
                                                        $widgetId="p32.MyFirstModule.Customers_EditView.layoutGrid1$row0$column0"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Text key="p32.MyFirstModule.Customers_EditView.text5"
                                                                $widgetId="p32.MyFirstModule.Customers_EditView.text5"
                                                                class={"mx-name-text5 formblock-title spacing-outer-bottom-none"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Person details" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"h4"} />
                                                        ]} />,
                                                    <$Div key="p32.MyFirstModule.Customers_EditView.layoutGrid1$row0$column1"
                                                        $widgetId="p32.MyFirstModule.Customers_EditView.layoutGrid1$row0$column1"
                                                        class={"col-lg-auto col-md-auto col-auto"}
                                                        style={undefined}
                                                        content={[
                                                            <$Text key="p32.MyFirstModule.Customers_EditView.text1"
                                                                $widgetId="p32.MyFirstModule.Customers_EditView.text1"
                                                                class={"mx-name-text1 text-detail"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Step 1 of 3" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
                                                        ]} />
                                                ]} />
                                        ]} />,
                                    <$Text key="p32.MyFirstModule.Customers_EditView.text3"
                                        $widgetId="p32.MyFirstModule.Customers_EditView.text3"
                                        class={"mx-name-text3 text-detail spacing-outer-bottom-large"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Please use this form to fill out any details regarding your person registration." }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"p"} />,
                                    <$DataView key="p32.MyFirstModule.Customers_EditView.dataView6"
                                        $widgetId="p32.MyFirstModule.Customers_EditView.dataView6"
                                        class={"mx-name-dataView6 form-vertical"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        object={AssociationObjectProperty({
                                            "dataSourceId": "p32.28",
                                            "scope": "$Customers",
                                            "editable": true
                                        })}
                                        emptyMessage={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        body={[
                                            <$FormGroup key="p32.MyFirstModule.Customers_EditView.textBox1$formGroup"
                                                $widgetId="p32.MyFirstModule.Customers_EditView.textBox1$formGroup"
                                                class={"mx-name-textBox1 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p32.MyFirstModule.Customers_EditView.textBox1"
                                                        $widgetId="p32.MyFirstModule.Customers_EditView.textBox1"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p32.MyFirstModule.Customers_EditView.dataView6",
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
                                                            "widgetId": "p32.MyFirstModule.Customers_EditView.textBox1"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "First name" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p32.MyFirstModule.Customers_EditView.textBox1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p32.MyFirstModule.Customers_EditView.textBox1"
                                                })} />,
                                            <$FormGroup key="p32.MyFirstModule.Customers_EditView.textBox2$formGroup"
                                                $widgetId="p32.MyFirstModule.Customers_EditView.textBox2$formGroup"
                                                class={"mx-name-textBox2 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p32.MyFirstModule.Customers_EditView.textBox2"
                                                        $widgetId="p32.MyFirstModule.Customers_EditView.textBox2"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p32.MyFirstModule.Customers_EditView.dataView6",
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
                                                            "widgetId": "p32.MyFirstModule.Customers_EditView.textBox2"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Last name" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p32.MyFirstModule.Customers_EditView.textBox2"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p32.MyFirstModule.Customers_EditView.textBox2"
                                                })} />,
                                            <$FormGroup key="p32.MyFirstModule.Customers_EditView.datePicker1$formGroup"
                                                $widgetId="p32.MyFirstModule.Customers_EditView.datePicker1$formGroup"
                                                class={"mx-name-datePicker1 mx-datepicker"}
                                                style={undefined}
                                                control={[
                                                    <$DatePicker key="p32.MyFirstModule.Customers_EditView.datePicker1"
                                                        $widgetId="p32.MyFirstModule.Customers_EditView.datePicker1"
                                                        mode={"date"}
                                                        showCalendarButton={true}
                                                        inputValue={AttributeProperty({
                                                            "scope": "p32.MyFirstModule.Customers_EditView.dataView6",
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
                                                            "widgetId": "p32.MyFirstModule.Customers_EditView.datePicker1"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Birth date" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p32.MyFirstModule.Customers_EditView.datePicker1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p32.MyFirstModule.Customers_EditView.datePicker1"
                                                })} />,
                                            <$FormGroup key="p32.MyFirstModule.Customers_EditView.radioButtons1$formGroup"
                                                $widgetId="p32.MyFirstModule.Customers_EditView.radioButtons1$formGroup"
                                                class={"mx-name-radioButtons1 mx-radiobuttons inline"}
                                                style={undefined}
                                                control={[
                                                    <$RadioButtonGroup key="p32.MyFirstModule.Customers_EditView.radioButtons1"
                                                        $widgetId="p32.MyFirstModule.Customers_EditView.radioButtons1"
                                                        value={AttributeProperty({
                                                            "scope": "p32.MyFirstModule.Customers_EditView.dataView6",
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
                                                            "widgetId": "p32.MyFirstModule.Customers_EditView.radioButtons1"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Maritial status" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p32.MyFirstModule.Customers_EditView.radioButtons1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p32.MyFirstModule.Customers_EditView.radioButtons1"
                                                })} />,
                                            <$FormGroup key="p32.MyFirstModule.Customers_EditView.radioButtons2$formGroup"
                                                $widgetId="p32.MyFirstModule.Customers_EditView.radioButtons2$formGroup"
                                                class={"mx-name-radioButtons2 mx-radiobuttons inline"}
                                                style={undefined}
                                                control={[
                                                    <$RadioButtonGroup key="p32.MyFirstModule.Customers_EditView.radioButtons2"
                                                        $widgetId="p32.MyFirstModule.Customers_EditView.radioButtons2"
                                                        value={AttributeProperty({
                                                            "scope": "p32.MyFirstModule.Customers_EditView.dataView6",
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
                                                            "widgetId": "p32.MyFirstModule.Customers_EditView.radioButtons2"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Gender" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p32.MyFirstModule.Customers_EditView.radioButtons2"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p32.MyFirstModule.Customers_EditView.radioButtons2"
                                                })} />,
                                            <$ConditionalVisibilityWrapper key="p32.MyFirstModule.Customers_EditView.textBox3$formGroup$visibility"
                                                $widgetId="p32.MyFirstModule.Customers_EditView.textBox3$formGroup$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Gender" }, { "type": "literal", "value": "Male" } ] }, "args": { "currentObject": { "widget": "p32.MyFirstModule.Customers_EditView.dataView6", "source": "object" } } }
                                                })}
                                                contents={[
                                                    <$FormGroup key="p32.MyFirstModule.Customers_EditView.textBox3$formGroup"
                                                        $widgetId="p32.MyFirstModule.Customers_EditView.textBox3$formGroup"
                                                        class={"mx-name-textBox3 mx-textbox"}
                                                        style={undefined}
                                                        control={[
                                                            <$TextBox key="p32.MyFirstModule.Customers_EditView.textBox3"
                                                                $widgetId="p32.MyFirstModule.Customers_EditView.textBox3"
                                                                inputValue={AttributeProperty({
                                                                    "scope": "p32.MyFirstModule.Customers_EditView.dataView6",
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
                                                                    "widgetId": "p32.MyFirstModule.Customers_EditView.textBox3"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Mail address" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p32.MyFirstModule.Customers_EditView.textBox3"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p32.MyFirstModule.Customers_EditView.textBox3"
                                                        })} />
                                                ]} />,
                                            <$ConditionalVisibilityWrapper key="p32.MyFirstModule.Customers_EditView.textBox4$formGroup$visibility"
                                                $widgetId="p32.MyFirstModule.Customers_EditView.textBox4$formGroup$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Gender" }, { "type": "literal", "value": "Male" } ] }, "args": { "currentObject": { "widget": "p32.MyFirstModule.Customers_EditView.dataView6", "source": "object" } } }
                                                })}
                                                contents={[
                                                    <$FormGroup key="p32.MyFirstModule.Customers_EditView.textBox4$formGroup"
                                                        $widgetId="p32.MyFirstModule.Customers_EditView.textBox4$formGroup"
                                                        class={"mx-name-textBox4 mx-textbox"}
                                                        style={undefined}
                                                        control={[
                                                            <$TextBox key="p32.MyFirstModule.Customers_EditView.textBox4"
                                                                $widgetId="p32.MyFirstModule.Customers_EditView.textBox4"
                                                                inputValue={AttributeProperty({
                                                                    "scope": "p32.MyFirstModule.Customers_EditView.dataView6",
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
                                                                    "widgetId": "p32.MyFirstModule.Customers_EditView.textBox4"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Phone number" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p32.MyFirstModule.Customers_EditView.textBox4"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p32.MyFirstModule.Customers_EditView.textBox4"
                                                        })} />
                                                ]} />,
                                            <$FormGroup key="p32.MyFirstModule.Customers_EditView.textBox5$formGroup"
                                                $widgetId="p32.MyFirstModule.Customers_EditView.textBox5$formGroup"
                                                class={"mx-name-textBox5 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p32.MyFirstModule.Customers_EditView.textBox5"
                                                        $widgetId="p32.MyFirstModule.Customers_EditView.textBox5"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p32.MyFirstModule.Customers_EditView.dataView6",
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
                                                            "widgetId": "p32.MyFirstModule.Customers_EditView.textBox5"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Average yearly income" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p32.MyFirstModule.Customers_EditView.textBox5"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p32.MyFirstModule.Customers_EditView.textBox5"
                                                })} />,
                                            <$FormGroup key="p32.MyFirstModule.Customers_EditView.textBox6$formGroup"
                                                $widgetId="p32.MyFirstModule.Customers_EditView.textBox6$formGroup"
                                                class={"mx-name-textBox6 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p32.MyFirstModule.Customers_EditView.textBox6"
                                                        $widgetId="p32.MyFirstModule.Customers_EditView.textBox6"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p32.MyFirstModule.Customers_EditView.dataView6",
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
                                                            "widgetId": "p32.MyFirstModule.Customers_EditView.textBox6"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Average sales order quantity" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p32.MyFirstModule.Customers_EditView.textBox6"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p32.MyFirstModule.Customers_EditView.textBox6"
                                                })} />
                                        ]}
                                        hideFooter={false}
                                        footer={[
                                            <$ActionButton key="p32.MyFirstModule.Customers_EditView.actionButton1"
                                                $widgetId="p32.MyFirstModule.Customers_EditView.actionButton1"
                                                buttonId={"p32.MyFirstModule.Customers_EditView.actionButton1"}
                                                class={"mx-name-actionButton1 spacing-outer-bottom"}
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
                                                    "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p32.MyFirstModule.Customers_EditView.dataView6", "source": "object" } }, "config": { "operationId": "RZQ/3JFmBFCSzM8LlrdRvA", "closePage": true }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />,
                                            <$ActionButton key="p32.MyFirstModule.Customers_EditView.actionButton2"
                                                $widgetId="p32.MyFirstModule.Customers_EditView.actionButton2"
                                                buttonId={"p32.MyFirstModule.Customers_EditView.actionButton2"}
                                                class={"mx-name-actionButton2 spacing-outer-bottom"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-default"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Back" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={undefined}
                                                action={ActionProperty({
                                                    "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />
                                ]}
                                ariaHidden={false} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Customers Edit view"
]);

export const classes = "layout-atlas layout-atlas-phone background-secondary";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Phone_BottomBar.Main": region$Main,
};
