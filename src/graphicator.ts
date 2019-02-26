/*
* Logic for transformation from Tabulator toMatrix function data to c3js charts required data
*/

// import * as fs from "file-saver";
// import * as cb from "canvas-toBlob";

import { GeneralConfig } from './graph-configuration';

import { LineChart } from './linechart';
import { BarChart } from './barchart';
import { PieChart } from './piechart';
import { BaseChart } from './basechart';
import { PyramidChart } from './pyramidchart';
import { Matrix } from '.';
import d3 = require("d3");

export abstract class Graphicator {
    static render(config: GeneralConfig) {
        var chart: BaseChart;
        switch (config.tipo) {
            case 'barra':
                chart = new BarChart(config);
                break;
            case 'piramide':
                chart = new PyramidChart(config);
                break;
            case 'torta':
                chart = new PieChart(config);
                break;
            default:
                chart = new LineChart(config);
                break;
        }
        chart.renderTabulation();
        return chart;
    }

    static svgString2Image(svgString:string, width:number, height:number, format:string, callback:(dataBlob:string|Blob)=>void) {
        var format = format ? format : 'png';

        var imgsrc = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgString))); // Convert SVG string to data URL

        var canvas = <HTMLCanvasElement>document.getElementById("canvas");
        var context = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        var image = new Image();
        image.onload = function () {
            context.clearRect(0, 0, width, height);
            context.drawImage(image, 0, 0, width, height);

            canvas.toBlob(function (blob) {
                // var filesize = Math.round(blob.size / 1024) + ' KB';
                if (callback) callback(blob);
            });

        };

        image.src = imgsrc;
    }

    static downloadCharts() {
        var svgNode = <Element>d3.select("svg").node();
        var svgString = Graphicator.getSVGString(svgNode);
        // var svgString = svgNode.outerHTML;
        Graphicator.svgString2Image(svgString, parseInt(svgNode.getAttribute('width')), parseInt(svgNode.getAttribute('height')), 'png', save); // passes Blob and filesize String to the callback

        function save(dataBlob:string|Blob) {
            saveAs(dataBlob, 'chart.png'); // FileSaver.js function
        }
    }

    static getSVGString(svgNode:Element) {
        svgNode.setAttribute('xlink', 'http://www.w3.org/1999/xlink');

        // este hack le pone el fill en none
        d3.select('.chartElement svg').style('background-color', "white");

        let texts = d3.select('.chartElement svg text')
        texts.style('font-weight','bolder');
        texts.style('font-size','17px');

        let chartPaths = d3.select('.chartElement svg .c3-chart path')
        chartPaths.style('fill', "none");
        chartPaths.style("stroke-width", "3px");

        // let axisPaths = d3.select('.chartElement svg .c3-axis path')
        // let lines = d3.select('.chartElement svg line')
        let linesAndAxisPaths = d3.select('.chartElement svg .c3-axis path, .chartElement svg line');
        
        linesAndAxisPaths.style('fill', 'none');
        linesAndAxisPaths.style('stroke', 'black');
        linesAndAxisPaths.style('stroke-width', '3px');

        // //fix no tick
        // d3.select('#chart').selectAll(".tick line").attr("stroke", "black");

        var serializer = new XMLSerializer();
        var svgString = serializer.serializeToString(svgNode);
        svgString = svgString.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink='); // Fix root xlink without namespace
        svgString = svgString.replace(/NS\d+:href/g, 'xlink:href'); // Safari NS namespace fix

        return svgString;
    }

    // TODO: Esto no debería estar en tabulator?
    static calcularMinMax(matrix: Matrix): any {
        let matrixCellValues: number[] = [].concat(
            ...matrix.lines.map(
                line => line.cells.map(c => c.valor).filter(v => !isNaN(v))
            )
        );
        return {
            min: Math.min(...matrixCellValues, Number.MAX_VALUE),
            max: Math.max(...matrixCellValues, -Number.MAX_VALUE)
        };
    }
};