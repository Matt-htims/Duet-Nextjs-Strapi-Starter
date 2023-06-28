"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/components/blocks/LeadForm/FormSubmit.jsx":
/*!*******************************************************!*\
  !*** ./app/components/blocks/LeadForm/FormSubmit.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormSubmit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_utils_api_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/utils/api-helpers */ \"(app-client)/./app/utils/api-helpers.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction FormSubmit(param) {\n    let { placeholder, text } = param;\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const token = \"8533bc9135c845fd8835a9d2a224fb884d36c51bb397554f155bb199e7a9ffda1edfbd9b06ccac56e34f2139d38e30fddeac02f8a8d045312fc272455b899bb7acda4690858a89117043b97cb7b469e9c1a8f6845220cd308b07b6d675983375f2746b5a7a5a4c4a6259bb25edc053140e40babf7cd580fa1f1b97fc8fc2be13\";\n    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n    async function handleSubmit() {\n        if (email === \"\") {\n            setErrorMessage(\"Email cannot be blank.\");\n            return;\n        }\n        if (!emailRegex.test(email)) {\n            setErrorMessage(\"Invalid email format.\");\n            return;\n        }\n        const res = await fetch((0,_app_utils_api_helpers__WEBPACK_IMPORTED_MODULE_2__.getStrapiURL)() + \"/api/lead-form-submissions\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\",\n                Authorization: \"Bearer \".concat(token)\n            },\n            body: JSON.stringify({\n                data: {\n                    email\n                }\n            })\n        });\n        if (!res.ok) {\n            setErrorMessage(\"Email failed to submit.\");\n            return;\n        }\n        setErrorMessage(\"\");\n        setSuccessMessage(\"Email successfully submitted!\");\n        setEmail(\"\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row\",\n                    children: successMessage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-green-700 bg-green-300 px-4 py-2 rounded-lg\",\n                        children: successMessage\n                    }, void 0, false, {\n                        fileName: \"/Users/mattbook/Documents/Work/DevDocs/Next-js/nextjs-starter/frontend/app/components/blocks/LeadForm/FormSubmit.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"email\",\n                                placeholder: errorMessage || placeholder,\n                                onChange: (e)=>setEmail(e.target.value),\n                                value: email,\n                                className: \"w-3/5 p-3 rounded-l-lg sm:w-2/3 text-gray-700\"\n                            }, void 0, false, {\n                                fileName: \"/Users/mattbook/Documents/Work/DevDocs/Next-js/nextjs-starter/frontend/app/components/blocks/LeadForm/FormSubmit.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 8\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900\",\n                                onClick: handleSubmit,\n                                children: text\n                            }, void 0, false, {\n                                fileName: \"/Users/mattbook/Documents/Work/DevDocs/Next-js/nextjs-starter/frontend/app/components/blocks/LeadForm/FormSubmit.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 8\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/mattbook/Documents/Work/DevDocs/Next-js/nextjs-starter/frontend/app/components/blocks/LeadForm/FormSubmit.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 5\n                }, this),\n                errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-500 bg-red-200 px-4 py-2 rounded-lg my-2\",\n                    children: errorMessage\n                }, void 0, false, {\n                    fileName: \"/Users/mattbook/Documents/Work/DevDocs/Next-js/nextjs-starter/frontend/app/components/blocks/LeadForm/FormSubmit.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 6\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/mattbook/Documents/Work/DevDocs/Next-js/nextjs-starter/frontend/app/components/blocks/LeadForm/FormSubmit.jsx\",\n            lineNumber: 44,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mattbook/Documents/Work/DevDocs/Next-js/nextjs-starter/frontend/app/components/blocks/LeadForm/FormSubmit.jsx\",\n        lineNumber: 43,\n        columnNumber: 3\n    }, this);\n}\n_s(FormSubmit, \"6qmvkaVbhkbplfErKC3LqO8ZiZo=\");\n_c = FormSubmit;\nvar _c;\n$RefreshReg$(_c, \"FormSubmit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2NvbXBvbmVudHMvYmxvY2tzL0xlYWRGb3JtL0Zvcm1TdWJtaXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUM7QUFDc0I7QUFFeEMsU0FBU0UsV0FBVyxLQUFxQjtRQUFyQixFQUFFQyxXQUFXLEVBQUVDLElBQUksRUFBRSxHQUFyQjs7SUFDbEMsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sZ0JBQWdCQyxrQkFBa0IsR0FBR1IsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUM7SUFDakQsTUFBTVcsUUFBUUMsa1FBQW9ERTtJQUVsRSxNQUFNQyxhQUFhO0lBRW5CLGVBQWVDO1FBQ2QsSUFBSVgsVUFBVSxJQUFJO1lBQ2pCSyxnQkFBZ0I7WUFDaEI7UUFDRDtRQUVBLElBQUksQ0FBQ0ssV0FBV0UsS0FBS1osUUFBUTtZQUM1QkssZ0JBQWdCO1lBQ2hCO1FBQ0Q7UUFFQSxNQUFNUSxNQUFNLE1BQU1DLE1BQU1sQixvRUFBWUEsS0FBSyw4QkFBOEI7WUFDdEVtQixRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1IsZ0JBQWdCO2dCQUNoQkMsZUFBZSxVQUFnQixPQUFOWDtZQUMxQjtZQUNBWSxNQUFNQyxLQUFLQyxVQUFVO2dCQUFFQyxNQUFNO29CQUFFckI7Z0JBQU07WUFBRTtRQUN4QztRQUVBLElBQUksQ0FBQ2EsSUFBSVMsSUFBSTtZQUNaakIsZ0JBQWdCO1lBQ2hCO1FBQ0Q7UUFDQUEsZ0JBQWdCO1FBQ2hCRixrQkFBa0I7UUFDbEJGLFNBQVM7SUFDVjtJQUVBLHFCQUNDLDhEQUFDc0I7UUFBSUMsV0FBVTtrQkFDZCw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2QsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNidEIsK0JBQ0EsOERBQUN1Qjt3QkFBRUQsV0FBVTtrQ0FDWHRCOzs7Ozs2Q0FHRjs7MENBQ0MsOERBQUN3QjtnQ0FDQUMsTUFBSztnQ0FDTDdCLGFBQWFNLGdCQUFnQk47Z0NBQzdCOEIsVUFBVSxDQUFDQyxJQUFNNUIsU0FBUzRCLEVBQUVDLE9BQU9DO2dDQUNuQ0EsT0FBTy9CO2dDQUNQd0IsV0FBVzs7Ozs7OzBDQUVaLDhEQUFDUTtnQ0FDQUwsTUFBSztnQ0FDTEgsV0FBVTtnQ0FDVlMsU0FBU3RCOzBDQUVSWjs7Ozs7Ozs7Ozs7OztnQkFNSkssOEJBQ0EsOERBQUNxQjtvQkFBRUQsV0FBVTs4QkFDWHBCOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1QO0dBekV3QlA7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvYmxvY2tzL0xlYWRGb3JtL0Zvcm1TdWJtaXQuanN4P2M0MWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRTdHJhcGlVUkwgfSBmcm9tICdAL2FwcC91dGlscy9hcGktaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1TdWJtaXQoeyBwbGFjZWhvbGRlciwgdGV4dCB9KSB7XG5cdGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbc3VjY2Vzc01lc3NhZ2UsIHNldFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgdG9rZW4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfRk9STV9TVUJNSVNTSU9OX1RPS0VOO1xuXG5cdGNvbnN0IGVtYWlsUmVnZXggPSAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLztcblxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG5cdFx0aWYgKGVtYWlsID09PSAnJykge1xuXHRcdFx0c2V0RXJyb3JNZXNzYWdlKCdFbWFpbCBjYW5ub3QgYmUgYmxhbmsuJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCFlbWFpbFJlZ2V4LnRlc3QoZW1haWwpKSB7XG5cdFx0XHRzZXRFcnJvck1lc3NhZ2UoJ0ludmFsaWQgZW1haWwgZm9ybWF0LicpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGdldFN0cmFwaVVSTCgpICsgJy9hcGkvbGVhZC1mb3JtLXN1Ym1pc3Npb25zJywge1xuXHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuXHRcdFx0fSxcblx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZGF0YTogeyBlbWFpbCB9IH0pLFxuXHRcdH0pO1xuXG5cdFx0aWYgKCFyZXMub2spIHtcblx0XHRcdHNldEVycm9yTWVzc2FnZSgnRW1haWwgZmFpbGVkIHRvIHN1Ym1pdC4nKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0c2V0RXJyb3JNZXNzYWdlKCcnKTtcblx0XHRzZXRTdWNjZXNzTWVzc2FnZSgnRW1haWwgc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCEnKTtcblx0XHRzZXRFbWFpbCgnJyk7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgc2VsZi1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC1zaHJpbmstMCBzaGFkb3ctbWQgbGc6anVzdGlmeS1lbmRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3dcIj5cblx0XHRcdFx0XHR7c3VjY2Vzc01lc3NhZ2UgPyAoXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTcwMCBiZy1ncmVlbi0zMDAgcHgtNCBweS0yIHJvdW5kZWQtbGdcIj5cblx0XHRcdFx0XHRcdFx0e3N1Y2Nlc3NNZXNzYWdlfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPXtlcnJvck1lc3NhZ2UgfHwgcGxhY2Vob2xkZXJ9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17J3ctMy81IHAtMyByb3VuZGVkLWwtbGcgc206dy0yLzMgdGV4dC1ncmF5LTcwMCd9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3LTIvNSBwLTMgZm9udC1zZW1pYm9sZCByb3VuZGVkLXItbGcgc206dy0xLzMgZGFyazpiZy12aW9sZXQtNDAwIGRhcms6dGV4dC1ncmF5LTkwMFwiXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17aGFuZGxlU3VibWl0fVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0e3RleHR9XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0e2Vycm9yTWVzc2FnZSAmJiAoXG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwIGJnLXJlZC0yMDAgcHgtNCBweS0yIHJvdW5kZWQtbGcgbXktMlwiPlxuXHRcdFx0XHRcdFx0e2Vycm9yTWVzc2FnZX1cblx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImdldFN0cmFwaVVSTCIsIkZvcm1TdWJtaXQiLCJwbGFjZWhvbGRlciIsInRleHQiLCJlbWFpbCIsInNldEVtYWlsIiwic3VjY2Vzc01lc3NhZ2UiLCJzZXRTdWNjZXNzTWVzc2FnZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInRva2VuIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NUUkFQSV9GT1JNX1NVQk1JU1NJT05fVE9LRU4iLCJlbWFpbFJlZ2V4IiwiaGFuZGxlU3VibWl0IiwidGVzdCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJvayIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/components/blocks/LeadForm/FormSubmit.jsx\n"));

/***/ })

});