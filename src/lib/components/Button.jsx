import React, {Fragment} from 'react';
import './styles/button.css';

const Button = (props) => {
    let className = "btn";
    console.log('RUNNED')
    if(props.type) className += (" btn-" + props.type)
    if(props.color) className += (" btn-color-" + props.color)
    if(props.outline) className += (" btn-outline")
    if(props.serif) className += (" btn-serif")
    if(props.slim) className += (" btn-slim")


    return (
        <Fragment>
            <button 
                className={className}
                id={props.id}
                disabled={props.disabled}
                onClick={props.handleClick}
            >
       
                {props.label}
            </button>
        </Fragment>
    )
}

export default Button;