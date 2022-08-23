const Share = (props) => { 
    return ( <fieldset>
      <div className="share">
        <legend className="share__title js__share">
          <i className="fa-solid fa-share-nodes share-icon"></i>
          <span className="fill__title--text js__title_share">
            Comparte
          </span>
          <i className="share-arrow fa-solid fa-angle-up js_arrowShare"></i>
        </legend>
        <div className="buttondiv js__content_shareOne">
          <button
            onClick={props.handleCreatedCard}
            className="buttondiv-share js-btnShare"
          >
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
            href='{props.resultCard.cardURL}'
            className="buttontwitter-paragraph js-section-url"
          >
            {' '}
            {props.resultCard.cardURL}
          </a>

          <a
            target="_blank"
            href="./"
            className="js-twitter-link buttontwitter-button"
          >
            <i className="fa-brands fa-twitter share-in-twitter"></i>
            Compartir en Twitter
          </a>
        </div>
      </div>
    </fieldset>);
}
export default Share; 

