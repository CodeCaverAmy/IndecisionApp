// stateless functional component - does not allow for state


class IndecisionApp extends React.Component {
    // constructor
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            title: 'Indecision App',
            subtitle: 'Let the computer decide your destiny',
            options: []
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

    handleAddOption(option) {
        // data needs to be passed up from the AddOption Form

        // validate option
        // if option is empty
        if (!option) {
            return 'Enter valid value to add item';
        } 
        // else if the option already exits: indexOf(item) ~> index of item OR -1 if it does not exist at all
        else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exits';
        }
        
        // this will only be called if the first two if / else if didn't return anything
        this.setState((prevState) => {
            return {
                // we don't want to change the actual options array
                // concat will create a new array with the added object
                options: prevState.options.concat(option)
            };
        });
        
    }

    //render
    render() {
        return (
            <div>
                <Header 
                    title={this.state.title} 
                    subtitle={this.state.subtitle}
                />
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
}
            
// Header can be a stateless functional component, it only presents info, and doesn't manage state
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
};

// stateless functional component, because while it uses state .. it doesn't need to change the state
const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

// stateless functional component, uses state .. but doesn't manage it .. althoug it does use a function to change state
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <p>{props.options.length > 0 ? `Here are your ${props.options.length} options` : 'No options'}</p>
            {
                props.options.map((option) => <Option key= {option} optionText={option}/>)
            }            
        </div>
    );
};

// stateless functional component, uses state .. but doesn't manage it
const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    );
}

// class based component, it does need to manage state (error)
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        // track the state of the error message (which really only resides in this component)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault(); // stop full page refresh
        const option = e.target.elements.option.value.trim(); // get the value the user typed
        // if something is returned from handleAddOptions, then it must have been an error
        const error = this.props.handleAddOption(option); 

        this.setState(() => {
            return {
                // error: error
                // in ES6 ... this is exactly the same since both are the same name
                error
            }
        });
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


// redner the IndecisionApp into the div with id = app
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));