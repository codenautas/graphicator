
var expect = require('expect.js');

import { Graphicator } from "../src/graphicator";

describe('graphicator', function () {
    var graphicator: Graphicator;
    beforeEach(function () {
        graphicator = new Graphicator();
    });
    describe('validateOneElementArray', function () {
        var twoElemArray: any[];
        var oneElemArray: any[];
        var emptyArray: any[];
        var arrayName: string;
        beforeEach(function () {
            emptyArray = [];
            twoElemArray = [3, 'asdf'];
            oneElemArray = [3];
            arrayName = 'arrayName';
        });
        it('shoud have only one element', function () {
            expect(function () {
                graphicator.validateOneElementArray(emptyArray, arrayName);
            }).throwError(new RegExp(arrayName + ' must be an array and have only one element'));
            expect(function () {
                graphicator.validateOneElementArray(twoElemArray, arrayName);
            }).throwError(new RegExp(arrayName + ' must be an array and have only one element'));
            expect(function () {
                graphicator.validateOneElementArray(oneElemArray, arrayName);
            }).not.to.throwError();
        });
    });
});