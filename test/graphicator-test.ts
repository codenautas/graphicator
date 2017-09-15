let expect = require('expect.js');
import { Utils } from "../src/utils";

describe('graphicator', function () {
    // let graphicator: Graphicator;
    beforeEach(function () {
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
                Utils.validateOneElementArray(emptyArray, arrayName);
            }).throwError(new RegExp(arrayName + ' must have only one element'));
            expect(function () {
                Utils.validateOneElementArray(twoElemArray, arrayName);
            }).throwError(new RegExp(arrayName + ' must have only one element'));
            expect(function () {
                Utils.validateOneElementArray(oneElemArray, arrayName);
            }).not.to.throwError();
        });
    });
});