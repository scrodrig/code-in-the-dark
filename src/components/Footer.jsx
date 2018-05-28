import React, { Component } from 'react';

class Footer extends React.Component {
  render() {
    return(
      <footer>
            <h2 className="organizer-title">Este evento es organizado por</h2>
            <a href="https://www.thoughtworks.com/es/" target="_blank">
                <img className="small-logo" src="content/tw-logo-white.png" alt="Thoughtworks" />
            </a>
            <h2 className="organizer-title">Nuestros aliados</h2>
            <div className="col-md-8">
              <a href="http://www.impaqto.net/" target="_blank">
                  <img className="small-logo" src="http://www.impaqto.net/wp-content/uploads/2015/05/logo.png" alt="Impaqto"/>
              </a>
              <a href="https://www.facebook.com/groups/705720476146268/" target="_blank">
                  <img className="small-logo" src="https://info.thoughtworks.com/rs/199-QDE-291/images/LogoMujerenTecnologiaCID.png" alt="Mujeres en Tecnología"/>
              </a>
              <a href="http://www.waykana.com/waykana/" target="_blank">
                  <img className="small-logo" src="http://www.waykana.com/waykana/wp-content/uploads/2016/03/logo@2x-364x120.png" alt="Waycana Guayusa"/>
              </a>
            </div>
      </footer>
    );
  }
}


export default Footer;
