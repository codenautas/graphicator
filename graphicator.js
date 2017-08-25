/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/
"use strict";

var Tabulator = require('tabulator');
var tabulator = new Tabulator();
tabulator.defaultShowAttribute = 'valor';

var renderTabulation = function (datum, elementId, type) {
    var matrix = tabulator.toMatrix(datum);
    renderTable(elementId, matrix);
    //chart rendering
    var chartParameters = buildChartParamsFunctions[type](elementId, matrix);
    renderChart(elementId, chartParameters);
}

var validateOneElementArray = function (arrayVar, varName) {
    if (arrayVar.constructor === Array && arrayVar.length != 1) {
        throw new Error(varName + ' must be an array and have only one element');
    }
    //pass validation
}

var getUniqueArrayElement = function (array, varName) {
    validateOneElementArray(array, varName);
    return array[0];
}

var buildChartParamsFunctions = {
    pie: function (elementId, matrix) {
        //TODO: change to typescript and refactor to es6 and validate browser support (Set, arrow functions)
        var dataVarName = getUniqueArrayElement(matrix.dataVariables, 'matrix.dataVariables');
        var columns = matrix.columns.map((x, index) => [getUniqueArrayElement(x.titles, 'matrix.columns[*].titles'), getUniqueArrayElement(matrix.lines, 'matrix.lines').cells[index][dataVarName]]);
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
        return buildProgressChartParams(elementId, matrix, 'bar');
    },
    line: function (elementId, matrix) {
        return buildProgressChartParams(elementId, matrix, 'line');
    }
}

/*
* Common construction for all "progressive" charts (line, bar, stacked bars, etc),  (for example pie chart isn't a "progressive" chart)
*/
var buildProgressChartParams = function (elementId, matrix, type) {
    //TODO: change to typescript and refactor to es6 and validate browser support (Set, arrow functions)
    var xTitles = ['x'].concat(matrix.columns.map(x => getUniqueArrayElement(x.titles, 'matrix.columns[*].titles')));
    var lineVarName = getUniqueArrayElement(matrix.lineVariables, 'matrix.lineVariables');
    var dataVarName = getUniqueArrayElement(matrix.dataVariables, 'matrix.dataVariables');
    var rowsForChart = matrix.lines.map(x => {
        var firstElem = (type == 'line') ? lineVarName + ' ' : '';
        firstElem += getUniqueArrayElement(x.titles, 'matrix.lines[*].titles');
        return [firstElem].concat(x.cells.map(c => (c && c.valor) || ''));
    });
    var groups = (type == 'bar') ? [rowsForChart.map(x => x[0] /*first element is the name */)] : false;
    var chartParameters = {
        data: {
            x: 'x',
            columns: [xTitles].concat(rowsForChart),
            type: type,
            groups: groups,
        }
    };
    return chartParameters;
}

var renderChart = function (elementId, chartParameters) {
    var chart = c3.generate(Object.assign({ bindto: '#' + elementId }, chartParameters));
}

var renderTable = function (elementId, matrix) {
    var element = document.getElementById(elementId);
    element.innerHTML = "";
    var table = tabulator.toHtmlTable(matrix);
    element.parentNode.insertBefore(table.create(), element);
}