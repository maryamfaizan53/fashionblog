"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nano-pubsub";
exports.ids = ["vendor-chunks/nano-pubsub"];
exports.modules = {

/***/ "(ssr)/./node_modules/nano-pubsub/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/nano-pubsub/dist/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPubSub)\n/* harmony export */ });\nfunction createPubSub() {\n    const subscribers = /* @__PURE__ */ Object.create(null);\n    let nextId = 0;\n    function subscribe(subscriber) {\n        const id = nextId++;\n        return subscribers[id] = subscriber, function() {\n            delete subscribers[id];\n        };\n    }\n    function publish(event) {\n        for(const id in subscribers)subscribers[id](event);\n    }\n    return {\n        publish,\n        subscribe\n    };\n}\n //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmFuby1wdWJzdWIvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0E7SUFDUCxNQUFNQyxjQUFjLGFBQWEsR0FBR0MsT0FBT0MsTUFBTSxDQUFDO0lBQ2xELElBQUlDLFNBQVM7SUFDYixTQUFTQyxVQUFVQyxVQUFVO1FBQzNCLE1BQU1DLEtBQUtIO1FBQ1gsT0FBT0gsV0FBVyxDQUFDTSxHQUFHLEdBQUdELFlBQVk7WUFDbkMsT0FBT0wsV0FBVyxDQUFDTSxHQUFHO1FBQ3hCO0lBQ0Y7SUFDQSxTQUFTQyxRQUFRQyxLQUFLO1FBQ3BCLElBQUssTUFBTUYsTUFBTU4sWUFDZkEsV0FBVyxDQUFDTSxHQUFHLENBQUNFO0lBQ3BCO0lBQ0EsT0FBTztRQUNMRDtRQUNBSDtJQUNGO0FBQ0Y7QUFHRSxDQUNGLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBsZS1ibG9nLXN0eWxlZC10ZW1wbGF0ZS1mb3ItaGVhZGxlc3MtY21zLy4vbm9kZV9tb2R1bGVzL25hbm8tcHVic3ViL2Rpc3QvaW5kZXguanM/YmI1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVQdWJTdWIoKSB7XG4gIGNvbnN0IHN1YnNjcmliZXJzID0gLyogQF9fUFVSRV9fICovIE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGxldCBuZXh0SWQgPSAwO1xuICBmdW5jdGlvbiBzdWJzY3JpYmUoc3Vic2NyaWJlcikge1xuICAgIGNvbnN0IGlkID0gbmV4dElkKys7XG4gICAgcmV0dXJuIHN1YnNjcmliZXJzW2lkXSA9IHN1YnNjcmliZXIsIGZ1bmN0aW9uKCkge1xuICAgICAgZGVsZXRlIHN1YnNjcmliZXJzW2lkXTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnQpIHtcbiAgICBmb3IgKGNvbnN0IGlkIGluIHN1YnNjcmliZXJzKVxuICAgICAgc3Vic2NyaWJlcnNbaWRdKGV2ZW50KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHB1Ymxpc2gsXG4gICAgc3Vic2NyaWJlXG4gIH07XG59XG5leHBvcnQge1xuICBjcmVhdGVQdWJTdWIgYXMgZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbImNyZWF0ZVB1YlN1YiIsInN1YnNjcmliZXJzIiwiT2JqZWN0IiwiY3JlYXRlIiwibmV4dElkIiwic3Vic2NyaWJlIiwic3Vic2NyaWJlciIsImlkIiwicHVibGlzaCIsImV2ZW50IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nano-pubsub/dist/index.js\n");

/***/ })

};
;