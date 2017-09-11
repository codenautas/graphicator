/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graphicator__ = __webpack_require__(1);

var graphicator = new __WEBPACK_IMPORTED_MODULE_0__graphicator__["a" /* Graphicator */]();
var datum;
datum = {
    vars: [
        { name: 'comuna', place: 'left' },
        { name: 'año', place: 'top' },
        { name: 'valor', place: 'data' },
    ],
    list: [
        { comuna: 1, año: 2014, valor: 1230 },
        { comuna: 2, año: 2014, valor: 1430 },
        { comuna: 3, año: 2014, valor: 1980 },
        { comuna: 4, año: 2014, valor: 1520 },
        { comuna: 1, año: 2015, valor: 1360 },
        { comuna: 2, año: 2015, valor: 1330 },
        { comuna: 3, año: 2015, valor: 1320 },
        { comuna: 4, año: 2015, valor: 1490 },
        { comuna: 1, año: 2016, valor: 2230 },
        { comuna: 2, año: 2016, valor: 2330 },
        { comuna: 4, año: 2016, valor: 2620 },
        { comuna: 1, año: 2017, valor: 2730 },
        { comuna: 2, año: 2017, valor: 2830 },
        { comuna: 3, año: 2017, valor: 2780 },
        { comuna: 4, año: 2017, valor: 2920 },
    ]
};
graphicator.renderTabulation(datum, 'mortalidadChart', __WEBPACK_IMPORTED_MODULE_0__graphicator__["b" /* chartType */].LINE);
graphicator = new __WEBPACK_IMPORTED_MODULE_0__graphicator__["a" /* Graphicator */]();
datum = {
    vars: [
        { name: 'tipoDeHacinamiento', place: 'left' },
        { name: 'año', place: 'top' },
        { name: 'valor', place: 'data' },
    ],
    list: [
        { "tipoDeHacinamiento": "hacinadas", año: 2012, valor: 19.3 },
        { "tipoDeHacinamiento": "no hacinadas", año: 2012, valor: 78.8 },
        { "tipoDeHacinamiento": "hacinadas", año: 2013, valor: 16.4 },
        { "tipoDeHacinamiento": "no hacinadas", año: 2013, valor: 79.0 },
        { "tipoDeHacinamiento": "hacinadas", año: 2014, valor: 16.0 },
        { "tipoDeHacinamiento": "no hacinadas", año: 2014, valor: 81.3 },
        { "tipoDeHacinamiento": "hacinadas", año: 2015, valor: 12.3 },
        { "tipoDeHacinamiento": "no hacinadas", año: 2015, valor: 84.3 },
    ]
};
graphicator.renderTabulation(datum, 'mortalidadChart2', __WEBPACK_IMPORTED_MODULE_0__graphicator__["b" /* chartType */].LINE);
graphicator = new __WEBPACK_IMPORTED_MODULE_0__graphicator__["a" /* Graphicator */]();
datum = {
    vars: [
        { name: 'comuna', place: 'left' },
        { name: 'rangoEdad', place: 'top' },
        { name: 'valor', place: 'data' },
    ],
    list: [
        { comuna: 'Total', rangoEdad: '0-4', valor: 165.638 },
        { comuna: 'Total', rangoEdad: '5-9', valor: 156.372 },
        { comuna: 'Total', rangoEdad: '10-14', valor: 150.501 },
        { comuna: 'Total', rangoEdad: '15-17', valor: 92.521 },
    ]
};
graphicator.renderTabulation(datum, 'poblacionChart', __WEBPACK_IMPORTED_MODULE_0__graphicator__["b" /* chartType */].PIE);
graphicator = new __WEBPACK_IMPORTED_MODULE_0__graphicator__["a" /* Graphicator */]();
datum = {
    vars: [
        { name: 'sexo', place: 'left' },
        { name: 'año', place: 'top' },
        { name: 'valor', place: 'data' },
    ],
    list: [
        { sexo: 'mujer', año: 2015, valor: 1230 },
        { sexo: 'varon', año: 2015, valor: 1430 },
        { sexo: 'varon', año: 2015, valor: 1980 },
        { sexo: 'mujer', año: 2015, valor: 1520 },
        { sexo: 'mujer', año: 2016, valor: 2230 },
        { sexo: 'varon', año: 2016, valor: 2330 },
        { sexo: 'varon', año: 2016, valor: 2280 },
        { sexo: 'mujer', año: 2016, valor: 2620 },
        { sexo: 'mujer', año: 2017, valor: 2730 },
        { sexo: 'varon', año: 2017, valor: 2830 },
        { sexo: 'varon', año: 2017, valor: 2780 },
        { sexo: 'mujer', año: 2017, valor: 2920 },
    ]
};
graphicator.renderTabulation(datum, 'adopcionesChart', __WEBPACK_IMPORTED_MODULE_0__graphicator__["b" /* chartType */].BAR);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return chartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Graphicator; });
throw new Error("Cannot find module \"c3\"");
throw new Error("Cannot find module \"d3\"");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var Tabulator = __webpack_require__(2);


var chartType;
(function (chartType) {
    chartType["LINE"] = "line";
    chartType["BAR"] = "bar";
    chartType["PIE"] = "pie";
})(chartType || (chartType = {}));
;
var Graphicator = (function () {
    function Graphicator() {
        this.buildChartParamsFunctions = {
            pie: function (elementId, matrix) {
                var that = new Graphicator();
                var dataVarName = that.getUniqueArrayElement(matrix.dataVariables, 'matrix.dataVariables');
                var columns = matrix.columns.map(function (x, index) { return [that.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles'), that.getUniqueArrayElement(matrix.lines, 'matrix.lines').cells[index][dataVarName]]; });
                var chartParameters = {
                    data: {
                        columns: columns,
                        type: 'pie'
                    },
                    pie: {
                        label: {
                            format: function (value, ratio, id) {
                                return __WEBPACK_IMPORTED_MODULE_1_d3__["format"]('')(value);
                            }
                        }
                    }
                };
                return chartParameters;
            },
            bar: function (elementId, matrix) {
                var that = new Graphicator();
                return that.buildProgressChartParams(elementId, matrix, 'bar');
            },
            line: function (elementId, matrix) {
                var that = new Graphicator();
                return that.buildProgressChartParams(elementId, matrix, 'line');
            }
        };
        this.tabulator = new Tabulator();
        this.tabulator.defaultShowAttribute = 'valor';
    }
    Graphicator.prototype.renderTabulation = function (datum, elementId, type) {
        var matrix = this.tabulator.toMatrix(datum);
        this.renderTable(elementId, matrix);
        var chartParameters = this.buildChartParamsFunctions[type](elementId, matrix);
        this.renderChart(elementId, chartParameters);
    };
    Graphicator.prototype.validateOneElementArray = function (arrayVar, varName) {
        if (arrayVar.constructor !== Array || arrayVar.length != 1) {
            throw new Error(varName + ' must be an array and have only one element');
        }
    };
    Graphicator.prototype.getUniqueArrayElement = function (array, varName) {
        this.validateOneElementArray(array, varName);
        return array[0];
    };
    Graphicator.prototype.buildProgressChartParams = function (elementId, matrix, type) {
        var _this = this;
        var xTitles = ['x'].concat(matrix.columns.map(function (x) { return _this.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles'); }));
        var rowsForChart = matrix.lines.map(function (x) { return [_this.getUniqueArrayElement(x.titles, 'matrix.lines[*].titles')].concat(x.cells.map(function (c) { return (c && c.valor) || ''; })); });
        var groups = (type == 'bar') ? [rowsForChart.map(function (x) { return x[0]; })] : false;
        var chartParameters = {
            data: {
                x: 'x',
                columns: [xTitles].concat(rowsForChart),
                type: type,
                groups: groups,
            },
            axis: {
                x: {
                    label: {
                        text: this.getUniqueArrayElement(matrix.columnVariables, 'matrix.columnVariables'),
                        position: 'outer-center'
                    }
                },
                y: {
                    label: {
                        text: this.getUniqueArrayElement(matrix.dataVariables, 'matrix.dataVariables'),
                        position: 'outer-middle'
                    },
                    min: 0
                }
            },
            grid: {
                x: {
                    show: true
                },
                y: {
                    show: true
                }
            }
        };
        return chartParameters;
    };
    Graphicator.prototype.renderChart = function (elementId, chartParameters) {
        var chart = __WEBPACK_IMPORTED_MODULE_0_c3__["generate"](__assign({ bindto: '#' + elementId }, chartParameters));
    };
    Graphicator.prototype.renderTable = function (elementId, matrix) {
        var element = document.getElementById(elementId);
        element.innerHTML = "";
        var table = this.tabulator.toHtmlTable(matrix);
        element.parentNode.insertBefore(table.create(), element);
    };
    return Graphicator;
}());

;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * tabulator
 * 2015 Codenautas
 * GNU Licensed
 */

/**
 * Module dependencies.
 */

/*jshint eqnull:true */
/*jshint globalstrict:true */
/*jshint node:true */
(function webpackUniversalModuleDefinition(root, factory) {
    /* global define */
    /* global globalModuleName */
    if(typeof root.globalModuleName !== 'string'){
        root.globalModuleName = factory.name;
    }
    /* istanbul ignore next */
    if(true)
        module.exports = factory();
    else if(typeof define === 'function' && define.amd)
        define(factory);
    else if(typeof exports === 'object')
        exports[root.globalModuleName] = factory();
    else
        root[root.globalModuleName] = factory();
    root.globalModuleName = null;
})(/*jshint -W040 */this, function Tabulator() {
/*jshint +W040 */

var likeAr = __webpack_require__(3);

var html=__webpack_require__(4).html;

/*jshint -W004 */
var Tabulator = function(){
};
/*jshint +W004 */
 
 // import used by this file
// var dependency = dependency || require('dependency');  

function array_combine(keys, values) {
  var new_array = {};
  for (var i = 0; i < keys.length; i++) {
    new_array[keys[i]] = values[i];
  }
  return new_array;
}



Tabulator.prototype.captionPart = function captionPart(matrix){
    return matrix.caption?html.caption(matrix.caption):null;
};

Tabulator.prototype.colGroups = function colGroups(matrix){
    //console.log("matrix.lineVariables",matrix.lineVariables);
    var lineVariablesPart=matrix.lineVariables?(
        html.colgroup(
            {'class':'headers'},
            matrix.lineVariables.map(function(lineVariable){
                return html.col({'class':lineVariable});
            })
        )
    ):null;
    var columnVariablesPart=(matrix.columns)?(
        html.colgroup(
            {'class':'data'},
            (matrix.oneColumnTitle)?(
                html.col({'class':'variable'})
            ):(
                matrix.columns.map(function(column){
                    return html.col({'class':JSON.stringify(array_combine(matrix.columnVariables,column.titles))});
                })
            )
        )
    ):null;
    return [].concat(lineVariablesPart,columnVariablesPart);
};

function labelVariableValues(matrix, varName, varValue){
    return (((((matrix.vars||{})[varName]||{}).values)||{})[varValue]||{}).label||varValue;
}

function flatArray(arrays){
    return [].concat.apply([], arrays);
}

Tabulator.prototype.tHeadPart = function tHeadPart(matrix){
    if(!matrix.columnVariables) return null;
    function labelVariable(varName){
        return ((matrix.vars||{})[varName]||{}).label||varName;
    }
    var varObj=matrix.columns.length>0?{'class':'variable', colspan:matrix.columns.length}:{'class':'variable', rowspan:2};
    return html.thead(
        [
            html.tr(
                matrix.lineVariables.map(function(varName){
                    var columnVariablesLength = matrix.columnVariables.length>0?matrix.columnVariables.length:1;
                    return html.th({'class':'variable', 'rowspan':2*columnVariablesLength}, labelVariable(varName));
                }).concat(
                    html.th(varObj,labelVariable(matrix.columnVariables[0])||matrix.oneColumnTitle)
                )
            )
        ].concat(flatArray(matrix.columnVariables.map(function(columnVariable,iColumnVariable){
            var lineTitles=[];
            var lineVariables=[];
            var previousValuesUptoThisRowJson="none";
            var colspan=1;
            function updateColspan(){
                if(colspan>1){
                    titleCellAttrs.colspan=colspan;
                    variableCellAttrs.colspan=colspan;
                }
            }
            for(var i=0; i<matrix.columns.length; i++){
                var actualValues=matrix.columns[i].titles;
                var actualValuesUptoThisRow=actualValues.slice(0,iColumnVariable+1);
                var actualValuesUptoThisRowJson=JSON.stringify(actualValuesUptoThisRow);
                if(actualValuesUptoThisRowJson!=previousValuesUptoThisRowJson){
                    updateColspan();
                    var titleCellAttrs={'class':'var_'+matrix.columnVariables[iColumnVariable]};
                    var varName = matrix.columnVariables[iColumnVariable];
                    var varValue = actualValues[iColumnVariable];
                    lineTitles.push(html.th(titleCellAttrs, labelVariableValues(matrix, varName,varValue)));
                    if(iColumnVariable+1<matrix.columnVariables.length){
                        var variableCellAttrs={'class':'variable'};
                        lineVariables.push(html.th(variableCellAttrs, labelVariable(matrix.columnVariables[iColumnVariable+1])));
                    }
                    previousValuesUptoThisRowJson=actualValuesUptoThisRowJson;
                    colspan=0;
                }
                colspan++;
            }
            updateColspan();
            if(iColumnVariable+1<matrix.columnVariables.length){
                //console.log("lineTitles: ", JSON.stringify(lineTitles));
                //console.log("lineVariables: ", JSON.stringify(lineVariables));
                return [html.tr(lineTitles), html.tr(lineVariables)];
            }else{
                //console.log("lineTitles: ", JSON.stringify(lineTitles));
                return [html.tr(lineTitles)];
            }
        }))
    ));
};


Tabulator.prototype.defaultShowAttribute='show';

Tabulator.prototype.toCellTable=function(cell){
    return cell instanceof Object?html.td(
        likeAr(cell).filter(function(value,key){return /-/.test(key);}).plain(),
        cell[this.defaultShowAttribute]
    ):html.td(cell);
};

Tabulator.prototype.tBodyPart = function tBodyPart(matrix){
    var trList=[];
    var previousLineTitles=[];
    var titleLineAttrs=[];    
    for(var i=0; i<matrix.lines.length;i++){
        var actualLine=matrix.lines[i];
        var actualLineTitles=actualLine.titles;
        var thListActualLine=[];
        var actualLineCells=matrix.lines[i].cells;
        var td=actualLineCells.map(function(cell){
            return (this.toCellTable(cell));
        },this);
        if(actualLineTitles){
            for(var j=0;j<actualLineTitles.length;j++){
                var varName=(matrix.lineVariables||{})[j]||null;
                var actualLineTitlesUpToNow=actualLineTitles.slice(0,j+1);
                var previousLineTitlesUpToNow=previousLineTitles.slice(0,j+1);
                if(JSON.stringify(actualLineTitlesUpToNow)!=JSON.stringify(previousLineTitlesUpToNow)){
                    titleLineAttrs[j]={};
                    if((matrix.lineVariables||{})[j]){
                        titleLineAttrs[j]['class']='var_'+(matrix.lineVariables||{})[j];
                    }
                    thListActualLine.push(html.th(titleLineAttrs[j],labelVariableValues(matrix, varName,actualLineTitles[j])));
                }else{
                    titleLineAttrs[j].rowspan=(titleLineAttrs[j].rowspan||1)+1;
                }
            }
            previousLineTitles=actualLineTitles;
        }
        trList.push(html.tr(thListActualLine.concat(td)));
    }
    return html.tbody(trList);
};
     


Tabulator.prototype.toHtmlTable = function toHtmlTable(matrix){
    this.controls(matrix);
    return html.table({class:'tabulator-table'},[].concat(
        this.captionPart(matrix),
        this.colGroups(matrix),
        this.tHeadPart(matrix),
        this.tBodyPart(matrix)
    ));
};

Tabulator.prototype.controls=function controls(matrix){
    var  matrixLineVariables=matrix.lineVariables;
    var  matrixLines=matrix.lines;
    var  matrixColumnVariables=matrix.columnVariables;
    var  matrixColumns=matrix.columns;
    if(matrixColumnVariables && matrixColumns /*&& matrixColumns.length*/){
        variableExistanceAndQuantity(matrixColumnVariables,matrixColumns,'columnVariables');
    }
    if(matrixLineVariables && matrixLines /*&& matrixLines.length*/){
        variableExistanceAndQuantity(matrixLineVariables,matrixLines,'lineVariables');
    }
    if(matrixColumns && matrixLines){
        cellExistanceAndQuantity(matrixColumns,matrixLines,'cells');
    }
    function variableExistanceAndQuantity(arrVar,objVar,nameArrVar){
        var varName=nameArrVar=='columnVariables'?'column ':'line ';
        var variablesQuantity=arrVar.length;
        for(var i=0;i<objVar.length;i++){
            if(objVar[i].titles){
                if(objVar[i].titles.length!=variablesQuantity){
                    throw new Error(varName+i+' has '+objVar[i].titles.length+' values but '+nameArrVar+' has '+variablesQuantity);
                }
            }else{
                throw new Error('there are no titles in '+ varName +i+' but '+nameArrVar+ ' exists');
            }
        }
    }
 
    function cellExistanceAndQuantity(matrixColumns,matrixLines,varName){
        var columnQuantity=matrixColumns.length||1;
        for(var i=0;i<matrixLines.length;i++){
            if(matrixLines[i].cells.length>0){
                if(matrixLines[i].cells.length!=columnQuantity){
                    throw new Error('line '+i+' has '+matrixLines[i].cells.length+' cells but columns has '+columnQuantity);
                }
            }else{
                throw new Error('there are no cells in line '+i+' but columns exists'); 
            }
        }
    }
};

Tabulator.prototype.controlsJoin=function controlsJoin(matrixList){
var firstMatrixListLinesLength = matrixList[0].lines.length;
if (!matrixList.every(function(element){return element.lines.length == firstMatrixListLinesLength})){
    throw new Error('line.length does not match in all matrix');
}
var firstMatrixListLine = matrixList[0].lines;
var JsonTitlesFirstMatrixListLine = firstMatrixListLine.map(function(obj){return JSON.stringify(obj.titles)});
if (!matrixList.every(
      function(element,index){
        return element.lines.every(
           function(elemento,indice){
             //return JSON.stringify(elemento.titles) == JSON.stringify(firstMatrixListLine[indice].titles)
             //console.log('Titulos ',JsonTitlesFirstMatrixListLine);
             //console.log('Titulos ',JSON.stringify(elemento.titles));
             return JsonTitlesFirstMatrixListLine.indexOf(JSON.stringify(elemento.titles)) > -1;
           })
      })
    ){
        throw new Error('line titles does not match in all matrix');
     }
}

Tabulator.prototype.toMatrix = function toMatrix(datum){
    var places={
        left:{place:'lineVariables'},
        top:{place:'columnVariables'},
        data:{place:'dataVariables'},
    };
    var matrix={lineVariables:[],columnVariables:[], dataVariables:[], columns:[], lines:[], vars:{}};
    for(var i=0; i<datum.vars.length;i++){
        var cadaVar=datum.vars[i];
        matrix[places[cadaVar.place].place].push(cadaVar.name);
        matrix.vars[cadaVar.name] = cadaVar;
    }
    matrix.oneColumnTitle=datum.oneColumnTitle; 
    var vistosColumnVariables={};
    var vistosLineVariables={};
    for(var iList=0; iList<datum.list.length; iList++){
        var iCell;
        var iLine;
        var cadaList=datum.list[iList];
        iCell=matrix.columnVariables.length;
        if(iCell>0){ 
            var cadaDatoTop=[];
            cadaDatoTop=matrix.columnVariables.map(function(columnVar){ return cadaList[columnVar]});
            var jsonCadaDatoTop=JSON.stringify(cadaDatoTop);
            if (!vistosColumnVariables[jsonCadaDatoTop]){
                iCell=matrix.columns.push({titles:cadaDatoTop})-1;
                vistosColumnVariables[jsonCadaDatoTop]={index: iCell};
            }else{
                iCell=vistosColumnVariables[jsonCadaDatoTop].index;
            }
        }
        var cadaDatoLeft=[];
        var cadaDatoData=[];                
        for(var j=0; j<matrix.lineVariables.length;j++){
            cadaDatoLeft.push(cadaList[matrix.lineVariables[j]]);
            cadaDatoData.push(cadaList[matrix.dataVariables[j]]);
        }        
        var jsonCadaDatoLeft=JSON.stringify(cadaDatoLeft);
        if (vistosLineVariables[jsonCadaDatoLeft]){
            iLine=vistosLineVariables[jsonCadaDatoLeft].index;
        }else{
            iLine=matrix.lines.push({titles:cadaDatoLeft, cells:[]})-1;
            vistosLineVariables[jsonCadaDatoLeft]={index: iLine};            
        }
        var newCell={};
        if(datum.showFunction){
            newCell.display=datum.showFunction(cadaList);
        }
        for(var k=0; k<matrix.dataVariables.length; k++){
            var nombreVariable=matrix.dataVariables[k];
            newCell[nombreVariable]=cadaList[nombreVariable];
        }
        matrix.lines[iLine].cells[iCell]=newCell;
    }
    for(var l=0; l<matrix.lines.length; l++){
        for(var m=0; m<matrix.columns.length; m++){
            if (matrix.lines[l].cells[m]===undefined){
                matrix.lines[l].cells[m]=null;
            }
        }
    }
    return matrix;
};

Tabulator.prototype.matrixJoin = function matrixJoin(matrixList){
    this.controlsJoin(matrixList);
    
    var matrix={columnGroups:[], lineVariables:[], lines:[], vars:{}};
    var captions = matrixList.map(function(obj){return obj.caption});
    matrix.caption = captions.join(this.matrixJoin.captionSeparator);
    
    var reordererLines = [];
    matrixList.forEach(function(matrix){
        var lines = matrix.lines;
        var indexedLines = {};
        lines.forEach(function (line){
            var ind = JSON.stringify(line.titles);
            indexedLines[ind] = line.cells;
        });
        reordererLines.push(indexedLines);
    });
    //console.log("reordererLines: ", reordererLines);

    matrix.columnGroups = matrixList.map(function(obj){
        var cGroup={};
        cGroup.columnVariables=obj.columnVariables;
        cGroup.columns=obj.columns;
        return cGroup;
    });
    matrix.lineVariables = matrixList[0].lineVariables;
    matrix.lines = matrixList[0].lines;
    matrix.vars = matrixList[0].vars;
    // primer paso construir un arreglo indexado de líneas (indexado por título)
    // reordererLines[i_matrix][json_title] = line
    // segundo paso igual pero iterando sobre la matriz 0 (original) y buscando por índice (si un índice no está lanza excepción)
    matrixList.forEach(function(matrixToAdd, i_matrixToAdd){
        if (i_matrixToAdd>0){
            matrix.lines.forEach(function(line,ind){
                var lineToAdd = reordererLines[i_matrixToAdd][JSON.stringify(line.titles)];
                matrix.lines[ind].cells = matrix.lines[ind].cells.concat(lineToAdd);
            });
            for (var key in matrixToAdd.vars){
                matrix.vars[key] = matrixToAdd.vars[key];
            }
        }
    });
    return matrix;
}

Tabulator.prototype.matrixJoin.captionSeparator = ', ';

return Tabulator;

});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function codenautasModuleDefinition(root, name, factory) {
    /* global define */
    /* istanbul ignore next */
    if(typeof root.globalModuleName !== 'string'){
        root.globalModuleName = name;
    }
    /* istanbul ignore next */
    if(true){
        module.exports = factory();
    }else if(typeof define === 'function' && define.amd){
        define(factory);
    }else if(typeof exports === 'object'){
        exports[root.globalModuleName] = factory();
    }else{
        root[root.globalModuleName] = factory();
    }
    root.globalModuleName = null;
})(/*jshint -W040 */this, 'likeAr', function() {
/*jshint +W040 */

/*jshint -W004 */
var likeAr = {};
/*jshint +W004 */

function AdaptWithArrayMethods(objectData, objectBase){
    Object.defineProperty(objectData, '_object', { value: objectBase||objectData});
}

var ObjectWithArrayMethodsNonOptimized = function anonymous(o){
    AdaptWithArrayMethods(this, o);
};

var ObjectWithArrayMethodsOptimized = function anonymous(o){
    AdaptWithArrayMethods(this, o);
};

function id(x){ return x; }

likeAr = function object2Array(o){
    return new ObjectWithArrayMethodsOptimized(o);
};

likeAr.nonOptimized = function object2Array(o){
    return new ObjectWithArrayMethodsNonOptimized(o);
};

ObjectWithArrayMethodsOptimized.prototype.keys = function keys(){
    return Object.keys(this._object);
};

ObjectWithArrayMethodsOptimized.prototype.array = function array(){
    var oThis=this._object;
    if(typeof Object.values === 'function'){
        return Object.values(oThis);
    }
    var arr = [];
    for(var attr in oThis){ if(oThis.hasOwnProperty(attr)){
        arr.push(oThis[attr]);
    }}
    return arr;
};

ObjectWithArrayMethodsOptimized.prototype.join = function join(separator){
    return this.array().join(separator);
};

function ArrayAndKeys2Object(result, keys){ 
    var adapted = {};
    keys.forEach(function(arrayKey, arrayIndex){
        adapted[arrayKey]=result[arrayIndex];
    });
    return adapted;
} 

ObjectWithArrayMethodsOptimized.prototype.plain = function plain(){
    var o = {};
    likeAr(this).forEach(function(value, key){
        o[key]=value;
    });
    return o;
}

function Argument3Adapt(__,___,x){ return x; }

[
    {name:'forEach'},
    {name:'map'     , resultAdapt: Argument3Adapt, stepAdapt:function(x, v, n, a){ a[n]=x;        }},
    {name:'filter'  , resultAdapt: Argument3Adapt, stepAdapt:function(x, v, n, a){ if(x){a[n]=v;} }},
    {name:'join'    , useOptimized: true },
    {name:'array'   , useOptimized: true },
    {name:'keys'    , useOptimized: true },
    {name:'plain'   , useOptimized: true },
].forEach(function(method){
    ObjectWithArrayMethodsNonOptimized.prototype[method.name] = method.useOptimized ?
    ObjectWithArrayMethodsOptimized.prototype[method.name] :
    function (f, fThis){
        var oThis=this._object;
        var keys=Object.keys(oThis);
        var acumulator=likeAr.nonOptimized();
        var result=keys[method.name](function(arrayKey, arrayIndex){
            var arrayValue=oThis[arrayKey];
            return (method.stepAdapt||id)(
                typeof f === "function" ? f.call(fThis, arrayValue, arrayKey, oThis) : f, 
                arrayValue, arrayKey, acumulator
            );
        }, fThis);
        return (method.resultAdapt||id)(result, keys, acumulator);
    };
});

ObjectWithArrayMethodsOptimized.prototype.forEach = function forEach(f, fThis){
    var oThis=this._object;
    for(var attr in oThis){ if(oThis.hasOwnProperty(attr)){
        f.call(fThis, oThis[attr], attr, oThis);
    }}
};

ObjectWithArrayMethodsOptimized.prototype.map = function map(f, fThis){
    var oThis=this._object;
    var acumulator = likeAr();
    for(var attr in oThis){ if(oThis.hasOwnProperty(attr)){
        acumulator[attr] = f.call(fThis, oThis[attr], attr, oThis);
    }}
    return acumulator;
};

ObjectWithArrayMethodsOptimized.prototype.filter = function filter(f, fThis){
    var oThis=this._object;
    var acumulator = likeAr();
    for(var attr in oThis){ if(oThis.hasOwnProperty(attr)){
        var value = oThis[attr];
        if(f.call(fThis, value, attr, oThis)){
            acumulator[attr] = value;
        }
    }}
    return acumulator;
};

return likeAr;

});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*jshint eqnull:true */
/*jshint node:true */

(function codenautasModuleDefinition(root, name, factory) {
    /* global define */
    /* istanbul ignore next */
    if(typeof root.globalModuleName !== 'string'){
        root.globalModuleName = name;
    }
    /* istanbul ignore next */
    if(true){
        module.exports = factory();
    }else if(typeof define === 'function' && define.amd){
        define(factory);
    }else if(typeof exports === 'object'){
        exports[root.globalModuleName] = factory();
    }else{
        root[root.globalModuleName] = factory();
    }
    root.globalModuleName = null;
})(/*jshint -W040 */this, 'jsToHtml', function() {
/*jshint +W040 */

/*jshint -W004 */
var jsToHtml = {};
/*jshint +W004 */

/* global document */

function isPlainObject(x){
    return typeof x==="object" && x && x.constructor === Object;
}

function spaces(n){
    return new Array(n+1).join(' ');
}

var htmlReservedSymbols={
    '&' :'&amp;',
    '<' :'&lt;',
    '>' :'&gt;',
    "'" :'&#39;',
    '"' :'&quot;'
};

jsToHtml.html={
    mandatoryTitle:true
};

function escapeChar(simpleText){
    simpleText=''+simpleText;
    return /[&<>'"]/.test(simpleText)?simpleText.replace(/[&<>'"]/g,function(c){ return htmlReservedSymbols[c]; }):simpleText;
}

jsToHtml.couldDirectTextContent=function couldDirectTextContent(x){
    return typeof x==="string" || typeof x==="number";
};

function identity(x){ return x; }

var validDirectProperties={
    textNode:{
        className:'HtmlTextNode',
        properties:{
            textNode:{
                checks:[
                    {check:function(x){ return x!=null;}, text:"textNodes must not contains null"}, 
                    {check:jsToHtml.couldDirectTextContent, text:"must be string or number"}
                ], 
                transform:function(x){ return typeof x==="string" || x==null?x:''+x; }
            }
        }
    },
    tagName:{
        className:'Html',
        properties:{
            tagName:   {checks:[
                {check:function(x){ return typeof x==="string"; }, text:"must be a string"},
                {check:function(x){
                    if(!jsToHtml.htmlTags[x]){ 
                        throw new Error("jsToHtml.Html error: directObject tagName "+x+" not exists");
                    } 
                    return true;
                }}  
            ]},
            attributes:{checks:[
                {check:function(attributes){ return isPlainObject(attributes); }, text:"must be a plain Object"},
                {check:function(attributes){
                    /*jshint forin:false */
                    for(var attrName in attributes){
                        /*jshint forin:true */
                        var attrValue=attributes[attrName];
                        if(attrValue==null){
                            throw new Error('js-to-html: attributes must not contain null value');
                        }
                        if((attrName in jsToHtml.htmlAttributes) && (jsToHtml.htmlAttributes[attrName].rejectSpaces)){
                            var pattWhiteSpaces=new RegExp( "\\s");
                            if(pattWhiteSpaces.test(attrValue)){   
                                throw new Error('js-to-html: ' + attrName + 'class attribute could not contain spaces. Use classList attribute.');
                            }
                            if(attrValue instanceof Array){
                                attrValue = attrValue.join('');
                            }
                        }
                    }
                    return true;
                }},
                {check:function(attributes, o){  
                    /*jshint forin:false */
                    for(var attrName in attributes){
                        /*jshint forin:true */
                        var attrInfo=jsToHtml.htmlAttributes[attrName];
                        if(/-/.test(attrName)){
                        }else if(!attrInfo){
                            throw new Error("inexistent attribute "+JSON.stringify(attrName));
                        }else{
                            if(!attrInfo.tags[o.tagName] && !attrInfo.tags["HTML elements"]){
                                throw new Error("attribute "+JSON.stringify(attrName)+" does not match with tagName "+JSON.stringify(o.tagName)+"");
                            }
                        }
                    }
                    return true;
                }}
            ]},
            content:{checks:[
                {check:function(x){ return typeof x==="object" && x instanceof Array; }, text:"must be an Array"},
                {check:function(x,o){ return !jsToHtml.htmlTags[o.tagName]["void"] || !x.length; }, text:"void elements must not have content"}
            ]},
        }
    },
    htmlCode:{
        className:'HtmlDirectNode',
        properties:{
            htmlCode:{
                checks:[
                    {check:function(x){ return x!=null;}, text:"htmlCode must not contains null"}, 
                    {check:function(x){ return typeof x == "string"; }, text:"htmlCode must be a string"},
                    {check:function(){ return jsToHtml.html.insecureModeEnabled; }, text:"insecure functions not allowed"},
                    {check:function(x,o){ return o.validator(x); }, text:"invalid htmlCode"}
                ]
            },
            validator:{
                checks:[
                    {check:function(x){ return x instanceof Function; }, text: "validator must be a function"}
                ]
            }
        },
    },
    commentText:{
        className:'HtmlComment',
        properties:{
            commentText:{
                checks:[
                    {check:function(x){ return typeof x == "string"; }, text:"commentText must be a string"},
                    {check:function(x){ return !/-->/.test(x);}, text:"invalid text in comment"}
                ]
            }
        },
    }
};

function HtmlBase(directObject, validProperties){
    /*jshint forin:false */
    for(var property in validProperties){
        /*jshint forin:true */
        var propertyDef=validProperties[property];
        var value=(propertyDef.transform||identity)(directObject[property]);
        if(!(property in directObject)){
            throw new Error('jsToHtml.Html error: directObject must include '+property);
        }
        for(var c=0; c<propertyDef.checks.length; c++){
            var check=propertyDef.checks[c];
            if(!check.check(value, directObject)){
                throw new Error('jsToHtml.Html error: directObject '+property+' '+check.text);
            }
        }
        this[property]=value;
    }
    /*jshint forin:false */
    for(property in directObject){
        /*jshint forin:true */
        if(!(property in validProperties)){
            throw new Error('jsToHtml.Html error: directObject not recognized '+property+' property');
        }
    }
}

jsToHtml.Html=function Html(directObject){
    HtmlBase.call(this, directObject, validDirectProperties.tagName.properties);
};
jsToHtml.Html.prototype = Object.create(HtmlBase.prototype);

jsToHtml.HtmlTextNode=function HtmlTextNode(directObject){
    HtmlBase.call(this, directObject, validDirectProperties.textNode.properties);
};
jsToHtml.HtmlTextNode.prototype = Object.create(HtmlBase.prototype);

jsToHtml.HtmlDirectNode=function HtmlDirectNode(directObject){
    HtmlBase.call(this, directObject, validDirectProperties.htmlCode.properties);
};
jsToHtml.HtmlDirectNode.prototype = Object.create(HtmlBase.prototype);

jsToHtml.HtmlComment=function HtmlComment(directObject){
    HtmlBase.call(this, directObject, validDirectProperties.commentText.properties);
};
jsToHtml.HtmlComment.prototype = Object.create(HtmlBase.prototype);

HtmlBase.prototype.attributesToHtmlText=function attributesToHtmlText(){
    var pattNonWordChar=new RegExp(/\W/);
    return Object.keys(this.attributes).map(function(attrName){
        var attrVal=this.attributes[attrName];
        var textAttrVal=attrVal;
        var attrDefinition=jsToHtml.htmlAttributes[attrName] || {};
        if(attrDefinition.listName && typeof attrVal!=="string"){
            textAttrVal=attrVal.join(' ');
        } 
        var escapedAttrVal=escapeChar(textAttrVal);
        var quotingAttrVal=textAttrVal===''||pattNonWordChar.test(textAttrVal)?'\''+escapedAttrVal+'\'':escapedAttrVal;
        return ' '+attrName+'='+quotingAttrVal;
    },this).join('');
};

function internalArrayToHtmlText(listOfObjects, opts, recurseOpts){
    return listOfObjects.map(function(node){
        return node.toHtmlText(opts,recurseOpts);
    }).join('');
}

jsToHtml.arrayToHtmlText = function arrayToHtmlText(listOfObjects, opts, recurseOpts){
    recurseOpts=recurseOpts||{margin:0};
    return listOfObjects.map(function(node){
        return (typeof node === "string"?jsToHtml.html._text(node):node).toHtmlText(opts,recurseOpts);
    }).join('');
};

HtmlBase.prototype.contentToHtmlText=function contentToHtmlText(opts,recurseOpts){
    return internalArrayToHtmlText(this.content,opts,{margin:recurseOpts.margin+2});
};

HtmlBase.prototype.toHtmlDoc=function toHtmlDoc(opts,recurseOpts){
    opts = opts||{};
    var html = jsToHtml.html;
    var target=this;
    if(!opts.incomplete){
        var source=this;
        var head;
        if(source.tagName==='html'){
            target=source;
        }else{
            target=html.html([source]);
        }
        if(!target.content.length){
            target.content.push(html.body());
        }
        if(target.content[0].tagName==='head'){
            head=target.content[0];
        }else{
            head=html.head();
            target.content.unshift(head);
        }
        if(target.content[1].tagName!=='body'){
            target.content.shift();
            // var body=html.body([target.content[0]]);
            var body=html.body(target.content);
            target.content=[head, body];
        }
        var titles=head.content.filter(function(element){
            return element.tagName==='title';
        });
        if(titles.length>1){
            throw new Error("toHtmlDoc ERROR: multiple title");
        }else if(titles.length==1){
            if(opts.title){
                throw new Error("toHtmlDoc ERROR: double title");
            }
        }else{
            var titleText = opts.title||html.defaultTitle;
            if(titleText){
                head.content.unshift(html.title(titleText));
            }else if(jsToHtml.html.mandatoryTitle){
                throw new Error("toHtmlDoc ERROR: missing mandatory title");
            }
        }
    }
    return '<!doctype html>\n'+target.toHtmlText(opts,recurseOpts);
};
/* istanbul ignore next */
HtmlBase.prototype.toHtmlText=function toHtmlText(/*opts,recurseOpts*/){
    throw new Error('must implement toHtmlText');
};

jsToHtml.Html.prototype.toHtmlText=function toHtmlText(opts,recurseOpts){
    opts=opts||{};
    recurseOpts=recurseOpts||{};
    recurseOpts.margin=recurseOpts.margin||0;
    var tagInfo=jsToHtml.htmlTags[this.tagName];
    var tagInfoFirstChild=jsToHtml.htmlTags[(this.content[0]||{}).tagName]||{};
    var isvoidTag=tagInfo["void"]||false;
    var inlineBlock=((tagInfo.display||'inline')==='inline');
    var firstChildInline=(tagInfoFirstChild.display||'inline')!=='inline';
    var nl=(opts.pretty && !inlineBlock?'\n':'');
    var sp=(opts.pretty && !inlineBlock?spaces:function(){return ''; });
    return sp(recurseOpts.margin)+"<"+
        this.tagName+
        this.attributesToHtmlText()+
        ">"+(firstChildInline?nl:'')+
        this.contentToHtmlText(opts,recurseOpts)+
        (firstChildInline?sp(recurseOpts.margin):'')+
        (isvoidTag?'':"</"+this.tagName+">")+nl;

};

jsToHtml.HtmlTextNode.prototype.toHtmlText=function toHtmlText(/*opts,recurseOpts*/){
    return escapeChar(this.textNode);
};

jsToHtml.HtmlDirectNode.prototype.toHtmlText=function toHtmlText(/*opts,recurseOpts*/){
    return this.htmlCode;
};

jsToHtml.HtmlComment.prototype.toHtmlText=function toHtmlText(/*opts,recurseOpts*/){
    return "<!--"+this.commentText+"-->";
};

jsToHtml.direct=function direct(directObject){
    for(var mainAttr in validDirectProperties){
        if(mainAttr in directObject){
            return new jsToHtml[validDirectProperties[mainAttr].className](directObject);
        }
    }
    throw new Error('js-to-html.direct error: invalid arguments to direct function');
};

jsToHtml.indirect=function indirect(tagName,contentOrAttributes,contentIfThereAreAttributes){
    var thereAreAttributes=isPlainObject(contentOrAttributes);
    if(!thereAreAttributes && contentOrAttributes instanceof Object && !(contentOrAttributes instanceof Array)){
        throw new Error('jsToHtml.'+tagName+' expects plain object of attributes or array of content');
    }
    var attributes = thereAreAttributes?contentOrAttributes:{};
    var content    = thereAreAttributes?contentIfThereAreAttributes:contentOrAttributes;
    if(!thereAreAttributes && (arguments.length>3 || contentIfThereAreAttributes != null)){
        throw new Error('jsToHtml.'+tagName+' ERROR: the first parameter is not an attribute object then must there no be a second parameter');
    }
    return jsToHtml.direct({
        tagName:tagName,
        attributes:attributes,
        content:(content instanceof Array?content:[content]).filter(function(element){
            return element!==null && element!==undefined;
        }).map(function(element){
            return jsToHtml.couldDirectTextContent(element)?jsToHtml.direct({textNode:element}):element;
        })
    });
};

// https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
jsToHtml.htmlTags={
    "a"            :{type:'HTML4', description:"Defines a hyperlink"},
    "abbr"         :{type:'HTML4', description:"Defines an abbreviation"},
    "acronym"      :{type:'HTML4', description:"Not supported in HTML5. Defines an acronym"},
    "address"      :{type:'HTML4', description:"Defines contact information for the author/owner of a document"},
    "applet"       :{type:'HTML4', description:"Not supported in HTML5. Deprecated in HTML 4.01. Defines an embedded applet"},
    "area"         :{type:'HTML4', "void":true, description:"Defines an area inside an image-map"},
    "article"      :{type:'HTML5', description:"Defines an article"},
    "aside"        :{type:'HTML5', description:"Defines content aside from the page content"},
    "audio"        :{type:'HTML5', description:"Defines sound content"},
    "b"            :{type:'HTML4', description:"Defines bold text"},
    "base"         :{type:'HTML4', "void":true, description:"Specifies the base URL/target for all relative URLs in a document"},
    "basefont"     :{type:'HTML4', description:"Not supported in HTML5. Deprecated in HTML 4.01. Specifies a default color, size, and font for all text in a document"},
    "bdi"          :{type:'HTML5', description:"Isolates a part of text that might be formatted in a different direction from other text outside it"},
    "bdo"          :{type:'HTML4', description:"Overrides the current text direction"},
    "big"          :{type:'HTML4', description:"Not supported in HTML5. Defines big text"},
    "blockquote"   :{type:'HTML4', description:"Defines a section that is quoted from another source"},
    "body"         :{type:'HTML4', description:"Defines the document's body"},
    "br"           :{type:'HTML4', "void":true, description:"Defines a single line break"},
    "button"       :{type:'HTML4', description:"Defines a clickable button"},
    "canvas"       :{type:'HTML5', description:"Used to draw graphics, on the fly, via scripting (usually JavaScript)"},
    "caption"      :{type:'HTML4', display:'not-inline', description:"Defines a table caption"},
    "center"       :{type:'HTML4', description:"Not supported in HTML5. Deprecated in HTML 4.01. Defines centered text"},
    "cite"         :{type:'HTML4', description:"Defines the title of a work"},
    "code"         :{type:'HTML4', description:"Defines a piece of computer code"},
    "col"          :{type:'HTML4', display:'not-inline', "void":true, description:"Specifies column properties for each column within a <colgroup> element "},
    "colgroup"     :{type:'HTML4', display:'not-inline', description:"Specifies a group of one or more columns in a table for formatting"},
    "command"      :{type:'HTML5', "void":true, description:"Defines a command button that a user can invoke"},
    "datalist"     :{type:'HTML5', description:"Specifies a list of pre-defined options for input controls"},
    "dd"           :{type:'HTML4', description:"Defines a description of an item in a definition list"},
    "del"          :{type:'HTML4', description:"Defines text that has been deleted from a document"},
    "details"      :{type:'HTML5', description:"Defines additional details that the user can view or hide"},
    "dfn"          :{type:'HTML4', description:"Defines a definition term"},
    "dialog"       :{type:'HTML5', description:"Defines a dialog box or window"},
    "dir"          :{type:'HTML4', description:"Not supported in HTML5. Deprecated in HTML 4.01. Defines a directory list"},
    "div"          :{type:'HTML4', display:'block', description:"Defines a section in a document"},
    "dl"           :{type:'HTML4', description:"Defines a definition list"},
    "dt"           :{type:'HTML4', description:"Defines a term (an item) in a definition list"},
    "em"           :{type:'HTML4', description:"Defines emphasized text "},
    "embed"        :{type:'HTML5', "void":true, description:"Defines a container for an external (non-HTML) application"},
    "fieldset"     :{type:'HTML4', description:"Groups related elements in a form"},
    "figcaption"   :{type:'HTML5', description:"Defines a caption for a <figure> element"},
    "figure"       :{type:'HTML5', description:"Specifies self-contained content"},
    "font"         :{type:'HTML4', description:"Not supported in HTML5. Deprecated in HTML 4.01. Defines font, color, and size for text"},
    "footer"       :{type:'HTML5', description:"Defines a footer for a document or section"},
    "form"         :{type:'HTML4', description:"Defines an HTML form for user input"},
    "frame"        :{type:'HTML4', description:"Not supported in HTML5. Defines a window (a frame) in a frameset"},
    "frameset"     :{type:'HTML4', description:"Not supported in HTML5. Defines a set of frames"},
    "h1"           :{type:'HTML4', display:'block', description:" Defines HTML headings level 1"},
    "h2"           :{type:'HTML4', display:'block', description:" Defines HTML headings level 2"},
    "h3"           :{type:'HTML4', display:'block', description:" Defines HTML headings level 3"},
    "h4"           :{type:'HTML4', display:'block', description:" Defines HTML headings level 4"},
    "h5"           :{type:'HTML4', display:'block', description:" Defines HTML headings level 5"},
    "h6"           :{type:'HTML4', display:'block', description:" Defines HTML headings level 6"},
    "head"         :{type:'HTML4', description:"Defines information about the document"},
    "header"       :{type:'HTML5', description:"Defines a header for a document or section"},
    "hgroup"       :{type:'HTML5', description:"Groups heading ( <h1> to <h6>) elements"},
    "hr"           :{type:'HTML4', "void":true, description:" Defines a thematic change in the content"},
    "html"         :{type:'HTML4', description:"Defines the root of an HTML document"},
    "i"            :{type:'HTML4', description:"Defines a part of text in an alternate voice or mood"},
    "iframe"       :{type:'HTML4', description:"Defines an inline frame"},
    "img"          :{type:'HTML4', "void":true, description:"Defines an image"},
    "input"        :{type:'HTML4', "void":true, description:"Defines an input control"},
    "ins"          :{type:'HTML4', description:"Defines a text that has been inserted into a document"},
    "kbd"          :{type:'HTML4', description:"Defines keyboard input"},
    "keygen"       :{type:'HTML5', description:"Defines a key-pair generator field (for forms)"},
    "label"        :{type:'HTML4', description:"Defines a label for an <input> element"},
    "legend"       :{type:'HTML4', description:"Defines a caption for a <fieldset>, <figure>, or <details> element"},
    "li"           :{type:'HTML4', description:"Defines a list item"},
    "link"         :{type:'HTML4', "void":true, description:"Defines the relationship between a document and an external resource (most used to link to style sheets)"},
    "map"          :{type:'HTML4', description:"Defines a client-side image-map"},
    "mark"         :{type:'HTML5', description:"Defines marked/highlighted text"},
    "menu"         :{type:'HTML4', description:"Defines a list/menu of commands"},
    "meta"         :{type:'HTML4', "void":true, description:"Defines metadata about an HTML document"},
    "meter"        :{type:'HTML5', description:"Defines a scalar measurement within a known range (a gauge)"},
    "nav"          :{type:'HTML5', description:"Defines navigation links"},
    "noframes"     :{type:'HTML4', description:"Not supported in HTML5. Defines an alternate content for users that do not support frames"},
    "noscript"     :{type:'HTML4', description:"Defines an alternate content for users that do not support client-side scripts"},
    "object"       :{type:'HTML4', description:"Defines an embedded object"},
    "ol"           :{type:'HTML4', description:"Defines an ordered list"},
    "optgroup"     :{type:'HTML4', description:"Defines a group of related options in a drop-down list"},
    "option"       :{type:'HTML4', description:"Defines an option in a drop-down list"},
    "output"       :{type:'HTML5', description:"Defines the result of a calculation"},
    "p"            :{type:'HTML4', display:'block', description:"Defines a paragraph"},
    "param"        :{type:'HTML4', "void":true, description:"Defines a parameter for an object"},
    "pre"          :{type:'HTML4', description:"Defines preformatted text"},
    "progress"     :{type:'HTML5', description:"Represents the progress of a task"},
    "q"            :{type:'HTML4', description:"Defines a short quotation"},
    "rp"           :{type:'HTML5', description:"Defines what to show in browsers that do not support ruby annotations"},
    "rt"           :{type:'HTML5', description:"Defines an explanation/pronunciation of characters (for East Asian typography)"},
    "ruby"         :{type:'HTML5', description:"Defines a ruby annotation (for East Asian typography)"},
    "s"            :{type:'HTML4', description:"Defines text that is no longer correct"},
    "samp"         :{type:'HTML4', description:"Defines sample output from a computer program"},
    "script"       :{type:'HTML4', description:"Defines a client-side script"},
    "section"      :{type:'HTML5', description:"Defines a section in a document"},
    "select"       :{type:'HTML4', description:"Defines a drop-down list"},
    "small"        :{type:'HTML4', description:"Defines smaller text"},
    "source"       :{type:'HTML5', "void":true, description:"Defines multiple media resources for media elements (<video> and <audio>)"},
    "span"         :{type:'HTML4', description:"Defines a section in a document"},
    "strike"       :{type:'HTML4', description:"Not supported in HTML5. Deprecated in HTML 4.01. Defines strikethrough text"},
    "strong"       :{type:'HTML4', description:"Defines important text"},
    "style"        :{type:'HTML4', description:"Defines style information for a document"},
    "sub"          :{type:'HTML4', description:"Defines subscripted text"},
    "summary"      :{type:'HTML5', description:"Defines a visible heading for a <details> element"},
    "sup"          :{type:'HTML4', description:"Defines superscripted text"},
    "table"        :{type:'HTML4', display:'not-inline', description:"Defines a table"},
    "tbody"        :{type:'HTML4', display:'not-inline', description:"Groups the body content in a table"},
    "td"           :{type:'HTML4', display:'not-inline', description:"Defines a cell in a table"},
    "textarea"     :{type:'HTML4', description:"Defines a multiline input control (text area)"},
    "tfoot"        :{type:'HTML4', display:'not-inline', description:"Groups the footer content in a table"},
    "th"           :{type:'HTML4', display:'not-inline', description:"Defines a header cell in a table"},
    "thead"        :{type:'HTML4', display:'not-inline', description:"Groups the header content in a table"},
    "time"         :{type:'HTML5', description:"Defines a date/time"},
    "title"        :{type:'HTML4', description:"Defines a title for the document"},
    "tr"           :{type:'HTML4', display:'not-inline', description:"Defines a row in a table"},
    "track"        :{type:'HTML5', description:"Defines text tracks for media elements (<video> and <audio>)"},
    "tt"           :{type:'HTML4', description:"Not supported in HTML5. Defines teletype text"},
    "u"            :{type:'HTML4', description:"Defines text that should be stylistically different from normal text"},
    "ul"           :{type:'HTML4', description:"Defines an unordered list"},
    "var"          :{type:'HTML4', description:"Defines a variable"},
    "video"        :{type:'HTML5', description:"Defines a video or movie"},
    "wbr"          :{type:'HTML5', description:"Defines a possible line-break"}
};

//
// generated by generators/attributes.js
jsToHtml.htmlAttributes={
    "abbr": {
        "tags": {
            "th": {"description": "Alternative label to use for the header cell when referencing the cell in other contexts","value": "Text*"}
        },
        "idl": "abbr"
    },
    "accept": {
        "tags": {
            "input": {"description": "Hint for expected file type in file upload controls","value": "Set of comma-separated tokens* consisting of valid MIME types with no parameters or audio/*, video/*, or image/*"}
        },
        "idl": "accept"
    },
    "accept-charset": {
        "tags": {
            "form": {"description": "Character encodings to use for form submission","value": "Ordered set of unique space-separated tokens, ASCII case-insensitive, consisting of labels of ASCII-compatible encodings*"}
        },
        "idl": "accept-charset"
    },
    "accesskey": {
        "tags": {
            "HTML elements": {"description": "Keyboard shortcut to activate or focus element","value": "Ordered set of unique space-separated tokens, case-sensitive, consisting of one Unicode code point in length"}
        },
        "idl": "accessKey"
    },
    "action": {
        "tags": {
            "form": {"description": "URL to use for form submission","value": "Valid non-empty URL potentially surrounded by spaces"}
        },
        "idl": "action"
    },
    "allowfullscreen": {
        "tags": {
            "iframe": {"description": "Whether to allow the iframe's contents to use requestFullscreen()","value": "Boolean attribute"}
        },
        "idl": "allowfullscreen"
    },
    "alt": {
        "tags": {
            "area": {"description": "Replacement text for use when images are not available","value": "Text*"},
            "img": {"description": "Replacement text for use when images are not available","value": "Text*"},
            "input": {"description": "Replacement text for use when images are not available","value": "Text*"}
        },
        "idl": "alt"
    },
    "async": {
        "tags": {
            "script": {"description": "Execute script when available, without blocking","value": "Boolean attribute"}
        },
        "idl": "async"
    },
    "autocomplete": {
        "tags": {
            "form": {"description": "Default setting for autofill feature for controls in the form","value": "\"on\"; \"off\""},
            "input": {"description": "Hint for form autofill feature","value": "Autofill field name and related tokens*"},
            "select": {"description": "Hint for form autofill feature","value": "Autofill field name and related tokens*"},
            "textarea": {"description": "Hint for form autofill feature","value": "Autofill field name and related tokens*"}
        },
        "idl": "autocomplete"
    },
    "autofocus": {
        "tags": {
            "button": {"description": "Automatically focus the form control when the page is loaded","value": "Boolean attribute"},
            "input": {"description": "Automatically focus the form control when the page is loaded","value": "Boolean attribute"},
            "keygen": {"description": "Automatically focus the form control when the page is loaded","value": "Boolean attribute"},
            "select": {"description": "Automatically focus the form control when the page is loaded","value": "Boolean attribute"},
            "textarea": {"description": "Automatically focus the form control when the page is loaded","value": "Boolean attribute"}
        },
        "idl": "autofocus"
    },
    "autoplay": {
        "tags": {
            "audio": {"description": "Hint that the media resource can be started automatically when the page is loaded","value": "Boolean attribute"},
            "video": {"description": "Hint that the media resource can be started automatically when the page is loaded","value": "Boolean attribute"}
        },
        "idl": "autoplay"
    },
    "challenge": {
        "tags": {
            "keygen": {"description": "String to package with the generated and signed public key","value": "Text"}
        },
        "idl": "challenge"
    },
    "charset": {
        "tags": {
            "meta": {"description": "Character encoding declaration","value": "Encoding label*"},
            "script": {"description": "Character encoding of the external script resource","value": "Encoding label*"}
        },
        "idl": "charset"
    },
    "checked": {
        "tags": {
            "menuitem": {"description": "Whether the command or control is checked","value": "Boolean attribute"},
            "input": {"description": "Whether the command or control is checked","value": "Boolean attribute"}
        },
        "idl": "defaultChecked"
    },
    "cite": {
        "tags": {
            "blockquote": {"description": "Link to the source of the quotation or more information about the edit","value": "Valid URL potentially surrounded by spaces"},
            "del": {"description": "Link to the source of the quotation or more information about the edit","value": "Valid URL potentially surrounded by spaces"},
            "ins": {"description": "Link to the source of the quotation or more information about the edit","value": "Valid URL potentially surrounded by spaces"},
            "q": {"description": "Link to the source of the quotation or more information about the edit","value": "Valid URL potentially surrounded by spaces"}
        },
        "idl": "cite"
    },
    "class": {
        "tags": {
            "HTML elements": {"description": "Classes to which the element belongs","value": "Set of space-separated tokens"}
        },
        "idl": "className",
        "rejectSpaces": true,
        "listName": "classList",
        "reserved": true
    },
    "cols": {
        "tags": {
            "textarea": {"description": "Maximum number of characters per line","value": "Valid non-negative integer greater than zero"}
        },
        "idl": "cols"
    },
    "colspan": {
        "tags": {
            "td": {"description": "Number of columns that the cell is to span","value": "Valid non-negative integer greater than zero"},
            "th": {"description": "Number of columns that the cell is to span","value": "Valid non-negative integer greater than zero"}
        },
        "idl": "colSpan"
    },
    "content": {
        "tags": {
            "meta": {"description": "Value of the element","value": "Text*"}
        },
        "idl": "content"
    },
    "contenteditable": {
        "tags": {
            "HTML elements": {"description": "Whether the element is editable","value": "\"true\"; \"false\""}
        },
        "idl": "contenteditable"
    },
    "contextmenu": {
        "tags": {
            "HTML elements": {"description": "The element's context menu","value": "ID*"}
        },
        "idl": "contextmenu"
    },
    "controls": {
        "tags": {
            "audio": {"description": "Show user agent controls","value": "Boolean attribute"},
            "video": {"description": "Show user agent controls","value": "Boolean attribute"}
        },
        "idl": "controls"
    },
    "coords": {
        "tags": {
            "area": {"description": "Coordinates for the shape to be created in an image map","value": "Valid list of integers*"}
        },
        "idl": "coords"
    },
    "crossorigin": {
        "tags": {
            "audio": {"description": "How the element handles crossorigin requests","value": "\"anonymous\"; \"use-credentials\""},
            "img": {"description": "How the element handles crossorigin requests","value": "\"anonymous\"; \"use-credentials\""},
            "link": {"description": "How the element handles crossorigin requests","value": "\"anonymous\"; \"use-credentials\""},
            "script": {"description": "How the element handles crossorigin requests","value": "\"anonymous\"; \"use-credentials\""},
            "video": {"description": "How the element handles crossorigin requests","value": "\"anonymous\"; \"use-credentials\""}
        },
        "idl": "crossorigin"
    },
    "data": {
        "tags": {
            "object": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"}
        },
        "idl": "data"
    },
    "datetime": {
        "tags": {
            "del": {"description": "Date and (optionally) time of the change","value": "Valid date string with optional time"},
            "ins": {"description": "Date and (optionally) time of the change","value": "Valid date string with optional time"},
            "time": {"description": "Machine-readable value","value": "Valid month string, valid date string, valid yearless date string, valid time string, valid local date and time string, valid time-zone offset string, valid global date and time string, valid week string, valid non-negative integer, or valid duration string"}
        },
        "idl": "dateTime"
    },
    "default": {
        "tags": {
            "menuitem": {"description": "Mark the command as being a default command","value": "Boolean attribute"},
            "track": {"description": "Enable the track if no other text track is more suitable","value": "Boolean attribute"}
        },
        "idl": "default"
    },
    "defer": {
        "tags": {
            "script": {"description": "Defer script execution","value": "Boolean attribute"}
        },
        "idl": "defer"
    },
    "dir": {
        "tags": {
            "HTML elements": {"description": "The text directionality of the element","value": "\"ltr\"; \"rtl\"; \"auto\""},
            "bdo": {"description": "The text directionality of the element","value": "\"ltr\"; \"rtl\""}
        },
        "idl": "dir"
    },
    "dirname": {
        "tags": {
            "input": {"description": "Name of form field to use for sending the element's directionality in form submission","value": "Text*"},
            "textarea": {"description": "Name of form field to use for sending the element's directionality in form submission","value": "Text*"}
        },
        "idl": "dirname"
    },
    "disabled": {
        "tags": {
            "button": {"description": "Whether the form control is disabled","value": "Boolean attribute"},
            "menuitem": {"description": "Whether the form control is disabled","value": "Boolean attribute"},
            "fieldset": {"description": "Whether the form control is disabled","value": "Boolean attribute"},
            "input": {"description": "Whether the form control is disabled","value": "Boolean attribute"},
            "keygen": {"description": "Whether the form control is disabled","value": "Boolean attribute"},
            "optgroup": {"description": "Whether the form control is disabled","value": "Boolean attribute"},
            "option": {"description": "Whether the form control is disabled","value": "Boolean attribute"},
            "select": {"description": "Whether the form control is disabled","value": "Boolean attribute"},
            "textarea": {"description": "Whether the form control is disabled","value": "Boolean attribute"}
        },
        "idl": "disabled"
    },
    "download": {
        "tags": {
            "a": {"description": "Whether to download the resource instead of navigating to it, and its file name if so","value": "Text"},
            "area": {"description": "Whether to download the resource instead of navigating to it, and its file name if so","value": "Text"}
        },
        "idl": "download"
    },
    "draggable": {
        "tags": {
            "HTML elements": {"description": "Whether the element is draggable","value": "\"true\"; \"false\""}
        },
        "idl": "draggable"
    },
    "dropzone": {
        "tags": {
            "HTML elements": {"description": "Accepted item types for drag-and-drop","value": "Unordered set of unique space-separated tokens, ASCII case-insensitive, consisting of accepted types and drag feedback*"}
        },
        "idl": "dropzone"
    },
    "enctype": {
        "tags": {
            "form": {"description": "Form data set encoding type to use for form submission","value": "\"application/x-www-form-urlencoded\"; \"multipart/form-data\"; \"text/plain\""}
        },
        "idl": "enctype"
    },
    "for": {
        "tags": {
            "label": {"description": "Associate the label with form control","value": "ID*"},
            "output": {"description": "Specifies controls from which the output was calculated","value": "Unordered set of unique space-separated tokens, case-sensitive, consisting of IDs*"}
        },
        "idl": "htmlFor",
        "reserved": true
    },
    "form": {
        "tags": {
            "button": {"description": "Associates the control with a form element","value": "ID*"},
            "fieldset": {"description": "Associates the control with a form element","value": "ID*"},
            "input": {"description": "Associates the control with a form element","value": "ID*"},
            "keygen": {"description": "Associates the control with a form element","value": "ID*"},
            "label": {"description": "Associates the control with a form element","value": "ID*"},
            "object": {"description": "Associates the control with a form element","value": "ID*"},
            "output": {"description": "Associates the control with a form element","value": "ID*"},
            "select": {"description": "Associates the control with a form element","value": "ID*"},
            "textarea": {"description": "Associates the control with a form element","value": "ID*"}
        },
        "idl": "form"
    },
    "formaction": {
        "tags": {
            "button": {"description": "URL to use for form submission","value": "Valid non-empty URL potentially surrounded by spaces"},
            "input": {"description": "URL to use for form submission","value": "Valid non-empty URL potentially surrounded by spaces"}
        },
        "idl": "formaction"
    },
    "formenctype": {
        "tags": {
            "button": {"description": "Form data set encoding type to use for form submission","value": "\"application/x-www-form-urlencoded\"; \"multipart/form-data\"; \"text/plain\""},
            "input": {"description": "Form data set encoding type to use for form submission","value": "\"application/x-www-form-urlencoded\"; \"multipart/form-data\"; \"text/plain\""}
        },
        "idl": "formenctype"
    },
    "formmethod": {
        "tags": {
            "button": {"description": "HTTP method to use for form submission","value": "\"GET\"; \"POST\""},
            "input": {"description": "HTTP method to use for form submission","value": "\"GET\"; \"POST\""}
        },
        "idl": "formmethod"
    },
    "formnovalidate": {
        "tags": {
            "button": {"description": "Bypass form control validation for form submission","value": "Boolean attribute"},
            "input": {"description": "Bypass form control validation for form submission","value": "Boolean attribute"}
        },
        "idl": "formnovalidate"
    },
    "formtarget": {
        "tags": {
            "button": {"description": "Browsing context for form submission","value": "Valid browsing context name or keyword"},
            "input": {"description": "Browsing context for form submission","value": "Valid browsing context name or keyword"}
        },
        "idl": "formtarget"
    },
    "headers": {
        "tags": {
            "td": {"description": "The header cells for this cell","value": "Unordered set of unique space-separated tokens, case-sensitive, consisting of IDs*"},
            "th": {"description": "The header cells for this cell","value": "Unordered set of unique space-separated tokens, case-sensitive, consisting of IDs*"}
        },
        "idl": "headers"
    },
    "height": {
        "tags": {
            "canvas": {"description": "Vertical dimension","value": "Valid non-negative integer"},
            "embed": {"description": "Vertical dimension","value": "Valid non-negative integer"},
            "iframe": {"description": "Vertical dimension","value": "Valid non-negative integer"},
            "img": {"description": "Vertical dimension","value": "Valid non-negative integer"},
            "input": {"description": "Vertical dimension","value": "Valid non-negative integer"},
            "object": {"description": "Vertical dimension","value": "Valid non-negative integer"},
            "video": {"description": "Vertical dimension","value": "Valid non-negative integer"}
        },
        "idl": "height"
    },
    "hidden": {
        "tags": {
            "HTML elements": {"description": "Whether the element is relevant","value": "Boolean attribute"}
        },
        "idl": "hidden"
    },
    "high": {
        "tags": {
            "meter": {"description": "Low limit of high range","value": "Valid floating-point number*"}
        },
        "idl": "high"
    },
    "href": {
        "tags": {
            "a": {"description": "Address of the hyperlink","value": "Valid URL potentially surrounded by spaces"},
            "area": {"description": "Address of the hyperlink","value": "Valid URL potentially surrounded by spaces"},
            "link": {"description": "Address of the hyperlink","value": "Valid non-empty URL potentially surrounded by spaces"},
            "base": {"description": "Document base URL","value": "Valid URL potentially surrounded by spaces"}
        },
        "idl": "href"
    },
    "hreflang": {
        "tags": {
            "a": {"description": "Language of the linked resource","value": "Valid BCP 47 language tag"},
            "link": {"description": "Language of the linked resource","value": "Valid BCP 47 language tag"}
        },
        "idl": "hreflang"
    },
    "http-equiv": {
        "tags": {
            "meta": {"description": "Pragma directive","value": "Text*"}
        },
        "idl": "http-equiv"
    },
    "icon": {
        "tags": {
            "menuitem": {"description": "Icon for the command","value": "Valid non-empty URL potentially surrounded by spaces"}
        },
        "idl": "icon"
    },
    "id": {
        "tags": {
            "HTML elements": {"description": "The element's ID","value": "Text*"}
        },
        "idl": "id"
    },
    "inputmode": {
        "tags": {
            "input": {"description": "Hint for selecting an input modality","value": "\"verbatim\"; \"latin\"; \"latin-name\"; \"latin-prose\"; \"full-width-latin\"; \"kana\"; \"kana-name\"; \"katakana\"; \"numeric\"; \"tel\"; \"email\"; \"url\""},
            "textarea": {"description": "Hint for selecting an input modality","value": "\"verbatim\"; \"latin\"; \"latin-name\"; \"latin-prose\"; \"full-width-latin\"; \"kana\"; \"kana-name\"; \"katakana\"; \"numeric\"; \"tel\"; \"email\"; \"url\""}
        },
        "idl": "inputmode"
    },
    "ismap": {
        "tags": {
            "img": {"description": "Whether the image is a server-side image map","value": "Boolean attribute"}
        },
        "idl": "ismap"
    },
    "itemid": {
        "tags": {
            "HTML elements": {"description": "Global identifier for a microdata item","value": "Valid URL potentially surrounded by spaces"}
        },
        "idl": "itemid"
    },
    "itemprop": {
        "tags": {
            "HTML elements": {"description": "Property names of a microdata item","value": "Unordered set of unique space-separated tokens, case-sensitive, consisting of valid absolute URLs, defined property names, or text*"}
        },
        "idl": "itemprop"
    },
    "itemref": {
        "tags": {
            "HTML elements": {"description": "Referenced elements","value": "Unordered set of unique space-separated tokens, case-sensitive, consisting of IDs*"}
        },
        "idl": "itemref"
    },
    "itemscope": {
        "tags": {
            "HTML elements": {"description": "Introduces a microdata item","value": "Boolean attribute"}
        },
        "idl": "itemscope"
    },
    "itemtype": {
        "tags": {
            "HTML elements": {"description": "Item types of a microdata item","value": "Unordered set of unique space-separated tokens, case-sensitive, consisting of valid absolute URL*"}
        },
        "idl": "itemtype"
    },
    "keytype": {
        "tags": {
            "keygen": {"description": "The type of cryptographic key to generate","value": "Text*"}
        },
        "idl": "keytype"
    },
    "kind": {
        "tags": {
            "track": {"description": "The type of text track","value": "\"subtitles\"; \"captions\"; \"descriptions\"; \"chapters\"; \"metadata\""}
        },
        "idl": "kind"
    },
    "label": {
        "tags": {
            "menuitem": {"description": "User-visible label","value": "Text"},
            "menu": {"description": "User-visible label","value": "Text"},
            "optgroup": {"description": "User-visible label","value": "Text"},
            "option": {"description": "User-visible label","value": "Text"},
            "track": {"description": "User-visible label","value": "Text"}
        },
        "idl": "label"
    },
    "lang": {
        "tags": {
            "HTML elements": {"description": "Language of the element","value": "Valid BCP 47 language tag or the empty string"}
        },
        "idl": "lang"
    },
    "list": {
        "tags": {
            "input": {"description": "List of autocomplete options","value": "ID*"}
        },
        "idl": "list",
        "noProperty": true
    },
    "loop": {
        "tags": {
            "audio": {"description": "Whether to loop the media resource","value": "Boolean attribute"},
            "video": {"description": "Whether to loop the media resource","value": "Boolean attribute"}
        },
        "idl": "loop"
    },
    "low": {
        "tags": {
            "meter": {"description": "High limit of low range","value": "Valid floating-point number*"}
        },
        "idl": "low"
    },
    "manifest": {
        "tags": {
            "html": {"description": "Application cache manifest","value": "Valid non-empty URL potentially surrounded by spaces"}
        },
        "idl": "manifest"
    },
    "max": {
        "tags": {
            "input": {"description": "Maximum value","value": "Varies*"},
            "meter": {"description": "Upper bound of range","value": "Valid floating-point number*"},
            "progress": {"description": "Upper bound of range","value": "Valid floating-point number*"}
        },
        "idl": "max"
    },
    "maxlength": {
        "tags": {
            "input": {"description": "Maximum length of value","value": "Valid non-negative integer"},
            "textarea": {"description": "Maximum length of value","value": "Valid non-negative integer"}
        },
        "idl": "maxLength"
    },
    "media": {
        "tags": {
            "link": {"description": "Applicable media","value": "Valid media query list"},
            "style": {"description": "Applicable media","value": "Valid media query list"}
        },
        "idl": "media"
    },
    "mediagroup": {
        "tags": {
            "audio": {"description": "Groups media elements together with an implicit MediaController","value": "Text"},
            "video": {"description": "Groups media elements together with an implicit MediaController","value": "Text"}
        },
        "idl": "mediagroup"
    },
    "menu": {
        "tags": {
            "button": {"description": "Specifies the element's designated pop-up menu","value": "ID*"}
        },
        "idl": "menu"
    },
    "method": {
        "tags": {
            "form": {"description": "HTTP method to use for form submission","value": "\"GET\"; \"POST\"; \"dialog\""}
        },
        "idl": "method"
    },
    "min": {
        "tags": {
            "input": {"description": "Minimum value","value": "Varies*"},
            "meter": {"description": "Lower bound of range","value": "Valid floating-point number*"}
        },
        "idl": "min"
    },
    "minlength": {
        "tags": {
            "input": {"description": "Minimum length of value","value": "Valid non-negative integer"},
            "textarea": {"description": "Minimum length of value","value": "Valid non-negative integer"}
        },
        "idl": "minlength"
    },
    "multiple": {
        "tags": {
            "input": {"description": "Whether to allow multiple values","value": "Boolean attribute"},
            "select": {"description": "Whether to allow multiple values","value": "Boolean attribute"}
        },
        "idl": "multiple"
    },
    "muted": {
        "tags": {
            "audio": {"description": "Whether to mute the media resource by default","value": "Boolean attribute"},
            "video": {"description": "Whether to mute the media resource by default","value": "Boolean attribute"}
        },
        "idl": "muted"
    },
    "name": {
        "tags": {
            "button": {"description": "Name of form control to use for form submission and in the form.elements API","value": "Text*"},
            "fieldset": {"description": "Name of form control to use for form submission and in the form.elements API","value": "Text*"},
            "input": {"description": "Name of form control to use for form submission and in the form.elements API","value": "Text*"},
            "keygen": {"description": "Name of form control to use for form submission and in the form.elements API","value": "Text*"},
            "output": {"description": "Name of form control to use for form submission and in the form.elements API","value": "Text*"},
            "select": {"description": "Name of form control to use for form submission and in the form.elements API","value": "Text*"},
            "textarea": {"description": "Name of form control to use for form submission and in the form.elements API","value": "Text*"},
            "form": {"description": "Name of form to use in the document.forms API","value": "Text*"},
            "iframe": {"description": "Name of nested browsing context","value": "Valid browsing context name or keyword"},
            "object": {"description": "Name of nested browsing context","value": "Valid browsing context name or keyword"},
            "map": {"description": "Name of image map to reference from the usemap attribute","value": "Text*"},
            "meta": {"description": "Metadata name","value": "Text*"},
            "param": {"description": "Name of parameter","value": "Text"}
        },
        "idl": "name"
    },
    "nonce": {
        "tags": {
            "script": {"description": "Cryptographic nonce used in Content Security Policy checks [CSP]","value": "Text"},
            "style": {"description": "Cryptographic nonce used in Content Security Policy checks [CSP]","value": "Text"}
        },
        "idl": "nonce"
    },
    "novalidate": {
        "tags": {
            "form": {"description": "Bypass form control validation for form submission","value": "Boolean attribute"}
        },
        "idl": "novalidate"
    },
    "open": {
        "tags": {
            "details": {"description": "Whether the details are visible","value": "Boolean attribute"},
            "dialog": {"description": "Whether the dialog box is showing","value": "Boolean attribute"}
        },
        "idl": "open"
    },
    "optimum": {
        "tags": {
            "meter": {"description": "Optimum value in gauge","value": "Valid floating-point number*"}
        },
        "idl": "optimum"
    },
    "pattern": {
        "tags": {
            "input": {"description": "Pattern to be matched by the form control's value","value": "Regular expression matching the JavaScript Pattern production"}
        },
        "idl": "pattern"
    },
    "ping": {
        "tags": {
            "a": {"description": "URLs to ping","value": "Set of space-separated tokens consisting of valid non-empty URLs"},
            "area": {"description": "URLs to ping","value": "Set of space-separated tokens consisting of valid non-empty URLs"}
        },
        "idl": "ping"
    },
    "placeholder": {
        "tags": {
            "input": {"description": "User-visible label to be placed within the form control","value": "Text*"},
            "textarea": {"description": "User-visible label to be placed within the form control","value": "Text*"}
        },
        "idl": "placeholder"
    },
    "poster": {
        "tags": {
            "video": {"description": "Poster frame to show prior to video playback","value": "Valid non-empty URL potentially surrounded by spaces"}
        },
        "idl": "poster"
    },
    "preload": {
        "tags": {
            "audio": {"description": "Hints how much buffering the media resource will likely need","value": "\"none\"; \"metadata\"; \"auto\""},
            "video": {"description": "Hints how much buffering the media resource will likely need","value": "\"none\"; \"metadata\"; \"auto\""}
        },
        "idl": "preload"
    },
    "radiogroup": {
        "tags": {
            "menuitem": {"description": "Name of group of commands to treat as a radio button group","value": "Text"}
        },
        "idl": "radiogroup"
    },
    "readonly": {
        "tags": {
            "input": {"description": "Whether to allow the value to be edited by the user","value": "Boolean attribute"},
            "textarea": {"description": "Whether to allow the value to be edited by the user","value": "Boolean attribute"}
        },
        "idl": "readOnly"
    },
    "rel": {
        "tags": {
            "a": {"description": "Relationship between the document containing the hyperlink and the destination resource","value": "Set of space-separated tokens*"},
            "area": {"description": "Relationship between the document containing the hyperlink and the destination resource","value": "Set of space-separated tokens*"},
            "link": {"description": "Relationship between the document containing the hyperlink and the destination resource","value": "Set of space-separated tokens*"}
        },
        "idl": "rel"
    },
    "required": {
        "tags": {
            "input": {"description": "Whether the control is required for form submission","value": "Boolean attribute"},
            "select": {"description": "Whether the control is required for form submission","value": "Boolean attribute"},
            "textarea": {"description": "Whether the control is required for form submission","value": "Boolean attribute"}
        },
        "idl": "required"
    },
    "reversed": {
        "tags": {
            "ol": {"description": "Number the list backwards","value": "Boolean attribute"}
        },
        "idl": "reversed"
    },
    "rows": {
        "tags": {
            "textarea": {"description": "Number of lines to show","value": "Valid non-negative integer greater than zero"}
        },
        "idl": "rows"
    },
    "rowspan": {
        "tags": {
            "td": {"description": "Number of rows that the cell is to span","value": "Valid non-negative integer"},
            "th": {"description": "Number of rows that the cell is to span","value": "Valid non-negative integer"}
        },
        "idl": "rowSpan"
    },
    "sandbox": {
        "tags": {
            "iframe": {"description": "Security rules for nested content","value": "Unordered set of unique space-separated tokens, ASCII case-insensitive, consisting of \"allow-forms\", \"allow-modals\", \"allow-pointer-lock\", \"allow-popups\", \"allow-popups-to-escape-sandbox\", \"allow-same-origin\", \"allow-scripts and \"allow-top-navigation\""}
        },
        "idl": "sandbox"
    },
    "spellcheck": {
        "tags": {
            "HTML elements": {"description": "Whether the element is to have its spelling and grammar checked","value": "\"true\"; \"false\""}
        },
        "idl": "spellcheck"
    },
    "scope": {
        "tags": {
            "th": {"description": "Specifies which cells the header cell applies to","value": "\"row\"; \"col\"; \"rowgroup\"; \"colgroup\""}
        },
        "idl": "scope"
    },
    "scoped": {
        "tags": {
            "style": {"description": "Whether the styles apply to the entire document or just the parent subtree","value": "Boolean attribute"}
        },
        "idl": "scoped"
    },
    "seamless": {
        "tags": {
            "iframe": {"description": "Whether to apply the document's styles to the nested content","value": "Boolean attribute"}
        },
        "idl": "seamless"
    },
    "selected": {
        "tags": {
            "option": {"description": "Whether the option is selected by default","value": "Boolean attribute"}
        },
        "idl": "defaultSelected"
    },
    "shape": {
        "tags": {
            "area": {"description": "The kind of shape to be created in an image map","value": "\"circle\"; \"default\"; \"poly\"; \"rect\""}
        },
        "idl": "shape"
    },
    "size": {
        "tags": {
            "input": {"description": "Size of the control","value": "Valid non-negative integer greater than zero"},
            "select": {"description": "Size of the control","value": "Valid non-negative integer greater than zero"}
        },
        "idl": "size"
    },
    "sizes": {
        "tags": {
            "link": {"description": "Sizes of the icons (for rel=\"icon\")","value": "Unordered set of unique space-separated tokens, ASCII case-insensitive, consisting of sizes*"}
        },
        "idl": "sizes"
    },
    "sortable": {
        "tags": {
            "table": {"description": "Enables a sorting interface for the table","value": "Boolean attribute"}
        },
        "idl": "sortable"
    },
    "sorted": {
        "tags": {
            "th": {"description": "Column sort direction and ordinality","value": "Set of space-separated tokens, ASCII case-insensitive, consisting of neither, one, or both of \"reversed\" and a valid non-negative integer greater than zero"}
        },
        "idl": "sorted"
    },
    "span": {
        "tags": {
            "col": {"description": "Number of columns spanned by the element","value": "Valid non-negative integer greater than zero"},
            "colgroup": {"description": "Number of columns spanned by the element","value": "Valid non-negative integer greater than zero"}
        },
        "idl": "span"
    },
    "src": {
        "tags": {
            "audio": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"},
            "embed": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"},
            "iframe": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"},
            "img": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"},
            "input": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"},
            "script": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"},
            "source": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"},
            "track": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"},
            "video": {"description": "Address of the resource","value": "Valid non-empty URL potentially surrounded by spaces"}
        },
        "idl": "src"
    },
    "srcdoc": {
        "tags": {
            "iframe": {"description": "A document to render in the iframe","value": "The source of an iframe srcdoc document*"}
        },
        "idl": "srcdoc"
    },
    "srclang": {
        "tags": {
            "track": {"description": "Language of the text track","value": "Valid BCP 47 language tag"}
        },
        "idl": "srclang"
    },
    "srcset": {
        "tags": {
            "img": {"description": "Images to use in different situations (e.g. high-resolution displays, small monitors, etc)","value": "Comma-separated list of image candidate strings"}
        },
        "idl": "srcset"
    },
    "start": {
        "tags": {
            "ol": {"description": "Ordinal value of the first item","value": "Valid integer"}
        },
        "idl": "start"
    },
    "step": {
        "tags": {
            "input": {"description": "Granularity to be matched by the form control's value","value": "Valid floating-point number greater than zero, or \"any\""}
        },
        "idl": "step"
    },
    "style": {
        "tags": {
            "HTML elements": {"description": "Presentational and formatting instructions","value": "CSS declarations*"}
        },
        "idl": "style",
        "noProperty": true  // https://stackoverflow.com/questions/24906279/how-to-set-element-style-property-in-strict-mode,
    },
    "tabindex": {
        "tags": {
            "HTML elements": {"description": "Whether the element is focusable, and the relative order of the element for the purposes of sequential focus navigation","value": "Valid integer"}
        },
        "idl": "tabIndex"
    },
    "target": {
        "tags": {
            "a": {"description": "Browsing context for hyperlink navigation","value": "Valid browsing context name or keyword"},
            "area": {"description": "Browsing context for hyperlink navigation","value": "Valid browsing context name or keyword"},
            "base": {"description": "Default browsing context for hyperlink navigation and form submission","value": "Valid browsing context name or keyword"},
            "form": {"description": "Browsing context for form submission","value": "Valid browsing context name or keyword"}
        },
        "idl": "target"
    },
    "title": {
        "tags": {
            "HTML elements": {"description": "Advisory information for the element","value": "Text"},
            "abbr": {"description": "Full term or expansion of abbreviation","value": "Text"},
            "dfn": {"description": "Full term or expansion of abbreviation","value": "Text"},
            "input": {"description": "Description of pattern (when used with pattern attribute)","value": "Text"},
            "menuitem": {"description": "Hint describing the command","value": "Text"},
            "link": {"description": "Alternative style sheet set name","value": "Text"},
            "style": {"description": "Alternative style sheet set name","value": "Text"}
        },
        "idl": "title"
    },
    "translate": {
        "tags": {
            "HTML elements": {"description": "Whether the element is to be translated when the page is localized","value": "\"yes\"; \"no\""}
        },
        "idl": "translate"
    },
    "type": {
        "tags": {
            "a": {"description": "Hint for the type of the referenced resource","value": "Valid MIME type"},
            "link": {"description": "Hint for the type of the referenced resource","value": "Valid MIME type"},
            "button": {"description": "Type of button","value": "\"submit\"; \"reset\"; \"button\"; \"menu\""},
            "embed": {"description": "Type of embedded resource","value": "Valid MIME type"},
            "object": {"description": "Type of embedded resource","value": "Valid MIME type"},
            "script": {"description": "Type of embedded resource","value": "Valid MIME type"},
            "source": {"description": "Type of embedded resource","value": "Valid MIME type"},
            "style": {"description": "Type of embedded resource","value": "Valid MIME type"},
            "input": {"description": "Type of form control","value": "input type keyword"},
            "menu": {"description": "Type of menu","value": "\"context\"; \"toolbar\""},
            "menuitem": {"description": "Type of command","value": "\"command\"; \"checkbox\"; \"radio\""},
            "ol": {"description": "Kind of list marker","value": "\"1\"; \"a\"; \"A\"; \"i\"; \"I\""}
        },
        "idl": "type"
    },
    "typemustmatch": {
        "tags": {
            "object": {"description": "Whether the type attribute and the Content-Type value need to match for the resource to be used","value": "Boolean attribute"}
        },
        "idl": "typemustmatch"
    },
    "usemap": {
        "tags": {
            "img": {"description": "Name of image map to use","value": "Valid hash-name reference*"},
            "object": {"description": "Name of image map to use","value": "Valid hash-name reference*"}
        },
        "idl": "useMap"
    },
    "value": {
        "tags": {
            "button": {"description": "Value to be used for form submission","value": "Text"},
            "option": {"description": "Value to be used for form submission","value": "Text"},
            "data": {"description": "Machine-readable value","value": "Text*"},
            "input": {"description": "Value of the form control","value": "Varies*"},
            "li": {"description": "Ordinal value of the list item","value": "Valid integer"},
            "meter": {"description": "Current value of the element","value": "Valid floating-point number"},
            "progress": {"description": "Current value of the element","value": "Valid floating-point number"},
            "param": {"description": "Value of parameter","value": "Text"}
        },
        "idl": "value"
    },
    "width": {
        "tags": {
            "canvas": {"description": "Horizontal dimension","value": "Valid non-negative integer"},
            "embed": {"description": "Horizontal dimension","value": "Valid non-negative integer"},
            "iframe": {"description": "Horizontal dimension","value": "Valid non-negative integer"},
            "img": {"description": "Horizontal dimension","value": "Valid non-negative integer"},
            "input": {"description": "Horizontal dimension","value": "Valid non-negative integer"},
            "object": {"description": "Horizontal dimension","value": "Valid non-negative integer"},
            "video": {"description": "Horizontal dimension","value": "Valid non-negative integer"}
        },
        "idl": "width"
    },
    "wrap": {
        "tags": {
            "textarea": {"description": "How the value of the form control is to be wrapped for form submission","value": "\"soft\"; \"hard\""}
        },
        "idl": "wrap"
    }
};
// generated by generators/attributes.js
//


jsToHtml.html._text=function _text(text){
    return jsToHtml.direct({textNode:text});
};

jsToHtml.html._comment=function _comment(text){
    return jsToHtml.direct({commentText:text});
};

jsToHtml.html.includeHtml=function _text(htmlCode){
    if(!this.insecureModeEnabled){
        throw new Error("jsToHtml.html.includeHtml: insecure functions not allowed");
    }
    return jsToHtml.direct({htmlCode:htmlCode, validator:this.includeHtmlValidator});
};

// var ok=Object.keys(jsToHtml.htmlTags)

Object.keys(jsToHtml.htmlTags).map(function(tagName){
// ok.map(function(tagName){    
    jsToHtml.html[tagName]=function(contentOrAttributes,contentIfThereAreAttributes){
        return jsToHtml.indirect(tagName,contentOrAttributes,contentIfThereAreAttributes);
    };
});

jsToHtml.HtmlTextNode.prototype.create = function create(){
    return document.createTextNode(this.textNode);
};

jsToHtml.html.includeHtmlValidator=function(htmlText){
    return /^((<[^<>]+>)|[^<>]+|\n)*$/.test(htmlText);
};

jsToHtml.Html.prototype.create = function create(){
    var element = document.createElement(this.tagName);
    Object.keys(this.attributes).map(function(attr){
        var value=this.attributes[attr];
        //console.log("attr", attr, "value", value);
        if(/-/.test(attr)){
            element.setAttribute(attr, value);
        }else{
            var defAttr=jsToHtml.htmlAttributes[attr];
            if(('listName' in defAttr) && (typeof value!=="string")){
                Array.prototype.forEach.call(value,function(subValue){
                    element[defAttr.listName].add(subValue);
                });
            }else{
                if(defAttr.noProperty) {
                    element.setAttribute(defAttr.idl, value);
                }else{
                    element[defAttr.idl] = value;
                }
            }
        }
    },this);
    this.content.forEach(function(node){
        element.appendChild(node instanceof HtmlBase?node.create():node);
    });
    return element;
};

return jsToHtml;

});


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODdjMjQzMDc2ZWMzMGY1ODlmYzQiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoaWNhdG9yLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90YWJ1bGF0b3IvdGFidWxhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9saWtlLWFyL2xpa2UtYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzLXRvLWh0bWwvanMtdG8taHRtbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUM3RHFEO0FBQ3JELElBQUksV0FBVyxHQUFlLElBQUksaUVBQVcsRUFBRSxDQUFDO0FBQ2hELElBQUksS0FBWSxDQUFDO0FBRWpCLEtBQUssR0FBRztJQUNKLElBQUksRUFBRTtRQUNGLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO1FBQ2pDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO1FBQzdCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0tBQ25DO0lBQ0QsSUFBSSxFQUFFO1FBQ0YsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtRQUNyQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQ3JDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDckMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtRQUNyQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQ3JDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDckMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtRQUNyQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQ3JDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDckMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtRQUNyQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1FBQ3JDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7UUFDckMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJ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QUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODdjMjQzMDc2ZWMzMGY1ODlmYzQiLCJpbXBvcnQge0dyYXBoaWNhdG9yLCBjaGFydFR5cGV9IGZyb20gJy4vZ3JhcGhpY2F0b3InO1xyXG52YXIgZ3JhcGhpY2F0b3I6R3JhcGhpY2F0b3IgPSBuZXcgR3JhcGhpY2F0b3IoKTtcclxudmFyIGRhdHVtOm9iamVjdDtcclxuXHJcbmRhdHVtID0ge1xyXG4gICAgdmFyczogW1xyXG4gICAgICAgIHsgbmFtZTogJ2NvbXVuYScsIHBsYWNlOiAnbGVmdCcgfSxcclxuICAgICAgICB7IG5hbWU6ICdhw7FvJywgcGxhY2U6ICd0b3AnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndmFsb3InLCBwbGFjZTogJ2RhdGEnIH0sXHJcbiAgICBdLFxyXG4gICAgbGlzdDogW1xyXG4gICAgICAgIHsgY29tdW5hOiAxLCBhw7FvOiAyMDE0LCB2YWxvcjogMTIzMCB9LFxyXG4gICAgICAgIHsgY29tdW5hOiAyLCBhw7FvOiAyMDE0LCB2YWxvcjogMTQzMCB9LFxyXG4gICAgICAgIHsgY29tdW5hOiAzLCBhw7FvOiAyMDE0LCB2YWxvcjogMTk4MCB9LFxyXG4gICAgICAgIHsgY29tdW5hOiA0LCBhw7FvOiAyMDE0LCB2YWxvcjogMTUyMCB9LFxyXG4gICAgICAgIHsgY29tdW5hOiAxLCBhw7FvOiAyMDE1LCB2YWxvcjogMTM2MCB9LFxyXG4gICAgICAgIHsgY29tdW5hOiAyLCBhw7FvOiAyMDE1LCB2YWxvcjogMTMzMCB9LFxyXG4gICAgICAgIHsgY29tdW5hOiAzLCBhw7FvOiAyMDE1LCB2YWxvcjogMTMyMCB9LFxyXG4gICAgICAgIHsgY29tdW5hOiA0LCBhw7FvOiAyMDE1LCB2YWxvcjogMTQ5MCB9LFxyXG4gICAgICAgIHsgY29tdW5hOiAxLCBhw7FvOiAyMDE2LCB2YWxvcjogMjIzMCB9LFxyXG4gICAgICAgIHsgY29tdW5hOiAyLCBhw7FvOiAyMDE2LCB2YWxvcjogMjMzMCB9LFxyXG4gICAgICAgIHsgY29tdW5hOiA0LCBhw7FvOiAyMDE2LCB2YWxvcjogMjYyMCB9LFxyXG4gICAgICAgIHsgY29tdW5hOiAxLCBhw7FvOiAyMDE3LCB2YWxvcjogMjczMCB9LFxyXG4gICAgICAgIHsgY29tdW5hOiAyLCBhw7FvOiAyMDE3LCB2YWxvcjogMjgzMCB9LFxyXG4gICAgICAgIHsgY29tdW5hOiAzLCBhw7FvOiAyMDE3LCB2YWxvcjogMjc4MCB9LFxyXG4gICAgICAgIHsgY29tdW5hOiA0LCBhw7FvOiAyMDE3LCB2YWxvcjogMjkyMCB9LFxyXG4gICAgXVxyXG59XHJcblxyXG5ncmFwaGljYXRvci5yZW5kZXJUYWJ1bGF0aW9uKGRhdHVtLCAnbW9ydGFsaWRhZENoYXJ0JywgY2hhcnRUeXBlLkxJTkUpO1xyXG5cclxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXHJcblxyXG5ncmFwaGljYXRvciA9IG5ldyBHcmFwaGljYXRvcigpO1xyXG5cclxuZGF0dW0gPSB7XHJcbiAgICB2YXJzOiBbXHJcbiAgICAgICAgeyBuYW1lOiAndGlwb0RlSGFjaW5hbWllbnRvJywgcGxhY2U6ICdsZWZ0JyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ2HDsW8nLCBwbGFjZTogJ3RvcCcgfSxcclxuICAgICAgICB7IG5hbWU6ICd2YWxvcicsIHBsYWNlOiAnZGF0YScgfSxcclxuICAgIF0sXHJcbiAgICBsaXN0OiBbXHJcbiAgICAgICAgeyBcInRpcG9EZUhhY2luYW1pZW50b1wiOiBcImhhY2luYWRhc1wiICAgLCBhw7FvOiAyMDEyLCB2YWxvcjogMTkuMyB9LFxyXG4gICAgICAgIHsgXCJ0aXBvRGVIYWNpbmFtaWVudG9cIjogXCJubyBoYWNpbmFkYXNcIiwgYcOxbzogMjAxMiwgdmFsb3I6IDc4LjggfSxcclxuICAgICAgICB7IFwidGlwb0RlSGFjaW5hbWllbnRvXCI6IFwiaGFjaW5hZGFzXCIgICAsIGHDsW86IDIwMTMsIHZhbG9yOiAxNi40IH0sXHJcbiAgICAgICAgeyBcInRpcG9EZUhhY2luYW1pZW50b1wiOiBcIm5vIGhhY2luYWRhc1wiLCBhw7FvOiAyMDEzLCB2YWxvcjogNzkuMCB9LFxyXG4gICAgICAgIHsgXCJ0aXBvRGVIYWNpbmFtaWVudG9cIjogXCJoYWNpbmFkYXNcIiAgICwgYcOxbzogMjAxNCwgdmFsb3I6IDE2LjAgfSxcclxuICAgICAgICB7IFwidGlwb0RlSGFjaW5hbWllbnRvXCI6IFwibm8gaGFjaW5hZGFzXCIsIGHDsW86IDIwMTQsIHZhbG9yOiA4MS4zIH0sXHJcbiAgICAgICAgeyBcInRpcG9EZUhhY2luYW1pZW50b1wiOiBcImhhY2luYWRhc1wiICAgLCBhw7FvOiAyMDE1LCB2YWxvcjogMTIuMyB9LFxyXG4gICAgICAgIHsgXCJ0aXBvRGVIYWNpbmFtaWVudG9cIjogXCJubyBoYWNpbmFkYXNcIiwgYcOxbzogMjAxNSwgdmFsb3I6IDg0LjMgfSxcclxuICAgIF1cclxufVxyXG5cclxuZ3JhcGhpY2F0b3IucmVuZGVyVGFidWxhdGlvbihkYXR1bSwgJ21vcnRhbGlkYWRDaGFydDInLCBjaGFydFR5cGUuTElORSk7XHJcblxyXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuXHJcbmdyYXBoaWNhdG9yID0gbmV3IEdyYXBoaWNhdG9yKCk7XHJcblxyXG5kYXR1bSA9IHtcclxuICAgIHZhcnM6IFtcclxuICAgICAgICB7IG5hbWU6ICdjb211bmEnLCBwbGFjZTogJ2xlZnQnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAncmFuZ29FZGFkJywgcGxhY2U6ICd0b3AnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAndmFsb3InLCBwbGFjZTogJ2RhdGEnIH0sXHJcbiAgICBdLFxyXG4gICAgbGlzdDogW1xyXG4gICAgICAgIHsgY29tdW5hOiAnVG90YWwnLCByYW5nb0VkYWQ6ICcwLTQnLCB2YWxvcjogMTY1LjYzOCB9LFxyXG4gICAgICAgIHsgY29tdW5hOiAnVG90YWwnLCByYW5nb0VkYWQ6ICc1LTknLCB2YWxvcjogMTU2LjM3MiB9LFxyXG4gICAgICAgIHsgY29tdW5hOiAnVG90YWwnLCByYW5nb0VkYWQ6ICcxMC0xNCcsIHZhbG9yOiAxNTAuNTAxIH0sXHJcbiAgICAgICAgeyBjb211bmE6ICdUb3RhbCcsIHJhbmdvRWRhZDogJzE1LTE3JywgdmFsb3I6IDkyLjUyMSB9LFxyXG4gICAgXVxyXG59XHJcblxyXG5ncmFwaGljYXRvci5yZW5kZXJUYWJ1bGF0aW9uKGRhdHVtLCAncG9ibGFjaW9uQ2hhcnQnLCBjaGFydFR5cGUuUElFKTtcclxuXHJcbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG5cclxuZ3JhcGhpY2F0b3IgPSBuZXcgR3JhcGhpY2F0b3IoKTtcclxuXHJcbmRhdHVtID0ge1xyXG4gICAgdmFyczogW1xyXG4gICAgICAgIHsgbmFtZTogJ3NleG8nLCBwbGFjZTogJ2xlZnQnIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnYcOxbycsIHBsYWNlOiAndG9wJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ3ZhbG9yJywgcGxhY2U6ICdkYXRhJyB9LFxyXG4gICAgXSxcclxuICAgIGxpc3Q6IFtcclxuICAgICAgICB7IHNleG86ICdtdWplcicsIGHDsW86IDIwMTUsIHZhbG9yOiAxMjMwIH0sXHJcbiAgICAgICAgeyBzZXhvOiAndmFyb24nLCBhw7FvOiAyMDE1LCB2YWxvcjogMTQzMCB9LFxyXG4gICAgICAgIHsgc2V4bzogJ3Zhcm9uJywgYcOxbzogMjAxNSwgdmFsb3I6IDE5ODAgfSxcclxuICAgICAgICB7IHNleG86ICdtdWplcicsIGHDsW86IDIwMTUsIHZhbG9yOiAxNTIwIH0sXHJcbiAgICAgICAgeyBzZXhvOiAnbXVqZXInLCBhw7FvOiAyMDE2LCB2YWxvcjogMjIzMCB9LFxyXG4gICAgICAgIHsgc2V4bzogJ3Zhcm9uJywgYcOxbzogMjAxNiwgdmFsb3I6IDIzMzAgfSxcclxuICAgICAgICB7IHNleG86ICd2YXJvbicsIGHDsW86IDIwMTYsIHZhbG9yOiAyMjgwIH0sXHJcbiAgICAgICAgeyBzZXhvOiAnbXVqZXInLCBhw7FvOiAyMDE2LCB2YWxvcjogMjYyMCB9LFxyXG4gICAgICAgIHsgc2V4bzogJ211amVyJywgYcOxbzogMjAxNywgdmFsb3I6IDI3MzAgfSxcclxuICAgICAgICB7IHNleG86ICd2YXJvbicsIGHDsW86IDIwMTcsIHZhbG9yOiAyODMwIH0sXHJcbiAgICAgICAgeyBzZXhvOiAndmFyb24nLCBhw7FvOiAyMDE3LCB2YWxvcjogMjc4MCB9LFxyXG4gICAgICAgIHsgc2V4bzogJ211amVyJywgYcOxbzogMjAxNywgdmFsb3I6IDI5MjAgfSxcclxuICAgIF1cclxufVxyXG5ncmFwaGljYXRvci5yZW5kZXJUYWJ1bGF0aW9uKGRhdHVtLCAnYWRvcGNpb25lc0NoYXJ0JywgY2hhcnRUeXBlLkJBUik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4udHMiLCIvKlxyXG4qIExvZ2ljIGZvciB0cmFuc2Zvcm1hdGlvbiBmcm9tIFRhYnVsYXRvciB0b01hdHJpeCBmdW5jdGlvbiBkYXRhIHRvIGMzanMgY2hhcnRzIHJlcXVpcmVkIGRhdGFcclxuKi9cclxuXHJcbnZhciBUYWJ1bGF0b3IgPSByZXF1aXJlKCd0YWJ1bGF0b3InKTsgLy8gc2luY2UgVGFidWxhdG9yIGlzIGEgd2VicGFjayB3cmFwcGVkIHVtZCBcclxuaW1wb3J0ICogYXMgYzMgZnJvbSAnYzMnO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tICdkMyc7XHJcblxyXG5leHBvcnQgZW51bSBjaGFydFR5cGUgeyBMSU5FPSdsaW5lJyAsIEJBUj0nYmFyJywgUElFPSdwaWUnIH07XHJcblxyXG5leHBvcnQgY2xhc3MgR3JhcGhpY2F0b3Ige1xyXG4gICAgXHJcbiAgICB0YWJ1bGF0b3I6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnRhYnVsYXRvciA9IG5ldyBUYWJ1bGF0b3IoKTtcclxuICAgICAgICB0aGlzLnRhYnVsYXRvci5kZWZhdWx0U2hvd0F0dHJpYnV0ZSA9ICd2YWxvcic7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyVGFidWxhdGlvbihkYXR1bTogb2JqZWN0LCBlbGVtZW50SWQ6IHN0cmluZywgdHlwZTogY2hhcnRUeXBlKSB7XHJcbiAgICAgICAgdmFyIG1hdHJpeCA9IHRoaXMudGFidWxhdG9yLnRvTWF0cml4KGRhdHVtKTtcclxuICAgICAgICB0aGlzLnJlbmRlclRhYmxlKGVsZW1lbnRJZCwgbWF0cml4KTtcclxuICAgICAgICAvL2NoYXJ0IHJlbmRlcmluZ1xyXG4gICAgICAgIHZhciBjaGFydFBhcmFtZXRlcnMgPSB0aGlzLmJ1aWxkQ2hhcnRQYXJhbXNGdW5jdGlvbnNbdHlwZV0oZWxlbWVudElkLCBtYXRyaXgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ2hhcnQoZWxlbWVudElkLCBjaGFydFBhcmFtZXRlcnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlT25lRWxlbWVudEFycmF5KGFycmF5VmFyOiBhbnlbXSwgdmFyTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGFycmF5VmFyLmNvbnN0cnVjdG9yICE9PSBBcnJheSB8fCBhcnJheVZhci5sZW5ndGggIT0gMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodmFyTmFtZSArICcgbXVzdCBiZSBhbiBhcnJheSBhbmQgaGF2ZSBvbmx5IG9uZSBlbGVtZW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vcGFzcyB2YWxpZGF0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VW5pcXVlQXJyYXlFbGVtZW50KGFycmF5OiBhbnlbXSwgdmFyTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZU9uZUVsZW1lbnRBcnJheShhcnJheSwgdmFyTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGFycmF5WzBdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IHVzZSBzdHJhdGVneSBvciBpbnRlcmZhY2UgaW5oZXJpdGFuY2VcclxuICAgIGJ1aWxkQ2hhcnRQYXJhbXNGdW5jdGlvbnM6IGFueT0ge1xyXG4gICAgICAgIHBpZTogZnVuY3Rpb24gKGVsZW1lbnRJZDogc3RyaW5nLCBtYXRyaXg6IGFueSk6IG9iamVjdCB7XHJcbiAgICAgICAgICAgIC8vVE9ETzogY2hhbmdlICd0aGF0JyB2YXJpYWJsZSBhbmQgdXNlIHRoaXNcclxuICAgICAgICAgICAgdmFyIHRoYXQgPSBuZXcgR3JhcGhpY2F0b3IoKTtcclxuICAgICAgICAgICAgLy9UT0RPOiBjaGFuZ2UgdG8gdHlwZXNjcmlwdCBhbmQgcmVmYWN0b3IgdG8gZXM2IGFuZCB2YWxpZGF0ZSBicm93c2VyIHN1cHBvcnQgKFNldCwgYXJyb3cgZnVuY3Rpb25zKVxyXG4gICAgICAgICAgICB2YXIgZGF0YVZhck5hbWUgPSB0aGF0LmdldFVuaXF1ZUFycmF5RWxlbWVudChtYXRyaXguZGF0YVZhcmlhYmxlcywgJ21hdHJpeC5kYXRhVmFyaWFibGVzJyk7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW5zID0gbWF0cml4LmNvbHVtbnMubWFwKCh4OiBhbnksIGluZGV4OiBudW1iZXIpID0+IFt0aGF0LmdldFVuaXF1ZUFycmF5RWxlbWVudCh4LnRpdGxlcywgJ21hdHJpeC5jb2x1bW5zWypdLnRpdGxlcycpLCB0aGF0LmdldFVuaXF1ZUFycmF5RWxlbWVudChtYXRyaXgubGluZXMsICdtYXRyaXgubGluZXMnKS5jZWxsc1tpbmRleF1bZGF0YVZhck5hbWVdXSk7XHJcbiAgICAgICAgICAgIHZhciBjaGFydFBhcmFtZXRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uczogY29sdW1ucyxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncGllJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHBpZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZnVuY3Rpb24gKHZhbHVlOiBhbnksIHJhdGlvOiBhbnksIGlkOiBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkMy5mb3JtYXQoJycpKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGNoYXJ0UGFyYW1ldGVycztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhcjogZnVuY3Rpb24gKGVsZW1lbnRJZDogc3RyaW5nLCBtYXRyaXg6IGFueSk6IG9iamVjdCB7XHJcbiAgICAgICAgICAgIC8vVE9ETzogY2hhbmdlICd0aGF0JyB2YXJpYWJsZSBhbmQgdXNlIHRoaXNcclxuICAgICAgICAgICAgdmFyIHRoYXQgPSBuZXcgR3JhcGhpY2F0b3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoYXQuYnVpbGRQcm9ncmVzc0NoYXJ0UGFyYW1zKGVsZW1lbnRJZCwgbWF0cml4LCAnYmFyJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW5lOiBmdW5jdGlvbiAoZWxlbWVudElkOiBzdHJpbmcsIG1hdHJpeDogYW55KTogb2JqZWN0IHtcclxuICAgICAgICAgICAgLy9UT0RPOiBjaGFuZ2UgJ3RoYXQnIHZhcmlhYmxlIGFuZCB1c2UgdGhpc1xyXG4gICAgICAgICAgICB2YXIgdGhhdCA9IG5ldyBHcmFwaGljYXRvcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhhdC5idWlsZFByb2dyZXNzQ2hhcnRQYXJhbXMoZWxlbWVudElkLCBtYXRyaXgsICdsaW5lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAqIENvbW1vbiBjb25zdHJ1Y3Rpb24gZm9yIGFsbCBcInByb2dyZXNzaXZlXCIgY2hhcnRzIChsaW5lLCBiYXIsIHN0YWNrZWQgYmFycywgZXRjKSwgIChmb3IgZXhhbXBsZSBwaWUgY2hhcnQgaXNuJ3QgYSBcInByb2dyZXNzaXZlXCIgY2hhcnQpXHJcbiAgICAqL1xyXG4gICAgYnVpbGRQcm9ncmVzc0NoYXJ0UGFyYW1zKGVsZW1lbnRJZDogc3RyaW5nLCBtYXRyaXg6IGFueSwgdHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy9UT0RPOiBjaGFuZ2UgdG8gdHlwZXNjcmlwdCBhbmQgcmVmYWN0b3IgdG8gZXM2IGFuZCB2YWxpZGF0ZSBicm93c2VyIHN1cHBvcnQgKFNldCwgYXJyb3cgZnVuY3Rpb25zKVxyXG4gICAgICAgIHZhciB4VGl0bGVzID0gWyd4J10uY29uY2F0KG1hdHJpeC5jb2x1bW5zLm1hcCgoeDogYW55KSA9PiB0aGlzLmdldFVuaXF1ZUFycmF5RWxlbWVudCh4LnRpdGxlcywgJ21hdHJpeC5jb2x1bW5zWypdLnRpdGxlcycpKSk7XHJcbiAgICAgICAgdmFyIHJvd3NGb3JDaGFydCA9IG1hdHJpeC5saW5lcy5tYXAoKHg6IGFueSkgPT4gW3RoaXMuZ2V0VW5pcXVlQXJyYXlFbGVtZW50KHgudGl0bGVzLCAnbWF0cml4LmxpbmVzWypdLnRpdGxlcycpXS5jb25jYXQoeC5jZWxscy5tYXAoKGM6IGFueSk9PiAoYyAmJiBjLnZhbG9yKSB8fCAnJykpKTtcclxuICAgICAgICAvL1RPRE86IHNlcGFyYXRlIGxvZ2ljIGZvciBjb25zdHJ1Y3Rpb24gb2YgZ3JvdXAgb3B0aW9uIFxyXG4gICAgICAgIHZhciBncm91cHMgPSAodHlwZSA9PSAnYmFyJykgPyBbcm93c0ZvckNoYXJ0Lm1hcCgoeDogYW55W10pID0+IHhbMF0gLypmaXJzdCBlbGVtZW50IGlzIHRoZSBuYW1lICovKV0gOiBmYWxzZTtcclxuICAgICAgICB2YXIgY2hhcnRQYXJhbWV0ZXJzID0ge1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB4OiAneCcsXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBbeFRpdGxlc10uY29uY2F0KHJvd3NGb3JDaGFydCksXHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiBncm91cHMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGF4aXM6IHtcclxuICAgICAgICAgICAgICAgIHg6IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmdldFVuaXF1ZUFycmF5RWxlbWVudChtYXRyaXguY29sdW1uVmFyaWFibGVzLCAnbWF0cml4LmNvbHVtblZhcmlhYmxlcycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ291dGVyLWNlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuZ2V0VW5pcXVlQXJyYXlFbGVtZW50KG1hdHJpeC5kYXRhVmFyaWFibGVzLCAnbWF0cml4LmRhdGFWYXJpYWJsZXMnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdvdXRlci1taWRkbGUnXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBtaW46IDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ3JpZDoge1xyXG4gICAgICAgICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaGFydFBhcmFtZXRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2hhcnQoZWxlbWVudElkOiBzdHJpbmcsIGNoYXJ0UGFyYW1ldGVyczogYW55KSB7XHJcbiAgICAgICAgdmFyIGNoYXJ0ID0gYzMuZ2VuZXJhdGUoeyBiaW5kdG86ICcjJyArIGVsZW1lbnRJZCwgLi4uY2hhcnRQYXJhbWV0ZXJzIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclRhYmxlKGVsZW1lbnRJZDogc3RyaW5nLCBtYXRyaXg6IG9iamVjdCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcclxuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdmFyIHRhYmxlID0gdGhpcy50YWJ1bGF0b3IudG9IdG1sVGFibGUobWF0cml4KTtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhYmxlLmNyZWF0ZSgpLCBlbGVtZW50KTtcclxuICAgIH1cclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ3JhcGhpY2F0b3IudHMiLCIvKiFcbiAqIHRhYnVsYXRvclxuICogMjAxNSBDb2RlbmF1dGFzXG4gKiBHTlUgTGljZW5zZWRcbiAqL1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblwidXNlIHN0cmljdFwiO1xuLypqc2hpbnQgZXFudWxsOnRydWUgKi9cbi8qanNoaW50IGdsb2JhbHN0cmljdDp0cnVlICovXG4vKmpzaGludCBub2RlOnRydWUgKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgLyogZ2xvYmFsIGRlZmluZSAqL1xuICAgIC8qIGdsb2JhbCBnbG9iYWxNb2R1bGVOYW1lICovXG4gICAgaWYodHlwZW9mIHJvb3QuZ2xvYmFsTW9kdWxlTmFtZSAhPT0gJ3N0cmluZycpe1xuICAgICAgICByb290Lmdsb2JhbE1vZHVsZU5hbWUgPSBmYWN0b3J5Lm5hbWU7XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICBlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcbiAgICAgICAgZGVmaW5lKGZhY3RvcnkpO1xuICAgIGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuICAgICAgICBleHBvcnRzW3Jvb3QuZ2xvYmFsTW9kdWxlTmFtZV0gPSBmYWN0b3J5KCk7XG4gICAgZWxzZVxuICAgICAgICByb290W3Jvb3QuZ2xvYmFsTW9kdWxlTmFtZV0gPSBmYWN0b3J5KCk7XG4gICAgcm9vdC5nbG9iYWxNb2R1bGVOYW1lID0gbnVsbDtcbn0pKC8qanNoaW50IC1XMDQwICovdGhpcywgZnVuY3Rpb24gVGFidWxhdG9yKCkge1xuLypqc2hpbnQgK1cwNDAgKi9cblxudmFyIGxpa2VBciA9IHJlcXVpcmUoJ2xpa2UtYXInKTtcblxudmFyIGh0bWw9cmVxdWlyZSgnanMtdG8taHRtbCcpLmh0bWw7XG5cbi8qanNoaW50IC1XMDA0ICovXG52YXIgVGFidWxhdG9yID0gZnVuY3Rpb24oKXtcbn07XG4vKmpzaGludCArVzAwNCAqL1xuIFxuIC8vIGltcG9ydCB1c2VkIGJ5IHRoaXMgZmlsZVxuLy8gdmFyIGRlcGVuZGVuY3kgPSBkZXBlbmRlbmN5IHx8IHJlcXVpcmUoJ2RlcGVuZGVuY3knKTsgIFxuXG5mdW5jdGlvbiBhcnJheV9jb21iaW5lKGtleXMsIHZhbHVlcykge1xuICB2YXIgbmV3X2FycmF5ID0ge307XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIG5ld19hcnJheVtrZXlzW2ldXSA9IHZhbHVlc1tpXTtcbiAgfVxuICByZXR1cm4gbmV3X2FycmF5O1xufVxuXG5cblxuVGFidWxhdG9yLnByb3RvdHlwZS5jYXB0aW9uUGFydCA9IGZ1bmN0aW9uIGNhcHRpb25QYXJ0KG1hdHJpeCl7XG4gICAgcmV0dXJuIG1hdHJpeC5jYXB0aW9uP2h0bWwuY2FwdGlvbihtYXRyaXguY2FwdGlvbik6bnVsbDtcbn07XG5cblRhYnVsYXRvci5wcm90b3R5cGUuY29sR3JvdXBzID0gZnVuY3Rpb24gY29sR3JvdXBzKG1hdHJpeCl7XG4gICAgLy9jb25zb2xlLmxvZyhcIm1hdHJpeC5saW5lVmFyaWFibGVzXCIsbWF0cml4LmxpbmVWYXJpYWJsZXMpO1xuICAgIHZhciBsaW5lVmFyaWFibGVzUGFydD1tYXRyaXgubGluZVZhcmlhYmxlcz8oXG4gICAgICAgIGh0bWwuY29sZ3JvdXAoXG4gICAgICAgICAgICB7J2NsYXNzJzonaGVhZGVycyd9LFxuICAgICAgICAgICAgbWF0cml4LmxpbmVWYXJpYWJsZXMubWFwKGZ1bmN0aW9uKGxpbmVWYXJpYWJsZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGh0bWwuY29sKHsnY2xhc3MnOmxpbmVWYXJpYWJsZX0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICk6bnVsbDtcbiAgICB2YXIgY29sdW1uVmFyaWFibGVzUGFydD0obWF0cml4LmNvbHVtbnMpPyhcbiAgICAgICAgaHRtbC5jb2xncm91cChcbiAgICAgICAgICAgIHsnY2xhc3MnOidkYXRhJ30sXG4gICAgICAgICAgICAobWF0cml4Lm9uZUNvbHVtblRpdGxlKT8oXG4gICAgICAgICAgICAgICAgaHRtbC5jb2woeydjbGFzcyc6J3ZhcmlhYmxlJ30pXG4gICAgICAgICAgICApOihcbiAgICAgICAgICAgICAgICBtYXRyaXguY29sdW1ucy5tYXAoZnVuY3Rpb24oY29sdW1uKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGh0bWwuY29sKHsnY2xhc3MnOkpTT04uc3RyaW5naWZ5KGFycmF5X2NvbWJpbmUobWF0cml4LmNvbHVtblZhcmlhYmxlcyxjb2x1bW4udGl0bGVzKSl9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICApXG4gICAgKTpudWxsO1xuICAgIHJldHVybiBbXS5jb25jYXQobGluZVZhcmlhYmxlc1BhcnQsY29sdW1uVmFyaWFibGVzUGFydCk7XG59O1xuXG5mdW5jdGlvbiBsYWJlbFZhcmlhYmxlVmFsdWVzKG1hdHJpeCwgdmFyTmFtZSwgdmFyVmFsdWUpe1xuICAgIHJldHVybiAoKCgoKG1hdHJpeC52YXJzfHx7fSlbdmFyTmFtZV18fHt9KS52YWx1ZXMpfHx7fSlbdmFyVmFsdWVdfHx7fSkubGFiZWx8fHZhclZhbHVlO1xufVxuXG5mdW5jdGlvbiBmbGF0QXJyYXkoYXJyYXlzKXtcbiAgICByZXR1cm4gW10uY29uY2F0LmFwcGx5KFtdLCBhcnJheXMpO1xufVxuXG5UYWJ1bGF0b3IucHJvdG90eXBlLnRIZWFkUGFydCA9IGZ1bmN0aW9uIHRIZWFkUGFydChtYXRyaXgpe1xuICAgIGlmKCFtYXRyaXguY29sdW1uVmFyaWFibGVzKSByZXR1cm4gbnVsbDtcbiAgICBmdW5jdGlvbiBsYWJlbFZhcmlhYmxlKHZhck5hbWUpe1xuICAgICAgICByZXR1cm4gKChtYXRyaXgudmFyc3x8e30pW3Zhck5hbWVdfHx7fSkubGFiZWx8fHZhck5hbWU7XG4gICAgfVxuICAgIHZhciB2YXJPYmo9bWF0cml4LmNvbHVtbnMubGVuZ3RoPjA/eydjbGFzcyc6J3ZhcmlhYmxlJywgY29sc3BhbjptYXRyaXguY29sdW1ucy5sZW5ndGh9OnsnY2xhc3MnOid2YXJpYWJsZScsIHJvd3NwYW46Mn07XG4gICAgcmV0dXJuIGh0bWwudGhlYWQoXG4gICAgICAgIFtcbiAgICAgICAgICAgIGh0bWwudHIoXG4gICAgICAgICAgICAgICAgbWF0cml4LmxpbmVWYXJpYWJsZXMubWFwKGZ1bmN0aW9uKHZhck5hbWUpe1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29sdW1uVmFyaWFibGVzTGVuZ3RoID0gbWF0cml4LmNvbHVtblZhcmlhYmxlcy5sZW5ndGg+MD9tYXRyaXguY29sdW1uVmFyaWFibGVzLmxlbmd0aDoxO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaHRtbC50aCh7J2NsYXNzJzondmFyaWFibGUnLCAncm93c3Bhbic6Mipjb2x1bW5WYXJpYWJsZXNMZW5ndGh9LCBsYWJlbFZhcmlhYmxlKHZhck5hbWUpKTtcbiAgICAgICAgICAgICAgICB9KS5jb25jYXQoXG4gICAgICAgICAgICAgICAgICAgIGh0bWwudGgodmFyT2JqLGxhYmVsVmFyaWFibGUobWF0cml4LmNvbHVtblZhcmlhYmxlc1swXSl8fG1hdHJpeC5vbmVDb2x1bW5UaXRsZSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIF0uY29uY2F0KGZsYXRBcnJheShtYXRyaXguY29sdW1uVmFyaWFibGVzLm1hcChmdW5jdGlvbihjb2x1bW5WYXJpYWJsZSxpQ29sdW1uVmFyaWFibGUpe1xuICAgICAgICAgICAgdmFyIGxpbmVUaXRsZXM9W107XG4gICAgICAgICAgICB2YXIgbGluZVZhcmlhYmxlcz1bXTtcbiAgICAgICAgICAgIHZhciBwcmV2aW91c1ZhbHVlc1VwdG9UaGlzUm93SnNvbj1cIm5vbmVcIjtcbiAgICAgICAgICAgIHZhciBjb2xzcGFuPTE7XG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVDb2xzcGFuKCl7XG4gICAgICAgICAgICAgICAgaWYoY29sc3Bhbj4xKXtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVDZWxsQXR0cnMuY29sc3Bhbj1jb2xzcGFuO1xuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZUNlbGxBdHRycy5jb2xzcGFuPWNvbHNwYW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8bWF0cml4LmNvbHVtbnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIHZhciBhY3R1YWxWYWx1ZXM9bWF0cml4LmNvbHVtbnNbaV0udGl0bGVzO1xuICAgICAgICAgICAgICAgIHZhciBhY3R1YWxWYWx1ZXNVcHRvVGhpc1Jvdz1hY3R1YWxWYWx1ZXMuc2xpY2UoMCxpQ29sdW1uVmFyaWFibGUrMSk7XG4gICAgICAgICAgICAgICAgdmFyIGFjdHVhbFZhbHVlc1VwdG9UaGlzUm93SnNvbj1KU09OLnN0cmluZ2lmeShhY3R1YWxWYWx1ZXNVcHRvVGhpc1Jvdyk7XG4gICAgICAgICAgICAgICAgaWYoYWN0dWFsVmFsdWVzVXB0b1RoaXNSb3dKc29uIT1wcmV2aW91c1ZhbHVlc1VwdG9UaGlzUm93SnNvbil7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNvbHNwYW4oKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRpdGxlQ2VsbEF0dHJzPXsnY2xhc3MnOid2YXJfJyttYXRyaXguY29sdW1uVmFyaWFibGVzW2lDb2x1bW5WYXJpYWJsZV19O1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFyTmFtZSA9IG1hdHJpeC5jb2x1bW5WYXJpYWJsZXNbaUNvbHVtblZhcmlhYmxlXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhclZhbHVlID0gYWN0dWFsVmFsdWVzW2lDb2x1bW5WYXJpYWJsZV07XG4gICAgICAgICAgICAgICAgICAgIGxpbmVUaXRsZXMucHVzaChodG1sLnRoKHRpdGxlQ2VsbEF0dHJzLCBsYWJlbFZhcmlhYmxlVmFsdWVzKG1hdHJpeCwgdmFyTmFtZSx2YXJWYWx1ZSkpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYoaUNvbHVtblZhcmlhYmxlKzE8bWF0cml4LmNvbHVtblZhcmlhYmxlcy5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhcmlhYmxlQ2VsbEF0dHJzPXsnY2xhc3MnOid2YXJpYWJsZSd9O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZVZhcmlhYmxlcy5wdXNoKGh0bWwudGgodmFyaWFibGVDZWxsQXR0cnMsIGxhYmVsVmFyaWFibGUobWF0cml4LmNvbHVtblZhcmlhYmxlc1tpQ29sdW1uVmFyaWFibGUrMV0pKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNWYWx1ZXNVcHRvVGhpc1Jvd0pzb249YWN0dWFsVmFsdWVzVXB0b1RoaXNSb3dKc29uO1xuICAgICAgICAgICAgICAgICAgICBjb2xzcGFuPTA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbHNwYW4rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVwZGF0ZUNvbHNwYW4oKTtcbiAgICAgICAgICAgIGlmKGlDb2x1bW5WYXJpYWJsZSsxPG1hdHJpeC5jb2x1bW5WYXJpYWJsZXMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibGluZVRpdGxlczogXCIsIEpTT04uc3RyaW5naWZ5KGxpbmVUaXRsZXMpKTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibGluZVZhcmlhYmxlczogXCIsIEpTT04uc3RyaW5naWZ5KGxpbmVWYXJpYWJsZXMpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2h0bWwudHIobGluZVRpdGxlcyksIGh0bWwudHIobGluZVZhcmlhYmxlcyldO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImxpbmVUaXRsZXM6IFwiLCBKU09OLnN0cmluZ2lmeShsaW5lVGl0bGVzKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtodG1sLnRyKGxpbmVUaXRsZXMpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpXG4gICAgKSk7XG59O1xuXG5cblRhYnVsYXRvci5wcm90b3R5cGUuZGVmYXVsdFNob3dBdHRyaWJ1dGU9J3Nob3cnO1xuXG5UYWJ1bGF0b3IucHJvdG90eXBlLnRvQ2VsbFRhYmxlPWZ1bmN0aW9uKGNlbGwpe1xuICAgIHJldHVybiBjZWxsIGluc3RhbmNlb2YgT2JqZWN0P2h0bWwudGQoXG4gICAgICAgIGxpa2VBcihjZWxsKS5maWx0ZXIoZnVuY3Rpb24odmFsdWUsa2V5KXtyZXR1cm4gLy0vLnRlc3Qoa2V5KTt9KS5wbGFpbigpLFxuICAgICAgICBjZWxsW3RoaXMuZGVmYXVsdFNob3dBdHRyaWJ1dGVdXG4gICAgKTpodG1sLnRkKGNlbGwpO1xufTtcblxuVGFidWxhdG9yLnByb3RvdHlwZS50Qm9keVBhcnQgPSBmdW5jdGlvbiB0Qm9keVBhcnQobWF0cml4KXtcbiAgICB2YXIgdHJMaXN0PVtdO1xuICAgIHZhciBwcmV2aW91c0xpbmVUaXRsZXM9W107XG4gICAgdmFyIHRpdGxlTGluZUF0dHJzPVtdOyAgICBcbiAgICBmb3IodmFyIGk9MDsgaTxtYXRyaXgubGluZXMubGVuZ3RoO2krKyl7XG4gICAgICAgIHZhciBhY3R1YWxMaW5lPW1hdHJpeC5saW5lc1tpXTtcbiAgICAgICAgdmFyIGFjdHVhbExpbmVUaXRsZXM9YWN0dWFsTGluZS50aXRsZXM7XG4gICAgICAgIHZhciB0aExpc3RBY3R1YWxMaW5lPVtdO1xuICAgICAgICB2YXIgYWN0dWFsTGluZUNlbGxzPW1hdHJpeC5saW5lc1tpXS5jZWxscztcbiAgICAgICAgdmFyIHRkPWFjdHVhbExpbmVDZWxscy5tYXAoZnVuY3Rpb24oY2VsbCl7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMudG9DZWxsVGFibGUoY2VsbCkpO1xuICAgICAgICB9LHRoaXMpO1xuICAgICAgICBpZihhY3R1YWxMaW5lVGl0bGVzKXtcbiAgICAgICAgICAgIGZvcih2YXIgaj0wO2o8YWN0dWFsTGluZVRpdGxlcy5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgICAgICB2YXIgdmFyTmFtZT0obWF0cml4LmxpbmVWYXJpYWJsZXN8fHt9KVtqXXx8bnVsbDtcbiAgICAgICAgICAgICAgICB2YXIgYWN0dWFsTGluZVRpdGxlc1VwVG9Ob3c9YWN0dWFsTGluZVRpdGxlcy5zbGljZSgwLGorMSk7XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzTGluZVRpdGxlc1VwVG9Ob3c9cHJldmlvdXNMaW5lVGl0bGVzLnNsaWNlKDAsaisxKTtcbiAgICAgICAgICAgICAgICBpZihKU09OLnN0cmluZ2lmeShhY3R1YWxMaW5lVGl0bGVzVXBUb05vdykhPUpTT04uc3RyaW5naWZ5KHByZXZpb3VzTGluZVRpdGxlc1VwVG9Ob3cpKXtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVMaW5lQXR0cnNbal09e307XG4gICAgICAgICAgICAgICAgICAgIGlmKChtYXRyaXgubGluZVZhcmlhYmxlc3x8e30pW2pdKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlTGluZUF0dHJzW2pdWydjbGFzcyddPSd2YXJfJysobWF0cml4LmxpbmVWYXJpYWJsZXN8fHt9KVtqXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aExpc3RBY3R1YWxMaW5lLnB1c2goaHRtbC50aCh0aXRsZUxpbmVBdHRyc1tqXSxsYWJlbFZhcmlhYmxlVmFsdWVzKG1hdHJpeCwgdmFyTmFtZSxhY3R1YWxMaW5lVGl0bGVzW2pdKSkpO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUxpbmVBdHRyc1tqXS5yb3dzcGFuPSh0aXRsZUxpbmVBdHRyc1tqXS5yb3dzcGFufHwxKSsxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZXZpb3VzTGluZVRpdGxlcz1hY3R1YWxMaW5lVGl0bGVzO1xuICAgICAgICB9XG4gICAgICAgIHRyTGlzdC5wdXNoKGh0bWwudHIodGhMaXN0QWN0dWFsTGluZS5jb25jYXQodGQpKSk7XG4gICAgfVxuICAgIHJldHVybiBodG1sLnRib2R5KHRyTGlzdCk7XG59O1xuICAgICBcblxuXG5UYWJ1bGF0b3IucHJvdG90eXBlLnRvSHRtbFRhYmxlID0gZnVuY3Rpb24gdG9IdG1sVGFibGUobWF0cml4KXtcbiAgICB0aGlzLmNvbnRyb2xzKG1hdHJpeCk7XG4gICAgcmV0dXJuIGh0bWwudGFibGUoe2NsYXNzOid0YWJ1bGF0b3ItdGFibGUnfSxbXS5jb25jYXQoXG4gICAgICAgIHRoaXMuY2FwdGlvblBhcnQobWF0cml4KSxcbiAgICAgICAgdGhpcy5jb2xHcm91cHMobWF0cml4KSxcbiAgICAgICAgdGhpcy50SGVhZFBhcnQobWF0cml4KSxcbiAgICAgICAgdGhpcy50Qm9keVBhcnQobWF0cml4KVxuICAgICkpO1xufTtcblxuVGFidWxhdG9yLnByb3RvdHlwZS5jb250cm9scz1mdW5jdGlvbiBjb250cm9scyhtYXRyaXgpe1xuICAgIHZhciAgbWF0cml4TGluZVZhcmlhYmxlcz1tYXRyaXgubGluZVZhcmlhYmxlcztcbiAgICB2YXIgIG1hdHJpeExpbmVzPW1hdHJpeC5saW5lcztcbiAgICB2YXIgIG1hdHJpeENvbHVtblZhcmlhYmxlcz1tYXRyaXguY29sdW1uVmFyaWFibGVzO1xuICAgIHZhciAgbWF0cml4Q29sdW1ucz1tYXRyaXguY29sdW1ucztcbiAgICBpZihtYXRyaXhDb2x1bW5WYXJpYWJsZXMgJiYgbWF0cml4Q29sdW1ucyAvKiYmIG1hdHJpeENvbHVtbnMubGVuZ3RoKi8pe1xuICAgICAgICB2YXJpYWJsZUV4aXN0YW5jZUFuZFF1YW50aXR5KG1hdHJpeENvbHVtblZhcmlhYmxlcyxtYXRyaXhDb2x1bW5zLCdjb2x1bW5WYXJpYWJsZXMnKTtcbiAgICB9XG4gICAgaWYobWF0cml4TGluZVZhcmlhYmxlcyAmJiBtYXRyaXhMaW5lcyAvKiYmIG1hdHJpeExpbmVzLmxlbmd0aCovKXtcbiAgICAgICAgdmFyaWFibGVFeGlzdGFuY2VBbmRRdWFudGl0eShtYXRyaXhMaW5lVmFyaWFibGVzLG1hdHJpeExpbmVzLCdsaW5lVmFyaWFibGVzJyk7XG4gICAgfVxuICAgIGlmKG1hdHJpeENvbHVtbnMgJiYgbWF0cml4TGluZXMpe1xuICAgICAgICBjZWxsRXhpc3RhbmNlQW5kUXVhbnRpdHkobWF0cml4Q29sdW1ucyxtYXRyaXhMaW5lcywnY2VsbHMnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdmFyaWFibGVFeGlzdGFuY2VBbmRRdWFudGl0eShhcnJWYXIsb2JqVmFyLG5hbWVBcnJWYXIpe1xuICAgICAgICB2YXIgdmFyTmFtZT1uYW1lQXJyVmFyPT0nY29sdW1uVmFyaWFibGVzJz8nY29sdW1uICc6J2xpbmUgJztcbiAgICAgICAgdmFyIHZhcmlhYmxlc1F1YW50aXR5PWFyclZhci5sZW5ndGg7XG4gICAgICAgIGZvcih2YXIgaT0wO2k8b2JqVmFyLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgaWYob2JqVmFyW2ldLnRpdGxlcyl7XG4gICAgICAgICAgICAgICAgaWYob2JqVmFyW2ldLnRpdGxlcy5sZW5ndGghPXZhcmlhYmxlc1F1YW50aXR5KXtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHZhck5hbWUraSsnIGhhcyAnK29ialZhcltpXS50aXRsZXMubGVuZ3RoKycgdmFsdWVzIGJ1dCAnK25hbWVBcnJWYXIrJyBoYXMgJyt2YXJpYWJsZXNRdWFudGl0eSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGVyZSBhcmUgbm8gdGl0bGVzIGluICcrIHZhck5hbWUgK2krJyBidXQgJytuYW1lQXJyVmFyKyAnIGV4aXN0cycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIFxuICAgIGZ1bmN0aW9uIGNlbGxFeGlzdGFuY2VBbmRRdWFudGl0eShtYXRyaXhDb2x1bW5zLG1hdHJpeExpbmVzLHZhck5hbWUpe1xuICAgICAgICB2YXIgY29sdW1uUXVhbnRpdHk9bWF0cml4Q29sdW1ucy5sZW5ndGh8fDE7XG4gICAgICAgIGZvcih2YXIgaT0wO2k8bWF0cml4TGluZXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZihtYXRyaXhMaW5lc1tpXS5jZWxscy5sZW5ndGg+MCl7XG4gICAgICAgICAgICAgICAgaWYobWF0cml4TGluZXNbaV0uY2VsbHMubGVuZ3RoIT1jb2x1bW5RdWFudGl0eSl7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbGluZSAnK2krJyBoYXMgJyttYXRyaXhMaW5lc1tpXS5jZWxscy5sZW5ndGgrJyBjZWxscyBidXQgY29sdW1ucyBoYXMgJytjb2x1bW5RdWFudGl0eSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aGVyZSBhcmUgbm8gY2VsbHMgaW4gbGluZSAnK2krJyBidXQgY29sdW1ucyBleGlzdHMnKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5UYWJ1bGF0b3IucHJvdG90eXBlLmNvbnRyb2xzSm9pbj1mdW5jdGlvbiBjb250cm9sc0pvaW4obWF0cml4TGlzdCl7XG52YXIgZmlyc3RNYXRyaXhMaXN0TGluZXNMZW5ndGggPSBtYXRyaXhMaXN0WzBdLmxpbmVzLmxlbmd0aDtcbmlmICghbWF0cml4TGlzdC5ldmVyeShmdW5jdGlvbihlbGVtZW50KXtyZXR1cm4gZWxlbWVudC5saW5lcy5sZW5ndGggPT0gZmlyc3RNYXRyaXhMaXN0TGluZXNMZW5ndGh9KSl7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdsaW5lLmxlbmd0aCBkb2VzIG5vdCBtYXRjaCBpbiBhbGwgbWF0cml4Jyk7XG59XG52YXIgZmlyc3RNYXRyaXhMaXN0TGluZSA9IG1hdHJpeExpc3RbMF0ubGluZXM7XG52YXIgSnNvblRpdGxlc0ZpcnN0TWF0cml4TGlzdExpbmUgPSBmaXJzdE1hdHJpeExpc3RMaW5lLm1hcChmdW5jdGlvbihvYmope3JldHVybiBKU09OLnN0cmluZ2lmeShvYmoudGl0bGVzKX0pO1xuaWYgKCFtYXRyaXhMaXN0LmV2ZXJ5KFxuICAgICAgZnVuY3Rpb24oZWxlbWVudCxpbmRleCl7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmxpbmVzLmV2ZXJ5KFxuICAgICAgICAgICBmdW5jdGlvbihlbGVtZW50byxpbmRpY2Upe1xuICAgICAgICAgICAgIC8vcmV0dXJuIEpTT04uc3RyaW5naWZ5KGVsZW1lbnRvLnRpdGxlcykgPT0gSlNPTi5zdHJpbmdpZnkoZmlyc3RNYXRyaXhMaXN0TGluZVtpbmRpY2VdLnRpdGxlcylcbiAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdUaXR1bG9zICcsSnNvblRpdGxlc0ZpcnN0TWF0cml4TGlzdExpbmUpO1xuICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ1RpdHVsb3MgJyxKU09OLnN0cmluZ2lmeShlbGVtZW50by50aXRsZXMpKTtcbiAgICAgICAgICAgICByZXR1cm4gSnNvblRpdGxlc0ZpcnN0TWF0cml4TGlzdExpbmUuaW5kZXhPZihKU09OLnN0cmluZ2lmeShlbGVtZW50by50aXRsZXMpKSA+IC0xO1xuICAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICApe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2xpbmUgdGl0bGVzIGRvZXMgbm90IG1hdGNoIGluIGFsbCBtYXRyaXgnKTtcbiAgICAgfVxufVxuXG5UYWJ1bGF0b3IucHJvdG90eXBlLnRvTWF0cml4ID0gZnVuY3Rpb24gdG9NYXRyaXgoZGF0dW0pe1xuICAgIHZhciBwbGFjZXM9e1xuICAgICAgICBsZWZ0OntwbGFjZTonbGluZVZhcmlhYmxlcyd9LFxuICAgICAgICB0b3A6e3BsYWNlOidjb2x1bW5WYXJpYWJsZXMnfSxcbiAgICAgICAgZGF0YTp7cGxhY2U6J2RhdGFWYXJpYWJsZXMnfSxcbiAgICB9O1xuICAgIHZhciBtYXRyaXg9e2xpbmVWYXJpYWJsZXM6W10sY29sdW1uVmFyaWFibGVzOltdLCBkYXRhVmFyaWFibGVzOltdLCBjb2x1bW5zOltdLCBsaW5lczpbXSwgdmFyczp7fX07XG4gICAgZm9yKHZhciBpPTA7IGk8ZGF0dW0udmFycy5sZW5ndGg7aSsrKXtcbiAgICAgICAgdmFyIGNhZGFWYXI9ZGF0dW0udmFyc1tpXTtcbiAgICAgICAgbWF0cml4W3BsYWNlc1tjYWRhVmFyLnBsYWNlXS5wbGFjZV0ucHVzaChjYWRhVmFyLm5hbWUpO1xuICAgICAgICBtYXRyaXgudmFyc1tjYWRhVmFyLm5hbWVdID0gY2FkYVZhcjtcbiAgICB9XG4gICAgbWF0cml4Lm9uZUNvbHVtblRpdGxlPWRhdHVtLm9uZUNvbHVtblRpdGxlOyBcbiAgICB2YXIgdmlzdG9zQ29sdW1uVmFyaWFibGVzPXt9O1xuICAgIHZhciB2aXN0b3NMaW5lVmFyaWFibGVzPXt9O1xuICAgIGZvcih2YXIgaUxpc3Q9MDsgaUxpc3Q8ZGF0dW0ubGlzdC5sZW5ndGg7IGlMaXN0Kyspe1xuICAgICAgICB2YXIgaUNlbGw7XG4gICAgICAgIHZhciBpTGluZTtcbiAgICAgICAgdmFyIGNhZGFMaXN0PWRhdHVtLmxpc3RbaUxpc3RdO1xuICAgICAgICBpQ2VsbD1tYXRyaXguY29sdW1uVmFyaWFibGVzLmxlbmd0aDtcbiAgICAgICAgaWYoaUNlbGw+MCl7IFxuICAgICAgICAgICAgdmFyIGNhZGFEYXRvVG9wPVtdO1xuICAgICAgICAgICAgY2FkYURhdG9Ub3A9bWF0cml4LmNvbHVtblZhcmlhYmxlcy5tYXAoZnVuY3Rpb24oY29sdW1uVmFyKXsgcmV0dXJuIGNhZGFMaXN0W2NvbHVtblZhcl19KTtcbiAgICAgICAgICAgIHZhciBqc29uQ2FkYURhdG9Ub3A9SlNPTi5zdHJpbmdpZnkoY2FkYURhdG9Ub3ApO1xuICAgICAgICAgICAgaWYgKCF2aXN0b3NDb2x1bW5WYXJpYWJsZXNbanNvbkNhZGFEYXRvVG9wXSl7XG4gICAgICAgICAgICAgICAgaUNlbGw9bWF0cml4LmNvbHVtbnMucHVzaCh7dGl0bGVzOmNhZGFEYXRvVG9wfSktMTtcbiAgICAgICAgICAgICAgICB2aXN0b3NDb2x1bW5WYXJpYWJsZXNbanNvbkNhZGFEYXRvVG9wXT17aW5kZXg6IGlDZWxsfTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlDZWxsPXZpc3Rvc0NvbHVtblZhcmlhYmxlc1tqc29uQ2FkYURhdG9Ub3BdLmluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBjYWRhRGF0b0xlZnQ9W107XG4gICAgICAgIHZhciBjYWRhRGF0b0RhdGE9W107ICAgICAgICAgICAgICAgIFxuICAgICAgICBmb3IodmFyIGo9MDsgajxtYXRyaXgubGluZVZhcmlhYmxlcy5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgIGNhZGFEYXRvTGVmdC5wdXNoKGNhZGFMaXN0W21hdHJpeC5saW5lVmFyaWFibGVzW2pdXSk7XG4gICAgICAgICAgICBjYWRhRGF0b0RhdGEucHVzaChjYWRhTGlzdFttYXRyaXguZGF0YVZhcmlhYmxlc1tqXV0pO1xuICAgICAgICB9ICAgICAgICBcbiAgICAgICAgdmFyIGpzb25DYWRhRGF0b0xlZnQ9SlNPTi5zdHJpbmdpZnkoY2FkYURhdG9MZWZ0KTtcbiAgICAgICAgaWYgKHZpc3Rvc0xpbmVWYXJpYWJsZXNbanNvbkNhZGFEYXRvTGVmdF0pe1xuICAgICAgICAgICAgaUxpbmU9dmlzdG9zTGluZVZhcmlhYmxlc1tqc29uQ2FkYURhdG9MZWZ0XS5pbmRleDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpTGluZT1tYXRyaXgubGluZXMucHVzaCh7dGl0bGVzOmNhZGFEYXRvTGVmdCwgY2VsbHM6W119KS0xO1xuICAgICAgICAgICAgdmlzdG9zTGluZVZhcmlhYmxlc1tqc29uQ2FkYURhdG9MZWZ0XT17aW5kZXg6IGlMaW5lfTsgICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV3Q2VsbD17fTtcbiAgICAgICAgaWYoZGF0dW0uc2hvd0Z1bmN0aW9uKXtcbiAgICAgICAgICAgIG5ld0NlbGwuZGlzcGxheT1kYXR1bS5zaG93RnVuY3Rpb24oY2FkYUxpc3QpO1xuICAgICAgICB9XG4gICAgICAgIGZvcih2YXIgaz0wOyBrPG1hdHJpeC5kYXRhVmFyaWFibGVzLmxlbmd0aDsgaysrKXtcbiAgICAgICAgICAgIHZhciBub21icmVWYXJpYWJsZT1tYXRyaXguZGF0YVZhcmlhYmxlc1trXTtcbiAgICAgICAgICAgIG5ld0NlbGxbbm9tYnJlVmFyaWFibGVdPWNhZGFMaXN0W25vbWJyZVZhcmlhYmxlXTtcbiAgICAgICAgfVxuICAgICAgICBtYXRyaXgubGluZXNbaUxpbmVdLmNlbGxzW2lDZWxsXT1uZXdDZWxsO1xuICAgIH1cbiAgICBmb3IodmFyIGw9MDsgbDxtYXRyaXgubGluZXMubGVuZ3RoOyBsKyspe1xuICAgICAgICBmb3IodmFyIG09MDsgbTxtYXRyaXguY29sdW1ucy5sZW5ndGg7IG0rKyl7XG4gICAgICAgICAgICBpZiAobWF0cml4LmxpbmVzW2xdLmNlbGxzW21dPT09dW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBtYXRyaXgubGluZXNbbF0uY2VsbHNbbV09bnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbWF0cml4O1xufTtcblxuVGFidWxhdG9yLnByb3RvdHlwZS5tYXRyaXhKb2luID0gZnVuY3Rpb24gbWF0cml4Sm9pbihtYXRyaXhMaXN0KXtcbiAgICB0aGlzLmNvbnRyb2xzSm9pbihtYXRyaXhMaXN0KTtcbiAgICBcbiAgICB2YXIgbWF0cml4PXtjb2x1bW5Hcm91cHM6W10sIGxpbmVWYXJpYWJsZXM6W10sIGxpbmVzOltdLCB2YXJzOnt9fTtcbiAgICB2YXIgY2FwdGlvbnMgPSBtYXRyaXhMaXN0Lm1hcChmdW5jdGlvbihvYmope3JldHVybiBvYmouY2FwdGlvbn0pO1xuICAgIG1hdHJpeC5jYXB0aW9uID0gY2FwdGlvbnMuam9pbih0aGlzLm1hdHJpeEpvaW4uY2FwdGlvblNlcGFyYXRvcik7XG4gICAgXG4gICAgdmFyIHJlb3JkZXJlckxpbmVzID0gW107XG4gICAgbWF0cml4TGlzdC5mb3JFYWNoKGZ1bmN0aW9uKG1hdHJpeCl7XG4gICAgICAgIHZhciBsaW5lcyA9IG1hdHJpeC5saW5lcztcbiAgICAgICAgdmFyIGluZGV4ZWRMaW5lcyA9IHt9O1xuICAgICAgICBsaW5lcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lKXtcbiAgICAgICAgICAgIHZhciBpbmQgPSBKU09OLnN0cmluZ2lmeShsaW5lLnRpdGxlcyk7XG4gICAgICAgICAgICBpbmRleGVkTGluZXNbaW5kXSA9IGxpbmUuY2VsbHM7XG4gICAgICAgIH0pO1xuICAgICAgICByZW9yZGVyZXJMaW5lcy5wdXNoKGluZGV4ZWRMaW5lcyk7XG4gICAgfSk7XG4gICAgLy9jb25zb2xlLmxvZyhcInJlb3JkZXJlckxpbmVzOiBcIiwgcmVvcmRlcmVyTGluZXMpO1xuXG4gICAgbWF0cml4LmNvbHVtbkdyb3VwcyA9IG1hdHJpeExpc3QubWFwKGZ1bmN0aW9uKG9iail7XG4gICAgICAgIHZhciBjR3JvdXA9e307XG4gICAgICAgIGNHcm91cC5jb2x1bW5WYXJpYWJsZXM9b2JqLmNvbHVtblZhcmlhYmxlcztcbiAgICAgICAgY0dyb3VwLmNvbHVtbnM9b2JqLmNvbHVtbnM7XG4gICAgICAgIHJldHVybiBjR3JvdXA7XG4gICAgfSk7XG4gICAgbWF0cml4LmxpbmVWYXJpYWJsZXMgPSBtYXRyaXhMaXN0WzBdLmxpbmVWYXJpYWJsZXM7XG4gICAgbWF0cml4LmxpbmVzID0gbWF0cml4TGlzdFswXS5saW5lcztcbiAgICBtYXRyaXgudmFycyA9IG1hdHJpeExpc3RbMF0udmFycztcbiAgICAvLyBwcmltZXIgcGFzbyBjb25zdHJ1aXIgdW4gYXJyZWdsbyBpbmRleGFkbyBkZSBsw61uZWFzIChpbmRleGFkbyBwb3IgdMOtdHVsbylcbiAgICAvLyByZW9yZGVyZXJMaW5lc1tpX21hdHJpeF1banNvbl90aXRsZV0gPSBsaW5lXG4gICAgLy8gc2VndW5kbyBwYXNvIGlndWFsIHBlcm8gaXRlcmFuZG8gc29icmUgbGEgbWF0cml6IDAgKG9yaWdpbmFsKSB5IGJ1c2NhbmRvIHBvciDDrW5kaWNlIChzaSB1biDDrW5kaWNlIG5vIGVzdMOhIGxhbnphIGV4Y2VwY2nDs24pXG4gICAgbWF0cml4TGlzdC5mb3JFYWNoKGZ1bmN0aW9uKG1hdHJpeFRvQWRkLCBpX21hdHJpeFRvQWRkKXtcbiAgICAgICAgaWYgKGlfbWF0cml4VG9BZGQ+MCl7XG4gICAgICAgICAgICBtYXRyaXgubGluZXMuZm9yRWFjaChmdW5jdGlvbihsaW5lLGluZCl7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmVUb0FkZCA9IHJlb3JkZXJlckxpbmVzW2lfbWF0cml4VG9BZGRdW0pTT04uc3RyaW5naWZ5KGxpbmUudGl0bGVzKV07XG4gICAgICAgICAgICAgICAgbWF0cml4LmxpbmVzW2luZF0uY2VsbHMgPSBtYXRyaXgubGluZXNbaW5kXS5jZWxscy5jb25jYXQobGluZVRvQWRkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG1hdHJpeFRvQWRkLnZhcnMpe1xuICAgICAgICAgICAgICAgIG1hdHJpeC52YXJzW2tleV0gPSBtYXRyaXhUb0FkZC52YXJzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWF0cml4O1xufVxuXG5UYWJ1bGF0b3IucHJvdG90eXBlLm1hdHJpeEpvaW4uY2FwdGlvblNlcGFyYXRvciA9ICcsICc7XG5cbnJldHVybiBUYWJ1bGF0b3I7XG5cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3RhYnVsYXRvci90YWJ1bGF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4oZnVuY3Rpb24gY29kZW5hdXRhc01vZHVsZURlZmluaXRpb24ocm9vdCwgbmFtZSwgZmFjdG9yeSkge1xyXG4gICAgLyogZ2xvYmFsIGRlZmluZSAqL1xyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgIGlmKHR5cGVvZiByb290Lmdsb2JhbE1vZHVsZU5hbWUgIT09ICdzdHJpbmcnKXtcclxuICAgICAgICByb290Lmdsb2JhbE1vZHVsZU5hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cclxuICAgIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcbiAgICB9ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpe1xyXG4gICAgICAgIGRlZmluZShmYWN0b3J5KTtcclxuICAgIH1lbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XHJcbiAgICAgICAgZXhwb3J0c1tyb290Lmdsb2JhbE1vZHVsZU5hbWVdID0gZmFjdG9yeSgpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgcm9vdFtyb290Lmdsb2JhbE1vZHVsZU5hbWVdID0gZmFjdG9yeSgpO1xyXG4gICAgfVxyXG4gICAgcm9vdC5nbG9iYWxNb2R1bGVOYW1lID0gbnVsbDtcclxufSkoLypqc2hpbnQgLVcwNDAgKi90aGlzLCAnbGlrZUFyJywgZnVuY3Rpb24oKSB7XHJcbi8qanNoaW50ICtXMDQwICovXHJcblxyXG4vKmpzaGludCAtVzAwNCAqL1xyXG52YXIgbGlrZUFyID0ge307XHJcbi8qanNoaW50ICtXMDA0ICovXHJcblxyXG5mdW5jdGlvbiBBZGFwdFdpdGhBcnJheU1ldGhvZHMob2JqZWN0RGF0YSwgb2JqZWN0QmFzZSl7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqZWN0RGF0YSwgJ19vYmplY3QnLCB7IHZhbHVlOiBvYmplY3RCYXNlfHxvYmplY3REYXRhfSk7XHJcbn1cclxuXHJcbnZhciBPYmplY3RXaXRoQXJyYXlNZXRob2RzTm9uT3B0aW1pemVkID0gZnVuY3Rpb24gYW5vbnltb3VzKG8pe1xyXG4gICAgQWRhcHRXaXRoQXJyYXlNZXRob2RzKHRoaXMsIG8pO1xyXG59O1xyXG5cclxudmFyIE9iamVjdFdpdGhBcnJheU1ldGhvZHNPcHRpbWl6ZWQgPSBmdW5jdGlvbiBhbm9ueW1vdXMobyl7XHJcbiAgICBBZGFwdFdpdGhBcnJheU1ldGhvZHModGhpcywgbyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpZCh4KXsgcmV0dXJuIHg7IH1cclxuXHJcbmxpa2VBciA9IGZ1bmN0aW9uIG9iamVjdDJBcnJheShvKXtcclxuICAgIHJldHVybiBuZXcgT2JqZWN0V2l0aEFycmF5TWV0aG9kc09wdGltaXplZChvKTtcclxufTtcclxuXHJcbmxpa2VBci5ub25PcHRpbWl6ZWQgPSBmdW5jdGlvbiBvYmplY3QyQXJyYXkobyl7XHJcbiAgICByZXR1cm4gbmV3IE9iamVjdFdpdGhBcnJheU1ldGhvZHNOb25PcHRpbWl6ZWQobyk7XHJcbn07XHJcblxyXG5PYmplY3RXaXRoQXJyYXlNZXRob2RzT3B0aW1pemVkLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24ga2V5cygpe1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX29iamVjdCk7XHJcbn07XHJcblxyXG5PYmplY3RXaXRoQXJyYXlNZXRob2RzT3B0aW1pemVkLnByb3RvdHlwZS5hcnJheSA9IGZ1bmN0aW9uIGFycmF5KCl7XHJcbiAgICB2YXIgb1RoaXM9dGhpcy5fb2JqZWN0O1xyXG4gICAgaWYodHlwZW9mIE9iamVjdC52YWx1ZXMgPT09ICdmdW5jdGlvbicpe1xyXG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKG9UaGlzKTtcclxuICAgIH1cclxuICAgIHZhciBhcnIgPSBbXTtcclxuICAgIGZvcih2YXIgYXR0ciBpbiBvVGhpcyl7IGlmKG9UaGlzLmhhc093blByb3BlcnR5KGF0dHIpKXtcclxuICAgICAgICBhcnIucHVzaChvVGhpc1thdHRyXSk7XHJcbiAgICB9fVxyXG4gICAgcmV0dXJuIGFycjtcclxufTtcclxuXHJcbk9iamVjdFdpdGhBcnJheU1ldGhvZHNPcHRpbWl6ZWQucHJvdG90eXBlLmpvaW4gPSBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcil7XHJcbiAgICByZXR1cm4gdGhpcy5hcnJheSgpLmpvaW4oc2VwYXJhdG9yKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIEFycmF5QW5kS2V5czJPYmplY3QocmVzdWx0LCBrZXlzKXsgXHJcbiAgICB2YXIgYWRhcHRlZCA9IHt9O1xyXG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGFycmF5S2V5LCBhcnJheUluZGV4KXtcclxuICAgICAgICBhZGFwdGVkW2FycmF5S2V5XT1yZXN1bHRbYXJyYXlJbmRleF07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBhZGFwdGVkO1xyXG59IFxyXG5cclxuT2JqZWN0V2l0aEFycmF5TWV0aG9kc09wdGltaXplZC5wcm90b3R5cGUucGxhaW4gPSBmdW5jdGlvbiBwbGFpbigpe1xyXG4gICAgdmFyIG8gPSB7fTtcclxuICAgIGxpa2VBcih0aGlzKS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpe1xyXG4gICAgICAgIG9ba2V5XT12YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG87XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFyZ3VtZW50M0FkYXB0KF9fLF9fXyx4KXsgcmV0dXJuIHg7IH1cclxuXHJcbltcclxuICAgIHtuYW1lOidmb3JFYWNoJ30sXHJcbiAgICB7bmFtZTonbWFwJyAgICAgLCByZXN1bHRBZGFwdDogQXJndW1lbnQzQWRhcHQsIHN0ZXBBZGFwdDpmdW5jdGlvbih4LCB2LCBuLCBhKXsgYVtuXT14OyAgICAgICAgfX0sXHJcbiAgICB7bmFtZTonZmlsdGVyJyAgLCByZXN1bHRBZGFwdDogQXJndW1lbnQzQWRhcHQsIHN0ZXBBZGFwdDpmdW5jdGlvbih4LCB2LCBuLCBhKXsgaWYoeCl7YVtuXT12O30gfX0sXHJcbiAgICB7bmFtZTonam9pbicgICAgLCB1c2VPcHRpbWl6ZWQ6IHRydWUgfSxcclxuICAgIHtuYW1lOidhcnJheScgICAsIHVzZU9wdGltaXplZDogdHJ1ZSB9LFxyXG4gICAge25hbWU6J2tleXMnICAgICwgdXNlT3B0aW1pemVkOiB0cnVlIH0sXHJcbiAgICB7bmFtZToncGxhaW4nICAgLCB1c2VPcHRpbWl6ZWQ6IHRydWUgfSxcclxuXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCl7XHJcbiAgICBPYmplY3RXaXRoQXJyYXlNZXRob2RzTm9uT3B0aW1pemVkLnByb3RvdHlwZVttZXRob2QubmFtZV0gPSBtZXRob2QudXNlT3B0aW1pemVkID9cclxuICAgIE9iamVjdFdpdGhBcnJheU1ldGhvZHNPcHRpbWl6ZWQucHJvdG90eXBlW21ldGhvZC5uYW1lXSA6XHJcbiAgICBmdW5jdGlvbiAoZiwgZlRoaXMpe1xyXG4gICAgICAgIHZhciBvVGhpcz10aGlzLl9vYmplY3Q7XHJcbiAgICAgICAgdmFyIGtleXM9T2JqZWN0LmtleXMob1RoaXMpO1xyXG4gICAgICAgIHZhciBhY3VtdWxhdG9yPWxpa2VBci5ub25PcHRpbWl6ZWQoKTtcclxuICAgICAgICB2YXIgcmVzdWx0PWtleXNbbWV0aG9kLm5hbWVdKGZ1bmN0aW9uKGFycmF5S2V5LCBhcnJheUluZGV4KXtcclxuICAgICAgICAgICAgdmFyIGFycmF5VmFsdWU9b1RoaXNbYXJyYXlLZXldO1xyXG4gICAgICAgICAgICByZXR1cm4gKG1ldGhvZC5zdGVwQWRhcHR8fGlkKShcclxuICAgICAgICAgICAgICAgIHR5cGVvZiBmID09PSBcImZ1bmN0aW9uXCIgPyBmLmNhbGwoZlRoaXMsIGFycmF5VmFsdWUsIGFycmF5S2V5LCBvVGhpcykgOiBmLCBcclxuICAgICAgICAgICAgICAgIGFycmF5VmFsdWUsIGFycmF5S2V5LCBhY3VtdWxhdG9yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSwgZlRoaXMpO1xyXG4gICAgICAgIHJldHVybiAobWV0aG9kLnJlc3VsdEFkYXB0fHxpZCkocmVzdWx0LCBrZXlzLCBhY3VtdWxhdG9yKTtcclxuICAgIH07XHJcbn0pO1xyXG5cclxuT2JqZWN0V2l0aEFycmF5TWV0aG9kc09wdGltaXplZC5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZiwgZlRoaXMpe1xyXG4gICAgdmFyIG9UaGlzPXRoaXMuX29iamVjdDtcclxuICAgIGZvcih2YXIgYXR0ciBpbiBvVGhpcyl7IGlmKG9UaGlzLmhhc093blByb3BlcnR5KGF0dHIpKXtcclxuICAgICAgICBmLmNhbGwoZlRoaXMsIG9UaGlzW2F0dHJdLCBhdHRyLCBvVGhpcyk7XHJcbiAgICB9fVxyXG59O1xyXG5cclxuT2JqZWN0V2l0aEFycmF5TWV0aG9kc09wdGltaXplZC5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gbWFwKGYsIGZUaGlzKXtcclxuICAgIHZhciBvVGhpcz10aGlzLl9vYmplY3Q7XHJcbiAgICB2YXIgYWN1bXVsYXRvciA9IGxpa2VBcigpO1xyXG4gICAgZm9yKHZhciBhdHRyIGluIG9UaGlzKXsgaWYob1RoaXMuaGFzT3duUHJvcGVydHkoYXR0cikpe1xyXG4gICAgICAgIGFjdW11bGF0b3JbYXR0cl0gPSBmLmNhbGwoZlRoaXMsIG9UaGlzW2F0dHJdLCBhdHRyLCBvVGhpcyk7XHJcbiAgICB9fVxyXG4gICAgcmV0dXJuIGFjdW11bGF0b3I7XHJcbn07XHJcblxyXG5PYmplY3RXaXRoQXJyYXlNZXRob2RzT3B0aW1pemVkLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiBmaWx0ZXIoZiwgZlRoaXMpe1xyXG4gICAgdmFyIG9UaGlzPXRoaXMuX29iamVjdDtcclxuICAgIHZhciBhY3VtdWxhdG9yID0gbGlrZUFyKCk7XHJcbiAgICBmb3IodmFyIGF0dHIgaW4gb1RoaXMpeyBpZihvVGhpcy5oYXNPd25Qcm9wZXJ0eShhdHRyKSl7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gb1RoaXNbYXR0cl07XHJcbiAgICAgICAgaWYoZi5jYWxsKGZUaGlzLCB2YWx1ZSwgYXR0ciwgb1RoaXMpKXtcclxuICAgICAgICAgICAgYWN1bXVsYXRvclthdHRyXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH19XHJcbiAgICByZXR1cm4gYWN1bXVsYXRvcjtcclxufTtcclxuXHJcbnJldHVybiBsaWtlQXI7XHJcblxyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9saWtlLWFyL2xpa2UtYXIuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKmpzaGludCBlcW51bGw6dHJ1ZSAqL1xuLypqc2hpbnQgbm9kZTp0cnVlICovXG5cbihmdW5jdGlvbiBjb2RlbmF1dGFzTW9kdWxlRGVmaW5pdGlvbihyb290LCBuYW1lLCBmYWN0b3J5KSB7XG4gICAgLyogZ2xvYmFsIGRlZmluZSAqL1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYodHlwZW9mIHJvb3QuZ2xvYmFsTW9kdWxlTmFtZSAhPT0gJ3N0cmluZycpe1xuICAgICAgICByb290Lmdsb2JhbE1vZHVsZU5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH1lbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIGRlZmluZShmYWN0b3J5KTtcbiAgICB9ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpe1xuICAgICAgICBleHBvcnRzW3Jvb3QuZ2xvYmFsTW9kdWxlTmFtZV0gPSBmYWN0b3J5KCk7XG4gICAgfWVsc2V7XG4gICAgICAgIHJvb3Rbcm9vdC5nbG9iYWxNb2R1bGVOYW1lXSA9IGZhY3RvcnkoKTtcbiAgICB9XG4gICAgcm9vdC5nbG9iYWxNb2R1bGVOYW1lID0gbnVsbDtcbn0pKC8qanNoaW50IC1XMDQwICovdGhpcywgJ2pzVG9IdG1sJywgZnVuY3Rpb24oKSB7XG4vKmpzaGludCArVzA0MCAqL1xuXG4vKmpzaGludCAtVzAwNCAqL1xudmFyIGpzVG9IdG1sID0ge307XG4vKmpzaGludCArVzAwNCAqL1xuXG4vKiBnbG9iYWwgZG9jdW1lbnQgKi9cblxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh4KXtcbiAgICByZXR1cm4gdHlwZW9mIHg9PT1cIm9iamVjdFwiICYmIHggJiYgeC5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xufVxuXG5mdW5jdGlvbiBzcGFjZXMobil7XG4gICAgcmV0dXJuIG5ldyBBcnJheShuKzEpLmpvaW4oJyAnKTtcbn1cblxudmFyIGh0bWxSZXNlcnZlZFN5bWJvbHM9e1xuICAgICcmJyA6JyZhbXA7JyxcbiAgICAnPCcgOicmbHQ7JyxcbiAgICAnPicgOicmZ3Q7JyxcbiAgICBcIidcIiA6JyYjMzk7JyxcbiAgICAnXCInIDonJnF1b3Q7J1xufTtcblxuanNUb0h0bWwuaHRtbD17XG4gICAgbWFuZGF0b3J5VGl0bGU6dHJ1ZVxufTtcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihzaW1wbGVUZXh0KXtcbiAgICBzaW1wbGVUZXh0PScnK3NpbXBsZVRleHQ7XG4gICAgcmV0dXJuIC9bJjw+J1wiXS8udGVzdChzaW1wbGVUZXh0KT9zaW1wbGVUZXh0LnJlcGxhY2UoL1smPD4nXCJdL2csZnVuY3Rpb24oYyl7IHJldHVybiBodG1sUmVzZXJ2ZWRTeW1ib2xzW2NdOyB9KTpzaW1wbGVUZXh0O1xufVxuXG5qc1RvSHRtbC5jb3VsZERpcmVjdFRleHRDb250ZW50PWZ1bmN0aW9uIGNvdWxkRGlyZWN0VGV4dENvbnRlbnQoeCl7XG4gICAgcmV0dXJuIHR5cGVvZiB4PT09XCJzdHJpbmdcIiB8fCB0eXBlb2YgeD09PVwibnVtYmVyXCI7XG59O1xuXG5mdW5jdGlvbiBpZGVudGl0eSh4KXsgcmV0dXJuIHg7IH1cblxudmFyIHZhbGlkRGlyZWN0UHJvcGVydGllcz17XG4gICAgdGV4dE5vZGU6e1xuICAgICAgICBjbGFzc05hbWU6J0h0bWxUZXh0Tm9kZScsXG4gICAgICAgIHByb3BlcnRpZXM6e1xuICAgICAgICAgICAgdGV4dE5vZGU6e1xuICAgICAgICAgICAgICAgIGNoZWNrczpbXG4gICAgICAgICAgICAgICAgICAgIHtjaGVjazpmdW5jdGlvbih4KXsgcmV0dXJuIHghPW51bGw7fSwgdGV4dDpcInRleHROb2RlcyBtdXN0IG5vdCBjb250YWlucyBudWxsXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAge2NoZWNrOmpzVG9IdG1sLmNvdWxkRGlyZWN0VGV4dENvbnRlbnQsIHRleHQ6XCJtdXN0IGJlIHN0cmluZyBvciBudW1iZXJcIn1cbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ZnVuY3Rpb24oeCl7IHJldHVybiB0eXBlb2YgeD09PVwic3RyaW5nXCIgfHwgeD09bnVsbD94OicnK3g7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGFnTmFtZTp7XG4gICAgICAgIGNsYXNzTmFtZTonSHRtbCcsXG4gICAgICAgIHByb3BlcnRpZXM6e1xuICAgICAgICAgICAgdGFnTmFtZTogICB7Y2hlY2tzOltcbiAgICAgICAgICAgICAgICB7Y2hlY2s6ZnVuY3Rpb24oeCl7IHJldHVybiB0eXBlb2YgeD09PVwic3RyaW5nXCI7IH0sIHRleHQ6XCJtdXN0IGJlIGEgc3RyaW5nXCJ9LFxuICAgICAgICAgICAgICAgIHtjaGVjazpmdW5jdGlvbih4KXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWpzVG9IdG1sLmh0bWxUYWdzW3hdKXsgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJqc1RvSHRtbC5IdG1sIGVycm9yOiBkaXJlY3RPYmplY3QgdGFnTmFtZSBcIit4K1wiIG5vdCBleGlzdHNcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH19ICBcbiAgICAgICAgICAgIF19LFxuICAgICAgICAgICAgYXR0cmlidXRlczp7Y2hlY2tzOltcbiAgICAgICAgICAgICAgICB7Y2hlY2s6ZnVuY3Rpb24oYXR0cmlidXRlcyl7IHJldHVybiBpc1BsYWluT2JqZWN0KGF0dHJpYnV0ZXMpOyB9LCB0ZXh0OlwibXVzdCBiZSBhIHBsYWluIE9iamVjdFwifSxcbiAgICAgICAgICAgICAgICB7Y2hlY2s6ZnVuY3Rpb24oYXR0cmlidXRlcyl7XG4gICAgICAgICAgICAgICAgICAgIC8qanNoaW50IGZvcmluOmZhbHNlICovXG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgYXR0ck5hbWUgaW4gYXR0cmlidXRlcyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvKmpzaGludCBmb3Jpbjp0cnVlICovXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0clZhbHVlPWF0dHJpYnV0ZXNbYXR0ck5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXR0clZhbHVlPT1udWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2pzLXRvLWh0bWw6IGF0dHJpYnV0ZXMgbXVzdCBub3QgY29udGFpbiBudWxsIHZhbHVlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZigoYXR0ck5hbWUgaW4ganNUb0h0bWwuaHRtbEF0dHJpYnV0ZXMpICYmIChqc1RvSHRtbC5odG1sQXR0cmlidXRlc1thdHRyTmFtZV0ucmVqZWN0U3BhY2VzKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhdHRXaGl0ZVNwYWNlcz1uZXcgUmVnRXhwKCBcIlxcXFxzXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHBhdHRXaGl0ZVNwYWNlcy50ZXN0KGF0dHJWYWx1ZSkpeyAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2pzLXRvLWh0bWw6ICcgKyBhdHRyTmFtZSArICdjbGFzcyBhdHRyaWJ1dGUgY291bGQgbm90IGNvbnRhaW4gc3BhY2VzLiBVc2UgY2xhc3NMaXN0IGF0dHJpYnV0ZS4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXR0clZhbHVlIGluc3RhbmNlb2YgQXJyYXkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyVmFsdWUgPSBhdHRyVmFsdWUuam9pbignJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH19LFxuICAgICAgICAgICAgICAgIHtjaGVjazpmdW5jdGlvbihhdHRyaWJ1dGVzLCBvKXsgIFxuICAgICAgICAgICAgICAgICAgICAvKmpzaGludCBmb3JpbjpmYWxzZSAqL1xuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGF0dHJOYW1lIGluIGF0dHJpYnV0ZXMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLypqc2hpbnQgZm9yaW46dHJ1ZSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJJbmZvPWpzVG9IdG1sLmh0bWxBdHRyaWJ1dGVzW2F0dHJOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKC8tLy50ZXN0KGF0dHJOYW1lKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZighYXR0ckluZm8pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImluZXhpc3RlbnQgYXR0cmlidXRlIFwiK0pTT04uc3RyaW5naWZ5KGF0dHJOYW1lKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighYXR0ckluZm8udGFnc1tvLnRhZ05hbWVdICYmICFhdHRySW5mby50YWdzW1wiSFRNTCBlbGVtZW50c1wiXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImF0dHJpYnV0ZSBcIitKU09OLnN0cmluZ2lmeShhdHRyTmFtZSkrXCIgZG9lcyBub3QgbWF0Y2ggd2l0aCB0YWdOYW1lIFwiK0pTT04uc3RyaW5naWZ5KG8udGFnTmFtZSkrXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICBdfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6e2NoZWNrczpbXG4gICAgICAgICAgICAgICAge2NoZWNrOmZ1bmN0aW9uKHgpeyByZXR1cm4gdHlwZW9mIHg9PT1cIm9iamVjdFwiICYmIHggaW5zdGFuY2VvZiBBcnJheTsgfSwgdGV4dDpcIm11c3QgYmUgYW4gQXJyYXlcIn0sXG4gICAgICAgICAgICAgICAge2NoZWNrOmZ1bmN0aW9uKHgsbyl7IHJldHVybiAhanNUb0h0bWwuaHRtbFRhZ3Nbby50YWdOYW1lXVtcInZvaWRcIl0gfHwgIXgubGVuZ3RoOyB9LCB0ZXh0Olwidm9pZCBlbGVtZW50cyBtdXN0IG5vdCBoYXZlIGNvbnRlbnRcIn1cbiAgICAgICAgICAgIF19LFxuICAgICAgICB9XG4gICAgfSxcbiAgICBodG1sQ29kZTp7XG4gICAgICAgIGNsYXNzTmFtZTonSHRtbERpcmVjdE5vZGUnLFxuICAgICAgICBwcm9wZXJ0aWVzOntcbiAgICAgICAgICAgIGh0bWxDb2RlOntcbiAgICAgICAgICAgICAgICBjaGVja3M6W1xuICAgICAgICAgICAgICAgICAgICB7Y2hlY2s6ZnVuY3Rpb24oeCl7IHJldHVybiB4IT1udWxsO30sIHRleHQ6XCJodG1sQ29kZSBtdXN0IG5vdCBjb250YWlucyBudWxsXCJ9LCBcbiAgICAgICAgICAgICAgICAgICAge2NoZWNrOmZ1bmN0aW9uKHgpeyByZXR1cm4gdHlwZW9mIHggPT0gXCJzdHJpbmdcIjsgfSwgdGV4dDpcImh0bWxDb2RlIG11c3QgYmUgYSBzdHJpbmdcIn0sXG4gICAgICAgICAgICAgICAgICAgIHtjaGVjazpmdW5jdGlvbigpeyByZXR1cm4ganNUb0h0bWwuaHRtbC5pbnNlY3VyZU1vZGVFbmFibGVkOyB9LCB0ZXh0OlwiaW5zZWN1cmUgZnVuY3Rpb25zIG5vdCBhbGxvd2VkXCJ9LFxuICAgICAgICAgICAgICAgICAgICB7Y2hlY2s6ZnVuY3Rpb24oeCxvKXsgcmV0dXJuIG8udmFsaWRhdG9yKHgpOyB9LCB0ZXh0OlwiaW52YWxpZCBodG1sQ29kZVwifVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2YWxpZGF0b3I6e1xuICAgICAgICAgICAgICAgIGNoZWNrczpbXG4gICAgICAgICAgICAgICAgICAgIHtjaGVjazpmdW5jdGlvbih4KXsgcmV0dXJuIHggaW5zdGFuY2VvZiBGdW5jdGlvbjsgfSwgdGV4dDogXCJ2YWxpZGF0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uXCJ9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY29tbWVudFRleHQ6e1xuICAgICAgICBjbGFzc05hbWU6J0h0bWxDb21tZW50JyxcbiAgICAgICAgcHJvcGVydGllczp7XG4gICAgICAgICAgICBjb21tZW50VGV4dDp7XG4gICAgICAgICAgICAgICAgY2hlY2tzOltcbiAgICAgICAgICAgICAgICAgICAge2NoZWNrOmZ1bmN0aW9uKHgpeyByZXR1cm4gdHlwZW9mIHggPT0gXCJzdHJpbmdcIjsgfSwgdGV4dDpcImNvbW1lbnRUZXh0IG11c3QgYmUgYSBzdHJpbmdcIn0sXG4gICAgICAgICAgICAgICAgICAgIHtjaGVjazpmdW5jdGlvbih4KXsgcmV0dXJuICEvLS0+Ly50ZXN0KHgpO30sIHRleHQ6XCJpbnZhbGlkIHRleHQgaW4gY29tbWVudFwifVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBIdG1sQmFzZShkaXJlY3RPYmplY3QsIHZhbGlkUHJvcGVydGllcyl7XG4gICAgLypqc2hpbnQgZm9yaW46ZmFsc2UgKi9cbiAgICBmb3IodmFyIHByb3BlcnR5IGluIHZhbGlkUHJvcGVydGllcyl7XG4gICAgICAgIC8qanNoaW50IGZvcmluOnRydWUgKi9cbiAgICAgICAgdmFyIHByb3BlcnR5RGVmPXZhbGlkUHJvcGVydGllc1twcm9wZXJ0eV07XG4gICAgICAgIHZhciB2YWx1ZT0ocHJvcGVydHlEZWYudHJhbnNmb3JtfHxpZGVudGl0eSkoZGlyZWN0T2JqZWN0W3Byb3BlcnR5XSk7XG4gICAgICAgIGlmKCEocHJvcGVydHkgaW4gZGlyZWN0T2JqZWN0KSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2pzVG9IdG1sLkh0bWwgZXJyb3I6IGRpcmVjdE9iamVjdCBtdXN0IGluY2x1ZGUgJytwcm9wZXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKHZhciBjPTA7IGM8cHJvcGVydHlEZWYuY2hlY2tzLmxlbmd0aDsgYysrKXtcbiAgICAgICAgICAgIHZhciBjaGVjaz1wcm9wZXJ0eURlZi5jaGVja3NbY107XG4gICAgICAgICAgICBpZighY2hlY2suY2hlY2sodmFsdWUsIGRpcmVjdE9iamVjdCkpe1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignanNUb0h0bWwuSHRtbCBlcnJvcjogZGlyZWN0T2JqZWN0ICcrcHJvcGVydHkrJyAnK2NoZWNrLnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXNbcHJvcGVydHldPXZhbHVlO1xuICAgIH1cbiAgICAvKmpzaGludCBmb3JpbjpmYWxzZSAqL1xuICAgIGZvcihwcm9wZXJ0eSBpbiBkaXJlY3RPYmplY3Qpe1xuICAgICAgICAvKmpzaGludCBmb3Jpbjp0cnVlICovXG4gICAgICAgIGlmKCEocHJvcGVydHkgaW4gdmFsaWRQcm9wZXJ0aWVzKSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2pzVG9IdG1sLkh0bWwgZXJyb3I6IGRpcmVjdE9iamVjdCBub3QgcmVjb2duaXplZCAnK3Byb3BlcnR5KycgcHJvcGVydHknKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuanNUb0h0bWwuSHRtbD1mdW5jdGlvbiBIdG1sKGRpcmVjdE9iamVjdCl7XG4gICAgSHRtbEJhc2UuY2FsbCh0aGlzLCBkaXJlY3RPYmplY3QsIHZhbGlkRGlyZWN0UHJvcGVydGllcy50YWdOYW1lLnByb3BlcnRpZXMpO1xufTtcbmpzVG9IdG1sLkh0bWwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShIdG1sQmFzZS5wcm90b3R5cGUpO1xuXG5qc1RvSHRtbC5IdG1sVGV4dE5vZGU9ZnVuY3Rpb24gSHRtbFRleHROb2RlKGRpcmVjdE9iamVjdCl7XG4gICAgSHRtbEJhc2UuY2FsbCh0aGlzLCBkaXJlY3RPYmplY3QsIHZhbGlkRGlyZWN0UHJvcGVydGllcy50ZXh0Tm9kZS5wcm9wZXJ0aWVzKTtcbn07XG5qc1RvSHRtbC5IdG1sVGV4dE5vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShIdG1sQmFzZS5wcm90b3R5cGUpO1xuXG5qc1RvSHRtbC5IdG1sRGlyZWN0Tm9kZT1mdW5jdGlvbiBIdG1sRGlyZWN0Tm9kZShkaXJlY3RPYmplY3Qpe1xuICAgIEh0bWxCYXNlLmNhbGwodGhpcywgZGlyZWN0T2JqZWN0LCB2YWxpZERpcmVjdFByb3BlcnRpZXMuaHRtbENvZGUucHJvcGVydGllcyk7XG59O1xuanNUb0h0bWwuSHRtbERpcmVjdE5vZGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShIdG1sQmFzZS5wcm90b3R5cGUpO1xuXG5qc1RvSHRtbC5IdG1sQ29tbWVudD1mdW5jdGlvbiBIdG1sQ29tbWVudChkaXJlY3RPYmplY3Qpe1xuICAgIEh0bWxCYXNlLmNhbGwodGhpcywgZGlyZWN0T2JqZWN0LCB2YWxpZERpcmVjdFByb3BlcnRpZXMuY29tbWVudFRleHQucHJvcGVydGllcyk7XG59O1xuanNUb0h0bWwuSHRtbENvbW1lbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShIdG1sQmFzZS5wcm90b3R5cGUpO1xuXG5IdG1sQmFzZS5wcm90b3R5cGUuYXR0cmlidXRlc1RvSHRtbFRleHQ9ZnVuY3Rpb24gYXR0cmlidXRlc1RvSHRtbFRleHQoKXtcbiAgICB2YXIgcGF0dE5vbldvcmRDaGFyPW5ldyBSZWdFeHAoL1xcVy8pO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmF0dHJpYnV0ZXMpLm1hcChmdW5jdGlvbihhdHRyTmFtZSl7XG4gICAgICAgIHZhciBhdHRyVmFsPXRoaXMuYXR0cmlidXRlc1thdHRyTmFtZV07XG4gICAgICAgIHZhciB0ZXh0QXR0clZhbD1hdHRyVmFsO1xuICAgICAgICB2YXIgYXR0ckRlZmluaXRpb249anNUb0h0bWwuaHRtbEF0dHJpYnV0ZXNbYXR0ck5hbWVdIHx8IHt9O1xuICAgICAgICBpZihhdHRyRGVmaW5pdGlvbi5saXN0TmFtZSAmJiB0eXBlb2YgYXR0clZhbCE9PVwic3RyaW5nXCIpe1xuICAgICAgICAgICAgdGV4dEF0dHJWYWw9YXR0clZhbC5qb2luKCcgJyk7XG4gICAgICAgIH0gXG4gICAgICAgIHZhciBlc2NhcGVkQXR0clZhbD1lc2NhcGVDaGFyKHRleHRBdHRyVmFsKTtcbiAgICAgICAgdmFyIHF1b3RpbmdBdHRyVmFsPXRleHRBdHRyVmFsPT09Jyd8fHBhdHROb25Xb3JkQ2hhci50ZXN0KHRleHRBdHRyVmFsKT8nXFwnJytlc2NhcGVkQXR0clZhbCsnXFwnJzplc2NhcGVkQXR0clZhbDtcbiAgICAgICAgcmV0dXJuICcgJythdHRyTmFtZSsnPScrcXVvdGluZ0F0dHJWYWw7XG4gICAgfSx0aGlzKS5qb2luKCcnKTtcbn07XG5cbmZ1bmN0aW9uIGludGVybmFsQXJyYXlUb0h0bWxUZXh0KGxpc3RPZk9iamVjdHMsIG9wdHMsIHJlY3Vyc2VPcHRzKXtcbiAgICByZXR1cm4gbGlzdE9mT2JqZWN0cy5tYXAoZnVuY3Rpb24obm9kZSl7XG4gICAgICAgIHJldHVybiBub2RlLnRvSHRtbFRleHQob3B0cyxyZWN1cnNlT3B0cyk7XG4gICAgfSkuam9pbignJyk7XG59XG5cbmpzVG9IdG1sLmFycmF5VG9IdG1sVGV4dCA9IGZ1bmN0aW9uIGFycmF5VG9IdG1sVGV4dChsaXN0T2ZPYmplY3RzLCBvcHRzLCByZWN1cnNlT3B0cyl7XG4gICAgcmVjdXJzZU9wdHM9cmVjdXJzZU9wdHN8fHttYXJnaW46MH07XG4gICAgcmV0dXJuIGxpc3RPZk9iamVjdHMubWFwKGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBub2RlID09PSBcInN0cmluZ1wiP2pzVG9IdG1sLmh0bWwuX3RleHQobm9kZSk6bm9kZSkudG9IdG1sVGV4dChvcHRzLHJlY3Vyc2VPcHRzKTtcbiAgICB9KS5qb2luKCcnKTtcbn07XG5cbkh0bWxCYXNlLnByb3RvdHlwZS5jb250ZW50VG9IdG1sVGV4dD1mdW5jdGlvbiBjb250ZW50VG9IdG1sVGV4dChvcHRzLHJlY3Vyc2VPcHRzKXtcbiAgICByZXR1cm4gaW50ZXJuYWxBcnJheVRvSHRtbFRleHQodGhpcy5jb250ZW50LG9wdHMse21hcmdpbjpyZWN1cnNlT3B0cy5tYXJnaW4rMn0pO1xufTtcblxuSHRtbEJhc2UucHJvdG90eXBlLnRvSHRtbERvYz1mdW5jdGlvbiB0b0h0bWxEb2Mob3B0cyxyZWN1cnNlT3B0cyl7XG4gICAgb3B0cyA9IG9wdHN8fHt9O1xuICAgIHZhciBodG1sID0ganNUb0h0bWwuaHRtbDtcbiAgICB2YXIgdGFyZ2V0PXRoaXM7XG4gICAgaWYoIW9wdHMuaW5jb21wbGV0ZSl7XG4gICAgICAgIHZhciBzb3VyY2U9dGhpcztcbiAgICAgICAgdmFyIGhlYWQ7XG4gICAgICAgIGlmKHNvdXJjZS50YWdOYW1lPT09J2h0bWwnKXtcbiAgICAgICAgICAgIHRhcmdldD1zb3VyY2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGFyZ2V0PWh0bWwuaHRtbChbc291cmNlXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXRhcmdldC5jb250ZW50Lmxlbmd0aCl7XG4gICAgICAgICAgICB0YXJnZXQuY29udGVudC5wdXNoKGh0bWwuYm9keSgpKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0YXJnZXQuY29udGVudFswXS50YWdOYW1lPT09J2hlYWQnKXtcbiAgICAgICAgICAgIGhlYWQ9dGFyZ2V0LmNvbnRlbnRbMF07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaGVhZD1odG1sLmhlYWQoKTtcbiAgICAgICAgICAgIHRhcmdldC5jb250ZW50LnVuc2hpZnQoaGVhZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGFyZ2V0LmNvbnRlbnRbMV0udGFnTmFtZSE9PSdib2R5Jyl7XG4gICAgICAgICAgICB0YXJnZXQuY29udGVudC5zaGlmdCgpO1xuICAgICAgICAgICAgLy8gdmFyIGJvZHk9aHRtbC5ib2R5KFt0YXJnZXQuY29udGVudFswXV0pO1xuICAgICAgICAgICAgdmFyIGJvZHk9aHRtbC5ib2R5KHRhcmdldC5jb250ZW50KTtcbiAgICAgICAgICAgIHRhcmdldC5jb250ZW50PVtoZWFkLCBib2R5XTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGl0bGVzPWhlYWQuY29udGVudC5maWx0ZXIoZnVuY3Rpb24oZWxlbWVudCl7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC50YWdOYW1lPT09J3RpdGxlJztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKHRpdGxlcy5sZW5ndGg+MSl7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0b0h0bWxEb2MgRVJST1I6IG11bHRpcGxlIHRpdGxlXCIpO1xuICAgICAgICB9ZWxzZSBpZih0aXRsZXMubGVuZ3RoPT0xKXtcbiAgICAgICAgICAgIGlmKG9wdHMudGl0bGUpe1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRvSHRtbERvYyBFUlJPUjogZG91YmxlIHRpdGxlXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZhciB0aXRsZVRleHQgPSBvcHRzLnRpdGxlfHxodG1sLmRlZmF1bHRUaXRsZTtcbiAgICAgICAgICAgIGlmKHRpdGxlVGV4dCl7XG4gICAgICAgICAgICAgICAgaGVhZC5jb250ZW50LnVuc2hpZnQoaHRtbC50aXRsZSh0aXRsZVRleHQpKTtcbiAgICAgICAgICAgIH1lbHNlIGlmKGpzVG9IdG1sLmh0bWwubWFuZGF0b3J5VGl0bGUpe1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRvSHRtbERvYyBFUlJPUjogbWlzc2luZyBtYW5kYXRvcnkgdGl0bGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICc8IWRvY3R5cGUgaHRtbD5cXG4nK3RhcmdldC50b0h0bWxUZXh0KG9wdHMscmVjdXJzZU9wdHMpO1xufTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5IdG1sQmFzZS5wcm90b3R5cGUudG9IdG1sVGV4dD1mdW5jdGlvbiB0b0h0bWxUZXh0KC8qb3B0cyxyZWN1cnNlT3B0cyovKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ211c3QgaW1wbGVtZW50IHRvSHRtbFRleHQnKTtcbn07XG5cbmpzVG9IdG1sLkh0bWwucHJvdG90eXBlLnRvSHRtbFRleHQ9ZnVuY3Rpb24gdG9IdG1sVGV4dChvcHRzLHJlY3Vyc2VPcHRzKXtcbiAgICBvcHRzPW9wdHN8fHt9O1xuICAgIHJlY3Vyc2VPcHRzPXJlY3Vyc2VPcHRzfHx7fTtcbiAgICByZWN1cnNlT3B0cy5tYXJnaW49cmVjdXJzZU9wdHMubWFyZ2lufHwwO1xuICAgIHZhciB0YWdJbmZvPWpzVG9IdG1sLmh0bWxUYWdzW3RoaXMudGFnTmFtZV07XG4gICAgdmFyIHRhZ0luZm9GaXJzdENoaWxkPWpzVG9IdG1sLmh0bWxUYWdzWyh0aGlzLmNvbnRlbnRbMF18fHt9KS50YWdOYW1lXXx8e307XG4gICAgdmFyIGlzdm9pZFRhZz10YWdJbmZvW1widm9pZFwiXXx8ZmFsc2U7XG4gICAgdmFyIGlubGluZUJsb2NrPSgodGFnSW5mby5kaXNwbGF5fHwnaW5saW5lJyk9PT0naW5saW5lJyk7XG4gICAgdmFyIGZpcnN0Q2hpbGRJbmxpbmU9KHRhZ0luZm9GaXJzdENoaWxkLmRpc3BsYXl8fCdpbmxpbmUnKSE9PSdpbmxpbmUnO1xuICAgIHZhciBubD0ob3B0cy5wcmV0dHkgJiYgIWlubGluZUJsb2NrPydcXG4nOicnKTtcbiAgICB2YXIgc3A9KG9wdHMucHJldHR5ICYmICFpbmxpbmVCbG9jaz9zcGFjZXM6ZnVuY3Rpb24oKXtyZXR1cm4gJyc7IH0pO1xuICAgIHJldHVybiBzcChyZWN1cnNlT3B0cy5tYXJnaW4pK1wiPFwiK1xuICAgICAgICB0aGlzLnRhZ05hbWUrXG4gICAgICAgIHRoaXMuYXR0cmlidXRlc1RvSHRtbFRleHQoKStcbiAgICAgICAgXCI+XCIrKGZpcnN0Q2hpbGRJbmxpbmU/bmw6JycpK1xuICAgICAgICB0aGlzLmNvbnRlbnRUb0h0bWxUZXh0KG9wdHMscmVjdXJzZU9wdHMpK1xuICAgICAgICAoZmlyc3RDaGlsZElubGluZT9zcChyZWN1cnNlT3B0cy5tYXJnaW4pOicnKStcbiAgICAgICAgKGlzdm9pZFRhZz8nJzpcIjwvXCIrdGhpcy50YWdOYW1lK1wiPlwiKStubDtcblxufTtcblxuanNUb0h0bWwuSHRtbFRleHROb2RlLnByb3RvdHlwZS50b0h0bWxUZXh0PWZ1bmN0aW9uIHRvSHRtbFRleHQoLypvcHRzLHJlY3Vyc2VPcHRzKi8pe1xuICAgIHJldHVybiBlc2NhcGVDaGFyKHRoaXMudGV4dE5vZGUpO1xufTtcblxuanNUb0h0bWwuSHRtbERpcmVjdE5vZGUucHJvdG90eXBlLnRvSHRtbFRleHQ9ZnVuY3Rpb24gdG9IdG1sVGV4dCgvKm9wdHMscmVjdXJzZU9wdHMqLyl7XG4gICAgcmV0dXJuIHRoaXMuaHRtbENvZGU7XG59O1xuXG5qc1RvSHRtbC5IdG1sQ29tbWVudC5wcm90b3R5cGUudG9IdG1sVGV4dD1mdW5jdGlvbiB0b0h0bWxUZXh0KC8qb3B0cyxyZWN1cnNlT3B0cyovKXtcbiAgICByZXR1cm4gXCI8IS0tXCIrdGhpcy5jb21tZW50VGV4dCtcIi0tPlwiO1xufTtcblxuanNUb0h0bWwuZGlyZWN0PWZ1bmN0aW9uIGRpcmVjdChkaXJlY3RPYmplY3Qpe1xuICAgIGZvcih2YXIgbWFpbkF0dHIgaW4gdmFsaWREaXJlY3RQcm9wZXJ0aWVzKXtcbiAgICAgICAgaWYobWFpbkF0dHIgaW4gZGlyZWN0T2JqZWN0KXtcbiAgICAgICAgICAgIHJldHVybiBuZXcganNUb0h0bWxbdmFsaWREaXJlY3RQcm9wZXJ0aWVzW21haW5BdHRyXS5jbGFzc05hbWVdKGRpcmVjdE9iamVjdCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdqcy10by1odG1sLmRpcmVjdCBlcnJvcjogaW52YWxpZCBhcmd1bWVudHMgdG8gZGlyZWN0IGZ1bmN0aW9uJyk7XG59O1xuXG5qc1RvSHRtbC5pbmRpcmVjdD1mdW5jdGlvbiBpbmRpcmVjdCh0YWdOYW1lLGNvbnRlbnRPckF0dHJpYnV0ZXMsY29udGVudElmVGhlcmVBcmVBdHRyaWJ1dGVzKXtcbiAgICB2YXIgdGhlcmVBcmVBdHRyaWJ1dGVzPWlzUGxhaW5PYmplY3QoY29udGVudE9yQXR0cmlidXRlcyk7XG4gICAgaWYoIXRoZXJlQXJlQXR0cmlidXRlcyAmJiBjb250ZW50T3JBdHRyaWJ1dGVzIGluc3RhbmNlb2YgT2JqZWN0ICYmICEoY29udGVudE9yQXR0cmlidXRlcyBpbnN0YW5jZW9mIEFycmF5KSl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignanNUb0h0bWwuJyt0YWdOYW1lKycgZXhwZWN0cyBwbGFpbiBvYmplY3Qgb2YgYXR0cmlidXRlcyBvciBhcnJheSBvZiBjb250ZW50Jyk7XG4gICAgfVxuICAgIHZhciBhdHRyaWJ1dGVzID0gdGhlcmVBcmVBdHRyaWJ1dGVzP2NvbnRlbnRPckF0dHJpYnV0ZXM6e307XG4gICAgdmFyIGNvbnRlbnQgICAgPSB0aGVyZUFyZUF0dHJpYnV0ZXM/Y29udGVudElmVGhlcmVBcmVBdHRyaWJ1dGVzOmNvbnRlbnRPckF0dHJpYnV0ZXM7XG4gICAgaWYoIXRoZXJlQXJlQXR0cmlidXRlcyAmJiAoYXJndW1lbnRzLmxlbmd0aD4zIHx8IGNvbnRlbnRJZlRoZXJlQXJlQXR0cmlidXRlcyAhPSBudWxsKSl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignanNUb0h0bWwuJyt0YWdOYW1lKycgRVJST1I6IHRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgbm90IGFuIGF0dHJpYnV0ZSBvYmplY3QgdGhlbiBtdXN0IHRoZXJlIG5vIGJlIGEgc2Vjb25kIHBhcmFtZXRlcicpO1xuICAgIH1cbiAgICByZXR1cm4ganNUb0h0bWwuZGlyZWN0KHtcbiAgICAgICAgdGFnTmFtZTp0YWdOYW1lLFxuICAgICAgICBhdHRyaWJ1dGVzOmF0dHJpYnV0ZXMsXG4gICAgICAgIGNvbnRlbnQ6KGNvbnRlbnQgaW5zdGFuY2VvZiBBcnJheT9jb250ZW50Oltjb250ZW50XSkuZmlsdGVyKGZ1bmN0aW9uKGVsZW1lbnQpe1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQhPT1udWxsICYmIGVsZW1lbnQhPT11bmRlZmluZWQ7XG4gICAgICAgIH0pLm1hcChmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgICAgICAgIHJldHVybiBqc1RvSHRtbC5jb3VsZERpcmVjdFRleHRDb250ZW50KGVsZW1lbnQpP2pzVG9IdG1sLmRpcmVjdCh7dGV4dE5vZGU6ZWxlbWVudH0pOmVsZW1lbnQ7XG4gICAgICAgIH0pXG4gICAgfSk7XG59O1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0Jsb2NrLWxldmVsX2VsZW1lbnRzXG5qc1RvSHRtbC5odG1sVGFncz17XG4gICAgXCJhXCIgICAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgaHlwZXJsaW5rXCJ9LFxuICAgIFwiYWJiclwiICAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBhbiBhYmJyZXZpYXRpb25cIn0sXG4gICAgXCJhY3JvbnltXCIgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJOb3Qgc3VwcG9ydGVkIGluIEhUTUw1LiBEZWZpbmVzIGFuIGFjcm9ueW1cIn0sXG4gICAgXCJhZGRyZXNzXCIgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGNvbnRhY3QgaW5mb3JtYXRpb24gZm9yIHRoZSBhdXRob3Ivb3duZXIgb2YgYSBkb2N1bWVudFwifSxcbiAgICBcImFwcGxldFwiICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIk5vdCBzdXBwb3J0ZWQgaW4gSFRNTDUuIERlcHJlY2F0ZWQgaW4gSFRNTCA0LjAxLiBEZWZpbmVzIGFuIGVtYmVkZGVkIGFwcGxldFwifSxcbiAgICBcImFyZWFcIiAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBcInZvaWRcIjp0cnVlLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYW4gYXJlYSBpbnNpZGUgYW4gaW1hZ2UtbWFwXCJ9LFxuICAgIFwiYXJ0aWNsZVwiICAgICAgOnt0eXBlOidIVE1MNScsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBhbiBhcnRpY2xlXCJ9LFxuICAgIFwiYXNpZGVcIiAgICAgICAgOnt0eXBlOidIVE1MNScsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBjb250ZW50IGFzaWRlIGZyb20gdGhlIHBhZ2UgY29udGVudFwifSxcbiAgICBcImF1ZGlvXCIgICAgICAgIDp7dHlwZTonSFRNTDUnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgc291bmQgY29udGVudFwifSxcbiAgICBcImJcIiAgICAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYm9sZCB0ZXh0XCJ9LFxuICAgIFwiYmFzZVwiICAgICAgICAgOnt0eXBlOidIVE1MNCcsIFwidm9pZFwiOnRydWUsIGRlc2NyaXB0aW9uOlwiU3BlY2lmaWVzIHRoZSBiYXNlIFVSTC90YXJnZXQgZm9yIGFsbCByZWxhdGl2ZSBVUkxzIGluIGEgZG9jdW1lbnRcIn0sXG4gICAgXCJiYXNlZm9udFwiICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJOb3Qgc3VwcG9ydGVkIGluIEhUTUw1LiBEZXByZWNhdGVkIGluIEhUTUwgNC4wMS4gU3BlY2lmaWVzIGEgZGVmYXVsdCBjb2xvciwgc2l6ZSwgYW5kIGZvbnQgZm9yIGFsbCB0ZXh0IGluIGEgZG9jdW1lbnRcIn0sXG4gICAgXCJiZGlcIiAgICAgICAgICA6e3R5cGU6J0hUTUw1JywgZGVzY3JpcHRpb246XCJJc29sYXRlcyBhIHBhcnQgb2YgdGV4dCB0aGF0IG1pZ2h0IGJlIGZvcm1hdHRlZCBpbiBhIGRpZmZlcmVudCBkaXJlY3Rpb24gZnJvbSBvdGhlciB0ZXh0IG91dHNpZGUgaXRcIn0sXG4gICAgXCJiZG9cIiAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJPdmVycmlkZXMgdGhlIGN1cnJlbnQgdGV4dCBkaXJlY3Rpb25cIn0sXG4gICAgXCJiaWdcIiAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJOb3Qgc3VwcG9ydGVkIGluIEhUTUw1LiBEZWZpbmVzIGJpZyB0ZXh0XCJ9LFxuICAgIFwiYmxvY2txdW90ZVwiICAgOnt0eXBlOidIVE1MNCcsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBhIHNlY3Rpb24gdGhhdCBpcyBxdW90ZWQgZnJvbSBhbm90aGVyIHNvdXJjZVwifSxcbiAgICBcImJvZHlcIiAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgdGhlIGRvY3VtZW50J3MgYm9keVwifSxcbiAgICBcImJyXCIgICAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBcInZvaWRcIjp0cnVlLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSBzaW5nbGUgbGluZSBicmVha1wifSxcbiAgICBcImJ1dHRvblwiICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSBjbGlja2FibGUgYnV0dG9uXCJ9LFxuICAgIFwiY2FudmFzXCIgICAgICAgOnt0eXBlOidIVE1MNScsIGRlc2NyaXB0aW9uOlwiVXNlZCB0byBkcmF3IGdyYXBoaWNzLCBvbiB0aGUgZmx5LCB2aWEgc2NyaXB0aW5nICh1c3VhbGx5IEphdmFTY3JpcHQpXCJ9LFxuICAgIFwiY2FwdGlvblwiICAgICAgOnt0eXBlOidIVE1MNCcsIGRpc3BsYXk6J25vdC1pbmxpbmUnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSB0YWJsZSBjYXB0aW9uXCJ9LFxuICAgIFwiY2VudGVyXCIgICAgICAgOnt0eXBlOidIVE1MNCcsIGRlc2NyaXB0aW9uOlwiTm90IHN1cHBvcnRlZCBpbiBIVE1MNS4gRGVwcmVjYXRlZCBpbiBIVE1MIDQuMDEuIERlZmluZXMgY2VudGVyZWQgdGV4dFwifSxcbiAgICBcImNpdGVcIiAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgdGhlIHRpdGxlIG9mIGEgd29ya1wifSxcbiAgICBcImNvZGVcIiAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSBwaWVjZSBvZiBjb21wdXRlciBjb2RlXCJ9LFxuICAgIFwiY29sXCIgICAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRpc3BsYXk6J25vdC1pbmxpbmUnLCBcInZvaWRcIjp0cnVlLCBkZXNjcmlwdGlvbjpcIlNwZWNpZmllcyBjb2x1bW4gcHJvcGVydGllcyBmb3IgZWFjaCBjb2x1bW4gd2l0aGluIGEgPGNvbGdyb3VwPiBlbGVtZW50IFwifSxcbiAgICBcImNvbGdyb3VwXCIgICAgIDp7dHlwZTonSFRNTDQnLCBkaXNwbGF5Oidub3QtaW5saW5lJywgZGVzY3JpcHRpb246XCJTcGVjaWZpZXMgYSBncm91cCBvZiBvbmUgb3IgbW9yZSBjb2x1bW5zIGluIGEgdGFibGUgZm9yIGZvcm1hdHRpbmdcIn0sXG4gICAgXCJjb21tYW5kXCIgICAgICA6e3R5cGU6J0hUTUw1JywgXCJ2b2lkXCI6dHJ1ZSwgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgY29tbWFuZCBidXR0b24gdGhhdCBhIHVzZXIgY2FuIGludm9rZVwifSxcbiAgICBcImRhdGFsaXN0XCIgICAgIDp7dHlwZTonSFRNTDUnLCBkZXNjcmlwdGlvbjpcIlNwZWNpZmllcyBhIGxpc3Qgb2YgcHJlLWRlZmluZWQgb3B0aW9ucyBmb3IgaW5wdXQgY29udHJvbHNcIn0sXG4gICAgXCJkZFwiICAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgZGVzY3JpcHRpb24gb2YgYW4gaXRlbSBpbiBhIGRlZmluaXRpb24gbGlzdFwifSxcbiAgICBcImRlbFwiICAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgdGV4dCB0aGF0IGhhcyBiZWVuIGRlbGV0ZWQgZnJvbSBhIGRvY3VtZW50XCJ9LFxuICAgIFwiZGV0YWlsc1wiICAgICAgOnt0eXBlOidIVE1MNScsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBhZGRpdGlvbmFsIGRldGFpbHMgdGhhdCB0aGUgdXNlciBjYW4gdmlldyBvciBoaWRlXCJ9LFxuICAgIFwiZGZuXCIgICAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBhIGRlZmluaXRpb24gdGVybVwifSxcbiAgICBcImRpYWxvZ1wiICAgICAgIDp7dHlwZTonSFRNTDUnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSBkaWFsb2cgYm94IG9yIHdpbmRvd1wifSxcbiAgICBcImRpclwiICAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIk5vdCBzdXBwb3J0ZWQgaW4gSFRNTDUuIERlcHJlY2F0ZWQgaW4gSFRNTCA0LjAxLiBEZWZpbmVzIGEgZGlyZWN0b3J5IGxpc3RcIn0sXG4gICAgXCJkaXZcIiAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGlzcGxheTonYmxvY2snLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSBzZWN0aW9uIGluIGEgZG9jdW1lbnRcIn0sXG4gICAgXCJkbFwiICAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgZGVmaW5pdGlvbiBsaXN0XCJ9LFxuICAgIFwiZHRcIiAgICAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBhIHRlcm0gKGFuIGl0ZW0pIGluIGEgZGVmaW5pdGlvbiBsaXN0XCJ9LFxuICAgIFwiZW1cIiAgICAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBlbXBoYXNpemVkIHRleHQgXCJ9LFxuICAgIFwiZW1iZWRcIiAgICAgICAgOnt0eXBlOidIVE1MNScsIFwidm9pZFwiOnRydWUsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBhIGNvbnRhaW5lciBmb3IgYW4gZXh0ZXJuYWwgKG5vbi1IVE1MKSBhcHBsaWNhdGlvblwifSxcbiAgICBcImZpZWxkc2V0XCIgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkdyb3VwcyByZWxhdGVkIGVsZW1lbnRzIGluIGEgZm9ybVwifSxcbiAgICBcImZpZ2NhcHRpb25cIiAgIDp7dHlwZTonSFRNTDUnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSBjYXB0aW9uIGZvciBhIDxmaWd1cmU+IGVsZW1lbnRcIn0sXG4gICAgXCJmaWd1cmVcIiAgICAgICA6e3R5cGU6J0hUTUw1JywgZGVzY3JpcHRpb246XCJTcGVjaWZpZXMgc2VsZi1jb250YWluZWQgY29udGVudFwifSxcbiAgICBcImZvbnRcIiAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIk5vdCBzdXBwb3J0ZWQgaW4gSFRNTDUuIERlcHJlY2F0ZWQgaW4gSFRNTCA0LjAxLiBEZWZpbmVzIGZvbnQsIGNvbG9yLCBhbmQgc2l6ZSBmb3IgdGV4dFwifSxcbiAgICBcImZvb3RlclwiICAgICAgIDp7dHlwZTonSFRNTDUnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSBmb290ZXIgZm9yIGEgZG9jdW1lbnQgb3Igc2VjdGlvblwifSxcbiAgICBcImZvcm1cIiAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYW4gSFRNTCBmb3JtIGZvciB1c2VyIGlucHV0XCJ9LFxuICAgIFwiZnJhbWVcIiAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRlc2NyaXB0aW9uOlwiTm90IHN1cHBvcnRlZCBpbiBIVE1MNS4gRGVmaW5lcyBhIHdpbmRvdyAoYSBmcmFtZSkgaW4gYSBmcmFtZXNldFwifSxcbiAgICBcImZyYW1lc2V0XCIgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIk5vdCBzdXBwb3J0ZWQgaW4gSFRNTDUuIERlZmluZXMgYSBzZXQgb2YgZnJhbWVzXCJ9LFxuICAgIFwiaDFcIiAgICAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRpc3BsYXk6J2Jsb2NrJywgZGVzY3JpcHRpb246XCIgRGVmaW5lcyBIVE1MIGhlYWRpbmdzIGxldmVsIDFcIn0sXG4gICAgXCJoMlwiICAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGlzcGxheTonYmxvY2snLCBkZXNjcmlwdGlvbjpcIiBEZWZpbmVzIEhUTUwgaGVhZGluZ3MgbGV2ZWwgMlwifSxcbiAgICBcImgzXCIgICAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkaXNwbGF5OidibG9jaycsIGRlc2NyaXB0aW9uOlwiIERlZmluZXMgSFRNTCBoZWFkaW5ncyBsZXZlbCAzXCJ9LFxuICAgIFwiaDRcIiAgICAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRpc3BsYXk6J2Jsb2NrJywgZGVzY3JpcHRpb246XCIgRGVmaW5lcyBIVE1MIGhlYWRpbmdzIGxldmVsIDRcIn0sXG4gICAgXCJoNVwiICAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGlzcGxheTonYmxvY2snLCBkZXNjcmlwdGlvbjpcIiBEZWZpbmVzIEhUTUwgaGVhZGluZ3MgbGV2ZWwgNVwifSxcbiAgICBcImg2XCIgICAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkaXNwbGF5OidibG9jaycsIGRlc2NyaXB0aW9uOlwiIERlZmluZXMgSFRNTCBoZWFkaW5ncyBsZXZlbCA2XCJ9LFxuICAgIFwiaGVhZFwiICAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZG9jdW1lbnRcIn0sXG4gICAgXCJoZWFkZXJcIiAgICAgICA6e3R5cGU6J0hUTUw1JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgaGVhZGVyIGZvciBhIGRvY3VtZW50IG9yIHNlY3Rpb25cIn0sXG4gICAgXCJoZ3JvdXBcIiAgICAgICA6e3R5cGU6J0hUTUw1JywgZGVzY3JpcHRpb246XCJHcm91cHMgaGVhZGluZyAoIDxoMT4gdG8gPGg2PikgZWxlbWVudHNcIn0sXG4gICAgXCJoclwiICAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgXCJ2b2lkXCI6dHJ1ZSwgZGVzY3JpcHRpb246XCIgRGVmaW5lcyBhIHRoZW1hdGljIGNoYW5nZSBpbiB0aGUgY29udGVudFwifSxcbiAgICBcImh0bWxcIiAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgdGhlIHJvb3Qgb2YgYW4gSFRNTCBkb2N1bWVudFwifSxcbiAgICBcImlcIiAgICAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSBwYXJ0IG9mIHRleHQgaW4gYW4gYWx0ZXJuYXRlIHZvaWNlIG9yIG1vb2RcIn0sXG4gICAgXCJpZnJhbWVcIiAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGFuIGlubGluZSBmcmFtZVwifSxcbiAgICBcImltZ1wiICAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBcInZvaWRcIjp0cnVlLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYW4gaW1hZ2VcIn0sXG4gICAgXCJpbnB1dFwiICAgICAgICA6e3R5cGU6J0hUTUw0JywgXCJ2b2lkXCI6dHJ1ZSwgZGVzY3JpcHRpb246XCJEZWZpbmVzIGFuIGlucHV0IGNvbnRyb2xcIn0sXG4gICAgXCJpbnNcIiAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgdGV4dCB0aGF0IGhhcyBiZWVuIGluc2VydGVkIGludG8gYSBkb2N1bWVudFwifSxcbiAgICBcImtiZFwiICAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMga2V5Ym9hcmQgaW5wdXRcIn0sXG4gICAgXCJrZXlnZW5cIiAgICAgICA6e3R5cGU6J0hUTUw1JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEga2V5LXBhaXIgZ2VuZXJhdG9yIGZpZWxkIChmb3IgZm9ybXMpXCJ9LFxuICAgIFwibGFiZWxcIiAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBhIGxhYmVsIGZvciBhbiA8aW5wdXQ+IGVsZW1lbnRcIn0sXG4gICAgXCJsZWdlbmRcIiAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgY2FwdGlvbiBmb3IgYSA8ZmllbGRzZXQ+LCA8ZmlndXJlPiwgb3IgPGRldGFpbHM+IGVsZW1lbnRcIn0sXG4gICAgXCJsaVwiICAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgbGlzdCBpdGVtXCJ9LFxuICAgIFwibGlua1wiICAgICAgICAgOnt0eXBlOidIVE1MNCcsIFwidm9pZFwiOnRydWUsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4gYSBkb2N1bWVudCBhbmQgYW4gZXh0ZXJuYWwgcmVzb3VyY2UgKG1vc3QgdXNlZCB0byBsaW5rIHRvIHN0eWxlIHNoZWV0cylcIn0sXG4gICAgXCJtYXBcIiAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgY2xpZW50LXNpZGUgaW1hZ2UtbWFwXCJ9LFxuICAgIFwibWFya1wiICAgICAgICAgOnt0eXBlOidIVE1MNScsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBtYXJrZWQvaGlnaGxpZ2h0ZWQgdGV4dFwifSxcbiAgICBcIm1lbnVcIiAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSBsaXN0L21lbnUgb2YgY29tbWFuZHNcIn0sXG4gICAgXCJtZXRhXCIgICAgICAgICA6e3R5cGU6J0hUTUw0JywgXCJ2b2lkXCI6dHJ1ZSwgZGVzY3JpcHRpb246XCJEZWZpbmVzIG1ldGFkYXRhIGFib3V0IGFuIEhUTUwgZG9jdW1lbnRcIn0sXG4gICAgXCJtZXRlclwiICAgICAgICA6e3R5cGU6J0hUTUw1JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgc2NhbGFyIG1lYXN1cmVtZW50IHdpdGhpbiBhIGtub3duIHJhbmdlIChhIGdhdWdlKVwifSxcbiAgICBcIm5hdlwiICAgICAgICAgIDp7dHlwZTonSFRNTDUnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgbmF2aWdhdGlvbiBsaW5rc1wifSxcbiAgICBcIm5vZnJhbWVzXCIgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIk5vdCBzdXBwb3J0ZWQgaW4gSFRNTDUuIERlZmluZXMgYW4gYWx0ZXJuYXRlIGNvbnRlbnQgZm9yIHVzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZnJhbWVzXCJ9LFxuICAgIFwibm9zY3JpcHRcIiAgICAgOnt0eXBlOidIVE1MNCcsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBhbiBhbHRlcm5hdGUgY29udGVudCBmb3IgdXNlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBjbGllbnQtc2lkZSBzY3JpcHRzXCJ9LFxuICAgIFwib2JqZWN0XCIgICAgICAgOnt0eXBlOidIVE1MNCcsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBhbiBlbWJlZGRlZCBvYmplY3RcIn0sXG4gICAgXCJvbFwiICAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGFuIG9yZGVyZWQgbGlzdFwifSxcbiAgICBcIm9wdGdyb3VwXCIgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSBncm91cCBvZiByZWxhdGVkIG9wdGlvbnMgaW4gYSBkcm9wLWRvd24gbGlzdFwifSxcbiAgICBcIm9wdGlvblwiICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYW4gb3B0aW9uIGluIGEgZHJvcC1kb3duIGxpc3RcIn0sXG4gICAgXCJvdXRwdXRcIiAgICAgICA6e3R5cGU6J0hUTUw1JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIHRoZSByZXN1bHQgb2YgYSBjYWxjdWxhdGlvblwifSxcbiAgICBcInBcIiAgICAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkaXNwbGF5OidibG9jaycsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBhIHBhcmFncmFwaFwifSxcbiAgICBcInBhcmFtXCIgICAgICAgIDp7dHlwZTonSFRNTDQnLCBcInZvaWRcIjp0cnVlLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSBwYXJhbWV0ZXIgZm9yIGFuIG9iamVjdFwifSxcbiAgICBcInByZVwiICAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgcHJlZm9ybWF0dGVkIHRleHRcIn0sXG4gICAgXCJwcm9ncmVzc1wiICAgICA6e3R5cGU6J0hUTUw1JywgZGVzY3JpcHRpb246XCJSZXByZXNlbnRzIHRoZSBwcm9ncmVzcyBvZiBhIHRhc2tcIn0sXG4gICAgXCJxXCIgICAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgc2hvcnQgcXVvdGF0aW9uXCJ9LFxuICAgIFwicnBcIiAgICAgICAgICAgOnt0eXBlOidIVE1MNScsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyB3aGF0IHRvIHNob3cgaW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBydWJ5IGFubm90YXRpb25zXCJ9LFxuICAgIFwicnRcIiAgICAgICAgICAgOnt0eXBlOidIVE1MNScsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBhbiBleHBsYW5hdGlvbi9wcm9udW5jaWF0aW9uIG9mIGNoYXJhY3RlcnMgKGZvciBFYXN0IEFzaWFuIHR5cG9ncmFwaHkpXCJ9LFxuICAgIFwicnVieVwiICAgICAgICAgOnt0eXBlOidIVE1MNScsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBhIHJ1YnkgYW5ub3RhdGlvbiAoZm9yIEVhc3QgQXNpYW4gdHlwb2dyYXBoeSlcIn0sXG4gICAgXCJzXCIgICAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIHRleHQgdGhhdCBpcyBubyBsb25nZXIgY29ycmVjdFwifSxcbiAgICBcInNhbXBcIiAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgc2FtcGxlIG91dHB1dCBmcm9tIGEgY29tcHV0ZXIgcHJvZ3JhbVwifSxcbiAgICBcInNjcmlwdFwiICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSBjbGllbnQtc2lkZSBzY3JpcHRcIn0sXG4gICAgXCJzZWN0aW9uXCIgICAgICA6e3R5cGU6J0hUTUw1JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgc2VjdGlvbiBpbiBhIGRvY3VtZW50XCJ9LFxuICAgIFwic2VsZWN0XCIgICAgICAgOnt0eXBlOidIVE1MNCcsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBhIGRyb3AtZG93biBsaXN0XCJ9LFxuICAgIFwic21hbGxcIiAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBzbWFsbGVyIHRleHRcIn0sXG4gICAgXCJzb3VyY2VcIiAgICAgICA6e3R5cGU6J0hUTUw1JywgXCJ2b2lkXCI6dHJ1ZSwgZGVzY3JpcHRpb246XCJEZWZpbmVzIG11bHRpcGxlIG1lZGlhIHJlc291cmNlcyBmb3IgbWVkaWEgZWxlbWVudHMgKDx2aWRlbz4gYW5kIDxhdWRpbz4pXCJ9LFxuICAgIFwic3BhblwiICAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBhIHNlY3Rpb24gaW4gYSBkb2N1bWVudFwifSxcbiAgICBcInN0cmlrZVwiICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIk5vdCBzdXBwb3J0ZWQgaW4gSFRNTDUuIERlcHJlY2F0ZWQgaW4gSFRNTCA0LjAxLiBEZWZpbmVzIHN0cmlrZXRocm91Z2ggdGV4dFwifSxcbiAgICBcInN0cm9uZ1wiICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgaW1wb3J0YW50IHRleHRcIn0sXG4gICAgXCJzdHlsZVwiICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIHN0eWxlIGluZm9ybWF0aW9uIGZvciBhIGRvY3VtZW50XCJ9LFxuICAgIFwic3ViXCIgICAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBzdWJzY3JpcHRlZCB0ZXh0XCJ9LFxuICAgIFwic3VtbWFyeVwiICAgICAgOnt0eXBlOidIVE1MNScsIGRlc2NyaXB0aW9uOlwiRGVmaW5lcyBhIHZpc2libGUgaGVhZGluZyBmb3IgYSA8ZGV0YWlscz4gZWxlbWVudFwifSxcbiAgICBcInN1cFwiICAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgc3VwZXJzY3JpcHRlZCB0ZXh0XCJ9LFxuICAgIFwidGFibGVcIiAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRpc3BsYXk6J25vdC1pbmxpbmUnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSB0YWJsZVwifSxcbiAgICBcInRib2R5XCIgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkaXNwbGF5Oidub3QtaW5saW5lJywgZGVzY3JpcHRpb246XCJHcm91cHMgdGhlIGJvZHkgY29udGVudCBpbiBhIHRhYmxlXCJ9LFxuICAgIFwidGRcIiAgICAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRpc3BsYXk6J25vdC1pbmxpbmUnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSBjZWxsIGluIGEgdGFibGVcIn0sXG4gICAgXCJ0ZXh0YXJlYVwiICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgbXVsdGlsaW5lIGlucHV0IGNvbnRyb2wgKHRleHQgYXJlYSlcIn0sXG4gICAgXCJ0Zm9vdFwiICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGlzcGxheTonbm90LWlubGluZScsIGRlc2NyaXB0aW9uOlwiR3JvdXBzIHRoZSBmb290ZXIgY29udGVudCBpbiBhIHRhYmxlXCJ9LFxuICAgIFwidGhcIiAgICAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRpc3BsYXk6J25vdC1pbmxpbmUnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSBoZWFkZXIgY2VsbCBpbiBhIHRhYmxlXCJ9LFxuICAgIFwidGhlYWRcIiAgICAgICAgOnt0eXBlOidIVE1MNCcsIGRpc3BsYXk6J25vdC1pbmxpbmUnLCBkZXNjcmlwdGlvbjpcIkdyb3VwcyB0aGUgaGVhZGVyIGNvbnRlbnQgaW4gYSB0YWJsZVwifSxcbiAgICBcInRpbWVcIiAgICAgICAgIDp7dHlwZTonSFRNTDUnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYSBkYXRlL3RpbWVcIn0sXG4gICAgXCJ0aXRsZVwiICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgdGl0bGUgZm9yIHRoZSBkb2N1bWVudFwifSxcbiAgICBcInRyXCIgICAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkaXNwbGF5Oidub3QtaW5saW5lJywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgcm93IGluIGEgdGFibGVcIn0sXG4gICAgXCJ0cmFja1wiICAgICAgICA6e3R5cGU6J0hUTUw1JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIHRleHQgdHJhY2tzIGZvciBtZWRpYSBlbGVtZW50cyAoPHZpZGVvPiBhbmQgPGF1ZGlvPilcIn0sXG4gICAgXCJ0dFwiICAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJOb3Qgc3VwcG9ydGVkIGluIEhUTUw1LiBEZWZpbmVzIHRlbGV0eXBlIHRleHRcIn0sXG4gICAgXCJ1XCIgICAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIHRleHQgdGhhdCBzaG91bGQgYmUgc3R5bGlzdGljYWxseSBkaWZmZXJlbnQgZnJvbSBub3JtYWwgdGV4dFwifSxcbiAgICBcInVsXCIgICAgICAgICAgIDp7dHlwZTonSFRNTDQnLCBkZXNjcmlwdGlvbjpcIkRlZmluZXMgYW4gdW5vcmRlcmVkIGxpc3RcIn0sXG4gICAgXCJ2YXJcIiAgICAgICAgICA6e3R5cGU6J0hUTUw0JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgdmFyaWFibGVcIn0sXG4gICAgXCJ2aWRlb1wiICAgICAgICA6e3R5cGU6J0hUTUw1JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgdmlkZW8gb3IgbW92aWVcIn0sXG4gICAgXCJ3YnJcIiAgICAgICAgICA6e3R5cGU6J0hUTUw1JywgZGVzY3JpcHRpb246XCJEZWZpbmVzIGEgcG9zc2libGUgbGluZS1icmVha1wifVxufTtcblxuLy9cbi8vIGdlbmVyYXRlZCBieSBnZW5lcmF0b3JzL2F0dHJpYnV0ZXMuanNcbmpzVG9IdG1sLmh0bWxBdHRyaWJ1dGVzPXtcbiAgICBcImFiYnJcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJ0aFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkFsdGVybmF0aXZlIGxhYmVsIHRvIHVzZSBmb3IgdGhlIGhlYWRlciBjZWxsIHdoZW4gcmVmZXJlbmNpbmcgdGhlIGNlbGwgaW4gb3RoZXIgY29udGV4dHNcIixcInZhbHVlXCI6IFwiVGV4dCpcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJhYmJyXCJcbiAgICB9LFxuICAgIFwiYWNjZXB0XCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiaW5wdXRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJIaW50IGZvciBleHBlY3RlZCBmaWxlIHR5cGUgaW4gZmlsZSB1cGxvYWQgY29udHJvbHNcIixcInZhbHVlXCI6IFwiU2V0IG9mIGNvbW1hLXNlcGFyYXRlZCB0b2tlbnMqIGNvbnNpc3Rpbmcgb2YgdmFsaWQgTUlNRSB0eXBlcyB3aXRoIG5vIHBhcmFtZXRlcnMgb3IgYXVkaW8vKiwgdmlkZW8vKiwgb3IgaW1hZ2UvKlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImFjY2VwdFwiXG4gICAgfSxcbiAgICBcImFjY2VwdC1jaGFyc2V0XCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiZm9ybVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkNoYXJhY3RlciBlbmNvZGluZ3MgdG8gdXNlIGZvciBmb3JtIHN1Ym1pc3Npb25cIixcInZhbHVlXCI6IFwiT3JkZXJlZCBzZXQgb2YgdW5pcXVlIHNwYWNlLXNlcGFyYXRlZCB0b2tlbnMsIEFTQ0lJIGNhc2UtaW5zZW5zaXRpdmUsIGNvbnNpc3Rpbmcgb2YgbGFiZWxzIG9mIEFTQ0lJLWNvbXBhdGlibGUgZW5jb2RpbmdzKlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImFjY2VwdC1jaGFyc2V0XCJcbiAgICB9LFxuICAgIFwiYWNjZXNza2V5XCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiSFRNTCBlbGVtZW50c1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIktleWJvYXJkIHNob3J0Y3V0IHRvIGFjdGl2YXRlIG9yIGZvY3VzIGVsZW1lbnRcIixcInZhbHVlXCI6IFwiT3JkZXJlZCBzZXQgb2YgdW5pcXVlIHNwYWNlLXNlcGFyYXRlZCB0b2tlbnMsIGNhc2Utc2Vuc2l0aXZlLCBjb25zaXN0aW5nIG9mIG9uZSBVbmljb2RlIGNvZGUgcG9pbnQgaW4gbGVuZ3RoXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiYWNjZXNzS2V5XCJcbiAgICB9LFxuICAgIFwiYWN0aW9uXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiZm9ybVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIlVSTCB0byB1c2UgZm9yIGZvcm0gc3VibWlzc2lvblwiLFwidmFsdWVcIjogXCJWYWxpZCBub24tZW1wdHkgVVJMIHBvdGVudGlhbGx5IHN1cnJvdW5kZWQgYnkgc3BhY2VzXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiYWN0aW9uXCJcbiAgICB9LFxuICAgIFwiYWxsb3dmdWxsc2NyZWVuXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiaWZyYW1lXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiV2hldGhlciB0byBhbGxvdyB0aGUgaWZyYW1lJ3MgY29udGVudHMgdG8gdXNlIHJlcXVlc3RGdWxsc2NyZWVuKClcIixcInZhbHVlXCI6IFwiQm9vbGVhbiBhdHRyaWJ1dGVcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJhbGxvd2Z1bGxzY3JlZW5cIlxuICAgIH0sXG4gICAgXCJhbHRcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJhcmVhXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiUmVwbGFjZW1lbnQgdGV4dCBmb3IgdXNlIHdoZW4gaW1hZ2VzIGFyZSBub3QgYXZhaWxhYmxlXCIsXCJ2YWx1ZVwiOiBcIlRleHQqXCJ9LFxuICAgICAgICAgICAgXCJpbWdcIjoge1wiZGVzY3JpcHRpb25cIjogXCJSZXBsYWNlbWVudCB0ZXh0IGZvciB1c2Ugd2hlbiBpbWFnZXMgYXJlIG5vdCBhdmFpbGFibGVcIixcInZhbHVlXCI6IFwiVGV4dCpcIn0sXG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiUmVwbGFjZW1lbnQgdGV4dCBmb3IgdXNlIHdoZW4gaW1hZ2VzIGFyZSBub3QgYXZhaWxhYmxlXCIsXCJ2YWx1ZVwiOiBcIlRleHQqXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiYWx0XCJcbiAgICB9LFxuICAgIFwiYXN5bmNcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJzY3JpcHRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJFeGVjdXRlIHNjcmlwdCB3aGVuIGF2YWlsYWJsZSwgd2l0aG91dCBibG9ja2luZ1wiLFwidmFsdWVcIjogXCJCb29sZWFuIGF0dHJpYnV0ZVwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImFzeW5jXCJcbiAgICB9LFxuICAgIFwiYXV0b2NvbXBsZXRlXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiZm9ybVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkRlZmF1bHQgc2V0dGluZyBmb3IgYXV0b2ZpbGwgZmVhdHVyZSBmb3IgY29udHJvbHMgaW4gdGhlIGZvcm1cIixcInZhbHVlXCI6IFwiXFxcIm9uXFxcIjsgXFxcIm9mZlxcXCJcIn0sXG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiSGludCBmb3IgZm9ybSBhdXRvZmlsbCBmZWF0dXJlXCIsXCJ2YWx1ZVwiOiBcIkF1dG9maWxsIGZpZWxkIG5hbWUgYW5kIHJlbGF0ZWQgdG9rZW5zKlwifSxcbiAgICAgICAgICAgIFwic2VsZWN0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiSGludCBmb3IgZm9ybSBhdXRvZmlsbCBmZWF0dXJlXCIsXCJ2YWx1ZVwiOiBcIkF1dG9maWxsIGZpZWxkIG5hbWUgYW5kIHJlbGF0ZWQgdG9rZW5zKlwifSxcbiAgICAgICAgICAgIFwidGV4dGFyZWFcIjoge1wiZGVzY3JpcHRpb25cIjogXCJIaW50IGZvciBmb3JtIGF1dG9maWxsIGZlYXR1cmVcIixcInZhbHVlXCI6IFwiQXV0b2ZpbGwgZmllbGQgbmFtZSBhbmQgcmVsYXRlZCB0b2tlbnMqXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiYXV0b2NvbXBsZXRlXCJcbiAgICB9LFxuICAgIFwiYXV0b2ZvY3VzXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiYnV0dG9uXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQXV0b21hdGljYWxseSBmb2N1cyB0aGUgZm9ybSBjb250cm9sIHdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9LFxuICAgICAgICAgICAgXCJpbnB1dFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkF1dG9tYXRpY2FsbHkgZm9jdXMgdGhlIGZvcm0gY29udHJvbCB3aGVuIHRoZSBwYWdlIGlzIGxvYWRlZFwiLFwidmFsdWVcIjogXCJCb29sZWFuIGF0dHJpYnV0ZVwifSxcbiAgICAgICAgICAgIFwia2V5Z2VuXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQXV0b21hdGljYWxseSBmb2N1cyB0aGUgZm9ybSBjb250cm9sIHdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9LFxuICAgICAgICAgICAgXCJzZWxlY3RcIjoge1wiZGVzY3JpcHRpb25cIjogXCJBdXRvbWF0aWNhbGx5IGZvY3VzIHRoZSBmb3JtIGNvbnRyb2wgd2hlbiB0aGUgcGFnZSBpcyBsb2FkZWRcIixcInZhbHVlXCI6IFwiQm9vbGVhbiBhdHRyaWJ1dGVcIn0sXG4gICAgICAgICAgICBcInRleHRhcmVhXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQXV0b21hdGljYWxseSBmb2N1cyB0aGUgZm9ybSBjb250cm9sIHdoZW4gdGhlIHBhZ2UgaXMgbG9hZGVkXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiYXV0b2ZvY3VzXCJcbiAgICB9LFxuICAgIFwiYXV0b3BsYXlcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJhdWRpb1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkhpbnQgdGhhdCB0aGUgbWVkaWEgcmVzb3VyY2UgY2FuIGJlIHN0YXJ0ZWQgYXV0b21hdGljYWxseSB3aGVuIHRoZSBwYWdlIGlzIGxvYWRlZFwiLFwidmFsdWVcIjogXCJCb29sZWFuIGF0dHJpYnV0ZVwifSxcbiAgICAgICAgICAgIFwidmlkZW9cIjoge1wiZGVzY3JpcHRpb25cIjogXCJIaW50IHRoYXQgdGhlIG1lZGlhIHJlc291cmNlIGNhbiBiZSBzdGFydGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgcGFnZSBpcyBsb2FkZWRcIixcInZhbHVlXCI6IFwiQm9vbGVhbiBhdHRyaWJ1dGVcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJhdXRvcGxheVwiXG4gICAgfSxcbiAgICBcImNoYWxsZW5nZVwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImtleWdlblwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIlN0cmluZyB0byBwYWNrYWdlIHdpdGggdGhlIGdlbmVyYXRlZCBhbmQgc2lnbmVkIHB1YmxpYyBrZXlcIixcInZhbHVlXCI6IFwiVGV4dFwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImNoYWxsZW5nZVwiXG4gICAgfSxcbiAgICBcImNoYXJzZXRcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJtZXRhXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQ2hhcmFjdGVyIGVuY29kaW5nIGRlY2xhcmF0aW9uXCIsXCJ2YWx1ZVwiOiBcIkVuY29kaW5nIGxhYmVsKlwifSxcbiAgICAgICAgICAgIFwic2NyaXB0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQ2hhcmFjdGVyIGVuY29kaW5nIG9mIHRoZSBleHRlcm5hbCBzY3JpcHQgcmVzb3VyY2VcIixcInZhbHVlXCI6IFwiRW5jb2RpbmcgbGFiZWwqXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiY2hhcnNldFwiXG4gICAgfSxcbiAgICBcImNoZWNrZWRcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJtZW51aXRlbVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIldoZXRoZXIgdGhlIGNvbW1hbmQgb3IgY29udHJvbCBpcyBjaGVja2VkXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9LFxuICAgICAgICAgICAgXCJpbnB1dFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIldoZXRoZXIgdGhlIGNvbW1hbmQgb3IgY29udHJvbCBpcyBjaGVja2VkXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiZGVmYXVsdENoZWNrZWRcIlxuICAgIH0sXG4gICAgXCJjaXRlXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiYmxvY2txdW90ZVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkxpbmsgdG8gdGhlIHNvdXJjZSBvZiB0aGUgcXVvdGF0aW9uIG9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVkaXRcIixcInZhbHVlXCI6IFwiVmFsaWQgVVJMIHBvdGVudGlhbGx5IHN1cnJvdW5kZWQgYnkgc3BhY2VzXCJ9LFxuICAgICAgICAgICAgXCJkZWxcIjoge1wiZGVzY3JpcHRpb25cIjogXCJMaW5rIHRvIHRoZSBzb3VyY2Ugb2YgdGhlIHF1b3RhdGlvbiBvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlZGl0XCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIFVSTCBwb3RlbnRpYWxseSBzdXJyb3VuZGVkIGJ5IHNwYWNlc1wifSxcbiAgICAgICAgICAgIFwiaW5zXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiTGluayB0byB0aGUgc291cmNlIG9mIHRoZSBxdW90YXRpb24gb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZWRpdFwiLFwidmFsdWVcIjogXCJWYWxpZCBVUkwgcG90ZW50aWFsbHkgc3Vycm91bmRlZCBieSBzcGFjZXNcIn0sXG4gICAgICAgICAgICBcInFcIjoge1wiZGVzY3JpcHRpb25cIjogXCJMaW5rIHRvIHRoZSBzb3VyY2Ugb2YgdGhlIHF1b3RhdGlvbiBvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBlZGl0XCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIFVSTCBwb3RlbnRpYWxseSBzdXJyb3VuZGVkIGJ5IHNwYWNlc1wifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImNpdGVcIlxuICAgIH0sXG4gICAgXCJjbGFzc1wiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcIkhUTUwgZWxlbWVudHNcIjoge1wiZGVzY3JpcHRpb25cIjogXCJDbGFzc2VzIHRvIHdoaWNoIHRoZSBlbGVtZW50IGJlbG9uZ3NcIixcInZhbHVlXCI6IFwiU2V0IG9mIHNwYWNlLXNlcGFyYXRlZCB0b2tlbnNcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJjbGFzc05hbWVcIixcbiAgICAgICAgXCJyZWplY3RTcGFjZXNcIjogdHJ1ZSxcbiAgICAgICAgXCJsaXN0TmFtZVwiOiBcImNsYXNzTGlzdFwiLFxuICAgICAgICBcInJlc2VydmVkXCI6IHRydWVcbiAgICB9LFxuICAgIFwiY29sc1wiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcInRleHRhcmVhXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiTWF4aW11bSBudW1iZXIgb2YgY2hhcmFjdGVycyBwZXIgbGluZVwiLFwidmFsdWVcIjogXCJWYWxpZCBub24tbmVnYXRpdmUgaW50ZWdlciBncmVhdGVyIHRoYW4gemVyb1wifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImNvbHNcIlxuICAgIH0sXG4gICAgXCJjb2xzcGFuXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwidGRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJOdW1iZXIgb2YgY29sdW1ucyB0aGF0IHRoZSBjZWxsIGlzIHRvIHNwYW5cIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXIgZ3JlYXRlciB0aGFuIHplcm9cIn0sXG4gICAgICAgICAgICBcInRoXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiTnVtYmVyIG9mIGNvbHVtbnMgdGhhdCB0aGUgY2VsbCBpcyB0byBzcGFuXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiB6ZXJvXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiY29sU3BhblwiXG4gICAgfSxcbiAgICBcImNvbnRlbnRcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJtZXRhXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVmFsdWUgb2YgdGhlIGVsZW1lbnRcIixcInZhbHVlXCI6IFwiVGV4dCpcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJjb250ZW50XCJcbiAgICB9LFxuICAgIFwiY29udGVudGVkaXRhYmxlXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiSFRNTCBlbGVtZW50c1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIldoZXRoZXIgdGhlIGVsZW1lbnQgaXMgZWRpdGFibGVcIixcInZhbHVlXCI6IFwiXFxcInRydWVcXFwiOyBcXFwiZmFsc2VcXFwiXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiY29udGVudGVkaXRhYmxlXCJcbiAgICB9LFxuICAgIFwiY29udGV4dG1lbnVcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJIVE1MIGVsZW1lbnRzXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVGhlIGVsZW1lbnQncyBjb250ZXh0IG1lbnVcIixcInZhbHVlXCI6IFwiSUQqXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiY29udGV4dG1lbnVcIlxuICAgIH0sXG4gICAgXCJjb250cm9sc1wiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImF1ZGlvXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiU2hvdyB1c2VyIGFnZW50IGNvbnRyb2xzXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9LFxuICAgICAgICAgICAgXCJ2aWRlb1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIlNob3cgdXNlciBhZ2VudCBjb250cm9sc1wiLFwidmFsdWVcIjogXCJCb29sZWFuIGF0dHJpYnV0ZVwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImNvbnRyb2xzXCJcbiAgICB9LFxuICAgIFwiY29vcmRzXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiYXJlYVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkNvb3JkaW5hdGVzIGZvciB0aGUgc2hhcGUgdG8gYmUgY3JlYXRlZCBpbiBhbiBpbWFnZSBtYXBcIixcInZhbHVlXCI6IFwiVmFsaWQgbGlzdCBvZiBpbnRlZ2VycypcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJjb29yZHNcIlxuICAgIH0sXG4gICAgXCJjcm9zc29yaWdpblwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImF1ZGlvXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiSG93IHRoZSBlbGVtZW50IGhhbmRsZXMgY3Jvc3NvcmlnaW4gcmVxdWVzdHNcIixcInZhbHVlXCI6IFwiXFxcImFub255bW91c1xcXCI7IFxcXCJ1c2UtY3JlZGVudGlhbHNcXFwiXCJ9LFxuICAgICAgICAgICAgXCJpbWdcIjoge1wiZGVzY3JpcHRpb25cIjogXCJIb3cgdGhlIGVsZW1lbnQgaGFuZGxlcyBjcm9zc29yaWdpbiByZXF1ZXN0c1wiLFwidmFsdWVcIjogXCJcXFwiYW5vbnltb3VzXFxcIjsgXFxcInVzZS1jcmVkZW50aWFsc1xcXCJcIn0sXG4gICAgICAgICAgICBcImxpbmtcIjoge1wiZGVzY3JpcHRpb25cIjogXCJIb3cgdGhlIGVsZW1lbnQgaGFuZGxlcyBjcm9zc29yaWdpbiByZXF1ZXN0c1wiLFwidmFsdWVcIjogXCJcXFwiYW5vbnltb3VzXFxcIjsgXFxcInVzZS1jcmVkZW50aWFsc1xcXCJcIn0sXG4gICAgICAgICAgICBcInNjcmlwdFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkhvdyB0aGUgZWxlbWVudCBoYW5kbGVzIGNyb3Nzb3JpZ2luIHJlcXVlc3RzXCIsXCJ2YWx1ZVwiOiBcIlxcXCJhbm9ueW1vdXNcXFwiOyBcXFwidXNlLWNyZWRlbnRpYWxzXFxcIlwifSxcbiAgICAgICAgICAgIFwidmlkZW9cIjoge1wiZGVzY3JpcHRpb25cIjogXCJIb3cgdGhlIGVsZW1lbnQgaGFuZGxlcyBjcm9zc29yaWdpbiByZXF1ZXN0c1wiLFwidmFsdWVcIjogXCJcXFwiYW5vbnltb3VzXFxcIjsgXFxcInVzZS1jcmVkZW50aWFsc1xcXCJcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJjcm9zc29yaWdpblwiXG4gICAgfSxcbiAgICBcImRhdGFcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJvYmplY3RcIjoge1wiZGVzY3JpcHRpb25cIjogXCJBZGRyZXNzIG9mIHRoZSByZXNvdXJjZVwiLFwidmFsdWVcIjogXCJWYWxpZCBub24tZW1wdHkgVVJMIHBvdGVudGlhbGx5IHN1cnJvdW5kZWQgYnkgc3BhY2VzXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiZGF0YVwiXG4gICAgfSxcbiAgICBcImRhdGV0aW1lXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiZGVsXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiRGF0ZSBhbmQgKG9wdGlvbmFsbHkpIHRpbWUgb2YgdGhlIGNoYW5nZVwiLFwidmFsdWVcIjogXCJWYWxpZCBkYXRlIHN0cmluZyB3aXRoIG9wdGlvbmFsIHRpbWVcIn0sXG4gICAgICAgICAgICBcImluc1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkRhdGUgYW5kIChvcHRpb25hbGx5KSB0aW1lIG9mIHRoZSBjaGFuZ2VcIixcInZhbHVlXCI6IFwiVmFsaWQgZGF0ZSBzdHJpbmcgd2l0aCBvcHRpb25hbCB0aW1lXCJ9LFxuICAgICAgICAgICAgXCJ0aW1lXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiTWFjaGluZS1yZWFkYWJsZSB2YWx1ZVwiLFwidmFsdWVcIjogXCJWYWxpZCBtb250aCBzdHJpbmcsIHZhbGlkIGRhdGUgc3RyaW5nLCB2YWxpZCB5ZWFybGVzcyBkYXRlIHN0cmluZywgdmFsaWQgdGltZSBzdHJpbmcsIHZhbGlkIGxvY2FsIGRhdGUgYW5kIHRpbWUgc3RyaW5nLCB2YWxpZCB0aW1lLXpvbmUgb2Zmc2V0IHN0cmluZywgdmFsaWQgZ2xvYmFsIGRhdGUgYW5kIHRpbWUgc3RyaW5nLCB2YWxpZCB3ZWVrIHN0cmluZywgdmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXIsIG9yIHZhbGlkIGR1cmF0aW9uIHN0cmluZ1wifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImRhdGVUaW1lXCJcbiAgICB9LFxuICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcIm1lbnVpdGVtXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiTWFyayB0aGUgY29tbWFuZCBhcyBiZWluZyBhIGRlZmF1bHQgY29tbWFuZFwiLFwidmFsdWVcIjogXCJCb29sZWFuIGF0dHJpYnV0ZVwifSxcbiAgICAgICAgICAgIFwidHJhY2tcIjoge1wiZGVzY3JpcHRpb25cIjogXCJFbmFibGUgdGhlIHRyYWNrIGlmIG5vIG90aGVyIHRleHQgdHJhY2sgaXMgbW9yZSBzdWl0YWJsZVwiLFwidmFsdWVcIjogXCJCb29sZWFuIGF0dHJpYnV0ZVwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImRlZmF1bHRcIlxuICAgIH0sXG4gICAgXCJkZWZlclwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcInNjcmlwdFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkRlZmVyIHNjcmlwdCBleGVjdXRpb25cIixcInZhbHVlXCI6IFwiQm9vbGVhbiBhdHRyaWJ1dGVcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJkZWZlclwiXG4gICAgfSxcbiAgICBcImRpclwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcIkhUTUwgZWxlbWVudHNcIjoge1wiZGVzY3JpcHRpb25cIjogXCJUaGUgdGV4dCBkaXJlY3Rpb25hbGl0eSBvZiB0aGUgZWxlbWVudFwiLFwidmFsdWVcIjogXCJcXFwibHRyXFxcIjsgXFxcInJ0bFxcXCI7IFxcXCJhdXRvXFxcIlwifSxcbiAgICAgICAgICAgIFwiYmRvXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVGhlIHRleHQgZGlyZWN0aW9uYWxpdHkgb2YgdGhlIGVsZW1lbnRcIixcInZhbHVlXCI6IFwiXFxcImx0clxcXCI7IFxcXCJydGxcXFwiXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiZGlyXCJcbiAgICB9LFxuICAgIFwiZGlybmFtZVwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiTmFtZSBvZiBmb3JtIGZpZWxkIHRvIHVzZSBmb3Igc2VuZGluZyB0aGUgZWxlbWVudCdzIGRpcmVjdGlvbmFsaXR5IGluIGZvcm0gc3VibWlzc2lvblwiLFwidmFsdWVcIjogXCJUZXh0KlwifSxcbiAgICAgICAgICAgIFwidGV4dGFyZWFcIjoge1wiZGVzY3JpcHRpb25cIjogXCJOYW1lIG9mIGZvcm0gZmllbGQgdG8gdXNlIGZvciBzZW5kaW5nIHRoZSBlbGVtZW50J3MgZGlyZWN0aW9uYWxpdHkgaW4gZm9ybSBzdWJtaXNzaW9uXCIsXCJ2YWx1ZVwiOiBcIlRleHQqXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiZGlybmFtZVwiXG4gICAgfSxcbiAgICBcImRpc2FibGVkXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiYnV0dG9uXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiV2hldGhlciB0aGUgZm9ybSBjb250cm9sIGlzIGRpc2FibGVkXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9LFxuICAgICAgICAgICAgXCJtZW51aXRlbVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIldoZXRoZXIgdGhlIGZvcm0gY29udHJvbCBpcyBkaXNhYmxlZFwiLFwidmFsdWVcIjogXCJCb29sZWFuIGF0dHJpYnV0ZVwifSxcbiAgICAgICAgICAgIFwiZmllbGRzZXRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJXaGV0aGVyIHRoZSBmb3JtIGNvbnRyb2wgaXMgZGlzYWJsZWRcIixcInZhbHVlXCI6IFwiQm9vbGVhbiBhdHRyaWJ1dGVcIn0sXG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiV2hldGhlciB0aGUgZm9ybSBjb250cm9sIGlzIGRpc2FibGVkXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9LFxuICAgICAgICAgICAgXCJrZXlnZW5cIjoge1wiZGVzY3JpcHRpb25cIjogXCJXaGV0aGVyIHRoZSBmb3JtIGNvbnRyb2wgaXMgZGlzYWJsZWRcIixcInZhbHVlXCI6IFwiQm9vbGVhbiBhdHRyaWJ1dGVcIn0sXG4gICAgICAgICAgICBcIm9wdGdyb3VwXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiV2hldGhlciB0aGUgZm9ybSBjb250cm9sIGlzIGRpc2FibGVkXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9LFxuICAgICAgICAgICAgXCJvcHRpb25cIjoge1wiZGVzY3JpcHRpb25cIjogXCJXaGV0aGVyIHRoZSBmb3JtIGNvbnRyb2wgaXMgZGlzYWJsZWRcIixcInZhbHVlXCI6IFwiQm9vbGVhbiBhdHRyaWJ1dGVcIn0sXG4gICAgICAgICAgICBcInNlbGVjdFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIldoZXRoZXIgdGhlIGZvcm0gY29udHJvbCBpcyBkaXNhYmxlZFwiLFwidmFsdWVcIjogXCJCb29sZWFuIGF0dHJpYnV0ZVwifSxcbiAgICAgICAgICAgIFwidGV4dGFyZWFcIjoge1wiZGVzY3JpcHRpb25cIjogXCJXaGV0aGVyIHRoZSBmb3JtIGNvbnRyb2wgaXMgZGlzYWJsZWRcIixcInZhbHVlXCI6IFwiQm9vbGVhbiBhdHRyaWJ1dGVcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJkaXNhYmxlZFwiXG4gICAgfSxcbiAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiYVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIldoZXRoZXIgdG8gZG93bmxvYWQgdGhlIHJlc291cmNlIGluc3RlYWQgb2YgbmF2aWdhdGluZyB0byBpdCwgYW5kIGl0cyBmaWxlIG5hbWUgaWYgc29cIixcInZhbHVlXCI6IFwiVGV4dFwifSxcbiAgICAgICAgICAgIFwiYXJlYVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIldoZXRoZXIgdG8gZG93bmxvYWQgdGhlIHJlc291cmNlIGluc3RlYWQgb2YgbmF2aWdhdGluZyB0byBpdCwgYW5kIGl0cyBmaWxlIG5hbWUgaWYgc29cIixcInZhbHVlXCI6IFwiVGV4dFwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImRvd25sb2FkXCJcbiAgICB9LFxuICAgIFwiZHJhZ2dhYmxlXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiSFRNTCBlbGVtZW50c1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIldoZXRoZXIgdGhlIGVsZW1lbnQgaXMgZHJhZ2dhYmxlXCIsXCJ2YWx1ZVwiOiBcIlxcXCJ0cnVlXFxcIjsgXFxcImZhbHNlXFxcIlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImRyYWdnYWJsZVwiXG4gICAgfSxcbiAgICBcImRyb3B6b25lXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiSFRNTCBlbGVtZW50c1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkFjY2VwdGVkIGl0ZW0gdHlwZXMgZm9yIGRyYWctYW5kLWRyb3BcIixcInZhbHVlXCI6IFwiVW5vcmRlcmVkIHNldCBvZiB1bmlxdWUgc3BhY2Utc2VwYXJhdGVkIHRva2VucywgQVNDSUkgY2FzZS1pbnNlbnNpdGl2ZSwgY29uc2lzdGluZyBvZiBhY2NlcHRlZCB0eXBlcyBhbmQgZHJhZyBmZWVkYmFjaypcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJkcm9wem9uZVwiXG4gICAgfSxcbiAgICBcImVuY3R5cGVcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJmb3JtXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiRm9ybSBkYXRhIHNldCBlbmNvZGluZyB0eXBlIHRvIHVzZSBmb3IgZm9ybSBzdWJtaXNzaW9uXCIsXCJ2YWx1ZVwiOiBcIlxcXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcXFwiOyBcXFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVxcXCI7IFxcXCJ0ZXh0L3BsYWluXFxcIlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImVuY3R5cGVcIlxuICAgIH0sXG4gICAgXCJmb3JcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJsYWJlbFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkFzc29jaWF0ZSB0aGUgbGFiZWwgd2l0aCBmb3JtIGNvbnRyb2xcIixcInZhbHVlXCI6IFwiSUQqXCJ9LFxuICAgICAgICAgICAgXCJvdXRwdXRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgY29udHJvbHMgZnJvbSB3aGljaCB0aGUgb3V0cHV0IHdhcyBjYWxjdWxhdGVkXCIsXCJ2YWx1ZVwiOiBcIlVub3JkZXJlZCBzZXQgb2YgdW5pcXVlIHNwYWNlLXNlcGFyYXRlZCB0b2tlbnMsIGNhc2Utc2Vuc2l0aXZlLCBjb25zaXN0aW5nIG9mIElEcypcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJodG1sRm9yXCIsXG4gICAgICAgIFwicmVzZXJ2ZWRcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJmb3JtXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiYnV0dG9uXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQXNzb2NpYXRlcyB0aGUgY29udHJvbCB3aXRoIGEgZm9ybSBlbGVtZW50XCIsXCJ2YWx1ZVwiOiBcIklEKlwifSxcbiAgICAgICAgICAgIFwiZmllbGRzZXRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJBc3NvY2lhdGVzIHRoZSBjb250cm9sIHdpdGggYSBmb3JtIGVsZW1lbnRcIixcInZhbHVlXCI6IFwiSUQqXCJ9LFxuICAgICAgICAgICAgXCJpbnB1dFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkFzc29jaWF0ZXMgdGhlIGNvbnRyb2wgd2l0aCBhIGZvcm0gZWxlbWVudFwiLFwidmFsdWVcIjogXCJJRCpcIn0sXG4gICAgICAgICAgICBcImtleWdlblwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkFzc29jaWF0ZXMgdGhlIGNvbnRyb2wgd2l0aCBhIGZvcm0gZWxlbWVudFwiLFwidmFsdWVcIjogXCJJRCpcIn0sXG4gICAgICAgICAgICBcImxhYmVsXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQXNzb2NpYXRlcyB0aGUgY29udHJvbCB3aXRoIGEgZm9ybSBlbGVtZW50XCIsXCJ2YWx1ZVwiOiBcIklEKlwifSxcbiAgICAgICAgICAgIFwib2JqZWN0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQXNzb2NpYXRlcyB0aGUgY29udHJvbCB3aXRoIGEgZm9ybSBlbGVtZW50XCIsXCJ2YWx1ZVwiOiBcIklEKlwifSxcbiAgICAgICAgICAgIFwib3V0cHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQXNzb2NpYXRlcyB0aGUgY29udHJvbCB3aXRoIGEgZm9ybSBlbGVtZW50XCIsXCJ2YWx1ZVwiOiBcIklEKlwifSxcbiAgICAgICAgICAgIFwic2VsZWN0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQXNzb2NpYXRlcyB0aGUgY29udHJvbCB3aXRoIGEgZm9ybSBlbGVtZW50XCIsXCJ2YWx1ZVwiOiBcIklEKlwifSxcbiAgICAgICAgICAgIFwidGV4dGFyZWFcIjoge1wiZGVzY3JpcHRpb25cIjogXCJBc3NvY2lhdGVzIHRoZSBjb250cm9sIHdpdGggYSBmb3JtIGVsZW1lbnRcIixcInZhbHVlXCI6IFwiSUQqXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiZm9ybVwiXG4gICAgfSxcbiAgICBcImZvcm1hY3Rpb25cIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJidXR0b25cIjoge1wiZGVzY3JpcHRpb25cIjogXCJVUkwgdG8gdXNlIGZvciBmb3JtIHN1Ym1pc3Npb25cIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLWVtcHR5IFVSTCBwb3RlbnRpYWxseSBzdXJyb3VuZGVkIGJ5IHNwYWNlc1wifSxcbiAgICAgICAgICAgIFwiaW5wdXRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJVUkwgdG8gdXNlIGZvciBmb3JtIHN1Ym1pc3Npb25cIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLWVtcHR5IFVSTCBwb3RlbnRpYWxseSBzdXJyb3VuZGVkIGJ5IHNwYWNlc1wifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImZvcm1hY3Rpb25cIlxuICAgIH0sXG4gICAgXCJmb3JtZW5jdHlwZVwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImJ1dHRvblwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkZvcm0gZGF0YSBzZXQgZW5jb2RpbmcgdHlwZSB0byB1c2UgZm9yIGZvcm0gc3VibWlzc2lvblwiLFwidmFsdWVcIjogXCJcXFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXFxcIjsgXFxcIm11bHRpcGFydC9mb3JtLWRhdGFcXFwiOyBcXFwidGV4dC9wbGFpblxcXCJcIn0sXG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiRm9ybSBkYXRhIHNldCBlbmNvZGluZyB0eXBlIHRvIHVzZSBmb3IgZm9ybSBzdWJtaXNzaW9uXCIsXCJ2YWx1ZVwiOiBcIlxcXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcXFwiOyBcXFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVxcXCI7IFxcXCJ0ZXh0L3BsYWluXFxcIlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImZvcm1lbmN0eXBlXCJcbiAgICB9LFxuICAgIFwiZm9ybW1ldGhvZFwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImJ1dHRvblwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkhUVFAgbWV0aG9kIHRvIHVzZSBmb3IgZm9ybSBzdWJtaXNzaW9uXCIsXCJ2YWx1ZVwiOiBcIlxcXCJHRVRcXFwiOyBcXFwiUE9TVFxcXCJcIn0sXG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiSFRUUCBtZXRob2QgdG8gdXNlIGZvciBmb3JtIHN1Ym1pc3Npb25cIixcInZhbHVlXCI6IFwiXFxcIkdFVFxcXCI7IFxcXCJQT1NUXFxcIlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImZvcm1tZXRob2RcIlxuICAgIH0sXG4gICAgXCJmb3Jtbm92YWxpZGF0ZVwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImJ1dHRvblwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkJ5cGFzcyBmb3JtIGNvbnRyb2wgdmFsaWRhdGlvbiBmb3IgZm9ybSBzdWJtaXNzaW9uXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9LFxuICAgICAgICAgICAgXCJpbnB1dFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkJ5cGFzcyBmb3JtIGNvbnRyb2wgdmFsaWRhdGlvbiBmb3IgZm9ybSBzdWJtaXNzaW9uXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiZm9ybW5vdmFsaWRhdGVcIlxuICAgIH0sXG4gICAgXCJmb3JtdGFyZ2V0XCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiYnV0dG9uXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQnJvd3NpbmcgY29udGV4dCBmb3IgZm9ybSBzdWJtaXNzaW9uXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIGJyb3dzaW5nIGNvbnRleHQgbmFtZSBvciBrZXl3b3JkXCJ9LFxuICAgICAgICAgICAgXCJpbnB1dFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkJyb3dzaW5nIGNvbnRleHQgZm9yIGZvcm0gc3VibWlzc2lvblwiLFwidmFsdWVcIjogXCJWYWxpZCBicm93c2luZyBjb250ZXh0IG5hbWUgb3Iga2V5d29yZFwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImZvcm10YXJnZXRcIlxuICAgIH0sXG4gICAgXCJoZWFkZXJzXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwidGRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJUaGUgaGVhZGVyIGNlbGxzIGZvciB0aGlzIGNlbGxcIixcInZhbHVlXCI6IFwiVW5vcmRlcmVkIHNldCBvZiB1bmlxdWUgc3BhY2Utc2VwYXJhdGVkIHRva2VucywgY2FzZS1zZW5zaXRpdmUsIGNvbnNpc3Rpbmcgb2YgSURzKlwifSxcbiAgICAgICAgICAgIFwidGhcIjoge1wiZGVzY3JpcHRpb25cIjogXCJUaGUgaGVhZGVyIGNlbGxzIGZvciB0aGlzIGNlbGxcIixcInZhbHVlXCI6IFwiVW5vcmRlcmVkIHNldCBvZiB1bmlxdWUgc3BhY2Utc2VwYXJhdGVkIHRva2VucywgY2FzZS1zZW5zaXRpdmUsIGNvbnNpc3Rpbmcgb2YgSURzKlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImhlYWRlcnNcIlxuICAgIH0sXG4gICAgXCJoZWlnaHRcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJjYW52YXNcIjoge1wiZGVzY3JpcHRpb25cIjogXCJWZXJ0aWNhbCBkaW1lbnNpb25cIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXJcIn0sXG4gICAgICAgICAgICBcImVtYmVkXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVmVydGljYWwgZGltZW5zaW9uXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyXCJ9LFxuICAgICAgICAgICAgXCJpZnJhbWVcIjoge1wiZGVzY3JpcHRpb25cIjogXCJWZXJ0aWNhbCBkaW1lbnNpb25cIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXJcIn0sXG4gICAgICAgICAgICBcImltZ1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIlZlcnRpY2FsIGRpbWVuc2lvblwiLFwidmFsdWVcIjogXCJWYWxpZCBub24tbmVnYXRpdmUgaW50ZWdlclwifSxcbiAgICAgICAgICAgIFwiaW5wdXRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJWZXJ0aWNhbCBkaW1lbnNpb25cIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXJcIn0sXG4gICAgICAgICAgICBcIm9iamVjdFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIlZlcnRpY2FsIGRpbWVuc2lvblwiLFwidmFsdWVcIjogXCJWYWxpZCBub24tbmVnYXRpdmUgaW50ZWdlclwifSxcbiAgICAgICAgICAgIFwidmlkZW9cIjoge1wiZGVzY3JpcHRpb25cIjogXCJWZXJ0aWNhbCBkaW1lbnNpb25cIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXJcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJoZWlnaHRcIlxuICAgIH0sXG4gICAgXCJoaWRkZW5cIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJIVE1MIGVsZW1lbnRzXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiV2hldGhlciB0aGUgZWxlbWVudCBpcyByZWxldmFudFwiLFwidmFsdWVcIjogXCJCb29sZWFuIGF0dHJpYnV0ZVwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImhpZGRlblwiXG4gICAgfSxcbiAgICBcImhpZ2hcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJtZXRlclwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkxvdyBsaW1pdCBvZiBoaWdoIHJhbmdlXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIGZsb2F0aW5nLXBvaW50IG51bWJlcipcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJoaWdoXCJcbiAgICB9LFxuICAgIFwiaHJlZlwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImFcIjoge1wiZGVzY3JpcHRpb25cIjogXCJBZGRyZXNzIG9mIHRoZSBoeXBlcmxpbmtcIixcInZhbHVlXCI6IFwiVmFsaWQgVVJMIHBvdGVudGlhbGx5IHN1cnJvdW5kZWQgYnkgc3BhY2VzXCJ9LFxuICAgICAgICAgICAgXCJhcmVhXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQWRkcmVzcyBvZiB0aGUgaHlwZXJsaW5rXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIFVSTCBwb3RlbnRpYWxseSBzdXJyb3VuZGVkIGJ5IHNwYWNlc1wifSxcbiAgICAgICAgICAgIFwibGlua1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkFkZHJlc3Mgb2YgdGhlIGh5cGVybGlua1wiLFwidmFsdWVcIjogXCJWYWxpZCBub24tZW1wdHkgVVJMIHBvdGVudGlhbGx5IHN1cnJvdW5kZWQgYnkgc3BhY2VzXCJ9LFxuICAgICAgICAgICAgXCJiYXNlXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiRG9jdW1lbnQgYmFzZSBVUkxcIixcInZhbHVlXCI6IFwiVmFsaWQgVVJMIHBvdGVudGlhbGx5IHN1cnJvdW5kZWQgYnkgc3BhY2VzXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiaHJlZlwiXG4gICAgfSxcbiAgICBcImhyZWZsYW5nXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiYVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkxhbmd1YWdlIG9mIHRoZSBsaW5rZWQgcmVzb3VyY2VcIixcInZhbHVlXCI6IFwiVmFsaWQgQkNQIDQ3IGxhbmd1YWdlIHRhZ1wifSxcbiAgICAgICAgICAgIFwibGlua1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkxhbmd1YWdlIG9mIHRoZSBsaW5rZWQgcmVzb3VyY2VcIixcInZhbHVlXCI6IFwiVmFsaWQgQkNQIDQ3IGxhbmd1YWdlIHRhZ1wifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImhyZWZsYW5nXCJcbiAgICB9LFxuICAgIFwiaHR0cC1lcXVpdlwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcIm1ldGFcIjoge1wiZGVzY3JpcHRpb25cIjogXCJQcmFnbWEgZGlyZWN0aXZlXCIsXCJ2YWx1ZVwiOiBcIlRleHQqXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiaHR0cC1lcXVpdlwiXG4gICAgfSxcbiAgICBcImljb25cIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJtZW51aXRlbVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkljb24gZm9yIHRoZSBjb21tYW5kXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIG5vbi1lbXB0eSBVUkwgcG90ZW50aWFsbHkgc3Vycm91bmRlZCBieSBzcGFjZXNcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJpY29uXCJcbiAgICB9LFxuICAgIFwiaWRcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJIVE1MIGVsZW1lbnRzXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVGhlIGVsZW1lbnQncyBJRFwiLFwidmFsdWVcIjogXCJUZXh0KlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImlkXCJcbiAgICB9LFxuICAgIFwiaW5wdXRtb2RlXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiaW5wdXRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJIaW50IGZvciBzZWxlY3RpbmcgYW4gaW5wdXQgbW9kYWxpdHlcIixcInZhbHVlXCI6IFwiXFxcInZlcmJhdGltXFxcIjsgXFxcImxhdGluXFxcIjsgXFxcImxhdGluLW5hbWVcXFwiOyBcXFwibGF0aW4tcHJvc2VcXFwiOyBcXFwiZnVsbC13aWR0aC1sYXRpblxcXCI7IFxcXCJrYW5hXFxcIjsgXFxcImthbmEtbmFtZVxcXCI7IFxcXCJrYXRha2FuYVxcXCI7IFxcXCJudW1lcmljXFxcIjsgXFxcInRlbFxcXCI7IFxcXCJlbWFpbFxcXCI7IFxcXCJ1cmxcXFwiXCJ9LFxuICAgICAgICAgICAgXCJ0ZXh0YXJlYVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkhpbnQgZm9yIHNlbGVjdGluZyBhbiBpbnB1dCBtb2RhbGl0eVwiLFwidmFsdWVcIjogXCJcXFwidmVyYmF0aW1cXFwiOyBcXFwibGF0aW5cXFwiOyBcXFwibGF0aW4tbmFtZVxcXCI7IFxcXCJsYXRpbi1wcm9zZVxcXCI7IFxcXCJmdWxsLXdpZHRoLWxhdGluXFxcIjsgXFxcImthbmFcXFwiOyBcXFwia2FuYS1uYW1lXFxcIjsgXFxcImthdGFrYW5hXFxcIjsgXFxcIm51bWVyaWNcXFwiOyBcXFwidGVsXFxcIjsgXFxcImVtYWlsXFxcIjsgXFxcInVybFxcXCJcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJpbnB1dG1vZGVcIlxuICAgIH0sXG4gICAgXCJpc21hcFwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImltZ1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIldoZXRoZXIgdGhlIGltYWdlIGlzIGEgc2VydmVyLXNpZGUgaW1hZ2UgbWFwXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiaXNtYXBcIlxuICAgIH0sXG4gICAgXCJpdGVtaWRcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJIVE1MIGVsZW1lbnRzXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiR2xvYmFsIGlkZW50aWZpZXIgZm9yIGEgbWljcm9kYXRhIGl0ZW1cIixcInZhbHVlXCI6IFwiVmFsaWQgVVJMIHBvdGVudGlhbGx5IHN1cnJvdW5kZWQgYnkgc3BhY2VzXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiaXRlbWlkXCJcbiAgICB9LFxuICAgIFwiaXRlbXByb3BcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJIVE1MIGVsZW1lbnRzXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiUHJvcGVydHkgbmFtZXMgb2YgYSBtaWNyb2RhdGEgaXRlbVwiLFwidmFsdWVcIjogXCJVbm9yZGVyZWQgc2V0IG9mIHVuaXF1ZSBzcGFjZS1zZXBhcmF0ZWQgdG9rZW5zLCBjYXNlLXNlbnNpdGl2ZSwgY29uc2lzdGluZyBvZiB2YWxpZCBhYnNvbHV0ZSBVUkxzLCBkZWZpbmVkIHByb3BlcnR5IG5hbWVzLCBvciB0ZXh0KlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcIml0ZW1wcm9wXCJcbiAgICB9LFxuICAgIFwiaXRlbXJlZlwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcIkhUTUwgZWxlbWVudHNcIjoge1wiZGVzY3JpcHRpb25cIjogXCJSZWZlcmVuY2VkIGVsZW1lbnRzXCIsXCJ2YWx1ZVwiOiBcIlVub3JkZXJlZCBzZXQgb2YgdW5pcXVlIHNwYWNlLXNlcGFyYXRlZCB0b2tlbnMsIGNhc2Utc2Vuc2l0aXZlLCBjb25zaXN0aW5nIG9mIElEcypcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJpdGVtcmVmXCJcbiAgICB9LFxuICAgIFwiaXRlbXNjb3BlXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiSFRNTCBlbGVtZW50c1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkludHJvZHVjZXMgYSBtaWNyb2RhdGEgaXRlbVwiLFwidmFsdWVcIjogXCJCb29sZWFuIGF0dHJpYnV0ZVwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcIml0ZW1zY29wZVwiXG4gICAgfSxcbiAgICBcIml0ZW10eXBlXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiSFRNTCBlbGVtZW50c1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkl0ZW0gdHlwZXMgb2YgYSBtaWNyb2RhdGEgaXRlbVwiLFwidmFsdWVcIjogXCJVbm9yZGVyZWQgc2V0IG9mIHVuaXF1ZSBzcGFjZS1zZXBhcmF0ZWQgdG9rZW5zLCBjYXNlLXNlbnNpdGl2ZSwgY29uc2lzdGluZyBvZiB2YWxpZCBhYnNvbHV0ZSBVUkwqXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwiaXRlbXR5cGVcIlxuICAgIH0sXG4gICAgXCJrZXl0eXBlXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwia2V5Z2VuXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVGhlIHR5cGUgb2YgY3J5cHRvZ3JhcGhpYyBrZXkgdG8gZ2VuZXJhdGVcIixcInZhbHVlXCI6IFwiVGV4dCpcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJrZXl0eXBlXCJcbiAgICB9LFxuICAgIFwia2luZFwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcInRyYWNrXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVGhlIHR5cGUgb2YgdGV4dCB0cmFja1wiLFwidmFsdWVcIjogXCJcXFwic3VidGl0bGVzXFxcIjsgXFxcImNhcHRpb25zXFxcIjsgXFxcImRlc2NyaXB0aW9uc1xcXCI7IFxcXCJjaGFwdGVyc1xcXCI7IFxcXCJtZXRhZGF0YVxcXCJcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJraW5kXCJcbiAgICB9LFxuICAgIFwibGFiZWxcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJtZW51aXRlbVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIlVzZXItdmlzaWJsZSBsYWJlbFwiLFwidmFsdWVcIjogXCJUZXh0XCJ9LFxuICAgICAgICAgICAgXCJtZW51XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVXNlci12aXNpYmxlIGxhYmVsXCIsXCJ2YWx1ZVwiOiBcIlRleHRcIn0sXG4gICAgICAgICAgICBcIm9wdGdyb3VwXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVXNlci12aXNpYmxlIGxhYmVsXCIsXCJ2YWx1ZVwiOiBcIlRleHRcIn0sXG4gICAgICAgICAgICBcIm9wdGlvblwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIlVzZXItdmlzaWJsZSBsYWJlbFwiLFwidmFsdWVcIjogXCJUZXh0XCJ9LFxuICAgICAgICAgICAgXCJ0cmFja1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIlVzZXItdmlzaWJsZSBsYWJlbFwiLFwidmFsdWVcIjogXCJUZXh0XCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwibGFiZWxcIlxuICAgIH0sXG4gICAgXCJsYW5nXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiSFRNTCBlbGVtZW50c1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkxhbmd1YWdlIG9mIHRoZSBlbGVtZW50XCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIEJDUCA0NyBsYW5ndWFnZSB0YWcgb3IgdGhlIGVtcHR5IHN0cmluZ1wifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImxhbmdcIlxuICAgIH0sXG4gICAgXCJsaXN0XCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiaW5wdXRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJMaXN0IG9mIGF1dG9jb21wbGV0ZSBvcHRpb25zXCIsXCJ2YWx1ZVwiOiBcIklEKlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImxpc3RcIixcbiAgICAgICAgXCJub1Byb3BlcnR5XCI6IHRydWVcbiAgICB9LFxuICAgIFwibG9vcFwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImF1ZGlvXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiV2hldGhlciB0byBsb29wIHRoZSBtZWRpYSByZXNvdXJjZVwiLFwidmFsdWVcIjogXCJCb29sZWFuIGF0dHJpYnV0ZVwifSxcbiAgICAgICAgICAgIFwidmlkZW9cIjoge1wiZGVzY3JpcHRpb25cIjogXCJXaGV0aGVyIHRvIGxvb3AgdGhlIG1lZGlhIHJlc291cmNlXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwibG9vcFwiXG4gICAgfSxcbiAgICBcImxvd1wiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcIm1ldGVyXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiSGlnaCBsaW1pdCBvZiBsb3cgcmFuZ2VcIixcInZhbHVlXCI6IFwiVmFsaWQgZmxvYXRpbmctcG9pbnQgbnVtYmVyKlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcImxvd1wiXG4gICAgfSxcbiAgICBcIm1hbmlmZXN0XCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiaHRtbFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkFwcGxpY2F0aW9uIGNhY2hlIG1hbmlmZXN0XCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIG5vbi1lbXB0eSBVUkwgcG90ZW50aWFsbHkgc3Vycm91bmRlZCBieSBzcGFjZXNcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJtYW5pZmVzdFwiXG4gICAgfSxcbiAgICBcIm1heFwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiTWF4aW11bSB2YWx1ZVwiLFwidmFsdWVcIjogXCJWYXJpZXMqXCJ9LFxuICAgICAgICAgICAgXCJtZXRlclwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIlVwcGVyIGJvdW5kIG9mIHJhbmdlXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIGZsb2F0aW5nLXBvaW50IG51bWJlcipcIn0sXG4gICAgICAgICAgICBcInByb2dyZXNzXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVXBwZXIgYm91bmQgb2YgcmFuZ2VcIixcInZhbHVlXCI6IFwiVmFsaWQgZmxvYXRpbmctcG9pbnQgbnVtYmVyKlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcIm1heFwiXG4gICAgfSxcbiAgICBcIm1heGxlbmd0aFwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiTWF4aW11bSBsZW5ndGggb2YgdmFsdWVcIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXJcIn0sXG4gICAgICAgICAgICBcInRleHRhcmVhXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiTWF4aW11bSBsZW5ndGggb2YgdmFsdWVcIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXJcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJtYXhMZW5ndGhcIlxuICAgIH0sXG4gICAgXCJtZWRpYVwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImxpbmtcIjoge1wiZGVzY3JpcHRpb25cIjogXCJBcHBsaWNhYmxlIG1lZGlhXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIG1lZGlhIHF1ZXJ5IGxpc3RcIn0sXG4gICAgICAgICAgICBcInN0eWxlXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQXBwbGljYWJsZSBtZWRpYVwiLFwidmFsdWVcIjogXCJWYWxpZCBtZWRpYSBxdWVyeSBsaXN0XCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwibWVkaWFcIlxuICAgIH0sXG4gICAgXCJtZWRpYWdyb3VwXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiYXVkaW9cIjoge1wiZGVzY3JpcHRpb25cIjogXCJHcm91cHMgbWVkaWEgZWxlbWVudHMgdG9nZXRoZXIgd2l0aCBhbiBpbXBsaWNpdCBNZWRpYUNvbnRyb2xsZXJcIixcInZhbHVlXCI6IFwiVGV4dFwifSxcbiAgICAgICAgICAgIFwidmlkZW9cIjoge1wiZGVzY3JpcHRpb25cIjogXCJHcm91cHMgbWVkaWEgZWxlbWVudHMgdG9nZXRoZXIgd2l0aCBhbiBpbXBsaWNpdCBNZWRpYUNvbnRyb2xsZXJcIixcInZhbHVlXCI6IFwiVGV4dFwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcIm1lZGlhZ3JvdXBcIlxuICAgIH0sXG4gICAgXCJtZW51XCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiYnV0dG9uXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHRoZSBlbGVtZW50J3MgZGVzaWduYXRlZCBwb3AtdXAgbWVudVwiLFwidmFsdWVcIjogXCJJRCpcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJtZW51XCJcbiAgICB9LFxuICAgIFwibWV0aG9kXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiZm9ybVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkhUVFAgbWV0aG9kIHRvIHVzZSBmb3IgZm9ybSBzdWJtaXNzaW9uXCIsXCJ2YWx1ZVwiOiBcIlxcXCJHRVRcXFwiOyBcXFwiUE9TVFxcXCI7IFxcXCJkaWFsb2dcXFwiXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwibWV0aG9kXCJcbiAgICB9LFxuICAgIFwibWluXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiaW5wdXRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJNaW5pbXVtIHZhbHVlXCIsXCJ2YWx1ZVwiOiBcIlZhcmllcypcIn0sXG4gICAgICAgICAgICBcIm1ldGVyXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiTG93ZXIgYm91bmQgb2YgcmFuZ2VcIixcInZhbHVlXCI6IFwiVmFsaWQgZmxvYXRpbmctcG9pbnQgbnVtYmVyKlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcIm1pblwiXG4gICAgfSxcbiAgICBcIm1pbmxlbmd0aFwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiTWluaW11bSBsZW5ndGggb2YgdmFsdWVcIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXJcIn0sXG4gICAgICAgICAgICBcInRleHRhcmVhXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiTWluaW11bSBsZW5ndGggb2YgdmFsdWVcIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXJcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJtaW5sZW5ndGhcIlxuICAgIH0sXG4gICAgXCJtdWx0aXBsZVwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiV2hldGhlciB0byBhbGxvdyBtdWx0aXBsZSB2YWx1ZXNcIixcInZhbHVlXCI6IFwiQm9vbGVhbiBhdHRyaWJ1dGVcIn0sXG4gICAgICAgICAgICBcInNlbGVjdFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIldoZXRoZXIgdG8gYWxsb3cgbXVsdGlwbGUgdmFsdWVzXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwibXVsdGlwbGVcIlxuICAgIH0sXG4gICAgXCJtdXRlZFwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImF1ZGlvXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiV2hldGhlciB0byBtdXRlIHRoZSBtZWRpYSByZXNvdXJjZSBieSBkZWZhdWx0XCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9LFxuICAgICAgICAgICAgXCJ2aWRlb1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIldoZXRoZXIgdG8gbXV0ZSB0aGUgbWVkaWEgcmVzb3VyY2UgYnkgZGVmYXVsdFwiLFwidmFsdWVcIjogXCJCb29sZWFuIGF0dHJpYnV0ZVwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcIm11dGVkXCJcbiAgICB9LFxuICAgIFwibmFtZVwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImJ1dHRvblwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIk5hbWUgb2YgZm9ybSBjb250cm9sIHRvIHVzZSBmb3IgZm9ybSBzdWJtaXNzaW9uIGFuZCBpbiB0aGUgZm9ybS5lbGVtZW50cyBBUElcIixcInZhbHVlXCI6IFwiVGV4dCpcIn0sXG4gICAgICAgICAgICBcImZpZWxkc2V0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiTmFtZSBvZiBmb3JtIGNvbnRyb2wgdG8gdXNlIGZvciBmb3JtIHN1Ym1pc3Npb24gYW5kIGluIHRoZSBmb3JtLmVsZW1lbnRzIEFQSVwiLFwidmFsdWVcIjogXCJUZXh0KlwifSxcbiAgICAgICAgICAgIFwiaW5wdXRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJOYW1lIG9mIGZvcm0gY29udHJvbCB0byB1c2UgZm9yIGZvcm0gc3VibWlzc2lvbiBhbmQgaW4gdGhlIGZvcm0uZWxlbWVudHMgQVBJXCIsXCJ2YWx1ZVwiOiBcIlRleHQqXCJ9LFxuICAgICAgICAgICAgXCJrZXlnZW5cIjoge1wiZGVzY3JpcHRpb25cIjogXCJOYW1lIG9mIGZvcm0gY29udHJvbCB0byB1c2UgZm9yIGZvcm0gc3VibWlzc2lvbiBhbmQgaW4gdGhlIGZvcm0uZWxlbWVudHMgQVBJXCIsXCJ2YWx1ZVwiOiBcIlRleHQqXCJ9LFxuICAgICAgICAgICAgXCJvdXRwdXRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJOYW1lIG9mIGZvcm0gY29udHJvbCB0byB1c2UgZm9yIGZvcm0gc3VibWlzc2lvbiBhbmQgaW4gdGhlIGZvcm0uZWxlbWVudHMgQVBJXCIsXCJ2YWx1ZVwiOiBcIlRleHQqXCJ9LFxuICAgICAgICAgICAgXCJzZWxlY3RcIjoge1wiZGVzY3JpcHRpb25cIjogXCJOYW1lIG9mIGZvcm0gY29udHJvbCB0byB1c2UgZm9yIGZvcm0gc3VibWlzc2lvbiBhbmQgaW4gdGhlIGZvcm0uZWxlbWVudHMgQVBJXCIsXCJ2YWx1ZVwiOiBcIlRleHQqXCJ9LFxuICAgICAgICAgICAgXCJ0ZXh0YXJlYVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIk5hbWUgb2YgZm9ybSBjb250cm9sIHRvIHVzZSBmb3IgZm9ybSBzdWJtaXNzaW9uIGFuZCBpbiB0aGUgZm9ybS5lbGVtZW50cyBBUElcIixcInZhbHVlXCI6IFwiVGV4dCpcIn0sXG4gICAgICAgICAgICBcImZvcm1cIjoge1wiZGVzY3JpcHRpb25cIjogXCJOYW1lIG9mIGZvcm0gdG8gdXNlIGluIHRoZSBkb2N1bWVudC5mb3JtcyBBUElcIixcInZhbHVlXCI6IFwiVGV4dCpcIn0sXG4gICAgICAgICAgICBcImlmcmFtZVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIk5hbWUgb2YgbmVzdGVkIGJyb3dzaW5nIGNvbnRleHRcIixcInZhbHVlXCI6IFwiVmFsaWQgYnJvd3NpbmcgY29udGV4dCBuYW1lIG9yIGtleXdvcmRcIn0sXG4gICAgICAgICAgICBcIm9iamVjdFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIk5hbWUgb2YgbmVzdGVkIGJyb3dzaW5nIGNvbnRleHRcIixcInZhbHVlXCI6IFwiVmFsaWQgYnJvd3NpbmcgY29udGV4dCBuYW1lIG9yIGtleXdvcmRcIn0sXG4gICAgICAgICAgICBcIm1hcFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIk5hbWUgb2YgaW1hZ2UgbWFwIHRvIHJlZmVyZW5jZSBmcm9tIHRoZSB1c2VtYXAgYXR0cmlidXRlXCIsXCJ2YWx1ZVwiOiBcIlRleHQqXCJ9LFxuICAgICAgICAgICAgXCJtZXRhXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiTWV0YWRhdGEgbmFtZVwiLFwidmFsdWVcIjogXCJUZXh0KlwifSxcbiAgICAgICAgICAgIFwicGFyYW1cIjoge1wiZGVzY3JpcHRpb25cIjogXCJOYW1lIG9mIHBhcmFtZXRlclwiLFwidmFsdWVcIjogXCJUZXh0XCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwibmFtZVwiXG4gICAgfSxcbiAgICBcIm5vbmNlXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwic2NyaXB0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQ3J5cHRvZ3JhcGhpYyBub25jZSB1c2VkIGluIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGNoZWNrcyBbQ1NQXVwiLFwidmFsdWVcIjogXCJUZXh0XCJ9LFxuICAgICAgICAgICAgXCJzdHlsZVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkNyeXB0b2dyYXBoaWMgbm9uY2UgdXNlZCBpbiBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBjaGVja3MgW0NTUF1cIixcInZhbHVlXCI6IFwiVGV4dFwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcIm5vbmNlXCJcbiAgICB9LFxuICAgIFwibm92YWxpZGF0ZVwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImZvcm1cIjoge1wiZGVzY3JpcHRpb25cIjogXCJCeXBhc3MgZm9ybSBjb250cm9sIHZhbGlkYXRpb24gZm9yIGZvcm0gc3VibWlzc2lvblwiLFwidmFsdWVcIjogXCJCb29sZWFuIGF0dHJpYnV0ZVwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcIm5vdmFsaWRhdGVcIlxuICAgIH0sXG4gICAgXCJvcGVuXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiZGV0YWlsc1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIldoZXRoZXIgdGhlIGRldGFpbHMgYXJlIHZpc2libGVcIixcInZhbHVlXCI6IFwiQm9vbGVhbiBhdHRyaWJ1dGVcIn0sXG4gICAgICAgICAgICBcImRpYWxvZ1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIldoZXRoZXIgdGhlIGRpYWxvZyBib3ggaXMgc2hvd2luZ1wiLFwidmFsdWVcIjogXCJCb29sZWFuIGF0dHJpYnV0ZVwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcIm9wZW5cIlxuICAgIH0sXG4gICAgXCJvcHRpbXVtXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwibWV0ZXJcIjoge1wiZGVzY3JpcHRpb25cIjogXCJPcHRpbXVtIHZhbHVlIGluIGdhdWdlXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIGZsb2F0aW5nLXBvaW50IG51bWJlcipcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJvcHRpbXVtXCJcbiAgICB9LFxuICAgIFwicGF0dGVyblwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiUGF0dGVybiB0byBiZSBtYXRjaGVkIGJ5IHRoZSBmb3JtIGNvbnRyb2wncyB2YWx1ZVwiLFwidmFsdWVcIjogXCJSZWd1bGFyIGV4cHJlc3Npb24gbWF0Y2hpbmcgdGhlIEphdmFTY3JpcHQgUGF0dGVybiBwcm9kdWN0aW9uXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwicGF0dGVyblwiXG4gICAgfSxcbiAgICBcInBpbmdcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJhXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVVJMcyB0byBwaW5nXCIsXCJ2YWx1ZVwiOiBcIlNldCBvZiBzcGFjZS1zZXBhcmF0ZWQgdG9rZW5zIGNvbnNpc3Rpbmcgb2YgdmFsaWQgbm9uLWVtcHR5IFVSTHNcIn0sXG4gICAgICAgICAgICBcImFyZWFcIjoge1wiZGVzY3JpcHRpb25cIjogXCJVUkxzIHRvIHBpbmdcIixcInZhbHVlXCI6IFwiU2V0IG9mIHNwYWNlLXNlcGFyYXRlZCB0b2tlbnMgY29uc2lzdGluZyBvZiB2YWxpZCBub24tZW1wdHkgVVJMc1wifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcInBpbmdcIlxuICAgIH0sXG4gICAgXCJwbGFjZWhvbGRlclwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVXNlci12aXNpYmxlIGxhYmVsIHRvIGJlIHBsYWNlZCB3aXRoaW4gdGhlIGZvcm0gY29udHJvbFwiLFwidmFsdWVcIjogXCJUZXh0KlwifSxcbiAgICAgICAgICAgIFwidGV4dGFyZWFcIjoge1wiZGVzY3JpcHRpb25cIjogXCJVc2VyLXZpc2libGUgbGFiZWwgdG8gYmUgcGxhY2VkIHdpdGhpbiB0aGUgZm9ybSBjb250cm9sXCIsXCJ2YWx1ZVwiOiBcIlRleHQqXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwicGxhY2Vob2xkZXJcIlxuICAgIH0sXG4gICAgXCJwb3N0ZXJcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJ2aWRlb1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIlBvc3RlciBmcmFtZSB0byBzaG93IHByaW9yIHRvIHZpZGVvIHBsYXliYWNrXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIG5vbi1lbXB0eSBVUkwgcG90ZW50aWFsbHkgc3Vycm91bmRlZCBieSBzcGFjZXNcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJwb3N0ZXJcIlxuICAgIH0sXG4gICAgXCJwcmVsb2FkXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiYXVkaW9cIjoge1wiZGVzY3JpcHRpb25cIjogXCJIaW50cyBob3cgbXVjaCBidWZmZXJpbmcgdGhlIG1lZGlhIHJlc291cmNlIHdpbGwgbGlrZWx5IG5lZWRcIixcInZhbHVlXCI6IFwiXFxcIm5vbmVcXFwiOyBcXFwibWV0YWRhdGFcXFwiOyBcXFwiYXV0b1xcXCJcIn0sXG4gICAgICAgICAgICBcInZpZGVvXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiSGludHMgaG93IG11Y2ggYnVmZmVyaW5nIHRoZSBtZWRpYSByZXNvdXJjZSB3aWxsIGxpa2VseSBuZWVkXCIsXCJ2YWx1ZVwiOiBcIlxcXCJub25lXFxcIjsgXFxcIm1ldGFkYXRhXFxcIjsgXFxcImF1dG9cXFwiXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwicHJlbG9hZFwiXG4gICAgfSxcbiAgICBcInJhZGlvZ3JvdXBcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJtZW51aXRlbVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIk5hbWUgb2YgZ3JvdXAgb2YgY29tbWFuZHMgdG8gdHJlYXQgYXMgYSByYWRpbyBidXR0b24gZ3JvdXBcIixcInZhbHVlXCI6IFwiVGV4dFwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcInJhZGlvZ3JvdXBcIlxuICAgIH0sXG4gICAgXCJyZWFkb25seVwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiV2hldGhlciB0byBhbGxvdyB0aGUgdmFsdWUgdG8gYmUgZWRpdGVkIGJ5IHRoZSB1c2VyXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9LFxuICAgICAgICAgICAgXCJ0ZXh0YXJlYVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIldoZXRoZXIgdG8gYWxsb3cgdGhlIHZhbHVlIHRvIGJlIGVkaXRlZCBieSB0aGUgdXNlclwiLFwidmFsdWVcIjogXCJCb29sZWFuIGF0dHJpYnV0ZVwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcInJlYWRPbmx5XCJcbiAgICB9LFxuICAgIFwicmVsXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiYVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIlJlbGF0aW9uc2hpcCBiZXR3ZWVuIHRoZSBkb2N1bWVudCBjb250YWluaW5nIHRoZSBoeXBlcmxpbmsgYW5kIHRoZSBkZXN0aW5hdGlvbiByZXNvdXJjZVwiLFwidmFsdWVcIjogXCJTZXQgb2Ygc3BhY2Utc2VwYXJhdGVkIHRva2VucypcIn0sXG4gICAgICAgICAgICBcImFyZWFcIjoge1wiZGVzY3JpcHRpb25cIjogXCJSZWxhdGlvbnNoaXAgYmV0d2VlbiB0aGUgZG9jdW1lbnQgY29udGFpbmluZyB0aGUgaHlwZXJsaW5rIGFuZCB0aGUgZGVzdGluYXRpb24gcmVzb3VyY2VcIixcInZhbHVlXCI6IFwiU2V0IG9mIHNwYWNlLXNlcGFyYXRlZCB0b2tlbnMqXCJ9LFxuICAgICAgICAgICAgXCJsaW5rXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiUmVsYXRpb25zaGlwIGJldHdlZW4gdGhlIGRvY3VtZW50IGNvbnRhaW5pbmcgdGhlIGh5cGVybGluayBhbmQgdGhlIGRlc3RpbmF0aW9uIHJlc291cmNlXCIsXCJ2YWx1ZVwiOiBcIlNldCBvZiBzcGFjZS1zZXBhcmF0ZWQgdG9rZW5zKlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcInJlbFwiXG4gICAgfSxcbiAgICBcInJlcXVpcmVkXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiaW5wdXRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJXaGV0aGVyIHRoZSBjb250cm9sIGlzIHJlcXVpcmVkIGZvciBmb3JtIHN1Ym1pc3Npb25cIixcInZhbHVlXCI6IFwiQm9vbGVhbiBhdHRyaWJ1dGVcIn0sXG4gICAgICAgICAgICBcInNlbGVjdFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIldoZXRoZXIgdGhlIGNvbnRyb2wgaXMgcmVxdWlyZWQgZm9yIGZvcm0gc3VibWlzc2lvblwiLFwidmFsdWVcIjogXCJCb29sZWFuIGF0dHJpYnV0ZVwifSxcbiAgICAgICAgICAgIFwidGV4dGFyZWFcIjoge1wiZGVzY3JpcHRpb25cIjogXCJXaGV0aGVyIHRoZSBjb250cm9sIGlzIHJlcXVpcmVkIGZvciBmb3JtIHN1Ym1pc3Npb25cIixcInZhbHVlXCI6IFwiQm9vbGVhbiBhdHRyaWJ1dGVcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJyZXF1aXJlZFwiXG4gICAgfSxcbiAgICBcInJldmVyc2VkXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwib2xcIjoge1wiZGVzY3JpcHRpb25cIjogXCJOdW1iZXIgdGhlIGxpc3QgYmFja3dhcmRzXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwicmV2ZXJzZWRcIlxuICAgIH0sXG4gICAgXCJyb3dzXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwidGV4dGFyZWFcIjoge1wiZGVzY3JpcHRpb25cIjogXCJOdW1iZXIgb2YgbGluZXMgdG8gc2hvd1wiLFwidmFsdWVcIjogXCJWYWxpZCBub24tbmVnYXRpdmUgaW50ZWdlciBncmVhdGVyIHRoYW4gemVyb1wifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcInJvd3NcIlxuICAgIH0sXG4gICAgXCJyb3dzcGFuXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwidGRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJOdW1iZXIgb2Ygcm93cyB0aGF0IHRoZSBjZWxsIGlzIHRvIHNwYW5cIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXJcIn0sXG4gICAgICAgICAgICBcInRoXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiTnVtYmVyIG9mIHJvd3MgdGhhdCB0aGUgY2VsbCBpcyB0byBzcGFuXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwicm93U3BhblwiXG4gICAgfSxcbiAgICBcInNhbmRib3hcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJpZnJhbWVcIjoge1wiZGVzY3JpcHRpb25cIjogXCJTZWN1cml0eSBydWxlcyBmb3IgbmVzdGVkIGNvbnRlbnRcIixcInZhbHVlXCI6IFwiVW5vcmRlcmVkIHNldCBvZiB1bmlxdWUgc3BhY2Utc2VwYXJhdGVkIHRva2VucywgQVNDSUkgY2FzZS1pbnNlbnNpdGl2ZSwgY29uc2lzdGluZyBvZiBcXFwiYWxsb3ctZm9ybXNcXFwiLCBcXFwiYWxsb3ctbW9kYWxzXFxcIiwgXFxcImFsbG93LXBvaW50ZXItbG9ja1xcXCIsIFxcXCJhbGxvdy1wb3B1cHNcXFwiLCBcXFwiYWxsb3ctcG9wdXBzLXRvLWVzY2FwZS1zYW5kYm94XFxcIiwgXFxcImFsbG93LXNhbWUtb3JpZ2luXFxcIiwgXFxcImFsbG93LXNjcmlwdHMgYW5kIFxcXCJhbGxvdy10b3AtbmF2aWdhdGlvblxcXCJcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJzYW5kYm94XCJcbiAgICB9LFxuICAgIFwic3BlbGxjaGVja1wiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcIkhUTUwgZWxlbWVudHNcIjoge1wiZGVzY3JpcHRpb25cIjogXCJXaGV0aGVyIHRoZSBlbGVtZW50IGlzIHRvIGhhdmUgaXRzIHNwZWxsaW5nIGFuZCBncmFtbWFyIGNoZWNrZWRcIixcInZhbHVlXCI6IFwiXFxcInRydWVcXFwiOyBcXFwiZmFsc2VcXFwiXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwic3BlbGxjaGVja1wiXG4gICAgfSxcbiAgICBcInNjb3BlXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwidGhcIjoge1wiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgd2hpY2ggY2VsbHMgdGhlIGhlYWRlciBjZWxsIGFwcGxpZXMgdG9cIixcInZhbHVlXCI6IFwiXFxcInJvd1xcXCI7IFxcXCJjb2xcXFwiOyBcXFwicm93Z3JvdXBcXFwiOyBcXFwiY29sZ3JvdXBcXFwiXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwic2NvcGVcIlxuICAgIH0sXG4gICAgXCJzY29wZWRcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJzdHlsZVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIldoZXRoZXIgdGhlIHN0eWxlcyBhcHBseSB0byB0aGUgZW50aXJlIGRvY3VtZW50IG9yIGp1c3QgdGhlIHBhcmVudCBzdWJ0cmVlXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwic2NvcGVkXCJcbiAgICB9LFxuICAgIFwic2VhbWxlc3NcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJpZnJhbWVcIjoge1wiZGVzY3JpcHRpb25cIjogXCJXaGV0aGVyIHRvIGFwcGx5IHRoZSBkb2N1bWVudCdzIHN0eWxlcyB0byB0aGUgbmVzdGVkIGNvbnRlbnRcIixcInZhbHVlXCI6IFwiQm9vbGVhbiBhdHRyaWJ1dGVcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJzZWFtbGVzc1wiXG4gICAgfSxcbiAgICBcInNlbGVjdGVkXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwib3B0aW9uXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiV2hldGhlciB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkIGJ5IGRlZmF1bHRcIixcInZhbHVlXCI6IFwiQm9vbGVhbiBhdHRyaWJ1dGVcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJkZWZhdWx0U2VsZWN0ZWRcIlxuICAgIH0sXG4gICAgXCJzaGFwZVwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImFyZWFcIjoge1wiZGVzY3JpcHRpb25cIjogXCJUaGUga2luZCBvZiBzaGFwZSB0byBiZSBjcmVhdGVkIGluIGFuIGltYWdlIG1hcFwiLFwidmFsdWVcIjogXCJcXFwiY2lyY2xlXFxcIjsgXFxcImRlZmF1bHRcXFwiOyBcXFwicG9seVxcXCI7IFxcXCJyZWN0XFxcIlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcInNoYXBlXCJcbiAgICB9LFxuICAgIFwic2l6ZVwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiU2l6ZSBvZiB0aGUgY29udHJvbFwiLFwidmFsdWVcIjogXCJWYWxpZCBub24tbmVnYXRpdmUgaW50ZWdlciBncmVhdGVyIHRoYW4gemVyb1wifSxcbiAgICAgICAgICAgIFwic2VsZWN0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiU2l6ZSBvZiB0aGUgY29udHJvbFwiLFwidmFsdWVcIjogXCJWYWxpZCBub24tbmVnYXRpdmUgaW50ZWdlciBncmVhdGVyIHRoYW4gemVyb1wifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcInNpemVcIlxuICAgIH0sXG4gICAgXCJzaXplc1wiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImxpbmtcIjoge1wiZGVzY3JpcHRpb25cIjogXCJTaXplcyBvZiB0aGUgaWNvbnMgKGZvciByZWw9XFxcImljb25cXFwiKVwiLFwidmFsdWVcIjogXCJVbm9yZGVyZWQgc2V0IG9mIHVuaXF1ZSBzcGFjZS1zZXBhcmF0ZWQgdG9rZW5zLCBBU0NJSSBjYXNlLWluc2Vuc2l0aXZlLCBjb25zaXN0aW5nIG9mIHNpemVzKlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcInNpemVzXCJcbiAgICB9LFxuICAgIFwic29ydGFibGVcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJ0YWJsZVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkVuYWJsZXMgYSBzb3J0aW5nIGludGVyZmFjZSBmb3IgdGhlIHRhYmxlXCIsXCJ2YWx1ZVwiOiBcIkJvb2xlYW4gYXR0cmlidXRlXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwic29ydGFibGVcIlxuICAgIH0sXG4gICAgXCJzb3J0ZWRcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJ0aFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkNvbHVtbiBzb3J0IGRpcmVjdGlvbiBhbmQgb3JkaW5hbGl0eVwiLFwidmFsdWVcIjogXCJTZXQgb2Ygc3BhY2Utc2VwYXJhdGVkIHRva2VucywgQVNDSUkgY2FzZS1pbnNlbnNpdGl2ZSwgY29uc2lzdGluZyBvZiBuZWl0aGVyLCBvbmUsIG9yIGJvdGggb2YgXFxcInJldmVyc2VkXFxcIiBhbmQgYSB2YWxpZCBub24tbmVnYXRpdmUgaW50ZWdlciBncmVhdGVyIHRoYW4gemVyb1wifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcInNvcnRlZFwiXG4gICAgfSxcbiAgICBcInNwYW5cIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJjb2xcIjoge1wiZGVzY3JpcHRpb25cIjogXCJOdW1iZXIgb2YgY29sdW1ucyBzcGFubmVkIGJ5IHRoZSBlbGVtZW50XCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiB6ZXJvXCJ9LFxuICAgICAgICAgICAgXCJjb2xncm91cFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIk51bWJlciBvZiBjb2x1bW5zIHNwYW5uZWQgYnkgdGhlIGVsZW1lbnRcIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXIgZ3JlYXRlciB0aGFuIHplcm9cIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJzcGFuXCJcbiAgICB9LFxuICAgIFwic3JjXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiYXVkaW9cIjoge1wiZGVzY3JpcHRpb25cIjogXCJBZGRyZXNzIG9mIHRoZSByZXNvdXJjZVwiLFwidmFsdWVcIjogXCJWYWxpZCBub24tZW1wdHkgVVJMIHBvdGVudGlhbGx5IHN1cnJvdW5kZWQgYnkgc3BhY2VzXCJ9LFxuICAgICAgICAgICAgXCJlbWJlZFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkFkZHJlc3Mgb2YgdGhlIHJlc291cmNlXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIG5vbi1lbXB0eSBVUkwgcG90ZW50aWFsbHkgc3Vycm91bmRlZCBieSBzcGFjZXNcIn0sXG4gICAgICAgICAgICBcImlmcmFtZVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkFkZHJlc3Mgb2YgdGhlIHJlc291cmNlXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIG5vbi1lbXB0eSBVUkwgcG90ZW50aWFsbHkgc3Vycm91bmRlZCBieSBzcGFjZXNcIn0sXG4gICAgICAgICAgICBcImltZ1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkFkZHJlc3Mgb2YgdGhlIHJlc291cmNlXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIG5vbi1lbXB0eSBVUkwgcG90ZW50aWFsbHkgc3Vycm91bmRlZCBieSBzcGFjZXNcIn0sXG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQWRkcmVzcyBvZiB0aGUgcmVzb3VyY2VcIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLWVtcHR5IFVSTCBwb3RlbnRpYWxseSBzdXJyb3VuZGVkIGJ5IHNwYWNlc1wifSxcbiAgICAgICAgICAgIFwic2NyaXB0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQWRkcmVzcyBvZiB0aGUgcmVzb3VyY2VcIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLWVtcHR5IFVSTCBwb3RlbnRpYWxseSBzdXJyb3VuZGVkIGJ5IHNwYWNlc1wifSxcbiAgICAgICAgICAgIFwic291cmNlXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQWRkcmVzcyBvZiB0aGUgcmVzb3VyY2VcIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLWVtcHR5IFVSTCBwb3RlbnRpYWxseSBzdXJyb3VuZGVkIGJ5IHNwYWNlc1wifSxcbiAgICAgICAgICAgIFwidHJhY2tcIjoge1wiZGVzY3JpcHRpb25cIjogXCJBZGRyZXNzIG9mIHRoZSByZXNvdXJjZVwiLFwidmFsdWVcIjogXCJWYWxpZCBub24tZW1wdHkgVVJMIHBvdGVudGlhbGx5IHN1cnJvdW5kZWQgYnkgc3BhY2VzXCJ9LFxuICAgICAgICAgICAgXCJ2aWRlb1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkFkZHJlc3Mgb2YgdGhlIHJlc291cmNlXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIG5vbi1lbXB0eSBVUkwgcG90ZW50aWFsbHkgc3Vycm91bmRlZCBieSBzcGFjZXNcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJzcmNcIlxuICAgIH0sXG4gICAgXCJzcmNkb2NcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJpZnJhbWVcIjoge1wiZGVzY3JpcHRpb25cIjogXCJBIGRvY3VtZW50IHRvIHJlbmRlciBpbiB0aGUgaWZyYW1lXCIsXCJ2YWx1ZVwiOiBcIlRoZSBzb3VyY2Ugb2YgYW4gaWZyYW1lIHNyY2RvYyBkb2N1bWVudCpcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJzcmNkb2NcIlxuICAgIH0sXG4gICAgXCJzcmNsYW5nXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwidHJhY2tcIjoge1wiZGVzY3JpcHRpb25cIjogXCJMYW5ndWFnZSBvZiB0aGUgdGV4dCB0cmFja1wiLFwidmFsdWVcIjogXCJWYWxpZCBCQ1AgNDcgbGFuZ3VhZ2UgdGFnXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwic3JjbGFuZ1wiXG4gICAgfSxcbiAgICBcInNyY3NldFwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImltZ1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkltYWdlcyB0byB1c2UgaW4gZGlmZmVyZW50IHNpdHVhdGlvbnMgKGUuZy4gaGlnaC1yZXNvbHV0aW9uIGRpc3BsYXlzLCBzbWFsbCBtb25pdG9ycywgZXRjKVwiLFwidmFsdWVcIjogXCJDb21tYS1zZXBhcmF0ZWQgbGlzdCBvZiBpbWFnZSBjYW5kaWRhdGUgc3RyaW5nc1wifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcInNyY3NldFwiXG4gICAgfSxcbiAgICBcInN0YXJ0XCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwib2xcIjoge1wiZGVzY3JpcHRpb25cIjogXCJPcmRpbmFsIHZhbHVlIG9mIHRoZSBmaXJzdCBpdGVtXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIGludGVnZXJcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJzdGFydFwiXG4gICAgfSxcbiAgICBcInN0ZXBcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJpbnB1dFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkdyYW51bGFyaXR5IHRvIGJlIG1hdGNoZWQgYnkgdGhlIGZvcm0gY29udHJvbCdzIHZhbHVlXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIGZsb2F0aW5nLXBvaW50IG51bWJlciBncmVhdGVyIHRoYW4gemVybywgb3IgXFxcImFueVxcXCJcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJzdGVwXCJcbiAgICB9LFxuICAgIFwic3R5bGVcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJIVE1MIGVsZW1lbnRzXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiUHJlc2VudGF0aW9uYWwgYW5kIGZvcm1hdHRpbmcgaW5zdHJ1Y3Rpb25zXCIsXCJ2YWx1ZVwiOiBcIkNTUyBkZWNsYXJhdGlvbnMqXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwic3R5bGVcIixcbiAgICAgICAgXCJub1Byb3BlcnR5XCI6IHRydWUgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0OTA2Mjc5L2hvdy10by1zZXQtZWxlbWVudC1zdHlsZS1wcm9wZXJ0eS1pbi1zdHJpY3QtbW9kZSxcbiAgICB9LFxuICAgIFwidGFiaW5kZXhcIjoge1xuICAgICAgICBcInRhZ3NcIjoge1xuICAgICAgICAgICAgXCJIVE1MIGVsZW1lbnRzXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiV2hldGhlciB0aGUgZWxlbWVudCBpcyBmb2N1c2FibGUsIGFuZCB0aGUgcmVsYXRpdmUgb3JkZXIgb2YgdGhlIGVsZW1lbnQgZm9yIHRoZSBwdXJwb3NlcyBvZiBzZXF1ZW50aWFsIGZvY3VzIG5hdmlnYXRpb25cIixcInZhbHVlXCI6IFwiVmFsaWQgaW50ZWdlclwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcInRhYkluZGV4XCJcbiAgICB9LFxuICAgIFwidGFyZ2V0XCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiYVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkJyb3dzaW5nIGNvbnRleHQgZm9yIGh5cGVybGluayBuYXZpZ2F0aW9uXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIGJyb3dzaW5nIGNvbnRleHQgbmFtZSBvciBrZXl3b3JkXCJ9LFxuICAgICAgICAgICAgXCJhcmVhXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiQnJvd3NpbmcgY29udGV4dCBmb3IgaHlwZXJsaW5rIG5hdmlnYXRpb25cIixcInZhbHVlXCI6IFwiVmFsaWQgYnJvd3NpbmcgY29udGV4dCBuYW1lIG9yIGtleXdvcmRcIn0sXG4gICAgICAgICAgICBcImJhc2VcIjoge1wiZGVzY3JpcHRpb25cIjogXCJEZWZhdWx0IGJyb3dzaW5nIGNvbnRleHQgZm9yIGh5cGVybGluayBuYXZpZ2F0aW9uIGFuZCBmb3JtIHN1Ym1pc3Npb25cIixcInZhbHVlXCI6IFwiVmFsaWQgYnJvd3NpbmcgY29udGV4dCBuYW1lIG9yIGtleXdvcmRcIn0sXG4gICAgICAgICAgICBcImZvcm1cIjoge1wiZGVzY3JpcHRpb25cIjogXCJCcm93c2luZyBjb250ZXh0IGZvciBmb3JtIHN1Ym1pc3Npb25cIixcInZhbHVlXCI6IFwiVmFsaWQgYnJvd3NpbmcgY29udGV4dCBuYW1lIG9yIGtleXdvcmRcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJ0YXJnZXRcIlxuICAgIH0sXG4gICAgXCJ0aXRsZVwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcIkhUTUwgZWxlbWVudHNcIjoge1wiZGVzY3JpcHRpb25cIjogXCJBZHZpc29yeSBpbmZvcm1hdGlvbiBmb3IgdGhlIGVsZW1lbnRcIixcInZhbHVlXCI6IFwiVGV4dFwifSxcbiAgICAgICAgICAgIFwiYWJiclwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkZ1bGwgdGVybSBvciBleHBhbnNpb24gb2YgYWJicmV2aWF0aW9uXCIsXCJ2YWx1ZVwiOiBcIlRleHRcIn0sXG4gICAgICAgICAgICBcImRmblwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkZ1bGwgdGVybSBvciBleHBhbnNpb24gb2YgYWJicmV2aWF0aW9uXCIsXCJ2YWx1ZVwiOiBcIlRleHRcIn0sXG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiRGVzY3JpcHRpb24gb2YgcGF0dGVybiAod2hlbiB1c2VkIHdpdGggcGF0dGVybiBhdHRyaWJ1dGUpXCIsXCJ2YWx1ZVwiOiBcIlRleHRcIn0sXG4gICAgICAgICAgICBcIm1lbnVpdGVtXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiSGludCBkZXNjcmliaW5nIHRoZSBjb21tYW5kXCIsXCJ2YWx1ZVwiOiBcIlRleHRcIn0sXG4gICAgICAgICAgICBcImxpbmtcIjoge1wiZGVzY3JpcHRpb25cIjogXCJBbHRlcm5hdGl2ZSBzdHlsZSBzaGVldCBzZXQgbmFtZVwiLFwidmFsdWVcIjogXCJUZXh0XCJ9LFxuICAgICAgICAgICAgXCJzdHlsZVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkFsdGVybmF0aXZlIHN0eWxlIHNoZWV0IHNldCBuYW1lXCIsXCJ2YWx1ZVwiOiBcIlRleHRcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJ0aXRsZVwiXG4gICAgfSxcbiAgICBcInRyYW5zbGF0ZVwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcIkhUTUwgZWxlbWVudHNcIjoge1wiZGVzY3JpcHRpb25cIjogXCJXaGV0aGVyIHRoZSBlbGVtZW50IGlzIHRvIGJlIHRyYW5zbGF0ZWQgd2hlbiB0aGUgcGFnZSBpcyBsb2NhbGl6ZWRcIixcInZhbHVlXCI6IFwiXFxcInllc1xcXCI7IFxcXCJub1xcXCJcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJ0cmFuc2xhdGVcIlxuICAgIH0sXG4gICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiYVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkhpbnQgZm9yIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2VkIHJlc291cmNlXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIE1JTUUgdHlwZVwifSxcbiAgICAgICAgICAgIFwibGlua1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkhpbnQgZm9yIHRoZSB0eXBlIG9mIHRoZSByZWZlcmVuY2VkIHJlc291cmNlXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIE1JTUUgdHlwZVwifSxcbiAgICAgICAgICAgIFwiYnV0dG9uXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVHlwZSBvZiBidXR0b25cIixcInZhbHVlXCI6IFwiXFxcInN1Ym1pdFxcXCI7IFxcXCJyZXNldFxcXCI7IFxcXCJidXR0b25cXFwiOyBcXFwibWVudVxcXCJcIn0sXG4gICAgICAgICAgICBcImVtYmVkXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVHlwZSBvZiBlbWJlZGRlZCByZXNvdXJjZVwiLFwidmFsdWVcIjogXCJWYWxpZCBNSU1FIHR5cGVcIn0sXG4gICAgICAgICAgICBcIm9iamVjdFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIlR5cGUgb2YgZW1iZWRkZWQgcmVzb3VyY2VcIixcInZhbHVlXCI6IFwiVmFsaWQgTUlNRSB0eXBlXCJ9LFxuICAgICAgICAgICAgXCJzY3JpcHRcIjoge1wiZGVzY3JpcHRpb25cIjogXCJUeXBlIG9mIGVtYmVkZGVkIHJlc291cmNlXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIE1JTUUgdHlwZVwifSxcbiAgICAgICAgICAgIFwic291cmNlXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVHlwZSBvZiBlbWJlZGRlZCByZXNvdXJjZVwiLFwidmFsdWVcIjogXCJWYWxpZCBNSU1FIHR5cGVcIn0sXG4gICAgICAgICAgICBcInN0eWxlXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVHlwZSBvZiBlbWJlZGRlZCByZXNvdXJjZVwiLFwidmFsdWVcIjogXCJWYWxpZCBNSU1FIHR5cGVcIn0sXG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVHlwZSBvZiBmb3JtIGNvbnRyb2xcIixcInZhbHVlXCI6IFwiaW5wdXQgdHlwZSBrZXl3b3JkXCJ9LFxuICAgICAgICAgICAgXCJtZW51XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVHlwZSBvZiBtZW51XCIsXCJ2YWx1ZVwiOiBcIlxcXCJjb250ZXh0XFxcIjsgXFxcInRvb2xiYXJcXFwiXCJ9LFxuICAgICAgICAgICAgXCJtZW51aXRlbVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIlR5cGUgb2YgY29tbWFuZFwiLFwidmFsdWVcIjogXCJcXFwiY29tbWFuZFxcXCI7IFxcXCJjaGVja2JveFxcXCI7IFxcXCJyYWRpb1xcXCJcIn0sXG4gICAgICAgICAgICBcIm9sXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiS2luZCBvZiBsaXN0IG1hcmtlclwiLFwidmFsdWVcIjogXCJcXFwiMVxcXCI7IFxcXCJhXFxcIjsgXFxcIkFcXFwiOyBcXFwiaVxcXCI7IFxcXCJJXFxcIlwifVxuICAgICAgICB9LFxuICAgICAgICBcImlkbFwiOiBcInR5cGVcIlxuICAgIH0sXG4gICAgXCJ0eXBlbXVzdG1hdGNoXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwib2JqZWN0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiV2hldGhlciB0aGUgdHlwZSBhdHRyaWJ1dGUgYW5kIHRoZSBDb250ZW50LVR5cGUgdmFsdWUgbmVlZCB0byBtYXRjaCBmb3IgdGhlIHJlc291cmNlIHRvIGJlIHVzZWRcIixcInZhbHVlXCI6IFwiQm9vbGVhbiBhdHRyaWJ1dGVcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJ0eXBlbXVzdG1hdGNoXCJcbiAgICB9LFxuICAgIFwidXNlbWFwXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwiaW1nXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiTmFtZSBvZiBpbWFnZSBtYXAgdG8gdXNlXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIGhhc2gtbmFtZSByZWZlcmVuY2UqXCJ9LFxuICAgICAgICAgICAgXCJvYmplY3RcIjoge1wiZGVzY3JpcHRpb25cIjogXCJOYW1lIG9mIGltYWdlIG1hcCB0byB1c2VcIixcInZhbHVlXCI6IFwiVmFsaWQgaGFzaC1uYW1lIHJlZmVyZW5jZSpcIn1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGxcIjogXCJ1c2VNYXBcIlxuICAgIH0sXG4gICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImJ1dHRvblwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIlZhbHVlIHRvIGJlIHVzZWQgZm9yIGZvcm0gc3VibWlzc2lvblwiLFwidmFsdWVcIjogXCJUZXh0XCJ9LFxuICAgICAgICAgICAgXCJvcHRpb25cIjoge1wiZGVzY3JpcHRpb25cIjogXCJWYWx1ZSB0byBiZSB1c2VkIGZvciBmb3JtIHN1Ym1pc3Npb25cIixcInZhbHVlXCI6IFwiVGV4dFwifSxcbiAgICAgICAgICAgIFwiZGF0YVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIk1hY2hpbmUtcmVhZGFibGUgdmFsdWVcIixcInZhbHVlXCI6IFwiVGV4dCpcIn0sXG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiVmFsdWUgb2YgdGhlIGZvcm0gY29udHJvbFwiLFwidmFsdWVcIjogXCJWYXJpZXMqXCJ9LFxuICAgICAgICAgICAgXCJsaVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIk9yZGluYWwgdmFsdWUgb2YgdGhlIGxpc3QgaXRlbVwiLFwidmFsdWVcIjogXCJWYWxpZCBpbnRlZ2VyXCJ9LFxuICAgICAgICAgICAgXCJtZXRlclwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkN1cnJlbnQgdmFsdWUgb2YgdGhlIGVsZW1lbnRcIixcInZhbHVlXCI6IFwiVmFsaWQgZmxvYXRpbmctcG9pbnQgbnVtYmVyXCJ9LFxuICAgICAgICAgICAgXCJwcm9ncmVzc1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkN1cnJlbnQgdmFsdWUgb2YgdGhlIGVsZW1lbnRcIixcInZhbHVlXCI6IFwiVmFsaWQgZmxvYXRpbmctcG9pbnQgbnVtYmVyXCJ9LFxuICAgICAgICAgICAgXCJwYXJhbVwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIlZhbHVlIG9mIHBhcmFtZXRlclwiLFwidmFsdWVcIjogXCJUZXh0XCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwidmFsdWVcIlxuICAgIH0sXG4gICAgXCJ3aWR0aFwiOiB7XG4gICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICBcImNhbnZhc1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkhvcml6b250YWwgZGltZW5zaW9uXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyXCJ9LFxuICAgICAgICAgICAgXCJlbWJlZFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkhvcml6b250YWwgZGltZW5zaW9uXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyXCJ9LFxuICAgICAgICAgICAgXCJpZnJhbWVcIjoge1wiZGVzY3JpcHRpb25cIjogXCJIb3Jpem9udGFsIGRpbWVuc2lvblwiLFwidmFsdWVcIjogXCJWYWxpZCBub24tbmVnYXRpdmUgaW50ZWdlclwifSxcbiAgICAgICAgICAgIFwiaW1nXCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiSG9yaXpvbnRhbCBkaW1lbnNpb25cIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXJcIn0sXG4gICAgICAgICAgICBcImlucHV0XCI6IHtcImRlc2NyaXB0aW9uXCI6IFwiSG9yaXpvbnRhbCBkaW1lbnNpb25cIixcInZhbHVlXCI6IFwiVmFsaWQgbm9uLW5lZ2F0aXZlIGludGVnZXJcIn0sXG4gICAgICAgICAgICBcIm9iamVjdFwiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkhvcml6b250YWwgZGltZW5zaW9uXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyXCJ9LFxuICAgICAgICAgICAgXCJ2aWRlb1wiOiB7XCJkZXNjcmlwdGlvblwiOiBcIkhvcml6b250YWwgZGltZW5zaW9uXCIsXCJ2YWx1ZVwiOiBcIlZhbGlkIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwid2lkdGhcIlxuICAgIH0sXG4gICAgXCJ3cmFwXCI6IHtcbiAgICAgICAgXCJ0YWdzXCI6IHtcbiAgICAgICAgICAgIFwidGV4dGFyZWFcIjoge1wiZGVzY3JpcHRpb25cIjogXCJIb3cgdGhlIHZhbHVlIG9mIHRoZSBmb3JtIGNvbnRyb2wgaXMgdG8gYmUgd3JhcHBlZCBmb3IgZm9ybSBzdWJtaXNzaW9uXCIsXCJ2YWx1ZVwiOiBcIlxcXCJzb2Z0XFxcIjsgXFxcImhhcmRcXFwiXCJ9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsXCI6IFwid3JhcFwiXG4gICAgfVxufTtcbi8vIGdlbmVyYXRlZCBieSBnZW5lcmF0b3JzL2F0dHJpYnV0ZXMuanNcbi8vXG5cblxuanNUb0h0bWwuaHRtbC5fdGV4dD1mdW5jdGlvbiBfdGV4dCh0ZXh0KXtcbiAgICByZXR1cm4ganNUb0h0bWwuZGlyZWN0KHt0ZXh0Tm9kZTp0ZXh0fSk7XG59O1xuXG5qc1RvSHRtbC5odG1sLl9jb21tZW50PWZ1bmN0aW9uIF9jb21tZW50KHRleHQpe1xuICAgIHJldHVybiBqc1RvSHRtbC5kaXJlY3Qoe2NvbW1lbnRUZXh0OnRleHR9KTtcbn07XG5cbmpzVG9IdG1sLmh0bWwuaW5jbHVkZUh0bWw9ZnVuY3Rpb24gX3RleHQoaHRtbENvZGUpe1xuICAgIGlmKCF0aGlzLmluc2VjdXJlTW9kZUVuYWJsZWQpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJqc1RvSHRtbC5odG1sLmluY2x1ZGVIdG1sOiBpbnNlY3VyZSBmdW5jdGlvbnMgbm90IGFsbG93ZWRcIik7XG4gICAgfVxuICAgIHJldHVybiBqc1RvSHRtbC5kaXJlY3Qoe2h0bWxDb2RlOmh0bWxDb2RlLCB2YWxpZGF0b3I6dGhpcy5pbmNsdWRlSHRtbFZhbGlkYXRvcn0pO1xufTtcblxuLy8gdmFyIG9rPU9iamVjdC5rZXlzKGpzVG9IdG1sLmh0bWxUYWdzKVxuXG5PYmplY3Qua2V5cyhqc1RvSHRtbC5odG1sVGFncykubWFwKGZ1bmN0aW9uKHRhZ05hbWUpe1xuLy8gb2subWFwKGZ1bmN0aW9uKHRhZ05hbWUpeyAgICBcbiAgICBqc1RvSHRtbC5odG1sW3RhZ05hbWVdPWZ1bmN0aW9uKGNvbnRlbnRPckF0dHJpYnV0ZXMsY29udGVudElmVGhlcmVBcmVBdHRyaWJ1dGVzKXtcbiAgICAgICAgcmV0dXJuIGpzVG9IdG1sLmluZGlyZWN0KHRhZ05hbWUsY29udGVudE9yQXR0cmlidXRlcyxjb250ZW50SWZUaGVyZUFyZUF0dHJpYnV0ZXMpO1xuICAgIH07XG59KTtcblxuanNUb0h0bWwuSHRtbFRleHROb2RlLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoKXtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy50ZXh0Tm9kZSk7XG59O1xuXG5qc1RvSHRtbC5odG1sLmluY2x1ZGVIdG1sVmFsaWRhdG9yPWZ1bmN0aW9uKGh0bWxUZXh0KXtcbiAgICByZXR1cm4gL14oKDxbXjw+XSs+KXxbXjw+XSt8XFxuKSokLy50ZXN0KGh0bWxUZXh0KTtcbn07XG5cbmpzVG9IdG1sLkh0bWwucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZSgpe1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnRhZ05hbWUpO1xuICAgIE9iamVjdC5rZXlzKHRoaXMuYXR0cmlidXRlcykubWFwKGZ1bmN0aW9uKGF0dHIpe1xuICAgICAgICB2YXIgdmFsdWU9dGhpcy5hdHRyaWJ1dGVzW2F0dHJdO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYXR0clwiLCBhdHRyLCBcInZhbHVlXCIsIHZhbHVlKTtcbiAgICAgICAgaWYoLy0vLnRlc3QoYXR0cikpe1xuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ciwgdmFsdWUpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHZhciBkZWZBdHRyPWpzVG9IdG1sLmh0bWxBdHRyaWJ1dGVzW2F0dHJdO1xuICAgICAgICAgICAgaWYoKCdsaXN0TmFtZScgaW4gZGVmQXR0cikgJiYgKHR5cGVvZiB2YWx1ZSE9PVwic3RyaW5nXCIpKXtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHZhbHVlLGZ1bmN0aW9uKHN1YlZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFtkZWZBdHRyLmxpc3ROYW1lXS5hZGQoc3ViVmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgaWYoZGVmQXR0ci5ub1Byb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGRlZkF0dHIuaWRsLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbZGVmQXR0ci5pZGxdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSx0aGlzKTtcbiAgICB0aGlzLmNvbnRlbnQuZm9yRWFjaChmdW5jdGlvbihub2RlKXtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChub2RlIGluc3RhbmNlb2YgSHRtbEJhc2U/bm9kZS5jcmVhdGUoKTpub2RlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbnJldHVybiBqc1RvSHRtbDtcblxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9qcy10by1odG1sL2pzLXRvLWh0bWwuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==