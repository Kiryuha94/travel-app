import React, { useState } from 'react';
import { render } from 'react-dom';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const UniversalCarousel = (props) => {
  const [t, i18n] = useTranslation();
  const { setCountryItem, setCountryFooter } = props;
  const items = [
    {
      src: '/media/img/Belarus/Minsk.jpg',
      altText: 'Belarus',
      caption: t('caption.bel'),
      information: t('mainInf.bel'),
    },
    {
      src: '/media/img/Poland/poland.jpeg',
      altText: 'Poland',
      caption: t('caption.pl'),
      information: t('mainInf.pl'),
    },

    {
      src: '/media/img/Ukraine/Ukraine.jpg',
      altText: 'Ukraine',
      caption: t('caption.ukr'),
      information: t('mainInf.ukr'),
    },
    {
      src: '/media/img/Russia/Moscow.jpg',
      altText: 'Russia',
      caption: t('caption.ru'),
      information: t('mainInf.ru'),
    },
    {
      src: '/media/img/France/France.jpg',
      altText: 'France',
      caption: t('caption.fr'),
      information: t('mainInf.fr'),
    },
    {
      src: '/media/img/Nederland/Nederland.jpg',
      altText: 'The Netherlands',
      caption: t('caption.nl'),
      information: t('mainInf.nl'),
    },
    {
      src: '/media/img/Czech/prage.jpg',
      altText: 'The Czech Republic',
      caption: t('caption.cz'),
      information: t('mainInf.cz'),
    },
    {
      src: '/media/img/New Zealand/New Zealand.jpg',
      altText: 'New Zealand',
      caption: t('caption.nz'),
      information: t('mainInf.nz'),
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={`${item.src}${item.caption}`}>
        <div
          className="carousel1"
          onClick={() => {
            props.history.push('/country');
            setCountryItem({
              header: 'USA',
              // body: '/media/img/New Zealand/New Zealand.jpg',
            });
          }}>
          <img src={item.src} alt={item.altText} />
        </div>
        <CarouselCaption className="info-contry" captionText={''} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel  className='aaa'  activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />

      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default UniversalCarousel;
