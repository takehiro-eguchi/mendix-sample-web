import { reactExports, asPluginWidgets, selectTranslation } from '../index-DJGwzDdd.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-BpA9Sx2X.js';
import { ActionButton, ActionProperty } from '../ActionButton-B90FcSI6.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-CvISHixh.js';
import { FormGroup, TextBox, DerivedUniqueIdProperty, ValidationProperty } from '../TextBox-CDLV78js.js';
import { TextProperty } from '../Icon-Dv5nfF6s.js';
import { DataView } from '../DataView-BpUahdMP.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-XJJ2t8-l.js';
import { AttributeProperty } from '../Bgp-XL0v-ChI9Snow.js';
import '../BQa9VDC5-bIsskIdw.js';
import '../BrzhM9fk-D6dvPqAy.js';
import '../CD0QimeZ-CgVe4JEF.js';

const React = { createElement: reactExports.createElement };
const { $DataView, $FormGroup, $TextBox, $ActionButton } = asPluginWidgets({ DataView, FormGroup, TextBox, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p0.Administration.ChangePasswordForm.dataView2",
      $widgetId: "p0.Administration.ChangePasswordForm.dataView2",
      class: "mx-name-dataView2 form-horizontal",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p0.6",
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
            key: "p0.Administration.ChangePasswordForm.textBox3$formGroup",
            $widgetId: "p0.Administration.ChangePasswordForm.textBox3$formGroup",
            class: "mx-name-textBox3 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
                  key: "p0.Administration.ChangePasswordForm.textBox3",
                  $widgetId: "p0.Administration.ChangePasswordForm.textBox3",
                  inputValue: AttributeProperty({
                    "scope": "p0.Administration.ChangePasswordForm.dataView2",
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
                    "widgetId": "p0.Administration.ChangePasswordForm.textBox3"
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
              "widgetId": "p0.Administration.ChangePasswordForm.textBox3"
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
              "inputWidgetId": "p0.Administration.ChangePasswordForm.textBox3"
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $FormGroup,
          {
            key: "p0.Administration.ChangePasswordForm.textBox1$formGroup",
            $widgetId: "p0.Administration.ChangePasswordForm.textBox1$formGroup",
            class: "mx-name-textBox1 mx-textbox",
            style: void 0,
            control: [
              /* @__PURE__ */ React.createElement(
                $TextBox,
                {
                  key: "p0.Administration.ChangePasswordForm.textBox1",
                  $widgetId: "p0.Administration.ChangePasswordForm.textBox1",
                  inputValue: AttributeProperty({
                    "scope": "p0.Administration.ChangePasswordForm.dataView2",
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
                    "widgetId": "p0.Administration.ChangePasswordForm.textBox1"
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
              "widgetId": "p0.Administration.ChangePasswordForm.textBox1"
            }),
            width: 3,
            orientation: "horizontal",
            hasError: ValidationProperty({
              "inputWidgetId": "p0.Administration.ChangePasswordForm.textBox1"
            })
          }
        )
      ],
      hideFooter: false,
      footer: [
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
            key: "p0.Administration.ChangePasswordForm.microflowButton1",
            $widgetId: "p0.Administration.ChangePasswordForm.microflowButton1",
            buttonId: "p0.Administration.ChangePasswordForm.microflowButton1",
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
              "action": { "type": "callMicroflow", "argMap": { "AccountPasswordData": { "widget": "$AccountPasswordData", "source": "object" } }, "config": { "operationId": "r1HjGj+CS1WcAvQQ+IopOg", "validate": "view" }, "disabledDuringExecution": false },
              "abortOnServerValidation": true
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
            key: "p0.Administration.ChangePasswordForm.cancelButton1",
            $widgetId: "p0.Administration.ChangePasswordForm.cancelButton1",
            buttonId: "p0.Administration.ChangePasswordForm.cancelButton1",
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
              "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "Z+YeNpV/YVOn+9mDURaALg", "closePage": true }, "disabledDuringExecution": true },
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
const cancelChangesOperationId = "3sWWl7CrkFCoLe+hI9Hp9A";
const closeButton = "p0.Administration.ChangePasswordForm.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
