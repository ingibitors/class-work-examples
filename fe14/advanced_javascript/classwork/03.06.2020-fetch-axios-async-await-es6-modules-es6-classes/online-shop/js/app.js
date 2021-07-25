const token = localStorage.getItem('token');
const products = [];
const req = axios.create({
    baseURL: 'http://shop.danit.com.ua',
    headers: {
        Authorization: `Bearer ${token}`
    }
});

const loginForm = document.getElementById('login-form');
if(loginForm) {
    loginForm.addEventListener('submit', loginUser);
}


async function loginUser(event){
    event.preventDefault();
    const body = {
        email: this.querySelector('[name="user-email"]').value,
        password: this.querySelector('[name="user-password"]').value
    }

    const {data} = await axios.post('http://shop.danit.com.ua/login', body);

    if (data.status === 'Success') {
        localStorage.setItem('token', data.token);
    } else {
        this.insertAdjacentHTML('beforeEnd', `<p>${data.message}</p>`)  
    }

    const request = axios.post('http://shop.danit.com.ua/login', body);

    request.then(({data}) => {
        if (data.status === 'Success') {
            localStorage.setItem('token', data.token);
        } else {
            this.insertAdjacentHTML('beforeEnd', `<p>${data.message}</p>`)
    
        }
    });

}


const productSelection = document.getElementById('productCatecory');
productSelection.addEventListener('change', showAdditionalFields);

const additionalFieldTemplate = {
    notebook: `<div class="form-group">
    <label>Выберите диагональ</label>
    <select class="form-control" name="display">
        <option value="15.6">15,6</option>
        <option value="14.0">14,0</option>
        <option value="13.3">13,3</option>
    </select>
</div>    
<div class="form-group">
    <label>Укажите процессор</label>
    <input type="text" name="processor" class="form-control">
</div>  `, 
    phone: ` <div class="form-group">
    <label>Выберите бренд</label>
    <select class="form-control" name="brand">
        <option value="Apple">Apple</option>
        <option value="Xiomi">Xiomi</option>
        <option value="Samsung">Samsung</option>
    </select>
</div>    
<div class="form-group">
    <label>Укажите размер встроенной памяти</label>
    <input type="text" name="memory" class="form-control">
</div>`
}

function showAdditionalFields(event){
    this.children[0].setAttribute('disabled', 'true');
    const {target} = this.dataset;
    this.closest('form').querySelector(target).innerHTML = additionalFieldTemplate[this.value];
}

const addProductForm = document.getElementById('add-product-form');
addProductForm.addEventListener('submit', addProduct);

function addProduct(e) {
    e.preventDefault();
    const data = serializeJSON(this);
    const {name, article, price, category, ...content} = data;
    const body = {name, article, price, category, content};
    const request = req.post('/products', body);
    request.then(({data}) => {
        if(data.id){
            const product = new Notebook(data);
            document.getElementById('productBoard').append(product.render());
            products.push();
        }
    });
}

function serializeJSON (form) {
    const body = {}
    form.querySelectorAll('input,  select, textarea').forEach(element => {
        const name = element.getAttribute('name');
        if(name) {
            body[name] = element.value;
        }
    });
    return body;
}


const templates = {
    getBasicCard({name, article, price, category}) {
        return `
            <div class="card pt-4">
            <div class="card-img-overlay d-flex justify-content-between">
                <a href="#" class="card-link text-dark edit-card">
                    <i class="fas fa-edit"></i>
                </a>                       
                <a href="#" class="card-link text-danger delete-card">
                    <i class="fas fa-trash"></i>
                </a>
            </div>
            <div class="card-body">
                <h4 class="card-title">${name}</h4>
                <h6 class="card-subtitle mb-2 text-muted">Категория: ${category}</h6>
                <h6 class="card-subtitle mb-2 text-muted">Артикул: ${article}</h6>
                <div class="additional-info"></div>

                <div class="buy d-flex justify-content-between align-items-center">
                    <div class="price text-success">
                        <h5 class="mt-4">$125</h5>
                    </div>
                    <a href="#" class="btn btn-success mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                </div>
            </div>
        </div>
            `
    },
    getNotebookTemplate({display, processor}) {
        return `<p class="card-text"> Диагональ: 15.6. </p>
        <p class="card-text"> Процессор: Core i5. </p>`;
    }
}



class Product{
    constructor({name, article, price, category,id}){
        this.name = name;
        this.article = article;
        this.price = price;
        this.category = category
        this.id = id;
        this.elem = null;
    }
    render(){
        this.elem = document.createElement('div');
        const {elem} = this;
        elem.className= 'col-12 col-sm-8 col-md-6 col-lg-4';
        elem.innerHTML = templates.getBasicCard(this);
        const deleteBtn = elem.querySelector('.delete-card');
        // const editProductBtn = elem.q
        deleteBtn.addEventListener('click', this.deleteProduct.bind(this))
    }
    async deleteProduct(e){
        e.preventDefault();
        const {data} = await req.delete(`products/${this.id}`);
        if(data.status == 'Success'){
            this.elem.remove()
        }
    }
    // async editProduct(){

    // }
    
}

class Notebook extends Product{
    constructor({display, processor, ...args}){
        super(args);
        this.display = data.display;
        this.processor = data.processor;
    }
    render(){
        super.render();
        const additionalInfo = this.elem.querySelector(".additional-info");
        additionalInfo.innerHTML = templates.getNotebookTemplate(this);
        return this.elem;
    }    
}

class Modal {
    constructor(){

    }
    render(){
        this.elem = document.createElement("div");
    }
}

class LoginModal extends Modal() {
    constructor(){
        super();
    }
    render(){
        super.render();
        this.
    }
}

function createProduct(data){
    const newProduct = new Product(data);
    return newProduct
}