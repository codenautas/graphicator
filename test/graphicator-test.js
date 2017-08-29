
var expect = require('expect.js');

// var Graphicator = require('../graphicator.js');
var Graphicator = require('../graphicator-typescript-impl.js');

describe('graphicator', function () {
    var graphicator;
    beforeEach(function(){
        graphicator=new Graphicator();
    });
    describe('validateOneElementArray', function () {
        var twoElemArray;
        var oneElemArray;
        var emptyArray;
        var arrayName;
        beforeEach(function () {
             emptyArray= [];
            twoElemArray=[3, 'asdf'];
            oneElemArray=[3];
            arrayName='arrayName';
        });
        it('shoud be an array', function () {
            expect(function(){
                graphicator.validateOneElementArray('asdfasd', arrayName);
            }).throwError(new RegExp(arrayName + ' must be an array and have only one element'));
            expect(function(){
                graphicator.validateOneElementArray(44, arrayName);
            }).throwError(new RegExp(arrayName + ' must be an array and have only one element'));
        });
        it('shoud have only one element', function () {
            expect(function(){
                graphicator.validateOneElementArray(emptyArray, arrayName);
            }).throwError(new RegExp(arrayName + ' must be an array and have only one element'));
            expect(function(){
                graphicator.validateOneElementArray(twoElemArray, arrayName);
            }).throwError(new RegExp(arrayName + ' must be an array and have only one element'));
            expect(function(){
                graphicator.validateOneElementArray(oneElemArray, arrayName);
            }).not.to.throwError();
        });
    });
});