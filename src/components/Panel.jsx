import React from 'react';
import Rules from './Rules'
import HowItWorks from './HowItWorks'

class Panel extends React.Component {
  render() {
    return(
        <section className="section">
        <div className="row">
            <div className="half-row">
                <Rules />
            </div>
            <div className="half-row">
                <HowItWorks />
            </div>
        </div>
      </section>
    );
  }
}

export default Panel;
