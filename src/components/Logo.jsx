import React from 'react';

class Logo extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="header-content">
                    <img id="logo" src="content/cid-logo.png" alt="Code in the Dark - Logo"/>
                </div>
                <div className="extra-info">
                    06 - 09 - 2018
                </div>
            </div>
        );
    }
}

export default Logo;
