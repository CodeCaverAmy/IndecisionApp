import React from 'react';

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

export default Action;