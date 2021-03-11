import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const API_KEY = '0345b657bfbf8b19c3f43d002bf2cb2f';
const Weather = ({city}) => {
  const [t, i18n] = useTranslation();
  const [weather, setWeather] = useState(0);
  useEffect(() => {
    const getWeather = async () => {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const data = await api_url.json();
      setWeather(Math.ceil(+data.main.temp - 273));
      console.log('🔥', {data})
    };
    getWeather();
  }, []);

  return (
    <>
      <form>
        <div>{`${t('tempr')} : ${weather}`}</div>
      </form>
    </>
  );
};
export default Weather;
