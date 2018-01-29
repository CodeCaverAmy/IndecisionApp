import React from 'react';
import Option from './Option';

// stateless functional component, uses state .. but doesn't manage it .. althoug it does use a function to change state
const Options = (props) => (
    <div>
        <button 
            className='button button--link'
            onClick={props.handleDeleteOptions}    
        >
            Remove All
        </button>
        {props.options.length > 0 ? <p>Here are your {props.options.length} options</p> : <p>Add an option to get started.</p>}
        {
            props.options.map((option) => (
                <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }            
    </div>
);

export default Options;