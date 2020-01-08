import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '@/redux/store/configureStore';
// 前端路由
import IRouter from '@/router/index';

export default class App extends React.Component {
  render() {
    const store = configureStore();
    
    return (
      <Provider store={store}>
        <IRouter>
          <div className="App">
            {this.props.children}
          </div>
        </IRouter>
      </Provider>
    );
  }
}
