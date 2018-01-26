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
    handleAddOne() {
        // change the state based on hitting the add one button
        // this.state.count ++; -- can NOT manually update the object
        // this.setState(); //instead we use a method that we call on the component instance
        // this.setState(updater[, callback])
        this.setState((prevState) => {
            // define the updates we want to make .. just return an object
            // specify the various state values we want to change, and the new value we want to assign
            // prevState 
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
        this.setState((prevState) => {
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

// set up 3 methods, onClick Handlers

ReactDOM.render(<Counter />, document.getElementById('app'));


// let count = 0;

// const addOne = () => {
//     count ++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count --;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };


// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const template = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// renderCounterApp();