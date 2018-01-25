console.log('App.js is running!');

// JSX - JavaScript XML
const app = {
    title: 'Indecsision App',
    subtitle: 'Let us help you decide',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); // stop full page refresh
    const option = e.target.elements.option.value; // get the value the user typed
    if (option) {
        app.options.push(option);
        e.target.elements.option.value='';
        render();
    }
};

const onRemoveAll = () => {
    app.options=[];
    render();
}

const onMakeDecision = () => {
    // generate a random number to use it to pull it from the array (0 to number of items in the array)
    const randomNumber = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNumber];
    alert(option);
}

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.title && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button onClick={onMakeDecision} disabled={app.options.length == 0}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                /* map goes through each item in te array, creating a new array of values */
                app.options.map((option) => <li key={option}>{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render(); // render tha App once loaded
