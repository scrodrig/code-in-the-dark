import React, { Component } from 'react';
import {ShareButtons, ShareCounts, generateShareIcon} from 'react-share';

const {
    FacebookShareButton,
    GooglePlusShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton
} = ShareButtons;

const {FacebookShareCount, GooglePlusShareCount, LinkedinShareCount, PinterestShareCount} = ShareCounts;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');

class SocialLinks extends React.Component {
  render() {
    return(
            <div className="social-links">
              <FacebookShareButton title='Code in the Dark EC' description="¿Eres experto/a en Front-end? Prepárate, pondremos a prueba tus conocimientos" picture={this.props.picture} url={this.props.url} children={<FacebookIcon size={32} round={true} />}/>
              <TwitterShareButton title='Code in the Dark EC' via="Thoughtworks_es" hashtags={['CodeInTheDarkUIO','TWAndes','TWUIO']} url={this.props.url} picture={this.props.picture} children={<TwitterIcon size={32} round={true} />}/>
              <GooglePlusShareButton title='Code in the Dark EC' url={this.props.url} children={<GooglePlusIcon size={32} round={true} />}/>
              <LinkedinShareButton title='Code in the Dark EC' description="¿Eres experto/a en Front End? Prepárate, pondremos a prueba tus conocimientos" url={this.props.url} children={<LinkedinIcon size={32} round={true} />}/>
              <PinterestShareButton media={this.props.picture} description="Code in the Dark: ¿Eres experto/a en Front End? Prepárate, pondremos a prueba tus conocimientos" url={this.props.url} children={<PinterestIcon size={32} round={true} />}/>
            </div>
          )
  }
}


export default SocialLinks;
