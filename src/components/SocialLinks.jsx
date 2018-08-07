import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

class SocialLinks extends React.Component {
  render() {
    return(
            <div className="social-links">
              <LinkedinShareButton title='Code in the Dark EC' description="¿Eres experto/a en Front End? Prepárate, pondremos a prueba tus conocimientos" url={this.props.url} children={<LinkedinIcon size={32} round={true} />}/>
              <TwitterShareButton title='Code in the Dark EC' via="ThoughtworksANS" hashtags={['CodeInTheDarkUIO','TWAndes','TWUIO']} url={this.props.url} picture={this.props.picture} children={<TwitterIcon size={32} round={true} />}/>
              <FacebookShareButton title='Code in the Dark EC' description="¿Eres experto/a en Front-end? Prepárate, pondremos a prueba tus conocimientos" picture={this.props.picture} url={this.props.url} children={<FacebookIcon size={32} round={true} />}/>
            </div>
          )
  }
}

export default SocialLinks;
