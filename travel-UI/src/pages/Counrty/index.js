import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Country from './Country';
import { setCountryFooter } from 'actions';
import { withRouter } from 'react-router-dom';

const mapDispatchToProps = {
  setCountryFooter,
};

const mapStateToProps = ({ main }) => ({
  item: main.item || {},
  footer: main.footer || {},
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withRouter(Country)));
// 