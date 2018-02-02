class IndecisionApp extends React.Component {
	constructor(props){
		super(props);
		this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
		this.handlePick = this.handlePick.bind(this);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state= { 
			options: []
		}
	}
	handleDeleteOptions(){
		this.setState(() => {
			return {
				options: []
			}
		});
	}
	handleAddOption(option){
		if(!option){
			return 'Enter valid string';
		} else if (this.state.options.indexOf(option) > -1){
			return 'This option already exists';
		}

		this.setState((prevState) => {
			return {
				options: prevState.options.concat([option])
			};
		});
	}

	handlePick(){
		const randNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randNum];
		alert(option);
	}
	render(){
		const title = 'Indecision App';
		const subtitle = 'What will you do today?';
		return (
			<div>
				<Header title={title} subtitle={subtitle}/>
				<Action hasOptions={this.state.options} handlePick={this.handlePick} />
				<Options handleDeleteOptions={this.handleDeleteOptions} options={this.state.options}/>
				<AddOption handleAddOption={this.handleAddOption} />
			</div>
		);
	}
}

const Header = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
		</div>
	);
}

const Action = (props) => {
	return (
		<div>
			<button onClick={props.handlePick} disabled={props.hasOptions.length === 0}>What should I do?</button>
		</div>
	);
}

 const Options = (props) => {
	return (
		<div>
		<button onClick={props.handleDeleteOptions}> Remove All Items</button>
		{props.options.map((option) => <Option  key={option} option={option} />)}
		</div>
	);
 };

 const Option = (props) => {
	return (
		<div> 
			<p>{props.option}</p>
		</div>
	);
 };

class AddOption extends React.Component {
	constructor(props){
		super(props);
		this.handleAddOption = this.handleAddOption.bind(this);
		this.state = {
			error: undefined
		}
	}
	handleAddOption(e) {
		e.preventDefault();
		let value = e.target.elements.option.value.trim();
		const error = this.props.handleAddOption(value);
		
		this.setState(() => {
			return {
				error
			}
		});
	}

	render(){
		return (
			<div>
				{this.state.error && <p>{this.state.error}</p>}
				<form onSubmit={this.handleAddOption}>
				<input type="text" name="option"/>
				<button>Lets add an option!</button>
				</form>
			</div>
		);

	}
}

//stateless functional component

const User = (props) =>{
	return(
		<div>
			<p>Name: {props.name}</p>
			<p>Age: {props.age}</p>
		</div>
	);
};
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));