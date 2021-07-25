export function getByClass(className) {
    const elem = [...document.getElementsByClassName(className)];
    return elem;
}