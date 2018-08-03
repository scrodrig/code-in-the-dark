import React from 'react';
import Contact from './Contact'

class Place extends React.Component {
  render() {
    return(
      <div className="content">
        <section className="vertical-space-hiw">
            <h2>¿Cuándo?</h2>
            <h3>06 . 09 . 2018</h3>
            <h3>19H00</h3>
        </section>
        <section className="vertical-space">
            <h2>¿Dónde?</h2>
            <a href="https://www.thoughtworks.com/es/" target="_blank" rel="noopener noreferrer">
                <img className="small-logo" src="content/tw-logo.png" alt="Thoughtworks" />
            </a>
            <address>Edificio Brescia. Piso 10<br />
                Avenida República del Salvador<br />
                N34-107 y Suiza, Quito 170135
            </address>
            <a href="https://www.google.com.ec/maps/place/ThoughtWorks+Ecuador/@-0.1853832,-78.4838847,17z/data=!4m5!3m4!1s0x91d59a7dcd0de87f:0xaa95c7d81d54bedb!8m2!3d-0.1853832!4d-78.481696?hl=es" target="_blank" rel="noopener noreferrer">
                <img className="small-logo" src="content/map-perspective-with-a-placeholder-on-it.png" alt="Mapa" />
            </a>
        </section>
        <Contact/>
      </div>
    );
  }
}

export default Place;
