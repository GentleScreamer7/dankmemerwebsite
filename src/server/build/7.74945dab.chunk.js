(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/app/assets/styles/pages/rules/reports.scss":
/*!********************************************************!*\
  !*** ./src/app/assets/styles/pages/rules/reports.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/app/assets/styles/pages/rules/reports.scss?");

/***/ }),

/***/ "./src/app/pages/rules/data/rules.js":
/*!*******************************************!*\
  !*** ./src/app/pages/rules/data/rules.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst userRules=[\"Userbot, Autotyper, Macro\",\"Spamming\",\"Sharing exploits\",\"Abusing exploits\",\"Racism or other form of targeted hate\",\"Causing drama/Witch hunting\",\"Using the bot for advertising\",\"Real Money Trading\",\"Discord TOS\",\"Other\"];const serverRules=[\"Server has userbots\",\"Rule breaking Giveaway Requirements or Bot Usage Requirements\",\"Server is trading invites/nitro for currency\",\"Server is knowingly breaking bot rules\",\"Server has alts\",\"Server is witch-hunting or causing drama around Dank Memer\",\"Other\"];/* harmony default export */ __webpack_exports__[\"default\"] = ({'server':serverRules,'user':userRules});\n\n//# sourceURL=webpack:///./src/app/pages/rules/data/rules.js?");

/***/ }),

/***/ "./src/app/pages/rules/reports.jsx":
/*!*****************************************!*\
  !*** ./src/app/pages/rules/reports.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_rules_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/rules.js */ \"./src/app/pages/rules/data/rules.js\");\n/* harmony import */ var assets_styles_pages_rules_reports_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/styles/pages/rules/reports.scss */ \"./src/app/assets/styles/pages/rules/reports.scss\");\n/* harmony import */ var assets_styles_pages_rules_reports_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_styles_pages_rules_reports_scss__WEBPACK_IMPORTED_MODULE_5__);\nfunction Reports(props){const[reportType,setReportType]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('user');const[reporting,setReporting]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');const[brokenRules,setBrokenRules]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);const[reportContent,setReportContent]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');const[reportState,setReportState]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{window.scroll(0,0);},[]);Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{if(reportState===0)return;switch(reportState){case 200:react_toastify__WEBPACK_IMPORTED_MODULE_2__[\"toast\"].update('reportState',{render:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\",{viewBox:\"0 0 16 16\",fill:\"currentColor\",style:{display:\"inline-block\",verticalAlign:\"middle\",width:\"20px\",height:\"20px\",boxSizing:\"border-box\",margin:\"10px\",color:\"rgb(50, 211, 139)\"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\",{fillRule:\"evenodd\",d:\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z\"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{style:{display:\"inline-block\",verticalAlign:\"middle\"}},\"Your report has been submitted.\"))});break;case 403:react_toastify__WEBPACK_IMPORTED_MODULE_2__[\"toast\"].update('reportState',{render:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\",{viewBox:\"0 0 16 16\",fill:\"currentColor\",style:{display:\"inline-block\",verticalAlign:\"middle\",width:\"20px\",height:\"20px\",boxSizing:\"border-box\",margin:\"10px\",color:\"rgb(233, 76, 88)\"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\",{fillRule:\"evenodd\",d:\"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z\"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{style:{display:\"inline-block\",verticalAlign:\"middle\"}},\"You have been banned from reporting users.\"))});break;case 429:react_toastify__WEBPACK_IMPORTED_MODULE_2__[\"toast\"].update('reportState',{render:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\",{viewBox:\"0 0 16 16\",fill:\"currentColor\",style:{display:\"inline-block\",verticalAlign:\"middle\",width:\"20px\",height:\"20px\",boxSizing:\"border-box\",margin:\"10px\",color:\"rgb(245, 170, 10)\"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\",{fillRule:\"evenodd\",d:\"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",null,\"Woah there! Way too spicy\"))});break;default:react_toastify__WEBPACK_IMPORTED_MODULE_2__[\"toast\"].update('reportState',{render:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\",{viewBox:\"0 0 16 16\",fill:\"currentColor\",style:{display:\"inline-block\",verticalAlign:\"middle\",width:\"20px\",height:\"20px\",boxSizing:\"border-box\",margin:\"10px\",color:\"rgb(245, 170, 10)\"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\",{fillRule:\"evenodd\",d:\"M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 5zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z\"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{style:{display:\"inline-block\",verticalAlign:\"middle\"}},\"An unknown error has occurred.\"))});break;}setReportState(0);},[reportState]);const sendReport=async()=>{if(!props.loggedIn){return react_toastify__WEBPACK_IMPORTED_MODULE_2__[\"toast\"].dark(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\",{viewBox:\"0 0 16 16\",fill:\"currentColor\",style:{display:\"inline-block\",verticalAlign:\"middle\",width:\"20px\",height:\"20px\",boxSizing:\"border-box\",margin:\"10px\",color:\"rgb(233, 76, 88)\"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\",{fillRule:\"evenodd\",d:\"M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z\"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{style:{display:\"inline-block\",verticalAlign:\"middle\"}},\"You need to be logged in!\")),{position:\"top-right\",autoClose:10000,hideProgressBar:true,pauseOnHover:true,draggable:true,progress:undefined,toastId:'reportState'});}if(brokenRules.length<1)return;if(reportContent.length<20)return;let _brokenRules=[];_data_rules_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"][reportType].forEach((rule,i)=>{if(brokenRules.sort((a,b)=>a-b).includes(i))_brokenRules.push(rule);});react_toastify__WEBPACK_IMPORTED_MODULE_2__[\"toast\"].dark(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\",{viewBox:\"5 5 40 40\",fill:\"currentColor\",style:{display:\"inline-block\",verticalAlign:\"middle\",width:\"20px\",height:\"20px\",boxSizing:\"border-box\",margin:\"10px\",color:\"rgb(65, 146, 255)\"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\",{d:\"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"animateTransform\",{attributeType:\"xml\",attributeName:\"transform\",type:\"rotate\",from:\"0 25 25\",to:\"360 25 25\",dur:\"0.5s\",repeatCount:\"indefinite\"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{style:{display:\"inline-block\",verticalAlign:\"middle\"}},\"Submitting your report.\")),{position:\"top-right\",autoClose:10000,hideProgressBar:true,pauseOnHover:true,draggable:true,progress:undefined,toastId:'reportState'});const res=await fetch('/api/report',{credentials:'same-origin',method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({reportType,reporting,content:reportContent,rules:_brokenRules})});setReportState(res.status);};const updateBrokenRules=(index,state)=>{if(brokenRules.includes(index)&&!state)setBrokenRules(brokenRules.filter(i=>i!=index));else if(!brokenRules.includes(index)&&state)setBrokenRules(oldBrokenRulesState=>[...oldBrokenRulesState,index]);};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{id:\"reports\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{id:\"reports-header\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\",{id:\"reports-header-title\"},\"Report a \",reportType),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{className:\"reports-header-message\"},\"Please provide as much detail as possible when submitting your report.\",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\",null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{className:\"reports-header-message\"},\"We are unable to provide details on the punishment from this report.\")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{id:\"reports-body\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"reports-body-group\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\",{className:\"reports-body-group-title\"},\"What type of report is this?\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"reports-body-group-radio\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\",{className:\"fake-checkbox\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:reportType==='user'?\"reports-body-group-radio-button active\":\"reports-body-group-radio-button\"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\",{name:\"user-report\",type:\"radio\",checked:reportType==='user',onClick:()=>setReportType('user')})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\",null,\"User report\")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"reports-body-group-radio\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\",{className:\"fake-checkbox\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{className:reportType==='server'?\"reports-body-group-radio-button active\":\"reports-body-group-radio-button\"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\",{name:\"server-report\",type:\"radio\",checked:reportType==='server',onClick:()=>setReportType('server')})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\",null,\"Server report\")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"reports-body-group-text\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\",{name:\"reporting\",type:\"text\",onChange:e=>setReporting(e.target.value)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\",{htmlFor:\"reporting\"},\"ID of \",reportType,\" you are reporting.\"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"reports-body-group\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\",{className:\"reports-body-group-title\"},\"Which rules did they break?\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\",null,_data_rules_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"][reportType].map((rule,i)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\",{className:\"reports-body-group-checkbox\",key:i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\",{name:`rule-${i}`,type:\"checkbox\",onInput:e=>updateBrokenRules(i,e.target.checked)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\",{className:\"reports-body-group-checkbox-num\"},i+1)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\",{htmlFor:`rule-${i}`},rule))))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{className:\"reports-body-group\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\",{className:\"reports-body-group-title\"},\"Please write your report below.\"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\",{className:\"reports-body-group-textarea\",maxLength:1024,onChange:e=>setReportContent(e.target.value)})),reporting.length>16&&reporting.length<22&&brokenRules.length>=1&&reportContent.length>=20?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\",{id:\"reports-body-actions\"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\",{id:\"reports-body-actions-submit\",onClick:sendReport},\"Report \",reportType)):''),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_2__[\"ToastContainer\"],null));}/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(store=>store.login)(Reports));\n\n//# sourceURL=webpack:///./src/app/pages/rules/reports.jsx?");

/***/ })

}]);