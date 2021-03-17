import React, { useState } from 'react';
import { render } from 'react-dom';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const UniversalCarousel = (props) => {
  const [t, i18n] = useTranslation();
  const { setCountry } = props;
  const items = [
    {
      src: '/media/img/Belarus/Minsk.jpg',
      altText: 'bel',
      caption: t('caption.bel'),
      information: t('capitals.bel'),
    },
    {
      src: '/media/img/Poland/poland.jpeg',
      altText: 'pl',
      caption: t('caption.pl'),
      information: t('capitals.pl'),
    },

    {
      src: '/media/img/Ukraine/Ukraine.jpg',
      altText: 'ukr',
      caption: t('caption.ukr'),
      information: t('capitals.ukr'),
    },
    {
      src: '/media/img/Russia/Moscow.jpg',
      altText: 'ru',
      caption: t('caption.ru'),
      information: t('capitals.ru'),
    },
    {
      src: '/media/img/France/France.jpg',
      altText: 'fr',
      caption: t('caption.fr'),
      information: t('capitals.fr'),
    },
    {
      src: '/media/img/Nederland/Nederland.jpg',
      altText: 'nl',
      caption: t('caption.nl'),
      information: t('capitals.nl'),
    },
    {
      src: '/media/img/Czech/prage.jpg',
      altText: 'cz',
      caption: t('caption.cz'),
      information: t('capitals.cz'),
    },
    {
      src: '/media/img/New Zealand/New Zealand.jpg',
      altText: 'nz',
      caption: t('caption.nz'),
      information: t('capitals.nz'),
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  
  const chouseCountry = (e) => {
    const currCountry = e.target.alt;
   setCountry({
     country: currCountry,
   });
  };
  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={`${item.src}${item.caption}`}>
        <div
          id="carousel"
          onClick={(e) => {
            props.history.push('/country');
            chouseCountry(e);
          }}>
          <img src={item.src} alt={item.altText} />
        </div>
        <CarouselCaption className="d-block info-country" captionText={item.information} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel className="aaa" activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />

      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default UniversalCarousel;
