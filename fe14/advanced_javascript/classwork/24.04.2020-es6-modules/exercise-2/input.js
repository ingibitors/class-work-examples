import {inputTypes} from "./inputTypes.js";

export class Input {

    constructor({type, classes, id}) {
        if(!inputTypes.includes(type)){
            throw new Error("неверный тип поля")
        }else{
        this.type = type;
        this.classes = classes;
        this.id = id;
        }
    }
    render() {
        const input = document.createElement('input');
        input.type = this.type;
        input.className = this.classes;
        input.id = this.id;
        return input;
    }
}