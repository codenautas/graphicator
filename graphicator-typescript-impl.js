"use strict";
/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
var Tabulator = require("tabulator");
var c3 = require("c3");
var d3 = require("d3");
var Graphicator = (function () {
    function Graphicator() {
        this.buildChartParamsFunctions = {
            pie: function (elementId, matrix) {
                //TODO: change 'that' variable and use this
                var that = new Graphicator();
                //TODO: change to typescript and refactor to es6 and validate browser support (Set, arrow functions)
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
                                return d3.format()(value);
                            }
                        }
                    }
                };
                return chartParameters;
            },
            bar: function (elementId, matrix) {
                //TODO: change 'that' variable and use this
                var that = new Graphicator();
                return that.buildProgressChartParams(elementId, matrix, 'bar');
            },
            line: function (elementId, matrix) {
                //TODO: change 'that' variable and use this
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
        //chart rendering
        var chartParameters = this.buildChartParamsFunctions[type](elementId, matrix);
        this.renderChart(elementId, chartParameters);
    };
    Graphicator.prototype.validateOneElementArray = function (arrayVar, varName) {
        if (arrayVar.constructor !== Array || arrayVar.length != 1) {
            throw new Error(varName + ' must be an array and have only one element');
        }
        //pass validation
    };
    Graphicator.prototype.getUniqueArrayElement = function (array, varName) {
        this.validateOneElementArray(array, varName);
        return array[0];
    };
    /*
    * Common construction for all "progressive" charts (line, bar, stacked bars, etc),  (for example pie chart isn't a "progressive" chart)
    */
    Graphicator.prototype.buildProgressChartParams = function (elementId, matrix, type) {
        var _this = this;
        //TODO: change to typescript and refactor to es6 and validate browser support (Set, arrow functions)
        var xTitles = ['x'].concat(matrix.columns.map(function (x) { return _this.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles'); }));
        var rowsForChart = matrix.lines.map(function (x) { return [_this.getUniqueArrayElement(x.titles, 'matrix.lines[*].titles')].concat(x.cells.map(function (c) { return (c && c.valor) || ''; })); });
        //TODO: separate logic for construction of group option 
        var groups = (type == 'bar') ? [rowsForChart.map(function (x) { return x[0]; } /*first element is the name */)] : false;
        var chartParameters = {
            data: {
                x: 'x',
                columns: [xTitles].concat(rowsForChart),
                type: type,
                groups: groups
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
        var chart = c3.generate(__assign({ bindto: '#' + elementId }, chartParameters));
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
