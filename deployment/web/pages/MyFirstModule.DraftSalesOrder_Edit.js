import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AssociationProperty } from "mendix/AssociationProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import * as ComboboxWidgetModule from "C:/work/git/mendix-sample-web/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/work/git/mendix-sample-web/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { DatePicker } from "mendix/widgets/web/DatePicker";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Text } from "mendix/widgets/web/Text";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Phone_Default.js";

const { $Div, $Container, $Text, $DataView, $FormGroup, $TextBox, $DatePicker, $Combobox, $ActionButton } = asPluginWidgets({ Div, Container, Text, DataView, FormGroup, TextBox, DatePicker, Combobox, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p1.MyFirstModule.DraftSalesOrder_Edit.layoutGrid3"
        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.layoutGrid3"
        class={"mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p1.MyFirstModule.DraftSalesOrder_Edit.layoutGrid3$row0"
                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.layoutGrid3$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p1.MyFirstModule.DraftSalesOrder_Edit.layoutGrid3$row0$column0"
                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.layoutGrid3$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Container key="p1.MyFirstModule.DraftSalesOrder_Edit.container6"
                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.container6"
                                class={"mx-name-container6 formblock"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Div key="p1.MyFirstModule.DraftSalesOrder_Edit.layoutGrid1"
                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.layoutGrid1"
                                        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-outer-bottom-medium"}
                                        style={undefined}
                                        content={[
                                            <$Div key="p1.MyFirstModule.DraftSalesOrder_Edit.layoutGrid1$row0"
                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.layoutGrid1$row0"
                                                class={"row"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p1.MyFirstModule.DraftSalesOrder_Edit.layoutGrid1$row0$column0"
                                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.layoutGrid1$row0$column0"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Text key="p1.MyFirstModule.DraftSalesOrder_Edit.text5"
                                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.text5"
                                                                class={"mx-name-text5 formblock-title spacing-outer-bottom-none"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Person details" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"h4"} />
                                                        ]} />,
                                                    <$Div key="p1.MyFirstModule.DraftSalesOrder_Edit.layoutGrid1$row0$column1"
                                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.layoutGrid1$row0$column1"
                                                        class={"col-lg-auto col-md-auto col-auto"}
                                                        style={undefined}
                                                        content={[
                                                            <$Text key="p1.MyFirstModule.DraftSalesOrder_Edit.text1"
                                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.text1"
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
                                    <$Text key="p1.MyFirstModule.DraftSalesOrder_Edit.text3"
                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.text3"
                                        class={"mx-name-text3 text-detail spacing-outer-bottom-large"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Please use this form to fill out any details regarding your person registration." }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"p"} />,
                                    <$DataView key="p1.MyFirstModule.DraftSalesOrder_Edit.dataView6"
                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.dataView6"
                                        class={"mx-name-dataView6 form-vertical"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        object={AssociationObjectProperty({
                                            "dataSourceId": "p1.32",
                                            "scope": "$SalesTrackingTableTemporary",
                                            "editable": true
                                        })}
                                        emptyMessage={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        body={[
                                            <$FormGroup key="p1.MyFirstModule.DraftSalesOrder_Edit.textBox1$formGroup"
                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.textBox1$formGroup"
                                                class={"mx-name-textBox1 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p1.MyFirstModule.DraftSalesOrder_Edit.textBox1"
                                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.textBox1"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.SalesTrackingTableTemporary",
                                                            "attribute": "SalesID",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false,
                                                            "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
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
                                                            "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox1"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Sales ID" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox1"
                                                })} />,
                                            <$FormGroup key="p1.MyFirstModule.DraftSalesOrder_Edit.textBox2$formGroup"
                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.textBox2$formGroup"
                                                class={"mx-name-textBox2 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p1.MyFirstModule.DraftSalesOrder_Edit.textBox2"
                                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.textBox2"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.SalesTrackingTableTemporary",
                                                            "attribute": "OrderQuantity",
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
                                                            "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox2"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Order quantity" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox2"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox2"
                                                })} />,
                                            <$FormGroup key="p1.MyFirstModule.DraftSalesOrder_Edit.textBox3$formGroup"
                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.textBox3$formGroup"
                                                class={"mx-name-textBox3 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p1.MyFirstModule.DraftSalesOrder_Edit.textBox3"
                                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.textBox3"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.SalesTrackingTableTemporary",
                                                            "attribute": "UnitPrice",
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
                                                            "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox3"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Unit price" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox3"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox3"
                                                })} />,
                                            <$FormGroup key="p1.MyFirstModule.DraftSalesOrder_Edit.textBox4$formGroup"
                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.textBox4$formGroup"
                                                class={"mx-name-textBox4 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p1.MyFirstModule.DraftSalesOrder_Edit.textBox4"
                                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.textBox4"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.SalesTrackingTableTemporary",
                                                            "attribute": "DiscountAmount",
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
                                                            "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox4"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Discount amount" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox4"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox4"
                                                })} />,
                                            <$FormGroup key="p1.MyFirstModule.DraftSalesOrder_Edit.textBox5$formGroup"
                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.textBox5$formGroup"
                                                class={"mx-name-textBox5 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p1.MyFirstModule.DraftSalesOrder_Edit.textBox5"
                                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.textBox5"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.SalesTrackingTableTemporary",
                                                            "attribute": "ProductStandardCost",
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
                                                            "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox5"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Product standard cost" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox5"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox5"
                                                })} />,
                                            <$FormGroup key="p1.MyFirstModule.DraftSalesOrder_Edit.textBox6$formGroup"
                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.textBox6$formGroup"
                                                class={"mx-name-textBox6 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p1.MyFirstModule.DraftSalesOrder_Edit.textBox6"
                                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.textBox6"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.SalesTrackingTableTemporary",
                                                            "attribute": "TaxAmt",
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
                                                            "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox6"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Tax amt" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox6"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.textBox6"
                                                })} />,
                                            <$FormGroup key="p1.MyFirstModule.DraftSalesOrder_Edit.datePicker1$formGroup"
                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.datePicker1$formGroup"
                                                class={"mx-name-datePicker1 mx-datepicker"}
                                                style={undefined}
                                                control={[
                                                    <$DatePicker key="p1.MyFirstModule.DraftSalesOrder_Edit.datePicker1"
                                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.datePicker1"
                                                        mode={"date"}
                                                        showCalendarButton={true}
                                                        inputValue={AttributeProperty({
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.SalesTrackingTableTemporary",
                                                            "attribute": "OrderDate",
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
                                                            "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.datePicker1"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Order date" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.datePicker1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.datePicker1"
                                                })} />,
                                            <$FormGroup key="p1.MyFirstModule.DraftSalesOrder_Edit.datePicker2$formGroup"
                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.datePicker2$formGroup"
                                                class={"mx-name-datePicker2 mx-datepicker"}
                                                style={undefined}
                                                control={[
                                                    <$DatePicker key="p1.MyFirstModule.DraftSalesOrder_Edit.datePicker2"
                                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.datePicker2"
                                                        mode={"date"}
                                                        showCalendarButton={true}
                                                        inputValue={AttributeProperty({
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.SalesTrackingTableTemporary",
                                                            "attribute": "ShipDate",
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
                                                            "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.datePicker2"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Ship date" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.datePicker2"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.datePicker2"
                                                })} />,
                                            <$FormGroup key="p1.MyFirstModule.DraftSalesOrder_Edit.datePicker3$formGroup"
                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.datePicker3$formGroup"
                                                class={"mx-name-datePicker3 mx-datepicker"}
                                                style={undefined}
                                                control={[
                                                    <$DatePicker key="p1.MyFirstModule.DraftSalesOrder_Edit.datePicker3"
                                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.datePicker3"
                                                        mode={"date"}
                                                        showCalendarButton={true}
                                                        inputValue={AttributeProperty({
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstModule.SalesTrackingTableTemporary",
                                                            "attribute": "DueDate",
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
                                                            "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.datePicker3"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Due date" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.datePicker3"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.datePicker3"
                                                })} />,
                                            <$FormGroup key="p1.MyFirstModule.DraftSalesOrder_Edit.comboBox1$formGroup"
                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.comboBox1$formGroup"
                                                class={"mx-name-comboBox1"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p1.MyFirstModule.DraftSalesOrder_Edit.comboBox1"
                                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.comboBox1"
                                                        source={"context"}
                                                        optionsSourceType={"association"}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "MyFirstModule.Customers",
                                                            "attribute": "FirstName",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p1.0",
                                                            "isList": false
                                                        })}
                                                        optionsSourceAssociationCaptionExpression={undefined}
                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                        attributeAssociation={AssociationProperty({
                                                            "type": "Reference",
                                                            "entity": "MyFirstModule.SalesTrackingTableTemporary",
                                                            "path": "",
                                                            "attribute": "MyFirstModule.SalesTrackingTableTemporary_Customers",
                                                            "endpointEntity": "MyFirstModule.Customers",
                                                            "selectableObjectsId": "p1.0",
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p1.0",
                                                            "entity": "MyFirstModule.Customers",
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "operationId": "0uzByGvvg1aERhJv1M5KSg",
                                                            "sort": []
                                                        })}
                                                        optionsSourceStaticDataSource={[]}
                                                        emptyOptionText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        filterType={"contains"}
                                                        noOptionsText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        clearable={true}
                                                        optionsSourceAssociationCustomContentType={"no"}
                                                        optionsSourceAssociationCustomContent={undefined}
                                                        optionsSourceDatabaseCustomContentType={"no"}
                                                        staticDataSourceCustomContentType={"no"}
                                                        showFooter={false}
                                                        menuFooterContent={undefined}
                                                        selectionMethod={"checkbox"}
                                                        selectedItemsStyle={"text"}
                                                        selectAllButton={false}
                                                        selectAllButtonCaption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                            })
                                                        ])}
                                                        readOnlyStyle={"bordered"}
                                                        onChangeEvent={undefined}
                                                        onEnterEvent={undefined}
                                                        onLeaveEvent={undefined}
                                                        ariaRequired={false}
                                                        clearButtonAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                            })
                                                        ])}
                                                        removeValueAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11ySelectedValue={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yOptionsAvailable={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yInstructions={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                            })
                                                        ])}
                                                        lazyLoading={true}
                                                        loadingType={"spinner"}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.comboBox1"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Customers" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.comboBox1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.comboBox1"
                                                })} />,
                                            <$FormGroup key="p1.MyFirstModule.DraftSalesOrder_Edit.comboBox2$formGroup"
                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.comboBox2$formGroup"
                                                class={"mx-name-comboBox2"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p1.MyFirstModule.DraftSalesOrder_Edit.comboBox2"
                                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.comboBox2"
                                                        source={"context"}
                                                        optionsSourceType={"association"}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "MyFirstModule.Products",
                                                            "attribute": "ProductName",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p1.1",
                                                            "isList": false
                                                        })}
                                                        optionsSourceAssociationCaptionExpression={undefined}
                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                        attributeAssociation={AssociationProperty({
                                                            "type": "Reference",
                                                            "entity": "MyFirstModule.SalesTrackingTableTemporary",
                                                            "path": "",
                                                            "attribute": "MyFirstModule.SalesTrackingTableTemporary_Products",
                                                            "endpointEntity": "MyFirstModule.Products",
                                                            "selectableObjectsId": "p1.1",
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p1.1",
                                                            "entity": "MyFirstModule.Products",
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "operationId": "im/SCs7QtVa/v7kFExBeDQ",
                                                            "sort": []
                                                        })}
                                                        optionsSourceStaticDataSource={[]}
                                                        emptyOptionText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        filterType={"contains"}
                                                        noOptionsText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        clearable={true}
                                                        optionsSourceAssociationCustomContentType={"no"}
                                                        optionsSourceAssociationCustomContent={undefined}
                                                        optionsSourceDatabaseCustomContentType={"no"}
                                                        staticDataSourceCustomContentType={"no"}
                                                        showFooter={false}
                                                        menuFooterContent={undefined}
                                                        selectionMethod={"checkbox"}
                                                        selectedItemsStyle={"text"}
                                                        selectAllButton={false}
                                                        selectAllButtonCaption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                            })
                                                        ])}
                                                        readOnlyStyle={"bordered"}
                                                        onChangeEvent={undefined}
                                                        onEnterEvent={undefined}
                                                        onLeaveEvent={undefined}
                                                        ariaRequired={false}
                                                        clearButtonAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                            })
                                                        ])}
                                                        removeValueAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11ySelectedValue={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yOptionsAvailable={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yInstructions={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                            })
                                                        ])}
                                                        lazyLoading={true}
                                                        loadingType={"spinner"}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.comboBox2"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Products" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.comboBox2"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.comboBox2"
                                                })} />,
                                            <$FormGroup key="p1.MyFirstModule.DraftSalesOrder_Edit.comboBox3$formGroup"
                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.comboBox3$formGroup"
                                                class={"mx-name-comboBox3"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p1.MyFirstModule.DraftSalesOrder_Edit.comboBox3"
                                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.comboBox3"
                                                        source={"context"}
                                                        optionsSourceType={"association"}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "MyFirstModule.Locations",
                                                            "attribute": "State",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p1.2",
                                                            "isList": false
                                                        })}
                                                        optionsSourceAssociationCaptionExpression={undefined}
                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                        attributeAssociation={AssociationProperty({
                                                            "type": "Reference",
                                                            "entity": "MyFirstModule.SalesTrackingTableTemporary",
                                                            "path": "",
                                                            "attribute": "MyFirstModule.SalesTrackingTableTemporary_Locations",
                                                            "endpointEntity": "MyFirstModule.Locations",
                                                            "selectableObjectsId": "p1.2",
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p1.2",
                                                            "entity": "MyFirstModule.Locations",
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "operationId": "Qq8E2DvDHlGxUOpAvwLoiw",
                                                            "sort": []
                                                        })}
                                                        optionsSourceStaticDataSource={[]}
                                                        emptyOptionText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        filterType={"contains"}
                                                        noOptionsText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        clearable={true}
                                                        optionsSourceAssociationCustomContentType={"no"}
                                                        optionsSourceAssociationCustomContent={undefined}
                                                        optionsSourceDatabaseCustomContentType={"no"}
                                                        staticDataSourceCustomContentType={"no"}
                                                        showFooter={false}
                                                        menuFooterContent={undefined}
                                                        selectionMethod={"checkbox"}
                                                        selectedItemsStyle={"text"}
                                                        selectAllButton={false}
                                                        selectAllButtonCaption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                            })
                                                        ])}
                                                        readOnlyStyle={"bordered"}
                                                        onChangeEvent={undefined}
                                                        onEnterEvent={undefined}
                                                        onLeaveEvent={undefined}
                                                        ariaRequired={false}
                                                        clearButtonAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                            })
                                                        ])}
                                                        removeValueAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11ySelectedValue={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yOptionsAvailable={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yInstructions={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                            })
                                                        ])}
                                                        lazyLoading={true}
                                                        loadingType={"spinner"}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.comboBox3"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Locations" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.comboBox3"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.comboBox3"
                                                })} />,
                                            <$FormGroup key="p1.MyFirstModule.DraftSalesOrder_Edit.comboBox4$formGroup"
                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.comboBox4$formGroup"
                                                class={"mx-name-comboBox4"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p1.MyFirstModule.DraftSalesOrder_Edit.comboBox4"
                                                        $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.comboBox4"
                                                        source={"context"}
                                                        optionsSourceType={"association"}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "MyFirstModule.SalesPersons",
                                                            "attribute": "SalesPersonName",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p1.3",
                                                            "isList": false
                                                        })}
                                                        optionsSourceAssociationCaptionExpression={undefined}
                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                        attributeAssociation={AssociationProperty({
                                                            "type": "Reference",
                                                            "entity": "MyFirstModule.SalesTrackingTableTemporary",
                                                            "path": "",
                                                            "attribute": "MyFirstModule.SalesTrackingTableTemporary_SalesPersons",
                                                            "endpointEntity": "MyFirstModule.SalesPersons",
                                                            "selectableObjectsId": "p1.3",
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p1.3",
                                                            "entity": "MyFirstModule.SalesPersons",
                                                            "scope": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6",
                                                            "operationId": "R8V5gyk4cVC0z0wLFPEspg",
                                                            "sort": []
                                                        })}
                                                        optionsSourceStaticDataSource={[]}
                                                        emptyOptionText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        filterType={"contains"}
                                                        noOptionsText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        clearable={true}
                                                        optionsSourceAssociationCustomContentType={"no"}
                                                        optionsSourceAssociationCustomContent={undefined}
                                                        optionsSourceDatabaseCustomContentType={"no"}
                                                        staticDataSourceCustomContentType={"no"}
                                                        showFooter={false}
                                                        menuFooterContent={undefined}
                                                        selectionMethod={"checkbox"}
                                                        selectedItemsStyle={"text"}
                                                        selectAllButton={false}
                                                        selectAllButtonCaption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                            })
                                                        ])}
                                                        readOnlyStyle={"bordered"}
                                                        onChangeEvent={undefined}
                                                        onEnterEvent={undefined}
                                                        onLeaveEvent={undefined}
                                                        ariaRequired={false}
                                                        clearButtonAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                            })
                                                        ])}
                                                        removeValueAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11ySelectedValue={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yOptionsAvailable={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yInstructions={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                            })
                                                        ])}
                                                        lazyLoading={true}
                                                        loadingType={"spinner"}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.comboBox4"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Sales persons" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.comboBox4"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p1.MyFirstModule.DraftSalesOrder_Edit.comboBox4"
                                                })} />
                                        ]}
                                        hideFooter={false}
                                        footer={[
                                            <$ActionButton key="p1.MyFirstModule.DraftSalesOrder_Edit.actionButton1"
                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.actionButton1"
                                                buttonId={"p1.MyFirstModule.DraftSalesOrder_Edit.actionButton1"}
                                                class={"mx-name-actionButton1"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-success"}
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
                                                    "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p1.MyFirstModule.DraftSalesOrder_Edit.dataView6", "source": "object" } }, "config": { "operationId": "uTT6PE27Rl+LDs66bj4XGA", "closePage": true }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />,
                                            <$ActionButton key="p1.MyFirstModule.DraftSalesOrder_Edit.actionButton2"
                                                $widgetId="p1.MyFirstModule.DraftSalesOrder_Edit.actionButton2"
                                                buttonId={"p1.MyFirstModule.DraftSalesOrder_Edit.actionButton2"}
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
                                                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "xiQCzNOhVF6QlD7DacwXWg", "closePage": true }, "disabledDuringExecution": true },
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
    "Draft sales order Edit"
]);

export const classes = "layout-atlas layout-atlas-phone background-secondary";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Phone_Default.Main": region$Main,
};
