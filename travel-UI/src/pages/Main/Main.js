// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import UniversalCarousel from 'components/Carousel';
// import Modal from 'components/Modal/modal'
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
import { Link } from 'react-router-dom';
import { setSearch } from 'actions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropBut: false,
      filter:'',
      countres: 
       [ 'bel', 'pol', 'ukr','ru']
      
    };
    
  }
  
  toggle = () => {
    const { isDropBut } = this.state;
    this.setState({ isDropBut: !isDropBut });
  };
  
  changeLanguage = (lng) => {
    this.props.i18n.changeLanguage(lng);}
    
    
    hendlSerch =(e)=>{
      console.log(e);
     this.setState({ filter: e.target.value });
      
    }

  render() {
    const { isDropBut } = this.state;
    const { t, i18n } = this.props;

    return (
      <div className="position-relative wrapper">
        <header className="header ">
          <img className="label" src="media/img/label.png" alt="label" />
          <CardTitle tag="h1">{t('title')}</CardTitle>
          <div className="d-flex flex-row bg-transparent border-0">
            <Input
              className="w-25"
              type="search"
              placeholder="Search the country"
              onChange={this.hendlSerch}
              // onChange={(e) => {
                //   this.props.setSearch(e.target.value);
                // }}
                />
            <Button onClick={() => {}}>{t('buttonSerch')}</Button>
            <ButtonDropdown isOpen={isDropBut} toggle={this.toggle}>
              <DropdownToggle caret>{t('buttonChouseLang')}</DropdownToggle>
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
