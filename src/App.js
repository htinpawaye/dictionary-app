import logo from './img/logo.png';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="image-container text-center ">
                <img src={logo} className="App-logo" alt="logo" />
                <h3 className='header'>Dictionary App</h3>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}


