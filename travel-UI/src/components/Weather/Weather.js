import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const API_KEY = '0345b657bfbf8b19c3f43d002bf2cb2f';
const Weather = ({ city }) => {
  const [t, i18n] = useTranslation();
  const [weather, setWeather] = useState(0);
  const [date, setDate] = useState(new Date().toLocaleTimeString('Loading'));
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const getWeather = async () => {
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const data = await api_url.json();
      setWeather(Math.ceil(+data.main.temp - 273));
      const getDate = () => {
        const date = new Date();
        const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
        const timeZone = data.timezone / 3600;
        const curTime = new Date(utcTime + 3600000 * timeZone);
        setDate(
          `${curTime.getDate() < 10 ? `0${curTime.getDate()}` : `${curTime.getDate()}`} : ${
            curTime.getMonth() + 1 < 10 ? `0${curTime.getMonth() + 1}` : `${curTime.getMonth() + 1}`
          }`
        );
        setTime(
          `${curTime.getHours() < 10 ? `0${curTime.getHours()}` : `${curTime.getHours()}`} : ${
            curTime.getMinutes() < 10 ? `0${curTime.getMinutes()}` : `${curTime.getMinutes()}`
          }`
        );
        setInterval(() => getDate(), 1000);
      };
      getDate();
    };
    getWeather();
  }, []);
  return (
    <>
      <form>
        <div>{`${t('tempr')} : ${weather}℃`}</div>
        <div>{`${t('date')}  ${date}`}</div>
        <div>{`${t('time')}  ${time}`}</div>
      </form>
    </>
  );
};
export default Weather;
