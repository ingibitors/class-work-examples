### План урока

1. Что такое клиент-серверная архитектура и как она работает.
2. Что такое AJAX и зачем он нужен.
3. XMLHTTPRequest как вариант реализации AJAX.
4. JSON как способ упрощения передачи и обработки данных.

#### Клиент-серверная архитектура

Итак, как же к нам загружается информация с сайта? Очень просто - когда вы вбиваете адрес сайта в браузере и нажимаете Enter, вы отправляете запрос на сервер (бекенд) - и получаете в качестве ответа страницу, которую видите на экране.

Вбить адрес сайта в браузере === отправить запрос сервер.

Браузер, получив ваш запрос, обработает его: создает нужную страницу, подставляет в нее нужные значения - и присылает вам ответ.
<strong>То есть:</strong> то, что вы видите в браузере - это то, что вам прислал сервер.

<strong>Вывод:</strong> чтобы получить какую-то информацию или страницу с сервера, где собственно и хранится сайт, нужно в любом случае отправить ему запрос. Дальше мы будем разбираться как правильно эти запросы отправлять, чтобы получить нужный нам результат.

#### AJAX

Запросы бывают двух видов: 
1. Передающие всю HTML-страницу целиком.
2. Передающие только данные. 

Часто нам нужно не перезагружать всю страницу, а нужно загрузить дополнительную информацию/поменять информацию на странице. Примеры:
1. "Живой" поиск в шапке сайта https://rozetka.com.ua/
2. Подгрузка дополительных товаров - https://rozetka.com.ua/notebooks/c80004/filter/

То есть в ответ от сервера мы хотим получить не новую страницу, а какую-то информацию без перезагрузки страницы, и вывести ее на экран. Для таких целей и был придуман AJAX - новый подход/идея, суть которой - в «фоновом» обмене данными браузера с веб-сервером. В результате, при обновлении данных веб-страница не перезагружается полностью, и веб-приложения становятся быстрее и удобнее.

То есть, <strong>AJAX-запрос</strong> - это просьба серверу прилать не готовую HTML-страницу, а какие-то данные. 

<strong>Важно:</strong> AJAX - это идея, подход, философия, а способов/вариантов ее реализации много. Мы их будет рассматривать на этом и последующих уроках.

#### Правильный подход к написанию AJAX-запросов без привязки к синтаксису:

Когда вам дают задачу написать AJAX-запрос, вам по-хорошему должны дать документацию, в которой описана необходимая для этого информация. Пример документации:
```
Отправьте GET-запрос по адресу http://danit.com.ua/user-profile. Пример ответа:

Строка вида: 'name: fiona gallagher; address: chicago, united states of america; image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzOpl3-kqfNbPcA_u_qEZcSuvu5Je4Ce_FkTMMjxhB-J1wWin-Q';

```

Как правило, вы получаете комплексную задачу: "Написать AJAX-запрос и обработать полученные данные (например, вывести их на экран)". И первым делом нужно убедится что адрес, на который нужно отправить запрос, работает и работает правильно. Как это сделать?

1. Узнайте из задачи, на какой адрес вы отправляете запрос.
2. Узнайте из задачи, что и в каком формате вы ожидаете получить в ответ (строку, строку в формате JSON).
3. Протестируйте запрос - если это GET-запрос, то можно в браузере, если POST/PUT/DELETE - можно в специальной программе Postman.
4. Если запрос возвращает 400+ ошибку, сообщите об этом тому, кто поставил задание.
5. Если запрос возвращает ответ, но не в том формате, в котором он описан в документации - сообщите об этом тому, кто поставил задание.

<strong>Почему нужно сначала тестировать запрос, а уж потом писать его обработку:</strong> AJAX-запросы - это не только спооб получить информацию, но и добавить/обновить/удалить ее из базы данных. За ними стоит серезный бекенд, и чем раньше вы сообщите о том, что они неработоспособны, тем раньше их исправят. К сожалению, Такое бывает.

#### XMLHTTPRequest

Самым первым вариантом реализации AJAX-запросов в браузере стал XMLHttpRequest – встроенный в браузер объект, который даёт возможность делать HTTP-запросы к серверу без перезагрузки страницы. Для того, чтобы выполнить AJAX-запрос с его помошью, нужно сделать такие вещи:
1. Создать объект XMLHttpRequest.
2. Вызвать у него метод `open`, в который передать настройки запроса (обязательный параметр - адрес, на который отправляется запрос).
3. Отослать запрос.
4. Обработать полученный ответ от сервера:
- если код ответа 200 - обработать успешный ответ;
- если не 200 - обработать ошибку (например, вывести ее на экран);
5. Если ответ от сервера не был получен - обработать эту ошибку.

Синтаксис AJAX-запроса с помощью XMLHTTPRequest:
1. Создаём новый XMLHttpRequest-объект
```
const xhr = new XMLHttpRequest();
```
2. Вызвать у него метод `open`, в который передать настройки запроса (обязательный параметр - адрес, на который отправляется запрос).
```
xhr.open('GET', "http://danit.com.ua/user-profile");
```
3. Отослать запрос.
```
xhr.send();
```
4. Обработать полученный ответ от сервера:
```
xhr.onload = function() {
    if (xhr.status != 200) { // если не 200 - обработать ошибку (например, вывести ее на экран);
        console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
    } else { // если код ответа 200 - обработать успешный ответ;
        console.log(xhr.response);                   
    }
};
```
5. Если ответ от сервера не был получен - обработать эту ошибку.
```
xhr.onerror = function() {
    alert("Запрос не удался");
};
```

Сделайте Задание 1.

Сделайте задание 2. 


#### JSON

JSON - это особый способ записи строки/массива, благодаря которому строку/массив можно превратить обратно в объект. Реализуется в JavaScript это с помощью встроенного объекта JSON. Синтаксис:

Превращаем объект/массив в строку в формате JSON:
```
const arr = ["Ольга Равноапостольная", "Всеслав Полоцкий", "Владимир Ярославович"];
const strFromArr = JSON.stringify(arr);

const obj = ["Ольга Равноапостольная", "Всеслав Полоцкий", "Владимир Ярославович"];
const strFromArr = JSON.stringify(arr);
```