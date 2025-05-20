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
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { RadioButtonGroup } from "mendix/widgets/web/RadioButtonGroup";
import { Text } from "mendix/widgets/web/Text";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Phone_BottomBar.js";

const { $Div, $Container, $Text, $DataView, $FormGroup, $TextBox, $RadioButtonGroup, $ActionButton } = asPluginWidgets({ Div, Container, Text, DataView, FormGroup, TextBox, RadioButtonGroup, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p33.MyFirstModule.Products_EditView.layoutGrid3"
        $widgetId="p33.MyFirstModule.Products_EditView.layoutGrid3"
        class={"mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p33.MyFirstModule.Products_EditView.layoutGrid3$row0"
                $widgetId="p33.MyFirstModule.Products_EditView.layoutGrid3$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p33.MyFirstModule.Products_EditView.layoutGrid3$row0$column0"
                        $widgetId="p33.MyFirstModule.Products_EditView.layoutGrid3$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Container key="p33.MyFirstModule.Products_EditView.container6"
                                $widgetId="p33.MyFirstModule.Products_EditView.container6"
                                class={"mx-name-container6 formblock"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Div key="p33.MyFirstModule.Products_EditView.layoutGrid1"
                                        $widgetId="p33.MyFirstModule.Products_EditView.layoutGrid1"
                                        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-outer-bottom-medium"}
                                        style={undefined}
                                        content={[
                                            <$Div key="p33.MyFirstModule.Products_EditView.layoutGrid1$row0"
                                                $widgetId="p33.MyFirstModule.Products_EditView.layoutGrid1$row0"
                                                class={"row"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p33.MyFirstModule.Products_EditView.layoutGrid1$row0$column0"
                                                        $widgetId="p33.MyFirstModule.Products_EditView.layoutGrid1$row0$column0"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Text key="p33.MyFirstModule.Products_EditView.text5"
                                                                $widgetId="p33.MyFirstModule.Products_EditView.text5"
                                                                class={"mx-name-text5 formblock-title spacing-outer-bottom-none"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Person details" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"h4"} />
                                                        ]} />,
                                                    <$Div key="p33.MyFirstModule.Products_EditView.layoutGrid1$row0$column1"
                                                        $widgetId="p33.MyFirstModule.Products_EditView.layoutGrid1$row0$column1"
                                                        class={"col-lg-auto col-md-auto col-auto"}
                                                        style={undefined}
                                                        content={[
                                                            <$Text key="p33.MyFirstModule.Products_EditView.text1"
                                                                $widgetId="p33.MyFirstModule.Products_EditView.text1"
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
                                    <$Text key="p33.MyFirstModule.Products_EditView.text3"
                                        $widgetId="p33.MyFirstModule.Products_EditView.text3"
                                        class={"mx-name-text3 text-detail spacing-outer-bottom-large"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Please use this form to fill out any details regarding your person registration." }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"p"} />,
                                    <$DataView key="p33.MyFirstModule.Products_EditView.dataView6"
                                        $widgetId="p33.MyFirstModule.Products_EditView.dataView6"
                                        class={"mx-name-dataView6 form-vertical"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        object={AssociationObjectProperty({
                                            "dataSourceId": "p33.28",
                                            "scope": "$Products",
                                            "editable": true
                                        })}
                                        emptyMessage={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        body={[
                                            <$FormGroup key="p33.MyFirstModule.Products_EditView.textBox1$formGroup"
                                                $widgetId="p33.MyFirstModule.Products_EditView.textBox1$formGroup"
                                                class={"mx-name-textBox1 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p33.MyFirstModule.Products_EditView.textBox1"
                                                        $widgetId="p33.MyFirstModule.Products_EditView.textBox1"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p33.MyFirstModule.Products_EditView.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.Products",
                                                            "attribute": "ProductName",
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
                                                            "widgetId": "p33.MyFirstModule.Products_EditView.textBox1"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Product name" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p33.MyFirstModule.Products_EditView.textBox1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p33.MyFirstModule.Products_EditView.textBox1"
                                                })} />,
                                            <$FormGroup key="p33.MyFirstModule.Products_EditView.radioButtons1$formGroup"
                                                $widgetId="p33.MyFirstModule.Products_EditView.radioButtons1$formGroup"
                                                class={"mx-name-radioButtons1 mx-radiobuttons inline"}
                                                style={undefined}
                                                control={[
                                                    <$RadioButtonGroup key="p33.MyFirstModule.Products_EditView.radioButtons1"
                                                        $widgetId="p33.MyFirstModule.Products_EditView.radioButtons1"
                                                        value={AttributeProperty({
                                                            "scope": "p33.MyFirstModule.Products_EditView.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.Products",
                                                            "attribute": "Color",
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
                                                            "widgetId": "p33.MyFirstModule.Products_EditView.radioButtons1"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Color" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p33.MyFirstModule.Products_EditView.radioButtons1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p33.MyFirstModule.Products_EditView.radioButtons1"
                                                })} />,
                                            <$FormGroup key="p33.MyFirstModule.Products_EditView.textBox2$formGroup"
                                                $widgetId="p33.MyFirstModule.Products_EditView.textBox2$formGroup"
                                                class={"mx-name-textBox2 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p33.MyFirstModule.Products_EditView.textBox2"
                                                        $widgetId="p33.MyFirstModule.Products_EditView.textBox2"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p33.MyFirstModule.Products_EditView.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.Products",
                                                            "attribute": "ListPrice",
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
                                                            "widgetId": "p33.MyFirstModule.Products_EditView.textBox2"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "List price" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p33.MyFirstModule.Products_EditView.textBox2"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p33.MyFirstModule.Products_EditView.textBox2"
                                                })} />,
                                            <$FormGroup key="p33.MyFirstModule.Products_EditView.textBox3$formGroup"
                                                $widgetId="p33.MyFirstModule.Products_EditView.textBox3$formGroup"
                                                class={"mx-name-textBox3 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p33.MyFirstModule.Products_EditView.textBox3"
                                                        $widgetId="p33.MyFirstModule.Products_EditView.textBox3"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p33.MyFirstModule.Products_EditView.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.Products",
                                                            "attribute": "SafetyStockLevel",
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
                                                            "widgetId": "p33.MyFirstModule.Products_EditView.textBox3"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Safety stock level" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p33.MyFirstModule.Products_EditView.textBox3"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p33.MyFirstModule.Products_EditView.textBox3"
                                                })} />,
                                            <$FormGroup key="p33.MyFirstModule.Products_EditView.radioButtons2$formGroup"
                                                $widgetId="p33.MyFirstModule.Products_EditView.radioButtons2$formGroup"
                                                class={"mx-name-radioButtons2 mx-radiobuttons inline"}
                                                style={undefined}
                                                control={[
                                                    <$RadioButtonGroup key="p33.MyFirstModule.Products_EditView.radioButtons2"
                                                        $widgetId="p33.MyFirstModule.Products_EditView.radioButtons2"
                                                        value={AttributeProperty({
                                                            "scope": "p33.MyFirstModule.Products_EditView.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.Products",
                                                            "attribute": "Size",
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
                                                            "widgetId": "p33.MyFirstModule.Products_EditView.radioButtons2"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Size" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p33.MyFirstModule.Products_EditView.radioButtons2"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p33.MyFirstModule.Products_EditView.radioButtons2"
                                                })} />,
                                            <$FormGroup key="p33.MyFirstModule.Products_EditView.textBox4$formGroup"
                                                $widgetId="p33.MyFirstModule.Products_EditView.textBox4$formGroup"
                                                class={"mx-name-textBox4 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p33.MyFirstModule.Products_EditView.textBox4"
                                                        $widgetId="p33.MyFirstModule.Products_EditView.textBox4"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p33.MyFirstModule.Products_EditView.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.Products",
                                                            "attribute": "Weight",
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
                                                            "widgetId": "p33.MyFirstModule.Products_EditView.textBox4"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Weight" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p33.MyFirstModule.Products_EditView.textBox4"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p33.MyFirstModule.Products_EditView.textBox4"
                                                })} />,
                                            <$FormGroup key="p33.MyFirstModule.Products_EditView.textBox5$formGroup"
                                                $widgetId="p33.MyFirstModule.Products_EditView.textBox5$formGroup"
                                                class={"mx-name-textBox5 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p33.MyFirstModule.Products_EditView.textBox5"
                                                        $widgetId="p33.MyFirstModule.Products_EditView.textBox5"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p33.MyFirstModule.Products_EditView.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.Products",
                                                            "attribute": "Style",
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
                                                            "widgetId": "p33.MyFirstModule.Products_EditView.textBox5"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Style" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p33.MyFirstModule.Products_EditView.textBox5"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p33.MyFirstModule.Products_EditView.textBox5"
                                                })} />,
                                            <$FormGroup key="p33.MyFirstModule.Products_EditView.textBox6$formGroup"
                                                $widgetId="p33.MyFirstModule.Products_EditView.textBox6$formGroup"
                                                class={"mx-name-textBox6 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p33.MyFirstModule.Products_EditView.textBox6"
                                                        $widgetId="p33.MyFirstModule.Products_EditView.textBox6"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p33.MyFirstModule.Products_EditView.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.Products",
                                                            "attribute": "ModelName",
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
                                                            "widgetId": "p33.MyFirstModule.Products_EditView.textBox6"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Model name" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p33.MyFirstModule.Products_EditView.textBox6"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p33.MyFirstModule.Products_EditView.textBox6"
                                                })} />,
                                            <$FormGroup key="p33.MyFirstModule.Products_EditView.radioButtons3$formGroup"
                                                $widgetId="p33.MyFirstModule.Products_EditView.radioButtons3$formGroup"
                                                class={"mx-name-radioButtons3 mx-radiobuttons inline"}
                                                style={undefined}
                                                control={[
                                                    <$RadioButtonGroup key="p33.MyFirstModule.Products_EditView.radioButtons3"
                                                        $widgetId="p33.MyFirstModule.Products_EditView.radioButtons3"
                                                        value={AttributeProperty({
                                                            "scope": "p33.MyFirstModule.Products_EditView.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.Products",
                                                            "attribute": "Status",
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
                                                            "widgetId": "p33.MyFirstModule.Products_EditView.radioButtons3"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Status" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p33.MyFirstModule.Products_EditView.radioButtons3"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p33.MyFirstModule.Products_EditView.radioButtons3"
                                                })} />
                                        ]}
                                        hideFooter={false}
                                        footer={[
                                            <$ActionButton key="p33.MyFirstModule.Products_EditView.actionButton1"
                                                $widgetId="p33.MyFirstModule.Products_EditView.actionButton1"
                                                buttonId={"p33.MyFirstModule.Products_EditView.actionButton1"}
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
                                                    "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p33.MyFirstModule.Products_EditView.dataView6", "source": "object" } }, "config": { "operationId": "G4wnQT3Cc1C7eAPjpYwL9g", "closePage": true }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />,
                                            <$ActionButton key="p33.MyFirstModule.Products_EditView.actionButton2"
                                                $widgetId="p33.MyFirstModule.Products_EditView.actionButton2"
                                                buttonId={"p33.MyFirstModule.Products_EditView.actionButton2"}
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
    "Products Edit view"
]);

export const classes = "layout-atlas layout-atlas-phone background-secondary";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Phone_BottomBar.Main": region$Main,
};
