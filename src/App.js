import React, {Component} from 'react';
import './App.css';
import SocialLinks from './components/SocialLinks';
import Logo from './components/Logo';
import Rules from './components/Rules';
import HowItWorks from './components/HowItWorks';
import Place from './components/Place';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Player from './components/Player';

var url = 'https://code-in-the-dark.herokuapp.com';

class App extends Component {
    render() {
        return (
            <div className="App">
                <SocialLinks url={url} picture="https://info.thoughtworks.com/rs/199-QDE-291/images/cid-facebook.png" />
                <Logo/>
                <Player/>
                <Rules/>
                <HowItWorks/>
                <Place/>
                <Footer/>
            </div>
        );
    }
}

export default App;
