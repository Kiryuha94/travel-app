// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import UniversalCarousel from 'components/Carousel';
import bel from '../../constants/countresJSON/bel.json';
import ru from '../../constants/countresJSON/ru.json';
import ukr from '../../constants/countresJSON/ukr.json';
import pl from '../../constants/countresJSON/pl.json';
import fr from '../../constants/countresJSON/fr.json';
import nl from '../../constants/countresJSON/nl.json';
import nz from '../../constants/countresJSON/nz.json';
import cz from '../../constants/countresJSON/cz.json';
import {
  Button,
  Input,
  CardTitle,
  CardBody,
  CardFooter,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { setCountry } from 'actions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropBut: false,
      filter: '',
      data: [bel, ru, ukr, pl, cz, nl, nz, fr],
    };

    const lng = localStorage.getItem('lng') || 'en'
    console.log('🔥', {lng})
    props.i18n.changeLanguage(lng);
  }

  toggle = () => {
    const { isDropBut } = this.state;
    this.setState({ isDropBut: !isDropBut });
  };

  changeLanguage = (lng) => {
    this.props.i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  };

  hendlSerch = (e) => {
    this.setState({ filter: e.target.value });
  };

  chouseCountry = (el) => {
    const currCountry = el;
    localStorage.setItem('country', el);
    this.props.setCountry({
      country: currCountry,
    });
  };

  render() {
    const { filter, data, isDropBut } = this.state;
    if (filter.length > 1) {
    }
    const filteredData = data.filter((item) => {
      return item.country.toLowerCase().includes(filter.toLowerCase());
    });
    const { t, i18n } = this.props;

    return (
      <div className="position-relative wrapper">
        <header className="header ">
          <img className="label" src="media/img/label.png" alt="label" />
          <CardTitle tag="h1">{t('title')}</CardTitle>
          <div className="serch d-flex flex-row bg-transparent border-0">
            <Input
              autoFocus={true}
              className="w-25 position-relative"
              type="search"
              placeholder="Search the country"
              value={filter}
              onChange={this.hendlSerch}
            />
            {filter.length > 1 && (
              <ul className="filter">
                {filteredData.map((item, index) => (
                  <li key={`${index}${item}`}>{item.country}</li>
                ))}
              </ul>
            )}
            <Button
              onClick={() => {
                const curId = filteredData.map((item) => {
                  return item.id;
                });
                this.chouseCountry(curId[0]);
                this.props.history.push('/country');
              }}>
              {t('buttonSerch')}
            </Button>
            <ButtonDropdown isOpen={isDropBut} toggle={this.toggle}>
              <DropdownToggle className="language" caret>
                {t('buttonChouseLang')}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => this.changeLanguage('en')}>English</DropdownItem>
                <DropdownItem onClick={() => this.changeLanguage('ru')}>Русский</DropdownItem>
                <DropdownItem onClick={() => this.changeLanguage('de')}>Deutsch</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </header>
        <CardBody className="wrapper__body">
          <UniversalCarousel />
        </CardBody>
        <CardFooter className="footer d-flex justify-content-between bg-transparent border-0">
          <span className="year">2021</span>
          <a href="https://rs.school/js/">
            <img className="logo" src="media/img/rs_school_js.svg" />
          </a>
        </CardFooter>
      </div>
    );
  }
}
export default Main;
