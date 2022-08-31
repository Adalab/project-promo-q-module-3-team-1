import logoHeader from '../images/logo-git-brunch.png';

import '../styles/App.scss';

import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SendToApi from '../services/SendToApi';
import localStorage from '../services/localStorage';

import Footer from './Footer';
import Card from './Card';
import Landing from './Landing';

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
    photo: '',
  });

  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

  useEffect(() => {
    localStorage.set('userData', dataCard);
  }, [dataCard]);

  const handleCreatedCard = () => {
    SendToApi(dataCard).then((info) => {
      setResultCard(info);
    });
  };
  const handleInput = (data) => {
    const inputValue = data.value;
    const inputName = data.name;
    setDataCard({
      ...dataCard,
      [inputName]: inputValue,
    });
  };

  const handleReset = (event) => {
    event.preventDefault();
    setDataCard({
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
      photo: '',
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/card"
          element={
            <Card
              logoHeader={logoHeader}
              resultCard={resultCard}
              handleCreatedCard={handleCreatedCard}
              handleInput={handleInput}
              dataCard={dataCard}
              handleReset={handleReset}
              avatar={avatar}
              updateAvatar={updateAvatar}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
