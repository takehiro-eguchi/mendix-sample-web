import { reactExports, asPluginWidgets, selectTranslation } from '../index-lDZbtAHK.js';
import { PageFragment, ExpressionProperty } from '../ScrollContainer-CiGAZyLQ.js';
import { ActionButton, TextProperty, ActionProperty } from '../ActionButton-Dr8i0yjm.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-Ddy2lrnD.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-PMDPRPuR.js';
import { ImageWidgetModule, Container } from '../Image-BImigOxk.js';
import { DataView } from '../DataView-DXQkwbZR.js';
import { Div } from '../Div-DFdMVjtU.js';
import { Text } from '../Text-DNQkDjEw.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-BGWZaNs3.js';
import '../CD0QimeZ-R_z0Vu6l.js';
import '../InlineText-CysQN2Fr.js';

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const { $Div, $DataView, $Container, $Image, $Text, $ActionButton } = asPluginWidgets({ Div, DataView, Container, Image, Text, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p27.FeedbackModule.PopupSuccess.layoutGrid1",
      $widgetId: "p27.FeedbackModule.PopupSuccess.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p27.FeedbackModule.PopupSuccess.layoutGrid1$row0",
            $widgetId: "p27.FeedbackModule.PopupSuccess.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p27.FeedbackModule.PopupSuccess.layoutGrid1$row0$column0",
                  $widgetId: "p27.FeedbackModule.PopupSuccess.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p27.FeedbackModule.PopupSuccess.dataView1",
                        $widgetId: "p27.FeedbackModule.PopupSuccess.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p27.10",
                          "scope": "$Response",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p27.FeedbackModule.PopupSuccess.container1",
                              $widgetId: "p27.FeedbackModule.PopupSuccess.container1",
                              class: "mx-name-container1",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Image,
                                  {
                                    key: "p27.FeedbackModule.PopupSuccess.image1",
                                    $widgetId: "p27.FeedbackModule.PopupSuccess.image1",
                                    datasource: "image",
                                    imageObject: WebStaticImageProperty({
                                      "image": { "uri": "img/FeedbackModule$Images$Success.png" }
                                    }),
                                    defaultImageDynamic: void 0,
                                    imageUrl: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    imageIcon: void 0,
                                    isBackgroundImage: false,
                                    children: void 0,
                                    onClickType: "action",
                                    onClick: void 0,
                                    alternativeText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    widthUnit: "auto",
                                    width: 100,
                                    heightUnit: "pixels",
                                    height: 240,
                                    iconSize: 14,
                                    displayAs: "fullImage",
                                    responsive: true,
                                    class: "mx-name-image1 img-center",
                                    style: void 0,
                                    tabIndex: void 0
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p27.FeedbackModule.PopupSuccess.text1",
                                    $widgetId: "p27.FeedbackModule.PopupSuccess.text1",
                                    class: "mx-name-text1 text-center d-block spacing-outer-top-large spacing-outer-bottom-medium",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Thanks for sharing your feedback with us!" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "h3"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p27.FeedbackModule.PopupSuccess.actionButton2",
                                    $widgetId: "p27.FeedbackModule.PopupSuccess.actionButton2",
                                    buttonId: "p27.FeedbackModule.PopupSuccess.actionButton2",
                                    class: "mx-name-actionButton2 d-block center-block",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-primary",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "View your feedback" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "openLink", "argMap": { "$object": { "widget": "$Response", "source": "object" } }, "config": { "schema": "web", "addressAttribute": "FeedbackModule.ResponseHelper/URL" }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          )
                        ],
                        hideFooter: true,
                        footer: void 0
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
  "Feedback Submitted"
]);
const classes = "";
const cancelChangesOperationId = "8kbECsQrNFe7ilRitRB9eg";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
