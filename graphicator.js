/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/
"use strict";

(function webpackUniversalModuleDefinition(root, factory) {
    /* global define */
    /* global globalModuleName */
    if (typeof root.globalModuleName !== 'string') {
        root.globalModuleName = factory.name;
    }
    /* istanbul ignore next */
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define(factory);
    else if (typeof exports === 'object')
        exports[root.globalModuleName] = factory();
    else
        root[root.globalModuleName] = factory();
    root.globalModuleName = null;
})(/*jshint -W040 */this, function Graphicator() {
    /*jshint +W040 */

    var Tabulator = require('tabulator');
    var tabulator = new Tabulator();
    tabulator.defaultShowAttribute = 'valor';

    var Graphicator = function () {
    };

    Graphicator.prototype.renderTabulation = function (datum, elementId, type) {
        var matrix = tabulator.toMatrix(datum);
        this.renderTable(elementId, matrix);
        //chart rendering
        var chartParameters = this.buildChartParamsFunctions[type](elementId, matrix);
        this.renderChart(elementId, chartParameters);
    }

    Graphicator.prototype.validateOneElementArray = function (arrayVar, varName) {
        if (arrayVar.constructor !== Array || arrayVar.length != 1) {
            throw new Error(varName + ' must be an array and have only one element');
        }
        //pass validation
    }

    Graphicator.prototype.getUniqueArrayElement = function (array, varName) {
        this.validateOneElementArray(array, varName);
        return array[0];
    }

    Graphicator.prototype.prueba = function () {
        return 44;
    }

    Graphicator.prototype.buildChartParamsFunctions = {
        pie: function (elementId, matrix) {
            //TODO: change 'that' variable and use this
            var that = new Graphicator();
            //TODO: change to typescript and refactor to es6 and validate browser support (Set, arrow functions)
            var dataVarName = that.getUniqueArrayElement(matrix.dataVariables, 'matrix.dataVariables');
            var columns = matrix.columns.map((x, index) => [that.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles'), that.getUniqueArrayElement(matrix.lines, 'matrix.lines').cells[index][dataVarName]]);
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
    }

    /*
    * Common construction for all "progressive" charts (line, bar, stacked bars, etc),  (for example pie chart isn't a "progressive" chart)
    */
    Graphicator.prototype.buildProgressChartParams = function (elementId, matrix, type) {
        //TODO: change to typescript and refactor to es6 and validate browser support (Set, arrow functions)
        var xTitles = ['x'].concat(matrix.columns.map(x => this.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles')));
        var rowsForChart = matrix.lines.map(x => [this.getUniqueArrayElement(x.titles, 'matrix.lines[*].titles')].concat(x.cells.map(c => (c && c.valor) || '')));
        //TODO: separate logic for construction of group option 
        var groups = (type == 'bar') ? [rowsForChart.map(x => x[0] /*first element is the name */)] : false;
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
        }
        return chartParameters;
    }

    Graphicator.prototype.renderChart = function (elementId, chartParameters) {
        var chart = c3.generate(Object.assign({ bindto: '#' + elementId }, chartParameters));
    }

    Graphicator.prototype.renderTable = function (elementId, matrix) {
        var element = document.getElementById(elementId);
        element.innerHTML = "";
        var table = tabulator.toHtmlTable(matrix);
        element.parentNode.insertBefore(table.create(), element);
    }

    return Graphicator;
});