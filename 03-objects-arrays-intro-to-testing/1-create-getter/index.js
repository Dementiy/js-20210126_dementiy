/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const pathParts = path.split(".");
    return (obj) => {
        for (const key of pathParts) {
            obj = obj[key];
            if (obj === undefined) return;
        }
        return obj;
    }
}
