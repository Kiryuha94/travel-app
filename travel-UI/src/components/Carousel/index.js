import { connect } from 'react-redux';
import Carousel from './Carousel';
import {  setCountry } from 'actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = {
  setCountry,
  // setCountryFooter
};

export default connect(null, mapDispatchToProps)(withRouter(Carousel));
