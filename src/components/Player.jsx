import React from 'react';

class Player extends React.Component {

  componentDidUpdate() {
      this.renderBuyButton();
  }

  render() {
    return(
      <section>
          <iframe width="480" height="300" src="https://www.youtube.com/embed/BzeFY4PGUNc" frameBorder="0" allowFullScreen></iframe>
      </section>

    );
  }
}

export default Player;
