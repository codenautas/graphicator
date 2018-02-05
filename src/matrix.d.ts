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

// export interface Var {
//     values: Value[]
//     label: string;
// }
export interface Column {
    titles: string[];
}

export interface Matrix {
    lines: Line[];
    lineVariables: string[];
    columnVariables: string[];
    dataVariables: any[];
    vars: any;
    columns: Column[];
}