import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dropDownView: false
    }
  }

  handleChange = () => {
    this.setState({ dropDownView: !this.state.dropDownView })
  }

  render() {
    return (
      <div className="App">
        {/* Desktop Navbar */}
        <div className='navbar'>
          <h3 className='logo'>Start Boostrap</h3>
          <nav className='desktopnav'>
            <a href='google.com'>SERVICES</a>
            <a href='google.com'>PORTFOLIO</a>
            <a href='google.com'>ABOUT</a>
            <a href='google.com'>TEAM</a>
            <a href='google.com'>CONTACT</a>
          </nav>
          <div className='dropdown' onClick={this.handleChange}>Menu</div>
          {this.state.dropDownView
            ? (<nav className='mobilenavbar'>
              <a href='google.com'>SERVICES</a>
              <a href='google.com'>PORTFOLIO</a>
              <a href='google.com'>ABOUT</a>
              <a href='google.com'>TEAM</a>
              <a href='google.com'>CONTACT</a>
            </nav>)
            : null}

        </div>

        {/* Header aka picture with header */}
        <header className="header">
          <div className='container'>
            <div className='subheading'>
              Welcome To Our Studio!
          </div>
            <div className='heading'>
              IT'S NICE TO MEET YOU
          </div>
            <button className='btn'>
              TELL ME MORE
          </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
