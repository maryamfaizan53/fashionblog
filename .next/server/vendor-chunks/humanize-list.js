"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/humanize-list";
exports.ids = ["vendor-chunks/humanize-list"];
exports.modules = {

/***/ "(ssr)/./node_modules/humanize-list/index.js":
/*!*********************************************!*\
  !*** ./node_modules/humanize-list/index.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\nmodule.exports = function humanizeList(list, options) {\n    if (!Array.isArray(list)) {\n        throw new TypeError(\"humanize-list expected an array\");\n    }\n    options = options || {};\n    options.conjunction = options.conjunction || \"and\";\n    var listLength = list.length;\n    if (listLength === 1) {\n        return list[0];\n    }\n    if (options.skipConjunction) {\n        return list.join(\", \");\n    }\n    var humanizedList = \"\";\n    for(var i = 0; i < listLength; i++){\n        if (i === listLength - 1) {\n            if (options.oxfordComma) {\n                humanizedList += \",\";\n            }\n            humanizedList += \" \" + options.conjunction + \" \";\n        } else if (i !== 0) {\n            humanizedList += \", \";\n        }\n        humanizedList += list[i];\n    }\n    return humanizedList;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHVtYW5pemUtbGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBQSxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsYUFBY0MsSUFBSSxFQUFFQyxPQUFPO0lBQ25ELElBQUksQ0FBQ0MsTUFBTUMsT0FBTyxDQUFDSCxPQUFPO1FBQ3hCLE1BQU0sSUFBSUksVUFBVTtJQUN0QjtJQUVBSCxVQUFVQSxXQUFXLENBQUM7SUFDdEJBLFFBQVFJLFdBQVcsR0FBR0osUUFBUUksV0FBVyxJQUFJO0lBRTdDLElBQUlDLGFBQWFOLEtBQUtPLE1BQU07SUFFNUIsSUFBSUQsZUFBZSxHQUFHO1FBQ3BCLE9BQU9OLElBQUksQ0FBQyxFQUFFO0lBQ2hCO0lBRUEsSUFBSUMsUUFBUU8sZUFBZSxFQUFFO1FBQzNCLE9BQU9SLEtBQUtTLElBQUksQ0FBQztJQUNuQjtJQUVBLElBQUlDLGdCQUFnQjtJQUNwQixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUwsWUFBWUssSUFBSztRQUNuQyxJQUFJQSxNQUFNTCxhQUFhLEdBQUc7WUFDeEIsSUFBSUwsUUFBUVcsV0FBVyxFQUFFO2dCQUN2QkYsaUJBQWlCO1lBQ25CO1lBRUFBLGlCQUFpQixNQUFNVCxRQUFRSSxXQUFXLEdBQUc7UUFDL0MsT0FBTyxJQUFJTSxNQUFNLEdBQUc7WUFDbEJELGlCQUFpQjtRQUNuQjtRQUVBQSxpQkFBaUJWLElBQUksQ0FBQ1csRUFBRTtJQUMxQjtJQUVBLE9BQU9EO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW1wbGUtYmxvZy1zdHlsZWQtdGVtcGxhdGUtZm9yLWhlYWRsZXNzLWNtcy8uL25vZGVfbW9kdWxlcy9odW1hbml6ZS1saXN0L2luZGV4LmpzPzExMjAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaHVtYW5pemVMaXN0IChsaXN0LCBvcHRpb25zKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheShsaXN0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2h1bWFuaXplLWxpc3QgZXhwZWN0ZWQgYW4gYXJyYXknKVxuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgb3B0aW9ucy5jb25qdW5jdGlvbiA9IG9wdGlvbnMuY29uanVuY3Rpb24gfHwgJ2FuZCdcblxuICB2YXIgbGlzdExlbmd0aCA9IGxpc3QubGVuZ3RoXG5cbiAgaWYgKGxpc3RMZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gbGlzdFswXVxuICB9XG5cbiAgaWYgKG9wdGlvbnMuc2tpcENvbmp1bmN0aW9uKSB7XG4gICAgcmV0dXJuIGxpc3Quam9pbignLCAnKVxuICB9XG5cbiAgdmFyIGh1bWFuaXplZExpc3QgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RMZW5ndGg7IGkrKykge1xuICAgIGlmIChpID09PSBsaXN0TGVuZ3RoIC0gMSkge1xuICAgICAgaWYgKG9wdGlvbnMub3hmb3JkQ29tbWEpIHtcbiAgICAgICAgaHVtYW5pemVkTGlzdCArPSAnLCdcbiAgICAgIH1cblxuICAgICAgaHVtYW5pemVkTGlzdCArPSAnICcgKyBvcHRpb25zLmNvbmp1bmN0aW9uICsgJyAnXG4gICAgfSBlbHNlIGlmIChpICE9PSAwKSB7XG4gICAgICBodW1hbml6ZWRMaXN0ICs9ICcsICdcbiAgICB9XG5cbiAgICBodW1hbml6ZWRMaXN0ICs9IGxpc3RbaV1cbiAgfVxuXG4gIHJldHVybiBodW1hbml6ZWRMaXN0XG59XG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImh1bWFuaXplTGlzdCIsImxpc3QiLCJvcHRpb25zIiwiQXJyYXkiLCJpc0FycmF5IiwiVHlwZUVycm9yIiwiY29uanVuY3Rpb24iLCJsaXN0TGVuZ3RoIiwibGVuZ3RoIiwic2tpcENvbmp1bmN0aW9uIiwiam9pbiIsImh1bWFuaXplZExpc3QiLCJpIiwib3hmb3JkQ29tbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/humanize-list/index.js\n");

/***/ })

};
;