import React, {Component} from 'react';

class Logo extends React.Component {
    render() {
        return (
            <header>
                <div className="header-content">
                    <img id="logo" src="content/cid-logo.png" alt="Code in the Dark - Logo"/>
                </div>
            </header>
        );
    }
}

export default Logo;
