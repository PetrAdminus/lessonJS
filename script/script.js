'use sctrict'

// let isNumber = function (n) {
// 	return !isNaN(parseFloat(n)) && isFinite(n)
// };

<<<<<<< Updated upstream
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
=======
// let money,
// 	start = function () {
// 		do {
// 			money = prompt("Ваш месячный доход?");
// 		}
// 		while (!isNumber(money));
// 	};
// start();

let calculate = document.getElementById('start'),
	plusOne = document.getElementsByTagName('button')[0],
	plusTwo = document.getElementsByTagName('button')[1],
	checkbox = document.querySelector('.deposit-checkmark'),
	posInc = document.querySelectorAll('.additional_expenses-item'),
	output1 = document.querySelector('.budget_month-value'),
	output2 = document.querySelector('.budget_day-value'),
	output3 = document.querySelector('.expenses_month-value'),
	output4 = document.querySelector('.additional_income-value'),
	output5 = document.querySelector('.additional_expenses-value'),
	output6 = document.querySelector('.income_period-value'),
	output7 = document.querySelector('.target_month-value'),
	input1 = document.querySelector('.salary-amount'),
	input2 = document.querySelector('.income-title'),
	input3 = document.querySelector('.income-amount'),
	input4 = document.querySelector('.additional_income-item')[0],
	input5 = document.querySelector('.additional_income-item')[1],
	input6 = document.querySelector('.expenses-title'),
	input7 = document.querySelector('.expenses-amount'),
	input8 = document.querySelector('.additional_expenses-item'),
	input9 = document.querySelector('.target-amount'),
	period = document.querySelector('.period-select');

console.log();

// let appData = {
// 	income: {},
// 	addIncome: [],
// 	expenses: {},
// 	addExpenses: [],
// 	deposit: false,
// 	percentDeposit: 0,
// 	moneyDeposit: 0,
// 	mission: 50000,
// 	period: 3,
// 	budget: money,
// 	budgetDay: 0,
// 	budgetMonth: 0,
// 	expensesMonth: 0,
// 	asking: function () {
// 		if (confirm('Есть ли у вас дополнительный заработок?')) {
// 			let itemIncome,
// 				cashIncome;
// 			do {
// 				itemIncome = prompt("Какой у вас есть дополнительный заработок?", "Таксую");
// 			}
// 			while (/[^а-я.]/i.test(itemIncome));
// 			do {
// 				cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", 10000);
// 			}
// 			while (!isNumber(cashIncome));
// 			appData.income[itemIncome] = cashIncome;
// 		}
// 		let addExpenses = prompt('Перечислите возможные расходы:');
// 		appData.addExpenses = addExpenses.toLowerCase().split(', ');
// 		appData.deposit = confirm('Есть ли у вас депозит в банке?');
// 		let question;
// 		for (let i = 0; i < 2; i++) {
// 			let expensesItem
// 			do {
// 				expensesItem = prompt("Введите обязательную статью расходов:");
// 			}
// 			while (/[^а-я.]/i.test(expensesItem));
// 			do {
// 				question = +prompt("Во сколько это обойдется?");
// 			}
// 			while (!isNumber(question));
// 			appData.expenses[expensesItem] = question;
// 		};
// 	},
// 	getExpensesMonth: function () {
// 		for (let key in appData.expenses) {
// 			appData.expensesMonth += appData.expenses[key];
// 		};
// 	},
// 	getBudget: function () {
// 		appData.budgetMonth = appData.budget - appData.expensesMonth;
// 		appData.budgetDay = appData.budgetMonth / 30;
// 	},
// 	getTargetMonth: function () {

// 		let res = Math.ceil(appData.mission / appData.budgetMonth);

// 		switch (true) {
// 			case res > 0:
// 				return ("Цель будет достигнута через: " + res + " месяцев")
// 				break;
// 			case res < 0:
// 				return ("Цель не будет достигнута")
// 				break;
// 		}
// 	},
// 	getStatusIncome: function () {
// 		switch (true) {
// 			case appData.budgetDay >= 1200:
// 				return ("У вас высокий уровень дохода");
// 				break;
// 			case appData.budgetDay < 1200 && appData.budgetDay >= 600:
// 				return ("У вас средний уровень дохода");
// 				break;
// 			case appData.budgetDay < 600 && appData.budgetDay > 0:
// 				return ("К сожалению у вас уровень дохода ниже среднего");
// 				break;
// 			case appData.budgetDay < 0:
// 				return ("Что то пошло не так");
// 				break;
// 		}
// 	},
// 	getInfoDeposit: function () {
// 		if (appData.deposit) {
// 			do {
// 				appData.percentDeposit = prompt("Какой годовой процент?", "10");
// 				appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
// 			}
// 			while (!isNumber(appData.percentDeposit, appData.moneyDeposit));
// 		}
// 	},
// 	calcSavedMoney: function () {
// 		return appData.budgetMonth * appData.period
// 	}
// };
// appData.asking();
// appData.getExpensesMonth();
// console.log("Расходы за месяц " + appData.expensesMonth);

// appData.getBudget();

// // Cрок достижения цели в месяцах
// console.log(appData.getTargetMonth());

// // вызов функции getStatusIncome
// console.log(appData.getStatusIncome());

// for (let key in appData) {
// 	console.log("Наша программа включает в себя данные: " + key + " " + appData[key]);
// };

// function newResult() {
// 	let result = appData.addExpenses.map(word => { // ***1***
// 		const newWord = word[0].toUpperCase() + word.slice(1); // ***2***
// 		return newWord; // ***3***
// 	});
// 	console.log(result.join(', '));
// }
// newResult();
>>>>>>> Stashed changes
