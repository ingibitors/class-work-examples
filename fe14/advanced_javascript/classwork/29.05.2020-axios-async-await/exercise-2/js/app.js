/*
Напишите код, который работает так:
Пользователь вводит в форму свой email и пароль. После чего по нажатию кнопки - авторзируется. 
Для автоизации нужно отправить AJAX-запрос методом POST по адресу: "http://books.danit.com.ua/const request = req.post('/register-new', body);", передав в теле запроса объект вида: 
{
    "email": "login email",
    "password": "login password"
}

В случае успешной авторизации вы получите в качестве ответа объект вида: 
{
    "status": "Success",
    "token": "autorization token"
}
Полученый token нужно сохранить в localStorage.

В случае неуспешной авторизации вы получите в качестве ответа объект вида: 
{
    "status": "Error",
    "message": "Login or password are incorrect"
}

*/
const messages = {
    login: {
        "Success": "Вы успешно авторизированы",
        "Error": "Неверный пароль"
    }
}
const req = axios.create({
    baseURL: 'http://books.danit.com.ua'
});
const form = document.getElementById('login-form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const email = this.querySelector('[name="user-email"]').value;
    const password = this.querySelector('[name="user-password"]').value;
    body = {
        email,
        password
    }
    const request = req.post('/login', body);
    request.then(({data}) => {
        if(data.status === "Success"){
            localStorage.setItem("token", data.token)
        }
        this.insertAdjacentHTML('afterend', `<p>${messages.login[data.status]}</p>`);
    }).catch(error => console.log(error))
})