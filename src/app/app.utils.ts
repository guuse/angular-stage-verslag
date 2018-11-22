export class ProjectUtils {
    // Select a child object of an object or return a defined value instead.
    static childObjectBySelector(item: Object, selector: string, returnIfFalse: any): any {
        const keys = selector.split('/');
        let pointerObject: any = item;

        for (let i = 0; i <= keys.length - 1; i++) {
            if (typeof pointerObject === 'object' && pointerObject.hasOwnProperty(keys[i])) {
                pointerObject = pointerObject[keys[i]];
            } else {
                return returnIfFalse;
            }
        }
        return pointerObject;
    }
}
