import { setCountryFooter } from 'actions';
import React, { Component } from 'react';
import { render } from 'react-dom/cjs/react-dom.development';
import bel from '../../components/countresJSON/belarus.json'
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
} from 'reactstrap';
import Weather from 'components/Weather/Weather';
import Currensy from 'components/Currensy/Currensy';
class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="wrapper-country">
        <CardHeader>{bel.name}</CardHeader>
        <CardBody>
          <Weather city={`${bel.name}`} />
          <Currensy cur={bel.cur}/>
        </CardBody>
        <CardFooter></CardFooter>
      </div>
    );
  }
}
export default Country;
