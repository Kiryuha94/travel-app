import { setCountryFooter } from 'actions';
import React, { Component } from 'react';
import { render } from 'react-dom/cjs/react-dom.development';
import bel from '../../components/countresJSON/belarus.json'
import ImageGallery from 'react-image-gallery';
import { Player } from 'video-react';

import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  CardImg,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardText,
} from 'reactstrap';
import Weather from 'components/Weather/Weather';
import Currensy from 'components/Currensy/Currensy';
import GMap from 'components/Map';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },

];
class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropBut: false,
    };
  }
  toggle = () => {
    const { isDropBut } = this.state;
    this.setState({ isDropBut: !isDropBut });
  };

  changeLanguage = (lng) => {
    this.props.i18n.changeLanguage(lng);
  };

  render() {
    const { t, i18n } = this.props;
    const { isDropBut } = this.state;

    return (
      <div className="wrapper-country">
        <CardHeader className="header ">
          <img className="label" src="media/img/label.png" alt="label" />
          <CardTitle tag="h1">{t('title') + this.props.search}</CardTitle>
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
        </CardHeader>
        <CardBody>
          <CardTitle>{bel.name}</CardTitle>
          <CardText>{t('mainInf.bel')}</CardText>
          <Weather city={`${bel.name}`} />
          <Currensy cur={bel.cur} />
          <ImageGallery items={images} />
          <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          <GMap/>
        </CardBody>
        <CardFooter></CardFooter>
      </div>
    );
  }
}
export default Country;
