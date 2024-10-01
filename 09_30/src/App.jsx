import "./App.css";

function App() {
  return (
    <div className="site">
      <header className="cabecalho">
        <nav className="container navbar navbar-expand-lg">
          <div>
            <span className="navbar-brand">Logo</span>
          </div>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link menu_link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link menu_link" href="#">
                Sobre nós
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link menu_link" href="#">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="conteudo mt-3 container">
          <div className="row">
            <div className="conteudos col-10">
              <h2>Produtos</h2>
              <div className="container produto p-4">
                <h3>Batom</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur dipisicing elit. A esse
                  quas ipsam tempora iusto nesciunt fuga voluptate, facere id
                  ut, ullam laborum possimus porro. Et unde esse ut! Accusamus,
                  commodi?
                </p>
                <button className="btn btn-warning me-2">Favoritar</button>
                <button className="btn btn-success">Comprar</button>
              </div>
              <div className="container produto p-4">
                <h3>Sombra</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur dipisicing elit. A esse
                  quas ipsam tempora iusto nesciunt fuga voluptate, facere id
                  ut, ullam laborum possimus porro. Et unde esse ut! Accusamus,
                  commodi?
                </p>
                <button className="btn btn-warning me-2">Favoritar</button>
                <button className="btn btn-success">Comprar</button>
              </div>
            </div>
            <aside className="col-2">
              <h4>Perfumaria</h4>
              <ol className="list-group list-group-numbered">
                <li className="list-group-item">Sabonetes<span className="badge text-bg-primary rounded-pill">3</span></li>
                <li className="list-group-item">Body Splash<span className="badge text-bg-primary rounded-pill">10</span></li>
                <li className="list-group-item">Vela aromatizante<span className="badge text-bg-primary rounded-pill">1</span></li>
                <li className="list-group-item">Colonia<span className="badge text-bg-primary rounded-pill">7</span></li>
              </ol>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
