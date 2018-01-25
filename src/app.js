
class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
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
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Option component here</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type='text' name='option' />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


// redner the jsx into the div with id = app
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));