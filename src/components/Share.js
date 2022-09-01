import '../styles/Share.scss';

const Share = (props) => {
  const handleCreatedCard = (event) => {
    event.preventDefault();
    props.handleCreatedCard();
    const renderShare = () => {
      return (
        <div className="buttontwitter ">
          <h6 className="buttontwitter-h6 ">
            {props.resultCard.success === true
              ? 'La tarjeta ha sido creada:'
              : '¡Rellena todo el formulario!'}
          </h6>
          <a
            target="_blank"
            href={props.resultCard.cardURL}
            className="buttontwitter-paragraph "
          >
            {props.resultCard.cardURL}
          </a>

          <a
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=Hello%20world%20my%20card&url=${props.resultCard.cardURL}`}
            className=" buttontwitter-button"
          >
            <i className="fa-brands fa-twitter share-in-twitter"></i> Compartir
            en Twitter
          </a>
        </div>)
    }
    renderShare();
  };
  const handleClickRender = () => {

    return (
      <div className="buttondiv" >
        <button onClick={handleCreatedCard}
          className="buttondiv-share ">
          <i className="share-card fa-solid fa-address-card"></i> Crear
          tarjeta
        </button>
      </div >)
  }



  return (
    <fieldset>
      <div className="share">
        <legend className="share__title " onClick={handleClickRender}>
          <i className="fa-solid fa-share-nodes share-icon"></i>
          <span className="fill__title--text ">Comparte</span>
          <i className="share-arrow fa-solid fa-angle-up "></i>
        </legend>

      </div>
    </fieldset>
  );
};
export default Share;
