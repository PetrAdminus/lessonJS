'use strict'

let isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
	start = function () {
		do {
			money = prompt("Ваш месячный доход?");
		}
		while (!isNumber(money));
	};
start();

let appData = {
	income: {},
	addIncome: [],
	expenses: {},
	addExpenses: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	mission: 50000,
	period: 3,
	budget: money,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	asking: function () {
		if (confirm('Есть ли у вас дополнительный заработок?')) {
			let itemIncome,
				cashIncome;
			do {
				itemIncome = prompt("Какой у вас есть дополнительный заработок?", "Таксую");
			}
			while (/[^а-я.]/i.test(itemIncome));
			do {
				cashIncome = prompt("Сколько в месяц вы на этом зарабатываете?", 10000);
			}
			while (!isNumber(cashIncome));
			appData.income[itemIncome] = cashIncome;
		}
		let addExpenses = prompt('Перечислите возможные расходы:');
		appData.addExpenses = addExpenses.toLowerCase().split(', ');
		appData.deposit = confirm('Есть ли у вас депозит в банке?');
		let question;
		for (let i = 0; i < 2; i++) {
			let expensesItem
			do {
				expensesItem = prompt("Введите обязательную статью расходов:");
			}
			while (/[^а-я.]/i.test(expensesItem));
			do {
				question = +prompt("Во сколько это обойдется?");
			}
			while (!isNumber(question));
			appData.expenses[expensesItem] = question;
		};
	},
	getExpensesMonth: function () {
		for (let key in appData.expenses) {
			appData.expensesMonth += appData.expenses[key];
		};
	},
	getBudget: function () {
		appData.budgetMonth = appData.budget - appData.expensesMonth;
		appData.budgetDay = appData.budgetMonth / 30;
	},
	getTargetMonth: function () {

		let res = Math.ceil(appData.mission / appData.budgetMonth);

		switch (true) {
			case res > 0:
				return ("Цель будет достигнута через: " + res + " месяцев")
				break;
			case res < 0:
				return ("Цель не будет достигнута")
				break;
		}
	},
	getStatusIncome: function () {
		switch (true) {
			case appData.budgetDay >= 1200:
				return ("У вас высокий уровень дохода");
				break;
			case appData.budgetDay < 1200 && appData.budgetDay >= 600:
				return ("У вас средний уровень дохода");
				break;
			case appData.budgetDay < 600 && appData.budgetDay > 0:
				return ("К сожалению у вас уровень дохода ниже среднего");
				break;
			case appData.budgetDay < 0:
				return ("Что то пошло не так");
				break;
		}
	},
	getInfoDeposit: function () {
		if (appData.deposit) {
			do {
				appData.percentDeposit = prompt("Какой годовой процент?", "10");
				appData.moneyDeposit = prompt("Какая сумма заложена?", 10000);
			}
			while (!isNumber(appData.percentDeposit, appData.moneyDeposit));
		}
	},
	calcSavedMoney: function () {
		return appData.budgetMonth * appData.period
	}
};
appData.asking();
appData.getExpensesMonth();
console.log("Расходы за месяц " + appData.expensesMonth);

appData.getBudget();

// Cрок достижения цели в месяцах
console.log(appData.getTargetMonth());

// вызов функции getStatusIncome
console.log(appData.getStatusIncome());

for (let key in appData) {
	console.log("Наша программа включает в себя данные: " + key + " " + appData[key]);
};

function newResult() {
	let result = appData.addExpenses.map(word => { // ***1***
		const newWord = word[0].toUpperCase() + word.slice(1); // ***2***
		return newWord; // ***3***
	});
	console.log(result.join(', '));
}
newResult();