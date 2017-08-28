"use strict";

var Graphicator = require('graphicator');
var graphicator = new Graphicator();

var datum = {
    vars: [
        { name: 'tipoDeHacinamiento', place: 'left' },
        { name: 'año', place: 'top' },
        { name: 'valor', place: 'data' },
    ],
    list: [
        { "tipoDeHacinamiento": "hacinadas"   , año: 2012, valor: 19.3 },
        { "tipoDeHacinamiento": "no hacinadas", año: 2012, valor: 78.8 },
        { "tipoDeHacinamiento": "hacinadas"   , año: 2013, valor: 16.4 },
        { "tipoDeHacinamiento": "no hacinadas", año: 2013, valor: 79.0 },
        { "tipoDeHacinamiento": "hacinadas"   , año: 2014, valor: 16.0 },
        { "tipoDeHacinamiento": "no hacinadas", año: 2014, valor: 81.3 },
        { "tipoDeHacinamiento": "hacinadas"   , año: 2015, valor: 12.3 },
        { "tipoDeHacinamiento": "no hacinadas", año: 2015, valor: 84.3 },
    ]
}

graphicator.renderTabulation(datum, 'mortalidadChart2', 'line');
