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

class AppData {
	constructor() {
		this.income = {};
		this.incomeMonth = 0;
		this.addIncome = [];
		this.expenses = {};
		this.addExpenses = [];
		this.deposit = false;
		this.percentDeposit = 0;
		this.moneyDeposit = 0;
		this.budget = 0;
		this.budgetDay = 0;
		this.budgetMonth = 0;
		this.expensesMonth = 0;
	}

	start() {
		this.budget = +salaryAmount.value;

		inputs.forEach((item) => {

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
	}

	showResult() {
		const _this = this;

		budgetMonthValue.value = this.budgetMonth;
		budgetDayValue.value = Math.floor(this.budgetDay);
		expensesMonthValue.value = +this.expensesMonth;
		additionalExpensesValue.value = this.addExpenses.join(', ');
		additionalIncomeValue.value = this.addIncome.join(', ');
		targetMonthValue.value = this.getTargetMonth();
		incomePeriodValue.value = this.calcSavedMoney();

		periodSelect.addEventListener('input', () => {

			incomePeriodValue.value = _this.calcSavedMoney();

		});
	}

	addExpensesBlock() {
		let cloneExpensesItem = expensesItems[0].cloneNode(true);

		expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
		expensesItems = document.querySelectorAll('.expenses-items');

		if (expensesItems.length === 3) {

			expensesPlus.style.display = 'none';

		};
	}

	getExpenses() {
		const _this = this;

		expensesItems.forEach((item) => {

			let itemExpenses = item.querySelector('.expenses-title').value;
			let cashExpenses = item.querySelector('.expenses-amount').value;

			if (itemExpenses !== '' && cashExpenses !== '') {

				_this.expenses[itemExpenses] = cashExpenses;

			}
		});
	}

	addIncomeBlock() {
		let cloneIncomeItem = incomeItem[0].cloneNode(true);

		incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
		incomeItem = document.querySelectorAll('.income-items');

		if (incomeItem.length === 3) {

			incomePlus.style.display = 'none';

		};
	}

	getIncome() {
		const _this = this;

		incomeItem.forEach((item) => {

			let incomeTitle = item.querySelector('.income-title').value;
			let incomeAmount = item.querySelector('.income-amount').value;

			if (incomeTitle !== '' && incomeAmount !== '') {

				_this.income[incomeTitle] = incomeAmount;

			}

			for (let key in _this.income) {

				_this.incomeMonth += +_this.income[key];

			}
		});
	}

	getAddExpenses() {
		const _this = this;

		let addExpenses = additionalExpensesItem.value.split(',');

		addExpenses.forEach((item) => {

			item = item.trim();

			if (item !== '') {

				_this.addExpenses.push(item);

			}
		});
	}

	getAddIncome() {
		const _this = this;

		additionalIncomeItem.forEach((item) => {

			let itemValue = item.value.trim();

			if (itemValue !== '') {

				_this.addIncome.push(itemValue);

			};

		});
	}

	getExpensesMonth() {
		for (let key in this.expenses) {

			this.expensesMonth += this.expenses[key];

		};
	}

	getBudget() {
		this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
		this.budgetDay = this.budgetMonth / 30;

	}

	getTargetMonth() {
		return Math.ceil(targetAmount.value / this.budgetMonth);

	}

	calcSavedMoney() {
		return this.budgetMonth * periodSelect.value;

	}

	calcPeriod() {
		periodAmount.innerHTML = periodSelect.value;

	}

	eventListener() {
		let foo = appData.start.bind(appData);

		salaryAmount.addEventListener('input', () => {

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
		cancel.addEventListener('click', () => {

			inputs.forEach((item) => {

				item.value = '';
				item.removeAttribute("readonly", "readonly");

			})

			cancel.style.display = 'none';
			start.style.display = 'block';

		});
	}
};

const appData = new AppData();

appData.eventListener();