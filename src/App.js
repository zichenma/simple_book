import React, { Component } from 'react';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      // Provider 只能有一个child
      <Provider store={store}>
       <div>
        <Header />
        {/* BrowserRouter 只能有一个child */}
        <BrowserRouter>
          <div>
            {/* exact 标明只有路径完全相符的情况下才匹配 */}
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
       </div>
      </Provider>
    );
  }
}

export default App;
