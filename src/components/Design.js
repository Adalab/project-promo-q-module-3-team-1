const Design  = (props) => { 
    return ( <fieldset>
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
                checked={props.dataCard.palette === '1'}
                onChange={props.handleInput}
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
                checked={props.dataCard.palette === '2'}
                onChange={props.handleInput}
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
                checked={props.dataCard.palette === '3'}
                onChange={props.handleInput}
              />
              <div className="palette-rectangle">
                <div className="rectangle color7"></div>
                <div className="rectangle color8"></div>
                <div className="rectangle color9"></div>
              </div>
            </label>
          </div>
        </section>
      </fieldset>);
}
export default Design; 

