const  Preview = (props) => { 
  const handleReset = (event) => {
    event.preventDefault();
    props.setDataCard({
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    });
  };
  console.log(props);
    return ( <section className="section__preview">
    <article className="card">
      <button className="resetButton js-btnPreview" onClick={handleReset}>
        <i className="trashIcon fa-solid fa-trash-can"> </i> Reset
      </button>

      <div
        className={`card__container palette
        ${props.dataCardPalette} js-card__container`}
      >
        <div className="card__container--verticalBorder">
          <h2 className="card__container--name js-namePreview">
            {props.dataCardName || `Nombre y Apellidos`}
          </h2>
          <p className="card__container--paragraph js-positionPreview">
            { props.dataCardJob|| `Front-end developer`}
          </p>
        </div>
        <div
          className="card__container--image js-imgPreview js__profile-preview"
          // style= { {backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTil9_c3PpcUTAx2vmHH6srdREmI1X8474m3Q&usqp=CAU')", backgroundSize: "cover"}}
        ></div>
        <nav>
          <ul className="card__container--list">
            <li className="list__elements ">
              <a
                target="blank"
                href={`tel:${ props.dataCardPhone}`}
                className="js_link_phone"
              >
                <i className="card__rrss fa-solid fa-mobile-screen-button js-iconPreview"></i>
              </a>
            </li>
            <li className="list__elements">
              <a
                target="blank"
                href={`mailto:${props.dataCardEmail}`}
                className="js_link_email"
              >
                <i className="fa-solid fa-envelope card__rrss js-iconPreview"></i>
              </a>
            </li>
            <li className="list__elements">
              <a
                target="blank"
                href={`https://www.linkedin.com/in/${props.dataCardLinkedin} `}
                className="js_link_linkedin"
              >
                <i className="card__rrss fa-brands fa-linkedin-in js-iconPreview"></i>
              </a>
            </li>
            <li className="list__elements">
              <a
                target="blank"
                href={`https://github.com/${props.dataCardGithub}`}
                className="js_link_github"
              >
                <i className="card__rrss fa-brands fa-github-alt js-iconPreview"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </article>
  </section>);
}
export default Preview; 

