var express = require('express');
var app = express();

var Path = require('path');

var serveContent = require('serve-content');

var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});

function site_up(req, res) {

    res.send(`
        <link rel="shortcut icon" href="tabulator-ico.png" type="image/png" />
        <link rel="stylesheet" type="text/css" href="example.css"> 
        <h1>tabulator demo</h1>
        <div id="mortalidadChart"></div>
        <div id="mortalidadChart2"></div>
        <div id="poblacionChart"></div>
        <div id="adopcionesChart"></div>
        <script src='like-ar.js'></script>
        <script src='js-to-html.js'></script>
        <script src='require-bro.js'></script>
        <script src='tabulator.js'></script>
       
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.16/c3.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.10/c3.js"></script>

        <script src='../graphicator.js'></script>
        <script src='lines-chart-example.js'></script> 
        <script src='lines-chart-example2.js'></script> 
        <script src='pie-chart-example.js'></script> 
        <script src='stacked-bar-chart-example.js'></script>

    `);
}

[
    'node_modules/like-ar',
    'node_modules/js-to-html',
    'node_modules/require-bro/lib',
    'node_modules/tabulator',
    'example',
    ''
].forEach(function (jsPath) {
    console.log('colgando ', './' + jsPath, Path.resolve('./' + jsPath));
    app.use('/', serveContent('./' + jsPath, { allowedExts: ['js','css'] }));
});

app.use('/example', serveContent('./', { allowedExts: ['png', 'jpg', 'jpeg', 'css'] }));

app.get('/index.html', site_up);
app.get('/', site_up);

// app.use(tabulator());

