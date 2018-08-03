import React from 'react';

class Player extends React.Component {

  componentDidUpdate() {
      this.renderBuyButton();
  }

  render() {
    return(
      <section className="content">
          <iframe title="Code in the Dark" width="100%" height="100%" src="https://www.youtube.com/embed/BzeFY4PGUNc" frameBorder="0" allowFullScreen></iframe>
      </section>

    );
  }
}

export default Player;
