"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! openai */ \"./node_modules/openai/dist/index.js\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_2__.Configuration({\n    apiKey: \"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\"\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_2__.OpenAIApi(configuration);\nconst Index = ()=>{\n    _s();\n    const [prompt, setPrompt] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"an apple on fire\");\n    const [image, setImage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const onClick = async ()=>{\n        if (prompt) {\n            setLoading(true);\n            const response = await openai.createImage({\n                prompt: prompt,\n                n: 1,\n                size: \"1024x1024\"\n            }).catch((err)=>console.log(err));\n            if (response) {\n                const image_url = response.data.data[0].url;\n                setImage(image_url);\n                setLoading(false);\n            }\n            ;\n        }\n        ;\n    };\n    const onChange = (e)=>{\n        setPrompt(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            background: \"lightblue\",\n            height: \"100vh\",\n            width: \"100vw\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"flex-start\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                style: {\n                    height: \"15vh\",\n                    width: \"100vw\",\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    color: \"white\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"AI Image Generator\"\n                }, void 0, false, {\n                    fileName: \"/Users/brendanmulhern/projects/ai-text-to-image/pages/index.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/brendanmulhern/projects/ai-text-to-image/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                style: {\n                    marginTop: \"1vh\",\n                    marginBottom: \"1vh\",\n                    textAlign: \"center\"\n                },\n                onChange: onChange,\n                placeholder: \"Enter Prompt\"\n            }, void 0, false, {\n                fileName: \"/Users/brendanmulhern/projects/ai-text-to-image/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClick,\n                children: \"Create Image\"\n            }, void 0, false, {\n                fileName: \"/Users/brendanmulhern/projects/ai-text-to-image/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            image ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                style: {\n                    height: \"300px\",\n                    width: \"300px\",\n                    marginTop: \"7.5vh\",\n                    marginBottom: \"7.5vh\"\n                },\n                src: image\n            }, void 0, false, {\n                fileName: \"/Users/brendanmulhern/projects/ai-text-to-image/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 23\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brendanmulhern/projects/ai-text-to-image/pages/index.js\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Index, \"tf6BxNycM3MEJd8QcScDF2tc8TQ=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTBCO0FBQ3dCO0FBRWxELE1BQU1HLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUNwQ0csUUFBUUMscURBQStCO0FBQzNDO0FBRUEsTUFBTUcsU0FBUyxJQUFJTiw2Q0FBU0EsQ0FBQ0M7QUFFN0IsTUFBTU0sUUFBUSxJQUFNOztJQUNoQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1gscURBQWMsQ0FBQztJQUMzQyxNQUFNLENBQUNhLE9BQU9DLFNBQVMsR0FBR2QscURBQWMsQ0FBQyxJQUFJO0lBQzdDLE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHaEIscURBQWMsQ0FBQyxLQUFLO0lBQ2xELE1BQU1pQixVQUFVLFVBQVk7UUFDeEIsSUFBSVAsUUFBUTtZQUNWTSxXQUFXLElBQUk7WUFDZixNQUFNRSxXQUFXLE1BQU1WLE9BQU9XLFdBQVcsQ0FBQztnQkFDeENULFFBQVFBO2dCQUNSVSxHQUFHO2dCQUNIQyxNQUFNO1lBQ1IsR0FBR0MsS0FBSyxDQUFDQyxDQUFBQSxNQUFPQyxRQUFRQyxHQUFHLENBQUNGO1lBQzVCLElBQUlMLFVBQVU7Z0JBQ1osTUFBTVEsWUFBWVIsU0FBU1MsSUFBSSxDQUFDQSxJQUFJLENBQUMsRUFBRSxDQUFDQyxHQUFHO2dCQUMzQ2QsU0FBU1k7Z0JBQ1RWLFdBQVcsS0FBSztZQUNsQixDQUFDOztRQUNILENBQUM7O0lBQ0w7SUFDQSxNQUFNYSxXQUFXLENBQUNDLElBQU07UUFDcEJuQixVQUFVbUIsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzVCO0lBQ0EscUJBQ0ksOERBQUNDO1FBQUlDLE9BQU87WUFBRUMsWUFBWTtZQUFhQyxRQUFRO1lBQVNDLE9BQU87WUFBU0MsU0FBUztZQUFRQyxlQUFlO1lBQVVDLGdCQUFnQjtZQUFjQyxZQUFZO1FBQVM7OzBCQUNqSyw4REFBQ0M7Z0JBQUlSLE9BQU87b0JBQUVFLFFBQVE7b0JBQVFDLE9BQU87b0JBQVNDLFNBQVM7b0JBQVFFLGdCQUFnQjtvQkFBVUMsWUFBWTtvQkFBVUUsT0FBTztnQkFBUTswQkFDMUgsNEVBQUNDOzhCQUFHOzs7Ozs7Ozs7OzswQkFFUiw4REFBQ0M7Z0JBQU1YLE9BQU87b0JBQUVZLFdBQVc7b0JBQU9DLGNBQWM7b0JBQU9DLFdBQVc7Z0JBQVM7Z0JBQUduQixVQUFVQTtnQkFBVW9CLGFBQVk7Ozs7OzswQkFDOUcsOERBQUNDO2dCQUFPakMsU0FBU0E7MEJBQVM7Ozs7OztZQUN4Qkosc0JBQVEsOERBQUNzQztnQkFBSWpCLE9BQU87b0JBQUVFLFFBQVE7b0JBQVNDLE9BQU87b0JBQVNTLFdBQVc7b0JBQVNDLGNBQWM7Z0JBQVE7Z0JBQUdLLEtBQUt2Qzs7Ozs7NEJBQVksSUFBSTs7Ozs7OztBQUd2STtHQWhDTUo7S0FBQUE7QUFrQ04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSAnb3BlbmFpJztcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9LRVksXG59KTtcblxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgW3Byb21wdCwgc2V0UHJvbXB0XSA9IFJlYWN0LnVzZVN0YXRlKCdhbiBhcHBsZSBvbiBmaXJlJyk7XG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgb25DbGljayA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHByb21wdCkge1xuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvcGVuYWkuY3JlYXRlSW1hZ2Uoe1xuICAgICAgICAgICAgcHJvbXB0OiBwcm9tcHQsXG4gICAgICAgICAgICBuOiAxLFxuICAgICAgICAgICAgc2l6ZTogJzEwMjR4MTAyNCcsXG4gICAgICAgICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VfdXJsID0gcmVzcG9uc2UuZGF0YS5kYXRhWzBdLnVybDtcbiAgICAgICAgICAgIHNldEltYWdlKGltYWdlX3VybCk7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH07XG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgICBzZXRQcm9tcHQoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiAnbGlnaHRibHVlJywgaGVpZ2h0OiAnMTAwdmgnLCB3aWR0aDogJzEwMHZ3JywgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICA8bmF2IHN0eWxlPXt7IGhlaWdodDogJzE1dmgnLCB3aWR0aDogJzEwMHZ3JywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogJ3doaXRlJyB9fT5cbiAgICAgICAgICAgICAgICA8aDE+QUkgSW1hZ2UgR2VuZXJhdG9yPC9oMT5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7IG1hcmdpblRvcDogJzF2aCcsIG1hcmdpbkJvdHRvbTogJzF2aCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gb25DaGFuZ2U9e29uQ2hhbmdlfSBwbGFjZWhvbGRlcj0nRW50ZXIgUHJvbXB0Jz48L2lucHV0PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfT5DcmVhdGUgSW1hZ2U8L2J1dHRvbj5cbiAgICAgICAgICAgIHsgaW1hZ2UgPyA8aW1nIHN0eWxlPXt7IGhlaWdodDogJzMwMHB4Jywgd2lkdGg6ICczMDBweCcsIG1hcmdpblRvcDogJzcuNXZoJywgbWFyZ2luQm90dG9tOiAnNy41dmgnIH19IHNyYz17aW1hZ2V9IC8+IDogbnVsbCB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9LRVkiLCJvcGVuYWkiLCJJbmRleCIsInByb21wdCIsInNldFByb21wdCIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRJbWFnZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwib25DbGljayIsInJlc3BvbnNlIiwiY3JlYXRlSW1hZ2UiLCJuIiwic2l6ZSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImltYWdlX3VybCIsImRhdGEiLCJ1cmwiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsInN0eWxlIiwiYmFja2dyb3VuZCIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJuYXYiLCJjb2xvciIsImgxIiwiaW5wdXQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0QWxpZ24iLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});