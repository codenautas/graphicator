export as namespace tabulatorLib;

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = Tabulator;

/*~ Write your module's methods and properties in this class */
declare class Tabulator {
    constructor();
    // myMethod(opts: Tabulator.chartType): number;
    defaultShowAttribute: string;
    toMatrix(datum: object): object;
    toHtmlTable(matrix: object): any;
}

/*~ If you want to expose types from your module as well, you can
 *~ place them in this block.
 */
// declare namespace Tabulator {
//     export jsToHtml:void { }
// }