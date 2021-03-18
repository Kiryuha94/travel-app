import { withTranslation } from 'react-i18next';
import Main from './Main';
import { connect } from 'react-redux';
import { setCountry } from 'actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ main }) => ({
  search: main.search
});

const mapDispatchToProps = {
  setCountry
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withRouter(Main)));
