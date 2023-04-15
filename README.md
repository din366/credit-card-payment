<h1 style="text-align: center;">Валидация платежной карточки</h1>

<p>При вводе номера карты происходит определение типа карты по заранее сформированной маске и отрисовка внешнего вида. При нажатии кнопки валидации выводится результат - корректны ли введенные данные. Верстка генерируется из js-файла с помощью RE:DOM. Использование Jest для тестирования.</p>

## Используемые инструменты

<ol>
  <li>Parcel</li>
  <li>RE:DOM</li>
  <li>Jest</li>
</ol>

<a href="https://credit-card-payment-eta.vercel.app" style="text-align: center;">Развернутое приложение на Vercel</a>

## Что было сделано:

<ol>
  <li>Генерация верстки из js-файла с помощью RE:DOM</li>
  <li>Формирование внешнего вида карточки в зависимости от банка (сравнение по маске)</li>
  <li>Проверка на корректность данных при нажатии на кнопку "Validate"</li>
  <li>Тестирование входящих значений с помощью Jest</li>
</ol>

<img style="text-align: center; max-width: 600px;"
  src="https://github.com/din366/images/blob/main/readme%20images/credit-card-front.png" alt="project image">
  
<img style="text-align: center; max-width: 600px;"
  src="https://github.com/din366/images/blob/main/readme%20images/credit-cart-back.png" alt="project image">

<p>Для работы с приложением:</p>

## запуск и сборка приложения
### `npx parcel index.html`

- запуск осуществляется по адресу [http://localhost:1234](http://localhost:1234)
