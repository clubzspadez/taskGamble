import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  //Remove all options
	handleDeleteOptions= () => {
		this.setState(() => ({ options: [] }));
	};
  //Remove a specific option
	handleDeleteOption = (optionToRemove) =>{
		this.setState((prevState) => ({ options: prevState.options.filter((option) => optionToRemove !== option)
		}));
	};
  //Add the option to the list
	handleAddOption= (option) => {
		if( !option ){
			return 'Enter valid string';
		} else if (this.state.options.indexOf(option) > -1){
			return 'This option already exists';
		}

		this.setState( (prevState) => ({ 
			options: prevState.options.concat([option])
		}) );
	};
  // Randomize selection of options
	handlePick = () => {
		const randNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randNum];
    this.setState(() => ({
      selectedOption: option
    }));
  };
  handleClearPick = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  }
  componentDidMount() {
		try {
			const json = localStorage.getItem('options');
			const options  = JSON.parse(json);

			if (options){
				this.setState(() => ({ options }));
			}

		} catch (e) {
			console.log(e);
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevState.options.length !== this.state.options.length){
			const json = JSON.stringify( this.state.options );
			localStorage.setItem('options', json);
		}
	}

	componentWillUnmount() {

	}
	render() {
		const title = 'Indecision App';
		const subtitle = 'What will you do today?';
		return (
			<div>
				<Header title={title} subtitle={subtitle}/>
				<div className="container">
					<Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
					<div className="widget">
						<Options handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} options={this.state.options}/>
						<AddOption handleAddOption={this.handleAddOption} />
					</div>
					</div>
					<OptionModal selectedOption={this.state.selectedOption} handleClearPick={this.handleClearPick}/>
			</div>
		);
	}
}

IndecisionApp.defaultProps = {
	options: []
}

export default IndecisionApp;