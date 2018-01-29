import React from 'react';

import Header from './Header';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    // constructor
    state = {
        // if users provide options when IndecisionApp component is called
        options: [],
        selectedOption: undefined
    };

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

    // methods (may need to be passed on to other components if they don't live in this render method)
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };

    handlePick = () => {
        // randomly pick an option
        const randomNumber = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNumber];
        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleClearSelectedOption = (selectedOption) => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    handleAddOption = (option) => {
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
    };

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


    //render
    render() {
        const subtitle = 'Let the computer decide your destiny';
        return (
            <div>
                <Header 
                    subtitle={subtitle}
                />
                <div className='container'>
                    <Action 
                        hasOptions = {this.state.options.length > 0}
                        handlePick = {this.handlePick}
                    />
                    <div className='widget'>
                        <Options 
                            options = {this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                    </div>
                    <AddOption 
                        handleAddOption = {this.handleAddOption}
                    />
                </div>
                <OptionModal 
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        );
    }
};