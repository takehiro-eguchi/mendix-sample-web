import { reactExports, asPluginWidgets, selectTranslation } from '../index-BK9-l-60.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-CNkE77Y0.js';
import { ActionProperty } from '../ActionProperty-DS8NDQ2q.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-CpSsGt-6.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-D6Rvgx61.js';
import { TextProperty } from '../Icon-bVASr8MS.js';
import { ActionButton } from '../ActionButton-DQrAMvYT.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BbYYw0ly.js';
import { DataView } from '../DataView-VUb0u99s.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-CQS7asQD.js';
import { AttributeProperty } from '../Bgp-XL0v-C7x6tFfM.js';
import '../BQa9VDC5-P_lNGrzq.js';
import '../BrzhM9fk-CY1CP8BK.js';
import '../CD0QimeZ-Do4rcJoP.js';

const React = { createElement: reactExports.createElement };
const { $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p6.Administration.ChangeMyPasswordForm.dataView2",
      $widgetId: "p6.Administration.ChangeMyPasswordForm.dataView2",
      class: "mx-name-dataView2 form-horizontal",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p6.6",
        "scope": "$AccountPasswordData",
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
            key: "p6.Administration.ChangeMyPasswordForm.textBox2$formGroup",
            $widgetId: "p6.Administration.ChangeMyPasswordForm.textBox2$formGroup",
            class: "mx-name-textBox2 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
                  key: "p6.Administration.ChangeMyPasswordForm.textBox2",
                  $widgetId: "p6.Administration.ChangeMyPasswordForm.textBox2",
                  inputValue: AttributeProperty({
                    "scope": "p6.Administration.ChangeMyPasswordForm.dataView2",
                    "path": "",
                    "entity": "Administration.AccountPasswordData",
                    "attribute": "OldPassword",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                    "isList": false,
                    "validation": { "message": selectTranslation(["The password cannot be empty."]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
                    "formatting": {}
                  }),
                  isPassword: true,
                  placeholder: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  mask: "",
                  readOnlyStyle: "text",
                  maxLength: 200,
                  onEnter: void 0,
                  onLeave: void 0,
                  onEnterKeyPress: void 0,
                  ariaLabel: void 0,
                  autocomplete: "on",
                  submitWhileEditing: false,
                  submitDelay: 300,
                  ariaRequired: true,
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
                    "widgetId": "p6.Administration.ChangeMyPasswordForm.textBox2"
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Old password" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
              "widgetId": "p6.Administration.ChangeMyPasswordForm.textBox2"
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
              "inputWidgetId": "p6.Administration.ChangeMyPasswordForm.textBox2"
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
            key: "p6.Administration.ChangeMyPasswordForm.textBox3$formGroup",
            $widgetId: "p6.Administration.ChangeMyPasswordForm.textBox3$formGroup",
            class: "mx-name-textBox3 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
                  key: "p6.Administration.ChangeMyPasswordForm.textBox3",
                  $widgetId: "p6.Administration.ChangeMyPasswordForm.textBox3",
                  inputValue: AttributeProperty({
                    "scope": "p6.Administration.ChangeMyPasswordForm.dataView2",
                    "path": "",
                    "entity": "Administration.AccountPasswordData",
                    "attribute": "NewPassword",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                    "isList": false,
                    "validation": { "message": selectTranslation(["The password cannot be empty."]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
                    "formatting": {}
                  }),
                  isPassword: true,
                  placeholder: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  mask: "",
                  readOnlyStyle: "text",
                  maxLength: 200,
                  onEnter: void 0,
                  onLeave: void 0,
                  onEnterKeyPress: void 0,
                  ariaLabel: void 0,
                  autocomplete: "on",
                  submitWhileEditing: false,
                  submitDelay: 300,
                  ariaRequired: true,
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
                    "widgetId": "p6.Administration.ChangeMyPasswordForm.textBox3"
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "New password" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
              "widgetId": "p6.Administration.ChangeMyPasswordForm.textBox3"
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
              "inputWidgetId": "p6.Administration.ChangeMyPasswordForm.textBox3"
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
            key: "p6.Administration.ChangeMyPasswordForm.textBox1$formGroup",
            $widgetId: "p6.Administration.ChangeMyPasswordForm.textBox1$formGroup",
            class: "mx-name-textBox1 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
                  key: "p6.Administration.ChangeMyPasswordForm.textBox1",
                  $widgetId: "p6.Administration.ChangeMyPasswordForm.textBox1",
                  inputValue: AttributeProperty({
                    "scope": "p6.Administration.ChangeMyPasswordForm.dataView2",
                    "path": "",
                    "entity": "Administration.AccountPasswordData",
                    "attribute": "ConfirmPassword",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                    "isList": false,
                    "validation": { "message": selectTranslation(["The password cannot be empty."]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
                    "formatting": {}
                  }),
                  isPassword: true,
                  placeholder: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                    })
                  ]),
                  mask: "",
                  readOnlyStyle: "text",
                  maxLength: 200,
                  onEnter: void 0,
                  onLeave: void 0,
                  onEnterKeyPress: void 0,
                  ariaLabel: void 0,
                  autocomplete: "on",
                  submitWhileEditing: false,
                  submitDelay: 300,
                  ariaRequired: true,
                  tabIndex: void 0,
                  id: DerivedUniqueIdProperty({
                    "widgetId": "p6.Administration.ChangeMyPasswordForm.textBox1"
                  })
                }
              )
            ],
            caption: selectTranslation([
              ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Confirm password" }, "args": {} }
              })
            ]),
            labelFor: DerivedUniqueIdProperty({
              "widgetId": "p6.Administration.ChangeMyPasswordForm.textBox1"
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
              "inputWidgetId": "p6.Administration.ChangeMyPasswordForm.textBox1"
            })
          }
        )
      ],
      hideFooter: false,
      footer: [
        /* @__PURE__ */ React.createElement(
          $ConditionalVisibilityWrapper,
          {
            key: "p6.Administration.ChangeMyPasswordForm.microflowButton1$visibility",
            $widgetId: "p6.Administration.ChangeMyPasswordForm.microflowButton1$visibility",
            visible: ExpressionProperty({
              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
            }),
            contents: [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p6.Administration.ChangeMyPasswordForm.microflowButton1",
                  $widgetId: "p6.Administration.ChangeMyPasswordForm.microflowButton1",
                  buttonId: "p6.Administration.ChangeMyPasswordForm.microflowButton1",
                  class: "mx-name-microflowButton1",
                  style: void 0,
                  tabIndex: void 0,
                  renderType: "button",
                  role: void 0,
                  buttonClass: "btn-success",
                  caption: selectTranslation([
                    ExpressionProperty({
                      "expression": { "expr": { "type": "literal", "value": "Change" }, "args": {} }
                    })
                  ]),
                  tooltip: TextProperty({
                    "value": selectTranslation([
                      ""
                    ])
                  }),
                  icon: void 0,
                  action: ActionProperty({
                    "action": { "type": "callMicroflow", "argMap": { "AccountPasswordData": { "widget": "$AccountPasswordData", "source": "object" } }, "config": { "operationId": "ME7aG0JmVliLwt9ap8veQw", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                    "abortOnServerValidation": true
                  })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
            key: "p6.Administration.ChangeMyPasswordForm.cancelButton1",
            $widgetId: "p6.Administration.ChangeMyPasswordForm.cancelButton1",
            buttonId: "p6.Administration.ChangeMyPasswordForm.cancelButton1",
            class: "mx-name-cancelButton1",
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
              "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "N4WpSewocVC45KgRFrHWMw", "closePage": true }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Change Password"
]);
const classes = "";
const cancelChangesOperationId = "gvrOxjFEBVib0VY1naLkyg";
const closeButton = "p6.Administration.ChangeMyPasswordForm.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
