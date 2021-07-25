/*
Напишите код, который работает так:
1. Пользователь заполняет форму и нажав Submit - добавляет книгу в базу данных, отправив AJAX-запрос методом POST по адресу:
"http://books.danit.com.ua/books" объект вида:
{
    "name": "Book name",
    "author": "Books author",
    "isbn": "Book isbn"
}
Запрос требует авторизации с помощью заголовка "Authorization", со значением
"Bearer token". token возьмите из localstorage, сохраненный там из предыдущего задания.
Если добавление прошло успешно, вы получите в качестве ответа объект вида:
{
    "id": 12,
    "name": "Book name",
    "author": "Books author",
    "isbn": "Book isbn"
}
Где id - уникальный номер книги в базе данных, который можно использовать
для ее редактирования и удаления.

Если token авторизации неправильный, вы получите ответа вида:
{
    "status": "Error",
    "message": "You are not authorized"
}
*/
import {updateBook ,createBook, currentInfo, handleClick ,editBook ,getBookList ,deleterBook} from "./functions";
import {book} from "./classes/book.js";
const tBody = document.getElementById("book-list");
const token = localStorage.getItem("token")
const request = axios.create({
    headers:{
        Authorization:`Bearer ${token}`
    }
});

getBookList ();

tBody.addEventListener('click', handleClick);


const formAddBook = document.getElementById("add-book-form");
formAddBook.addEventListener("submit",function(e){
    e.preventDefault();
    const body = currentInfo(this);

    const req = request.post("http://books.danit.com.ua/books", body)
    req.then(({data})=>{
        if(data.id){
            const newBook = new Book(data);
             tBody.insertAdjacentElement("beforeend", newBook.render());
        }
        else {
            this.insertAdjacentHTML("afterend", `<p>${data.message}</p>`);
        }
    }).catch((error)=>{
        console.log(error)
    })
})




/*
2. Если пользователь наживает крестик в таблице - база данных удаляется.
Для этого нужно отправить DELETE запрос на адрес:
"books.danit.com.ua/books/:id" с указанием id удаляемой книги.
Запрос требует авторизации с помощью заголовка "Authorization",
со значением "Bearer token". token возьмите из localstorage, сохраненный
там из предыдущего задания.

Если запрос удался, то вы получаете ответ вида:
{
    "status": "Success"
}

Если token авторизации неправильный, вы получите ответа вида:
{
    "status": "Error",
    "message": "You are not authorized"
}
Если все прошло успешно, в качестве ответа вы получите
*/

// const delBtns = document.querySelector('.btn-danger.delete');











/*
3. Обновление. Для обновления пользователь должен нажать на иконку с классом btn-info, и вместо текста в таблице появятся поля ввода. По нажатию Unpdate отпраляется AJAX-запрос методом PUT по адресу: "books.danit.com.ua/books/:id". А теле запроса вы передаете объект вида:
{
    "name": "Book name",
    "author": "Books author",
    "isbn": "Book isbn"
}
Если запрос прошел удачно,в качестве ответа вы получите объект вида:
{
    "id: 12,
    "name": "Book name new",
    "author": "Books author new ",
    "isbn": "Book isbn new"
}
С обновлеными данными

*/

