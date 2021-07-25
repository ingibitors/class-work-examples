
import {currentInfo} from "../functions";

class Book {
    constructor({name, author, id, isbn}){
        this._name = name;
        this._author = author;
        this._id = id;
        this._isbn = isbn;
        this._elem = null;
        this.form = null;
    }
    createRow(){
        this.elem.innerHTML = `
            <td>${this._name}</td>
            <td>${this._author}</td>
            <td>${this._isbn}</td>
            <td><a href="#" class="btn btn-info btn-sm btn-edit"><i class="fas fa-edit"></i></a></td>
            <td><a href="#" class="btn btn-danger btn-sm btn-delete">X</a></td>`;
        const btnEdit = this.elem.querySelector(".btn-edit");
        btnEdit.addEventListener("click", this.editBook.bind(this));
        const btnDel = this.elem.querySelector(".btn-edit");
        btnDel.addEventListener("click", this.deleteBook.bind(this));
    }
    render(){
        this.elem = document.createElement("tr");
        this.createRow();
        return this.elem;
    }

    editBook (e){
        e.preventDefault();
        this.elem.innerHTML = `
                        <td colspan="5">
                            <form action="" class="form-inline" id="update-book-form">
                                <input type="text" name="book-name" class="form-control" value="Малазанская книга Падших">
                                <input type="text" name="book-author" class="form-control" value="Стивен Эриксон">
                                <input type="text" name="book-isbn" class="form-control" value="978-3-16-148410-0">
                                <input type="submit" value="Update" class="btn btn-primary">
                        </td>`;
        this.form = this.elem.querySelector("#update-book-form");
        this.form.addEventListener("submit", this.updateBook.bind(updateBook));
    }

    async updateBook (e){
        e.preventDefault();
        const body = currentInfo(this.form);

        const {data} = await request.put(`http://books.danit.com.ua/books/${this.id}`,body);
        this._name = data.name;
        this._author = data.author;
        this._id = data.id;
        this._isbn = data.isbn;
        if(data.id){
           this.createRow();
        }
    }

    deleteBook() {

    }

    createBook (data) {
        return `<tr data-id=${data.id}>
        <td>${data.name}</td>
        <td>${data.author}</td>
        <td>${data.isbn}</td>
        <td><a href="#" class="btn btn-info btn-sm btn-edit"><i class="fas fa-edit"></i></a></td>
        <td><a href="#" class="btn btn-danger btn-sm btn-delete">X</a></td>
        </tr>`;
    }
}
export default Book;
