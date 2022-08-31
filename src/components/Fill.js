import '../styles/Fill.scss';
import GetAvatar from './GetAvatar';

const Fill = (props) => {
  const handleInput = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    props.handleInput({ value: inputValue, name: inputName });
  };

  return (
    <fieldset>
      <section className="fill line">
        <legend className="fill__title js__fill">
          <i className="keyboard fa-solid fa-keyboard"></i>
          <span className="fill__title--text js__title_fill">Rellena</span>
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
          value={props.dataCard.name}
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
          value={props.dataCard.job}
          onChange={handleInput}
        />
        <label className="fillform__label" htmlFor="profile_image">
          Imagen de perfil
        </label>

        <GetAvatar avatar={props.avatar} updateAvatar={props.updateAvatar} />

        <label className="fillform__label" htmlFor="email">
          Email
        </label>
        <input
          className="fillform__input js-inputEmail"
          placeholder="Ej: sally.hill@gmail.com"
          type="email"
          id="email"
          name="email"
          value={props.dataCard.email}
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
          value={props.dataCard.phone}
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
          value={props.dataCard.linkedin}
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
          value={props.dataCard.github}
          onChange={handleInput}
        />
      </section>
    </fieldset>
  );
};
export default Fill;
