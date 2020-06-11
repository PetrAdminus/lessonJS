'use sctrict'

let isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
	income = "Верстка",
	addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", "покупки, то, се"),
	deposit = confirm("Есть ли у вас депозит в банке?"),
	mission = 1000000,
	period = 12;

let start = function () {

	do {
		money = prompt("Ваш месячный доход?");
	}
	while (!isNumber(money));
};
start()

// вызовы функции showTypeOf
let showTypeOf = function (data) {
	console.log(data, typeof (data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// Вывод возможных расходов в виде массива (addExpenses)
console.log(addExpenses.split(', '));

let expenses = [];

let getExpensesMonth = function () {
	let sum = 0;

	for (let i = 0; i < 2; i++) {

		expenses[i] = prompt("Введите обязательную статью расходов:");

		do {
			sum = prompt("Во сколько это обойдется?");
		}
		while (!isNumber(sum));
	}
	return sum;
};

let expensesAmount = getExpensesMonth();

console.log(expensesAmount);

function getAccumulatedMonth() {
	return money - expensesAmount;
};

let accumulatedMonth = getAccumulatedMonth()
console.log("Бюджет на месяц " + accumulatedMonth);

// Cрок достижения цели в месяцах
let getTargetMonth = function () {

	let res = Math.ceil(mission / accumulatedMonth);

	switch (true) {
		case res > 0:
			return ("Цель будет достигнута через:" + res + "месяцев")
			break;
		case res < 0:
			return ("Цель не будет достигнута")
			break;
	}
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