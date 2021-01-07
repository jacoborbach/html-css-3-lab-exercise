import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <div className='navbar'>
        <h3 className='logo'>Start Boostrap</h3>
        <nav className='nav'>
          <a href='google.com'>SERVICES</a>
          <a href='google.com'>PORTFOLIO</a>
          <a href='google.com'>ABOUT</a>
          <a href='google.com'>TEAM</a>
          <a href='google.com'>CONTACT</a>
        </nav>
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

export default App;
