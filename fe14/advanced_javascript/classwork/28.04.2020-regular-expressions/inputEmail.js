import Input from "./input.js";
import {email} from "./validationRules.js";

export default class InputEmail extends Input {
    constructor(...args){
        super(...args);
        this.type = "email";
        this.rule = email.reg;
        this.errorMsg = email.msg
    }
    
} 