import React from 'react';

import Header from './Header';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';

export default class IndecisionApp extends React.Component {
    // constructor
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            // if users provide options when IndecisionApp component is called
            options: []
        };
    }

    // Lifecycles: these are only available in a class based componet
    componentDidMount() {
        try {
            // read data from local storage
            const json = localStorage.getItem('options');
            // since localStorag only stores string
            // we need to conver the string value back to its JSON object
            const options = JSON.parse(json);
    
            if(options) {
                //this.setState(() => ({ options: options })) .. 
                // is identical to the next line since both the state and the value passing in are named the same
                this.setState(() => ({ options }))
            }
        } catch (e) {
            // Do nothing at all
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // save data
        if (prevState.options.length !== this.state.options.length) {
            // localStorage will only allow for strings to be saved, 
            // so use JSON.stringify to convert our object into a string value
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    // methods (may need to be passed on to other components if they don't live in this render method)
    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });

        // can be simplified to ...
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
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
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));        
    }

    //render
    render() {
        const subtitle = 'Let the computer decide your destiny';
        return (

            <div>
                <Header 
                    subtitle={subtitle}
                />
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        );
    }
};