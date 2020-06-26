'use strict'

let isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n)
};

let start = document.getElementById('start'),
	cancel = document.getElementById('cancel'),
	incomePlus = document.getElementsByTagName('button')[0],
	expensesPlus = document.getElementsByTagName('button')[1],
	checkbox = document.querySelector('.deposit-checkmark'),
	posInc = document.querySelectorAll('.additional_expenses-item'),
	budgetMonthValue = document.querySelector('.budget_month-value'),
	budgetDayValue = document.querySelector('.budget_day-value'),
	expensesMonthValue = document.querySelector('.expenses_month-value'),
	additionalIncomeValue = document.querySelector('.additional_income-value'),
	additionalExpensesValue = document.querySelector('.additional_expenses-value'),
	incomePeriodValue = document.querySelector('.income_period-value'),
	targetMonthValue = document.querySelector('.target_month-value'),
	salaryAmount = document.querySelector('.salary-amount'),
	incomeTitle = document.querySelector('.income-title'),
	incomeAmount = document.querySelector('.income-amount'),
	incomeItem = document.querySelectorAll('.income-items'),
	additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
	expensesItems = document.querySelectorAll('.expenses-items'),
	additionalExpensesItem = document.querySelector('.additional_expenses-item'),
	targetAmount = document.querySelector('.target-amount'),
	periodSelect = document.querySelector('.period-select'),
	inputs = document.querySelectorAll('input'),
	periodAmount = document.querySelector('.period-amount');

let appData = {
	income: {},
	incomeMonth: 0,
	addIncome: [],
	expenses: {},
	addExpenses: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	budget: 0,
	budgetDay: 0,
	budgetMonth: 0,
	expensesMonth: 0,
	start: function () {

		this.budget = +salaryAmount.value;

		inputs.forEach(function (item) {

			item.setAttribute("readonly", "readonly");

		})

		cancel.style.display = 'block';
		start.style.display = 'none';

		this.getExpenses();
		this.getIncome();
		this.getExpensesMonth();
		this.getAddExpenses();
		this.getAddIncome();
		this.getBudget();

		this.showResult();


	},
	showResult: function () {

		budgetMonthValue.value = this.budgetMonth;
		budgetDayValue.value = Math.floor(this.budgetDay);
		expensesMonthValue.value = +this.expensesMonth;
		additionalExpensesValue.value = this.addExpenses.join(', ');
		additionalIncomeValue.value = this.addIncome.join(', ');
		targetMonthValue.value = this.getTargetMonth();
		incomePeriodValue.value = this.calcSavedMoney();

		periodSelect.addEventListener('input', function () {
			incomePeriodValue.value = appData.calcSavedMoney();
		});

		console.log(this);


	},
	addExpensesBlock: function () {

		let cloneExpensesItem = expensesItems[0].cloneNode(true);
		expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
		expensesItems = document.querySelectorAll('.expenses-items');

		if (expensesItems.length === 3) {
			expensesPlus.style.display = 'none';
		}

	},
	getExpenses: function () {

		expensesItems.forEach(function (item) {

			let itemExpenses = item.querySelector('.expenses-title').value;
			let cashExpenses = item.querySelector('.expenses-amount').value;

			if (itemExpenses !== '' && cashExpenses !== '') {

				appData.expenses[itemExpenses] = cashExpenses;

			}
		});
	},
	addIncomeBlock: function () {

		let cloneIncomeItem = incomeItem[0].cloneNode(true);
		incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
		incomeItem = document.querySelectorAll('.income-items');

		if (incomeItem.length === 3) {
			incomePlus.style.display = 'none';
		}

	},
	getIncome: function () {

		incomeItem.forEach(function (item) {

			let incomeTitle = item.querySelector('.income-title').value;
			let incomeAmount = item.querySelector('.income-amount').value;

			if (incomeTitle !== '' && incomeAmount !== '') {

				appData.income[incomeTitle] = incomeAmount;

			}

			for (let key in appData.income) {
				appData.incomeMonth += +appData.income[key];
			}

		});

	},
	getAddExpenses: function () {

		let addExpenses = additionalExpensesItem.value.split(',');

		addExpenses.forEach(function (item) {

			item = item.trim();

			if (item !== '') {

				appData.addExpenses.push(item);

			}
		});
	},
	getAddIncome: function () {

		additionalIncomeItem.forEach(function (item) {

			let itemValue = item.value.trim();

			if (itemValue !== '') {

				appData.addIncome.push(itemValue);

			};

		});
	},
	getExpensesMonth: function () {
		for (let key in appData.expenses) {
			appData.expensesMonth += appData.expenses[key];
		};
	},
	getBudget: function () {
		this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
		this.budgetDay = this.budgetMonth / 30;
	},
	getTargetMonth: function () {

		return Math.ceil(targetAmount.value / this.budgetMonth);

	},
	calcSavedMoney: function () {
		return appData.budgetMonth * periodSelect.value;
	},
	calcPeriod: function () {
		periodAmount.innerHTML = periodSelect.value;
	}
};

let foo = appData.start.bind(appData);

salaryAmount.addEventListener('input', function () {

	if (salaryAmount.value === '') {
		start.setAttribute("disabled", "disabled");
		return;
	} else {
		start.removeAttribute("disabled", "disabled");
		start.addEventListener('click', foo);
	}
});

expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.calcPeriod);
cancel.addEventListener('click', function () {
	inputs.forEach(function (item) {

		item.value = '';
		item.removeAttribute("readonly", "readonly");


	})
	cancel.style.display = 'none';
	start.style.display = 'block';
});
