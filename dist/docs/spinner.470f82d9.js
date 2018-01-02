webpackJsonp([4],{824:function(e,t,n){function s(e){n(925)}var r=n(1)(n(927),n(928),s,"data-v-631d0197",null);e.exports=r.exports},925:function(e,t,n){var s=n(926);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals),n(795)("64dcb51e",s,!0)},926:function(e,t,n){t=e.exports=n(794)(),t.push([e.i,".spinner-demo[data-v-631d0197]{min-height:55px}.complete-example[data-v-631d0197]{width:56px;height:56px;position:relative}.complete-example .md-fab[data-v-631d0197]{margin:0}.complete-example .md-spinner[data-v-631d0197]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}",""])},927:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{progress:0,progressInterval:null,done:!1,transition:!0}},methods:{startProgress:function(){var e=this;this.progressInterval=window.setInterval((function(){e.progress+=3,e.progress>115&&(e.done=!0,window.clearInterval(e.progressInterval),window.setTimeout((function(){e.done=!1}),3e3))}),100)},restartProgress:function(){var e=this;this.progress=0,this.transition=!1,this.done=!1,window.clearInterval(this.progressInterval),window.setTimeout((function(){e.transition=!0,e.startProgress()}),600)}},mounted:function(){this.startProgress()}},e.exports=t.default},928:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page-content",{attrs:{"page-title":"Components - Spinner"}},[n("docs-component",[n("div",{slot:"description"},[n("p",[e._v("Progress and activity indicators are visual indications of an app loading content.")]),e._v(" "),n("p",[e._v("The following classes can be applied to change the color palette:")]),e._v(" "),n("ul",{staticClass:"md-body-2"},[n("li",[n("code",[e._v("md-accent")])]),e._v(" "),n("li",[n("code",[e._v("md-warn")])])])]),e._v(" "),n("div",{slot:"api"},[n("api-table",{attrs:{name:"md-spinner"}},[n("md-table",{slot:"properties"},[n("md-table-header",[n("md-table-row",[n("md-table-head",[e._v("Name")]),e._v(" "),n("md-table-head",[e._v("Type")]),e._v(" "),n("md-table-head",[e._v("Description")])],1)],1),e._v(" "),n("md-table-body",[n("md-table-row",[n("md-table-cell",[e._v("md-size")]),e._v(" "),n("md-table-cell",[n("code",[e._v("Number")])]),e._v(" "),n("md-table-cell",[e._v("The spinner size. "),n("br"),e._v("Default: "),n("code",[e._v("50")])])],1),e._v(" "),n("md-table-row",[n("md-table-cell",[e._v("md-stroke")]),e._v(" "),n("md-table-cell",[n("code",[e._v("Number")])]),e._v(" "),n("md-table-cell",[e._v("The line width. "),n("br"),e._v("Default: "),n("code",[e._v("3.5")])])],1),e._v(" "),n("md-table-row",[n("md-table-cell",[e._v("md-indeterminate")]),e._v(" "),n("md-table-cell",[n("code",[e._v("Boolean")])]),e._v(" "),n("md-table-cell",[e._v("Enable the indeterminate state. "),n("br"),e._v("Default: "),n("code",[e._v("false")])])],1),e._v(" "),n("md-table-row",[n("md-table-cell",[e._v("md-progress")]),e._v(" "),n("md-table-cell",[n("code",[e._v("Number")])]),e._v(" "),n("md-table-cell",[e._v("Define the current progress of the spinner. "),n("br"),e._v("Default: "),n("code",[e._v("0")])])],1)],1)],1)],1)],1),e._v(" "),n("div",{slot:"example"},[n("example-box",{attrs:{"card-title":"Determinate"}},[n("div",{staticClass:"spinner-demo",slot:"demo"},[n("md-button",{staticClass:"md-primary md-raised",on:{click:e.restartProgress}},[e._v("Restart")]),e._v(" "),e.transition?n("md-spinner",{attrs:{"md-progress":e.progress}}):e._e(),e._v(" "),e.transition?n("md-spinner",{staticClass:"md-accent",attrs:{"md-progress":e.progress}}):e._e(),e._v(" "),e.transition?n("md-spinner",{staticClass:"md-warn",attrs:{"md-progress":e.progress}}):e._e()],1),e._v(" "),n("div",{slot:"code"},[n("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-spinner :md-progress="progress"></md-spinner>\n            <md-spinner :md-progress="progress" class="md-accent"></md-spinner>\n            <md-spinner :md-progress="progress" class="md-warn"></md-spinner>\n          ')])],1)]),e._v(" "),n("example-box",{attrs:{"card-title":"Indeterminate"}},[n("div",{staticClass:"spinner-demo",slot:"demo"},[n("md-spinner",{attrs:{"md-indeterminate":""}}),e._v(" "),n("md-spinner",{staticClass:"md-accent",attrs:{"md-indeterminate":""}}),e._v(" "),n("md-spinner",{staticClass:"md-warn",attrs:{"md-indeterminate":""}})],1),e._v(" "),n("div",{slot:"code"},[n("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-spinner md-indeterminate></md-spinner>\n            <md-spinner md-indeterminate class="md-accent"></md-spinner>\n            <md-spinner md-indeterminate class="md-warn"></md-spinner>\n          ')])],1)]),e._v(" "),n("example-box",{attrs:{"card-title":"Sizes"}},[n("div",{staticClass:"spinner-demo",slot:"demo"},[n("md-spinner",{staticClass:"md-accent",attrs:{"md-size":20,"md-indeterminate":""}}),e._v(" "),n("md-spinner",{staticClass:"md-warn",attrs:{"md-size":60,"md-indeterminate":""}}),e._v(" "),n("md-spinner",{attrs:{"md-size":150,"md-indeterminate":""}}),e._v(" "),n("md-spinner",{staticClass:"md-accent",attrs:{"md-size":20,"md-stroke":2.5,"md-indeterminate":""}}),e._v(" "),n("md-spinner",{staticClass:"md-warn",attrs:{"md-size":60,"md-stroke":1.5,"md-indeterminate":""}}),e._v(" "),n("md-spinner",{attrs:{"md-size":150,"md-stroke":1,"md-indeterminate":""}})],1),e._v(" "),n("div",{slot:"code"},[n("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-spinner :md-size="20" md-indeterminate class="md-accent"></md-spinner>\n            <md-spinner :md-size="60" md-indeterminate class="md-warn"></md-spinner>\n            <md-spinner :md-size="150" md-indeterminate></md-spinner>\n\n            <md-spinner :md-size="20" :md-stroke="2" md-indeterminate class="md-accent"></md-spinner>\n            <md-spinner :md-size="60" :md-stroke="1.5" md-indeterminate class="md-warn"></md-spinner>\n            <md-spinner :md-size="150" :md-stroke="1" md-indeterminate></md-spinner>\n          ')])],1)]),e._v(" "),n("example-box",{attrs:{"card-title":"Complete Example"}},[n("div",{slot:"demo"},[n("md-theme",{staticClass:"complete-example",attrs:{"md-name":"orange"}},[n("md-button",{staticClass:"md-fab",class:{"md-primary":e.done},on:{click:e.restartProgress}},[e.done?e._e():n("md-icon",[e._v("cloud_upload")]),e._v(" "),e.done?n("md-icon",[e._v("done")]):e._e()],1),e._v(" "),e.transition&&e.progress<115?n("md-spinner",{attrs:{"md-size":74,"md-stroke":2.2,"md-progress":e.progress}}):e._e()],1)],1),e._v(" "),n("div",{slot:"code"},[n("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-theme class="complete-example" md-name="orange">\n              <md-button class="md-fab" @click="restartProgress" :class="{ \'md-primary\': done }">\n                <md-icon v-if="!done">cloud_upload</md-icon>\n                <md-icon v-if="done">done</md-icon>\n              </md-button>\n\n              <md-spinner :md-size="74" :md-stroke="2.2" :md-progress="progress" v-if="transition && progress < 115"></md-spinner>\n            </md-theme>\n          ')]),e._v(" "),n("code-block",{attrs:{lang:"sass"}},[e._v("\n            .complete-example {\n              width: 56px;\n              height: 56px;\n              position: relative;\n\n              .md-fab {\n                margin: 0;\n              }\n\n              .md-spinner {\n                position: absolute;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n              }\n            }\n          ")]),e._v(" "),n("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data: () => ({\n                progress: 0,\n                progressInterval: null,\n                done: false,\n                transition: true\n              }),\n              methods: {\n                startProgress() {\n                  this.progressInterval = window.setInterval(() => {\n                    this.progress += 3;\n\n                    if (this.progress > 115) {\n                      this.done = true;\n                      window.clearInterval(this.progressInterval);\n                      window.setTimeout(() => {\n                        this.done = false;\n                      }, 3000);\n                    }\n                  }, 100);\n                },\n                restartProgress() {\n                  this.progress = 0;\n                  this.transition = false;\n                  this.done = false;\n\n                  window.clearInterval(this.progressInterval);\n                  window.setTimeout(() => {\n                    this.transition = true;\n                    this.startProgress();\n                  }, 600);\n                }\n              }\n            };\n          ")])],1)])],1)])],1)},staticRenderFns:[]}}});