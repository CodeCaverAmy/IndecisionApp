
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        let options = ['Thing One', 'Thing Two', 'Thing Three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption options={options}/>
            </div>
        );
    }
}

// create the Header Component as a class extended from React
class Header extends React.Component {
    // requires the render function
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert('remove all');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
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