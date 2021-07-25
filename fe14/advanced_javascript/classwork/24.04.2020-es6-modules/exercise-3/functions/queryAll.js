export function queryAll(selector) {
    const elem = [...document.querySelectorAll(selector)];
    return elem;
}