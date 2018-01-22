'use strict';

var appRoot = document.getElementById('app');

var count = 0;

var app = {
	title: "Task Assigner",
	subtitle: 'We gon\' give you a task today!',
	options: []
};

var addOption = function addOption(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;
	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		renderAppTest();
	}
};

var removeList = function removeList() {
	app.options = [];
	renderAppTest();
};

var makeChoice = function makeChoice() {
	var randNum = Math.floor(Math.random() * app.options.length);
	var choice = function choice() {
		var currentChoice = app.options[randNum];
		return currentChoice;
	};
	console.log(choice());
};

var renderAppTest = function renderAppTest() {
	var templateTwo = React.createElement(
		'div',
		null,
		React.createElement(
			'h1',
			null,
			app.title
		),
		React.createElement(
			'h3',
			null,
			app.subtitle
		),
		React.createElement(
			'p',
			null,
			app.options.length > 0 ? 'Here are your options' : 'You currently have no tasks created'
		),
		React.createElement(
			'button',
			{ onClick: makeChoice },
			'LET US CHOOSE FOR YOU'
		),
		React.createElement(
			'button',
			{ onClick: removeList },
			'Remove All'
		),
		React.createElement(
			'ol',
			null,
			app.options.map(function (option) {
				return React.createElement(
					'li',
					{ key: option },
					option
				);
			})
		),
		React.createElement(
			'form',
			{ onSubmit: addOption },
			React.createElement('input', { type: 'text', name: 'option' }),
			React.createElement(
				'button',
				null,
				'Add Your Task!'
			)
		)
	);

	ReactDOM.render(templateTwo, appRoot);
};

renderAppTest();
