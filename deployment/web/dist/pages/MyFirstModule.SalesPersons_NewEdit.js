import { reactExports, asPluginWidgets, selectTranslation } from '../index-sUfOvV_8.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-kt62KmQf.js';
import { ActionProperty } from '../ActionProperty-CYY0rMjJ.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-CvJe9n_9.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-DB4tBNwH.js';
import { TextProperty } from '../Icon-CLMmynlf.js';
import { ActionButton } from '../ActionButton-CVWjzahT.js';
import { DataView } from '../DataView-CN3VDaKd.js';
import { DatePicker } from '../DatePicker-D4kxlNwv.js';
import { Div } from '../Div-CqbbyV04.js';
import { RadioButtonGroup } from '../RadioButtonGroup-BOKjYB7g.js';
import { content as content$1 } from '../Atlas_Core.Atlas_Default-CMnpfQME.js';
import { AttributeProperty } from '../Bgp-XL0v-GMvL-NeW.js';
import '../BQa9VDC5-VmuteT3Q.js';
import '../BrzhM9fk-DCcHnYPV.js';
import '../CD0QimeZ-BCPkRTe3.js';
import '../C6ZHc0Cf-CABMShA-.js';
import '../CRg6lXMU-B-hFKZM6.js';
import '../BH5qNKCa-k3CyHRsq.js';
import '../ListExpressionProperty-3-MchLHW.js';
import '../WebIconProperty-BB_92iSr.js';
import '../WebStaticImageProperty-BaJIOPEP.js';
import '../Container-DX13f28C.js';
import '../Image-DtxvCY00.js';
import '../DMc54HEs-5Q7iFlvv.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextBox, $DatePicker, $RadioButtonGroup, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, DatePicker, RadioButtonGroup, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p24.MyFirstModule.SalesPersons_NewEdit.layoutGrid1",
      $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p24.MyFirstModule.SalesPersons_NewEdit.layoutGrid1$row0",
            $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p24.MyFirstModule.SalesPersons_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p24.MyFirstModule.SalesPersons_NewEdit.dataView6",
                        $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p24.12",
                          "scope": "$SalesPersons",
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
                              key: "p24.MyFirstModule.SalesPersons_NewEdit.textBox1$formGroup",
                              $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p24.MyFirstModule.SalesPersons_NewEdit.textBox1",
                                    $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p24.MyFirstModule.SalesPersons_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.SalesPersons",
                                      "attribute": "SalesPersonName",
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
                                      "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Sales person name" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p24.MyFirstModule.SalesPersons_NewEdit.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p24.MyFirstModule.SalesPersons_NewEdit.textBox2$formGroup",
                              $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.textBox2$formGroup",
                              class: "mx-name-textBox2 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p24.MyFirstModule.SalesPersons_NewEdit.textBox2",
                                    $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.textBox2",
                                    inputValue: AttributeProperty({
                                      "scope": "p24.MyFirstModule.SalesPersons_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.SalesPersons",
                                      "attribute": "SalesPersonLastName",
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
                                      "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.textBox2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Sales person last name" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.textBox2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p24.MyFirstModule.SalesPersons_NewEdit.textBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p24.MyFirstModule.SalesPersons_NewEdit.textBox3$formGroup",
                              $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.textBox3$formGroup",
                              class: "mx-name-textBox3 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p24.MyFirstModule.SalesPersons_NewEdit.textBox3",
                                    $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.textBox3",
                                    inputValue: AttributeProperty({
                                      "scope": "p24.MyFirstModule.SalesPersons_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.SalesPersons",
                                      "attribute": "SalesPersonTitle",
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
                                      "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.textBox3"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Sales person title" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.textBox3"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p24.MyFirstModule.SalesPersons_NewEdit.textBox3"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p24.MyFirstModule.SalesPersons_NewEdit.datePicker1$formGroup",
                              $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.datePicker1$formGroup",
                              class: "mx-name-datePicker1 mx-datepicker",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $DatePicker,
                                  {
                                    key: "p24.MyFirstModule.SalesPersons_NewEdit.datePicker1",
                                    $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.datePicker1",
                                    mode: "date",
                                    showCalendarButton: true,
                                    inputValue: AttributeProperty({
                                      "scope": "p24.MyFirstModule.SalesPersons_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.SalesPersons",
                                      "attribute": "HireDate",
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
                                      "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.datePicker1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Hire date" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.datePicker1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p24.MyFirstModule.SalesPersons_NewEdit.datePicker1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p24.MyFirstModule.SalesPersons_NewEdit.datePicker2$formGroup",
                              $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.datePicker2$formGroup",
                              class: "mx-name-datePicker2 mx-datepicker",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $DatePicker,
                                  {
                                    key: "p24.MyFirstModule.SalesPersons_NewEdit.datePicker2",
                                    $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.datePicker2",
                                    mode: "date",
                                    showCalendarButton: true,
                                    inputValue: AttributeProperty({
                                      "scope": "p24.MyFirstModule.SalesPersons_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.SalesPersons",
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
                                      "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.datePicker2"
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
                                "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.datePicker2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p24.MyFirstModule.SalesPersons_NewEdit.datePicker2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons1$formGroup",
                              $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons1$formGroup",
                              class: "mx-name-radioButtons1 mx-radiobuttons inline",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $RadioButtonGroup,
                                  {
                                    key: "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons1",
                                    $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons1",
                                    value: AttributeProperty({
                                      "scope": "p24.MyFirstModule.SalesPersons_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.SalesPersons",
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
                                      "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons1"
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
                                "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons2$formGroup",
                              $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons2$formGroup",
                              class: "mx-name-radioButtons2 mx-radiobuttons inline",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $RadioButtonGroup,
                                  {
                                    key: "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons2",
                                    $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons2",
                                    value: AttributeProperty({
                                      "scope": "p24.MyFirstModule.SalesPersons_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.SalesPersons",
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
                                      "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons2"
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
                                "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p24.MyFirstModule.SalesPersons_NewEdit.textBox4$formGroup",
                              $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.textBox4$formGroup",
                              class: "mx-name-textBox4 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p24.MyFirstModule.SalesPersons_NewEdit.textBox4",
                                    $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.textBox4",
                                    inputValue: AttributeProperty({
                                      "scope": "p24.MyFirstModule.SalesPersons_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.SalesPersons",
                                      "attribute": "MonthlySalary",
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
                                      "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.textBox4"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Monthly salary" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.textBox4"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p24.MyFirstModule.SalesPersons_NewEdit.textBox4"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons3$formGroup",
                              $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons3$formGroup",
                              class: "mx-name-radioButtons3 mx-radiobuttons inline",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $RadioButtonGroup,
                                  {
                                    key: "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons3",
                                    $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons3",
                                    value: AttributeProperty({
                                      "scope": "p24.MyFirstModule.SalesPersons_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstModule.SalesPersons",
                                      "attribute": "Status",
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
                                      "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons3"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Status" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons3"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p24.MyFirstModule.SalesPersons_NewEdit.radioButtons3"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p24.MyFirstModule.SalesPersons_NewEdit.actionButton1",
                              $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.actionButton1",
                              buttonId: "p24.MyFirstModule.SalesPersons_NewEdit.actionButton1",
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
                                "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p24.MyFirstModule.SalesPersons_NewEdit.dataView6", "source": "object" } }, "config": { "operationId": "2nO7nxQCzV6IplsMtAB1Lg", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p24.MyFirstModule.SalesPersons_NewEdit.actionButton2",
                              $widgetId: "p24.MyFirstModule.SalesPersons_NewEdit.actionButton2",
                              buttonId: "p24.MyFirstModule.SalesPersons_NewEdit.actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "KasQpyOpa1SiHt53zVh8Fw", "closePage": true }, "disabledDuringExecution": true },
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
  "Edit Sales Persons"
]);
const classes = "layout-atlas layout-atlas-responsive-default";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_Default.Main": region$Main
};

export { classes, content, style, title };
