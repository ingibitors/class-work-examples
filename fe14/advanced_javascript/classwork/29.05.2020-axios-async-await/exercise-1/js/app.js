/*
Напишите код, который работает так:
Пользователь вводит в форму свой email, и 2 раза одинаковый пароль. После чего по нажатию кнопки - регистрируется. 
Для регистрации нужно отправить AJAX-запрос методом POST по адресу: "http://books.danit.com.ua/register-new", передав в теле запроса объект вида: 
{
    "email": "register email",
    "password": "register password"
}

В случае успешной авторизации вы получите в качестве ответа объект вида: 
{
    "status": "Success",
    "message": "Your are register"
}

В случае неуспешной авторизации вы получите в качестве ответа объект вида: 
{
    "status": "Error",
    "message": "Somethins was wrong. Please try latter"
}

*/
const req = axios.create({
    baseURL: 'http://books.danit.com.ua'
})
const registerForm = document.getElementById("register-form");
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('[name="user-email"]').value;
    const password = this.querySelector('[name="user-password"]').value;
    const userRepeatPassword = this.querySelector('[name="user-password-repeat"]').value;
    if(password === userRepeatPassword) {
        const body = {
            email,
            password
        }
        
        const request = req.post('/register-new', body);
        request.then(({data}) => {
            if(data.status === 'Success') {
                this.insertAdjacentHTML('afterend', '<p>Вы успешно зарегистрированы</p>');
            } else {
                this.insertAdjacentHTML('afterend', '<p>Пользователь с такой почтой уже имеется</p>');
            }
        });

    } else {
        this.insertAdjacentHTML('afterend', '<p>Пароли не совпадают</p>');
    }
})