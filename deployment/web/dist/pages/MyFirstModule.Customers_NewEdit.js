import { reactExports, asPluginWidgets, selectTranslation } from '../index-BCA8X3MP.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BdzcW3SP.js';
import { ActionProperty } from '../ActionProperty-BjRv15Ma.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-stug8OtK.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-CGXSnxmy.js';
import { TextProperty } from '../Icon-CwpoK74K.js';
import { ActionButton } from '../ActionButton-B1FZcI8p.js';
import { DataView } from '../DataView-3yV-QRpp.js';
import { DatePicker } from '../DatePicker-B6FW3hWh.js';
import { Div } from '../Div-DWESTEoo.js';
import { RadioButtonGroup } from '../RadioButtonGroup-Dl-KCgta.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-B9xNoncC.js';
import { AttributeProperty } from '../Bgp-XL0v-iR-R4xy_.js';
import '../BQa9VDC5-BsmL2sNc.js';
import '../BrzhM9fk-B35Z04N6.js';
import '../CD0QimeZ-CiCtDOL8.js';
import '../C6ZHc0Cf-e1SMPdVi.js';
import '../CRg6lXMU-CTJyE8HK.js';
import '../BH5qNKCa-DKuecUbx.js';
import '../ListExpressionProperty-BWFcYvBl.js';
import '../WebIconProperty-DksUkMrc.js';
import '../WebStaticImageProperty-CiXGhPz_.js';
import '../Container-CxVkjo8s.js';
import '../Image-BLvaO7vK.js';
import '../DMc54HEs-BETi155K.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextBox, $DatePicker, $RadioButtonGroup, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, DatePicker, RadioButtonGroup, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p45.MyFirstModule.Customers_NewEdit.layoutGrid1",
      $widgetId: "p45.MyFirstModule.Customers_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p45.MyFirstModule.Customers_NewEdit.layoutGrid1$row0",
            $widgetId: "p45.MyFirstModule.Customers_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p45.MyFirstModule.Customers_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p45.MyFirstModule.Customers_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p45.MyFirstModule.Customers_NewEdit.dataView6",
                        $widgetId: "p45.MyFirstModule.Customers_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p45.12",
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
                              key: "p45.MyFirstModule.Customers_NewEdit.textBox1$formGroup",
                              $widgetId: "p45.MyFirstModule.Customers_NewEdit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p45.MyFirstModule.Customers_NewEdit.textBox1",
                                    $widgetId: "p45.MyFirstModule.Customers_NewEdit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p45.MyFirstModule.Customers_NewEdit.dataView6",
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
                                      "widgetId": "p45.MyFirstModule.Customers_NewEdit.textBox1"
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
                                "widgetId": "p45.MyFirstModule.Customers_NewEdit.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p45.MyFirstModule.Customers_NewEdit.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p45.MyFirstModule.Customers_NewEdit.textBox2$formGroup",
                              $widgetId: "p45.MyFirstModule.Customers_NewEdit.textBox2$formGroup",
                              class: "mx-name-textBox2 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p45.MyFirstModule.Customers_NewEdit.textBox2",
                                    $widgetId: "p45.MyFirstModule.Customers_NewEdit.textBox2",
                                    inputValue: AttributeProperty({
                                      "scope": "p45.MyFirstModule.Customers_NewEdit.dataView6",
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
                                      "widgetId": "p45.MyFirstModule.Customers_NewEdit.textBox2"
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
                                "widgetId": "p45.MyFirstModule.Customers_NewEdit.textBox2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p45.MyFirstModule.Customers_NewEdit.textBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p45.MyFirstModule.Customers_NewEdit.datePicker1$formGroup",
                              $widgetId: "p45.MyFirstModule.Customers_NewEdit.datePicker1$formGroup",
                              class: "mx-name-datePicker1 mx-datepicker",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $DatePicker,
                                  {
                                    key: "p45.MyFirstModule.Customers_NewEdit.datePicker1",
                                    $widgetId: "p45.MyFirstModule.Customers_NewEdit.datePicker1",
                                    mode: "date",
                                    showCalendarButton: true,
                                    inputValue: AttributeProperty({
                                      "scope": "p45.MyFirstModule.Customers_NewEdit.dataView6",
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
                                      "widgetId": "p45.MyFirstModule.Customers_NewEdit.datePicker1"
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
                                "widgetId": "p45.MyFirstModule.Customers_NewEdit.datePicker1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p45.MyFirstModule.Customers_NewEdit.datePicker1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p45.MyFirstModule.Customers_NewEdit.radioButtons1$formGroup",
                              $widgetId: "p45.MyFirstModule.Customers_NewEdit.radioButtons1$formGroup",
                              class: "mx-name-radioButtons1 mx-radiobuttons inline",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $RadioButtonGroup,
                                  {
                                    key: "p45.MyFirstModule.Customers_NewEdit.radioButtons1",
                                    $widgetId: "p45.MyFirstModule.Customers_NewEdit.radioButtons1",
                                    value: AttributeProperty({
                                      "scope": "p45.MyFirstModule.Customers_NewEdit.dataView6",
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
                                      "widgetId": "p45.MyFirstModule.Customers_NewEdit.radioButtons1"
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
                                "widgetId": "p45.MyFirstModule.Customers_NewEdit.radioButtons1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p45.MyFirstModule.Customers_NewEdit.radioButtons1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p45.MyFirstModule.Customers_NewEdit.radioButtons2$formGroup",
                              $widgetId: "p45.MyFirstModule.Customers_NewEdit.radioButtons2$formGroup",
                              class: "mx-name-radioButtons2 mx-radiobuttons inline",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $RadioButtonGroup,
                                  {
                                    key: "p45.MyFirstModule.Customers_NewEdit.radioButtons2",
                                    $widgetId: "p45.MyFirstModule.Customers_NewEdit.radioButtons2",
                                    value: AttributeProperty({
                                      "scope": "p45.MyFirstModule.Customers_NewEdit.dataView6",
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
                                      "widgetId": "p45.MyFirstModule.Customers_NewEdit.radioButtons2"
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
                                "widgetId": "p45.MyFirstModule.Customers_NewEdit.radioButtons2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p45.MyFirstModule.Customers_NewEdit.radioButtons2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p45.MyFirstModule.Customers_NewEdit.textBox3$formGroup",
                              $widgetId: "p45.MyFirstModule.Customers_NewEdit.textBox3$formGroup",
                              class: "mx-name-textBox3 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p45.MyFirstModule.Customers_NewEdit.textBox3",
                                    $widgetId: "p45.MyFirstModule.Customers_NewEdit.textBox3",
                                    inputValue: AttributeProperty({
                                      "scope": "p45.MyFirstModule.Customers_NewEdit.dataView6",
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
                                      "widgetId": "p45.MyFirstModule.Customers_NewEdit.textBox3"
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
                                "widgetId": "p45.MyFirstModule.Customers_NewEdit.textBox3"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p45.MyFirstModule.Customers_NewEdit.textBox3"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p45.MyFirstModule.Customers_NewEdit.textBox4$formGroup",
                              $widgetId: "p45.MyFirstModule.Customers_NewEdit.textBox4$formGroup",
                              class: "mx-name-textBox4 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p45.MyFirstModule.Customers_NewEdit.textBox4",
                                    $widgetId: "p45.MyFirstModule.Customers_NewEdit.textBox4",
                                    inputValue: AttributeProperty({
                                      "scope": "p45.MyFirstModule.Customers_NewEdit.dataView6",
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
                                      "widgetId": "p45.MyFirstModule.Customers_NewEdit.textBox4"
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
                                "widgetId": "p45.MyFirstModule.Customers_NewEdit.textBox4"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p45.MyFirstModule.Customers_NewEdit.textBox4"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p45.MyFirstModule.Customers_NewEdit.textBox5$formGroup",
                              $widgetId: "p45.MyFirstModule.Customers_NewEdit.textBox5$formGroup",
                              class: "mx-name-textBox5 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p45.MyFirstModule.Customers_NewEdit.textBox5",
                                    $widgetId: "p45.MyFirstModule.Customers_NewEdit.textBox5",
                                    inputValue: AttributeProperty({
                                      "scope": "p45.MyFirstModule.Customers_NewEdit.dataView6",
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
                                      "widgetId": "p45.MyFirstModule.Customers_NewEdit.textBox5"
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
                                "widgetId": "p45.MyFirstModule.Customers_NewEdit.textBox5"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p45.MyFirstModule.Customers_NewEdit.textBox5"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p45.MyFirstModule.Customers_NewEdit.textBox6$formGroup",
                              $widgetId: "p45.MyFirstModule.Customers_NewEdit.textBox6$formGroup",
                              class: "mx-name-textBox6 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p45.MyFirstModule.Customers_NewEdit.textBox6",
                                    $widgetId: "p45.MyFirstModule.Customers_NewEdit.textBox6",
                                    inputValue: AttributeProperty({
                                      "scope": "p45.MyFirstModule.Customers_NewEdit.dataView6",
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
                                      "widgetId": "p45.MyFirstModule.Customers_NewEdit.textBox6"
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
                                "widgetId": "p45.MyFirstModule.Customers_NewEdit.textBox6"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p45.MyFirstModule.Customers_NewEdit.textBox6"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p45.MyFirstModule.Customers_NewEdit.actionButton1",
                              $widgetId: "p45.MyFirstModule.Customers_NewEdit.actionButton1",
                              buttonId: "p45.MyFirstModule.Customers_NewEdit.actionButton1",
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
                                "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p45.MyFirstModule.Customers_NewEdit.dataView6", "source": "object" } }, "config": { "operationId": "4er6VHar+1uDNoUHS2/RSQ", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p45.MyFirstModule.Customers_NewEdit.actionButton2",
                              $widgetId: "p45.MyFirstModule.Customers_NewEdit.actionButton2",
                              buttonId: "p45.MyFirstModule.Customers_NewEdit.actionButton2",
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
