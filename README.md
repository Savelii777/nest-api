# Описание проекта
## Сборка и запуск
### 1) Заполнить конфигурацинный файл .env
### 2) Запустить сборку проекта npm run build
### 3) Запустить проект в продакшн режиме npm run start:prod
## Описание работы
### 1) Api ожидает с клиента POST запрос на /smartcapcha/check с полем token и phone в теле запроса. Этот токен находится input в виджета капча на клиенте. Далее этот ткоен с API проверяется через сервис Яндекс и возвращается ответ true если капча пройдена или false если капчую пользователь не прошел.
### 2) Проверка номера телефона ожидает POST запрос с полем code который ввел пользователь на /smartcapcha/verify-phone
### 3) Далее при получении последней анкеты API ожидает POST запрос на /anketa/getAnketa с клиента с полем phone в теле запроса. Далее возвращается json объект анкеты с стороннего API на клиент.
### 4) Пользователь отправляет новую анкету на /anketa/sendAnketa POST запросом с полями  number: number, phone: string, name: string, birthday: string, children: Child[], dateAccess: string, isPromo: boolean как в тз. Далее эта анкета уходит на сторонее API.
