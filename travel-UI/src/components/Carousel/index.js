import { connect } from 'react-redux';
import Carousel from './Carousel';
import {  setCountryItem } from 'actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = {
  setCountryItem,
  // setCountryFooter
};

export default connect(null, mapDispatchToProps)(withRouter(Carousel));
