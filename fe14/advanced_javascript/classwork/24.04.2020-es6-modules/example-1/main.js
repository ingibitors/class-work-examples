import {List} from "./scripts/list.js";
// console.log(List)
/*
console.log("List start");
class List {
    constructor(listClass, listItemClass, listContent) {
        this.listClass = listClass;
        this.listItemClass = listItemClass;
        this.listContent = [...listContent];
    }

    render() {
        const list = document.createElement("ul");
        list.className = this.listClass;
        const listItems = this.listContent.map(item => `<li class="${this.listItemClass}">${item}</li>`);
        list.insertAdjacentHTML("afterbegin", listItems.join(""));
        return list;
    }
}
function removeListByIndex(index) {

 }
const obj = {
    List, removeListByIndex
}
delete List;
delete removeListByIndex;
const {List} = obj;
*/
console.log(List);

import {removeListByIndex} from "./scripts/list.js";
// const {List: newList} = obj;
console.log(removeListByIndex);
