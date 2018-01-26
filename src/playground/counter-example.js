class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // set the default state property(ies)
        this.state = {
            count: 0
        };
    }

    // Lifecycles
    componentDidMount() {
        // get count from localStorage
        try {
            // read data from local storage
            const stringCount = localStorage.getItem('count');
            const count = parseInt(stringCount, 10);
            if (!isNaN(count)) {
                this.setState(() => ({ count }))
            }
        } catch (e) {
            // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        // change the state based on hitting the add one button
        // this.state.count ++; -- can NOT manually update the object
        // this.setState(); //instead we use a method that we call on the component instance
        // this.setState(updater[, callback])
        this.setState((prevState) => {
            // define the updates we want to make .. just return an object
            // specify the various state values we want to change, and the new value we want to assign
            // prevState (could be named anything) is the state prior to updateing it.
            return {
                count: prevState.count + 1
            }
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
