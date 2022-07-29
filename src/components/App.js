import logoHeader from '../images/logo-awesome-profile-cards.png';
import logoFooter from '../images/logo-adalab.png';

import '../styles/App.scss';

import { useState } from 'react';

function App () {

  const [dataCard, setDataCard] = useState({
    palette: "1",
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });

  const handleInput = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    setDataCard({
      ...dataCard,
      [inputName]: inputValue
    })
  }

  const handleReset = (event) => {
    event.preventDefault();
    setDataCard({
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    })
  }


  return (
    <>
      <header>
        <img
          className="header__img"
          src={logoHeader}
          alt="imagen logo"
          title="logo"
        />
      </header>
      <main className="main__forflex">
        <section className="section__preview">
          <article className="card">

            <button className="resetButton js-btnPreview" onClick={handleReset}>
              <i className="trashIcon fa-solid fa-trash-can"> </i> Reset
            </button>

            <div className={`card__container palette${dataCard.palette} js-card__container`}>
              <div className="card__container--verticalBorder">
                <h2 className="card__container--name js-namePreview">
                  {dataCard.name || `Nombre y Apellidos`}
                </h2>
                <p className="card__container--paragraph js-positionPreview">
                  {dataCard.job || `Front-end developer`}
                </p>
              </div>
              <div
                className="card__container--image js-imgPreview js__profile-preview"
              // style= { {backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTil9_c3PpcUTAx2vmHH6srdREmI1X8474m3Q&usqp=CAU')", backgroundSize: "cover"}}
              ></div>
              <nav>
                <ul className="card__container--list">
                  <li className="list__elements ">
                    <a target="blank" href={`tel:${dataCard.phone}`} className="js_link_phone">
                      <i className="card__rrss fa-solid fa-mobile-screen-button js-iconPreview"></i>
                    </a>
                  </li>
                  <li className="list__elements">
                    <a target="blank" href={`mailto:${dataCard.email}`} className="js_link_email">
                      <i className="fa-solid fa-envelope card__rrss js-iconPreview"></i>
                    </a>
                  </li>
                  <li className="list__elements">
                    <a target="blank" href={dataCard.linkedin} className="js_link_linkedin">
                      <i className="card__rrss fa-brands fa-linkedin-in js-iconPreview"></i>
                    </a>
                  </li>
                  <li className="list__elements">
                    <a target="blank" href={dataCard.github} className="js_link_github">
                      <i className="card__rrss fa-brands fa-github-alt js-iconPreview"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </article>
        </section>

        <section className="form-section">
          <form className="form js_allInputs" action="#" method="POST">
            <fieldset>
              <div className="fill">
                <legend className="fill__title js__design">
                  <i className="fa-solid fa-object-ungroup design-icon"></i>
                  <span className="fill__title--text js__title_design">
                    Diseña
                  </span>
                  <i className="fa-solid fa-angle-up js_arrowDesign"></i>
                </legend>
              </div>
              <section className="design-form js-sectionDesign">
                <legend className="color">Colores</legend>
                <div className="election">
                  <label className="options" htmlFor="colors1">
                    <input
                      className="js-palette js-palette1 design-radio"
                      id="colors1"
                      type="radio"
                      value="1"
                      name="palette"
                      checked={dataCard.palette === "1"}
                      onChange={handleInput}
                    />
                    <div className="palette-rectangle">
                      <div className="rectangle color1"></div>
                      <div className="rectangle color2"></div>
                      <div className="rectangle color3"></div>
                    </div>
                  </label>

                  <label className="options" htmlFor="colors2">
                    <input
                      className="js-palette  js-palette2 design-radio"
                      id="colors2"
                      type="radio"
                      value="2"
                      name="palette"
                      checked={dataCard.palette === "2"}
                      onChange={handleInput}
                    />
                    <div className="palette-rectangle">
                      <div className="rectangle color4"></div>
                      <div className="rectangle color5"></div>
                      <div className="rectangle color6"></div>
                    </div>
                  </label>

                  <label className="options" htmlFor="colors3">
                    <input
                      className="js-palette js-palette3 design-radio"
                      id="colors3"
                      type="radio"
                      value="3"
                      name="palette"
                      checked={dataCard.palette === "3"}
                      onChange={handleInput}
                    />
                    <div className="palette-rectangle">
                      <div className="rectangle color7"></div>
                      <div className="rectangle color8"></div>
                      <div className="rectangle color9"></div>
                    </div>
                  </label>
                </div>
              </section>
            </fieldset>

            <fieldset>
              <section className="fill line">
                <legend className="fill__title js__fill">
                  <i className="keyboard fa-solid fa-keyboard"></i>
                  <span className="fill__title--text js__title_fill">
                    Rellena
                  </span>
                  <i className="fa-solid fa-angle-up js_arrowFill"></i>
                </legend>
              </section>
              <section className="fillform js-sectionFill">
                <label className="fillform__label" htmlFor="name">
                  Nombre Completo
                </label>
                <input
                  className="fillform__input js-inputName"
                  placeholder="Ej: Sally Jill"
                  id="name"
                  type="text"
                  name="name"
                  value={dataCard.name}
                  onChange={handleInput}
                />
                <label className="fillform__label" htmlFor="job">
                  Puesto
                </label>
                <input
                  className="fillform__input js-inputPosition"
                  placeholder="Ej: Front-end unicorn"
                  id="job"
                  type="text"
                  name="job"
                  value={dataCard.job}
                  onChange={handleInput}
                />
                <label className="fillform__label" htmlFor="profile_image">
                  Imagen de perfil
                </label>
                <div className="fillform__image">
                  <label
                    className="fillform__image--button js-addImage"
                    htmlFor="photo"
                  >
                    Añadir imagen
                  </label>
                  <input
                    className="hidden js__profile-upload-btn"
                    type="file"
                    name="photo"
                    id="photo"
                  />
                  <div className="fillform__image--square js__profile-image"></div>
                </div>
                <label className="fillform__label" htmlFor="email">
                  Email
                </label>
                <input
                  className="fillform__input js-inputEmail"
                  placeholder="Ej: sally.hill@gmail.com"
                  type="email"
                  id="email"
                  name="email"
                  value={dataCard.email}
                  onChange={handleInput}
                />
                <label className="fillform__label" htmlFor="phone">
                  Teléfono
                </label>
                <input
                  className="fillform__input js-inputPhone"
                  placeholder="Ej: 555-55-55-55"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={dataCard.phone}
                  onChange={handleInput}
                />
                <label className="fillform__label" htmlFor="linkedin">
                  LinkedIn
                </label>
                <input
                  className="fillform__input js-inputLinkedin"
                  placeholder="Ej: linkedin.com/in/sally.hill"
                  type="text"
                  name="linkedin"
                  value={dataCard.linkedin}
                  onChange={handleInput}
                />
                <label className="fillform__label" htmlFor="github">
                  Github
                </label>
                <input
                  className="fillform__input js-inputGithub"
                  placeholder="Ej: @sally-hill"
                  type="text"
                  name="github"
                  value={dataCard.github}
                  onChange={handleInput}
                />
              </section>
            </fieldset>

            <fieldset>
              <div className="share">
                <legend className="share__title js__share">
                  <i className="fa-solid fa-share-nodes share-icon"></i>
                  <span className="fill__title--text js__title_share">
                    Comparte
                  </span>
                  <i className="share-arrow fa-solid fa-angle-up js_arrowShare"></i>
                </legend>
                <div className="buttondiv js__content_shareOne">
                  <button className="buttondiv-share js-btnShare">
                    <i className="share-card fa-solid fa-address-card"></i>{' '}
                    Crear tarjeta
                  </button>
                </div>
                <div className="buttontwitter js__content-shareTwo">
                  <h6 className="buttontwitter-h6 js-messageCard">
                    La tarjeta ha sido creada:
                  </h6>
                  <a
                    target="_blank"
                    href=""
                    className="buttontwitter-paragraph js-section-url"
                  ></a>

                  <a
                    target="_blank"
                    href=""
                    className="js-twitter-link buttontwitter-button"
                  >
                    <i className="fa-brands fa-twitter share-in-twitter"></i>
                    Compartir en Twitter
                  </a>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-title">Awesome profile-cards &#169;2022</p>
        <img
          src={logoFooter}
          alt="logo Adalab"
          title="logo Adalab"
          className="adalab-img"
        />
      </footer>
    </>
  );
}

export default App;
