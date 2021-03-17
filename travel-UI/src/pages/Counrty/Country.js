import { setCountry } from 'actions';
import React, { Component } from 'react';
import { render } from 'react-dom/cjs/react-dom.development';
import bel from '../../constants/countresJSON/bel.json';
import ru from '../../constants/countresJSON/ru.json';
import ukr from '../../constants/countresJSON/ukr.json';
import pl from '../../constants/countresJSON/pl.json';
import fr from '../../constants/countresJSON/fr.json';
import nl from '../../constants/countresJSON/nl.json';
import nz from '../../constants/countresJSON/nz.json';
import cz from '../../constants/countresJSON/cz.json';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';

import {
  Card,
  CardTitle,
  CardBody,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardText,
} from 'reactstrap';
import Weather from 'components/Weather/Weather';
import Currensy from 'components/Currensy/Currensy';
import GMap from 'components/Map';

const countres = [bel, ru, ukr, pl, cz, nl, nz, fr];

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropBut: false,
    };

    this.countryJSON = countres.filter((el) => {
      return el.id === this.props.country.country;
    });

    this.images = [
      {
        original: this.countryJSON[0].siderIt1,
        thumbnail: this.countryJSON[0].siderIt1,
      },
      {
        original: this.countryJSON[0].siderIt2,
        thumbnail: this.countryJSON[0].siderIt2,
      },
      {
        original: this.countryJSON[0].siderIt3,
        thumbnail: this.countryJSON[0].siderIt3,
      },
      {
        original: this.countryJSON[0].siderIt4,
        thumbnail: this.countryJSON[0].siderIt4,
      },
      {
        original: this.countryJSON[0].siderIt5,
        thumbnail: this.countryJSON[0].siderIt5,
      },
      {
        original: this.countryJSON[0].siderIt6,
        thumbnail: this.countryJSON[0].siderIt6,
      },
    ];
  }

  toggle = () => {
    const { isDropBut } = this.state;
    this.setState({ isDropBut: !isDropBut });
  };

  changeLanguage = (lng) => {
    this.props.i18n.changeLanguage(lng);
  };

  render() {
    const { t, i18n, country } = this.props;
    const curCountry = country.country;
    const { isDropBut } = this.state;
    return (
      <div
        style={{
          backgroundImage: `url(${this.countryJSON[0].bgPage})`,
        }}
        className="wrapper-country ">
        <header className="header-country ">
          <CardTitle className="title-country">{t('title')}</CardTitle>
          <Link to="/">
            <img className="label" src="media/img/label.png" alt="label"></img>
          </Link>
          <Card className="d-flex flex-row bg-transparent border-0">
            <ButtonDropdown isOpen={isDropBut} toggle={this.toggle}>
              <DropdownToggle caret>{t('buttonChouseLang')}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => this.changeLanguage('en')}>English</DropdownItem>
                <DropdownItem onClick={() => this.changeLanguage('ru')}>Русский</DropdownItem>
                <DropdownItem onClick={() => this.changeLanguage('de')}>Deutsch</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </Card>
        </header>
        <CardBody>
          <CardTitle className="country">{t(`caption.${curCountry}`)}</CardTitle>
          <CardTitle className="capital">
            {t('capitalText')}
            {t(`capitals.${curCountry}`)}
          </CardTitle>
          <CardText>{t(`mainInf.${curCountry}`)}</CardText>
          <div className="api-map">
            <div className="api-information">
              <Weather city={t(`capitals.${curCountry}`)} />
              <Currensy cur={this.countryJSON[0].cur} />
            </div>
            <div className="map">
              <GMap coordinate={this.countryJSON[0].coordinate} />
            </div>
          </div>
          <div className="media">
            <ImageGallery items={this.images} />
            <div className="player">
              <iframe width="100%" height="400" src={this.countryJSON[0].video}></iframe>
            </div>
          </div>
        </CardBody>
      </div>
    );
  }
}
export default Country;
