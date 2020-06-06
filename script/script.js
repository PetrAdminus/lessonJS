//  Объявляем переменные
let money = 100000,
  income = "Верстка",
  addExpenses = "Интернет, Такси, Коммуналка",
  deposit = true,
  mission = 1000000,
  period = 12;

// Выводим в консоль тип данных зачений переменных
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

// Выводим в консоль длину строки
console.log(addExpenses.length);

// Выводим сообщение c переменной 
console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");

// Выводим строку в нижнем регистре + массив
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

// Объявляем новую переменную
let budgetDay = money / 30;
console.log(budgetDay);
