/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/

import Tabulator = require('tabulator');
import c3 = require('c3');
import d3 = require('d3');

class Graphicator {
     tabulator: Tabulator;

    constructor() {
        this.tabulator =  new Tabulator();
        this.tabulator.defaultShowAttribute = 'valor';
    }

    renderTabulation(datum, elementId, type) {
        var matrix = this.tabulator.toMatrix(datum);
        this.renderTable(elementId, matrix);
        //chart rendering
        var chartParameters = this.buildChartParamsFunctions[type](elementId, matrix);
        this.renderChart(elementId, chartParameters);
    }

    validateOneElementArray(arrayVar, varName) {
        if (arrayVar.constructor !== Array || arrayVar.length != 1) {
            throw new Error(varName + ' must be an array and have only one element');
        }
        //pass validation
    }

    getUniqueArrayElement(array, varName) {
        this.validateOneElementArray(array, varName);
        return array[0];
    }

    buildChartParamsFunctions = {
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
    buildProgressChartParams(elementId, matrix, type) {
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

    renderChart(elementId, chartParameters) {
        var chart = c3.generate({bindto: '#' + elementId , ...chartParameters});
    }

    renderTable(elementId, matrix) {
        var element = document.getElementById(elementId);
        element.innerHTML = "";
        var table = this.tabulator.toHtmlTable(matrix);
        element.parentNode.insertBefore(table.create(), element);
    }
};