import logo from "./img/logo.png";
import "./App.css";
import Dictionary from "./components/Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="image-container text-center ">
                <img src={logo} className="App-logo" alt="logo" />
                <h3 className="header">Dictionary App</h3>
              </div>
              <Dictionary />
              <footer className="text-center mt-4">
                <small>
                  Coded by Htin Paw Aye and is available on
                  <a
                    href="https://github.com/htinpawaye/dictionary-app.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    GitHub{" "}
                  </a>
                  and
                  <a
                    href="https://dancing-mandazi-604627.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Netlify.
                  </a>
                </small>
              </footer>{" "}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
