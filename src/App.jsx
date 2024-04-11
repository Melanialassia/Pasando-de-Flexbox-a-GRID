import style from "./App.module.css";

function App() {
  return (
    <div className={style.container}>
      {/* INICIO HEADER */}
      <header className={style.header}>
        <div className={style.logo}>
          <h1> Portfolio</h1>
        </div>
        <nav className={style.menu}>
          <ul>
            <li>
              <a href="#">INICIO</a>
            </li>
            <li>
              <a href="#">PROYECTOS</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">CONTACTO</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* FIN HEADER */}

      {/* INCIO CONTENIDO */}
      <section className={style.content}>
        <aside className={style.lateral}>
          <h2>¿Qué quiere ver?</h2>
          <ul>
            <li>
              <a href="#">Webs</a>
            </li>
            <li>
              <a href="#">Apps</a>
            </li>
            <li>
              <a href="#">Diseños</a>
            </li>
            <li>
              <a href="#">Otros</a>
            </li>
          </ul>
        </aside>
        <div className={style.proyects}>
          <article className={style.proyect}>
            <div className={style.image}>
              <img src="https://via.placeholder.com/250X180" alt="" />
            </div>
            <div className={style.info}>
              <a href="#">Nombre del proyecto</a>
              <p>Sitio web</p>
            </div>
          </article>
          <article className={style.proyect}>
            <div className={style.image}>
              <img src="https://via.placeholder.com/250X180" alt="" />
            </div>
            <div className={style.info}>
              <a href="#">Nombre del proyecto</a>
              <p>Sitio web</p>
            </div>
          </article>
          <article className={style.proyect}>
            <div className={style.image}>
              <img src="https://via.placeholder.com/250X180" alt="" />
            </div>
            <div className={style.info}>
              <a href="#">Nombre del proyecto</a>
              <p>Sitio web</p>
            </div>
          </article>
          <article className={style.proyect}>
            <div className={style.image}>
              <img src="https://via.placeholder.com/250X180" alt="" />
            </div>
            <div className={style.info}>
              <a href="#">Nombre del proyecto</a>
              <p>Sitio web</p>
            </div>
          </article>
          <article className={style.proyect}>
            <div className={style.image}>
              <img src="https://via.placeholder.com/250X180" alt="" />
            </div>
            <div className={style.info}>
              <a href="#">Nombre del proyecto</a>
              <p>Sitio web</p>
            </div>
          </article>
          <article className={style.proyect}>
            <div className={style.image}>
              <img src="https://via.placeholder.com/250X180" alt="" />
            </div>
            <div className={style.info}>
              <a href="#">Nombre del proyecto</a>
              <p>Sitio web</p>
            </div>
          </article>
          <article className={style.proyect}>
            <div className={style.image}>
              <img src="https://via.placeholder.com/250X180" alt="" />
            </div>
            <div className={style.info}>
              <a href="#">Nombre del proyecto</a>
              <p>Sitio web</p>
            </div>
          </article>
          <article className={style.proyect}>
            <div className={style.image}>
              <img src="https://via.placeholder.com/250X180" alt="" />
            </div>
            <div className={style.info}>
              <a href="#">Nombre del proyecto</a>
              <p>Sitio web</p>
            </div>
          </article>
          <article className={style.proyect}>
            <div className={style.image}>
              <img src="https://via.placeholder.com/250X180" alt="" />
            </div>
            <div className={style.info}>
              <a href="#">Nombre del proyecto</a>
              <p>Sitio web</p>
            </div>
          </article>
        </div>
      </section>
      {/* FIN CONTENIDO */}

      {/* INCIO FOOTER */}
      <footer className={style.footer}>
        <div className={style.logo}>
          <h1>Portfolio</h1>
        </div>
        <div className={style.info}>
         <p>Máster en CSS - Víctor Robles web &copy;</p>
        </div>
      </footer>
      {/* FIN FOOTER */}
    </div>
  );
}

export default App;
