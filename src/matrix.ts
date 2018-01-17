interface Cell {
    valor: number;
}

interface Line {
    cells: Cell[];
}

interface Value {
    label: string;
}

interface Var {
    values: Value[]
}
interface Column {
    titles: string[];
}
interface Matrix {
    lines: Line[];
    lineVariables: any[];
    dataVariables: any[];
    vars: Var[];
    columns: Column[];
}