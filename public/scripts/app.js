'use strict';

var appRoot = document.getElementById('app');

var count = 0;

var app = {
	title: "What's my decison?",
	subtitle: 'We gon give you a task today!',
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
			'p',
			null,
			app.options.length > 0 ? 'Here are your options' : 'You currently have no tasks created'
		),
		React.createElement(
			'p',
			null,
			app.options.length
		),
		React.createElement(
			'button',
			{ onClick: removeList },
			'Remove All'
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
