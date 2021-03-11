import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

// const BASE_URL = 'https://api.exchangeratesapi.io/latest';
const API_KEY = 'a0faa2aff26568f7eb65';

const Currensy = ({cur}) => {
    const BASE_URL = `https://free.currconv.com/api/v7/convert?q=EUR_${cur},USD_BYN&compact=ultra&apiKey=`;
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [t, i18n] = useTranslation();

  useEffect(() => {
    fetch(`${BASE_URL}${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions(data.EUR_BYN);
      });
  }, []);
  return (
    <>
      <div className='currency'>
        {`${t('natCurrency')}- ${cur}`}
        <span>`1 EUR: {currencyOptions}`</span>
      </div>
    </>
  );
};

export default Currensy;
