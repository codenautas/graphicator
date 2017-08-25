"use strict";

var datum = {
    vars: [
        { name: 'comuna', place: 'left' },
        { name: 'rangoEdad', place: 'top' },
        { name: 'valor', place: 'data' },
    ],
    list: [
        { comuna: 'Total', rangoEdad: '0-4', valor: 165.638 },
        { comuna: 'Total', rangoEdad: '5-9', valor: 156.372 },
        { comuna: 'Total', rangoEdad: '10-14', valor: 150.501 },
        { comuna: 'Total', rangoEdad: '15-17', valor: 92.521 },
    ]
}

renderChart(datum, 'poblacionChart', 'pie');