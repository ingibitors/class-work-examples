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

  function isList(){

 }

/*
export {List, removeListByIndex, isList}
*/

