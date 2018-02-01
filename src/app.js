class IndecisionApp extends React.Component {
	render(){
		const title = 'Indecision App';
		const subtitle = 'What will you do today?';
		const options = ['Food','Bear','Chair'];
		return (
			<div>
				<Header title={title} subtitle={subtitle}/>
				<Action />
				<Options options={options}/>
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render(){
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	handlePick(){
		console.log('this is running');
	}
	render(){
		return (
			<div>
				<button onClick={this.handlePick}>What should I do?</button>
			</div>
		);
		
	}
}
class Options extends React.Component {
	constructor(props){
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}
	handleRemoveAll(){
		let options = this.props.options;
		
	}

	render(){
		return (
			<div>
			<button onClick={this.handleRemoveAll}> Remove All Items</button>
			{this.props.options.map((option) => <Option  key={option} option={option} />)}
			</div>
		);
	}
}

class Option extends React.Component {
	render(){
		return (
			<div> 
				
				<p>{this.props.option}</p>
			</div>
		);
	}
}

class AddOption extends React.Component {
	constructor(props){
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
	}
	handleAddOption(e) {
		let value = e.target.elements.option.value;
		if(value){
			alert(value);
		}
	}

	render(){
		return (
			<div>
				<form onSubmit={this.handleAddOption}>
				<input type="text" name="option"/>
				<button>Lets add an option!</button>
				</form>
			</div>
		);

	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));