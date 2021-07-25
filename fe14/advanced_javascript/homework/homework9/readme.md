## Задание

Написать программу для сохранения данных о пользователе в `cookies`.

#### Технические требования:
- Допишите функционал в существующий файл `pricing-table.html` из домашнего задания 5 по HTML/CSS модуля Programming Essentials (пример реализованной работы во [вложении](pricing-table.html)).
- По нажатию на кнопку `Contact us`, в cookies браузера должны сохраняться следующие данные:
  - название cookie - `experiment`, значение - `novalue`, истекает через 5 минут.
  - название cookie - `new-user`, значение - `true` или `false` в зависимости от того, существует ли уже такая запись. При первом нажатии значение должно быть `true`, при втором и последующих нажатиях - `false`.

#### Литература:
- [Работа с куки](http://learn.javascript.ru/cookie)