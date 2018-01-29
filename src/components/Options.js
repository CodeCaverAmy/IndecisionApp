import React from 'react';
import Option from './Option';

// stateless functional component, uses state .. but doesn't manage it .. althoug it does use a function to change state
const Options = (props) => (
    <div>
        <div className=' widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button 
                className='button button--link'
                onClick={props.handleDeleteOptions}    
            >
                Remove All
            </button>
        </div>          
        {props.options.length > 0 ? <p className = 'widget__message'>Here are your {props.options.length} options</p> : <p className='widget__message'>Add an option to get started.</p>}
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