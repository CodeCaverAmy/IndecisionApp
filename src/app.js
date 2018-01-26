
class IndecisionApp extends React.Component {
    // constructor
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['Thing One', 'Thing Two', 'Thing Three']
        };
    }
    // methods (may need to be passed on to other components if they don't live in this render method)
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick() {
        // randomly pick an option
        const randomNumber = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNumber];
        alert(option);
    }

    //render
    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    options={this.state.options}
                />
            </div>
        );
    }
}

// create the Header Component as a class extended from React
class Header extends React.Component {
    // requires the render function
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <h1>{this.title}</h1>
                <h2>{this.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <p>{this.props.options.length > 0 ? `Here are your ${this.props.options.length} options` : 'No options'}</p>
                {
                    this.props.options.map((option) => <Option key= {option} optionText={option}/>)
                }            
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault(); // stop full page refresh
        const option = e.target.elements.option.value.trim(); // get the value the user typed
        if (option) {
            alert(`Adding ${option}`);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


// redner the jsx into the div with id = app
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));