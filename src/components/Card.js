import Header from './Header';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Preview from './Preview';

const Card = (props) => {
  return (
    <>
      <Header logo={props.logo} />

      <main className="main__forflex">
        <Preview handleReset={props.handleReset} dataCard={props.dataCard} />

        <section className="form-section">
          <form className="form" action="#" method="POST">
            <Design handleInput={props.handleInput} dataCard={props.dataCard}    isCollapsed = {props.isCollapsed}
              setIsCollapsed = {props.setIsCollapsed }   />
            <Fill
              handleInput={props.handleInput}
              dataCard={props.dataCard}
              avatar={props.avatar}
              updateAvatar={props.updateAvatar}
            />
            <Share
              handleCreatedCard={props.handleCreatedCard}
              resultCard={props.resultCard}
            />
          </form>
        </section>
      </main>
    </>
  );
};
export default Card;
