import '../styles/layout/Landing.scss';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main ClassName="main">
      <div ClassName="main__colcen">
        <section ClassName="main__section">
          <img
            ClassName="main__section--img"
            src="./assets/images/logo-awesome-profile-cards.png"
            alt="imagen logo"
            title="logo"
          />
        </section>

        <section ClassName="main__section">
          <h1 ClassName="main__section--title">Crea tu tarjeta de visita</h1>
          <p ClassName="main__section--paragraph">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
        </section>

        <section ClassName="main__section--wrapper">
          <div ClassName="main__icon">
            <i ClassName="fa-solid fa-object-ungroup icon-index-main"></i>
            <p ClassName="main__icon--paragraph">Diseña</p>
          </div>

          <div ClassName="main__icon">
            <i ClassName="fa-solid fa-keyboard icon-index-main"></i>
            <p ClassName="main__icon--paragraph">Rellena</p>
          </div>

          <div ClassName="main__icon">
            <i ClassName="fa-solid fa-share-nodes icon-index-main"></i>
            <p ClassName="main__icon--paragraph">Comparte</p>
          </div>
        </section>

        <section ClassName="main__section main__last">
          <div ClassName="main__link--div">
            <Link className="main__link--link" to="/card">
              Comenzar
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Landing;
