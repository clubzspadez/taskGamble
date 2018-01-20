var appRoot = document.getElementById('app');

let count = 0;

const app = {
	title: "What's my decison?",
	subtitle: 'We gon give you a task today!',
	options: []
}

const addOption = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;
	if(option){
		app.options.push(option);
		e.target.elements.option.value = '';
		renderAppTest();
	}
};

const removeList = () => {
	app.options = [];
	renderAppTest();
};

const renderAppTest = () => {
var templateTwo = (
    <div>
			<h1>{app.title}</h1>
			<p>{app.options.length > 0 ? 'Here are your options' : 'You currently have no tasks created'}</p>
			<p>{app.options.length}</p>
			<button onClick={removeList}>Remove All</button>
			<form onSubmit={addOption}>
				<input type="text" name="option"/>
				<button>Add Your Task!</button>
			</form>
    </div>
);  

ReactDOM.render(templateTwo , appRoot);
}

renderAppTest();