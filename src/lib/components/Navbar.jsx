import React, {Fragment} from 'react';
import './styles/navbar.css';

const Navbar = (props) => {
    let className = "link";
    if(props.type) className += (" link-" + props.type)
    if(props.serif) className += (" link-serif")

    return (
        <Fragment>
            <div className={"nav-container " + (props.outline ? "nav-container-outline" : "")} id="navbar">
                <nav>
                    <div className="home">
                        <a href="https://ekazuki.fr">Eka'</a>
                    </div>
    

                    <div className="left">
                        {props.twitter ? <a href="https://twitter.com/ekazukiii" className="social-link" target="_blank"><div>Twitter</div></a> : ''}
                        {props.github ? <a href="https://github.com/ekazukii" className="social-link" target="_blank"><div>Github</div></a> : ''}
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}

export default Navbar;