import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Country from './Country';
import { setCountry } from 'actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = {
  setCountry,
};

const mapStateToProps = ({ main }) => ({
  country: main.country || {},
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withRouter(Country)));
// 