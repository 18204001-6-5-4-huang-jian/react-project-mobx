import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
//引入组件
import Login from './components/Login'
import Home from './components/Home'
import Detail from './components/Detail'
import Hierarchy from './components/Hierarchy'
import Dashboard from './components/Dashboard'
import Errorpage from './components/Errorpage'
import { Provider } from 'mobx-react'
//从Stores中引入
import abcStore from './stores'
// 初始化store实例
const stores = new abcStore()
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider {...stores}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/hierarchy" component={Hierarchy} />
            <Route path="/dashboard" component={Dashboard} />
            <Route  component={Errorpage} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;
