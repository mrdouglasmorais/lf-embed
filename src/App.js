import './App.css';

function App() {
  const logo = `https://lf-embed.vercel.app/logo.svg`;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Entendeu agora Otávio?
        </p>
        <a
          className="App-link"
          href="https://www4.lifetimepc.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acesse a lifetime e saiba mais
        </a>
      </header>
    </div>
  );
}

export default App;
