import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';
import useInitialState from '../hooks/useInitialState';
import AppContext from '../context/AppContext';

const App = () => {
  const { products } = useInitialState();
  const isEmpty = products.length;

  return (
    <>
      {isEmpty > 0 ? (
        <AppContext.Provider value={products}>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/checkout" component={Checkout} />
                <Route component={NotFound} />
              </Switch>
            </Layout>
          </BrowserRouter>
        </AppContext.Provider>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default App;
