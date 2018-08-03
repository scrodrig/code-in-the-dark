import React from 'react';

class Footer extends React.Component {
  render() {
    return(
      <footer>
            <h2 className="organizer-title">Este evento es organizado por</h2>
            <a href="https://www.thoughtworks.com/es/" target="_blank" rel="noopener noreferrer">
                <img className="small-logo" src="content/tw-logo-white.png" alt="Thoughtworks" />
            </a>
      </footer>
    );
  }
}

export default Footer;
