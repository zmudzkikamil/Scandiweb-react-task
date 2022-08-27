import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CartPage from '../../Views/CartPage/CartPage';
import DescriptionPage from '../../Views/DescriptionPage/DescriptionPage';
import ListingPage from '../../Views/ListingPage/ListingPage';
import styles from '../Default/App.module.scss';
import Navigation from './Components/Navigation';
import store from '../../ContextManager/store';
import NotFound from '../../Shared/Components/NotFound';
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navigation />
          <main className={styles.wrapper}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/all" />
              </Route>
              <Route exact path="/cart" component={CartPage} />
              <Route exact path="/:category" component={ListingPage} />
              <Route exact path="/product/:id" component={DescriptionPage} />
              <Route path="*" component={NotFound} />
            </Switch>
          </main>
        </Router>
      </Provider>
    );
  }
}
export default App;
