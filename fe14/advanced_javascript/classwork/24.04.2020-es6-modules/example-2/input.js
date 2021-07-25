import {inputTypes} from './inputTypes.js';

class Input {
    constructor(type, classList, id){
       if (inputTypes.includes(type)){
        this.type = type;
        this.classList = classList;
        this.id = id;
       }
       else throw new Error('Invalid type')

    }
    render(){
        const element = document.createElement('input');
        element.id = this.id;
        element.type = this.inputType;
        element.className = this.classList;
        return element 
    }
}

export default Input;

 export {inputTypes};