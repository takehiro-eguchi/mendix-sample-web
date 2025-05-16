import { reactExports, asPluginWidgets, selectTranslation } from '../index-DJGwzDdd.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BpA9Sx2X.js';
import { ActionButton, ActionProperty } from '../ActionButton-B90FcSI6.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-CvISHixh.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-CDLV78js.js';
import { TextProperty } from '../Icon-Dv5nfF6s.js';
import { DataView } from '../DataView-BpUahdMP.js';
import { DatePicker } from '../DatePicker-Be3CU4a7.js';
import { Div } from '../Div-DJcJ5gVg.js';
import { RadioButtonGroup } from '../RadioButtonGroup-C25nSKoH.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-BGEPdRoX.js';
import { AttributeProperty } from '../Bgp-XL0v-ChI9Snow.js';
import '../BQa9VDC5-bIsskIdw.js';
import '../BrzhM9fk-D6dvPqAy.js';
import '../CD0QimeZ-CgVe4JEF.js';
import '../C6ZHc0Cf-B2pvAQmI.js';
import '../CRg6lXMU-BNB_WsC0.js';
import '../BH5qNKCa-DF_eSa8O.js';
import '../ListExpressionProperty-DCAmFb5G.js';
import '../WebIconProperty-BFDeGq-3.js';
import '../WebStaticImageProperty-BzG0dGiB.js';
import '../Container-6llxP7Tz.js';
import '../Image-CGzd1yTB.js';
import '../DMc54HEs-CJQCGXv1.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextBox, $DatePicker, $RadioButtonGroup, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, DatePicker, RadioButtonGroup, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p31.MyFirstModule.Customers_NewEdit.layoutGrid1",
      $widgetId: "p31.MyFirstModule.Customers_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p31.MyFirstModule.Customers_NewEdit.layoutGrid1$row0",
            $widgetId: "p31.MyFirstModule.Customers_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p31.MyFirstModule.Customers_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p31.MyFirstModule.Customers_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p31.MyFirstModule.Customers_NewEdit.dataView6",
                        $widgetId: "p31.MyFirstModule.Customers_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p31.12",
                          "scope": "$Customers",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p31.MyFirstModule.Customers_NewEdit.textBox1$formGroup",
                              $widgetId: "p31.MyFirstModule.Customers_NewEdit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p31.MyFirstModule.Customers_NewEdit.textBox1",
                                    $widgetId: "p31.MyFirstModule.Customers_NewEdit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p31.MyFirstModule.Customers_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.Customers",
                                      "attribute": "FirstName",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "control",
                                    maxLength: 200,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    onEnterKeyPress: void 0,
                                    ariaLabel: void 0,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p31.MyFirstModule.Customers_NewEdit.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "First name" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p31.MyFirstModule.Customers_NewEdit.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p31.MyFirstModule.Customers_NewEdit.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p31.MyFirstModule.Customers_NewEdit.textBox2$formGroup",
                              $widgetId: "p31.MyFirstModule.Customers_NewEdit.textBox2$formGroup",
                              class: "mx-name-textBox2 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p31.MyFirstModule.Customers_NewEdit.textBox2",
                                    $widgetId: "p31.MyFirstModule.Customers_NewEdit.textBox2",
                                    inputValue: AttributeProperty({
                                      "scope": "p31.MyFirstModule.Customers_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.Customers",
                                      "attribute": "LastName",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "control",
                                    maxLength: 200,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    onEnterKeyPress: void 0,
                                    ariaLabel: void 0,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p31.MyFirstModule.Customers_NewEdit.textBox2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Last name" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p31.MyFirstModule.Customers_NewEdit.textBox2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p31.MyFirstModule.Customers_NewEdit.textBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p31.MyFirstModule.Customers_NewEdit.datePicker1$formGroup",
                              $widgetId: "p31.MyFirstModule.Customers_NewEdit.datePicker1$formGroup",
                              class: "mx-name-datePicker1 mx-datepicker",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $DatePicker,
                                  {
                                    key: "p31.MyFirstModule.Customers_NewEdit.datePicker1",
                                    $widgetId: "p31.MyFirstModule.Customers_NewEdit.datePicker1",
                                    mode: "date",
                                    showCalendarButton: true,
                                    inputValue: AttributeProperty({
                                      "scope": "p31.MyFirstModule.Customers_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.Customers",
                                      "attribute": "BirthDate",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {
                                        "dateFormat": selectTranslation([
                                          {
                                            "type": "date"
                                          }
                                        ])
                                      }
                                    }),
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    buttonLabel: TextProperty({
                                      "value": selectTranslation([
                                        "Show date picker"
                                      ])
                                    }),
                                    readOnlyStyle: "control",
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: void 0,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p31.MyFirstModule.Customers_NewEdit.datePicker1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Birth date" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p31.MyFirstModule.Customers_NewEdit.datePicker1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p31.MyFirstModule.Customers_NewEdit.datePicker1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p31.MyFirstModule.Customers_NewEdit.radioButtons1$formGroup",
                              $widgetId: "p31.MyFirstModule.Customers_NewEdit.radioButtons1$formGroup",
                              class: "mx-name-radioButtons1 mx-radiobuttons inline",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $RadioButtonGroup,
                                  {
                                    key: "p31.MyFirstModule.Customers_NewEdit.radioButtons1",
                                    $widgetId: "p31.MyFirstModule.Customers_NewEdit.radioButtons1",
                                    value: AttributeProperty({
                                      "scope": "p31.MyFirstModule.Customers_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.Customers",
                                      "attribute": "MaritialStatus",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    readOnlyStyle: "control",
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: void 0,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p31.MyFirstModule.Customers_NewEdit.radioButtons1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Maritial status" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p31.MyFirstModule.Customers_NewEdit.radioButtons1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p31.MyFirstModule.Customers_NewEdit.radioButtons1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p31.MyFirstModule.Customers_NewEdit.radioButtons2$formGroup",
                              $widgetId: "p31.MyFirstModule.Customers_NewEdit.radioButtons2$formGroup",
                              class: "mx-name-radioButtons2 mx-radiobuttons inline",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $RadioButtonGroup,
                                  {
                                    key: "p31.MyFirstModule.Customers_NewEdit.radioButtons2",
                                    $widgetId: "p31.MyFirstModule.Customers_NewEdit.radioButtons2",
                                    value: AttributeProperty({
                                      "scope": "p31.MyFirstModule.Customers_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.Customers",
                                      "attribute": "Gender",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    readOnlyStyle: "control",
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: void 0,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p31.MyFirstModule.Customers_NewEdit.radioButtons2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Gender" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p31.MyFirstModule.Customers_NewEdit.radioButtons2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p31.MyFirstModule.Customers_NewEdit.radioButtons2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p31.MyFirstModule.Customers_NewEdit.textBox3$formGroup",
                              $widgetId: "p31.MyFirstModule.Customers_NewEdit.textBox3$formGroup",
                              class: "mx-name-textBox3 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p31.MyFirstModule.Customers_NewEdit.textBox3",
                                    $widgetId: "p31.MyFirstModule.Customers_NewEdit.textBox3",
                                    inputValue: AttributeProperty({
                                      "scope": "p31.MyFirstModule.Customers_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.Customers",
                                      "attribute": "MailAddress",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "control",
                                    maxLength: 200,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    onEnterKeyPress: void 0,
                                    ariaLabel: void 0,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p31.MyFirstModule.Customers_NewEdit.textBox3"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Mail address" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p31.MyFirstModule.Customers_NewEdit.textBox3"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p31.MyFirstModule.Customers_NewEdit.textBox3"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p31.MyFirstModule.Customers_NewEdit.textBox4$formGroup",
                              $widgetId: "p31.MyFirstModule.Customers_NewEdit.textBox4$formGroup",
                              class: "mx-name-textBox4 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p31.MyFirstModule.Customers_NewEdit.textBox4",
                                    $widgetId: "p31.MyFirstModule.Customers_NewEdit.textBox4",
                                    inputValue: AttributeProperty({
                                      "scope": "p31.MyFirstModule.Customers_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.Customers",
                                      "attribute": "PhoneNumber",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "control",
                                    maxLength: 200,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    onEnterKeyPress: void 0,
                                    ariaLabel: void 0,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p31.MyFirstModule.Customers_NewEdit.textBox4"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Phone number" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p31.MyFirstModule.Customers_NewEdit.textBox4"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p31.MyFirstModule.Customers_NewEdit.textBox4"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p31.MyFirstModule.Customers_NewEdit.textBox5$formGroup",
                              $widgetId: "p31.MyFirstModule.Customers_NewEdit.textBox5$formGroup",
                              class: "mx-name-textBox5 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p31.MyFirstModule.Customers_NewEdit.textBox5",
                                    $widgetId: "p31.MyFirstModule.Customers_NewEdit.textBox5",
                                    inputValue: AttributeProperty({
                                      "scope": "p31.MyFirstModule.Customers_NewEdit.dataView6",
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
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "control",
                                    maxLength: void 0,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    onEnterKeyPress: void 0,
                                    ariaLabel: void 0,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p31.MyFirstModule.Customers_NewEdit.textBox5"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Average yearly income" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p31.MyFirstModule.Customers_NewEdit.textBox5"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p31.MyFirstModule.Customers_NewEdit.textBox5"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p31.MyFirstModule.Customers_NewEdit.textBox6$formGroup",
                              $widgetId: "p31.MyFirstModule.Customers_NewEdit.textBox6$formGroup",
                              class: "mx-name-textBox6 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p31.MyFirstModule.Customers_NewEdit.textBox6",
                                    $widgetId: "p31.MyFirstModule.Customers_NewEdit.textBox6",
                                    inputValue: AttributeProperty({
                                      "scope": "p31.MyFirstModule.Customers_NewEdit.dataView6",
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
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "control",
                                    maxLength: void 0,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    onEnterKeyPress: void 0,
                                    ariaLabel: void 0,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p31.MyFirstModule.Customers_NewEdit.textBox6"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Average sales order quantity" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p31.MyFirstModule.Customers_NewEdit.textBox6"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p31.MyFirstModule.Customers_NewEdit.textBox6"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p31.MyFirstModule.Customers_NewEdit.actionButton1",
                              $widgetId: "p31.MyFirstModule.Customers_NewEdit.actionButton1",
                              buttonId: "p31.MyFirstModule.Customers_NewEdit.actionButton1",
                              class: "mx-name-actionButton1",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-primary",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p31.MyFirstModule.Customers_NewEdit.dataView6", "source": "object" } }, "config": { "operationId": "4er6VHar+1uDNoUHS2/RSQ", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p31.MyFirstModule.Customers_NewEdit.actionButton2",
                              $widgetId: "p31.MyFirstModule.Customers_NewEdit.actionButton2",
                              buttonId: "p31.MyFirstModule.Customers_NewEdit.actionButton2",
                              class: "mx-name-actionButton2",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "80qSAy6tQlapkbIoLg8IuQ", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Edit Customers"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
