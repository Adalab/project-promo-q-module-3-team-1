import logoHeader from '../images/logo-git-brunch.png';
import logoFooter from '../images/logo-adalab.png';

import '../styles/App.scss';

import { useEffect, useState } from 'react';
import SendToApi from '../services/SendToApi';
import localStorage from '../services/localStorage';

import Card from './Card';


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
    photo:'',
  }); 

  const [avatar, setAvatar] = useState('');
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  };

  useEffect (()=>{ 
    localStorage.set('userData', dataCard) },
    [dataCard]);
    
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
      photo:'',
    });
  };

  return (
    <Card logoHeader={logoHeader} resultCard={resultCard} handleCreatedCard={handleCreatedCard} handleInput={handleInput} dataCard={dataCard} handleReset={handleReset} logoFooter={logoFooter} avatar={avatar} updateAvatar={updateAvatar}/>
  );
}

export default App;
