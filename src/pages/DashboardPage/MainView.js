import React from "react";
import { useTranslation } from 'react-i18next';


const MainView = props => {
  const { t } = useTranslation('dashboard');

  return (
    <div>
      <h1>{t('dashboard:main.title')}</h1>
    </div>
  );
};

export default MainView;
