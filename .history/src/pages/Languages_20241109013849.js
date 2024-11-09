import React from 'react';
import { useTranslation } from 'react-i18next';

const Languages = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('sw')}>Swahili</button>
    </div>
  );
};

export default Languages;
