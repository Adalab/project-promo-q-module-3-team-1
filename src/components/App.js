import logoHeader from '../images/logo-awesome-profile-cards.png';
import logoFooter from '../images/logo-adalab.png';

import '../styles/App.scss';

import { useEffect, useState } from 'react';
import SendToApi from '../services/SendToApi';
import localStorage from '../services/localStorage';


import Header from './Header';
import Footer from './Footer';
import Design from './Design';
import Fill from './Fill';
import Share from './Share';
import Preview from './Preview';

function App() {
  const [resultCard, setResultCard] = useState({});
  const [dataCard, setDataCard] = useState({
    palette: '1',
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo:
      'https://www.latimes.com/espanol/vida-y-estilo/articulo/2020-08-08/hoyla-recuento-11-cosas-aman-gatos-top',
  }); 

  useEffect (()=>{ 
    localStorage.set('userData', dataCard) },
    [dataCard]);
    
  
  
  const handleCreatedCard = (event) => {
    event.preventDefault();
    SendToApi(dataCard).then((info) => {
      setResultCard(info);
      console.log(info);
    });
  };
  const handleInput = (event) => {
    const inputValue = event.target.value;
    const inputName = event.target.name;
    setDataCard({
      ...dataCard,
      [inputName]: inputValue,
    });
  };

  

  return (
    <>
      <Header logoHeader={logoHeader} />
      <main className="main__forflex">
        <Preview
        
          dataCardPalette={dataCard.palette}
          dataCardName={dataCard.name}
          dataCardJob={dataCard.job}
          dataCardPhone={dataCard.phone}
          dataCardEmail={dataCard.email}
          dataCardLinkedin={dataCard.linkedin}
          dataCardGithub={dataCard.github}
        />

        <section className="form-section">
          <form className="form js_allInputs" action="#" method="POST">
            <Design />
            <Fill />
            <Share />
          </form>
        </section>
      </main>

      <Footer logoFooter={logoFooter} />
    </>
  );
}

export default App;
