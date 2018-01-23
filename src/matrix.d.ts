export interface Cell {
    valor: number;
}

export interface Line {
    cells: Cell[];
    titles: string[];
}

export interface Value {
    label: string;
}

export interface Var {
    values: Value[]
    label: string;
}
export interface Column {
    titles: string[];
}

export interface Matrix {
    lines: Line[];
    lineVariables: any[];
    columnVariables: any[];
    dataVariables: any[];
    vars: Var[];
    columns: Column[];
}