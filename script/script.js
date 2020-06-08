'use sctrict'
//  Объявляем переменные
let money = +prompt("Ваш месячный доход?"),
  income = "Верстка",
  addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
  deposit = confirm("Есть ли у вас депозит в банке?"),
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

let expenses1 = prompt("Введите обязательную статью расходов:"),
  amount1 = +prompt("Во сколько это обойдется?"),
  expenses2 = prompt("Введите обязательную статью расходов:"),
  amount2 = +prompt("Во сколько это обойдется?");

let budgetMonth = money - (amount1 + amount2);
console.log("Бюджет на месяц " + budgetMonth);

console.log("Цель будет достигнута, через " + Math.ceil(mission / budgetMonth) + " месяцев");

let budgetDay = budgetMonth / 30;
console.log("Бюджет на день " + budgetDay);

switch (true) {
  case budgetDay >= 1200:
    console.log("У вас высокий уровень дохода");
    break;
  case budgetDay < 1200 && budgetDay >= 600:
    console.log("У вас средний уровень дохода");
    break;
  case budgetDay < 600 && budgetDay > 0:
    console.log("К сожалению у вас уровень дохода ниже среднего");
    break;
  case budgetDay < 0:
    console.log("Что то пошло не так");
    break;
}