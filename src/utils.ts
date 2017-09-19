// TODO: move to "utils library"
export class Utils {
    static validateOneElementArray(arrayVar: any[], varName: string) {
        if (arrayVar.length != 1) {
            throw new Error(varName + ' must have only one element');
        }
        //pass validation
    }

    static getUniqueArrayElement(array: any[], varName: string) {
        this.validateOneElementArray(array, varName);
        return array[0];
    }
}