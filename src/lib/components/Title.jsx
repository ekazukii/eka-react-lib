import React, {Fragment} from 'react';
import './styles/title.css';

const Title = (props) => {
    let className = "title";
    if(props.type) className += (" title-" + props.type)
    if(props.serif) className += (" title-serif")

    const TitleTag = `h${props.priority}`

    return (
        <Fragment>
            <TitleTag
                className={className}
                id={props.id}
                onClick={props.handleClick}
            >
                {props.label}
            </TitleTag>
        </Fragment>
    )
}

export default Title;