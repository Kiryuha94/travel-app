import Main from 'pages/Main';
import Country from 'pages/Counrty';
import ROUTES from 'constants/routes';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.MAIN}>
          <Main />
        </Route>
        <Route path={ROUTES.COUNTRY}>
          <Country />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
