import React, {Fragment} from 'react';
import './styles/link.css';

const Link = (props) => {
    let className = "link";
    if(props.type) className += (" link-" + props.type)
    if(props.serif) className += (" link-serif")

    return (
        <Fragment>
            <a
                className={className}
                id={props.id}
                href={props.href}
                target={props.newtab ? "_blank" : "_self"}
                onClick={props.handleClick}
            >
                {props.label}
            </a>
        </Fragment>
    )
}

export default Link;