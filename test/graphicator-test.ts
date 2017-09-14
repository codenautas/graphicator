let expect = require('expect.js');

import { Graphicator } from "../src/graphicator";

describe('graphicator', function () {
    let graphicator: Graphicator;
    beforeEach(function () {
        // graphicator = new LineChartGraphicator();
    });
    describe('validateOneElementArray', function () {
        let twoElemArray: any[];
        let oneElemArray: any[];
        let emptyArray: any[];
        let arrayName: string;
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