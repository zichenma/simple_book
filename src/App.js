import React, { Component } from 'react';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            {/* dynamic router:  */}
            <Route path='/detail/:id' exact component={Detail}></Route>
            {/* param router: */}
            {/* <Route path='/detail' exact component={Detail}></Route>  */}
            <Route path='/login' exact component={Login}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
