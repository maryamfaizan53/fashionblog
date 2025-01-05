"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/arrify";
exports.ids = ["vendor-chunks/arrify"];
exports.modules = {

/***/ "(ssr)/./node_modules/arrify/index.js":
/*!**************************************!*\
  !*** ./node_modules/arrify/index.js ***!
  \**************************************/
/***/ ((module) => {

eval("\nconst arrify = (value)=>{\n    if (value === null || value === undefined) {\n        return [];\n    }\n    if (Array.isArray(value)) {\n        return value;\n    }\n    if (typeof value === \"string\") {\n        return [\n            value\n        ];\n    }\n    if (typeof value[Symbol.iterator] === \"function\") {\n        return [\n            ...value\n        ];\n    }\n    return [\n        value\n    ];\n};\nmodule.exports = arrify;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYXJyaWZ5L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsTUFBTUEsU0FBU0MsQ0FBQUE7SUFDZCxJQUFJQSxVQUFVLFFBQVFBLFVBQVVDLFdBQVc7UUFDMUMsT0FBTyxFQUFFO0lBQ1Y7SUFFQSxJQUFJQyxNQUFNQyxPQUFPLENBQUNILFFBQVE7UUFDekIsT0FBT0E7SUFDUjtJQUVBLElBQUksT0FBT0EsVUFBVSxVQUFVO1FBQzlCLE9BQU87WUFBQ0E7U0FBTTtJQUNmO0lBRUEsSUFBSSxPQUFPQSxLQUFLLENBQUNJLE9BQU9DLFFBQVEsQ0FBQyxLQUFLLFlBQVk7UUFDakQsT0FBTztlQUFJTDtTQUFNO0lBQ2xCO0lBRUEsT0FBTztRQUFDQTtLQUFNO0FBQ2Y7QUFFQU0sT0FBT0MsT0FBTyxHQUFHUiIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbXBsZS1ibG9nLXN0eWxlZC10ZW1wbGF0ZS1mb3ItaGVhZGxlc3MtY21zLy4vbm9kZV9tb2R1bGVzL2FycmlmeS9pbmRleC5qcz9hZWJkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgYXJyaWZ5ID0gdmFsdWUgPT4ge1xuXHRpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIFt2YWx1ZV07XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlW1N5bWJvbC5pdGVyYXRvcl0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gWy4uLnZhbHVlXTtcblx0fVxuXG5cdHJldHVybiBbdmFsdWVdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhcnJpZnk7XG4iXSwibmFtZXMiOlsiYXJyaWZ5IiwidmFsdWUiLCJ1bmRlZmluZWQiLCJBcnJheSIsImlzQXJyYXkiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/arrify/index.js\n");

/***/ })

};
;