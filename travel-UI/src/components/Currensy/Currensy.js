import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const API_KEY = 'a0faa2aff26568f7eb65';
const Currensy = ({ cur }) => {
  const BASE_URL = `https://free.currconv.com/api/v7/convert?q=EUR_${cur},USD_BYN&compact=ultra&apiKey=`;
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [t, i18n] = useTranslation();

  useEffect(() => {
    fetch(`${BASE_URL}${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const key = `EUR_${cur}`
        setCurrencyOptions(data[key]);
      });
  }, []);
  return (
    <>
      <div className="currency">
        {`${t('natCurrency')}- ${cur}`}
        {cur !== 'EUR' && (
          <span>
            1 EUR: {currencyOptions}
            {cur}
          </span>
        )}
      </div>
    </>
  );
};

export default Currensy;
