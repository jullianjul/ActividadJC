
import './App.css'

function App() {

  return (
    <>
      <header>
        <nav className="logo">
          <a href="">XCOMPANY</a>
        </nav>
        <nav className="links">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="contenedortodo">
          <div className="contenedor">
            <div className="texto">
              <div className="contenedortexto">
                <h6>Error 404</h6>
                <h1>Hey Buddy</h1>
                <p className="parrafo">We can't seem to find the page you are looking for</p>
                <button>Go Home</button>
              </div>
            </div>
            <div className="fantasma">
              <img src="./../public/ghost-img.png" className="sipq" alt="virtual" />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <h5>(554)987-654 | info@company.com</h5>
      </footer>
    </>
  );
}

export default App
