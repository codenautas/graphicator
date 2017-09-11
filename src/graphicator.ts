/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/

var Tabulator = require('tabulator'); // since Tabulator is a webpack wrapped umd 
import * as c3 from 'c3';
import * as d3 from 'd3';

export enum chartType { LINE='line' , BAR='bar', PIE='pie' };

export class Graphicator {
    
    tabulator: any;

    constructor() {
        this.tabulator = new Tabulator();
        this.tabulator.defaultShowAttribute = 'valor';
    }

    renderTabulation(datum: object, elementId: string, type: chartType) {
        var matrix = this.tabulator.toMatrix(datum);
        this.renderTable(elementId, matrix);
        //chart rendering
        var chartParameters = this.buildChartParamsFunctions[type](elementId, matrix);
        this.renderChart(elementId, chartParameters);
    }

    validateOneElementArray(arrayVar: any[], varName: string) {
        if (arrayVar.constructor !== Array || arrayVar.length != 1) {
            throw new Error(varName + ' must be an array and have only one element');
        }
        //pass validation
    }

    getUniqueArrayElement(array: any[], varName: string) {
        this.validateOneElementArray(array, varName);
        return array[0];
    }

    // TODO: use strategy or interface inheritance
    buildChartParamsFunctions: any= {
        pie: function (elementId: string, matrix: any): object {
            //TODO: change 'that' variable and use this
            var that = new Graphicator();
            //TODO: change to typescript and refactor to es6 and validate browser support (Set, arrow functions)
            var dataVarName = that.getUniqueArrayElement(matrix.dataVariables, 'matrix.dataVariables');
            var columns = matrix.columns.map((x: any, index: number) => [that.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles'), that.getUniqueArrayElement(matrix.lines, 'matrix.lines').cells[index][dataVarName]]);
            var chartParameters = {
                data: {
                    columns: columns,
                    type: 'pie'
                },
                pie: {
                    label: {
                        format: function (value: any, ratio: any, id: any) {
                            return d3.format('')(value);
                        }
                    }
                }
            };
            return chartParameters;
        },
        bar: function (elementId: string, matrix: any): object {
            //TODO: change 'that' variable and use this
            var that = new Graphicator();
            return that.buildProgressChartParams(elementId, matrix, 'bar');
        },
        line: function (elementId: string, matrix: any): object {
            //TODO: change 'that' variable and use this
            var that = new Graphicator();
            return that.buildProgressChartParams(elementId, matrix, 'line');
        }
    }

    /*
    * Common construction for all "progressive" charts (line, bar, stacked bars, etc),  (for example pie chart isn't a "progressive" chart)
    */
    buildProgressChartParams(elementId: string, matrix: any, type: string) {
        //TODO: change to typescript and refactor to es6 and validate browser support (Set, arrow functions)
        var xTitles = ['x'].concat(matrix.columns.map((x: any) => this.getUniqueArrayElement(x.titles, 'matrix.columns[*].titles')));
        var rowsForChart = matrix.lines.map((x: any) => [this.getUniqueArrayElement(x.titles, 'matrix.lines[*].titles')].concat(x.cells.map((c: any)=> (c && c.valor) || '')));
        //TODO: separate logic for construction of group option 
        var groups = (type == 'bar') ? [rowsForChart.map((x: any[]) => x[0] /*first element is the name */)] : false;
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

    renderChart(elementId: string, chartParameters: any) {
        var chart = c3.generate({ bindto: '#' + elementId, ...chartParameters });
    }

    renderTable(elementId: string, matrix: object) {
        var element = document.getElementById(elementId);
        element.innerHTML = "";
        var table = this.tabulator.toHtmlTable(matrix);
        element.parentNode.insertBefore(table.create(), element);
    }
};