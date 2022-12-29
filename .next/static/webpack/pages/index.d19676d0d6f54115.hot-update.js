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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/service */ \"./service/service.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Index = ()=>{\n    _s();\n    const [prompt, setPrompt] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"an apple on fire\");\n    const [image, setImage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const onClick = async ()=>{\n        if (prompt) {\n            setLoading(true);\n            (0,_service_service__WEBPACK_IMPORTED_MODULE_2__.getPhoto)(prompt).then((res)=>{\n                console.log(res);\n                const image_url = res.data;\n                setImage(image_url);\n                setLoading(false);\n            }).catch((err)=>{\n                console.error(err);\n            });\n        }\n        ;\n    };\n    const onChange = (e)=>{\n        setPrompt(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            background: \"lightblue\",\n            height: \"100vh\",\n            width: \"100vw\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            justifyContent: \"flex-start\",\n            alignItems: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                style: {\n                    height: \"15vh\",\n                    width: \"100vw\",\n                    display: \"flex\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    color: \"white\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"AI Image Generator\"\n                }, void 0, false, {\n                    fileName: \"/Users/brendanmulhern/ai-text-to-image-course/pages/index.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/brendanmulhern/ai-text-to-image-course/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                style: {\n                    height: \"10vw\",\n                    width: \"40vw\",\n                    marginTop: \"1vh\",\n                    marginBottom: \"1vh\",\n                    textAlign: \"center\"\n                },\n                onChange: onChange,\n                placeholder: \"Enter Prompt\"\n            }, void 0, false, {\n                fileName: \"/Users/brendanmulhern/ai-text-to-image-course/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClick,\n                children: \"Create Image\"\n            }, void 0, false, {\n                fileName: \"/Users/brendanmulhern/ai-text-to-image-course/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            image && loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"2vh\",\n                    marginBottom: \"2vh\",\n                    color: \"white\",\n                    fontSize: \"30px\"\n                },\n                children: \"Loading..\"\n            }, void 0, false, {\n                fileName: \"/Users/brendanmulhern/ai-text-to-image-course/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 34\n            }, undefined) : null,\n            image ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                style: {\n                    height: \"300px\",\n                    width: \"300px\",\n                    marginTop: \"7.5vh\",\n                    marginBottom: \"7.5vh\"\n                },\n                src: image\n            }, void 0, false, {\n                fileName: \"/Users/brendanmulhern/ai-text-to-image-course/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 23\n            }, undefined) : loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"2vh\",\n                    marginBottom: \"2vh\",\n                    color: \"white\",\n                    fontSize: \"30px\"\n                },\n                children: \"Loading..\"\n            }, void 0, false, {\n                fileName: \"/Users/brendanmulhern/ai-text-to-image-course/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 142\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/brendanmulhern/ai-text-to-image-course/pages/index.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Index, \"tf6BxNycM3MEJd8QcScDF2tc8TQ=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFBMEI7QUFDb0I7QUFFOUMsTUFBTUUsUUFBUSxJQUFNOztJQUNoQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0oscURBQWMsQ0FBQztJQUMzQyxNQUFNLENBQUNNLE9BQU9DLFNBQVMsR0FBR1AscURBQWMsQ0FBQyxJQUFJO0lBQzdDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCxxREFBYyxDQUFDLEtBQUs7SUFDbEQsTUFBTVUsVUFBVSxVQUFZO1FBQ3hCLElBQUlQLFFBQVE7WUFDVk0sV0FBVyxJQUFJO1lBQ2ZSLDBEQUFRQSxDQUFDRSxRQUNOUSxJQUFJLENBQUNDLENBQUFBLE1BQU87Z0JBQ1RDLFFBQVFDLEdBQUcsQ0FBQ0Y7Z0JBQ1osTUFBTUcsWUFBWUgsSUFBSUksSUFBSTtnQkFDMUJULFNBQVNRO2dCQUNUTixXQUFXLEtBQUs7WUFDcEIsR0FDQ1EsS0FBSyxDQUFDQyxDQUFBQSxNQUFPO2dCQUNWTCxRQUFRTSxLQUFLLENBQUNEO1lBQ2xCO1FBQ0osQ0FBQzs7SUFDTDtJQUNBLE1BQU1FLFdBQVcsQ0FBQ0MsSUFBTTtRQUNwQmpCLFVBQVVpQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDNUI7SUFDQSxxQkFDSSw4REFBQ0M7UUFBSUMsT0FBTztZQUFFQyxZQUFZO1lBQWFDLFFBQVE7WUFBU0MsT0FBTztZQUFTQyxTQUFTO1lBQVFDLGVBQWU7WUFBVUMsZ0JBQWdCO1lBQWNDLFlBQVk7UUFBUzs7MEJBQ2pLLDhEQUFDQztnQkFBSVIsT0FBTztvQkFBRUUsUUFBUTtvQkFBUUMsT0FBTztvQkFBU0MsU0FBUztvQkFBUUUsZ0JBQWdCO29CQUFVQyxZQUFZO29CQUFVRSxPQUFPO2dCQUFROzBCQUMxSCw0RUFBQ0M7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUVSLDhEQUFDQztnQkFBTVgsT0FBTztvQkFBRUUsUUFBUTtvQkFBUUMsT0FBTztvQkFBUVMsV0FBVztvQkFBT0MsY0FBYztvQkFBT0MsV0FBVztnQkFBUztnQkFBR25CLFVBQVVBO2dCQUFVb0IsYUFBWTs7Ozs7OzBCQUM3SSw4REFBQ0M7Z0JBQU8vQixTQUFTQTswQkFBUzs7Ozs7O1lBQ3hCSixTQUFTRSx3QkFBVSw4REFBQ2dCO2dCQUFJQyxPQUFPO29CQUFFWSxXQUFXO29CQUFPQyxjQUFjO29CQUFPSixPQUFPO29CQUFTUSxVQUFVO2dCQUFPOzBCQUFHOzs7Ozs0QkFBa0IsSUFBSTtZQUNsSXBDLHNCQUFRLDhEQUFDcUM7Z0JBQUlsQixPQUFPO29CQUFFRSxRQUFRO29CQUFTQyxPQUFPO29CQUFTUyxXQUFXO29CQUFTQyxjQUFjO2dCQUFRO2dCQUFHTSxLQUFLdEM7Ozs7OzRCQUFZRSx3QkFBVSw4REFBQ2dCO2dCQUFJQyxPQUFPO29CQUFFWSxXQUFXO29CQUFPQyxjQUFjO29CQUFPSixPQUFPO29CQUFTUSxVQUFVO2dCQUFPOzBCQUFHOzs7Ozs0QkFBa0IsSUFBSTs7Ozs7OztBQUc1UDtHQWpDTXhDO0tBQUFBO0FBbUNOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFBob3RvIH0gZnJvbSAnLi4vc2VydmljZS9zZXJ2aWNlJztcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgW3Byb21wdCwgc2V0UHJvbXB0XSA9IFJlYWN0LnVzZVN0YXRlKCdhbiBhcHBsZSBvbiBmaXJlJyk7XG4gICAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgb25DbGljayA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHByb21wdCkge1xuICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgZ2V0UGhvdG8ocHJvbXB0KVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlX3VybCA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgIHNldEltYWdlKGltYWdlX3VybCk7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHNldFByb21wdChlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6ICdsaWdodGJsdWUnLCBoZWlnaHQ6ICcxMDB2aCcsIHdpZHRoOiAnMTAwdncnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICAgICAgICAgIDxuYXYgc3R5bGU9e3sgaGVpZ2h0OiAnMTV2aCcsIHdpZHRoOiAnMTAwdncnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGNvbG9yOiAnd2hpdGUnIH19PlxuICAgICAgICAgICAgICAgIDxoMT5BSSBJbWFnZSBHZW5lcmF0b3I8L2gxPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3sgaGVpZ2h0OiAnMTB2dycsIHdpZHRoOiAnNDB2dycsIG1hcmdpblRvcDogJzF2aCcsIG1hcmdpbkJvdHRvbTogJzF2aCcsIHRleHRBbGlnbjogJ2NlbnRlcicgfX0gb25DaGFuZ2U9e29uQ2hhbmdlfSBwbGFjZWhvbGRlcj0nRW50ZXIgUHJvbXB0Jz48L2lucHV0PlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfT5DcmVhdGUgSW1hZ2U8L2J1dHRvbj5cbiAgICAgICAgICAgIHsgaW1hZ2UgJiYgbG9hZGluZyA/IDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMnZoJywgbWFyZ2luQm90dG9tOiAnMnZoJywgY29sb3I6ICd3aGl0ZScsIGZvbnRTaXplOiAnMzBweCcgfX0+TG9hZGluZy4uPC9kaXY+IDogbnVsbCB9XG4gICAgICAgICAgICB7IGltYWdlID8gPGltZyBzdHlsZT17eyBoZWlnaHQ6ICczMDBweCcsIHdpZHRoOiAnMzAwcHgnLCBtYXJnaW5Ub3A6ICc3LjV2aCcsIG1hcmdpbkJvdHRvbTogJzcuNXZoJyB9fSBzcmM9e2ltYWdlfSAvPiA6IGxvYWRpbmcgPyA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzJ2aCcsIG1hcmdpbkJvdHRvbTogJzJ2aCcsIGNvbG9yOiAnd2hpdGUnLCBmb250U2l6ZTogJzMwcHgnIH19PkxvYWRpbmcuLjwvZGl2PiA6IG51bGwgfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwibmFtZXMiOlsiUmVhY3QiLCJnZXRQaG90byIsIkluZGV4IiwicHJvbXB0Iiwic2V0UHJvbXB0IiwidXNlU3RhdGUiLCJpbWFnZSIsInNldEltYWdlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJvbkNsaWNrIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZV91cmwiLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm5hdiIsImNvbG9yIiwiaDEiLCJpbnB1dCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInRleHRBbGlnbiIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwiZm9udFNpemUiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});