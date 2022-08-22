const Fill = (props) => { 
    return (<fieldset>
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
    </fieldset>);
}
export default Fill; 

