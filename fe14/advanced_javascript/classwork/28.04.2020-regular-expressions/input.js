export default class Input {
    constructor() {

    }
    render(){
        this.elem = document.createElement("input");
        this.elem.addEventListener("blur", this.handleBlur.bind(this));
    }
    handleBlur(){
        const {value} = this.elem;
    }
}