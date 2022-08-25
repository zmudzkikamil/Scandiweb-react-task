import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CartPage from '../../Views/CartPage/CartPage';
import DescriptionPage from '../../Views/DescriptionPage/DescriptionPage';
import ListingPage from '../../Views/ListingPage/ListingPage';
import styles from '../Default/App.module.scss';
import Navigation from './Components/Navigation';
import store from '../../ContextManager/store';
export default class App extends Component {
  state = { category: 'all' };
  changeCategoryHandler = (category) => {
    this.setState((prev) => ({ ...prev, category }));
  };
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navigation state={this.state} changeCategoryHandler={this.changeCategoryHandler} />
          <div className={styles.wrapper}>
            <Switch>
              <Route exact path="/">
                <ListingPage state={this.state} />
              </Route>
              <Route path="/description-page" component={DescriptionPage} />
              <Route path="/cart-page" component={CartPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
