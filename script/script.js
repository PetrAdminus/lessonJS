'use sctrict'

let money = +prompt("Ваш месячный доход?", 50000),
  income = "Верстка",
  addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "покупки, то, се"),
  deposit = confirm("Есть ли у вас депозит в банке?"),
  mission = 1000000,
  period = 12;

// вызовы функции showTypeOf
let showTypeOf = function (data) {
  console.log(data, typeof (data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// Вывод возможных расходов в виде массива (addExpenses)
console.log(addExpenses.split(', '));

// Расходы за месяц вызов getExpensesMonth
let expenses1 = prompt("Введите обязательную статью расходов:", "еда"),
  amount1 = +prompt("Во сколько это обойдется?", 10000),
  expenses2 = prompt("Введите обязательную статью расходов:", "бензин"),
  amount2 = +prompt("Во сколько это обойдется?", 5000);

function getExpensesMonth() {
  return amount1 + amount2;
};

console.log(getExpensesMonth());


function getAccumulatedMonth() {
  return money - (amount1 + amount2);
};

let accumulatedMonth = getAccumulatedMonth()
console.log("Бюджет на месяц " + accumulatedMonth);

// Cрок достижения цели в месяцах
function getTargetMonth() {
  return Math.ceil(mission / accumulatedMonth);
};

console.log(getTargetMonth());

// Бюджет на день
let budgetDay = accumulatedMonth / 30;
console.log("Бюджет на день " + budgetDay);

// вызов функции getStatusIncome
let getStatusIncome = function () {
  switch (true) {
    case budgetDay >= 1200:
      return ("У вас высокий уровень дохода");
      break;
    case budgetDay < 1200 && budgetDay >= 600:
      return ("У вас средний уровень дохода");
      break;
    case budgetDay < 600 && budgetDay > 0:
      return ("К сожалению у вас уровень дохода ниже среднего");
      break;
    case budgetDay < 0:
      return ("Что то пошло не так");
      break;
  }
};

console.log(getStatusIncome());