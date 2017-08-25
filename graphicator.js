/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/

"use strict";

var Tabulator = require('tabulator');
var tabulator = new Tabulator();
tabulator.defaultShowAttribute = 'valor';

var renderChart = function (datum, elementId, type) {
    var matrix = tabulator.toMatrix(datum);
    renderTable(elementId, matrix);
    var chartParameters = buildChartFunctions[type](elementId, matrix);
    buildChart(elementId, chartParameters);
}

var buildChartFunctions = {
    pie: function (elementId, matrix) {
        if(matrix.dataVariables.length!=1){
            throw new Error('matrix.dataVariables must have only one element');
        }
        //TODO: change to typescript and refactor to es6 and validate browser support (Set, arrow functions)
        var dataVarName = matrix.dataVariables[0];
        var columns = matrix.columns.map((x, index) => [x.titles[0], matrix.lines[0].cells[index][dataVarName]]);
        var chartParameters = {
            data: {
                columns: columns,
                type: 'pie'
            },
            pie: {
                label: {
                    format: function (value, ratio, id) {
                        return d3.format()(parseInt(value)) + ' - ' + d3.format('%')(ratio);
                    }
                }
            }
        };
        return chartParameters;
    },
    bar: function (elementId, matrix) {
        return buildProgressChart(elementId, matrix, 'bar');
    },
    line: function (elementId, matrix) {
        return buildProgressChart(elementId, matrix, 'line');
    }
}

/*
* Common construction for all "progressive" charts (line, bar, stacked bars, etc),  (pie chart isn't a "progressive" chart)
*/
var buildProgressChart = function (elementId, matrix, type) {
    //TODO: change to typescript and refactor to es6 and validate browser support (Set, arrow functions)
    var xTitles = ['x'].concat(matrix.columns.map(x => x.titles[0]));
    var lineVarName = matrix.lineVariables[0];
    var dataVarName = matrix.dataVariables[0];
    var lines = matrix.lines.map(x => {
        var firstElem = (type == 'line') ? lineVarName + ' ' : '';
        firstElem += x.titles[0];
        return [firstElem].concat(x.cells.map(c => c && c[dataVarName]));
    });
    var groups = (type == 'bar') ? [lines.map(x => x[0])] : false;
    var chartParameters = {
        data: {
            x: 'x',
            columns: [xTitles].concat(lines),
            type: type,
            groups: groups,
        }
    };
    return chartParameters;
}

var buildChart = function (elementId, chartParameters) {
    var chart = c3.generate(Object.assign({ bindto: '#' + elementId }, chartParameters));
}

var renderTable = function (elementId, matrix) {
    var element = document.getElementById(elementId);
    element.innerHTML = "";
    var table = tabulator.toHtmlTable(matrix);
    element.parentNode.insertBefore(table.create(), element);
}