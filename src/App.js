import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import SocialLinks from './components/SocialLinks';
import Logo from './components/Logo';
import Panel from './components/Panel';
import Place from './components/Place';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Player from './components/Player';

var url = 'http://bit.ly/CodeintheDarkEC';

class App extends Component {
    render() {
        return (
            <div className="App">
                <SocialLinks url={url} picture="https://info.thoughtworks.com/rs/199-QDE-291/images/cid-facebook.png" />
                <Logo/>
                <Player/>
                <Panel/>
                <Place/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default App;
