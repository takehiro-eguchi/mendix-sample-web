import { reactExports, asPluginWidgets, addEnumerations, selectTranslation } from '../index-BK9-l-60.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-CNkE77Y0.js';
import { ActionProperty } from '../ActionProperty-DS8NDQ2q.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-CpSsGt-6.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-D6Rvgx61.js';
import { TextProperty } from '../Icon-bVASr8MS.js';
import { ActionButton } from '../ActionButton-DQrAMvYT.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BbYYw0ly.js';
import { Container } from '../Container-DobQDWAA.js';
import { DataView } from '../DataView-VUb0u99s.js';
import { DatePicker } from '../DatePicker-B0E9SWfr.js';
import { Div } from '../Div-DkGbaEe3.js';
import { RadioButtonGroup } from '../RadioButtonGroup-B_LhRmPZ.js';
import { Text } from '../Text-BcexcteZ.js';
import { content as content$1 } from '../Atlas_Core.Phone_BottomBar-DAcgfY9a.js';
import { AttributeProperty } from '../Bgp-XL0v-C7x6tFfM.js';
import '../BQa9VDC5-P_lNGrzq.js';
import '../BrzhM9fk-CY1CP8BK.js';
import '../CD0QimeZ-Do4rcJoP.js';
import '../C6ZHc0Cf-DW2U1m2B.js';
import '../CRg6lXMU-Cxeq2ZRY.js';
import '../InlineText-06k9DgcQ.js';
import '../WebIconProperty-vPsRN3Rv.js';
import '../SimpleMenuBar-CXu-E15R.js';
import '../DMc54HEs-BMpoF4j_.js';

const React = { createElement: reactExports.createElement };
const { $Div, $Container, $Text, $DataView, $FormGroup, $TextBox, $DatePicker, $RadioButtonGroup, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, Container, Text, DataView, FormGroup, TextBox, DatePicker, RadioButtonGroup, ConditionalVisibilityWrapper, ActionButton });
addEnumerations({
  "MyFirstModule.Gender": [
    [
      "Female",
      selectTranslation([
        "Female"
      ])
    ],
    [
      "Male",
      selectTranslation([
        "Male"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p32.MyFirstModule.Customers_EditView.layoutGrid3",
      $widgetId: "p32.MyFirstModule.Customers_EditView.layoutGrid3",
      class: "mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p32.MyFirstModule.Customers_EditView.layoutGrid3$row0",
            $widgetId: "p32.MyFirstModule.Customers_EditView.layoutGrid3$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p32.MyFirstModule.Customers_EditView.layoutGrid3$row0$column0",
                  $widgetId: "p32.MyFirstModule.Customers_EditView.layoutGrid3$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p32.MyFirstModule.Customers_EditView.container6",
                        $widgetId: "p32.MyFirstModule.Customers_EditView.container6",
                        class: "mx-name-container6 formblock",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Div,
                            {
                              key: "p32.MyFirstModule.Customers_EditView.layoutGrid1",
                              $widgetId: "p32.MyFirstModule.Customers_EditView.layoutGrid1",
                              class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid spacing-outer-bottom-medium",
                              style: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p32.MyFirstModule.Customers_EditView.layoutGrid1$row0",
                                    $widgetId: "p32.MyFirstModule.Customers_EditView.layoutGrid1$row0",
                                    class: "row",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p32.MyFirstModule.Customers_EditView.layoutGrid1$row0$column0",
                                          $widgetId: "p32.MyFirstModule.Customers_EditView.layoutGrid1$row0$column0",
                                          class: "col-lg col-md col",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p32.MyFirstModule.Customers_EditView.text5",
                                                $widgetId: "p32.MyFirstModule.Customers_EditView.text5",
                                                class: "mx-name-text5 formblock-title spacing-outer-bottom-none",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Person details" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "h4"
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p32.MyFirstModule.Customers_EditView.layoutGrid1$row0$column1",
                                          $widgetId: "p32.MyFirstModule.Customers_EditView.layoutGrid1$row0$column1",
                                          class: "col-lg-auto col-md-auto col-auto",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p32.MyFirstModule.Customers_EditView.text1",
                                                $widgetId: "p32.MyFirstModule.Customers_EditView.text1",
                                                class: "mx-name-text1 text-detail",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Step 1 of 3" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "span"
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
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p32.MyFirstModule.Customers_EditView.text3",
                              $widgetId: "p32.MyFirstModule.Customers_EditView.text3",
                              class: "mx-name-text3 text-detail spacing-outer-bottom-large",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Please use this form to fill out any details regarding your person registration." }, "args": {} }
                                })
                              ]),
                              renderMode: "p"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $DataView,
                            {
                              key: "p32.MyFirstModule.Customers_EditView.dataView6",
                              $widgetId: "p32.MyFirstModule.Customers_EditView.dataView6",
                              class: "mx-name-dataView6 form-vertical",
                              style: void 0,
                              tabIndex: void 0,
                              object: AssociationObjectProperty({
                                "dataSourceId": "p32.28",
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
                                    key: "p32.MyFirstModule.Customers_EditView.textBox1$formGroup",
                                    $widgetId: "p32.MyFirstModule.Customers_EditView.textBox1$formGroup",
                                    class: "mx-name-textBox1 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p32.MyFirstModule.Customers_EditView.textBox1",
                                          $widgetId: "p32.MyFirstModule.Customers_EditView.textBox1",
                                          inputValue: AttributeProperty({
                                            "scope": "p32.MyFirstModule.Customers_EditView.dataView6",
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
                                            "widgetId": "p32.MyFirstModule.Customers_EditView.textBox1"
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
                                      "widgetId": "p32.MyFirstModule.Customers_EditView.textBox1"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p32.MyFirstModule.Customers_EditView.textBox1"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p32.MyFirstModule.Customers_EditView.textBox2$formGroup",
                                    $widgetId: "p32.MyFirstModule.Customers_EditView.textBox2$formGroup",
                                    class: "mx-name-textBox2 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p32.MyFirstModule.Customers_EditView.textBox2",
                                          $widgetId: "p32.MyFirstModule.Customers_EditView.textBox2",
                                          inputValue: AttributeProperty({
                                            "scope": "p32.MyFirstModule.Customers_EditView.dataView6",
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
                                            "widgetId": "p32.MyFirstModule.Customers_EditView.textBox2"
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
                                      "widgetId": "p32.MyFirstModule.Customers_EditView.textBox2"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p32.MyFirstModule.Customers_EditView.textBox2"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p32.MyFirstModule.Customers_EditView.datePicker1$formGroup",
                                    $widgetId: "p32.MyFirstModule.Customers_EditView.datePicker1$formGroup",
                                    class: "mx-name-datePicker1 mx-datepicker",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $DatePicker,
                                        {
                                          key: "p32.MyFirstModule.Customers_EditView.datePicker1",
                                          $widgetId: "p32.MyFirstModule.Customers_EditView.datePicker1",
                                          mode: "date",
                                          showCalendarButton: true,
                                          inputValue: AttributeProperty({
                                            "scope": "p32.MyFirstModule.Customers_EditView.dataView6",
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
                                            "widgetId": "p32.MyFirstModule.Customers_EditView.datePicker1"
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
                                      "widgetId": "p32.MyFirstModule.Customers_EditView.datePicker1"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p32.MyFirstModule.Customers_EditView.datePicker1"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p32.MyFirstModule.Customers_EditView.radioButtons1$formGroup",
                                    $widgetId: "p32.MyFirstModule.Customers_EditView.radioButtons1$formGroup",
                                    class: "mx-name-radioButtons1 mx-radiobuttons inline",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $RadioButtonGroup,
                                        {
                                          key: "p32.MyFirstModule.Customers_EditView.radioButtons1",
                                          $widgetId: "p32.MyFirstModule.Customers_EditView.radioButtons1",
                                          value: AttributeProperty({
                                            "scope": "p32.MyFirstModule.Customers_EditView.dataView6",
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
                                            "widgetId": "p32.MyFirstModule.Customers_EditView.radioButtons1"
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
                                      "widgetId": "p32.MyFirstModule.Customers_EditView.radioButtons1"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p32.MyFirstModule.Customers_EditView.radioButtons1"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p32.MyFirstModule.Customers_EditView.radioButtons2$formGroup",
                                    $widgetId: "p32.MyFirstModule.Customers_EditView.radioButtons2$formGroup",
                                    class: "mx-name-radioButtons2 mx-radiobuttons inline",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $RadioButtonGroup,
                                        {
                                          key: "p32.MyFirstModule.Customers_EditView.radioButtons2",
                                          $widgetId: "p32.MyFirstModule.Customers_EditView.radioButtons2",
                                          value: AttributeProperty({
                                            "scope": "p32.MyFirstModule.Customers_EditView.dataView6",
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
                                            "widgetId": "p32.MyFirstModule.Customers_EditView.radioButtons2"
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
                                      "widgetId": "p32.MyFirstModule.Customers_EditView.radioButtons2"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p32.MyFirstModule.Customers_EditView.radioButtons2"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p32.MyFirstModule.Customers_EditView.textBox3$formGroup$visibility",
                                    $widgetId: "p32.MyFirstModule.Customers_EditView.textBox3$formGroup$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Gender" }, { "type": "literal", "value": "Male" }] }, "args": { "currentObject": { "widget": "p32.MyFirstModule.Customers_EditView.dataView6", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p32.MyFirstModule.Customers_EditView.textBox3$formGroup",
                                          $widgetId: "p32.MyFirstModule.Customers_EditView.textBox3$formGroup",
                                          class: "mx-name-textBox3 mx-textbox",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $TextBox,
                                              {
                                                key: "p32.MyFirstModule.Customers_EditView.textBox3",
                                                $widgetId: "p32.MyFirstModule.Customers_EditView.textBox3",
                                                inputValue: AttributeProperty({
                                                  "scope": "p32.MyFirstModule.Customers_EditView.dataView6",
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
                                                  "widgetId": "p32.MyFirstModule.Customers_EditView.textBox3"
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
                                            "widgetId": "p32.MyFirstModule.Customers_EditView.textBox3"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p32.MyFirstModule.Customers_EditView.textBox3"
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p32.MyFirstModule.Customers_EditView.textBox4$formGroup$visibility",
                                    $widgetId: "p32.MyFirstModule.Customers_EditView.textBox4$formGroup$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Gender" }, { "type": "literal", "value": "Male" }] }, "args": { "currentObject": { "widget": "p32.MyFirstModule.Customers_EditView.dataView6", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p32.MyFirstModule.Customers_EditView.textBox4$formGroup",
                                          $widgetId: "p32.MyFirstModule.Customers_EditView.textBox4$formGroup",
                                          class: "mx-name-textBox4 mx-textbox",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $TextBox,
                                              {
                                                key: "p32.MyFirstModule.Customers_EditView.textBox4",
                                                $widgetId: "p32.MyFirstModule.Customers_EditView.textBox4",
                                                inputValue: AttributeProperty({
                                                  "scope": "p32.MyFirstModule.Customers_EditView.dataView6",
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
                                                  "widgetId": "p32.MyFirstModule.Customers_EditView.textBox4"
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
                                            "widgetId": "p32.MyFirstModule.Customers_EditView.textBox4"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p32.MyFirstModule.Customers_EditView.textBox4"
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p32.MyFirstModule.Customers_EditView.textBox5$formGroup",
                                    $widgetId: "p32.MyFirstModule.Customers_EditView.textBox5$formGroup",
                                    class: "mx-name-textBox5 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p32.MyFirstModule.Customers_EditView.textBox5",
                                          $widgetId: "p32.MyFirstModule.Customers_EditView.textBox5",
                                          inputValue: AttributeProperty({
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
                                            "widgetId": "p32.MyFirstModule.Customers_EditView.textBox5"
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
                                      "widgetId": "p32.MyFirstModule.Customers_EditView.textBox5"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p32.MyFirstModule.Customers_EditView.textBox5"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p32.MyFirstModule.Customers_EditView.textBox6$formGroup",
                                    $widgetId: "p32.MyFirstModule.Customers_EditView.textBox6$formGroup",
                                    class: "mx-name-textBox6 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p32.MyFirstModule.Customers_EditView.textBox6",
                                          $widgetId: "p32.MyFirstModule.Customers_EditView.textBox6",
                                          inputValue: AttributeProperty({
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
                                            "widgetId": "p32.MyFirstModule.Customers_EditView.textBox6"
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
                                      "widgetId": "p32.MyFirstModule.Customers_EditView.textBox6"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p32.MyFirstModule.Customers_EditView.textBox6"
                                    })
                                  }
                                )
                              ],
                              hideFooter: false,
                              footer: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p32.MyFirstModule.Customers_EditView.actionButton1",
                                    $widgetId: "p32.MyFirstModule.Customers_EditView.actionButton1",
                                    buttonId: "p32.MyFirstModule.Customers_EditView.actionButton1",
                                    class: "mx-name-actionButton1 spacing-outer-bottom",
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
                                      "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p32.MyFirstModule.Customers_EditView.dataView6", "source": "object" } }, "config": { "operationId": "RZQ/3JFmBFCSzM8LlrdRvA", "closePage": true }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p32.MyFirstModule.Customers_EditView.actionButton2",
                                    $widgetId: "p32.MyFirstModule.Customers_EditView.actionButton2",
                                    buttonId: "p32.MyFirstModule.Customers_EditView.actionButton2",
                                    class: "mx-name-actionButton2 spacing-outer-bottom",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-default",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Back" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        ],
                        ariaHidden: false
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
  "Customers Edit view"
]);
const classes = "layout-atlas layout-atlas-phone background-secondary";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Phone_BottomBar.Main": region$Main
};

export { classes, content, style, title };
